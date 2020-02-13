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
	


	public void addServiceOfficer(ServiceOfficer serviceofficer) {
		sessionFactory.getCurrentSession().saveOrUpdate(serviceofficer);
		
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


	public void updateServiceOfficer(ServiceOfficer serviceofficer) {
		log.info("Updating");
		
	 sessionFactory.getCurrentSession().update(serviceofficer);

//		String hql = "UPDATE ServiceOfficer SET name = :name, email = :email, phone = :phone, position = :position, modifiedDate = :modifiedDate WHERE serviceofficer_id = :serviceId";
//		Query query=sessionFactory.getCurrentSession().createQuery(hql);
//		query.setParameter("serviceId", serviceofficer.getServiceId());
//		query.setParameter("name", serviceofficer.getName());
//		query.setParameter("phone", serviceofficer.getPhone());
//		query.setParameter("email", serviceofficer.getEmail());
//		query.setParameter("position", serviceofficer.getPosition());
//		query.setParameter("modifiedDate", serviceofficer.getModifiedDate());
//		query.executeUpdate();
		
	}
	
	
}
