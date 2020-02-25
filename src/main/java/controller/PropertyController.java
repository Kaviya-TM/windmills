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
import service.ClientService;
import service.PropertyService;
import service.ServiceOfficerService;


@Controller
public class PropertyController {

	@Autowired
	private PropertyService propertyService;
	
	static Logger log = Logger.getLogger(PropertyController.class);

	@RequestMapping(value = {"/property-valued" }, method = RequestMethod.GET)
	public ModelAndView propertyValuedPage() {

		ModelAndView mv = new ModelAndView();
		mv.setViewName("property");

		return mv;
	}
	@RequestMapping(value = {"/property-valued-list" }, method = RequestMethod.GET)
	public ModelAndView propertyValuedListPage() {

		ModelAndView mv = new ModelAndView();
		List<Object[]> list=propertyService.getPropertyValued();
		mv.addObject("propertylist",list);
		mv.setViewName("propertylist");
		return mv;
	}
	@RequestMapping(value="/getPropertyValued",method=RequestMethod.POST)
	public ModelAndView getPropertyValued(@RequestParam("propertyId")int propertyId)
	{
		Property property=propertyService.getPropertyValued(propertyId);
		ModelAndView mv=new ModelAndView();
		mv.setViewName("propertyeditform");
		mv.addObject("propertyform",property);
		return mv;
	}
	@RequestMapping(value = "/addPropertyValued", method = RequestMethod.POST)
	public ModelAndView addPropertyValued(@ModelAttribute("property") Property property,HttpSession session) throws IllegalStateException, IOException {
		propertyService.addPropertyValued(property);
	    ModelAndView mv = new ModelAndView();
	    List<Object[]> list=propertyService.getPropertyValued();
	    mv.addObject("propertylist",list);
	    mv.setViewName("propertylist");
		return mv;
	}
	@RequestMapping(value="/editPropertyValued",method=RequestMethod.POST)
	public ModelAndView editPropertyValued(@ModelAttribute("property")Property property,HttpSession session) throws IllegalStateException, IOException {
		propertyService.editPropertyValued(property);
		 ModelAndView mv = new ModelAndView();
		 List<Object[]> list=propertyService.getPropertyValued();
		 mv.addObject("propertylist",list);
		 mv.setViewName("propertylist");
	     return mv;
		
	}
	@RequestMapping(value = "/delete-property-valued")
	public ModelAndView deletePropertyValued(@RequestParam("propertyId") int propertyId, HttpServletRequest request) throws Exception {
		propertyService.deletePropertyValued(propertyId);
		ModelAndView mv = new ModelAndView();
		List<Object[]> list=propertyService.getPropertyValued();
		mv.addObject("propertylist",list);
	    mv.setViewName("propertylist");
	    return mv;

	}

	
}
