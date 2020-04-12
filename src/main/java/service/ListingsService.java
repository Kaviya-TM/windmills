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
import dao.ListingsDaoImpl;
import dao.PropertyDaoImpl;
import dao.ServiceOfficerDaoImpl;
import dao.WeightageDaoImpl;
import model.ClientDetails;
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
	private Listings listings;
	@Autowired
	private SessionFactory status;
	private static DecimalFormat df = new DecimalFormat("0");
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
		System.err.println("getlist"+getlist.size());
		List<Listings> datelist =  getDateList(getlist,datefrom,dateto);
		System.err.println("datelist"+datelist.size());
		List<Listings> propertylist = getPropertyList(datelist,propList);
		System.err.println("propertylist"+propertylist.size());
		List<Listings> bullist =  getBulList(propertylist,buildingName);
		System.err.println("bullist"+bullist.size());
		List<Listings> bedlist = new ArrayList<Listings>();
		List<Listings> landlist = new ArrayList<Listings>();
		List<Listings> bualist = new ArrayList<Listings>();
		List<Listings> pricelist = new ArrayList<Listings>();
		List<Listings> pricesqtlist = new ArrayList<Listings>();
		if(bedfrom.equals("") && bedto.equals("")){
			for(Listings trans : bullist){
				bedlist.add(trans);
			}
		}
		else{
			bedlist =  getList(bullist,bedfrom,bedto);
		}
		if(landfrom.equals("") && landto.equals("")){
			for(Listings trans : bedlist){
				landlist.add(trans);
			}
		}
		else{
			landlist =  getLandList(bedlist,landfrom,landto);
//			if(landlist.size() <= 0){
//				for(Listings trans : bedlist){
//					landlist.add(trans);
//				}
//			}
		}
		if(buafrom.equals("") && buato.equals("")){
			for(Listings trans : landlist){
				bualist.add(trans);
			}
		}
		else{
			bualist = getBUAList(landlist,buafrom,buato);
		}
		if(pricefrom.equals("") && priceto.equals("")){
			for(Listings trans : bualist){
				pricelist.add(trans);
			}
		}
		else{
			pricelist = getPriceList(bualist,pricefrom,priceto);
		}
		if(pricesqtfrom.equals("") && pricesqtto.equals("")){
			for(Listings trans : pricelist){
				pricesqtlist.add(trans);
			}
		}
		else{
			pricesqtlist = getPriceSqtList(pricelist,pricesqtfrom,pricesqtto);
		}
		
		return pricesqtlist;
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
		System.err.println("landf"+landf);
		int landt = Integer.parseInt(landto);
		System.err.println("landt"+landt);
		for(Listings trans : bedlist){
			String landSize = trans.getLandSize();
			if(!landSize.equals("-")){
				landSize =  landSize.replaceAll(",", "");
				int lands = Integer.parseInt(landSize);
				if(lands >= landf && lands<= landt){
					System.err.println("lands"+lands);
					filterlandlist.add(trans);
				}
			}
			else{
				//
			}
		}
		System.err.println("filterlandlist"+filterlandlist.size());
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
	private List<Listings> getBulList(List<Listings> propertylist, String buildingName) {
		ArrayList<Listings> filterbullist = new ArrayList<Listings>();
		for(Listings trans : propertylist){
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
//			String year = date.substring(6);
//			String month = date.substring(3,5);
//			String day = date.substring(0,2);
//			if(month.equals("01")){
//				month = "Jan";
//			}
//			if(month.equals("02")){
//				month = "Feb";
//			}
//			if(month.equals("03")){
//				month = "Mar";
//			}
//			if(month.equals("04")){
//				month = "Apr";
//			}
//			if(month.equals("05")){
//				month = "May";
//			}
//			if(month.equals("06")){
//				month = "Jun";
//			}
//			if(month.equals("07")){
//				month = "Jul";
//			}
//			if(month.equals("08")){
//				month = "Aug";
//			}
//			if(month.equals("09")){
//				month = "Sep";
//			}
//			if(month.equals("10")){
//				month = "Oct";
//			}
//			if(month.equals("11")){
//				month = "Nov";
//			}
//			if(month.equals("12")){
//				month = "Dec";
//			}
//			
//			String date1 = day+"-"+month+"-"+year;
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
				System.err.println(LocalDate.of(a, b, c));
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
//				String bed = null;
//				System.err.println("room=="+room);
//				if(room.equals("Studio")){
//					bed = "0";
//				}
//				if(room.equals("1-Bedroom")){
//					bed = "1";
//				}
//				if(room.equals("2-Bedroom")){
//					bed = "2";
//				}
//				if(room.equals("3-Bedroom")){
//					bed = "3";
//				}
//				if(room.equals("4-Bedroom")){
//					bed = "4";
//				}
//				if(room.equals("5-Bedroom")){
//					bed = "5";
//				}
//				if(room.equals("6-Bedroom")){
//					bed = "6";
//				}
//				if(room.equals("7-Bedroom")){
//					bed = "7";
//				}
//				if(room.equals("8-Bedroom")){
//					bed = "8";
//				}
//				if(room.equals("9-Bedroom")){
//					bed = "9";
//				}
//				if(room.equals("10-Bedroom")){
//					bed = "10";
//				}
//				if(room == "Unknown"){
//					bed = "0";
//				}
				System.err.println("bed-->"+bed);
				int finaed = Integer.parseInt(bed);
				avglist.add(finaed);
			}
		}
		double finalValue =  calculateAverage(avglist);
		avg = String.valueOf(df.format(finalValue));
		return avg;
	}
	
	
	
}
