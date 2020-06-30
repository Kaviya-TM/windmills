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
import model.Discount;
import model.Property;
import model.ServiceOfficer;
import service.ClientService;


@Repository
public class DiscountDaoImpl {
	
	@Autowired
	private SessionFactory sessionFactory;
	
	static Logger log = Logger.getLogger(DiscountDaoImpl.class);


	public void addDiscount(Discount discount) {
		sessionFactory.getCurrentSession().saveOrUpdate(discount);
	}


	public List<Discount> getDiscount(int discountId) {
		Query query = sessionFactory.getCurrentSession().createQuery("from Discount s where s.discountId=:discountId");
		query.setParameter("discountId",discountId);
		List<Discount> rows=query.list();
		return rows;
	}

	public void editDiscount(Discount discount) {
		sessionFactory.getCurrentSession().update(discount);
		
	}


	
	
}
