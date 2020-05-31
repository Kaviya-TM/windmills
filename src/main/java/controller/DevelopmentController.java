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
import model.Development;
import model.Property;
import model.ServiceOfficer;
import service.ClientService;
import service.DevelopmentService;
import service.ServiceOfficerService;


@Controller
public class DevelopmentController {

	@Autowired
	private DevelopmentService developmentService;
	
	static Logger log = Logger.getLogger(DevelopmentController.class);


	@RequestMapping(value = {"/development" }, method = RequestMethod.GET)
	public ModelAndView developmentPage() {

		ModelAndView mv = new ModelAndView();
		mv.setViewName("development");
		return mv;
	}
	
	@RequestMapping(value = "/addDevelopment", method = RequestMethod.POST)
	public ModelAndView addDevelopment(@ModelAttribute("development") Development development,HttpSession session) throws IllegalStateException, IOException {
		developmentService.addDevelopment(development);
	    ModelAndView mv = new ModelAndView();
	    List<Object[]> list=developmentService.getDevelopment();
	    mv.addObject("devlist",list);
		mv.setViewName("devlist");
		return mv;
	}
	
	@RequestMapping(value = {"/development-list" }, method = RequestMethod.GET)
	public ModelAndView developlistPage() {
		ModelAndView mv = new ModelAndView();
		List<Object[]> list=developmentService.getDevelopment();
		mv.addObject("devlist",list);
		mv.setViewName("devlist");
		return mv;
	}
	@RequestMapping(value="/getDevelopment",method=RequestMethod.POST)
	public ModelAndView getDevelopment(@RequestParam("developmentId")int developmentId)
	{
		Development development=developmentService.getDevelopment(developmentId);
		ModelAndView mv=new ModelAndView();
		mv.setViewName("deveditform");
		mv.addObject("devform",development);
		return mv;
	}
	@RequestMapping(value = "/development-data", method = RequestMethod.POST)
	@ResponseBody
	public JSONObject getValuationInstructingPerson(@RequestParam("propertyValued")String propertyValued,@RequestParam("city") String city) {
		List<Development> list = developmentService.getDevelopment(city);
		List<Property> proplist = developmentService.getPropDetails(propertyValued);
		JSONObject json = new JSONObject();
		json.put("list", list);
		json.put("proplist", proplist);
		return json;

	}
	@RequestMapping(value="/editDevelopment",method=RequestMethod.POST)
	public ModelAndView editDevelopment(@ModelAttribute("development") Development development,HttpSession session) throws IllegalStateException, IOException {
		developmentService.editDevelopment(development);
		 ModelAndView mv = new ModelAndView();
		 List<Object[]> list=developmentService.getDevelopment();
		 mv.addObject("devlist",list);
		 mv.setViewName("devlist");
		return mv;
		
	}
	@RequestMapping(value = "/delete-development")
	public ModelAndView deleteDevelopment(@RequestParam("developmentId") int developmentId, HttpServletRequest request) throws Exception {
		developmentService.deleteDevelopment(developmentId);
		ModelAndView mv = new ModelAndView();
		 List<Object[]> list=developmentService.getDevelopment();
		 mv.addObject("devlist",list);
		 mv.setViewName("devlist");
		return mv;
	}
}
