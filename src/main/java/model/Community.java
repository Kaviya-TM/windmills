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
@Table(name = "community")
@Component
public class Community  implements java.io.Serializable {

	private int communityId;
	private String community;
	private String subCommunity;
	private String city;
	
	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "community_id", unique = true, nullable = false)
	public int getCommunityId() {
		return communityId;
	}

	public void setCommunityId(int communityId) {
		this.communityId = communityId;
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
	@Column(name = "city")
	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}
}
