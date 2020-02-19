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
import dao.CommunityDaoImpl;
import dao.PropertyDaoImpl;
import dao.ServiceOfficerDaoImpl;
import model.ClientDetails;
import model.Community;
import model.Property;
import model.ServiceOfficer;
import utils.Constants;

@Service
public class CommunityService {
	@Autowired
	private CommunityDaoImpl communityDaoImpl;
	@Autowired
	private Community community;
	@Autowired
	private SessionFactory status;

	static Logger log = Logger.getLogger(CommunityService.class);
	
	@Transactional
	public void addCommunity(Community community) {
		log.info("beginning of add community");
		communityDaoImpl.addCommunity(community);
	}
	@Transactional
	public List<Object[]> getCommunity() {
		List<Object[]> list=communityDaoImpl.getCommunity();
		log.info("list"+list);
		return list;
	}
	@Transactional
	public Community getCommunity(int communityId) {
		log.info("beginning of get community");
		List<Community> list=communityDaoImpl.getCommunity(communityId);
		if(list!=null && !list.isEmpty())
		{
			community=list.get(0);
		}
		return community;
	}
	@Transactional
	public void editCommunity(Community community) {
		log.info("beginning of update community");
		communityDaoImpl.updateCommunity(community);
	}
	
}
