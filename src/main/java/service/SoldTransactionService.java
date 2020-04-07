package service;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.sql.SQLException;
import java.text.DateFormat;
import java.text.DecimalFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.Month;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.time.temporal.TemporalAccessor;
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
import javax.servlet.http.HttpServletRequest;
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
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import dao.ClientDaoImpl;
import dao.SoldTransactionDaoImpl;
import dao.ValuationDaoImpl;
import model.ClientDetails;
import model.Community;
import model.Documents;
import model.Property;
import model.ServiceOfficer;
import model.SoldTransactions;
import model.ValuationReport;
import model.ValuationReportForm;
import utils.WindmillsUtils;

@Service
public class SoldTransactionService {
	@Autowired
	private SoldTransactionDaoImpl soldTransactionDaoImpl;
	@Autowired
	private SoldTransactions soldTransaction;
	
	private static DecimalFormat df = new DecimalFormat("0");
	static Logger log = Logger.getLogger(ValuationService.class);
	
	@Transactional
	public List<SoldTransactions> getSoldTransactions() {
		List<SoldTransactions> list = soldTransactionDaoImpl.getSoldTransactions();
		return list;

	}
	@Transactional
	public List<SoldTransactions> getCity() {
		List<SoldTransactions> list = soldTransactionDaoImpl.getCity();
		return list;
	}
	@Transactional
	public List<SoldTransactions> getArea() {
		List<SoldTransactions> list = soldTransactionDaoImpl.getArea();
		return list;
	}
	@Transactional
	public List<SoldTransactions> getNeighbourhood() {
		List<SoldTransactions> list = soldTransactionDaoImpl.getNeighbourhood();
		return list;
	}
	@Transactional
	public List<SoldTransactions> getBuildings() {
		List<SoldTransactions> list = soldTransactionDaoImpl.getBuildings();
		return list;
	}
	@Transactional
	public List<SoldTransactions> getFilter(String city, String area, String neighbourhood, String buildingName) {
		List<SoldTransactions> list = soldTransactionDaoImpl.getFilter(city,area,neighbourhood,buildingName);
		return list;
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
	public String getpricePerAvg(List<SoldTransactions> filterTransaction) {
		String avg = null;
		ArrayList<Integer> avglist = new ArrayList<Integer>();
		if(!filterTransaction.isEmpty()){
			for(SoldTransactions st : filterTransaction){
				String aed = st.getPricePerSqFt();
				String newStr = aed.replaceAll(",", "");
				int finaed = Integer.parseInt(newStr);
				avglist.add(finaed);
			}
		}
		double finalValue =  calculateAverage(avglist);
		avg = String.valueOf(df.format(finalValue));
		return avg;
	}
	
	public String getpriceAvg(List<SoldTransactions> filterTransaction) {
		String avg = null;
		ArrayList<Integer> avglist = new ArrayList<Integer>();
		if(!filterTransaction.isEmpty()){
			for(SoldTransactions st : filterTransaction){
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
	public String getSizeAvg(List<SoldTransactions> filterTransaction) {
		String avg = null;
		ArrayList<Integer> avglist = new ArrayList<Integer>();
		if(!filterTransaction.isEmpty()){
			for(SoldTransactions st : filterTransaction){
				String aed = st.getSizeSqf();
				String newStr = aed.replaceAll(",", "");
				int finaed = Integer.parseInt(newStr);
				avglist.add(finaed);
			}
		}
		double finalValue =  calculateAverage(avglist);
		avg = String.valueOf(df.format(finalValue));
		return avg;
	}
	public String getBedAvg(List<SoldTransactions> filterTransaction) {
		String avg = null;
		ArrayList<Integer> avglist = new ArrayList<Integer>();
		if(!filterTransaction.isEmpty()){
			for(SoldTransactions st : filterTransaction){
				String room = st.getRoomNoEstimated();
				String bed = null;
				System.err.println("room=="+room);
				if(room.equals("Studio")){
					bed = "0";
				}
				if(room.equals("1-Bedroom")){
					bed = "1";
				}
				if(room.equals("2-Bedroom")){
					bed = "2";
				}
				if(room.equals("3-Bedroom")){
					bed = "3";
				}
				if(room.equals("4-Bedroom")){
					bed = "4";
				}
				if(room.equals("5-Bedroom")){
					bed = "5";
				}
				if(room == "Unknown"){
					bed = "0";
				}
				System.err.println("bed-->"+bed);
				int finaed = Integer.parseInt(bed);
				avglist.add(finaed);
			}
		}
		double finalValue =  calculateAverage(avglist);
		avg = String.valueOf(df.format(finalValue));
		return avg;
	}
	public String getDateAvg(List<SoldTransactions> filterTransaction) {
		String avg = null;
		List<LocalDate> myList = new ArrayList<>();
		System.err.println("Entering");
		if(!filterTransaction.isEmpty()){
			for(SoldTransactions st : filterTransaction){
				String aed = st.getDate();
				int a = Integer.parseInt(aed.substring(6));
				int b = Integer.parseInt(aed.substring(3,5));
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
	public String getlandAvg(List<SoldTransactions> filterTransaction) {
		String avg = "-";
		ArrayList<Integer> avglist = new ArrayList<Integer>();
		if(!filterTransaction.isEmpty()){
			for(SoldTransactions st : filterTransaction){
				String aed = st.getLandAreaSqf();
				if(aed.equals("-")){
					//
				}
				else{
					int finaed = Integer.parseInt(aed);
					avglist.add(finaed);
				}
			}
			System.err.println(avglist.size());
			if(!avglist.isEmpty()){
				double finalValue =  calculateAverage(avglist);
				avg = String.valueOf(df.format(finalValue));
				System.err.println(avg);
			}
		}
		return avg;
	}
	public List<SoldTransactions> getList(List<SoldTransactions> list,String bedfrom, String bedto) {
		ArrayList<SoldTransactions> filterlist = new ArrayList<SoldTransactions>();
		String bedfromno= bedfrom.replaceAll("[^0-9]", "");
	    String bedtono= bedto.replaceAll("[^0-9]", "");
	    int min, max;
	    min = Integer.parseInt(bedfromno);
	    max = Integer.parseInt(bedtono);
    	for(SoldTransactions trans : list){
    		String roomNo = trans.getRoomNoEstimated();
    		String roomno= roomNo.replaceAll("[^0-9]", "");
    		int room = Integer.parseInt(roomno);
    		if(room >= min && room<= max){
    			System.err.println("***"+trans.getRoomNoEstimated());
    			filterlist.add(trans);
    			System.err.println(filterlist.size());
    		}
    	}
		return filterlist;
	}
	public List<SoldTransactions> getLandList(List<SoldTransactions> list,String landfrom, String landto) {
		ArrayList<SoldTransactions> filterlandlist = new ArrayList<SoldTransactions>();
		int landf = Integer.parseInt(landfrom);
		int landt = Integer.parseInt(landto);
		for(SoldTransactions trans : list){
			
			String landSize = trans.getLandAreaSqf();
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
	public List<SoldTransactions> getBUAList(List<SoldTransactions> list,String buafrom, String buato) {
		ArrayList<SoldTransactions> filterbualist = new ArrayList<SoldTransactions>();
		int buaf = Integer.parseInt(buafrom);
		int buat = Integer.parseInt(buato);
		for(SoldTransactions trans : list){
			String buaSize = trans.getSizeSqf();
			buaSize =  buaSize.replaceAll(",", "");
			int buas = Integer.parseInt(buaSize);
			if(buas >= buaf && buas<= buat){
				filterbualist.add(trans);
			}
		}
		return filterbualist;
	}
	public List<SoldTransactions> getPriceList(List<SoldTransactions> list,String pricefrom, String priceto) {
		ArrayList<SoldTransactions> filterpricelist = new ArrayList<SoldTransactions>();
		int pricef = Integer.parseInt(pricefrom);
		int pricet = Integer.parseInt(priceto);
		for(SoldTransactions trans : list){
			String price = trans.getPrice();
			price =  price.replaceAll(",", "");
			int prices = Integer.parseInt(price);
			if(prices >= pricef && prices<= pricet){
				filterpricelist.add(trans);
			}
		}
		return filterpricelist;
	}
	public List<SoldTransactions> getPriceSqtList(List<SoldTransactions> list,String pricesqtfrom, String pricesqtto) {
		ArrayList<SoldTransactions> filterpricesqtlist = new ArrayList<SoldTransactions>();
		int pricesqf = Integer.parseInt(pricesqtfrom);
		int pricesqt = Integer.parseInt(pricesqtto);
		for(SoldTransactions trans : list){
			String pricesq = trans.getPricePerSqFt();
			pricesq =  pricesq.replaceAll(",", "");
			int pricesqs = Integer.parseInt(pricesq);
			if(pricesqs >= pricesqf && pricesqs<= pricesqt){
				filterpricesqtlist.add(trans);
			}
		}
		return filterpricesqtlist;
	}
	public List<SoldTransactions> getDateList(List<SoldTransactions> list,String datefrom, String dateto) throws ParseException {
		ArrayList<SoldTransactions> filterdatelist = new ArrayList<SoldTransactions>();
		System.err.println("datefrom"+datefrom);
		Date min=new SimpleDateFormat("dd-MMM-yyyy").parse(datefrom);
		Date max=new SimpleDateFormat("dd-MMM-yyyy").parse(dateto);
		System.err.println("max"+max);
		for(SoldTransactions trans : list){
			String date = trans.getDate();
			String year = date.substring(6);
			String month = date.substring(3,5);
			String day = date.substring(0,2);
			if(month.equals("03")){
				month = "Mar";
			}
			if(month.equals("02")){
				month = "Feb";
			}
			String date1 = day+"-"+month+"-"+year;
			System.err.println("date1"+ date1);
			Date dd=new SimpleDateFormat("dd-MMM-yyyy").parse(date1);
			System.err.println("dd"+dd);
			if((dd.after(min) && dd.before(max)) || dd.equals(min) || dd.equals(max)){
				filterdatelist.add(trans);
			}
		}
		return filterdatelist;
	}
	@Transactional
	public List<SoldTransactions> getFilterList(String city, String area, String neighbourhood, String buildingName,
			String bedfrom, String bedto, String landfrom, String landto, String buafrom, String buato, String pricefrom, 
			String priceto, String pricesqtfrom, String pricesqtto, String datefrom, String dateto) throws ParseException {
		
		List<SoldTransactions> list = soldTransactionDaoImpl.getFilter(city,area,neighbourhood,buildingName);
		System.err.println("list.size"+list.size());
		List<SoldTransactions> filterdatelist =  getDateList(list,datefrom,dateto);
		System.err.println("filterdatelist.size"+filterdatelist.size());
		List<SoldTransactions> filterbedlist =  getList(filterdatelist,bedfrom,bedto);
		System.err.println("filterbedlist.size"+filterbedlist.size());
		List<SoldTransactions> filterlandlist =  getLandList(filterbedlist,landfrom,landto);
		System.err.println("filterlandlist.size"+filterlandlist.size());
		List<SoldTransactions> filterbualist = new ArrayList<SoldTransactions>();
		if(filterlandlist.size() > 0){
			filterbualist =  getBUAList(filterlandlist,buafrom,buato);
		}
		else{
			filterbualist =  getBUAList(filterbedlist,buafrom,buato);
		}
		System.err.println("filterbualist.size"+filterbualist.size());
		List<SoldTransactions> filterpricelist =  getPriceList(filterbualist,pricefrom,priceto);
		System.err.println("filterpricelist.size"+filterpricelist.size());
		List<SoldTransactions> filterpricesqtlist =  getPriceSqtList(filterpricelist,pricesqtfrom,pricesqtto);
		System.err.println("filterpricesqtlist.size"+filterpricesqtlist.size());
		return filterpricesqtlist;
	}	
}
