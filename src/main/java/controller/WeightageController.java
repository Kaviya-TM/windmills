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
import model.Property;
import model.ServiceOfficer;
import model.Weightage;
import service.ClientService;
import service.PropertyService;
import service.ServiceOfficerService;
import service.ValuationService;
import service.WeightageService;


@Controller
public class WeightageController {

	@Autowired
	private ValuationService valuationService;
	@Autowired
	private WeightageService weightageService;
	
	static Logger log = Logger.getLogger(WeightageController.class);

	@RequestMapping(value = {"/property-attribute-weightage" }, method = RequestMethod.GET)
	public ModelAndView propertyValuedPage() {
		ModelAndView mv = new ModelAndView();
		List<Property> propertylist = valuationService.getPropertyValued();
		mv.addObject("propertylist", propertylist);
		mv.setViewName("weightage");
		return mv;
	}
	@RequestMapping(value = {"/property-attribute-weightage-list" }, method = RequestMethod.GET)
	public ModelAndView propertyValuedListPage() {

		ModelAndView mv = new ModelAndView();
		List<Object[]> list=weightageService.getWeightage();
		mv.addObject("weightagelist",list);
		mv.setViewName("weightagelist");
		return mv;
	}
	@RequestMapping(value="/getWeightage",method=RequestMethod.POST)
	public ModelAndView getPropertyValued(@RequestParam("weightId")int weightId)
	{
		Weightage weightage= weightageService.getWeightage(weightId);
		ModelAndView mv=new ModelAndView();
		 List<Property> propertylist = valuationService.getPropertyValued();
		 mv.addObject("propertylist", propertylist);
		mv.addObject("weightageeditform",weightage);
		mv.setViewName("weightageeditform");
		return mv;
	}
	@RequestMapping(value = "/addWeightage", method = RequestMethod.POST)
	public ModelAndView addWeightage(@ModelAttribute("weightage") Weightage weightage,HttpSession session) throws IllegalStateException, IOException {
		weightageService.addWeightage(weightage);
	    ModelAndView mv = new ModelAndView();
	    List<Object[]> list = weightageService.getWeightage();
	    mv.addObject("weightagelist",list);
	    mv.setViewName("weightagelist");
		return mv;
	}
	@RequestMapping(value="/editWeightage",method=RequestMethod.POST)
	public ModelAndView editWeightage(@ModelAttribute("weightage")Weightage weightage,HttpSession session) throws IllegalStateException, IOException {
		 weightageService.editWeightage(weightage);
		 ModelAndView mv = new ModelAndView();
		 List<Object[]> list= weightageService.getWeightage();
		 List<Property> propertylist = valuationService.getPropertyValued();
		 mv.addObject("propertylist", propertylist);
		 mv.addObject("weightagelist",list);
		 mv.setViewName("weightagelist");
	     return mv;
		
	}
	@RequestMapping(value = "/delete-weightage")
	public ModelAndView deleteWeightage(@RequestParam("weightId") int weightId, HttpServletRequest request) throws Exception {
		weightageService.deleteWeightage(weightId);
		ModelAndView mv = new ModelAndView();
		List<Object[]> list=weightageService.getWeightage();
		mv.addObject("weightagelist",list);
	    mv.setViewName("weightagelist");
		return mv;

	}

	
}
