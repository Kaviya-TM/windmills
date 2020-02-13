package dao;

import java.sql.SQLException;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import model.User;

@Repository
public class UserDaoImpl {

	@Autowired
	private SessionFactory sessionFactory;
	@Autowired
	private User user;

	public List<User> findUserbyEmail(String email) {

	
		Query query = sessionFactory.getCurrentSession().createQuery("from User where email = :email");
		query.setParameter("email", email);
		
		List<User> rows = query.list();

	

		return rows;

	}

	// to find user exists or not before signup
	public boolean findUserbyEmailandOwnerFlag(String email) throws SQLException, Exception {

		Query query = sessionFactory.getCurrentSession().createQuery(
				"from User where email = :email  and ownerFlag=1 and (userType=3 or userType=1)");
		query.setParameter("email", email);
		
	
		return query.uniqueResult()!=null;

	}
	
	public List<User> findUserbyEmailStatus(List<String> email) {

		
		Query query = sessionFactory.getCurrentSession().createQuery("from User where email in :email");
		query.setParameterList("email", email);
		
		@SuppressWarnings("unchecked")
		List<User> rows = query.list();

		return rows;

	}

	public String register(User user)  {

		sessionFactory.getCurrentSession().save(user);

		return "Success";
	}

	public void updateToken(User user) {

		Query query = sessionFactory.getCurrentSession()
				.createQuery("update User set token=:token where userId=:userId");
		query.setParameter("userId", user.getUserId());
		query.setParameter("token",user.getToken());
		query.executeUpdate();

		
	}

	public List<User> getToken(String token) throws SQLException, Exception {

		Query query = sessionFactory.getCurrentSession()
				.createQuery("from User where token = :token");
		query.setParameter("token", token);
		List<User> rows = query.list();

		return rows;

	}

	public String activateUser(User user) throws SQLException, Exception {

		Query query = sessionFactory.getCurrentSession()
				.createQuery("update User set enabled=true where userId=:userId");
		query.setParameter("userId", user.getUserId());
		query.executeUpdate();

		return "Success";
	}
	
	public void updateUserType(User user) {

		Query query = sessionFactory.getCurrentSession()
				.createQuery("update User set userType=:userType where userId=:userId");
		query.setParameter("userId", user.getUserId());
		query.setParameter("userType", user.getUserType());
		query.executeUpdate();

		
	}
	
	public void deleteUser(User user)
	{
		
		Query query = sessionFactory.getCurrentSession()
				.createQuery("Delete from  User where userId=:userId");
		query.setParameter("userId", user.getUserId());
		query.executeUpdate();
		
	}

}
