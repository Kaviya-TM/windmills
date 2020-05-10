package service;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.sql.SQLException;
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
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import dao.ClientDaoImpl;
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
public class ValuationService {
	@Autowired
	private ValuationDaoImpl valuationDaoImpl;
	@Autowired
	private ValuationReport valuationReport;
	
	static Logger log = Logger.getLogger(ValuationService.class);
	
	@Transactional
	public List<ClientDetails> getClients() {
		List<ClientDetails> list = valuationDaoImpl.getClient();
		return list;

	}
	@Transactional
	public List<ServiceOfficer> getServiceOfficer(String email) {
		List<ServiceOfficer> list = valuationDaoImpl.getServiceOfficer(email);
		return list;
	}
	@Transactional
	public List<ServiceOfficer> getDefaultServicer(String email) {
		List<ServiceOfficer> rows=valuationDaoImpl.getDefaultServicer(email);
		return rows;
	}
	
	@Transactional
	public List<ClientDetails> getValuationInstructingPerson(String clientName) {
		List<ClientDetails> list=valuationDaoImpl.getValuationInstructingPerson(clientName);
		return list;
	}
	@Transactional
	public void saveValuationReport(HttpServletRequest request, ValuationReportForm valuationreportform)
			throws SQLException, Exception {
		int reportId=0;
		Map<String, String> docmap = new HashMap<>();
		ValuationReport valuationreport = valuationreportform.getValuationReport();
		List<Documents> documentList = valuationreportform.getDocuments();
		List<MultipartFile> files = valuationreportform.getFiles();
		if (!files.isEmpty()) {
			for (int i = 0; i < files.size(); i++) {
				documentList.get(i).setFileName(files.get(i).getOriginalFilename());
				System.out.println("check" + files.get(i).getName());
			}
		}
		valuationDaoImpl.saveValuationReport(valuationreport);
		reportId=valuationreportform.getValuationReport().getReportId();
		if (documentList.size() != 0) {
			for (Documents doc : documentList) {
				doc.setValuation(valuationreport);
				String code = WindmillsUtils.generateDocumentCode(reportId);
				doc.setDocumentCode(code);
				docmap.put(doc.getFileName(), code);
				valuationDaoImpl.uploaddocuments(doc);

			}
		}
		
		WindmillsUtils.fileupload(files, docmap);
		
	}
	@Transactional
	public int getNumberOfRows() {
		int count = 0;
		count = valuationDaoImpl.getNumberOfRows();
		return count;
	}
	@Transactional
	public String getValuationApproach(String propertyValued) {
		List<Property> rows=valuationDaoImpl.getValuationApproach(propertyValued);
		String valApproach = null;
		for(Property r1 : rows){
			valApproach = r1.getValuationApproach();
		}
		return valApproach;
	}
	@Transactional
	public List<Property> getPropertyValued() {
		List<Property> list = valuationDaoImpl.getPropertyValued();
		return list;
	}
	@Transactional
	public List<Community> getCommunity() {
		List<Community> list = valuationDaoImpl.getCommunity();
		return list;
	}
	@Transactional
	public String getApproachReasoning(String propertyValued) {
		List<Property> rows=valuationDaoImpl.getValuationApproach(propertyValued);
		String appReasoning = null;
		for(Property r1 : rows){
			appReasoning = r1.getApproachReasoning();
		}
		return appReasoning;
	}
	
	@Transactional
	public String getCity(String community) {
		List<Community> rows=valuationDaoImpl.getCommunityList(community);
		String city = null;
		for(Community r1 : rows){
			city = r1.getCity();
		}
		return city;
	}
	@Transactional
	public List<Community> getCity() {
		List<Community> list = valuationDaoImpl.getCity();
		return list;
	}
	@Transactional
	public List<Property> getApproachReasoningList() {
		List<Property> list = valuationDaoImpl.getApproachReasoningList();
		return list;
	}
	@Transactional
	public List<Property> getValuationApproachList() {
		List<Property> list = valuationDaoImpl.getValuationApproachList();
		return list;
	}
	@Transactional
	public List<ValuationReport> getValuationList() {
		List<ValuationReport> list=valuationDaoImpl.getValuationReportList();
		return list;
	}
	@Transactional
	public ValuationReport getValuation(int reportId) {
		List<ValuationReport> list=valuationDaoImpl.getValuation(reportId);
		if(list!=null && !list.isEmpty())
		{
			valuationReport=list.get(0);
		}
		return valuationReport;
	}
//	@Transactional
//	public List<Documents> getDocuments(int reportId) {
//		List<Documents> list =  valuationDaoImpl.getDocuments(reportId);
//		return list;
//	}
	@Transactional
	public void editValuation(ValuationReportForm valuationreportform) {
		int reportId=0;
		Map<String, String> docmap = new HashMap<>();
		ValuationReport valuationreport = valuationreportform.getValuationReport();
		List<Documents> documentList = valuationreportform.getDocuments();
//		List<MultipartFile> files = valuationreportform.getFiles();
//		if (!files.isEmpty()) {
//			for (int i = 0; i < files.size(); i++) {
//				documentList.get(i).setFileName(files.get(i).getOriginalFilename());
//				System.out.println("check-->" + files.get(i).getName());
//			}
//		}
//		log.info("beginning of update report");
//		reportId = valuationreportform.getValuationReport().getReportId();
//		log.info("sizebefore-->"+documentList.size());
//		if (documentList.size() != 0) {
//			for (Documents doc : documentList) {
//				valuationDaoImpl.deletedocuments(doc);
//			}
//		}
//		log.info("size-->"+documentList.size());
//		if (documentList.size() != 0) {
//			for (Documents doc : documentList) {
//				doc.setValuation(valuationreport);
//				String code = WindmillsUtils.generateDocumentCode(reportId);
//				doc.setDocumentCode(code);
//				docmap.put(doc.getFileName(), code);
//				valuationDaoImpl.uploaddocuments(doc);
//			}
//		}
//		
//		WindmillsUtils.fileupload(files, docmap);
		if (documentList.size() != 0) {
			for (Documents doc : documentList) {
				doc.setValuation(valuationreport);
				String code = WindmillsUtils.generateDocumentCode(reportId);
				doc.setDocumentCode(code);
				docmap.put(doc.getFileName(), code);
				valuationDaoImpl.updatedocuments(doc);
			}
		}
		valuationDaoImpl.editValuation(valuationreport);
		log.info("End of update report");
	}
	@Transactional
	public void editValuationReport(ValuationReportForm valuationreportform) {
		
//		log.info("*****ref-->"+valuationreportform.getValuationReport().getClientRef());
//		ValuationReport valuationreport = valuationreportform.getValuationReport();
//		List<Documents> documentList = valuationreportform.getDocuments();
//		valuationDaoImpl.editValuationReport(valuationreport);
//		int reportId = valuationreportform.getValuationReport().getReportId();
//				if (documentList.size() != 0) {
//			for (Documents doc : documentList) {
//				valuationDaoImpl.updatedocuments(doc);
//			}
//		}
		ValuationReport valuationreport = valuationreportform.getValuationReport();
		List<Documents> documents = valuationreportform.getDocuments();
		Map<String, String> docmap = new HashMap<>();
		System.err.println("reportId-->"+valuationreport.getReportId());
		System.err.println("docsize-->"+documents.size());
		System.err.println("Documents"+valuationreport.getDocuments());
		int reportId=valuationreportform.getValuationReport().getReportId();
		List<Documents> deletedoc =  valuationDaoImpl.getDocuments(reportId);
		List<MultipartFile> files = valuationreportform.getFiles();
		if (!files.isEmpty()) {
			for (int i = 0; i < files.size(); i++) {
				documents.get(i).setFileName(files.get(i).getOriginalFilename());
				System.out.println("check" + files.get(i).getName());
			}
		}
		if(deletedoc!=null && !deletedoc.isEmpty())
		{
			for(Documents doc:deletedoc)
			{
				valuationDaoImpl.deletedocuments(doc);
			}
		}
		if(documents!=null && !documents.isEmpty())
		{
			for(Documents doc:documents)
			{
				doc.setValuation(valuationreport);
				String code = WindmillsUtils.generateDocumentCode(reportId);
				doc.setDocumentCode(code);
				docmap.put(doc.getFileName(), code);
				valuationDaoImpl.updatedocuments(doc);
			}
		}
		valuationDaoImpl.editValuationReport(valuationreportform.getValuationReport(),valuationreportform.getValuationReport().getReportId());
//		if(valuationreport.getDocuments()!=null && !valuationreport.getDocuments().isEmpty())
//		{
//			Set<Documents> doclist = valuationreport.getDocuments();
//			for(Documents doc:doclist)
//			{
//				valuationDaoImpl.deletedocuments(doc);
//				doclist.remove(doc);
//			}
//			valuationDaoImpl.editValuationReport(valuationreport);
//		}


	}
	@Transactional
	public String getCommunity(String buildingName) {
		List<SoldTransactions> list = valuationDaoImpl.getEverything(buildingName);
		String community = null;
		for(SoldTransactions r1 : list){
			community = r1.getArea();
			break;
		}
		return community;
	}
	
	@Transactional
	public String getSubCommunity(String buildingName) {
		List<SoldTransactions> list = valuationDaoImpl.getEverything(buildingName);
		String subcommunity = null;
		for(SoldTransactions r1 : list){
			subcommunity = r1.getNeighbourhood();
			break;
		}
		return subcommunity;
	}
	
	@Transactional
	public String getCityy(String buildingName) {
		List<SoldTransactions> list = valuationDaoImpl.getEverything(buildingName);
		String city = null;
		for(SoldTransactions r1 : list){
			city = r1.getCity();
			break;
		}
		return city;
	}
	@Transactional
	public List<ValuationReport> getReference() {
		List<ValuationReport> list = valuationDaoImpl.getReference();
		return list;
	}
	@Transactional
	public String getMaximumAge(String propertyValued) {
		List<Property> rows=valuationDaoImpl.getValuationApproach(propertyValued);
		String maxAge = null;
		for(Property r1 : rows){
			maxAge = r1.getMaxage();
		}
		return maxAge;
	}
	@Transactional
	public String getParkingPrice(String propertyValued) {
		List<Property> rows=valuationDaoImpl.getValuationApproach(propertyValued);
		String parkingPrice = null;
		for(Property r1 : rows){
			parkingPrice = r1.getParkingprice();
		}
		return parkingPrice;
	}
	@Transactional
	public String getPoolPrice(String propertyValued) {
		List<Property> rows=valuationDaoImpl.getValuationApproach(propertyValued);
		String poolPrice = null;
		for(Property r1 : rows){
			poolPrice = r1.getPoolprice();
		}
		return poolPrice;
	}
	@Transactional
	public String getLandScapePrice(String propertyValued) {
		List<Property> rows=valuationDaoImpl.getValuationApproach(propertyValued);
		String landscapePrice = null;
		for(Property r1 : rows){
			landscapePrice = r1.getLandscapeprice();
		}
		return landscapePrice;
	}
	@Transactional
	public String getWhiteGoodsPrice(String propertyValued) {
		List<Property> rows=valuationDaoImpl.getValuationApproach(propertyValued);
		String whitegoodsPrice = null;
		for(Property r1 : rows){
			whitegoodsPrice = r1.getWhitegoodsprice();
		}
		return whitegoodsPrice;
	}
	@Transactional
	public String getUtiliesPrice(String propertyValued) {
		List<Property> rows=valuationDaoImpl.getValuationApproach(propertyValued);
		String utiliesPrice = null;
		for(Property r1 : rows){
			utiliesPrice = r1.getUtilityprice();
		}
		return utiliesPrice;
	}
	@Transactional
	public String getDeveloper(String buildingName) {
		List<SoldTransactions> list = valuationDaoImpl.getEverything(buildingName);
		String developer = null;
		for(SoldTransactions r1 : list){
			developer = r1.getDeveloper();
			break;
		}
		return developer;
	}
	@Transactional
	public String getDevMargin(String propList) {
		List<Property> rows=valuationDaoImpl.getValuationApproach(propList);
		String devmargin = null;
		for(Property r1 : rows){
			devmargin = r1.getDevmargin();
		}
		return devmargin;
	}
	@Transactional
	public List<Property> getCategory() {
		List<Property> list = valuationDaoImpl.getCategory();
		return list;
	}
	@Transactional
	public String getCategory(String propertyValued) {
		List<Property> rows=valuationDaoImpl.getValuationApproach(propertyValued);
		String category = null;
		for(Property r1 : rows){
			category = r1.getPropertyCategory();
		}
		return category;
	}
}
