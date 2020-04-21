package model;

import static javax.persistence.GenerationType.IDENTITY;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;

import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

@Entity
@Table(name = "weightage")
@Component
public class Weightage  implements java.io.Serializable {

	private int weightId;
	private String emirates;
	private String propertyType;
	private String propertyExposure;
	private String propertyPlacement;
	private String finishingStatus;
	private String bedroom;
	private String location;
	private String view;
	private String quality;
	private String floor;
	private String bua;
	private String age;
	private String landSize;
	private String lessThan1Month;
	private String lessThan2Month;
	private String lessThan3Month;
	private String lessThan4Month;
	private String lessThan5Month;
	private String lessThan6Month;
	private String lessThan7Month;
	private String lessThan8Month;
	private String lessThan9Month;
	private String lessThan10Month;
	private String lessThan11Month;
	private String lessThan12Month;
	private String balsize;
	private String furnished;
	private String upgrade;
	private String parking;
	private String pool;
	private String landscape;
	private String whitegoods;
	private String utilities;
	private String tenure;
	
	
	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "weight_id", unique = true, nullable = false)
	public int getWeightId() {
		return weightId;
	}
	public void setWeightId(int weightId) {
		this.weightId = weightId;
	}
	@Column(name = "lessThan1Month")
	public String getLessThan1Month() {
		return lessThan1Month;
	}
	public void setLessThan1Month(String lessThan1Month) {
		this.lessThan1Month = lessThan1Month;
	}
	@Column(name = "lessThan2Month")
	public String getLessThan2Month() {
		return lessThan2Month;
	}
	public void setLessThan2Month(String lessThan2Month) {
		this.lessThan2Month = lessThan2Month;
	}
	@Column(name = "lessThan3Month")
	public String getLessThan3Month() {
		return lessThan3Month;
	}
	public void setLessThan3Month(String lessThan3Month) {
		this.lessThan3Month = lessThan3Month;
	}
	@Column(name = "lessThan4Month")
	public String getLessThan4Month() {
		return lessThan4Month;
	}
	public void setLessThan4Month(String lessThan4Month) {
		this.lessThan4Month = lessThan4Month;
	}
	@Column(name = "lessThan5Month")
	public String getLessThan5Month() {
		return lessThan5Month;
	}
	public void setLessThan5Month(String lessThan5Month) {
		this.lessThan5Month = lessThan5Month;
	}
	@Column(name = "lessThan6Month")
	public String getLessThan6Month() {
		return lessThan6Month;
	}
	public void setLessThan6Month(String lessThan6Month) {
		this.lessThan6Month = lessThan6Month;
	}
	@Column(name = "lessThan7Month")
	public String getLessThan7Month() {
		return lessThan7Month;
	}
	public void setLessThan7Month(String lessThan7Month) {
		this.lessThan7Month = lessThan7Month;
	}
	@Column(name = "lessThan8Month")
	public String getLessThan8Month() {
		return lessThan8Month;
	}
	public void setLessThan8Month(String lessThan8Month) {
		this.lessThan8Month = lessThan8Month;
	}
	@Column(name = "lessThan9Month")
	public String getLessThan9Month() {
		return lessThan9Month;
	}
	public void setLessThan9Month(String lessThan9Month) {
		this.lessThan9Month = lessThan9Month;
	}
	@Column(name = "lessThan10Month")
	public String getLessThan10Month() {
		return lessThan10Month;
	}
	public void setLessThan10Month(String lessThan10Month) {
		this.lessThan10Month = lessThan10Month;
	}
	@Column(name = "lessThan11Month")
	public String getLessThan11Month() {
		return lessThan11Month;
	}
	public void setLessThan11Month(String lessThan11Month) {
		this.lessThan11Month = lessThan11Month;
	}
	@Column(name = "lessThan12Month")
	public String getLessThan12Month() {
		return lessThan12Month;
	}
	public void setLessThan12Month(String lessThan12Month) {
		this.lessThan12Month = lessThan12Month;
	}
	@Column(name = "propertyExposure")
	public String getPropertyExposure() {
		return propertyExposure;
	}
	public void setPropertyExposure(String propertyExposure) {
		this.propertyExposure = propertyExposure;
	}
	@Column(name = "propertyPlacement")
	public String getPropertyPlacement() {
		return propertyPlacement;
	}
	public void setPropertyPlacement(String propertyPlacement) {
		this.propertyPlacement = propertyPlacement;
	}
	@Column(name = "finishingStatus")
	public String getFinishingStatus() {
		return finishingStatus;
	}
	public void setFinishingStatus(String finishingStatus) {
		this.finishingStatus = finishingStatus;
	}
	@Column(name = "bedroom")
	public String getBedroom() {
		return bedroom;
	}
	public void setBedroom(String bedroom) {
		this.bedroom = bedroom;
	}
	@Column(name = "emirates")
	public String getEmirates() {
		return emirates;
	}
	public void setEmirates(String emirates) {
		this.emirates = emirates;
	}
	@Column(name = "propertyType")
	public String getPropertyType() {
		return propertyType;
	}
	public void setPropertyType(String propertyType) {
		this.propertyType = propertyType;
	}
	@Column(name = "location")
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	@Column(name = "age")
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}
	@Column(name = "view")
	public String getView() {
		return view;
	}
	public void setView(String view) {
		this.view = view;
	}
	@Column(name = "quality")
	public String getQuality() {
		return quality;
	}
	public void setQuality(String quality) {
		this.quality = quality;
	}
	@Column(name = "floor")
	public String getFloor() {
		return floor;
	}
	public void setFloor(String floor) {
		this.floor = floor;
	}
	@Column(name = "bua")
	public String getBua() {
		return bua;
	}
	public void setBua(String bua) {
		this.bua = bua;
	}
	@Column(name = "landSize")
	public String getLandSize() {
		return landSize;
	}
	public void setLandSize(String landSize) {
		this.landSize = landSize;
	}
	@Column(name = "balsize")
	public String getBalsize() {
		return balsize;
	}
	public void setBalsize(String balsize) {
		this.balsize = balsize;
	}
	@Column(name = "furnished")
	public String getFurnished() {
		return furnished;
	}
	public void setFurnished(String furnished) {
		this.furnished = furnished;
	}
	@Column(name = "upgrade")
	public String getUpgrade() {
		return upgrade;
	}
	public void setUpgrade(String upgrade) {
		this.upgrade = upgrade;
	}
	@Column(name = "parking")
	public String getParking() {
		return parking;
	}
	public void setParking(String parking) {
		this.parking = parking;
	}
	@Column(name = "pool")
	public String getPool() {
		return pool;
	}
	public void setPool(String pool) {
		this.pool = pool;
	}
	@Column(name = "landscape")
	public String getLandscape() {
		return landscape;
	}
	public void setLandscape(String landscape) {
		this.landscape = landscape;
	}
	@Column(name = "whitegoods")
	public String getWhitegoods() {
		return whitegoods;
	}
	public void setWhitegoods(String whitegoods) {
		this.whitegoods = whitegoods;
	}
	@Column(name = "utilities")
	public String getUtilities() {
		return utilities;
	}
	public void setUtilities(String utilities) {
		this.utilities = utilities;
	}
	@Column(name = "tenure")
	public String getTenure() {
		return tenure;
	}
	public void setTenure(String tenure) {
		this.tenure = tenure;
	}
	
	
}
