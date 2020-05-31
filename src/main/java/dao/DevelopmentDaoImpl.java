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
import model.Development;
import model.Property;
import model.ServiceOfficer;
import service.ClientService;


@Repository
public class DevelopmentDaoImpl {
	
	@Autowired
	private SessionFactory sessionFactory;
	
	static Logger log = Logger.getLogger(DevelopmentDaoImpl.class);


	public void addDevelopment(Development development) {
		sessionFactory.getCurrentSession().saveOrUpdate(development);
	}


	public List<Object[]> getDevelopment() {
		Query query = sessionFactory.getCurrentSession().createQuery("from Development");
		List<Object[]> rows=query.list();
		return rows;
	}

	public List<Development> getDevelopment(int developmentId) {
		Query query=sessionFactory.getCurrentSession().createQuery("from Development s where s.developmentId=:developmentId");
		query.setParameter("developmentId",developmentId);
		List<Development> rows=query.list();
		return rows;
	}


	public void editDevelopment(Development development) {
		sessionFactory.getCurrentSession().update(development);
	}
	public void deleteDevelopment(int developmentId) {
		Query query=sessionFactory.getCurrentSession().createQuery("delete from Development s where s.developmentId=:developmentId");
		query.setParameter("developmentId",developmentId);
		query.executeUpdate();
	}


	public List<Development> getDevelopment(String emirates) {
		Query query=sessionFactory.getCurrentSession().createQuery("from Development s where s.emirates=:emirates");
    	query.setParameter("emirates",emirates);
		List<Development> rows=query.list();
		return rows;
	}


	public List<Property> getPropDetails(String propertyValued) {
		Query query=sessionFactory.getCurrentSession().createQuery("from Property s where s.propertyValued=:propertyValued");
    	query.setParameter("propertyValued",propertyValued);
		List<Property> rows=query.list();
		return rows;
	}

	
	
}
