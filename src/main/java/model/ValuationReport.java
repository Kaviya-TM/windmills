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
@Table(name = "valuationreport")
@Component
public class ValuationReport implements java.io.Serializable {

	private int reportId;
	private String windmillsRef;
	private String clientRef;
	private String clientName;
	private String clientCustomerName;
	private String ownerName;
	private String serviceOffName;
	private String valInstrDate;
	private String valDate;
	private String propertyValued;
	private String tenure;
	private String unitNo;
	private String floorNo;
	private String streetNo;
	private String streetName;
	private String buildingNo;
	private String buildingName;
	private String community;
	private String subCommunity;
	private String plotNo;
	private String town;
	private String city;
	private String country;
	private String valuationInstrPerson;
	private String plotSize;
	private String propOfVal;
	private String valApproach;
	private String basesOfValue;
	private String approachReasoning;
	private String insDate;
	private String insType;
	private String insOfficer;
	private String makaniNo;
	private String location;
	private String locationCoord;
	private String propertyPlacement;
	private String propertyExposure;
	private String propertyType;
	private String propertyCondition;
	private String devType;
	private String developer;
	private String estAge;
	private String estemLife;
	private String completionStatus;
	private String occupancyStatus;
	private String bulComFacilities;
	private String buitUpAreaSize;
	private String accomodation;
	private String groundFloor;
	private String firstFloor;
	private String secondFloor;
	private String fullBulFloors;
	private String upgrades;
	private String view;
	private boolean swimmingFool;
	private boolean landScaping;
	private String parkingBays;
	private boolean windowAC;
	private boolean splitUnitsAC;
	private boolean centralChiller;
	private boolean fridge;
	private boolean oven;
	private boolean cooker;
	private boolean washingMachine;
	private boolean furnished;
	private boolean utilityConnected;
	private String valAdjustment;
	private String docProvByClients;
	private String docNotProvided;
	private String marketValue;
	private String marketValueRate;
	private String marketRent;
	private String marketSummary;
	private String specialAssumption;
		

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "report_id", unique = true, nullable = false)
	public int getReportId() {
		return reportId;
	}

	public void setReportId(int reportId) {
		this.reportId = reportId;
	}
	@Column(name = "windmillsRef")
	public String getWindmillsRef() {
		return windmillsRef;
	}

	public void setWindmillsRef(String windmillsRef) {
		this.windmillsRef = windmillsRef;
	}
	@Column(name = "clientRef")
	public String getClientRef() {
		return clientRef;
	}
	
	public void setClientRef(String clientRef) {
		this.clientRef = clientRef;
	}
	@Column(name = "clientName")
	public String getClientName() {
		return clientName;
	}

	public void setClientName(String clientName) {
		this.clientName = clientName;
	}
	@Column(name = "clientCustomerName")
	public String getClientCustomerName() {
		return clientCustomerName;
	}

	public void setClientCustomerName(String clientCustomerName) {
		this.clientCustomerName = clientCustomerName;
	}
	@Column(name = "ownerName")
	public String getOwnerName() {
		return ownerName;
	}

	public void setOwnerName(String ownerName) {
		this.ownerName = ownerName;
	}
	@Column(name = "serviceOffName")
	public String getServiceOffName() {
		return serviceOffName;
	}

	public void setServiceOffName(String serviceOffName) {
		this.serviceOffName = serviceOffName;
	}
	@Column(name = "valInstrDate")
	public String getValInstrDate() {
		return valInstrDate;
	}

	public void setValInstrDate(String valInstrDate) {
		this.valInstrDate = valInstrDate;
	}
	@Column(name = "valDate")
	public String getValDate() {
		return valDate;
	}

	public void setValDate(String valDate) {
		this.valDate = valDate;
	}
	@Column(name = "propertyValued")
	public String getPropertyValued() {
		return propertyValued;
	}

	public void setPropertyValued(String propertyValued) {
		this.propertyValued = propertyValued;
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

	@Column(name = "community")
	public String getCommunity() {
		return community;
	}

	public void setCommunity(String community) {
		this.community = community;
	}
	@Column(name = "subCommunity")
	public String getSubCommunity() {
		return subCommunity;
	}

	public void setSubCommunity(String subCommunity) {
		this.subCommunity = subCommunity;
	}
	@Column(name = "plotNo")
	public String getPlotNo() {
		return plotNo;
	}

	public void setPlotNo(String plotNo) {
		this.plotNo = plotNo;
	}
	@Column(name = "town")
	public String getTown() {
		return town;
	}

	public void setTown(String town) {
		this.town = town;
	}
	@Column(name = "city")
	public String getCity() {
		return city;
	}
	
	public void setCity(String city) {
		this.city = city;
	}
	@Column(name = "country")
	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}
	@Column(name = "valuationInstrPerson")
	public String getValuationInstrPerson() {
		return valuationInstrPerson;
	}

	public void setValuationInstrPerson(String valuationInstrPerson) {
		this.valuationInstrPerson = valuationInstrPerson;
	}
	@Column(name = "plotSize")
	public String getPlotSize() {
		return plotSize;
	}

	public void setPlotSize(String plotSize) {
		this.plotSize = plotSize;
	}
	@Column(name = "propOfVal")
	public String getPropOfVal() {
		return propOfVal;
	}

	public void setPropOfVal(String propOfVal) {
		this.propOfVal = propOfVal;
	}
	@Column(name = "valApproach")
	public String getValApproach() {
		return valApproach;
	}

	public void setValApproach(String valApproach) {
		this.valApproach = valApproach;
	}
	@Column(name = "basesOfValue")
	public String getBasesOfValue() {
		return basesOfValue;
	}

	public void setBasesOfValue(String basesOfValue) {
		this.basesOfValue = basesOfValue;
	}
	@Column(name = "approachReasoning")
	public String getApproachReasoning() {
		return approachReasoning;
	}

	public void setApproachReasoning(String approachReasoning) {
		this.approachReasoning = approachReasoning;
	}
	@Column(name = "insDate")
	public String getInsDate() {
		return insDate;
	}

	public void setInsDate(String insDate) {
		this.insDate = insDate;
	}
	@Column(name = "insType")
	public String getInsType() {
		return insType;
	}

	public void setInsType(String insType) {
		this.insType = insType;
	}
	@Column(name = "insOfficer")
	public String getInsOfficer() {
		return insOfficer;
	}

	public void setInsOfficer(String insOfficer) {
		this.insOfficer = insOfficer;
	}
	@Column(name = "makaniNo")
	public String getMakaniNo() {
		return makaniNo;
	}

	public void setMakaniNo(String makaniNo) {
		this.makaniNo = makaniNo;
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
	@Column(name = "propertyPlacement")
	public String getPropertyPlacement() {
		return propertyPlacement;
	}

	public void setPropertyPlacement(String propertyPlacement) {
		this.propertyPlacement = propertyPlacement;
	}
	@Column(name = "propertyExposure")
	public String getPropertyExposure() {
		return propertyExposure;
	}

	public void setPropertyExposure(String propertyExposure) {
		this.propertyExposure = propertyExposure;
	}
	@Column(name = "propertyType")
	public String getPropertyType() {
		return propertyType;
	}

	public void setPropertyType(String propertyType) {
		this.propertyType = propertyType;
	}
	@Column(name = "propertyCondition")
	public String getPropertyCondition() {
		return propertyCondition;
	}

	public void setPropertyCondition(String propertyCondition) {
		this.propertyCondition = propertyCondition;
	}
	@Column(name = "devType")
	public String getDevType() {
		return devType;
	}

	public void setDevType(String devType) {
		this.devType = devType;
	}
	@Column(name = "developer")
	public String getDeveloper() {
		return developer;
	}

	public void setDeveloper(String developer) {
		this.developer = developer;
	}
	@Column(name = "estAge")
	public String getEstAge() {
		return estAge;
	}

	public void setEstAge(String estAge) {
		this.estAge = estAge;
	}
	@Column(name = "estemLife")
	public String getEstemLife() {
		return estemLife;
	}

	public void setEstemLife(String estemLife) {
		this.estemLife = estemLife;
	}
	@Column(name = "completionStatus")
	public String getCompletionStatus() {
		return completionStatus;
	}

	public void setCompletionStatus(String completionStatus) {
		this.completionStatus = completionStatus;
	}
	@Column(name = "occupancyStatus")
	public String getOccupancyStatus() {
		return occupancyStatus;
	}

	public void setOccupancyStatus(String occupancyStatus) {
		this.occupancyStatus = occupancyStatus;
	}
	@Column(name = "bulComFacilities")
	public String getBulComFacilities() {
		return bulComFacilities;
	}

	public void setBulComFacilities(String bulComFacilities) {
		this.bulComFacilities = bulComFacilities;
	}
	@Column(name = "buitUpAreaSize")
	public String getBuitUpAreaSize() {
		return buitUpAreaSize;
	}

	public void setBuitUpAreaSize(String buitUpAreaSize) {
		this.buitUpAreaSize = buitUpAreaSize;
	}
	@Column(name = "accomodation")
	public String getAccomodation() {
		return accomodation;
	}

	public void setAccomodation(String accomodation) {
		this.accomodation = accomodation;
	}
	@Column(name = "groundFloor")
	public String getGroundFloor() {
		return groundFloor;
	}

	public void setGroundFloor(String groundFloor) {
		this.groundFloor = groundFloor;
	}
	@Column(name = "firstFloor")
	public String getFirstFloor() {
		return firstFloor;
	}

	public void setFirstFloor(String firstFloor) {
		this.firstFloor = firstFloor;
	}
	@Column(name = "secondFloor")
	public String getSecondFloor() {
		return secondFloor;
	}

	public void setSecondFloor(String secondFloor) {
		this.secondFloor = secondFloor;
	}
	@Column(name = "fullBulFloors")
	public String getFullBulFloors() {
		return fullBulFloors;
	}

	public void setFullBulFloors(String fullBulFloors) {
		this.fullBulFloors = fullBulFloors;
	}
	@Column(name = "upgrades")
	public String getUpgrades() {
		return upgrades;
	}

	public void setUpgrades(String upgrades) {
		this.upgrades = upgrades;
	}
	@Column(name = "view")
	public String getView() {
		return view;
	}

	public void setView(String view) {
		this.view = view;
	}
	@Column(name = "swimmingFool")
	public boolean getSwimmingFool() {
		return swimmingFool;
	}

	public void setSwimmingFool(boolean swimmingFool) {
		this.swimmingFool = swimmingFool;
	}
	@Column(name = "landScaping")
	public boolean getLandScaping() {
		return landScaping;
	}

	public void setLandScaping(boolean landScaping) {
		this.landScaping = landScaping;
	}
	@Column(name = "parkingBays")
	public String getParkingBays() {
		return parkingBays;
	}

	public void setParkingBays(String parkingBays) {
		this.parkingBays = parkingBays;
	}
	@Column(name = "windowAC")
	public boolean getWindowAC() {
		return windowAC;
	}

	public void setWindowAC(boolean windowAC) {
		this.windowAC = windowAC;
	}
	@Column(name = "splitUnitsAC")
	public boolean getSplitUnitsAC() {
		return splitUnitsAC;
	}

	public void setSplitUnitsAC(boolean splitUnitsAC) {
		this.splitUnitsAC = splitUnitsAC;
	}
	@Column(name = "centralChiller")
	public boolean getCentralChiller() {
		return centralChiller;
	}

	public void setCentralChiller(boolean centralChiller) {
		this.centralChiller = centralChiller;
	}
	@Column(name = "fridge")
	public boolean getFridge() {
		return fridge;
	}

	public void setFridge(boolean fridge) {
		this.fridge = fridge;
	}
	@Column(name = "oven")
	public boolean getOven() {
		return oven;
	}

	public void setOven(boolean oven) {
		this.oven = oven;
	}
	@Column(name = "cooker")
	public boolean getCooker() {
		return cooker;
	}

	public void setCooker(boolean cooker) {
		this.cooker = cooker;
	}
	@Column(name = "washingMachine")
	public boolean getWashingMachine() {
		return washingMachine;
	}

	public void setWashingMachine(boolean washingMachine) {
		this.washingMachine = washingMachine;
	}
	@Column(name = "furnished")
	public boolean getFurnished() {
		return furnished;
	}

	public void setFurnished(boolean furnished) {
		this.furnished = furnished;
	}
	@Column(name = "utilityConnected")
	public boolean getUtilityConnected() {
		return utilityConnected;
	}

	public void setUtilityConnected(boolean utilityConnected) {
		this.utilityConnected = utilityConnected;
	}
	@Column(name = "valAdjustment")
	public String getValAdjustment() {
		return valAdjustment;
	}

	public void setValAdjustment(String valAdjustment) {
		this.valAdjustment = valAdjustment;
	}
	@Column(name = "docProvByClients")
	public String getDocProvByClients() {
		return docProvByClients;
	}

	public void setDocProvByClients(String docProvByClients) {
		this.docProvByClients = docProvByClients;
	}
	@Column(name = "docNotProvided")
	public String getDocNotProvided() {
		return docNotProvided;
	}

	public void setDocNotProvided(String docNotProvided) {
		this.docNotProvided = docNotProvided;
	}
	@Column(name = "marketValue")
	public String getMarketValue() {
		return marketValue;
	}

	public void setMarketValue(String marketValue) {
		this.marketValue = marketValue;
	}
	@Column(name = "marketValueRate")
	public String getMarketValueRate() {
		return marketValueRate;
	}

	public void setMarketValueRate(String marketValueRate) {
		this.marketValueRate = marketValueRate;
	}
	@Column(name = "marketRent")
	public String getMarketRent() {
		return marketRent;
	}

	public void setMarketRent(String marketRent) {
		this.marketRent = marketRent;
	}
	@Column(name = "marketSummary")
	public String getMarketSummary() {
		return marketSummary;
	}

	public void setMarketSummary(String marketSummary) {
		this.marketSummary = marketSummary;
	}
	@Column(name = "specialAssumption")
	public String getSpecialAssumption() {
		return specialAssumption;
	}

	public void setSpecialAssumption(String specialAssumption) {
		this.specialAssumption = specialAssumption;
	}

}
