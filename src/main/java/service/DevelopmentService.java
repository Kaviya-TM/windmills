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
import dao.DevelopmentDaoImpl;
import dao.ServiceOfficerDaoImpl;
import model.ClientDetails;
import model.Development;
import model.Property;
import model.ServiceOfficer;
import utils.Constants;

@Service
public class DevelopmentService {
	@Autowired
	private DevelopmentDaoImpl developmentDaoImpl;
	@Autowired
	private Development development;
	@Autowired
	private SessionFactory status;

	static Logger log = Logger.getLogger(DevelopmentService.class);
	@Transactional

	public void addDevelopment(Development development) {
		developmentDaoImpl.addDevelopment(development);
	}
	@Transactional
	public List<Object[]> getDevelopment() {
		List<Object[]> list=developmentDaoImpl.getDevelopment();
		return list;
	}
	@Transactional
	public Development getDevelopment(int developmentId) {
		List<Development> list=developmentDaoImpl.getDevelopment(developmentId);
		if(list!=null && !list.isEmpty())
		{
			development=list.get(0);
		}
		return development;
	}
	@Transactional
	public void editDevelopment(Development development) {
		developmentDaoImpl.editDevelopment(development);
	}
	@Transactional
	public void deleteDevelopment(int developmentId) {
		developmentDaoImpl.deleteDevelopment(developmentId);
	}
	@Transactional
	public List<Development> getDevelopment(String emirates) {
		List<Development> list=developmentDaoImpl.getDevelopment(emirates);
		return list;
	}
	@Transactional
	public List<Property> getPropDetails(String propertyValued) {
		List<Property> list=developmentDaoImpl.getPropDetails(propertyValued);
		return list;
	}
	
}
