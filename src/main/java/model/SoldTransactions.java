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
@Table(name = "soldTransaction")
@Component
public class SoldTransactions  implements java.io.Serializable {

	private int transactionId;
	private String city;
	private String area;
	private String neighbourhood;
	private String buildingName;
	private String propertySubType;
	private String developer;
	private String roomNoEstimated;
	private String sizeSqf;
	private String landAreaSqf;
	private String type;
	private String date;
	private String price;
	private String pricePerSqFt;


	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "transaction_id", unique = true, nullable = false)
	public int getTransactionId() {
		return transactionId;
	}
	public void setTransactionId(int transactionId) {
		this.transactionId = transactionId;
	}
	@Column(name = "city")
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	@Column(name = "area")
	public String getArea() {
		return area;
	}
	public void setArea(String area) {
		this.area = area;
	}
	@Column(name = "neighbourhood")
	public String getNeighbourhood() {
		return neighbourhood;
	}
	public void setNeighbourhood(String neighbourhood) {
		this.neighbourhood = neighbourhood;
	}
	@Column(name = "buildingName")
	public String getBuildingName() {
		return buildingName;
	}
	public void setBuildingName(String buildingName) {
		this.buildingName = buildingName;
	}
	@Column(name = "propertySubType")
	public String getPropertySubType() {
		return propertySubType;
	}
	public void setPropertySubType(String propertySubType) {
		this.propertySubType = propertySubType;
	}
	@Column(name = "developer")
	public String getDeveloper() {
		return developer;
	}
	public void setDeveloper(String developer) {
		this.developer = developer;
	}
	@Column(name = "roomNoEstimated")
	public String getRoomNoEstimated() {
		return roomNoEstimated;
	}
	public void setRoomNoEstimated(String roomNoEstimated) {
		this.roomNoEstimated = roomNoEstimated;
	}
	@Column(name = "sizeSqf")
	public String getSizeSqf() {
		return sizeSqf;
	}
	public void setSizeSqf(String sizeSqf) {
		this.sizeSqf = sizeSqf;
	}
	@Column(name = "landAreaSqf")
	public String getLandAreaSqf() {
		return landAreaSqf;
	}
	public void setLandAreaSqf(String landAreaSqf) {
		this.landAreaSqf = landAreaSqf;
	}
	@Column(name = "type")
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	@Column(name = "date")
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	@Column(name = "price")
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	@Column(name = "pricePerSqFt")
	public String getPricePerSqFt() {
		return pricePerSqFt;
	}
	public void setPricePerSqFt(String pricePerSqFt) {
		this.pricePerSqFt = pricePerSqFt;
	}

	
	
}
