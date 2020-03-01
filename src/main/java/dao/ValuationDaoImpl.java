package dao;

import java.util.List;
import org.apache.log4j.Logger;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.hibernate.transform.Transformers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Repository;

import javassist.convert.Transformer;
import model.ClientDetails;
import model.Community;
import model.Documents;
import model.Property;
import model.ServiceOfficer;
import model.ValuationReport;


@Repository
public class ValuationDaoImpl {
	
	@Autowired
	private SessionFactory sessionFactory;
	
	static Logger log = Logger.getLogger(ValuationDaoImpl.class);

	public List<ClientDetails> getClient() {
		Query query = sessionFactory.getCurrentSession().createQuery("select distinct clientName from  ClientDetails");
		List<ClientDetails> rows=query.list();
		return rows;
	}

	public List<ServiceOfficer> getServiceOfficer(String email) {
		Query query = sessionFactory.getCurrentSession().createQuery("from  ServiceOfficer s where s.email!=:email");
		query.setParameter("email",email);
		List<ServiceOfficer> rows=query.list();
		
		return rows;
	}
	public void uploaddocuments(Documents document) {
		sessionFactory.getCurrentSession().save(document);
	}
    public List<ServiceOfficer> getDefaultServicer(String email) {
    	Query query=sessionFactory.getCurrentSession().createQuery("from ServiceOfficer s where s.email=:email");
		query.setParameter("email",email);
		List<ServiceOfficer> rows=query.list();
		
		return rows;
	}

	public List<ClientDetails> getValuationInstructingPerson(String clientName) {
    	Query query=sessionFactory.getCurrentSession().createQuery("select contactPerson from ClientDetails s where s.clientName=:clientName");
    	query.setParameter("clientName",clientName);
		List<ClientDetails> rows=query.list();
		return rows;
	}

	public void saveValuationReport(ValuationReport valuationreport) {
		sessionFactory.getCurrentSession().saveOrUpdate(valuationreport);
	}

	public int getNumberOfRows() {
		Query query=sessionFactory.getCurrentSession().createQuery("from ValuationReport");
		List<ValuationReport> rows=query.list();
		int row = rows.size() + 1;
		return row;
	}

	public List<Property> getValuationApproach(String propertyValued) {
    	Query query=sessionFactory.getCurrentSession().createQuery("from Property s where s.propertyValued=:propertyValued");
		query.setParameter("propertyValued",propertyValued);
		List<Property> rows=query.list();
		return rows;
	}

	public List<Property> getPropertyValued() {
		Query query = sessionFactory.getCurrentSession().createQuery("from  Property");
		List<Property> rows=query.list();
		return rows;
	}

	public List<Community> getCommunity() {
		Query query = sessionFactory.getCurrentSession().createQuery("from  Community");
		List<Community> rows=query.list();
		return rows;
	}

	public List<Community> getCommunityList(String community) {
		Query query=sessionFactory.getCurrentSession().createQuery("from Community s where s.community=:community");
		query.setParameter("community",community);
		List<Community> rows=query.list();
		return rows;
	}

	public List<Community> getCity() {
		Query query = sessionFactory.getCurrentSession().createQuery("select distinct city from  Community");
		List<Community> rows=query.list();
		return rows;
	}

	public List<Property> getApproachReasoningList() {
		Query query = sessionFactory.getCurrentSession().createQuery("select distinct approachReasoning from  Property");
		List<Property> rows=query.list();
		return rows;
	}

	public List<Property> getValuationApproachList() {
		Query query = sessionFactory.getCurrentSession().createQuery("select distinct valuationApproach from  Property");
		List<Property> rows=query.list();
		return rows;
	}

	public List<ValuationReport> getValuationReportList() {
		Query query=sessionFactory.getCurrentSession().createQuery("from ValuationReport");
		List<ValuationReport> rows = query.list();
		return rows;
	}


	
	
}
