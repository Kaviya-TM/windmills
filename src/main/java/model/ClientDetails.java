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
@Table(name = "clientdetails")
@Component
public class ClientDetails implements java.io.Serializable {

	private int clientId;
	private String clientName;
	private String contactPerson;
	private String contactPosition;
	private String contactNumber;
	private String contactMail;
	private String relStartDate;
	private int pifee_Dubai;
	private int pifee_AbuDhabi;
	private int pifee_Sharjah;
	private int pifee_Fujairah;
	private int pifee_Ajman;
	private int pifee_RasAlKhaima;
	private int pifee_UmmAlQuwain;
	private int dtfee_Dubai;
	private int dtfee_AbuDhabi;
	private int dtfee_Sharjah;
	private int dtfee_Fujairah;
	private int dtfee_Ajman;
	private int dtfee_RasAlKhaima;
	private int dtfee_UmmAlQuwain;
	private int dbfee_Dubai;
	private int dbfee_AbuDhabi;
	private int dbfee_Sharjah;
	private int dbfee_Fujairah;
	private int dbfee_Ajman;
	private int dbfee_RasAlKhaima;
	private int dbfee_UmmAlQuwain;
	private Date createDate;
	private Date modifiedDate;
	private Set<ClientContact> clientContacts = new HashSet<ClientContact>(0);
	
	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "client_id", unique = true, nullable = false)
	public int getClientId() {
		return this.clientId;
	}

	public void setClientId(int clientId) {
		this.clientId = clientId;
	}

	@Column(name = "clientName")
	public String getClientName() {
		return clientName;
	}

	public void setClientName(String clientName) {
		this.clientName = clientName;
	}

	@Column(name = "contactPosition")
	public String getContactPosition() {
		return this.contactPosition;
	}

	public void setContactPosition(String contactPosition) {
		this.contactPosition = contactPosition;
	}
	
	@Column(name = "contactPerson")
	public String getContactPerson() {
		return this.contactPerson;
	}

	public void setContactPerson(String contactPerson) {
		this.contactPerson = contactPerson;
	}
	
	@Column(name = "contactNumber")
	public String getContactNumber() {
		return this.contactNumber;
	}

	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}
	
	@Column(name = "contactMail")
	public String getContactMail() {
		return this.contactMail;
	}

	public void setContactMail(String contactMail) {
		this.contactMail = contactMail;
	}
	
	@Column(name = "relStartDate")
	public String getRelStartDate() {
		return this.relStartDate;
	}

	public void setRelStartDate(String relStartDate) {
		this.relStartDate = relStartDate;
	}
	@Column(name = "pifee_Dubai")
	public int getPifee_Dubai() {
		return pifee_Dubai;
	}

	public void setPifee_Dubai(int pifee_Dubai) {
		this.pifee_Dubai = pifee_Dubai;
	}
	@Column(name = "pifee_AbuDhabi")
	public int getPifee_AbuDhabi() {
		return pifee_AbuDhabi;
	}

	public void setPifee_AbuDhabi(int pifee_AbuDhabi) {
		this.pifee_AbuDhabi = pifee_AbuDhabi;
	}
	@Column(name = "pifee_Sharjah")
	public int getPifee_Sharjah() {
		return pifee_Sharjah;
	}

	public void setPifee_Sharjah(int pifee_Sharjah) {
		this.pifee_Sharjah = pifee_Sharjah;
	}
	@Column(name = "pifee_Fujairah")
	public int getPifee_Fujairah() {
		return pifee_Fujairah;
	}
    
	public void setPifee_Fujairah(int pifee_Fujairah) {
		this.pifee_Fujairah = pifee_Fujairah;
	}
	
	@Column(name = "pifee_Ajman")
	public int getPifee_Ajman() {
		return pifee_Ajman;
	}

	public void setPifee_Ajman(int pifee_Ajman) {
		this.pifee_Ajman = pifee_Ajman;
	}

	@Column(name = "pifee_RasAlKhaima")
	public int getPifee_RasAlKhaima() {
		return pifee_RasAlKhaima;
	}

	public void setPifee_RasAlKhaima(int pifee_RasAlKhaima) {
		this.pifee_RasAlKhaima = pifee_RasAlKhaima;
	}
	
	@Column(name = "pifee_UmmAlQuwain")
	public int getPifee_UmmAlQuwain() {
		return pifee_UmmAlQuwain;
	}

	public void setPifee_UmmAlQuwain(int pifee_UmmAlQuwain) {
		this.pifee_UmmAlQuwain = pifee_UmmAlQuwain;
	}
	@Column(name = "dtfee_Dubai")
	public int getDtfee_Dubai() {
		return dtfee_Dubai;
	}

	public void setDtfee_Dubai(int dtfee_Dubai) {
		this.dtfee_Dubai = dtfee_Dubai;
	}
	@Column(name = "dtfee_AbuDhabi")
	public int getDtfee_AbuDhabi() {
		return dtfee_AbuDhabi;
	}

	public void setDtfee_AbuDhabi(int dtfee_AbuDhabi) {
		this.dtfee_AbuDhabi = dtfee_AbuDhabi;
	}
	@Column(name = "dtfee_Sharjah")
	public int getDtfee_Sharjah() {
		return dtfee_Sharjah;
	}

	public void setDtfee_Sharjah(int dtfee_Sharjah) {
		this.dtfee_Sharjah = dtfee_Sharjah;
	}

	@Column(name = "dtfee_Fujairah")
	public int getDtfee_Fujairah() {
		return dtfee_Fujairah;
	}

	public void setDtfee_Fujairah(int dtfee_Fujairah) {
		this.dtfee_Fujairah = dtfee_Fujairah;
	}

	@Column(name = "dtfee_Ajman")
	public int getDtfee_Ajman() {
		return dtfee_Ajman;
	}

	public void setDtfee_Ajman(int dtfee_Ajman) {
		this.dtfee_Ajman = dtfee_Ajman;
	}

	@Column(name = "dtfee_RasAlKhaima")
	public int getDtfee_RasAlKhaima() {
		return dtfee_RasAlKhaima;
	}

	public void setDtfee_RasAlKhaima(int dtfee_RasAlKhaima) {
		this.dtfee_RasAlKhaima = dtfee_RasAlKhaima;
	}

	@Column(name = "dtfee_UmmAlQuwain")
	public int getDtfee_UmmAlQuwain() {
		return dtfee_UmmAlQuwain;
	}

	public void setDtfee_UmmAlQuwain(int dtfee_UmmAlQuwain) {
		this.dtfee_UmmAlQuwain = dtfee_UmmAlQuwain;
	}
	@Column(name = "dbfee_Dubai")
	public int getDbfee_Dubai() {
		return dbfee_Dubai;
	}

	public void setDbfee_Dubai(int dbfee_Dubai) {
		this.dbfee_Dubai = dbfee_Dubai;
	}
	@Column(name = "dbfee_AbuDhabi")
	public int getDbfee_AbuDhabi() {
		return dbfee_AbuDhabi;
	}

	public void setDbfee_AbuDhabi(int dbfee_AbuDhabi) {
		this.dbfee_AbuDhabi = dbfee_AbuDhabi;
	}
	@Column(name = "dbfee_Sharjah")
	public int getDbfee_Sharjah() {
		return dbfee_Sharjah;
	}

	public void setDbfee_Sharjah(int dbfee_Sharjah) {
		this.dbfee_Sharjah = dbfee_Sharjah;
	}
	@Column(name = "dbfee_Fujairah")
	public int getDbfee_Fujairah() {
		return dbfee_Fujairah;
	}

	public void setDbfee_Fujairah(int dbfee_Fujairah) {
		this.dbfee_Fujairah = dbfee_Fujairah;
	}
	@Column(name = "dbfee_Ajman")
	public int getDbfee_Ajman() {
		return dbfee_Ajman;
	}

	public void setDbfee_Ajman(int dbfee_Ajman) {
		this.dbfee_Ajman = dbfee_Ajman;
	}
	@Column(name = "dbfee_RasAlKhaima")
	public int getDbfee_RasAlKhaima() {
		return dbfee_RasAlKhaima;
	}

	public void setDbfee_RasAlKhaima(int dbfee_RasAlKhaima) {
		this.dbfee_RasAlKhaima = dbfee_RasAlKhaima;
	}
	@Column(name = "dbfee_UmmAlQuwain")
	public int getDbfee_UmmAlQuwain() {
		return dbfee_UmmAlQuwain;
	}

	public void setDbfee_UmmAlQuwain(int dbfee_UmmAlQuwain) {
		this.dbfee_UmmAlQuwain = dbfee_UmmAlQuwain;
	}


	    
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "create_date", nullable = false)
	public Date getCreateDate() {
		return this.createDate;
	}
	
	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "modified_date", nullable = false)
	public Date getModifiedDate() {
		return this.modifiedDate;
	}

	public void setModifiedDate(Date modifiedDate) {
		this.modifiedDate = modifiedDate;
	}
	
	@OneToMany(fetch = FetchType.LAZY,mappedBy = "clientdetails",cascade= CascadeType.ALL)
	public Set<ClientContact> getClientContacts() {
		return clientContacts;
	}

	public void setClientContacts(Set<ClientContact> clientContacts) {
		this.clientContacts = clientContacts;
	}
	
	
}
