package service;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.text.DecimalFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.TreeMap;
import java.util.TreeSet;
import java.util.stream.Collectors;

import javax.servlet.http.HttpSession;

import org.apache.commons.io.FilenameUtils;
import org.apache.log4j.Logger;
import org.apache.poi.EncryptedDocumentException;
import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import dao.ClientDaoImpl;
import dao.MasterDaoImpl;
import dao.PropertyDaoImpl;
import dao.ServiceOfficerDaoImpl;
import dao.WeightageDaoImpl;
import model.ClientDetails;
import model.Community;
import model.Listings;
import model.MasterValuation;
import model.MasterValuation;
import model.Property;
import model.ServiceOfficer;
import model.SoldTransactions;
import model.Weightage;
import utils.Constants;

@Service
public class MasterService {
	
	@Autowired
	private MasterDaoImpl masterDaoImpl;
	@Autowired
	private MasterValuation masters;
	@Autowired
	private SessionFactory status;
	private static DecimalFormat df = new DecimalFormat("0.00");
	private static DecimalFormat dd = new DecimalFormat("0.00");
	static Logger log = Logger.getLogger(MasterService.class);
	
	@Transactional
	public List<MasterValuation> getMasterList() {
		List<MasterValuation> list=masterDaoImpl.getMasterList();
		return list;
	}
	
	@Transactional
	public MasterValuation getMaster(int masterId) {
		List<MasterValuation> list=masterDaoImpl.getMaster(masterId);
		if(list!=null && !list.isEmpty())
		{
			masters=list.get(0);
		}
		return masters;
	}
	@Transactional
	public void updateMasters(MasterValuation masters) {
		masterDaoImpl.updateMasters(masters);
		
	}
	@Transactional
	public void deleteMasters(int masterId) {
		masterDaoImpl.deleteMasters(masterId);
		
	}
	@Transactional
	public List<MasterValuation> getFilterList(String city, String area, String neighbourhood, String buildingName,
			String bedfrom, String bedto, String landfrom, String landto, String buafrom, String buato,
			String pricefrom, String priceto, String pricesqtfrom, String pricesqtto, String datefrom, String dateto,
			String propList) throws ParseException {
		List<MasterValuation> getlist = masterDaoImpl.getMasters();
		List<MasterValuation> datelist =  getDateList(getlist,datefrom,dateto);
		List<MasterValuation> propertylist = getPropertyList(datelist,propList);
		List<MasterValuation> citylist =  new ArrayList<MasterValuation>();
		List<MasterValuation> subcomlist =  new ArrayList<MasterValuation>();
		List<MasterValuation> comlist =  new ArrayList<MasterValuation>();
		List<MasterValuation> bullist =  new ArrayList<MasterValuation>();
		List<MasterValuation> bedlist = new ArrayList<MasterValuation>();
		List<MasterValuation> landlist = new ArrayList<MasterValuation>();
		List<MasterValuation> bualist = new ArrayList<MasterValuation>();
		List<MasterValuation> pricelist = new ArrayList<MasterValuation>();
		List<MasterValuation> pricesqtlist = new ArrayList<MasterValuation>();
		if(city.equals("")){
			for(MasterValuation trans : propertylist){
				citylist.add(trans);
			}
		}
		else{
			citylist =  getCityList(propertylist,city);
		}
		if(neighbourhood.equals("")){
			for(MasterValuation trans : citylist){
				subcomlist.add(trans);
			}
		}
		else{
			subcomlist =  getSubCommunityList(citylist,neighbourhood);
		}
		if(area.equals("")){
			for(MasterValuation trans : subcomlist){
				comlist.add(trans);
			}
		}
		else{
			comlist =  getCommunityList(subcomlist,area);
		}
		if(buildingName.equals("")){
			for(MasterValuation trans : comlist){
				bullist.add(trans);
			}
		}
		else{
			bullist =  getBulList(comlist,buildingName);
		}
		System.err.println("bullist"+bullist.size());
		if(bedfrom.equals("") && bedto.equals("")){
			for(MasterValuation trans : bullist){
				bedlist.add(trans);
			}
		}
		else{
			bedlist =  getList(bullist,bedfrom,bedto);
		}
		System.err.println("bedlist"+bedlist.size());
		if(landfrom.equals("") && landto.equals("")){
			for(MasterValuation trans : bedlist){
				landlist.add(trans);
			}
		}
		else{
			landlist =  getLandList(bedlist,landfrom,landto);
		}
		System.err.println("landlist"+landlist.size());
		if(buafrom.equals("") && buato.equals("")){
			for(MasterValuation trans : landlist){
				bualist.add(trans);
			}
		}
		else{
			bualist = getBUAList(landlist,buafrom,buato);
		}
		System.err.println("bualist"+bualist.size());
		if(pricefrom.equals("") && priceto.equals("")){
			for(MasterValuation trans : bualist){
				pricelist.add(trans);
			}
		}
		else{
			pricelist = getPriceList(bualist,pricefrom,priceto);
		}
		System.err.println("pricelist"+pricelist.size());
		if(pricesqtfrom.equals("") && pricesqtto.equals("")){
			for(MasterValuation trans : pricelist){
				pricesqtlist.add(trans);
			}
		}
		else{
			pricesqtlist = getPriceSqtList(pricelist,pricesqtfrom,pricesqtto);
		}
		System.err.println("pricesqtlist"+pricesqtlist.size());
		return pricesqtlist;
	}
	private List<MasterValuation> getCommunityList(List<MasterValuation> subcomlist, String area) {
		ArrayList<MasterValuation> filtercomlist = new ArrayList<MasterValuation>();
		for(MasterValuation trans : subcomlist){
			String com = trans.getCommunity();
			if(com.equals(area)){
				filtercomlist.add(trans);
			}
		}
		return filtercomlist;
	}

	private List<MasterValuation> getSubCommunityList(List<MasterValuation> citylist, String neighbourhood) {
		ArrayList<MasterValuation> filtersubcomlist = new ArrayList<MasterValuation>();
		for(MasterValuation trans : citylist){
			String subcom = trans.getSubCommunity();
			if(subcom.equals(neighbourhood)){
				filtersubcomlist.add(trans);
			}
		}
		return filtersubcomlist;
	}

	private List<MasterValuation> getCityList(List<MasterValuation> propertylist, String city) {
		ArrayList<MasterValuation> filtercitylist = new ArrayList<MasterValuation>();
		for(MasterValuation trans : propertylist){
			String cityy = trans.getCity();
			if(cityy.equals(city)){
				filtercitylist.add(trans);
			}
		}
		return filtercitylist;
	}

	private List<MasterValuation> getPriceSqtList(List<MasterValuation> pricelist, String pricesqtfrom, String pricesqtto) {
		ArrayList<MasterValuation> filterpricesqtlist = new ArrayList<MasterValuation>();
		int pricesqf = Integer.parseInt(pricesqtfrom);
		int pricesqt = Integer.parseInt(pricesqtto);
		System.err.println(pricelist.size());
		for(MasterValuation trans : pricelist){
			String pricesq = trans.getMvpersqf();
			pricesq =  pricesq.replaceAll(",", "");
			String ffinal = pricesq.replaceAll("\\s+","");
			int pricesqs = Integer.parseInt(ffinal);
			if(pricesqs >= pricesqf && pricesqs<= pricesqt){
				filterpricesqtlist.add(trans);
			}
		}
		return filterpricesqtlist;
	}
	private List<MasterValuation> getPriceList(List<MasterValuation> bualist, String pricefrom, String priceto) {
		ArrayList<MasterValuation> filterpricelist = new ArrayList<MasterValuation>();
		int pricef = Integer.parseInt(pricefrom);
		int pricet = Integer.parseInt(priceto);
		System.err.println(bualist.size());
		for(MasterValuation trans : bualist){
			String price = trans.getMv();
			price =  price.replaceAll(",", "");
			String ffinal = price.replaceAll("\\s+","");
			if(!ffinal.equals("")){
				int prices = Integer.parseInt(ffinal);
				if(prices >= pricef && prices<= pricet){
					System.err.println(pricef +"" + pricet + "-->" + prices);
					System.err.println("Enter Inside");
					filterpricelist.add(trans);
				}
			}
		}
		return filterpricelist;
	}
	private List<MasterValuation> getBUAList(List<MasterValuation> landlist, String buafrom, String buato) {
		ArrayList<MasterValuation> filterbualist = new ArrayList<MasterValuation>();
		int buaf = Integer.parseInt(buafrom);
		int buat = Integer.parseInt(buato);
		for(MasterValuation trans : landlist){
			String buaSize = trans.getBuapersqf();
			buaSize =  buaSize.replaceAll(",", "");
			String ffinal = buaSize.replaceAll("\\s+","");
			int buas = Integer.parseInt(ffinal);
			if(buas >= buaf && buas<= buat){
				filterbualist.add(trans);
			}
		}
		return filterbualist;
	}
	private List<MasterValuation> getLandList(List<MasterValuation> bedlist, String landfrom, String landto) {
		ArrayList<MasterValuation> filterlandlist = new ArrayList<MasterValuation>();
		int landf = Integer.parseInt(landfrom);
		int landt = Integer.parseInt(landto);
		for(MasterValuation trans : bedlist){
			String landSize = trans.getLandsizepersqf();
			if(!landSize.equals(" - ")){
				landSize =  landSize.replaceAll(",", "");
				String ffinal = landSize.replaceAll("\\s+","");
				int lands = Integer.parseInt(ffinal);
				if(lands >= landf && lands<= landt){
					filterlandlist.add(trans);
				}
			}
			else{
				//
			}
		}
		return filterlandlist;
	}
	private List<MasterValuation> getList(List<MasterValuation> bullist, String bedfrom, String bedto) {
		ArrayList<MasterValuation> filterlist = new ArrayList<MasterValuation>();
		String bedfromno= bedfrom.replaceAll("[^0-9]", "");
	    String bedtono= bedto.replaceAll("[^0-9]", "");
	    int min, max;
	    min = Integer.parseInt(bedfromno);
	    max = Integer.parseInt(bedtono);
    	for(MasterValuation trans : bullist){
    		String roomNo = trans.getNoOfRooms();
    		String roomno= roomNo.replaceAll("[^0-9]", "");
    		int room = Integer.parseInt(roomno);
    		if(room >= min && room<= max){
    			filterlist.add(trans);
    		}
    	}
		return filterlist;
	}
	private List<MasterValuation> getBulList(List<MasterValuation> propertylist, String buildingName) {
		ArrayList<MasterValuation> filterbullist = new ArrayList<MasterValuation>();
		for(MasterValuation trans : propertylist){
			String bulname = trans.getBuilding();
			if(bulname.equals(buildingName)){
				filterbullist.add(trans);
			}
		}
		return filterbullist;
	}
	private List<MasterValuation> getPropertyList(List<MasterValuation> datelist, String propList) {
		ArrayList<MasterValuation> propertylist = new ArrayList<MasterValuation>();
		for(MasterValuation trans : datelist){
			String property = trans.getPropValued();
			if(propList.equals(property)){
				propertylist.add(trans);
			}
		}
		return propertylist;
	}
	private List<MasterValuation> getDateList(List<MasterValuation> list, String datefrom, String dateto) throws ParseException {
		ArrayList<MasterValuation> filterdatelist = new ArrayList<MasterValuation>();
		Date min=new SimpleDateFormat("dd-MMM-yyyy").parse(datefrom);
		Date max=new SimpleDateFormat("dd-MMM-yyyy").parse(dateto);
		for(MasterValuation trans : list){
			String date = trans.getInstructionDate();
			if(!date.equals("cancelled")){
				Date dd=new SimpleDateFormat("dd-MMM-yyyy").parse(date);
				if((dd.after(min) && dd.before(max)) || dd.equals(min) || dd.equals(max)){
					filterdatelist.add(trans);
				}
			}
			else{
				//
			}
		}
		return filterdatelist;
	}
	public String getDateAvg(List<MasterValuation> filterTransaction) {
		String avg = null;
		List<LocalDate> myList = new ArrayList<>();
		if(!filterTransaction.isEmpty()){
			for(MasterValuation st : filterTransaction){
				String ffinal = st.getInstructionDate();
				String aed = ffinal.replaceAll("\\s+","");
				String month = null;
				System.err.println("aedaed.length()"+aed.length());
				if(aed.length() == 11){
					month = aed.substring(3,6);
				}
				else{
					month = aed.substring(2,5);
				}
				if(month.equals("Jan")){
					month = "01";
				}
				if(month.equals("Feb")){
					month = "02";
				}
				if(month.equals("Mar")){
					month = "03";
				}
				if(month.equals("Apr")){
					month = "04";
				}
				if(month.equals("May")){
					month = "05";
				}
				if(month.equals("Jun")){
					month = "06";
				}
				if(month.equals("Jul")){
					month = "07";
				}
				if(month.equals("Aug")){
					month = "08";
				}
				if(month.equals("Sep")){
					month = "09";
				}
				if(month.equals("Oct")){
					month = "10";
				}
				if(month.equals("Nov")){
					month = "11";
				}
				if(month.equals("Dec")){
					month = "12";
				}
				int a = 0;
				int b = 0;
				int c = 0;
				if(aed.length() == 11){
					a = Integer.parseInt(aed.substring(7));
					b = Integer.parseInt(month);
					c = Integer.parseInt(aed.substring(0,2));
				}
				else{
					a = Integer.parseInt(aed.substring(6));
					b = Integer.parseInt(month);
					c = Integer.parseInt(aed.substring(0,1));
				}
				myList.add(LocalDate.of(a, b, c));
			}
		}
		myList.forEach(System.out::println);
		long ave = (long) myList.stream()
		            .mapToLong(x -> x.atStartOfDay(ZoneId.systemDefault()).toInstant().toEpochMilli()).average()
		            .getAsDouble();
		new Date(ave);
		SimpleDateFormat date = new SimpleDateFormat("dd-MMM-yyyy");
		String dd = date.format(ave);
		avg = dd.toString();
		return avg;
	}
	private double calculateAverage(List <Integer> marks) {
		  Integer sum = 0;
		  if(!marks.isEmpty()) {
		    for (Integer mark : marks) {
		        sum += mark;
		    }
		    return sum.doubleValue() / marks.size();
		  }
		  return sum;
		  
	}
	public String getlandAvg(List<MasterValuation> filterTransaction) {
		String avg = " - ";
		ArrayList<Integer> avglist = new ArrayList<Integer>();
		if(!filterTransaction.isEmpty()){
			for(MasterValuation st : filterTransaction){
				String aed = st.getLandsizepersqf();
				
				if(aed.equals(" - ") || aed.equals("")){
					//
				}
				else{
					String ffinal = aed.replaceAll(",", "");
					String fn = ffinal.replaceAll("\\s+","");
					int finaed = Integer.parseInt(fn
							);
					avglist.add(finaed);
				}
			}
			if(!avglist.isEmpty()){
				double finalValue =  calculateAverage(avglist);
				avg = String.valueOf(df.format(finalValue));
			}
			else{
				avg = "0.00";
			}
		}
		return avg;
	}
	public String getpriceAvg(List<MasterValuation> filterTransaction) {
		String avg = null;
		ArrayList<Integer> avglist = new ArrayList<Integer>();
		if(!filterTransaction.isEmpty()){
			for(MasterValuation st : filterTransaction){
				String ffinal = st.getMv();
				String aed = ffinal.replaceAll("\\s+","");
				if(!aed.equals("") && !aed.equals(" - ")){
					String newStr = aed.replaceAll(",", "");
					int finaed = Integer.parseInt(newStr);
					avglist.add(finaed);
				}
			}
		}
		if(avglist.size() > 0){
		double finalValue =  calculateAverage(avglist);
		avg = String.valueOf(df.format(finalValue));
		}
		return avg;
	}
	public String getSizeAvg(List<MasterValuation> filterTransaction) {
		String avg = null;
		ArrayList<Integer> avglist = new ArrayList<Integer>();
		if(!filterTransaction.isEmpty()){
			for(MasterValuation st : filterTransaction){
				String ffinal = st.getBuapersqf();
				String aed = ffinal.replaceAll("\\s+","");
				if(!aed.equals("") && !aed.equals(" - ") ){
					String newStr = aed.replaceAll(",", "");
					int finaed = Integer.parseInt(newStr);
					avglist.add(finaed);
				}
			}
		}
		if(avglist.size() > 0){
		double finalValue =  calculateAverage(avglist);
		avg = String.valueOf(df.format(finalValue));
		}
		return avg;
	}
	public String getpricePerAvg(List<MasterValuation> filterTransaction) {
		String avg = null;
		ArrayList<Integer> avglist = new ArrayList<Integer>();
		if(!filterTransaction.isEmpty()){
			for(MasterValuation st : filterTransaction){
				String ffinal = st.getMvpersqf();
				String aed = ffinal.replaceAll("\\s+","");
				if(!aed.equals(" - ") && !aed.equals("") && !aed.equals("#DIV/0!") && !aed.equals("#VALUE!")){
					String newStr = aed.replaceAll(",", "");
					int finaed = Integer.parseInt(newStr);
					avglist.add(finaed);
				}
			}
		}
		if(avglist.size() > 0){
		double finalValue =  calculateAverage(avglist);
		avg = String.valueOf(df.format(finalValue));
		}
		return avg;
	}
	public String getBedAvg(List<MasterValuation> filterTransaction) {
		String avg = null;
		ArrayList<Integer> avglist = new ArrayList<Integer>();
		if(!filterTransaction.isEmpty()){
			for(MasterValuation st : filterTransaction){
				String loc = st.getNoOfRooms();
				String bed = loc.replaceAll("\\s+","");
				if(!bed.equals(" - ") && !bed.equals("") && !bed.equals("studio")){
					int finaed = Integer.parseInt(bed);
					avglist.add(finaed);
				}
			}
		}
		if(avglist.size() > 0){
		double finalValue =  calculateAverage(avglist);
		avg = String.valueOf(dd.format(finalValue));
		}
		return avg;
	}
	public String getLocationAvg(List<MasterValuation> filterTransaction) {
		String avg = null;
		ArrayList<String> avglist = new ArrayList<String>();
		if(!filterTransaction.isEmpty()){
			for(MasterValuation st : filterTransaction){
				String location = st.getLocationRating();
				if(!location.equals(" - ") && !location.equals("")){
					avglist.add(location);
				}
			}
		}
		if(avglist.size() > 0){
		double finalValue =  calculateAvg(avglist);
		avg = String.valueOf(dd.format(finalValue));
		}
		return avg;
	}
	public String getTenureAvg(List<MasterValuation> filterTransaction) {
		String avg = null;
		ArrayList<String> avglist = new ArrayList<String>();
		if(!filterTransaction.isEmpty()){
			for(MasterValuation st : filterTransaction){
				String tenure = st.getTenure();
				String finall = null;
				if(!tenure.equals(" - ") && !tenure.equals("")){
					if(tenure.equals("FH")){
						finall = "2";
					}
					avglist.add(finall);
				}
			}
		}
		if(avglist.size() > 0){
		double finalValue =  calculateAvg(avglist);
		avg = String.valueOf(dd.format(finalValue));
		}
		return avg;
	}
	private double calculateAvg(ArrayList<String> avglist) {
		double sum = 0;
		 if(!avglist.isEmpty()) {
			for(String arg : avglist){
				   sum += Double.valueOf( arg );
			}
			double average = sum/avglist.size();
			return average;
		 }
		return sum;
	}
	public String getAgeAvg(List<MasterValuation> filterTransaction) {
		String avg = null;
		ArrayList<String> avglist = new ArrayList<String>();
		if(!filterTransaction.isEmpty()){
			for(MasterValuation st : filterTransaction){
				String age = st.getBldgAge();
				if(!age.equals("?") && !age.equals(" - ") && !age.equals("")){
					avglist.add(age);
				}
			}
		}
		if(avglist.size() > 0){
		double finalValue =  calculateAvg(avglist);
		avg = String.valueOf(dd.format(finalValue));
		}
		return avg;
	}
	public String getViewAvg(List<MasterValuation> filterTransaction) {
		String avg = null;
		ArrayList<String> avglist = new ArrayList<String>();
		if(!filterTransaction.isEmpty()){
			for(MasterValuation st : filterTransaction){
				String view = st.getViewRating();
				if(!view.equals(" - ") && !view.equals("")){
					avglist.add(view);
				}
			}
		}
		if(avglist.size() > 0){
			double finalValue =  calculateAvg(avglist);
			avg = String.valueOf(dd.format(finalValue));
		}
		return avg;
	}
	public String getStatusAvg(List<MasterValuation> filterTransaction) {
		String avg = null;
		ArrayList<String> avglist = new ArrayList<String>();
		if(!filterTransaction.isEmpty()){
			for(MasterValuation st : filterTransaction){
				String status = st.getFinishingStatus();
				if(!status.equals(" - ") && !status.equals("")){
					System.err.println("ENENE");
					avglist.add(status);
				}
				else{
					//
				}
			}
		}
		if(avglist.size() > 0){
			double finalValue =  calculateAvg(avglist);
			avg = String.valueOf(dd.format(finalValue));
		}
		else{
			avg = "0.00";
		}
		return avg;
	}
	public String getExposureAvg(List<MasterValuation> filterTransaction) {
		String avg = null;
		ArrayList<String> avglist = new ArrayList<String>();
		if(!filterTransaction.isEmpty()){
			for(MasterValuation st : filterTransaction){
				String exp = st.getPropExposure();
				if(!exp.equals(" - ") && !exp.equals("")){
					avglist.add(exp);
				}
			}
		}
		if(avglist.size() > 0){
		double finalValue =  calculateAvg(avglist);
		avg = String.valueOf(dd.format(finalValue));
		}
		else{
			avg = "0.00";
		}
		return avg;
	}
	public String getPlacementAvg(List<MasterValuation> filterTransaction) {
		String avg = null;
		ArrayList<String> avglist = new ArrayList<String>();
		if(!filterTransaction.isEmpty()){
			for(MasterValuation st : filterTransaction){
				String pla = st.getPropplacement();
				if(!pla.equals(" - ") && !pla.equals("")){
					avglist.add(pla);
				}
			}
		}
		if(avglist.size() > 0){
		double finalValue =  calculateAvg(avglist);
		avg = String.valueOf(dd.format(finalValue));
		}
		else{
			avg = "0.00";
		}
		return avg;
	}
	public String getFloorAvg(List<MasterValuation> filterTransaction) {
		String avg = null;
		ArrayList<Integer> avglist = new ArrayList<Integer>();
		if(!filterTransaction.isEmpty()){
			for(MasterValuation st : filterTransaction){
				String age = st.getFloorNo();
				String fage = age.replaceAll("\\D+","");
				String ffage = fage.replaceAll("\\s+","");
				if(!ffage.equals(" - ") && !ffage.equals("")){
					int finage = Integer.parseInt(ffage);
					avglist.add(finage);
				}
			}
		}
		if(avglist.size() > 0){
		double finalValue =  calculateAverage(avglist);
		avg = String.valueOf(dd.format(finalValue));
		}
		return avg;
	}
	public String getQualityAvg(List<MasterValuation> filterTransaction) {
		String avg = null;
		ArrayList<String> avglist = new ArrayList<String>();
		if(!filterTransaction.isEmpty()){
			for(MasterValuation st : filterTransaction){
				String qua = st.getQualityRating();
				String location = qua.replaceAll("\\s+","");
				if(!location.equals(" - ") && !location.equals("")){
					avglist.add(location);
				}
			}
		}
		if(avglist.size() > 0){
		double finalValue =  calculateAvg(avglist);
		avg = String.valueOf(dd.format(finalValue));
		}
		return avg;
	}
//	public String getUpgradeAvg(List<MasterValuation> filterTransaction) {
//		String avg = null;
//		ArrayList<Integer> avglist = new ArrayList<Integer>();
//		if(!filterTransaction.isEmpty()){
//			for(MasterValuation st : filterTransaction){
//				String age = st.getUpgrades();
//				int finage = Integer.parseInt(age);
//				avglist.add(finage);
//			}
//		}
//		double finalValue =  calculateAverage(avglist);
//		avg = String.valueOf(dd.format(finalValue));
//		return avg;
//	}
//	public String getFurnishedAvg(List<MasterValuation> filterTransaction) {
//		String avg = null;
//		ArrayList<String> avglist = new ArrayList<String>();
//		if(!filterTransaction.isEmpty()){
//			for(MasterValuation st : filterTransaction){
//				String finall = null;
//				String pla = st.getFurnished();
//				if(pla.equals("Yes")){
//					finall = "2";
//				}
//				if(pla.equals("No")){
//					finall = "1";
//				}
//				if(pla.equals("Semi-Furnished")){
//					finall = "1.5";
//				}
//				avglist.add(finall);
//			}
//		}
//		double finalValue =  calculateAvg(avglist);
//		avg = String.valueOf(dd.format(finalValue));
//		return avg;
//	}
//	public String getParkAvg(List<MasterValuation> filterTransaction) {
//		String avg = null;
//		ArrayList<Integer> avglist = new ArrayList<Integer>();
//		if(!filterTransaction.isEmpty()){
//			for(MasterValuation st : filterTransaction){
//				String age = st.getParkingSpace();
//				int finage = Integer.parseInt(age);
//				avglist.add(finage);
//			}
//		}
//		double finalValue =  calculateAverage(avglist);
//		avg = String.valueOf(dd.format(finalValue));
//		return avg;
//	}
//	public String getPoolAvg(List<MasterValuation> filterTransaction) {
//		String avg = null;
//		ArrayList<String> avglist = new ArrayList<String>();
//		if(!filterTransaction.isEmpty()){
//			for(MasterValuation st : filterTransaction){
//				String finall = null;
//				String pla = st.getPool();
//				if(pla.equals("Yes")){
//					finall = "2";
//				}
//				if(pla.equals("No")){
//					finall = "1";
//				}
//				avglist.add(finall);
//			}
//		}
//		double finalValue =  calculateAvg(avglist);
//		avg = String.valueOf(dd.format(finalValue));
//		return avg;
//	}
//	public String getLandScapeAvg(List<MasterValuation> filterTransaction) {
//		String avg = null;
//		ArrayList<String> avglist = new ArrayList<String>();
//		if(!filterTransaction.isEmpty()){
//			for(MasterValuation st : filterTransaction){
//				String finall = null;
//				String pla = st.getLandScape();
//				if(pla.equals("Yes")){
//					finall = "2";
//				}
//				if(pla.equals("No")){
//					finall = "1";
//				}
//				if(pla.equals("Semi-Landscape")){
//					finall = "1.5";
//				}
//				avglist.add(finall);
//			}
//		}
//		double finalValue =  calculateAvg(avglist);
//		avg = String.valueOf(dd.format(finalValue));
//		return avg;
//	}
//	public String getGoodAvg(List<MasterValuation> filterTransaction) {
//		String avg = null;
//		ArrayList<String> avglist = new ArrayList<String>();
//		if(!filterTransaction.isEmpty()){
//			for(MasterValuation st : filterTransaction){
//				String finall = null;
//				String pla = st.getWhiteGoods();
//				if(pla.equals("Yes")){
//					finall = "2";
//				}
//				if(pla.equals("No")){
//					finall = "1";
//				}
//				avglist.add(finall);
//			}
//		}
//		double finalValue =  calculateAvg(avglist);
//		avg = String.valueOf(dd.format(finalValue));
//		return avg;
//	}
//	public String getUtilitiesAvg(List<MasterValuation> filterTransaction) {
//		String avg = null;
//		ArrayList<String> avglist = new ArrayList<String>();
//		if(!filterTransaction.isEmpty()){
//			for(MasterValuation st : filterTransaction){
//				String finall = null;
//				String pla = st.getUtilityConnected();
//				if(pla.equals("Yes")){
//					finall = "2";
//				}
//				if(pla.equals("No")){
//					finall = "1";
//				}
//				avglist.add(finall);
//			}
//		}
//		double finalValue =  calculateAvg(avglist);
//		avg = String.valueOf(dd.format(finalValue));
//		return avg;
//	}
//	public String getBalconyAvg(List<MasterValuation> filterTransaction) {
//		String avg = null;
//		ArrayList<Integer> avglist = new ArrayList<Integer>();
//		if(!filterTransaction.isEmpty()){
//			for(MasterValuation st : filterTransaction){
//				String aed = st.getBalcony();
//				String newStr = aed.replaceAll(",", "");
//				int finaed = Integer.parseInt(newStr);
//				avglist.add(finaed);
//			}
//		}
//		double finalValue =  calculateAverage(avglist);
//		avg = String.valueOf(df.format(finalValue));
//		return avg;
//	}
//	public String getDevmarginAvg(List<MasterValuation> filterTransaction) {
//		String avg = null;
//		ArrayList<String> avglist = new ArrayList<String>();
//		if(!filterTransaction.isEmpty()){
//			for(MasterValuation st : filterTransaction){
//				String finall = null;
//				String pla = st.getDevmargin();
//				if(pla.equals("No")){
//					finall = "2";
//				}
//				if(pla.equals("Yes")){
//					finall = "1";
//				}
//				avglist.add(finall);
//			}
//		}
//		double finalValue =  calculateAvg(avglist);
//		avg = String.valueOf(dd.format(finalValue));
//		return avg;
//	}
	@Transactional
	public List<MasterValuation> getBuildingName() {
		List<MasterValuation> list=masterDaoImpl.getBuildingName();
		return list;
	}
	@Transactional
	public List<MasterValuation> getSubCommunity() {
		List<MasterValuation> list=masterDaoImpl.getSubCommunity();
		return list;
	}
	@Transactional
	public List<MasterValuation> getCommunity() {
		List<MasterValuation> list=masterDaoImpl.getCommunity();
		return list;
	}
	@Transactional
	public List<MasterValuation> getCity() {
		List<MasterValuation> list=masterDaoImpl.getCity();
		return list;
	}
	@Transactional
	public String getCommunity(String buildingName) {
		List<MasterValuation> list = masterDaoImpl.getCommunity(buildingName);
		String community = null;
		for(MasterValuation r1 : list){
			community = r1.getCommunity();
			break;
		}
		return community;
	}
	@Transactional
	public String getSubCommunity(String buildingName) {
		List<MasterValuation> list = masterDaoImpl.getCommunity(buildingName);
		String subcommunity = null;
		for(MasterValuation r1 : list){
			subcommunity = r1.getSubCommunity();
			break;
		}
		return subcommunity;
	}
	@Transactional
	public String getCityy(String buildingName) {
		List<MasterValuation> list = masterDaoImpl.getCommunity(buildingName);
		String city = null;
		for(MasterValuation r1 : list){
			city = r1.getCity();
			break;
		}
		return city;
	}

	public int getLowPrice(List<MasterValuation> filterTransaction) {
		ArrayList<Integer> avglist = new ArrayList<Integer>();
		if(!filterTransaction.isEmpty()){
			for(MasterValuation st : filterTransaction){
				String aed = st.getMv();
				String pricesq = aed.replaceAll(",", "");
				String ffinal = pricesq.replaceAll("\\s+","");
				int finaed = Integer.parseInt(ffinal);
				avglist.add(finaed);
			}	
		}
		int largest = Integer.MIN_VALUE; 
		int smallest = Integer.MAX_VALUE;
		for (int number : avglist) { 
			if (number > largest) {
				largest = number;
				} 
			else if (number < smallest) { 
				smallest = number; } 
		}

		return smallest;
	}

	public int getHighPrice(List<MasterValuation> filterTransaction) {
		ArrayList<Integer> avglist = new ArrayList<Integer>();
		if(!filterTransaction.isEmpty()){
			for(MasterValuation st : filterTransaction){
				String aed = st.getMv();
				String pricesq = aed.replaceAll(",", "");
				String ffinal = pricesq.replaceAll("\\s+","");
				int finaed = Integer.parseInt(ffinal);
				avglist.add(finaed);
			}	
		}
		int largest = Integer.MIN_VALUE; 
		int smallest = Integer.MAX_VALUE;
		for (int number : avglist) { 
			if (number > largest) {
				largest = number;
				} 
			else if (number < smallest) { 
				smallest = number; } 
		}

		return largest;
	}

	public int getLowPricePerSq(List<MasterValuation> filterTransaction) {
		ArrayList<Integer> avglist = new ArrayList<Integer>();
		if(!filterTransaction.isEmpty()){
			for(MasterValuation st : filterTransaction){
				String aed = st.getMvpersqf();
				String pricesq = aed.replaceAll(",", "");
				String ffinal = pricesq.replaceAll("\\s+","");
				int finaed = Integer.parseInt(ffinal);
				avglist.add(finaed);
			}	
		}
		int largest = Integer.MIN_VALUE; 
		int smallest = Integer.MAX_VALUE;
		for (int number : avglist) { 
			if (number > largest) {
				largest = number;
				} 
			else if (number < smallest) { 
				smallest = number; } 
		}

		return smallest;
	}

	public int getHighPricePerSq(List<MasterValuation> filterTransaction) {
		ArrayList<Integer> avglist = new ArrayList<Integer>();
		if(!filterTransaction.isEmpty()){
			for(MasterValuation st : filterTransaction){
				String aed = st.getMvpersqf();
				String pricesq = aed.replaceAll(",", "");
				String ffinal = pricesq.replaceAll("\\s+","");
				int finaed = Integer.parseInt(ffinal);
				avglist.add(finaed);
			}	
		}
		int largest = Integer.MIN_VALUE; 
		int smallest = Integer.MAX_VALUE;
		for (int number : avglist) { 
			if (number > largest) {
				largest = number;
				} 
			else if (number < smallest) { 
				smallest = number; } 
		}

		return largest;

	}

	public String getLevelAvg(List<MasterValuation> filterTransaction) {
		String avg = null;
//		ArrayList<Integer> avglist = new ArrayList<Integer>();
//		if(!filterTransaction.isEmpty()){
//			for(MasterValuation st : filterTransaction){
//				String level = st.getLevel();
//			}
//		}
//		if(avglist.size() > 0){
//		double finalValue =  calculateAverage(avglist);
//		avg = String.valueOf(dd.format(finalValue));
//		}
		avg = "0";
		return avg;
	}
	
}
