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
import model.Community;
import model.Property;
import model.ServiceOfficer;
import service.ClientService;
import service.CommunityService;
import service.PropertyService;
import service.ServiceOfficerService;


@Controller
public class CommunityController {

	@Autowired
	private CommunityService communityService;
	
	static Logger log = Logger.getLogger(PropertyController.class);

	@RequestMapping(value = {"/community" }, method = RequestMethod.GET)
	public ModelAndView communityPage() {

		ModelAndView mv = new ModelAndView();
		mv.setViewName("community");

		return mv;
	}
	@RequestMapping(value = {"/community-list" }, method = RequestMethod.GET)
	public ModelAndView communityListPage() {

		ModelAndView mv = new ModelAndView();
		List<Object[]> list=communityService.getCommunity();
		mv.addObject("communitylist",list);
		mv.setViewName("communitylist");
		return mv;
	}
	@RequestMapping(value="/getCommunity",method=RequestMethod.POST)
	public ModelAndView getCommunity(@RequestParam("communityId")int communityId)
	{
		Community community=communityService.getCommunity(communityId);
		ModelAndView mv=new ModelAndView();
		mv.setViewName("communityeditform");
		mv.addObject("communityform",community);
		return mv;
	}
	@RequestMapping(value = "/addCommunity", method = RequestMethod.POST)
	public ModelAndView addPropertyValued(@ModelAttribute("community") Community community,HttpSession session) throws IllegalStateException, IOException {
		communityService.addCommunity(community);
	    ModelAndView mv = new ModelAndView();
	    mv.setViewName("main");
		return mv;
	}
	@RequestMapping(value="/editCommunity",method=RequestMethod.POST)
	public ModelAndView editCommunity(@ModelAttribute("community")Community community,HttpSession session) throws IllegalStateException, IOException {
		 communityService.editCommunity(community);
		 ModelAndView mv = new ModelAndView();
		 mv.setViewName("main");
	     return mv;
		
	}
	
	
}
