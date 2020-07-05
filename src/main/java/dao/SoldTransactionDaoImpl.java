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
import model.Listings;
import model.Property;
import model.ServiceOfficer;
import model.SoldTransactions;
import service.ClientService;


@Repository
public class SoldTransactionDaoImpl {
	
	@Autowired
	private SessionFactory sessionFactory;
	
	static Logger log = Logger.getLogger(ServiceOfficerDaoImpl.class);

	public List<SoldTransactions> getSoldTransactions() {
		Query query = sessionFactory.getCurrentSession().createQuery(" from SoldTransactions");
		List<SoldTransactions> rows=query.list();
		return rows;
	}

	public List<SoldTransactions> getCity() {
		Query query = sessionFactory.getCurrentSession().createQuery("select distinct city from  SoldTransactions");
		List<SoldTransactions> rows=query.list();
		return rows;
	}
	
	public List<SoldTransactions> getArea() {
		Query query = sessionFactory.getCurrentSession().createQuery("select distinct area from  SoldTransactions");
		List<SoldTransactions> rows=query.list();
		return rows;
	}

	public List<SoldTransactions> getNeighbourhood() {
		Query query = sessionFactory.getCurrentSession().createQuery("select distinct neighbourhood from  SoldTransactions");
		List<SoldTransactions> rows=query.list();
		return rows;
	}

	public List<SoldTransactions> getBuildings() {
		Query query = sessionFactory.getCurrentSession().createQuery("select distinct buildingName from  SoldTransactions");
		List<SoldTransactions> rows=query.list();
		return rows;
	}

	public List<SoldTransactions> getFilter(String city, String area, String neighbourhood, String buildingName) {
		Query query = sessionFactory.getCurrentSession().createQuery("from SoldTransactions s where s.city=:city and s.area=:area and s.neighbourhood=:neighbourhood and s.buildingName=:buildingName");
		query.setParameter("city",city);
		query.setParameter("area",area);
		query.setParameter("neighbourhood",neighbourhood);
		query.setParameter("buildingName",buildingName);
		List<SoldTransactions> rows= query.list();
		return rows;
	}

	public List<SoldTransactions> getDevelopers() {
		Query query = sessionFactory.getCurrentSession().createQuery("select distinct developer from  SoldTransactions");
		List<SoldTransactions> rows=query.list();
		return rows;
	}
	public List<SoldTransactions> getCommunitySoldList(String city) {
		Query query=sessionFactory.getCurrentSession().createQuery("select distinct area from SoldTransactions s where s.city=:city");
		query.setParameter("city",city);
		List<SoldTransactions> rows=query.list();
		return rows;
	}
	
	public List<SoldTransactions> getSubCommunitySoldList(String area) {
		Query query=sessionFactory.getCurrentSession().createQuery("select distinct neighbourhood from SoldTransactions s where s.area=:area");
		query.setParameter("area",area);
		List<SoldTransactions> rows=query.list();
		return rows;
	}
	
	public List<SoldTransactions> getBuildingLiist(String neighbourhood) {
		Query query=sessionFactory.getCurrentSession().createQuery("select distinct buildingName from SoldTransactions s where s.neighbourhood=:neighbourhood");
		query.setParameter("neighbourhood",neighbourhood);
		List<SoldTransactions> rows=query.list();
		return rows;
	}

}
