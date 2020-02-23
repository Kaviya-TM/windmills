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
	public void saveValuationReport(ValuationReport valuationreport) {
		valuationDaoImpl.saveValuationReport(valuationreport);
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


}
