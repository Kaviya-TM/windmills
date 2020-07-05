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

import dao.ClientDaoImpl;
import dao.ServiceOfficerDaoImpl;
import model.ClientDetails;
import model.ServiceOfficer;
import utils.Constants;

@Service
public class ServiceOfficerService {
	@Autowired
	private ServiceOfficerDaoImpl serviceOfficerDaoImpl;
	@Autowired
	private ServiceOfficer serviceOfficer;
	@Autowired
	private SessionFactory status;

	static Logger log = Logger.getLogger(ClientService.class);


	@Transactional
	public void addServiceOfficer(ServiceOfficer serviceOfficer) {
		log.info("beginning of add service Officer");
		serviceOfficer.setCreateDate(new Date());
		serviceOfficer.setModifiedDate(new Date());
		serviceOfficerDaoImpl.addServiceOfficer(serviceOfficer);
		
	}

	@Transactional
	public boolean checkServiceOfficer(HttpSession session, String email) {
		log.info("beginning of check service Officer");
		boolean status = false;
		status = serviceOfficerDaoImpl.checkServiceOfficer(email);
		return status;

	}
	

    @Transactional
	public String findNamebyEmail(String email) {
    	log.info("beginning of get service Officer");
    	List<ServiceOfficer>  list = serviceOfficerDaoImpl.findNamebyEmail(email);
    	log.info("list"+list);
    	String name = null;
    	if (list.size() != 0) {
    		ServiceOfficer serviceOfficer = list.get(0);
    		name = serviceOfficer.getName();
		}
    	else{
    		name = email;
    	}
		return name;
	}
    
    @Transactional
	public List<Object[]> getOfficerlist() {
		log.info("beginning of get list of  service Officer");
		List<Object[]> list=serviceOfficerDaoImpl.getOfficerlist();
		log.info("list"+list);
		return list;
	}

	@Transactional
	public ServiceOfficer getServiceOfficer(int serviceId)
	{
		List<ServiceOfficer> list=serviceOfficerDaoImpl.getServiceOfficer(serviceId);
		if(list!=null && !list.isEmpty())
		{
			serviceOfficer=list.get(0);
		}
		return serviceOfficer;
	}
	
	@Transactional
	public void editServiceOfficer(ServiceOfficer serviceOfficer)
	{
	serviceOfficer.setCreateDate(new Date());
	serviceOfficer.setModifiedDate(new Date());
	serviceOfficerDaoImpl.updateServiceOfficer(serviceOfficer);


	}


	
}
