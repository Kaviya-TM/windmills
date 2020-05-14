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
import model.MasterValuation;
import model.Property;
import model.ServiceOfficer;
import model.SoldTransactions;
import model.Weightage;
import service.ClientService;


@Repository
public class MasterDaoImpl {
	
	@Autowired
	private SessionFactory sessionFactory;
	
	static Logger log = Logger.getLogger(MasterDaoImpl.class);


	public void addListings(Listings listings) {
		sessionFactory.getCurrentSession().saveOrUpdate(listings);
		
	}

	public List<MasterValuation> getMaster(int masterId) {
		Query query=sessionFactory.getCurrentSession().createQuery("from MasterValuation s where s.masterId=:masterId");
		query.setParameter("masterId",masterId);
		List<MasterValuation> rows=query.list();
		return rows;
	}

	public void updateMasters(MasterValuation masters) {
		sessionFactory.getCurrentSession().update(masters);
	}

	public List<MasterValuation> getMasterList() {
		Query query = sessionFactory.getCurrentSession().createQuery("from MasterValuation");
		List<MasterValuation> rows=query.list();
		return rows;
	}

	public void deleteMasters(int masterId) {
		Query query=sessionFactory.getCurrentSession().createQuery("delete from MasterValuation s where s.masterId=:masterId");
		query.setParameter("masterId",masterId);
		query.executeUpdate();
	}

	public List<MasterValuation> getBuildingName() {
		Query query = sessionFactory.getCurrentSession().createQuery("select distinct building from  MasterValuation");
		List<MasterValuation> rows=query.list();
		return rows;
	}

	public List<MasterValuation> getSubCommunity() {
		Query query = sessionFactory.getCurrentSession().createQuery("select distinct subCommunity from  MasterValuation");
		List<MasterValuation> rows=query.list();
		return rows;
	}

	public List<MasterValuation> getCommunity() {
		Query query = sessionFactory.getCurrentSession().createQuery("select distinct community from  MasterValuation");
		List<MasterValuation> rows=query.list();
		return rows;
	}

	public List<MasterValuation> getCity() {
		Query query = sessionFactory.getCurrentSession().createQuery("select distinct city from  MasterValuation");
		List<MasterValuation> rows=query.list();
		return rows;
	}

	public List<MasterValuation> getMasters() {
		Query query = sessionFactory.getCurrentSession().createQuery("from MasterValuation");
		List<MasterValuation> rows=query.list();
		return rows;
	}

	public List<MasterValuation> getCommunity(String building) {
		Query query=sessionFactory.getCurrentSession().createQuery("from MasterValuation s where s.building=:building");
		query.setParameter("building",building);
		List<MasterValuation> rows=query.list();
		return rows;
	}
}
