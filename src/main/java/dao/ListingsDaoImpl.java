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
import model.Weightage;
import service.ClientService;


@Repository
public class ListingsDaoImpl {
	
	@Autowired
	private SessionFactory sessionFactory;
	
	static Logger log = Logger.getLogger(ListingsDaoImpl.class);


	public void addListings(Listings listings) {
		sessionFactory.getCurrentSession().saveOrUpdate(listings);
		
	}


	public List<Listings> getListings(int listingsId) {
		Query query=sessionFactory.getCurrentSession().createQuery("from Listings s where s.listingsId=:listingsId");
		query.setParameter("listingsId",listingsId);
		List<Listings> rows=query.list();
		return rows;
	}


	public void updateListings(Listings listings) {
		sessionFactory.getCurrentSession().update(listings);
	}


	public List<Listings> getListings() {
		Query query = sessionFactory.getCurrentSession().createQuery("from Listings");
		List<Listings> rows=query.list();
		return rows;
	}


	public void deleteListings(int listingsId) {
		Query query=sessionFactory.getCurrentSession().createQuery("delete from Listings s where s.listingsId=:listingsId");
		query.setParameter("listingsId",listingsId);
		query.executeUpdate();
	}

	
	
}
