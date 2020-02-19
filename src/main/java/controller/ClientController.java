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


@Controller
public class ClientController {
	
	@Autowired
	private ClientDetails clientdetails;
	@Autowired
	private ClientService clientService;

	static Logger log = Logger.getLogger(ClientController.class);

	@RequestMapping(value = {"/client-form" }, method = RequestMethod.GET)
	public ModelAndView loginPage() {

		ModelAndView mv = new ModelAndView();
		mv.setViewName("clientform");

		return mv;
	}
	@RequestMapping(value = {"/client-list" }, method = RequestMethod.GET)
	public ModelAndView serviceOfficerPage() {

		ModelAndView mv = new ModelAndView();
		List<Object[]> list=clientService.getClients();
		mv.addObject("clientlist",list);
		mv.setViewName("clientlist");
		return mv;
	}
	@RequestMapping(value="/getClient",method=RequestMethod.POST)
	public ModelAndView getSupplier(@RequestParam("clientId")int clientId)
	{
	
		ClientDetails clientdetails=clientService.getClient(clientId);
		ModelAndView mv=new ModelAndView();
		mv.setViewName("clienteditform");
		mv.addObject("clientform",clientdetails);
		return mv;
		
	
		
	}
	@RequestMapping(value = "/addClientDetails", method = RequestMethod.POST)
	public ModelAndView addClientDetails(@ModelAttribute("clientdetails") ClientDetails clientdetails,HttpSession session) throws IllegalStateException, IOException {
   
    clientService.addClient(clientdetails);
    ModelAndView mv = new ModelAndView();
    mv.setViewName("main");

	return mv;

	}
	@RequestMapping(value="/editClientDetails",method=RequestMethod.POST)
	public ModelAndView editClientDetails(@ModelAttribute("clientdetails")ClientDetails clientdetails,HttpSession session) throws IllegalStateException, IOException {
	
		clientService.editClientDetails(clientdetails);
		 ModelAndView mv = new ModelAndView();
		    mv.setViewName("main");
			return mv;
		
	}
}
