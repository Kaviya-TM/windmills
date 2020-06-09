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
	private String noOfYears;
	private String document1;
	private String document2;
	private String document3;
	private String document4;
	private String document5;
	private String document6;
	private String document7;
	private String document8;
	private String document9;
	private String document10;


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
	@Column(name = "noOfYears")
	public String getNoOfYears() {
		return noOfYears;
	}

	public void setNoOfYears(String noOfYears) {
		this.noOfYears = noOfYears;
	}
	@Column(name = "document1")
	public String getDocument1() {
		return document1;
	}

	public void setDocument1(String document1) {
		this.document1 = document1;
	}
	@Column(name = "document2")
	public String getDocument2() {
		return document2;
	}

	public void setDocument2(String document2) {
		this.document2 = document2;
	}
	@Column(name = "document3")
	public String getDocument3() {
		return document3;
	}

	public void setDocument3(String document3) {
		this.document3 = document3;
	}
	@Column(name = "document4")
	public String getDocument4() {
		return document4;
	}

	public void setDocument4(String document4) {
		this.document4 = document4;
	}
	@Column(name = "document5")
	public String getDocument5() {
		return document5;
	}

	public void setDocument5(String document5) {
		this.document5 = document5;
	}
	@Column(name = "document6")
	public String getDocument6() {
		return document6;
	}

	public void setDocument6(String document6) {
		this.document6 = document6;
	}
	@Column(name = "document7")
	public String getDocument7() {
		return document7;
	}

	public void setDocument7(String document7) {
		this.document7 = document7;
	}
	@Column(name = "document8")
	public String getDocument8() {
		return document8;
	}

	public void setDocument8(String document8) {
		this.document8 = document8;
	}
	@Column(name = "document9")
	public String getDocument9() {
		return document9;
	}

	public void setDocument9(String document9) {
		this.document9 = document9;
	}
	@Column(name = "document10")
	public String getDocument10() {
		return document10;
	}

	public void setDocument10(String document10) {
		this.document10 = document10;
	}
	

}
