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
		log.info("beginning of save report");
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
		
		log.info("End of save report");
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
	@Transactional
	public List<Documents> getDocuments(int reportId) {
		List<Documents> list =  valuationDaoImpl.getDocuments(reportId);
		return list;
	}


}
