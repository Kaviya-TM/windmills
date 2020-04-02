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
import model.Listings;
import model.Property;
import model.ServiceOfficer;
import model.SoldTransactions;
import model.ValuationReport;
import model.Weightage;
import service.ClientService;
import service.ListingsService;
import service.ServiceOfficerService;
import service.SoldTransactionService;
import service.ValuationService;


@Controller
public class ListingTransactionController {

	@Autowired
	private SoldTransactionService soldTransactionService;
	
	@Autowired
	private ValuationService valuationService;
	
	@Autowired
	private ListingsService listingsService;
	
	static Logger log = Logger.getLogger(ListingTransactionController.class);

	@RequestMapping(value = {"/listing-transactions" }, method = RequestMethod.GET)
	public ModelAndView listings() {
		ModelAndView mv = new ModelAndView();
		List<Property> propertylist = valuationService.getPropertyValued();
		List<SoldTransactions> cityylist=soldTransactionService.getCity();
		List<SoldTransactions> arealist=soldTransactionService.getArea();
		List<SoldTransactions> hoodlist=soldTransactionService.getNeighbourhood();
		List<SoldTransactions> bullist=soldTransactionService.getBuildings();
		mv.setViewName("listingTransactions");
		mv.addObject("propertylist",propertylist);
		mv.addObject("cityylist",cityylist);
		mv.addObject("arealist",arealist);
		mv.addObject("hoodlist",hoodlist);
		mv.addObject("bullist",bullist);
		return mv;
	}
	@RequestMapping(value = {"/addlisitings" }, method = RequestMethod.POST)
	public ModelAndView addListings(@ModelAttribute("listings") Listings listings,HttpSession session) throws IllegalStateException, IOException {
		listingsService.addListings(listings);
	    ModelAndView mv = new ModelAndView();
	    List<Object[]> list=listingsService.getListings();
	    mv.addObject("listingslist",list);
	    mv.setViewName("listingslist");
		return mv;

	}
	
	@RequestMapping(value = {"/listings-list" }, method = RequestMethod.GET)
	public ModelAndView listingPage() {

		ModelAndView mv = new ModelAndView();
		List<Object[]> list=listingsService.getListings();
		mv.addObject("listingslist",list);
		System.err.println("listings-list");
		mv.setViewName("listingslist");
		return mv;
	}
	@RequestMapping(value="/getListings",method=RequestMethod.POST)
	public ModelAndView getListings(@RequestParam("listingsId")int listingsId)
	{
		Listings listings=listingsService.getListings(listingsId);
		ModelAndView mv=new ModelAndView();
		mv.setViewName("listingseditform");
		mv.addObject("listingsform",listings);
		return mv;
	}
	
	@RequestMapping(value="/editListings",method=RequestMethod.POST)
	public ModelAndView editListings(@ModelAttribute("listings")Listings listings,HttpSession session) throws IllegalStateException, IOException {
		listingsService.editListings(listings);
		 ModelAndView mv = new ModelAndView();
		 List<Object[]> list=listingsService.getListings();
		 mv.addObject("listinglist",list);
		 mv.setViewName("listinglist");
	     return mv;
		
	}
	@RequestMapping(value = "/delete-listings")
	public ModelAndView deleteListings(@RequestParam("listingsId") int listingsId, HttpServletRequest request) throws Exception {
		listingsService.deleteListings(listingsId);
		ModelAndView mv = new ModelAndView();
		List<Object[]> list=listingsService.getListings();
		mv.addObject("listinglist",list);
	    mv.setViewName("listinglist");
	    return mv;

	}

	
}
