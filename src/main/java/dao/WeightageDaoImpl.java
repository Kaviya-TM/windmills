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
import model.Property;
import model.ServiceOfficer;
import model.Weightage;
import service.ClientService;


@Repository
public class WeightageDaoImpl {
	
	@Autowired
	private SessionFactory sessionFactory;
	
	static Logger log = Logger.getLogger(WeightageDaoImpl.class);


	public void addWeightage(Weightage weightage) {
		sessionFactory.getCurrentSession().saveOrUpdate(weightage);
	}


	public List<Object[]> getWeightage() {
		Query query = sessionFactory.getCurrentSession().createQuery(" from Weightage");
		List<Object[]> rows=query.list();
		return rows;
	}


	public List<Weightage> getWeightage(int weightId) {
		Query query=sessionFactory.getCurrentSession().createQuery("from Weightage s where s.weightId=:weightId");
		query.setParameter("weightId",weightId);
		List<Weightage> rows=query.list();
		return rows;
	}

	public void updateWeightage(Weightage weightage) {
		sessionFactory.getCurrentSession().update(weightage);
	}
	public void deleteWeightage(int weightId) {
		Query query=sessionFactory.getCurrentSession().createQuery("delete from Weightage s where s.weightId=:weightId");
		query.setParameter("weightId",weightId);
		query.executeUpdate();
	}


	public List<Weightage> getWeightage(String city, String propertyType) {
		String emirates = city;
		Query query=sessionFactory.getCurrentSession().createQuery("from Weightage s where s.emirates=:emirates and s.propertyType=:propertyType");
		query.setParameter("emirates",emirates);
		query.setParameter("propertyType",propertyType);
		List<Weightage> rows=query.list();
		return rows;
	}

	
	
}
