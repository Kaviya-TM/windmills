package service;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
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
import model.Property;
import model.ServiceOfficer;
import model.ValuationReport;

@Service
public class ValuationService {
	@Autowired
	private ValuationDaoImpl valuationDaoImpl;
	static Logger log = Logger.getLogger(ValuationService.class);
	
	@Transactional
	public List<ClientDetails> getClients() {
		log.info("valuation service to get clients");
		List<ClientDetails> list = valuationDaoImpl.getClient();
		return list;

	}
	@Transactional
	public List<ServiceOfficer> getServiceOfficer(String email) {
		log.info("valuation service to get service officer");
		List<ServiceOfficer> list = valuationDaoImpl.getServiceOfficer(email);
		return list;
	}
	@Transactional
	public List<ServiceOfficer> getDefaultServicer(String email) {
		log.info("valuation service to get default service officer");
		List<ServiceOfficer> rows=valuationDaoImpl.getDefaultServicer(email);
		log.info(rows);
		
		return rows;
	}
	
	@Transactional
	public List<ClientDetails> getValuationInstructingPerson(String clientName) {
		log.info("valuation service to get contact person");
		List<ClientDetails> list=valuationDaoImpl.getValuationInstructingPerson(clientName);
		return list;
	}
	@Transactional
	public void saveValuationReport(ValuationReport valuationreport) {
		log.info("beginning of save valuation report");
		valuationDaoImpl.saveValuationReport(valuationreport);
	}
	@Transactional
	public int getNumberOfRows() {
		log.info("beginning of get number of rows");
		int count = 0;
		count = valuationDaoImpl.getNumberOfRows();
		return count;
	}
	@Transactional
	public String getValuationApproach(String propertyValued) {
		log.info("valuation service to get valuation approach");
		List<Property> rows=valuationDaoImpl.getValuationApproach(propertyValued);
		String valApproach = null;
		for(Property r1 : rows){
			valApproach = r1.getValuationApproach();
		}
		log.info("valApproach--"+valApproach);
		return valApproach;
	}
	@Transactional
	public List<Property> getPropertyValued() {
		log.info("valuation service to get property valued");
		List<Property> list = valuationDaoImpl.getPropertyValued();
		return list;
	}
	@Transactional
	public List<Community> getCommunity() {
		log.info("valuation service to get community");
		List<Community> list = valuationDaoImpl.getCommunity();
		return list;
	}
	@Transactional
	public String getApproachReasoning(String propertyValued) {
		log.info("valuation service to get approach reasoning");
		List<Property> rows=valuationDaoImpl.getValuationApproach(propertyValued);
		String appReasoning = null;
		for(Property r1 : rows){
			appReasoning = r1.getApproachReasoning();
		}
		log.info("appReasoning--"+appReasoning);
		return appReasoning;
	}

}
