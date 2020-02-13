package service;

import java.sql.SQLException;
import java.util.Date;
import java.util.List;

import javax.mail.MessagingException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import dao.UserDaoImpl;

import model.User;
import utils.Constants;
import utils.WindmillsUtils;

@Service
public class UserService {

	@Autowired
	private UserDaoImpl userdaoimpl;
	@Autowired
	private User user;
	
	@Autowired
	public EmailService emailService;
	
	
	static Logger log = Logger.getLogger(UserService.class);
    @Transactional
	public String registerUser(String email, String password, HttpServletRequest request) throws SQLException, Exception {

			//hasingpassword

			BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
			String hashedPassword = passwordEncoder.encode(password);
			user.setPassword(hashedPassword);
			user.setEmail(email);
			user.setEnabled(true);
			user.setUserType((byte) 1);
			user.setCreateDate(new Date());
			user.setModifiedDate(new Date());
			user.setOwnerFlag(true);
			
			  String token=WindmillsUtils.generateToken();
			  user.setToken(token);
			  userdaoimpl.register(user);
			 
//			
//			  String appUrl = request.getScheme() + "://" + request.getHeader("Host") +request.getContextPath();
//			  log.info("app url" + appUrl);
//			  
//			  String mailSubject=Constants.EMAILVERIFY_SUBJECT;
//			  String mailText="<h3>"+Constants.EMAILVERIFY_BODY+"</h3><br>"+  appUrl+ "/emailVerify?token=" + token;
//			
//			  
//			  
//			  emailService.sendEmail(email,mailSubject,mailText);
			 
          System.out.println("After sendin email->callback");
			

			return "success";
		//}
	}
	
    @Transactional
    public int finduserbyEmail(String email)
    {
    	
    	
		int userId = 0;
		List<User> list =userdaoimpl.findUserbyEmail(email);

		if (list.size() != 0) {
			userId=list.get(0).getUserId();
			
			}
    	return userId;
    	
    	
    }
    
    @Transactional
   	public boolean validateUser(String email, HttpServletRequest request) throws SQLException, Exception {

     	boolean status = false;
 		status = userdaoimpl.findUserbyEmailandOwnerFlag(email);
   		return status;
   	}
    

}
