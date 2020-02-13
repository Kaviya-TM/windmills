package service;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import dao.UserDaoImpl;
import model.User;
@Service("customUserDetailsService")
public class CustomUserDetailsServiceImp implements UserDetailsService {

	static Logger log = Logger.getLogger(CustomUserDetailsServiceImp.class);
	@Autowired
	private UserDaoImpl userdaoimpl;
	
	@Override
	@Transactional
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		String username=null;;
		String password=null;;
		boolean enabled=false;
		String role="OWNER";
	
	
	

		
		 List<User>	userrows = userdaoimpl.findUserbyEmail(email);
		
		
		
		if(userrows.size()!=0) {
			
			
			 username= (String)userrows.get(0).getEmail();
			 
			 password=(String)userrows.get(0).getPassword(); 
			 enabled=(boolean)userrows.get(0).isEnabled();
			 if(password==null)
			 {password="";}
				
				List<SimpleGrantedAuthority> authList = getAuthorities(role);
				org.springframework.security.core.userdetails.User user=new org.springframework.security.core.userdetails.User(username, password, enabled, true, true, true, authList);
				return user;
		}
		else {
			throw new UsernameNotFoundException("No user record found with email"+email);
		}
	
		
		
		
	}
	
	
	
	private List<SimpleGrantedAuthority> getAuthorities(String role) {
        List<SimpleGrantedAuthority> authList = new ArrayList<>();
        authList.add(new SimpleGrantedAuthority("OWNER"));
 
        //you can also add different roles here
        //for example, the user is also an admin of the site, then you can add ROLE_ADMIN
        //so that he can view pages that are ROLE_ADMIN specific
		/*
		 * if (role != null && role.trim().length() > 0) { if (role.equals("admin")) {
		 * authList.add(new SimpleGrantedAuthority("ROLE_ADMIN")); } }
		 */
 
        return authList;
    }

}
