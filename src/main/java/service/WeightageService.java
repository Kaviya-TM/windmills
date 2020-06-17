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
import model.SoldTransactions;
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
	@Transactional
	public List<Weightage> getWeightage(String city, String propertyType) {
		List<Weightage> list=weightageDaoImpl.getWeightage(city,propertyType);
		return list;
	}
	public String getLocWeight(List<Weightage> weightage) {
		String locweight = null;
		if(weightage.size() == 1){
			for(Weightage wg : weightage){
				locweight = wg.getLocation();
				break;
			}
		}
		return locweight;
	}
	public String getViewWeight(List<Weightage> weightage) {
		String viewweight = null;
		if(weightage.size() == 1){
			for(Weightage wg : weightage){
				viewweight = wg.getView();
				break;
			}
		}
		return viewweight;
	}
	public String getQuaWeight(List<Weightage> weightage) {
		String quaweight = null;
		if(weightage.size() == 1){
			for(Weightage wg : weightage){
				quaweight = wg.getQuality();
				break;
			}
		}
		return quaweight;
	}
	public String getFloorWeight(List<Weightage> weightage) {
		String floorweight = null;
		if(weightage.size() == 1){
			for(Weightage wg : weightage){
				floorweight = wg.getFloor();
				break;
			}
		}
		return floorweight;
	}
	public String getLandWeight(List<Weightage> weightage) {
		String landweight = null;
		if(weightage.size() == 1){
			for(Weightage wg : weightage){
				landweight = wg.getLandSize();
				break;
			}
		}
		return landweight;
	}
	public String getBuaWeight(List<Weightage> weightage) {
		String buaweight = null;
		if(weightage.size() == 1){
			for(Weightage wg : weightage){
				buaweight = wg.getLandSize();
				break;
			}
		}
		return buaweight;
	}
	public String getDateWeight(List<Weightage> weightage) {
		String dateweight = null;
		if(weightage.size() == 1){
			for(Weightage wg : weightage){
				dateweight = wg.getAge();
				break;
			}
		}
		return dateweight;
	}
	public String getExpWeight(List<Weightage> weightage) {
		String expweight = null;
		if(weightage.size() == 1){
			for(Weightage wg : weightage){
				expweight = wg.getPropertyExposure();
				break;
			}
		}
		return expweight;
	}
	public String getPlaWeight(List<Weightage> weightage) {
		String plaweight = null;
		if(weightage.size() == 1){
			for(Weightage wg : weightage){
				plaweight = wg.getPropertyPlacement();
				break;
			}
		}
		return plaweight;
	}
	public String getStaWeight(List<Weightage> weightage) {
		String staweight = null;
		if(weightage.size() == 1){
			for(Weightage wg : weightage){
				staweight = wg.getFinishingStatus();
				break;
			}
		}
		return staweight;
	}
	public String getBedWeight(List<Weightage> weightage) {
		String bedweight = null;
		if(weightage.size() == 1){
			for(Weightage wg : weightage){
				bedweight = wg.getBedroom();
				break;
			}
		}
		return bedweight;
	}
	public String getLessThan1Month(List<Weightage> weightage) {
		String lessThan1Month = null;
		if(weightage.size() == 1){
			for(Weightage wg : weightage){
				lessThan1Month = wg.getLessThan1Month();
				break;
			}
		}
		return lessThan1Month;
	}
	public String getLessThan2Month(List<Weightage> weightage) {
		String lessThan2Month = null;
		if(weightage.size() == 1){
			for(Weightage wg : weightage){
				lessThan2Month = wg.getLessThan2Month();
				break;
			}
		}
		return lessThan2Month;
	}
	public String getLessThan4Month(List<Weightage> weightage) {
		String lessThan4Month = null;
		if(weightage.size() == 1){
			for(Weightage wg : weightage){
				lessThan4Month = wg.getLessThan4Month();
				break;
			}
		}
		return lessThan4Month;
		
	}
	public String getLessThan3Month(List<Weightage> weightage) {
		String lessThan3Month = null;
		if(weightage.size() == 1){
			for(Weightage wg : weightage){
				lessThan3Month = wg.getLessThan3Month();
				break;
			}
		}
		return lessThan3Month;
	}
	public String getLessThan5Month(List<Weightage> weightage) {
		String lessThan5Month = null;
		if(weightage.size() == 1){
			for(Weightage wg : weightage){
				lessThan5Month = wg.getLessThan5Month();
				break;
			}
		}
		return lessThan5Month;
	}
	public String getLessThan6Month(List<Weightage> weightage) {
		String lessThan6Month = null;
		if(weightage.size() == 1){
			for(Weightage wg : weightage){
				lessThan6Month = wg.getLessThan6Month();
				break;
			}
		}
		return lessThan6Month;
	}
	public String getLessThan7Month(List<Weightage> weightage) {
		String lessThan7Month = null;
		if(weightage.size() == 1){
			for(Weightage wg : weightage){
				lessThan7Month = wg.getLessThan7Month();
				break;
			}
		}
		return lessThan7Month;
	}
	public String getLessThan8Month(List<Weightage> weightage) {
		String lessThan8Month = null;
		if(weightage.size() == 1){
			for(Weightage wg : weightage){
				lessThan8Month = wg.getLessThan8Month();
				break;
			}
		}
		return lessThan8Month;
	}
	public String getLessThan9Month(List<Weightage> weightage) {
		String lessThan9Month = null;
		if(weightage.size() == 1){
			for(Weightage wg : weightage){
				lessThan9Month = wg.getLessThan9Month();
				break;
			}
		}
		return lessThan9Month;
	}
	public String getLessThan10Month(List<Weightage> weightage) {
		String lessThan10Month = null;
		if(weightage.size() == 1){
			for(Weightage wg : weightage){
				lessThan10Month = wg.getLessThan10Month();
				break;
			}
		}
		return lessThan10Month;
	}
	public String getLessThan11Month(List<Weightage> weightage) {
		String lessThan11Month = null;
		if(weightage.size() == 1){
			for(Weightage wg : weightage){
				lessThan11Month = wg.getLessThan11Month();
				break;
			}
		}
		return lessThan11Month;
	}
	public String getLessThan12Month(List<Weightage> weightage) {
		String lessThan12Month = null;
		if(weightage.size() == 1){
			for(Weightage wg : weightage){
				lessThan12Month = wg.getLessThan12Month();
				break;
			}
		}
		return lessThan12Month;
	}
	public String getFurWeight(List<Weightage> weightage) {
		String furweight = null;
		if(weightage.size() == 1){
			for(Weightage wg : weightage){
				furweight = wg.getFurnished();
				break;
			}
		}
		return furweight;
	}
	public String getBalWeight(List<Weightage> weightage) {
		String balweight = null;
		if(weightage.size() == 1){
			for(Weightage wg : weightage){
				balweight = wg.getBalsize();
				break;
			}
		}
		return balweight;
	}
	public String getUpgradeWeight(List<Weightage> weightage) {
		String upgradeweight = null;
		if(weightage.size() == 1){
			for(Weightage wg : weightage){
				upgradeweight = wg.getUpgrade();
				break;
			}
		}
		return upgradeweight;
	}
	public String getParkWeight(List<Weightage> weightage) {
		String parkWeight = null;
		if(weightage.size() == 1){
			for(Weightage wg : weightage){
				parkWeight = wg.getParking();
				break;
			}
		}
		return parkWeight;
	}
	public String getPoolWeight(List<Weightage> weightage) {
		String poolWeight = null;
		if(weightage.size() == 1){
			for(Weightage wg : weightage){
				poolWeight = wg.getPool();
				break;
			}
		}
		return poolWeight;
	}
	public String getLandScapeWeight(List<Weightage> weightage) {
		String landScapeWeight = null;
		if(weightage.size() == 1){
			for(Weightage wg : weightage){
				landScapeWeight = wg.getLandscape();
				break;
			}
		}
		return landScapeWeight;
	}
	public String getWhiteGoodsWeight(List<Weightage> weightage) {
		String whiteGoodsWeight = null;
		if(weightage.size() == 1){
			for(Weightage wg : weightage){
				whiteGoodsWeight = wg.getWhitegoods();
				break;
			}
		}
		return whiteGoodsWeight;
	}
	public String getUtilitiesWeight(List<Weightage> weightage) {
		String utilitiesWeight = null;
		if(weightage.size() == 1){
			for(Weightage wg : weightage){
				utilitiesWeight = wg.getUtilities();
				break;
			}
		}
		return utilitiesWeight;
	}
	public String getTenureWeight(List<Weightage> weightage) {
		String tenWeight = null;
		if(weightage.size() == 1){
			for(Weightage wg : weightage){
				tenWeight = wg.getTenure();
				break;
			}
		}
		return tenWeight;
	}
	public String getAgeWeight(List<Weightage> weightage) {
		String ageWeight = null;
		if(weightage.size() == 1){
			for(Weightage wg : weightage){
				ageWeight = wg.getAge();
				break;
			}
		}
		return ageWeight;
	}
	public String getLevelWeight(List<Weightage> weightage) {
		String levelWeight = null;
		if(weightage.size() == 1){
			for(Weightage wg : weightage){
				levelWeight = wg.getLevel();
				break;
			}
		}
		return levelWeight;
	}
	
}
