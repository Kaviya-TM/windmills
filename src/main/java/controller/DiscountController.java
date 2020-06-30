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
import model.Discount;
import model.Listings;
import model.ServiceOfficer;
import service.ClientService;
import service.DiscountService;


@Controller
public class DiscountController {
	
	@Autowired
	private Discount discount;
	@Autowired
	private DiscountService discountService;

	static Logger log = Logger.getLogger(DiscountController.class);

	@RequestMapping(value = {"/sales-discount" }, method = RequestMethod.GET)
	public ModelAndView loginPage() {

		ModelAndView mv = new ModelAndView();
		mv.setViewName("discount");

		return mv;
	}
	
	@RequestMapping(value = {"/edit-discount" }, method = RequestMethod.GET)
	public ModelAndView editPage() {

		ModelAndView mv = new ModelAndView();
		mv.setViewName("editdiscount");

		return mv;
	}
	
	@RequestMapping(value = "/editDiscountPage", method = RequestMethod.POST)
	@ResponseBody
	public List<Discount> editDiscountPage(@RequestParam("discountId") int discountId) {
		List<Discount> discount= discountService.getDiscount(discountId);
		return discount;

	}
	
	@RequestMapping(value = "/addDiscount", method = RequestMethod.POST)
	public ModelAndView addClientDetails(@ModelAttribute("discount") Discount discount,HttpSession session) throws IllegalStateException, IOException {
   
    discountService.addDiscount(discount);
    ModelAndView mv = new ModelAndView();
    mv.setViewName("main");

	return mv;

	}
	@RequestMapping(value="/editDiscount",method=RequestMethod.POST)
	public ModelAndView editDiscount(@ModelAttribute("discount")Discount discount,HttpSession session) throws IllegalStateException, IOException {
	
		discountService.editDiscount(discount);
		 ModelAndView mv = new ModelAndView();
		 mv.setViewName("main");
		 return mv;
		
	}
}
