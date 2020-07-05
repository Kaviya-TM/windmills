package controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import model.ClientDetails;
import model.ServiceOfficer;
import service.ClientService;
import service.ServiceOfficerService;


@Controller
public class ServiceOfficerController {
	@Autowired
	private ServiceOfficerService serviceOfficerService;
	static Logger log = Logger.getLogger(ClientController.class);

	@RequestMapping(value = {"/service-Officer-form" }, method = RequestMethod.GET)
	public ModelAndView servicePage() {

		ModelAndView mv = new ModelAndView();
		mv.setViewName("serviceform");

		return mv;
	}
	
	@RequestMapping(value = {"/service-Officer-list" }, method = RequestMethod.GET)
	public ModelAndView serviceOfficerPage() {

		ModelAndView mv = new ModelAndView();
		List<Object[]> list=serviceOfficerService.getOfficerlist();
		mv.addObject("Officerlist",list);
		mv.setViewName("servicelist");
		return mv;
	}

	@RequestMapping(value="/getServiceOfficer",method=RequestMethod.POST)
	public ModelAndView getSupplier(@RequestParam("serviceId")int serviceId)
	{
	
		ServiceOfficer serviceform=serviceOfficerService.getServiceOfficer(serviceId);
		ModelAndView mv=new ModelAndView();
		mv.setViewName("serviceeditform");
		mv.addObject("serviceform",serviceform);
		return mv;
		
	
		
	}
	@RequestMapping(value = "/addServiceOfficer", method = RequestMethod.POST)
	public ModelAndView addServiceOfficer(@ModelAttribute("serviceOfficer") ServiceOfficer serviceOfficer,HttpSession session) throws IllegalStateException, IOException {
   
    serviceOfficerService.addServiceOfficer(serviceOfficer);
    ModelAndView mv = new ModelAndView();
    mv.setViewName("main");

	return mv;

	}
	
	@RequestMapping(value = "/checkServiceOfficer", method = RequestMethod.POST)
	@ResponseBody
	public boolean checkServiceOfficer(HttpSession session, @RequestParam("email") String email) {

		boolean status = serviceOfficerService.checkServiceOfficer(session, email);

		return status;

	}
	
	@RequestMapping(value="/editServiceOfficer",method=RequestMethod.POST)
	public ModelAndView editSupplier(@ModelAttribute("ServiceOfficer")ServiceOfficer serviceOfficer,HttpSession session) throws IllegalStateException, IOException {
	
		serviceOfficerService.editServiceOfficer(serviceOfficer);
		 ModelAndView mv = new ModelAndView();
		    mv.setViewName("main");
			return mv;
		
	}
}
