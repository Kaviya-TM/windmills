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
import dao.DiscountDaoImpl;
import dao.ListingsDaoImpl;
import dao.PropertyDaoImpl;
import dao.ServiceOfficerDaoImpl;
import dao.WeightageDaoImpl;
import model.ClientDetails;
import model.Discount;
import model.Listings;
import model.Property;
import model.ServiceOfficer;
import model.SoldTransactions;
import model.Weightage;
import utils.Constants;

@Service
public class ListingsService {
	
	@Autowired
	private ListingsDaoImpl listingsDaoImpl;
	@Autowired
	private DiscountDaoImpl discountDaoImpl;
	@Autowired
	private Listings listings;
	@Autowired
	private SessionFactory status;
	private static DecimalFormat df = new DecimalFormat("0");
	private static DecimalFormat dd = new DecimalFormat("0.00");
	static Logger log = Logger.getLogger(ListingsService.class);
	
	@Transactional
	public void addListings(Listings listings) {
		listingsDaoImpl.addListings(listings);
		
	}
	@Transactional
	public List<Listings> getListings() {
		List<Listings> list=listingsDaoImpl.getListings();
		return list;
	}
	@Transactional
	public Listings getListings(int listingsId) {
		List<Listings> list=listingsDaoImpl.getListings(listingsId);
		if(list!=null && !list.isEmpty())
		{
			listings=list.get(0);
		}
		return listings;
	}
	@Transactional
	public void editListings(Listings listings) {
		listingsDaoImpl.updateListings(listings);
		
	}
	@Transactional
	public void deleteListings(int listingsId) {
		listingsDaoImpl.deleteListings(listingsId);
		
	}
	@Transactional
	public List<Listings> getFilterList(String city, String area, String neighbourhood, String buildingName,
			String bedfrom, String bedto, String landfrom, String landto, String buafrom, String buato,
			String pricefrom, String priceto, String pricesqtfrom, String pricesqtto, String datefrom, String dateto,
			String propList) throws ParseException {
		List<Listings> getlist = listingsDaoImpl.getListings();

		List<Listings> datelist =  getDateList(getlist,datefrom,dateto);

		List<Listings> propertylist = getPropertyList(datelist,propList);
		
		List<Listings> citylist = new ArrayList<Listings>();
		if(city.equals("")){
			for(Listings trans : propertylist){
				citylist.add(trans);
			}
		}
		else{
			citylist =  getCityList(propertylist,city);
		}

		List<Listings> comlist = new ArrayList<Listings>();
		if(area.equals("")){
			for(Listings trans : citylist){
				comlist.add(trans);
			}
		}
		else{
			comlist =  getComList(citylist,area);
		}
		
		List<Listings> subcomlist = new ArrayList<Listings>();
		if(neighbourhood.equals("")){
			for(Listings trans : comlist){
				subcomlist.add(trans);
			}
		}
		else{
			subcomlist =  getSubComList(comlist,neighbourhood);
		}
		
		List<Listings> bullist = new ArrayList<Listings>();
		if(buildingName.equals("")){
			for(Listings trans : subcomlist){
				bullist.add(trans);
			}
		}
		else{
			bullist =  getBulList(subcomlist,buildingName);
		}
		
		List<Listings> bedlist = new ArrayList<Listings>();
		if(bedfrom.equals("") && bedto.equals("")){
			for(Listings trans : bullist){
				bedlist.add(trans);
			}
		}
		else{
			bedlist =  getList(bullist,bedfrom,bedto);
		}
		
		List<Listings> landlist = new ArrayList<Listings>();
		if(landfrom.equals("") && landto.equals("")){
			for(Listings trans : bedlist){
				landlist.add(trans);
			}
		}
		else{
			landlist =  getLandList(bedlist,landfrom,landto);
		}
		
		List<Listings> bualist = new ArrayList<Listings>();
		if(buafrom.equals("") && buato.equals("")){
			for(Listings trans : landlist){
				bualist.add(trans);
			}
		}
		else{
			bualist = getBUAList(landlist,buafrom,buato);
		}
		
		List<Listings> pricelist = new ArrayList<Listings>();
		if(pricefrom.equals("") && priceto.equals("")){
			for(Listings trans : bualist){
				pricelist.add(trans);
			}
		}
		else{
			pricelist = getPriceList(bualist,pricefrom,priceto);
		}
		
		List<Listings> pricesqtlist = new ArrayList<Listings>();
		if(pricesqtfrom.equals("") && pricesqtto.equals("")){
			for(Listings trans : pricelist){
				pricesqtlist.add(trans);
			}
		}
		else{
			pricesqtlist = getPriceSqtList(pricelist,pricesqtfrom,pricesqtto);
		}
		
		System.err.println("pricesqtlist"+pricesqtlist.size());
		return pricesqtlist;
	}
	private List<Listings> getCityList(List<Listings> propertylist, String city) {
		ArrayList<Listings> filtercitylist = new ArrayList<Listings>();
		for(Listings trans : propertylist){
			String subcomname = trans.getCity();
			if(subcomname.equals(city)){
				filtercitylist.add(trans);
			}
		}
		return filtercitylist;
	}
	private List<Listings> getComList(List<Listings> citylist, String area) {
		ArrayList<Listings> filtercomlist = new ArrayList<Listings>();
		for(Listings trans : citylist){
			String subcomname = trans.getCommunity();
			if(subcomname.equals(area)){
				filtercomlist.add(trans);
			}
		}
		return filtercomlist;
	}
	private List<Listings> getSubComList(List<Listings> comlist, String neighbourhood) {
		ArrayList<Listings> filtersubcomlist = new ArrayList<Listings>();
		for(Listings trans : comlist){
			String subcomname = trans.getSubCommunity();
			if(subcomname.equals(neighbourhood)){
				filtersubcomlist.add(trans);
			}
		}
		return filtersubcomlist;
	}
	private List<Listings> getPriceSqtList(List<Listings> pricelist, String pricesqtfrom, String pricesqtto) {
		ArrayList<Listings> filterpricesqtlist = new ArrayList<Listings>();
		int pricesqf = Integer.parseInt(pricesqtfrom);
		int pricesqt = Integer.parseInt(pricesqtto);
		for(Listings trans : pricelist){
			String pricesq = trans.getPriceSqt();
			pricesq =  pricesq.replaceAll(",", "");
			int pricesqs = Integer.parseInt(pricesq);
			if(pricesqs >= pricesqf && pricesqs<= pricesqt){
				filterpricesqtlist.add(trans);
			}
		}
		return filterpricesqtlist;
	}
	private List<Listings> getPriceList(List<Listings> bualist, String pricefrom, String priceto) {
		ArrayList<Listings> filterpricelist = new ArrayList<Listings>();
		int pricef = Integer.parseInt(pricefrom);
		int pricet = Integer.parseInt(priceto);
		for(Listings trans : bualist){
			String price = trans.getPrice();
			price =  price.replaceAll(",", "");
			int prices = Integer.parseInt(price);
			if(prices >= pricef && prices<= pricet){
				filterpricelist.add(trans);
			}
		}
		return filterpricelist;
	}
	private List<Listings> getBUAList(List<Listings> landlist, String buafrom, String buato) {
		ArrayList<Listings> filterbualist = new ArrayList<Listings>();
		int buaf = Integer.parseInt(buafrom);
		int buat = Integer.parseInt(buato);
		for(Listings trans : landlist){
			String buaSize = trans.getBua();
			buaSize =  buaSize.replaceAll(",", "");
			int buas = Integer.parseInt(buaSize);
			if(buas >= buaf && buas<= buat){
				filterbualist.add(trans);
			}
		}
		return filterbualist;
	}
	private List<Listings> getLandList(List<Listings> bedlist, String landfrom, String landto) {
		ArrayList<Listings> filterlandlist = new ArrayList<Listings>();
		int landf = Integer.parseInt(landfrom);
		int landt = Integer.parseInt(landto);
		for(Listings trans : bedlist){
			String landSize = trans.getLandSize();
			if(!landSize.equals("-")){
				landSize =  landSize.replaceAll(",", "");
				int lands = Integer.parseInt(landSize);
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
	private List<Listings> getList(List<Listings> bullist, String bedfrom, String bedto) {
		ArrayList<Listings> filterlist = new ArrayList<Listings>();
		String bedfromno= bedfrom.replaceAll("[^0-9]", "");
	    String bedtono= bedto.replaceAll("[^0-9]", "");
	    int min, max;
	    min = Integer.parseInt(bedfromno);
	    max = Integer.parseInt(bedtono);
    	for(Listings trans : bullist){
    		String roomNo = trans.getNoOfBedrooms();
    		String roomno= roomNo.replaceAll("[^0-9]", "");
    		int room = Integer.parseInt(roomno);
    		if(room >= min && room<= max){
    			filterlist.add(trans);
    		}
    	}
		return filterlist;
	}
	private List<Listings> getBulList(List<Listings> subcomlist, String buildingName) {
		ArrayList<Listings> filterbullist = new ArrayList<Listings>();
		for(Listings trans : subcomlist){
			String bulname = trans.getBuildingName();
			if(bulname.equals(buildingName)){
				filterbullist.add(trans);
			}
		}
		return filterbullist;
	}
	private List<Listings> getPropertyList(List<Listings> datelist, String propList) {
		ArrayList<Listings> propertylist = new ArrayList<Listings>();
		for(Listings trans : datelist){
			String property = trans.getPropertyListed();
			if(propList.contains(property)){
				propertylist.add(trans);
			}
		}
		return propertylist;
	}
	private List<Listings> getDateList(List<Listings> list, String datefrom, String dateto) throws ParseException {
		ArrayList<Listings> filterdatelist = new ArrayList<Listings>();
		Date min=new SimpleDateFormat("dd-MMM-yyyy").parse(datefrom);
		Date max=new SimpleDateFormat("dd-MMM-yyyy").parse(dateto);
		for(Listings trans : list){
			String date = trans.getListingsDate();
			Date dd=new SimpleDateFormat("dd-MMM-yyyy").parse(date);
			if((dd.after(min) && dd.before(max)) || dd.equals(min) || dd.equals(max)){
				filterdatelist.add(trans);
			}
		}
		return filterdatelist;
	}
	public String getDateAvg(List<Listings> filterTransaction) {
		String avg = null;
		List<LocalDate> myList = new ArrayList<>();
		if(!filterTransaction.isEmpty()){
			for(Listings st : filterTransaction){
				String aed = st.getListingsDate();
				int a = Integer.parseInt(aed.substring(7));
				String month = aed.substring(3,6);
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
				int b = Integer.parseInt(month);
				int c = Integer.parseInt(aed.substring(0,2));
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
	public String getlandAvg(List<Listings> filterTransaction) {
		String avg = "-";
		ArrayList<Integer> avglist = new ArrayList<Integer>();
		if(!filterTransaction.isEmpty()){
			for(Listings st : filterTransaction){
				String aed = st.getLandSize();
				if(aed.equals("-")){
					//
				}
				else{
					String newStr = aed.replaceAll(",", "");
					int finaed = Integer.parseInt(newStr);
					avglist.add(finaed);
				}
			}
			if(!avglist.isEmpty()){
				double finalValue =  calculateAverage(avglist);
				avg = String.valueOf(df.format(finalValue));
			}
		}
		return avg;
	}
	public String getpriceAvg(List<Listings> filterTransaction) {
		String avg = null;
		ArrayList<Integer> avglist = new ArrayList<Integer>();
		if(!filterTransaction.isEmpty()){
			for(Listings st : filterTransaction){
				String aed = st.getPrice();
				String newStr = aed.replaceAll(",", "");
				int finaed = Integer.parseInt(newStr);
				avglist.add(finaed);
			}
		}
		double finalValue =  calculateAverage(avglist);
		avg = String.valueOf(df.format(finalValue));
		return avg;
	}
	public String getSizeAvg(List<Listings> filterTransaction) {
		String avg = null;
		ArrayList<Integer> avglist = new ArrayList<Integer>();
		if(!filterTransaction.isEmpty()){
			for(Listings st : filterTransaction){
				String aed = st.getBua();
				String newStr = aed.replaceAll(",", "");
				int finaed = Integer.parseInt(newStr);
				avglist.add(finaed);
			}
		}
		double finalValue =  calculateAverage(avglist);
		avg = String.valueOf(df.format(finalValue));
		return avg;
	}
	public String getpricePerAvg(List<Listings> filterTransaction) {
		String avg = null;
		ArrayList<Integer> avglist = new ArrayList<Integer>();
		if(!filterTransaction.isEmpty()){
			for(Listings st : filterTransaction){
				String aed = st.getPriceSqt();
				String newStr = aed.replaceAll(",", "");
				int finaed = Integer.parseInt(newStr);
				avglist.add(finaed);
			}
		}
		double finalValue =  calculateAverage(avglist);
		avg = String.valueOf(df.format(finalValue));
		return avg;
	}
	public String getBedAvg(List<Listings> filterTransaction) {
		String avg = null;
		ArrayList<Integer> avglist = new ArrayList<Integer>();
		if(!filterTransaction.isEmpty()){
			for(Listings st : filterTransaction){
				String bed = st.getNoOfBedrooms();
				int finaed = Integer.parseInt(bed);
				avglist.add(finaed);
			}
		}
		double finalValue =  calculateAverage(avglist);
		avg = String.valueOf(dd.format(finalValue));
		return avg;
	}
	public String getLocationAvg(List<Listings> filterTransaction) {
		String avg = null;
		ArrayList<Integer> avglist = new ArrayList<Integer>();
		if(!filterTransaction.isEmpty()){
			for(Listings st : filterTransaction){
				int finallocation = 0;
				String location = st.getLocation();
				if(location.equals("Very Good")){
					finallocation = 5;
				}
				if(location.equals("Good")){
					finallocation = 4;
				}
				if(location.equals("Average")){
					finallocation = 3;
				}
				if(location.equals("Not Good")){
					finallocation = 2;
				}
				if(location.equals("Poor")){
					finallocation = 1;
				}
				avglist.add(finallocation);
			}
		}
		double finalValue =  calculateAverage(avglist);
		avg = String.valueOf(dd.format(finalValue));
		return avg;
	}
	public String getTenureAvg(List<Listings> filterTransaction) {
		String avg = null;
		ArrayList<String> avglist = new ArrayList<String>();
		if(!filterTransaction.isEmpty()){
			for(Listings st : filterTransaction){
				String finall = null;
				String tenure = st.getTenure();
				System.err.println("tenure"+tenure);
				if(tenure.equals("Freehold")){
					finall = "5";
				}
				if(tenure.equals("Non-Freehold(Emiratis)")){
					finall = "3";
				}
				if(tenure.equals("Non-Freehold(Emiratis & GCC Citizens)")){
					finall = "4";
				}
				if(tenure.equals("Leasehold")){
					finall = "2";
				}
				if(tenure.equals("Granted")){
					finall = "1";
				}
				avglist.add(finall);
			}
		}
		double finalValue =  calculateAvg(avglist);
		avg = String.valueOf(dd.format(finalValue));
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
	public String getAgeAvg(List<Listings> filterTransaction) {
		String avg = null;
		ArrayList<Integer> avglist = new ArrayList<Integer>();
		if(!filterTransaction.isEmpty()){
			for(Listings st : filterTransaction){
				String age = st.getAge();
				int finage = Integer.parseInt(age);
				avglist.add(finage);
			}
		}
		double finalValue =  calculateAverage(avglist);
		avg = String.valueOf(dd.format(finalValue));
		return avg;
	}
	public String getViewAvg(List<Listings> filterTransaction) {
		String avg = null;
		ArrayList<Integer> avglist = new ArrayList<Integer>();
		if(!filterTransaction.isEmpty()){
			for(Listings st : filterTransaction){
				String view = st.getView();
				String finalview = null;
				if(view.equals("Park View") || view.equals("Pool View") || view.equals("Mountain View")){
					finalview = "5";
				}
				if(view.equals("Sea View") || view.equals("Marina View") || view.equals("Lake View")){
					finalview = "5";
				}
				if(view.equals("Partial Park View") || view.equals("Partial Pool View") || view.equals("Partial Mountain View")){
					finalview = "4";
				}
				if(view.equals("Partial Sea View") || view.equals("Partial Marina View") || view.equals("Partial Lake View")){
					finalview = "4";
				}
				if(view.equals("Community View")){
					finalview = "3";
				}
				if(view.equals("Substandard View")){
					finalview = "2";
				}
				if(view.equals("Poor View")){
					finalview = "1";
				}
				int finage = Integer.parseInt(finalview);
				avglist.add(finage);
			}
		}
		double finalValue =  calculateAverage(avglist);
		avg = String.valueOf(dd.format(finalValue));
		return avg;
	}
	public String getStatusAvg(List<Listings> filterTransaction) {
		String avg = null;
		ArrayList<Integer> avglist = new ArrayList<Integer>();
		if(!filterTransaction.isEmpty()){
			for(Listings st : filterTransaction){
				String status = st.getFinishStatus();
				String finalstatus = null;
				if(status.equals("Shell & Core")){
					finalstatus = "0";
				}
				if(status.equals("Fitted")){
					finalstatus = "1";
				}
				if(status.equals("Not Applicable")){
					finalstatus = "0";
				}
				int finage = Integer.parseInt(finalstatus);
				avglist.add(finage);
			}
		}
		double finalValue =  calculateAverage(avglist);
		avg = String.valueOf(dd.format(finalValue));
		return avg;
	}
	public String getExposureAvg(List<Listings> filterTransaction) {
		String avg = null;
		ArrayList<Integer> avglist = new ArrayList<Integer>();
		if(!filterTransaction.isEmpty()){
			for(Listings st : filterTransaction){
				String exp = st.getPropExposure();
				String finalexp = null;
				if(exp.equals("Single Row")){
					finalexp = "1";
				}
				if(exp.equals("Back To Back")){
					finalexp = "0";
				}
				if(exp.equals("Not Applicable")){
					finalexp = "0";
				}
				int finage = Integer.parseInt(finalexp);
				avglist.add(finage);
			}
		}
		double finalValue =  calculateAverage(avglist);
		avg = String.valueOf(dd.format(finalValue));
		return avg;
	}
	public String getPlacementAvg(List<Listings> filterTransaction) {
		String avg = null;
		ArrayList<String> avglist = new ArrayList<String>();
		if(!filterTransaction.isEmpty()){
			for(Listings st : filterTransaction){
				String finall = null;
				String pla = st.getPropPlacement();
				if(pla.equals("Middle")){
					finall = "0";
				}
				if(pla.equals("Corner")){
					finall = "1";
				}
				if(pla.equals("Semi-Corner")){
					finall = "1.5";
				}
				if(pla.equals("Not Applicable")){
					finall = "0";
				}
				avglist.add(finall);
			}
		}
		double finalValue =  calculateAvg(avglist);
		avg = String.valueOf(dd.format(finalValue));
		return avg;
	}
	public String getFloorAvg(List<Listings> filterTransaction) {
		String avg = null;
		String propValued = null;
		ArrayList<Integer> avglist = new ArrayList<Integer>();
		if(!filterTransaction.isEmpty()){
			for(Listings st : filterTransaction){
				propValued = st.getPropertyListed();
				if(propValued.equals("Residential Apartment") || propValued.equals("Office")){
					String age = st.getFloorNo();
					int finage = Integer.parseInt(age);
					avglist.add(finage);
				}
			}
		}
		if(propValued.equals("Residential Apartment") || propValued.equals("Office")){
			double finalValue =  calculateAverage(avglist);
			avg = String.valueOf(dd.format(finalValue));
		}
		else{
			avg = "0";
		}
		return avg;
	}
	public String getQualityAvg(List<Listings> filterTransaction) {
		String avg = null;
		ArrayList<Integer> avglist = new ArrayList<Integer>();
		if(!filterTransaction.isEmpty()){
			for(Listings st : filterTransaction){
				int finallocation = 0;
				String location = st.getPropCondition();
				if(location.equals("Very Good")){
					finallocation = 5;
				}
				if(location.equals("Good")){
					finallocation = 4;
				}
				if(location.equals("Average")){
					finallocation = 3;
				}
				if(location.equals("Not Good")){
					finallocation = 2;
				}
				if(location.equals("Poor")){
					finallocation = 1;
				}
				avglist.add(finallocation);
			}
		}
		double finalValue =  calculateAverage(avglist);
		avg = String.valueOf(dd.format(finalValue));
		return avg;
	}
	public String getUpgradeAvg(List<Listings> filterTransaction) {
		String avg = null;
		ArrayList<Integer> avglist = new ArrayList<Integer>();
		if(!filterTransaction.isEmpty()){
			for(Listings st : filterTransaction){
				String age = st.getUpgrades();
				int finage = Integer.parseInt(age);
				avglist.add(finage);
			}
		}
		double finalValue =  calculateAverage(avglist);
		avg = String.valueOf(dd.format(finalValue));
		return avg;
	}
	public String getFurnishedAvg(List<Listings> filterTransaction) {
		String avg = null;
		ArrayList<String> avglist = new ArrayList<String>();
		if(!filterTransaction.isEmpty()){
			for(Listings st : filterTransaction){
				String finall = null;
				String pla = st.getFurnished();
				if(pla.equals("Yes")){
					finall = "1";
				}
				if(pla.equals("No")){
					finall = "0";
				}
				if(pla.equals("Semi-Furnished")){
					finall = "1.5";
				}
				avglist.add(finall);
			}
		}
		double finalValue =  calculateAvg(avglist);
		avg = String.valueOf(dd.format(finalValue));
		return avg;
	}
	public String getParkAvg(List<Listings> filterTransaction) {
		String avg = null;
		ArrayList<Integer> avglist = new ArrayList<Integer>();
		if(!filterTransaction.isEmpty()){
			for(Listings st : filterTransaction){
				String age = st.getParkingSpace();
				int finage = Integer.parseInt(age);
				avglist.add(finage);
			}
		}
		double finalValue =  calculateAverage(avglist);
		avg = String.valueOf(dd.format(finalValue));
		return avg;
	}
	public String getPoolAvg(List<Listings> filterTransaction) {
		String avg = null;
		ArrayList<String> avglist = new ArrayList<String>();
		if(!filterTransaction.isEmpty()){
			for(Listings st : filterTransaction){
				String finall = null;
				String pla = st.getPool();
				if(pla.equals("Yes")){
					finall = "1";
				}
				if(pla.equals("No")){
					finall = "0";
				}
				avglist.add(finall);
			}
		}
		double finalValue =  calculateAvg(avglist);
		avg = String.valueOf(dd.format(finalValue));
		return avg;
	}
	public String getLandScapeAvg(List<Listings> filterTransaction) {
		String avg = null;
		ArrayList<String> avglist = new ArrayList<String>();
		if(!filterTransaction.isEmpty()){
			for(Listings st : filterTransaction){
				String finall = null;
				String pla = st.getLandScape();
				if(pla.equals("Yes")){
					finall = "1";
				}
				if(pla.equals("No")){
					finall = "0";
				}
				if(pla.equals("Semi-Landscape")){
					finall = "1.5";
				}
				avglist.add(finall);
			}
		}
		double finalValue =  calculateAvg(avglist);
		avg = String.valueOf(dd.format(finalValue));
		return avg;
	}
	public String getGoodAvg(List<Listings> filterTransaction) {
		String avg = null;
		ArrayList<String> avglist = new ArrayList<String>();
		if(!filterTransaction.isEmpty()){
			for(Listings st : filterTransaction){
				String finall = null;
				String pla = st.getWhiteGoods();
				if(pla.equals("Yes")){
					finall = "1";
				}
				if(pla.equals("No")){
					finall = "0";
				}
				avglist.add(finall);
			}
		}
		double finalValue =  calculateAvg(avglist);
		avg = String.valueOf(dd.format(finalValue));
		return avg;
	}
	public String getUtilitiesAvg(List<Listings> filterTransaction) {
		String avg = null;
		ArrayList<String> avglist = new ArrayList<String>();
		if(!filterTransaction.isEmpty()){
			for(Listings st : filterTransaction){
				String finall = null;
				String pla = st.getUtilityConnected();
				if(pla.equals("Yes")){
					finall = "1";
				}
				if(pla.equals("No")){
					finall = "0";
				}
				avglist.add(finall);
			}
		}
		double finalValue =  calculateAvg(avglist);
		avg = String.valueOf(dd.format(finalValue));
		return avg;
	}
	public String getBalconyAvg(List<Listings> filterTransaction) {
		String avg = null;
		ArrayList<Integer> avglist = new ArrayList<Integer>();
		if(!filterTransaction.isEmpty()){
			for(Listings st : filterTransaction){
				String aed = st.getBalcony();
				String newStr = aed.replaceAll(",", "");
				int finaed = Integer.parseInt(newStr);
				avglist.add(finaed);
			}
		}
		double finalValue =  calculateAverage(avglist);
		avg = String.valueOf(df.format(finalValue));
		return avg;
	}
	public String getDevmarginAvg(List<Listings> filterTransaction) {
		String avg = null;
		ArrayList<String> avglist = new ArrayList<String>();
		if(!filterTransaction.isEmpty()){
			for(Listings st : filterTransaction){
				String finall = null;
				String pla = st.getDevmargin();
				if(pla.equals("No")){
					finall = "1";
				}
				if(pla.equals("Yes")){
					finall = "0";
				}
				avglist.add(finall);
			}
		}
		double finalValue =  calculateAvg(avglist);
		avg = String.valueOf(dd.format(finalValue));
		return avg;
	}
	public int getLowPrice(List<Listings> filterTransaction) {
		ArrayList<Integer> avglist = new ArrayList<Integer>();
		if(!filterTransaction.isEmpty()){
			for(Listings st : filterTransaction){
				String aed = st.getPrice();
				String finall = aed.replaceAll(",", "");
				int finaed = Integer.parseInt(finall);
				avglist.add(finaed);
			}	
		}
		int largest = Integer.MIN_VALUE; 
		System.err.println("largest"+largest);
		int smallest = Integer.MAX_VALUE;
		System.err.println("smallest"+smallest);
		for (int number : avglist) { 
			System.err.println("number"+number);
			if (number > largest) {
				largest = number;
				} 
			else if (number < smallest) { 
				smallest = number; } 
		}
		System.err.println("smallestvvvv"+smallest);
		return smallest;
	}
	public int getHighPrice(List<Listings> filterTransaction) {
		ArrayList<Integer> avglist = new ArrayList<Integer>();
		if(!filterTransaction.isEmpty()){
			for(Listings st : filterTransaction){
				String aed = st.getPrice();
				String finall = aed.replaceAll(",", "");
				int finaed = Integer.parseInt(finall);
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
	public int getLowPricePerSq(List<Listings> filterTransaction) {
		ArrayList<Integer> avglist = new ArrayList<Integer>();
		if(!filterTransaction.isEmpty()){
			for(Listings st : filterTransaction){
				String aed = st.getPriceSqt();
				String finall = aed.replaceAll(",", "");
				int finaed = Integer.parseInt(finall);
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
	public int getHighPricePerSq(List<Listings> filterTransaction) {
		ArrayList<Integer> avglist = new ArrayList<Integer>();
		if(!filterTransaction.isEmpty()){
			for(Listings st : filterTransaction){
				String aed = st.getPriceSqt();
				String finall = aed.replaceAll(",", "");
				int finaed = Integer.parseInt(finall);
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
	public String getLevelAvg(List<Listings> filterTransaction) {
		String avg = null;
		String propValued = null;
		ArrayList<Integer> avglist = new ArrayList<Integer>();
		if(!filterTransaction.isEmpty()){
			for(Listings st : filterTransaction){
				propValued = st.getPropertyListed();
				if(propValued.equals("Residential Villa") || propValued.equals("Warehouse") || propValued.contains("Land") ){
					String level = st.getLevel();
					String[] levell = level.split(",");
					int count = levell.length;
					System.err.println("level"+level.split(","));
					avglist.add(count);
				}
				
			}
		}
		if(propValued.equals("Residential Villa") || propValued.equals("Warehouse") || propValued.contains("Land")){
			double finalValue =  calculateAverage(avglist);
			avg = String.valueOf(dd.format(finalValue));
		}
		else{
			avg = "0" ;
		}
		return avg;
	}
	@Transactional
	public String getOnemillion(int discountId) {
		String million1 = null;
		List<Discount> list=discountDaoImpl.getDiscount(discountId);
		for(Discount st : list){
			million1 = st.getMillion1();
		}
		return million1;
	}
	@Transactional
	public String getTwomillion(int discountId) {
		String million2 = null;
		List<Discount> list=discountDaoImpl.getDiscount(discountId);
		for(Discount st : list){
			million2 = st.getMillion2();
		}
		return million2;
	}
	@Transactional
	public String getThreemillion(int discountId) {
		String million3 = null;
		List<Discount> list=discountDaoImpl.getDiscount(discountId);
		for(Discount st : list){
			million3 = st.getMillion3();
		}
		return million3;
	}
	@Transactional
	public String getFourmillion(int discountId) {
		String million4 = null;
		List<Discount> list=discountDaoImpl.getDiscount(discountId);
		for(Discount st : list){
			million4 = st.getMillion4();
		}
		return million4;
	}
	@Transactional
	public String getFivemillion(int discountId) {
		String million5 = null;
		List<Discount> list=discountDaoImpl.getDiscount(discountId);
		for(Discount st : list){
			million5= st.getMillion5();
		}
		return million5;
	}
	@Transactional
	public String getTwentymillion(int discountId) {
		String million20 = null;
		List<Discount> list=discountDaoImpl.getDiscount(discountId);
		for(Discount st : list){
			million20= st.getMillion20();
		}
		return million20;
	}
	@Transactional
	public String getfiftymillion(int discountId) {
		String million50 = null;
		List<Discount> list=discountDaoImpl.getDiscount(discountId);
		for(Discount st : list){
			million50 = st.getmillion50();
		}
		return million50;
	}
	@Transactional
	public String getHundredmillion(int discountId) {
		String million100 = null;
		List<Discount> list=discountDaoImpl.getDiscount(discountId);
		for(Discount st : list){
			million100 = st.getMillion100();
		}
		return million100;
	}
	
	
	
	
}
