package dao;

import java.util.List;

import org.apache.log4j.Logger;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.hibernate.transform.Transformers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javassist.convert.Transformer;
import model.ClientDetails;
import model.ServiceOfficer;
import service.ClientService;


@Repository
public class ServiceOfficerDaoImpl {
	
	@Autowired
	private SessionFactory sessionFactory;
	
	static Logger log = Logger.getLogger(ServiceOfficerDaoImpl.class);
	


	public void addServiceOfficer(ServiceOfficer serviceOfficer) {
		sessionFactory.getCurrentSession().saveOrUpdate(serviceOfficer);
		
	}


	public boolean checkServiceOfficer(String email) {
		
		String hql="select email from ServiceOfficer s where s.email=:email";
		Query query=sessionFactory.getCurrentSession().createQuery(hql);
		query.setParameter("email", email);
		
		return query.uniqueResult()!=null;
	}
	
	public List<ServiceOfficer>  findNamebyEmail(String email) {
		
		Query query = sessionFactory.getCurrentSession()
				.createQuery("from ServiceOfficer s where s.email=:email");
		query.setParameter("email", email);
		List<ServiceOfficer> rows=query.list();
		return rows;
		
	}


	public List<Object[]> getOfficerlist() {
		log.info("getOfficerlist");
		Query query = sessionFactory.getCurrentSession().createQuery(" from ServiceOfficer");
		log.info("query");
		List<Object[]> rows=query.list();
		return rows;
		
	}


	public List<ServiceOfficer> getServiceOfficer(int serviceId)
	{
		Query query=sessionFactory.getCurrentSession().createQuery("from ServiceOfficer s where s.serviceId=:serviceId");
		query.setParameter("serviceId",serviceId);
		List<ServiceOfficer> rows=query.list();
		return rows;
		
	}


	public void updateServiceOfficer(ServiceOfficer serviceOfficer) {
		log.info("Updating");
		
	 sessionFactory.getCurrentSession().update(serviceOfficer);

//		String hql = "UPDATE ServiceOfficer SET name = :name, email = :email, phone = :phone, position = :position, modifiedDate = :modifiedDate WHERE serviceOfficer_id = :serviceId";
//		Query query=sessionFactory.getCurrentSession().createQuery(hql);
//		query.setParameter("serviceId", serviceOfficer.getServiceId());
//		query.setParameter("name", serviceOfficer.getName());
//		query.setParameter("phone", serviceOfficer.getPhone());
//		query.setParameter("email", serviceOfficer.getEmail());
//		query.setParameter("position", serviceOfficer.getPosition());
//		query.setParameter("modifiedDate", serviceOfficer.getModifiedDate());
//		query.executeUpdate();
		
	}
	
	
}
