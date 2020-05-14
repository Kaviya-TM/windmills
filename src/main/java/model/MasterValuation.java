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
@Table(name = "masterlist")
@Component
public class MasterValuation  implements java.io.Serializable {

	private int masterId;
	private String instructionDate;
	private String inspectionDate;
	private String fee;
	private String targetDate;
	private String 	targetTime;
	private String dueDate;
	private String dateSubmitted;
	private String remarks;
	private String wmRef;
	private String clientRef;
	private String client;
	private String indivOrCompany;
	private String ownOrCustomer;
	private String contactPerson;
	private String designation;
	private String contactNo;
	private String type;
	private String propValued;
	private String tenure;
	private String plotNo;
	private String unitNo;
	private String building;
	private String subCommunity;
	private String community;
	private String city;
	private String valuationType;
	private String methodOfValuation;
	private String valuer;
	private String taquimeeNo;
	private String locationRating;
	private String viewRating ;
	private String qualityRating ;
	private String propplacement ;
	private String finishingStatus;
	private String propExposure ;
	private String floorNo ;
	private String noOfRooms;
	private String landsizepersqf;
	private String mvoflandpersqf;
	private String buapersqf;
	private String buapersm;
	private String bldgAge;
	private String statusOfValuer;
	private String mv;
	private String mvpersqf;
	private String purposeOfValuation;
	private String proposalSignedDate;
	private String reportAcceptanceDate;
	private String invoiceNumber;
	private String invoiceDate;
	private String paymentDate;
	private String paymentReceivedDate;
	private String overdueDays;
	private String hardCopyFilledDate;
	private String softCopyFilledDate;
	private String googleDriveLink;
	
	
	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "master_id", unique = true, nullable = false)
	public int getMasterId() {
		return masterId;
	}
	public void setMasterId(int masterId) {
		this.masterId = masterId;
	}
	@Column(name = "instructionDate")
	public String getInstructionDate() {
		return instructionDate;
	}
	public void setInstructionDate(String instructionDate) {
		this.instructionDate = instructionDate;
	}
	@Column(name = "inspectionDate")
	public String getInspectionDate() {
		return inspectionDate;
	}
	public void setInspectionDate(String inspectionDate) {
		this.inspectionDate = inspectionDate;
	}
	@Column(name = "Fee")
	public String getFee() {
		return fee;
	}
	public void setFee(String fee) {
		this.fee = fee;
	}
	@Column(name = "targetDate")
	public String getTargetDate() {
		return targetDate;
	}
	public void setTargetDate(String targetDate) {
		this.targetDate = targetDate;
	}
	@Column(name = "targetTime")
	public String getTargetTime() {
		return targetTime;
	}
	public void setTargetTime(String targetTime) {
		this.targetTime = targetTime;
	}
	@Column(name = "dueDate")
	public String getDueDate() {
		return dueDate;
	}
	public void setDueDate(String dueDate) {
		this.dueDate = dueDate;
	}
	@Column(name = "dateSubmitted")
	public String getDateSubmitted() {
		return dateSubmitted;
	}
	public void setDateSubmitted(String dateSubmitted) {
		this.dateSubmitted = dateSubmitted;
	}
	@Column(name = "remarks")
	public String getRemarks() {
		return remarks;
	}
	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}
	@Column(name = "wmRef")
	public String getWmRef() {
		return wmRef;
	}
	public void setWmRef(String wmRef) {
		this.wmRef = wmRef;
	}
	@Column(name = "clientRef")
	public String getClientRef() {
		return clientRef;
	}
	public void setClientRef(String clientRef) {
		this.clientRef = clientRef;
	}
	@Column(name = "client")
	public String getClient() {
		return client;
	}
	public void setClient(String client) {
		this.client = client;
	}
	@Column(name = "indivOrCompany")
	public String getIndivOrCompany() {
		return indivOrCompany;
	}
	public void setIndivOrCompany(String indivOrCompany) {
		this.indivOrCompany = indivOrCompany;
	}
	@Column(name = "ownOrCustomer")
	public String getOwnOrCustomer() {
		return ownOrCustomer;
	}
	public void setOwnOrCustomer(String ownOrCustomer) {
		this.ownOrCustomer = ownOrCustomer;
	}
	@Column(name = "contactPerson")
	public String getContactPerson() {
		return contactPerson;
	}
	public void setContactPerson(String contactPerson) {
		this.contactPerson = contactPerson;
	}
	@Column(name = "designation")
	public String getDesignation() {
		return designation;
	}
	public void setDesignation(String designation) {
		this.designation = designation;
	}
	@Column(name = "contactNo")
	public String getContactNo() {
		return contactNo;
	}
	public void setContactNo(String contactNo) {
		this.contactNo = contactNo;
	}
	@Column(name = "propValued")
	public String getPropValued() {
		return propValued;
	}
	public void setPropValued(String propValued) {
		this.propValued = propValued;
	}
	@Column(name = "tenure")
	public String getTenure() {
		return tenure;
	}
	public void setTenure(String tenure) {
		this.tenure = tenure;
	}
	@Column(name = "type")
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
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
	@Column(name = "unitNo")
	public String getUnitNo() {
		return unitNo;
	}
	public void setUnitNo(String unitNo) {
		this.unitNo = unitNo;
	}
	@Column(name = "building")
	public String getBuilding() {
		return building;
	}
	public void setBuilding(String building) {
		this.building = building;
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
	@Column(name = "valuationType")
	public String getValuationType() {
		return valuationType;
	}
	public void setValuationType(String valuationType) {
		this.valuationType = valuationType;
	}
	@Column(name = "methodOfValuation")
	public String getMethodOfValuation() {
		return methodOfValuation;
	}
	public void setMethodOfValuation(String methodOfValuation) {
		this.methodOfValuation = methodOfValuation;
	}
	@Column(name = "valuer")
	public String getValuer() {
		return valuer;
	}
	public void setValuer(String valuer) {
		this.valuer = valuer;
	}
	@Column(name = "taquimeeNo")
	public String getTaquimeeNo() {
		return taquimeeNo;
	}
	public void setTaquimeeNo(String taquimeeNo) {
		this.taquimeeNo = taquimeeNo;
	}
	@Column(name = "locationRating")
	public String getLocationRating() {
		return locationRating;
	}
	public void setLocationRating(String locationRating) {
		this.locationRating = locationRating;
	}
	@Column(name = "viewRating")
	public String getViewRating() {
		return viewRating;
	}
	public void setViewRating(String viewRating) {
		this.viewRating = viewRating;
	}
	@Column(name = "qualityRating")
	public String getQualityRating() {
		return qualityRating;
	}
	public void setQualityRating(String qualityRating) {
		this.qualityRating = qualityRating;
	}
	@Column(name = "propplacement")
	public String getPropplacement() {
		return propplacement;
	}
	public void setPropplacement(String propplacement) {
		this.propplacement = propplacement;
	}
	@Column(name = "finishingStatus")
	public String getFinishingStatus() {
		return finishingStatus;
	}
	public void setFinishingStatus(String finishingStatus) {
		this.finishingStatus = finishingStatus;
	}
	@Column(name = "propExposure")
	public String getPropExposure() {
		return propExposure;
	}
	public void setPropExposure(String propExposure) {
		this.propExposure = propExposure;
	}
	@Column(name = "floorNo")
	public String getFloorNo() {
		return floorNo;
	}
	public void setFloorNo(String floorNo) {
		this.floorNo = floorNo;
	}
	@Column(name = "noOfRooms")
	public String getNoOfRooms() {
		return noOfRooms;
	}
	public void setNoOfRooms(String noOfRooms) {
		this.noOfRooms = noOfRooms;
	}
	@Column(name = "landsizepersqf")
	public String getLandsizepersqf() {
		return landsizepersqf;
	}
	public void setLandsizepersqf(String landsizepersqf) {
		this.landsizepersqf = landsizepersqf;
	}
	@Column(name = "mvoflandpersqf")
	public String getMvoflandpersqf() {
		return mvoflandpersqf;
	}
	public void setMvoflandpersqf(String mvoflandpersqf) {
		this.mvoflandpersqf = mvoflandpersqf;
	}
	@Column(name = "BUApersqf")
	public String getBuapersqf() {
		return buapersqf;
	}
	public void setBuapersqf(String buapersqf) {
		this.buapersqf = buapersqf;
	}
	@Column(name = "BUApersm")
	public String getBuapersm() {
		return buapersm;
	}
	public void setBuapersm(String buapersm) {
		this.buapersm = buapersm;
	}
	@Column(name = "bldgAge")
	public String getBldgAge() {
		return bldgAge;
	}
	public void setBldgAge(String bldgAge) {
		this.bldgAge = bldgAge;
	}
	@Column(name = "statusOfValuer")
	public String getStatusOfValuer() {
		return statusOfValuer;
	}
	public void setStatusOfValuer(String statusOfValuer) {
		this.statusOfValuer = statusOfValuer;
	}
	@Column(name = "mv")
	public String getMv() {
		return mv;
	}
	public void setMv(String mv) {
		this.mv = mv;
	}
	@Column(name = "mvpersqf")
	public String getMvpersqf() {
		return mvpersqf;
	}
	public void setMvpersqf(String mvpersqf) {
		this.mvpersqf = mvpersqf;
	}
	@Column(name = "purposeOfValuation")
	public String getPurposeOfValuation() {
		return purposeOfValuation;
	}
	public void setPurposeOfValuation(String purposeOfValuation) {
		this.purposeOfValuation = purposeOfValuation;
	}
	@Column(name = "proposalSignedDate")
	public String getProposalSignedDate() {
		return proposalSignedDate;
	}
	public void setProposalSignedDate(String proposalSignedDate) {
		this.proposalSignedDate = proposalSignedDate;
	}
	@Column(name = "reportAcceptanceDate")
	public String getReportAcceptanceDate() {
		return reportAcceptanceDate;
	}
	public void setReportAcceptanceDate(String reportAcceptanceDate) {
		this.reportAcceptanceDate = reportAcceptanceDate;
	}
	@Column(name = "invoiceNumber")
	public String getInvoiceNumber() {
		return invoiceNumber;
	}
	public void setInvoiceNumber(String invoiceNumber) {
		this.invoiceNumber = invoiceNumber;
	}
	@Column(name = "invoiceDate")
	public String getInvoiceDate() {
		return invoiceDate;
	}
	public void setInvoiceDate(String invoiceDate) {
		this.invoiceDate = invoiceDate;
	}
	@Column(name = "paymentDate")
	public String getPaymentDate() {
		return paymentDate;
	}
	public void setPaymentDate(String paymentDate) {
		this.paymentDate = paymentDate;
	}
	@Column(name = "paymentReceivedDate")
	public String getPaymentReceivedDate() {
		return paymentReceivedDate;
	}
	public void setPaymentReceivedDate(String paymentReceivedDate) {
		this.paymentReceivedDate = paymentReceivedDate;
	}
	@Column(name = "overdueDays")
	public String getOverdueDays() {
		return overdueDays;
	}
	public void setOverdueDays(String overdueDays) {
		this.overdueDays = overdueDays;
	}
	@Column(name = "hardCopyFilledDate")
	public String getHardCopyFilledDate() {
		return hardCopyFilledDate;
	}
	public void setHardCopyFilledDate(String hardCopyFilledDate) {
		this.hardCopyFilledDate = hardCopyFilledDate;
	}
	@Column(name = "softCopyFilledDate")
	public String getSoftCopyFilledDate() {
		return softCopyFilledDate;
	}
	public void setSoftCopyFilledDate(String softCopyFilledDate) {
		this.softCopyFilledDate = softCopyFilledDate;
	}
	@Column(name = "googleDriveLink")
	public String getGoogleDriveLink() {
		return googleDriveLink;
	}
	public void setGoogleDriveLink(String googleDriveLink) {
		this.googleDriveLink = googleDriveLink;
	}
	
	
}
