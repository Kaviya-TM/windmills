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
	private String valuationApproach;
	private String approachReasoning;
	
	
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
}
