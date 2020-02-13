package controller;

import java.io.File;
import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.json.simple.JSONObject;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import service.ServiceOfficerService;
import service.UserService;

@Controller

public class MainController {


	@Autowired
	private UserService userService;
	@Autowired
	private ServiceOfficerService serviceOfficerService;
	

	// homepage after login
	@RequestMapping(value = "/dashboard", method = RequestMethod.GET)
	
	public ModelAndView getLastRestaurant(HttpSession session) throws IOException, ParseException {

		// set userId and email to session
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String email = authentication.getName();
		int userId = userService.finduserbyEmail(email);
		session.setAttribute("email", email);
		session.setAttribute("userId", userId);
		String name = serviceOfficerService.findNamebyEmail(email);
		session.setAttribute("name", name);
		ModelAndView mv = new ModelAndView();
		mv.setViewName("main");
		
		return mv;
	}




}
