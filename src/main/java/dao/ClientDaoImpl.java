package dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.hibernate.transform.Transformers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javassist.convert.Transformer;
import model.ClientDetails;
import model.ServiceOfficer;


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


	public List<Object[]> getClients() {
		Query query = sessionFactory.getCurrentSession().createQuery(" from ClientDetails");
		List<Object[]> rows=query.list();
		return rows;
		
	}


	public List<ClientDetails> getClient(int clientId) {
		Query query=sessionFactory.getCurrentSession().createQuery("from ClientDetails s where s.clientId=:clientId");
		query.setParameter("clientId",clientId);
		List<ClientDetails> rows=query.list();
		return rows;
	}


	public void updateClientDetails(ClientDetails clientdetails) {
		sessionFactory.getCurrentSession().update(clientdetails);
		
	}
	

	
	
}
