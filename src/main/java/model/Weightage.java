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
	
	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "weight_id", unique = true, nullable = false)
	public int getWeightId() {
		return weightId;
	}
	public void setWeightId(int weightId) {
		this.weightId = weightId;
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
	
}
