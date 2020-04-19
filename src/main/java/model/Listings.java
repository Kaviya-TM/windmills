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
@Table(name = "listings")
@Component
public class Listings  implements java.io.Serializable {
	private int listingsId;
	private String windmillsRef;
	private String listingsRef;
	private String source;
	private String listingWebsiteLink;
	private String listingsDate;
	private String propertyListed;
	private String tenure;
	private String unitNo;
	private String floorNo;
	private String buildingNo;
	private String buildingName;
	private String streetNo;
	private String streetName;
	private String subCommunity;
	private String community;
	private String city;
	private String plotNo;
	private String makani;
	private String location;
	private String locationCoord;
	private String landSize;
	private String bua;
	private String propPlacement;
	private String propExposure;
	private String propType;
	private String propCondition;
	private String development;
	private String developer;
	private String age;
	private String gym;
	private String pool;
	private String playarea;
	private String otherComFacility;
	private String comStatus;
	private String noOfBedrooms;
	private String fullBulFloors;
	private String parkingSpace;
	private String view;
	private String landScape;
	private String whiteGoods;
	private String furnished;
	private String utilityConnected;
	private String price;
	private String priceSqt;
	private String rent;
	private String finalRent;
	private String balcony;
	private String upgrades;
	private String finishStatus;
	private String agName;
	private String agPhoneNo;
	private String agCompany;
	
	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "listings_id", unique = true, nullable = false)
	public int getListingsId() {
		return listingsId;
	}
	public void setListingsId(int listingsId) {
		this.listingsId = listingsId;
	}
	@Column(name = "windmillsRef")
	public String getWindmillsRef() {
		return windmillsRef;
	}
	public void setWindmillsRef(String windmillsRef) {
		this.windmillsRef = windmillsRef;
	}
	@Column(name = "listingsRef")
	public String getListingsRef() {
		return listingsRef;
	}
	public void setListingsRef(String listingsRef) {
		this.listingsRef = listingsRef;
	}
	@Column(name = "source")
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		this.source = source;
	}
	@Column(name = "priceSqt")
	public String getPriceSqt() {
		return priceSqt;
	}
	public void setPriceSqt(String priceSqt) {
		this.priceSqt = priceSqt;
	}
	@Column(name = "listingWebsiteLink")
	public String getListingWebsiteLink() {
		return listingWebsiteLink;
	}
	public void setListingWebsiteLink(String listingWebsiteLink) {
		this.listingWebsiteLink = listingWebsiteLink;
	}
	@Column(name = "listingsDate")
	public String getListingsDate() {
		return listingsDate;
	}
	public void setListingsDate(String listingsDate) {
		this.listingsDate = listingsDate;
	}
	@Column(name = "propertyListed")
	public String getPropertyListed() {
		return propertyListed;
	}
	public void setPropertyListed(String propertyListed) {
		this.propertyListed = propertyListed;
	}
	@Column(name = "tenure")
	public String getTenure() {
		return tenure;
	}
	public void setTenure(String tenure) {
		this.tenure = tenure;
	}
	@Column(name = "unitNo")
	public String getUnitNo() {
		return unitNo;
	}
	public void setUnitNo(String unitNo) {
		this.unitNo = unitNo;
	}
	@Column(name = "floorNo")
	public String getFloorNo() {
		return floorNo;
	}
	public void setFloorNo(String floorNo) {
		this.floorNo = floorNo;
	}
	@Column(name = "buildingNo")
	public String getBuildingNo() {
		return buildingNo;
	}
	public void setBuildingNo(String buildingNo) {
		this.buildingNo = buildingNo;
	}
	@Column(name = "buildingName")
	public String getBuildingName() {
		return buildingName;
	}
	public void setBuildingName(String buildingName) {
		this.buildingName = buildingName;
	}
	@Column(name = "balcony")
	public String getBalcony() {
		return balcony;
	}
	public void setBalcony(String balcony) {
		this.balcony = balcony;
	}
	@Column(name = "upgrades")
	public String getUpgrades() {
		return upgrades;
	}
	public void setUpgrades(String upgrades) {
		this.upgrades = upgrades;
	}
	@Column(name = "finishStatus")
	public String getFinishStatus() {
		return finishStatus;
	}
	public void setFinishStatus(String finishStatus) {
		this.finishStatus = finishStatus;
	}
	@Column(name = "streetNo")
	public String getStreetNo() {
		return streetNo;
	}
	public void setStreetNo(String streetNo) {
		this.streetNo = streetNo;
	}
	@Column(name = "streetName")
	public String getStreetName() {
		return streetName;
	}
	public void setStreetName(String streetName) {
		this.streetName = streetName;
	}
	@Column(name = "subCommunity")
	public String getSubCommunity() {
		return subCommunity;
	}
	public void setSubCommunity(String subCommunity) {
		this.subCommunity = subCommunity;
	}
	@Column(name = "community")
	public String getCommunity() {
		return community;
	}
	public void setCommunity(String community) {
		this.community = community;
	}
	@Column(name = "city")
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	@Column(name = "plotNo")
	public String getPlotNo() {
		return plotNo;
	}
	public void setPlotNo(String plotNo) {
		this.plotNo = plotNo;
	}
	@Column(name = "makani")
	public String getMakani() {
		return makani;
	}
	public void setMakani(String makani) {
		this.makani = makani;
	}
	@Column(name = "location")
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	@Column(name = "locationCoord")
	public String getLocationCoord() {
		return locationCoord;
	}
	public void setLocationCoord(String locationCoord) {
		this.locationCoord = locationCoord;
	}
	@Column(name = "landSize")
	public String getLandSize() {
		return landSize;
	}
	public void setLandSize(String landSize) {
		this.landSize = landSize;
	}
	@Column(name = "bua")
	public String getBua() {
		return bua;
	}
	public void setBua(String bua) {
		this.bua = bua;
	}
	@Column(name = "propPlacement")
	public String getPropPlacement() {
		return propPlacement;
	}
	public void setPropPlacement(String propPlacement) {
		this.propPlacement = propPlacement;
	}
	@Column(name = "propExposure")
	public String getPropExposure() {
		return propExposure;
	}
	public void setPropExposure(String propExposure) {
		this.propExposure = propExposure;
	}
	@Column(name = "propType")
	public String getPropType() {
		return propType;
	}
	public void setPropType(String propType) {
		this.propType = propType;
	}
	@Column(name = "propCondition")
	public String getPropCondition() {
		return propCondition;
	}
	public void setPropCondition(String propCondition) {
		this.propCondition = propCondition;
	}
	@Column(name = "development")
	public String getDevelopment() {
		return development;
	}
	public void setDevelopment(String development) {
		this.development = development;
	}
	@Column(name = "developer")
	public String getDeveloper() {
		return developer;
	}
	public void setDeveloper(String developer) {
		this.developer = developer;
	}
	@Column(name = "age")
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}
	@Column(name = "gym")
	public String getGym() {
		return gym;
	}
	public void setGym(String gym) {
		this.gym = gym;
	}
	@Column(name = "pool")
	public String getPool() {
		return pool;
	}
	public void setPool(String pool) {
		this.pool = pool;
	}
	@Column(name = "playarea")
	public String getPlayarea() {
		return playarea;
	}
	public void setPlayarea(String playarea) {
		this.playarea = playarea;
	}
	@Column(name = "otherComFacility")
	public String getOtherComFacility() {
		return otherComFacility;
	}
	public void setOtherComFacility(String otherComFacility) {
		this.otherComFacility = otherComFacility;
	}
	@Column(name = "comStatus")
	public String getComStatus() {
		return comStatus;
	}
	public void setComStatus(String comStatus) {
		this.comStatus = comStatus;
	}
	@Column(name = "noOfBedrooms")
	public String getNoOfBedrooms() {
		return noOfBedrooms;
	}
	public void setNoOfBedrooms(String noOfBedrooms) {
		this.noOfBedrooms = noOfBedrooms;
	}
	@Column(name = "fullBulFloors")
	public String getFullBulFloors() {
		return fullBulFloors;
	}
	public void setFullBulFloors(String fullBulFloors) {
		this.fullBulFloors = fullBulFloors;
	}
	@Column(name = "parkingSpace")
	public String getParkingSpace() {
		return parkingSpace;
	}
	public void setParkingSpace(String parkingSpace) {
		this.parkingSpace = parkingSpace;
	}
	@Column(name = "view")
	public String getView() {
		return view;
	}
	public void setView(String view) {
		this.view = view;
	}
	@Column(name = "landScape")
	public String getLandScape() {
		return landScape;
	}
	public void setLandScape(String landScape) {
		this.landScape = landScape;
	}
	@Column(name = "whiteGoods")
	public String getWhiteGoods() {
		return whiteGoods;
	}
	public void setWhiteGoods(String whiteGoods) {
		this.whiteGoods = whiteGoods;
	}
	@Column(name = "furnished")
	public String getFurnished() {
		return furnished;
	}
	public void setFurnished(String furnished) {
		this.furnished = furnished;
	}
	@Column(name = "utilityConnected")
	public String getUtilityConnected() {
		return utilityConnected;
	}
	public void setUtilityConnected(String utilityConnected) {
		this.utilityConnected = utilityConnected;
	}
	@Column(name = "price")
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	@Column(name = "rent")
	public String getRent() {
		return rent;
	}
	public void setRent(String rent) {
		this.rent = rent;
	}
	@Column(name = "finalRent")
	public String getFinalRent() {
		return finalRent;
	}
	public void setFinalRent(String finalRent) {
		this.finalRent = finalRent;
	}
	@Column(name = "agName")
	public String getAgName() {
		return agName;
	}
	public void setAgName(String agName) {
		this.agName = agName;
	}
	@Column(name = "agPhoneNo")
	public String getAgPhoneNo() {
		return agPhoneNo;
	}
	public void setAgPhoneNo(String agPhoneNo) {
		this.agPhoneNo = agPhoneNo;
	}
	@Column(name = "agCompany")
	public String getAgCompany() {
		return agCompany;
	}
	public void setAgCompany(String agCompany) {
		this.agCompany = agCompany;
	}
	
}
