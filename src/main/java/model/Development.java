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
	private String star1;
	private String star2;
	private String star3;
	private String star4;
	private String star5;
	private String profCharges;
	private String conMargin;
	private String obsolence;
	private String devProfit;
	private String parkingprice;
	private String poolprice;
	private String landscapeprice;
	private String whitegoodsprice;
	private String utilityprice;
	private String devmargin;
	private String interestRate;

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
	@Column(name = "star1")
	public String getStar1() {
		return star1;
	}
	public void setStar1(String star1) {
		this.star1 = star1;
	}
	@Column(name = "star2")
	public String getStar2() {
		return star2;
	}
	public void setStar2(String star2) {
		this.star2 = star2;
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
	@Column(name = "interestRate")
	public String getInterestRate() {
		return interestRate;
	}

	public void setInterestRate(String interestRate) {
		this.interestRate = interestRate;
	}
	@Column(name = "devProfit")
	public String getDevProfit() {
		return devProfit;
	}
	public void setDevProfit(String devProfit) {
		this.devProfit = devProfit;
	}
	
}
