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
@Table(name = "development")
@Component
public class Development implements java.io.Serializable {

	private int developmentId;
	private String emirates;
	private String star3;
	private String star4;
	private String star5;
	private String profCharges;
	private String conMargin;
	private String obsolence;

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "development_id", unique = true, nullable = false)
	public int getDevelopmentId() {
		return developmentId;
	}
	public void setDevelopmentId(int developmentId) {
		this.developmentId = developmentId;
	}
	@Column(name = "emirates")
	public String getEmirates() {
		return emirates;
	}
	public void setEmirates(String emirates) {
		this.emirates = emirates;
	}
	@Column(name = "star3")
	public String getStar3() {
		return star3;
	}
	public void setStar3(String star3) {
		this.star3 = star3;
	}
	@Column(name = "star4")
	public String getStar4() {
		return star4;
	}
	public void setStar4(String star4) {
		this.star4 = star4;
	}
	@Column(name = "star5")
	public String getStar5() {
		return star5;
	}
	public void setStar5(String star5) {
		this.star5 = star5;
	}
	@Column(name = "profCharges")
	public String getProfCharges() {
		return profCharges;
	}
	public void setProfCharges(String profCharges) {
		this.profCharges = profCharges;
	}
	@Column(name = "ConMargin")
	public String getConMargin() {
		return conMargin;
	}
	public void setConMargin(String conMargin) {
		this.conMargin = conMargin;
	}
	@Column(name = "obsolence")
	public String getObsolence() {
		return obsolence;
	}
	public void setObsolence(String obsolence) {
		this.obsolence = obsolence;
	}
	
}
