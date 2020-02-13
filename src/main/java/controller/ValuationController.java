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
import model.ValuationReport;
import service.ClientService;
import service.ServiceOfficerService;
import service.ValuationService;


@Controller
public class ValuationController {
	
	@Autowired
	private ValuationService valuationService;
	
	
	static Logger log = Logger.getLogger(ValuationController.class);

	@RequestMapping(value = {"/addValuation" }, method = RequestMethod.GET)
	public ModelAndView valuationPage() {
	
		ModelAndView mv = new ModelAndView();
		mv.setViewName("addvaluation");
		List<ClientDetails> clientlist = valuationService.getClients();
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String email = authentication.getName();
		List<ServiceOfficer> serviceofficerlist = valuationService.getServiceOfficer(email);
		List<ServiceOfficer>  list= valuationService.getDefaultServicer(email);
		int row = valuationService.getNumberOfRows();;
		mv.addObject("clientlist", clientlist);
		mv.addObject("noofrows", row);
		mv.addObject("serviceofficerlist", serviceofficerlist);
		mv.addObject("dfservicer",list);
		return mv;
	}
	
	@RequestMapping(value = "/getValuationInstructingPerson", method = RequestMethod.POST)
	@ResponseBody
	public String getValuationInstructingPerson(@RequestParam("clientName") String clientName) {
		String name = valuationService.getValuationInstructingPerson(clientName);
		System.out.println("name" + name);
		return name;

	}
	
	@RequestMapping(value = "/saveValuation", method = RequestMethod.POST)
	public ModelAndView addProduct(@ModelAttribute("valuationreport") ValuationReport valuationreport,HttpSession session) throws IllegalStateException, IOException {
   
	valuationService.saveValuationReport(valuationreport);
    ModelAndView mv = new ModelAndView();
    mv.setViewName("main");

	return mv;

	}
	
}
