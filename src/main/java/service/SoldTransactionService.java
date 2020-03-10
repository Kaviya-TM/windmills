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
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import dao.ClientDaoImpl;
import dao.SoldTransactionDaoImpl;
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
public class SoldTransactionService {
	@Autowired
	private SoldTransactionDaoImpl soldTransactionDaoImpl;
	@Autowired
	private SoldTransactions soldTransaction;
	
	static Logger log = Logger.getLogger(ValuationService.class);
	
	@Transactional
	public List<SoldTransactions> getSoldTransactions() {
		List<SoldTransactions> list = soldTransactionDaoImpl.getSoldTransactions();
		return list;

	}
	@Transactional
	public List<SoldTransactions> getCity() {
		List<SoldTransactions> list = soldTransactionDaoImpl.getCity();
		return list;
	}
	@Transactional
	public List<SoldTransactions> getArea() {
		List<SoldTransactions> list = soldTransactionDaoImpl.getArea();
		return list;
	}
	@Transactional
	public List<SoldTransactions> getNeighbourhood() {
		List<SoldTransactions> list = soldTransactionDaoImpl.getNeighbourhood();
		return list;
	}
	@Transactional
	public List<SoldTransactions> getBuildings() {
		List<SoldTransactions> list = soldTransactionDaoImpl.getBuildings();
		return list;
	}
	


}
