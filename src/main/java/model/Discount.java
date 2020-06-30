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
@Table(name = "discount")
@Component
public class Discount  implements java.io.Serializable {
	private int discountId;
	private String million1;
	private String million2;
	private String million3;
	private String million4;
	private String million5;
	private String million20;
	private String million50;
	private String million100;
	
	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "discount_id", unique = true, nullable = false)
	public int getDiscountId() {
		return discountId;
	}
	public void setDiscountId(int discountId) {
		this.discountId = discountId;
	}
	@Column(name = "million1")
	public String getMillion1() {
		return million1;
	}
	public void setMillion1(String million1) {
		this.million1 = million1;
	}
	@Column(name = "million2")
	public String getMillion2() {
		return million2;
	}
	public void setMillion2(String million2) {
		this.million2 = million2;
	}
	@Column(name = "million3")
	public String getMillion3() {
		return million3;
	}
	public void setMillion3(String million3) {
		this.million3 = million3;
	}
	@Column(name = "million4")
	public String getMillion4() {
		return million4;
	}
	public void setMillion4(String million4) {
		this.million4 = million4;
	}
	@Column(name = "million5")
	public String getMillion5() {
		return million5;
	}
	public void setMillion5(String million5) {
		this.million5 = million5;
	}
	@Column(name = "million20")
	public String getMillion20() {
		return million20;
	}
	public void setMillion20(String million20) {
		this.million20 = million20;
	}
	@Column(name = "million50")
	public String getmillion50() {
		return million50;
	}
	public void setmillion50(String million50) {
		this.million50 = million50;
	}
	@Column(name = "million100")
	public String getMillion100() {
		return million100;
	}
	public void setMillion100(String million100) {
		this.million100 = million100;
	}
	
}
