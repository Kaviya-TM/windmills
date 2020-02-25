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
import org.springframework.web.servlet.ModelAndView;

import dao.ClientDaoImpl;
import dao.PropertyDaoImpl;
import dao.ServiceOfficerDaoImpl;
import model.ClientDetails;
import model.Property;
import model.ServiceOfficer;
import utils.Constants;

@Service
public class PropertyService {
	@Autowired
	private PropertyDaoImpl propertyDaoImpl;
	@Autowired
	private Property property;
	@Autowired
	private SessionFactory status;

	static Logger log = Logger.getLogger(ClientService.class);
	@Transactional

	public void addPropertyValued(Property property) {
		log.info("beginning of add property");
		propertyDaoImpl.addPropertyValued(property);
	}
	@Transactional
	public List<Object[]> getPropertyValued() {
		log.info("beginning of get property valued");
		List<Object[]> list=propertyDaoImpl.getPropertyValued();
		log.info("list"+list);
		return list;
	}
	@Transactional
	public Property getPropertyValued(int propertyId) {
		log.info("beginning of property valued");
		List<Property> list=propertyDaoImpl.getPropertyValued(propertyId);
		if(list!=null && !list.isEmpty())
		{
			property=list.get(0);
		}
		return property;
	}
	@Transactional
	public void editPropertyValued(Property property) {
		log.info("beginning of update property valued");
		propertyDaoImpl.updatePropertyValued(property);
	}
	@Transactional
	public void deletePropertyValued(int propertyId) {
		log.info("beginning of delete property valued");
		propertyDaoImpl.deletePropertyValued(propertyId);
	}
	
}
