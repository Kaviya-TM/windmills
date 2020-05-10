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
@Table(name = "property")
@Component
public class Property  implements java.io.Serializable {

	private int propertyId;
	private String propertyValued;
	private String propertyCategory;
	private String valuationApproach;
	private String approachReasoning;
	private String maxage;
	private String parkingprice;
	private String poolprice;
	private String landscapeprice;
	private String whitegoodsprice;
	private String utilityprice;
	private String devmargin;


	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "property_id", unique = true, nullable = false)
	public int getPropertyId() {
		return propertyId;
	}

	public void setPropertyId(int propertyId) {
		this.propertyId = propertyId;
	}
	@Column(name = "propertyValued")
	public String getPropertyValued() {
		return propertyValued;
	}

	public void setPropertyValued(String propertyValued) {
		this.propertyValued = propertyValued;
	}
	@Column(name = "propertyCategory")
	public String getPropertyCategory() {
		return propertyCategory;
	}

	public void setPropertyCategory(String propertyCategory) {
		this.propertyCategory = propertyCategory;
	}

	@Column(name = "valuationApproach")
	public String getValuationApproach() {
		return valuationApproach;
	}

	public void setValuationApproach(String valuationApproach) {
		this.valuationApproach = valuationApproach;
	}
	@Column(name = "approachReasoning")
	public String getApproachReasoning() {
		return approachReasoning;
	}

	public void setApproachReasoning(String approachReasoning) {
		this.approachReasoning = approachReasoning;
	}
	@Column(name = "maxage")
	public String getMaxage() {
		return maxage;
	}

	public void setMaxage(String maxage) {
		this.maxage = maxage;
	}
	@Column(name = "parkingprice")
	public String getParkingprice() {
		return parkingprice;
	}

	public void setParkingprice(String parkingprice) {
		this.parkingprice = parkingprice;
	}
	@Column(name = "poolprice")
	public String getPoolprice() {
		return poolprice;
	}

	public void setPoolprice(String poolprice) {
		this.poolprice = poolprice;
	}
	@Column(name = "landscapeprice")
	public String getLandscapeprice() {
		return landscapeprice;
	}

	public void setLandscapeprice(String landscapeprice) {
		this.landscapeprice = landscapeprice;
	}
	@Column(name = "whitegoodsprice")
	public String getWhitegoodsprice() {
		return whitegoodsprice;
	}

	public void setWhitegoodsprice(String whitegoodsprice) {
		this.whitegoodsprice = whitegoodsprice;
	}
	@Column(name = "utilityprice")
	public String getUtilityprice() {
		return utilityprice;
	}

	public void setUtilityprice(String utilityprice) {
		this.utilityprice = utilityprice;
	}
	@Column(name = "devmargin")
	public String getDevmargin() {
		return devmargin;
	}
	public void setDevmargin(String devmargin) {
		this.devmargin = devmargin;
	}


}
