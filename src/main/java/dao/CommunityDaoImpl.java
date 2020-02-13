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
import model.Community;
import model.Property;
import model.ServiceOfficer;
import service.ClientService;


@Repository
public class CommunityDaoImpl {
	
	@Autowired
	private SessionFactory sessionFactory;
	
	static Logger log = Logger.getLogger(CommunityDaoImpl.class);


	public void addCommunity(Community community) {
		sessionFactory.getCurrentSession().saveOrUpdate(community);
	}


	
	
}
