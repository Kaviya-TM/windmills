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
import model.ServiceOfficer;
import model.ValuationReport;


@Repository
public class ValuationDaoImpl {
	
	@Autowired
	private SessionFactory sessionFactory;
	
	static Logger log = Logger.getLogger(ValuationDaoImpl.class);

	public List<ClientDetails> getClient() {
		log.info("valuation dao to get clients");
		Query query = sessionFactory.getCurrentSession().createQuery("from  ClientDetails");
		
		List<ClientDetails> rows=query.list();
		
		return rows;
	}

	public List<ServiceOfficer> getServiceOfficer(String email) {
		log.info("valuation dao to get service officer");
		Query query = sessionFactory.getCurrentSession().createQuery("from  ServiceOfficer s where s.email!=:email");
		query.setParameter("email",email);
		List<ServiceOfficer> rows=query.list();
		
		return rows;
	}

    public List<ServiceOfficer> getDefaultServicer(String email) {
    	log.info("valuation dao to get default service officer");
    	Query query=sessionFactory.getCurrentSession().createQuery("from ServiceOfficer s where s.email=:email");
		query.setParameter("email",email);
		List<ServiceOfficer> rows=query.list();
		
		return rows;
	}

	public List<ClientDetails> getValuationInstructingPerson(String clientName) {
		log.info("valuation dao to get contact person");
    	Query query=sessionFactory.getCurrentSession().createQuery("from ClientDetails s where s.clientName=:clientName");
		query.setParameter("clientName",clientName);
		List<ClientDetails> rows=query.list();
		
		return rows;
	}

	public void saveValuationReport(ValuationReport valuationreport) {
		log.info("valuation dao to save valuation report");
		sessionFactory.getCurrentSession().saveOrUpdate(valuationreport);
	}

	public int getNumberOfRows() {
		Query query=sessionFactory.getCurrentSession().createQuery("from ValuationReport");
		List<ValuationReport> rows=query.list();
		int row = rows.size() + 1;
		log.info("rows"+row);
		return row;
	}
	
	
}
