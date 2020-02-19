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
import model.ClientDetails;
import model.ServiceOfficer;
import utils.Constants;

@Service
public class ClientService {
	@Autowired
	private ClientDaoImpl clientDaoImpl;
	@Autowired
	private ClientDetails clientdetails;
	@Autowired
	private SessionFactory sessionFactory;

	static Logger log = Logger.getLogger(ClientService.class);


	@Transactional
	public void addClient(ClientDetails clientdetails) throws IllegalStateException, IOException {
		log.info("beginning of addclient");
		clientdetails.setCreateDate(new Date());
		clientdetails.setModifiedDate(new Date());
		clientDaoImpl.addClient(clientdetails);
	}

	@Transactional
	public List<Object[]> getClients() {
		log.info("beginning of getclient");
		List<Object[]> list=clientDaoImpl.getClients();
		log.info("list"+list);
		return list;
	}
	@Transactional
	public ClientDetails getClient(int clientId) {
		log.info("beginning of edit client");
		List<ClientDetails> list=clientDaoImpl.getClient(clientId);
		if(list!=null && !list.isEmpty())
		{
			clientdetails=list.get(0);
		}
		return clientdetails;
	}
	@Transactional
	public void editClientDetails(ClientDetails clientdetails) {
		clientdetails.setCreateDate(new Date());
		clientdetails.setModifiedDate(new Date());
		clientDaoImpl.updateClientDetails(clientdetails);
	}

	
}
