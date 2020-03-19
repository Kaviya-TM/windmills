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
import dao.WeightageDaoImpl;
import model.ClientDetails;
import model.Property;
import model.ServiceOfficer;
import model.Weightage;
import utils.Constants;

@Service
public class WeightageService {
	@Autowired
	private WeightageDaoImpl weightageDaoImpl;
	@Autowired
	private Weightage weightage;
	@Autowired
	private SessionFactory status;

	static Logger log = Logger.getLogger(WeightageService.class);
	
	@Transactional
	public void addWeightage(Weightage weightage) {
		weightageDaoImpl.addWeightage(weightage);
	}
	@Transactional
	public List<Object[]> getWeightage() {
		List<Object[]> list=weightageDaoImpl.getWeightage();
		return list;
	}
	@Transactional
	public Weightage getWeightage(int weightId) {
		List<Weightage> list=weightageDaoImpl.getWeightage(weightId);
		if(list!=null && !list.isEmpty())
		{
			weightage=list.get(0);
		}
		return weightage;
	}
	@Transactional
	public void editWeightage(Weightage weightage) {
		weightageDaoImpl.updateWeightage(weightage);
	}
	@Transactional
	public void deleteWeightage(int weightId) {
		weightageDaoImpl.deleteWeightage(weightId);
	}
	
}
