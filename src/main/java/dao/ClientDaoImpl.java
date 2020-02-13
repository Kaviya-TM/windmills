package dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.hibernate.transform.Transformers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javassist.convert.Transformer;
import model.ClientDetails;


@Repository
public class ClientDaoImpl {
	
	@Autowired
	private SessionFactory sessionFactory;
	
	
	public void addClient(ClientDetails clientdetails) {
		

		sessionFactory.getCurrentSession().saveOrUpdate(clientdetails);

	}
	
	
	public void updateClient(ClientDetails clientdetails) {
			sessionFactory.getCurrentSession().update(clientdetails);
	}
	

	
	
}
