package controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.json.simple.JSONObject;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class LoginController {

	static Logger log = Logger.getLogger(LoginController.class);

	@RequestMapping(value = { "/", "/login" }, method = RequestMethod.GET)
	public ModelAndView loginPage() {

		ModelAndView mv = new ModelAndView();
		mv.setViewName("login");

		return mv;
	}
	
	// landing page for invalid login
	@RequestMapping(value = { "/login" }, method = RequestMethod.POST)

	public ModelAndView login(HttpServletRequest request, HttpServletResponse response) {

		ModelAndView mv = new ModelAndView();
		mv.setViewName("login");

		String username = request.getParameter("username");
		String password = request.getParameter("password");
		mv.addObject("username", username);
		mv.addObject("password", password);

		return mv;

	
	}
	
	// to be used
	@RequestMapping(value = "/logout", method = RequestMethod.GET)
	public String logoutPage(HttpServletRequest request, HttpServletResponse response) {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		if (auth != null) {
			new SecurityContextLogoutHandler().logout(request, response, auth);
		}
		return "redirect:/login?logout=true";
	}

}
