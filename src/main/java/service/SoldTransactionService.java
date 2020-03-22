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
}
