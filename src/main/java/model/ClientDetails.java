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
	private int pitat_Dubai;
	private int pitat_AbuDhabi;
	private int pitat_Sharjah;
	private int pitat_Fujairah;
	private int pitat_Ajman;
	private int pitat_RasAlKhaima;
	private int pitat_UmmAlQuwain;
	private int dttat_Dubai;
	private int dttat_AbuDhabi;
	private int dttat_Sharjah;
	private int dttat_Fujairah;
	private int dttat_Ajman;
	private int dttat_RasAlKhaima;
	private int dttat_UmmAlQuwain;
	private int dbtat_Dubai;
	private int dbtat_AbuDhabi;
	private int dbtat_Sharjah;
	private int dbtat_Fujairah;
	private int dbtat_Ajman;
	private int dbtat_RasAlKhaima;
	private int dbtat_UmmAlQuwain;
	private Date createDate;
	private Date modifiedDate;
	
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
	@Column(name = "pitat_Dubai")
	public int getPitat_Dubai() {
		return pitat_Dubai;
	}

	public void setPitat_Dubai(int pitat_Dubai) {
		this.pitat_Dubai = pitat_Dubai;
	}
	@Column(name = "pitat_AbuDhabi")
	public int getPitat_AbuDhabi() {
		return pitat_AbuDhabi;
	}

	public void setPitat_AbuDhabi(int pitat_AbuDhabi) {
		this.pitat_AbuDhabi = pitat_AbuDhabi;
	}
	@Column(name = "pitat_Sharjah")
	public int getPitat_Sharjah() {
		return pitat_Sharjah;
	}

	public void setPitat_Sharjah(int pitat_Sharjah) {
		this.pitat_Sharjah = pitat_Sharjah;
	}
	@Column(name = "pitat_Fujairah")
	public int getPitat_Fujairah() {
		return pitat_Fujairah;
	}

	public void setPitat_Fujairah(int pitat_Fujairah) {
		this.pitat_Fujairah = pitat_Fujairah;
	}
	@Column(name = "pitat_Ajman")
	public int getPitat_Ajman() {
		return pitat_Ajman;
	}

	public void setPitat_Ajman(int pitat_Ajman) {
		this.pitat_Ajman = pitat_Ajman;
	}
	@Column(name = "pitat_RasAlKhaima")
	public int getPitat_RasAlKhaima() {
		return pitat_RasAlKhaima;
	}

	public void setPitat_RasAlKhaima(int pitat_RasAlKhaima) {
		this.pitat_RasAlKhaima = pitat_RasAlKhaima;
	}
	@Column(name = "pitat_UmmAlQuwain")
	public int getPitat_UmmAlQuwain() {
		return pitat_UmmAlQuwain;
	}

	public void setPitat_UmmAlQuwain(int pitat_UmmAlQuwain) {
		this.pitat_UmmAlQuwain = pitat_UmmAlQuwain;
	}
	@Column(name = "dttat_Dubai")
	public int getDttat_Dubai() {
		return dttat_Dubai;
	}

	public void setDttat_Dubai(int dttat_Dubai) {
		this.dttat_Dubai = dttat_Dubai;
	}
	@Column(name = "dttat_AbuDhabi")
	public int getDttat_AbuDhabi() {
		return dttat_AbuDhabi;
	}

	public void setDttat_AbuDhabi(int dttat_AbuDhabi) {
		this.dttat_AbuDhabi = dttat_AbuDhabi;
	}
	@Column(name = "dttat_Sharjah")
	public int getDttat_Sharjah() {
		return dttat_Sharjah;
	}

	public void setDttat_Sharjah(int dttat_Sharjah) {
		this.dttat_Sharjah = dttat_Sharjah;
	}
	@Column(name = "dttat_Fujairah")
	public int getDttat_Fujairah() {
		return dttat_Fujairah;
	}

	public void setDttat_Fujairah(int dttat_Fujairah) {
		this.dttat_Fujairah = dttat_Fujairah;
	}
	@Column(name = "dttat_Ajman")
	public int getDttat_Ajman() {
		return dttat_Ajman;
	}
	
	public void setDttat_Ajman(int dttat_Ajman) {
		this.dttat_Ajman = dttat_Ajman;
	}
	@Column(name = "dttat_RasAlKhaima")
	public int getDttat_RasAlKhaima() {
		return dttat_RasAlKhaima;
	}

	public void setDttat_RasAlKhaima(int dttat_RasAlKhaima) {
		this.dttat_RasAlKhaima = dttat_RasAlKhaima;
	}
	@Column(name = "dttat_UmmAlQuwain")
	public int getDttat_UmmAlQuwain() {
		return dttat_UmmAlQuwain;
	}

	public void setDttat_UmmAlQuwain(int dttat_UmmAlQuwain) {
		this.dttat_UmmAlQuwain = dttat_UmmAlQuwain;
	}
	@Column(name = "dbtat_Dubai")
	public int getDbtat_Dubai() {
		return dbtat_Dubai;
	}

	public void setDbtat_Dubai(int dbtat_Dubai) {
		this.dbtat_Dubai = dbtat_Dubai;
	}
	@Column(name = "dbtat_AbuDhabi")
	public int getDbtat_AbuDhabi() {
		return dbtat_AbuDhabi;
	}

	public void setDbtat_AbuDhabi(int dbtat_AbuDhabi) {
		this.dbtat_AbuDhabi = dbtat_AbuDhabi;
	}
	@Column(name = "dbtat_Sharjah")
	public int getDbtat_Sharjah() {
		return dbtat_Sharjah;
	}

	public void setDbtat_Sharjah(int dbtat_Sharjah) {
		this.dbtat_Sharjah = dbtat_Sharjah;
	}
	@Column(name = "dbtat_Fujairah")
	public int getDbtat_Fujairah() {
		return dbtat_Fujairah;
	}

	public void setDbtat_Fujairah(int dbtat_Fujairah) {
		this.dbtat_Fujairah = dbtat_Fujairah;
	}
	@Column(name = "dbtat_Ajman")
	public int getDbtat_Ajman() {
		return dbtat_Ajman;
	}

	public void setDbtat_Ajman(int dbtat_Ajman) {
		this.dbtat_Ajman = dbtat_Ajman;
	}
	@Column(name = "dbtat_RasAlKhaima")
	public int getDbtat_RasAlKhaima() {
		return dbtat_RasAlKhaima;
	}

	public void setDbtat_RasAlKhaima(int dbtat_RasAlKhaima) {
		this.dbtat_RasAlKhaima = dbtat_RasAlKhaima;
	}
	@Column(name = "dbtat_UmmAlQuwain")
	public int getDbtat_UmmAlQuwain() {
		return dbtat_UmmAlQuwain;
	}

	public void setDbtat_UmmAlQuwain(int dbtat_UmmAlQuwain) {
		this.dbtat_UmmAlQuwain = dbtat_UmmAlQuwain;
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
	
}
