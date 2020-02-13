package controller;

import java.sql.SQLException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import service.UserService;
import utils.Constants;

@Controller
public class RegisterController {

	@Autowired
	private UserService userService;

	@RequestMapping(value = "/register", method = RequestMethod.GET)
	public ModelAndView regPage() {

		ModelAndView mv = new ModelAndView();
		mv.setViewName("register");
		return mv;
	}

	@RequestMapping(value = "/registerValidation", method = RequestMethod.POST)
	@ResponseBody
	public String validateUser(@RequestParam("email") String email, HttpServletRequest request)
			throws SQLException, Exception {

		boolean status = false;
		status = userService.validateUser(email, request);
		if (status) {
			return "success";
		} else {
			return "failure";
		}
	}

	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public ModelAndView addUser(@RequestParam("email") String email, @RequestParam("password") String password,
			HttpServletRequest request) throws SQLException, Exception {

		

		userService.registerUser(email, password, request);
	   ModelAndView mv=new ModelAndView();
	   mv.setViewName("login");
	   return mv;
			
		}	

	

}
