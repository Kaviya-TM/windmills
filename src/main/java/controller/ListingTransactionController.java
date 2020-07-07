package controller;

import java.io.IOException;
import java.text.ParseException;
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
		List<Property> categorylist = valuationService.getCategory();
		List<ValuationReport> referencelist = valuationService.getReference();
		List<SoldTransactions> cityylist=soldTransactionService.getCity();
		List<SoldTransactions> arealist=soldTransactionService.getArea();
		List<SoldTransactions> hoodlist=soldTransactionService.getNeighbourhood();
		List<SoldTransactions> bullist=soldTransactionService.getBuildings();
		List<SoldTransactions> devlist=soldTransactionService.getDevelopers();
		mv.setViewName("listingTransactions");
		mv.addObject("propertylist",propertylist);
		mv.addObject("referencelist",referencelist);
		mv.addObject("cityylist",cityylist);
		mv.addObject("categorylist",categorylist);
		mv.addObject("arealist",arealist);
		mv.addObject("hoodlist",hoodlist);
		mv.addObject("bullist",bullist);
		mv.addObject("devlist",devlist);
		return mv;
	}
	@RequestMapping(value = {"/addlisitings" }, method = RequestMethod.POST)
	public ModelAndView addListings(@ModelAttribute("listings") Listings listings,HttpSession session) throws IllegalStateException, IOException {
		listingsService.addListings(listings);
	    ModelAndView mv = new ModelAndView();
	    List<Listings> list=listingsService.getListings();
	    mv.addObject("listingslist",list);
	    mv.setViewName("listingslist");
		return mv;

	}
	@RequestMapping(value = "/getCommunityList", method = RequestMethod.POST)
	@ResponseBody
	public List<Listings> getCommunityList(@RequestParam("city") String city) {
		List<Listings> list = valuationService.getCommunityList(city);
		return list;

	}
	@RequestMapping(value = "/getSubCommunityList", method = RequestMethod.POST)
	@ResponseBody
	public List<Listings> getSubCommunityList(@RequestParam("community") String community) {
		List<Listings> list = valuationService.getSubCommunityList(community);
		return list;

	}
	@RequestMapping(value = "/getBuildingLiist", method = RequestMethod.POST)
	@ResponseBody
	public List<Listings> getBuildingLiist(@RequestParam("subCommunity") String subCommunity) {
		List<Listings> list = valuationService.getBuildingLiist(subCommunity);
		return list;

	}
	@RequestMapping(value = "/listings-filtered-transaction", method = RequestMethod.POST)
	@ResponseBody
	public JSONObject getFilterTransacList(@RequestParam("city")String city,@RequestParam("area")String area,
			@RequestParam("neighbourhood")String neighbourhood,@RequestParam("buildingName")String buildingName,@RequestParam("landfrom")String landfrom,@RequestParam("buafrom")String buafrom,
			@RequestParam("buato")String buato,@RequestParam("landto")String landto,@RequestParam("bedfrom")String bedfrom,@RequestParam("bedto")String bedto,
			@RequestParam("pricefrom")String pricefrom,@RequestParam("priceto")String priceto,@RequestParam("pricesqtfrom")String pricesqtfrom,@RequestParam("pricesqtto")String pricesqtto,
			@RequestParam("datefrom")String datefrom,@RequestParam("dateto")String dateto,@RequestParam("propList")String propList) throws ParseException{
		List<Listings> list = listingsService.getFilterList(city,area,neighbourhood,buildingName,bedfrom,bedto,landfrom,landto,buafrom,buato,pricefrom,priceto,pricesqtfrom,pricesqtto,datefrom,dateto,propList);
		System.err.println("listinglist"+list.size());
		JSONObject json = new JSONObject();
		if(list.size() > 0){
			String dateAvg = listingsService.getDateAvg(list);
			System.err.println("listingdate");
			String locAvg = listingsService.getLocationAvg(list);
			System.err.println("listingloc");
			String ageAvg = listingsService.getAgeAvg(list);
			System.err.println("listingage");
			String viewAvg = listingsService.getViewAvg(list);
			System.err.println("listingview");
			String staAvg = listingsService.getStatusAvg(list);
			System.err.println("listingsta");
			String expAvg = listingsService.getExposureAvg(list);
			System.err.println("listingexp");
			String plaAvg = listingsService.getPlacementAvg(list);
			System.err.println("listingpla");
			String floorAvg = listingsService.getFloorAvg(list);
			System.err.println("listingfloor");
			String levelAvg = listingsService.getLevelAvg(list);
			System.err.println("listinglevel");
			String landAvg = listingsService.getlandAvg(list);
			System.err.println("listingland");
			String priceAvg = listingsService.getpriceAvg(list);
			System.err.println("listingprice");
			String sizeAvg = listingsService.getSizeAvg(list);
			System.err.println("listingsize");
			String pricePerAvg = listingsService.getpricePerAvg(list);
			System.err.println("listingpriceper");
			String bedAvg = listingsService.getBedAvg(list);
			System.err.println("listingbed");
			int count = list.size();
			int lowprice = listingsService.getLowPrice(list);
			System.err.println("listinglow");
			int highprice = listingsService.getHighPrice(list);
			System.err.println("listinghigh");
			int lowpricepersq = listingsService.getLowPricePerSq(list);
			System.err.println("listinglowpr");
			int highpricepersq = listingsService.getHighPricePerSq(list);
			System.err.println("listinghighper");
			json.put("list", list);
			json.put("count", count);
			json.put("dateAvg", dateAvg);
			json.put("locAvg", locAvg);
			json.put("ageAvg", ageAvg);
			json.put("viewAvg", viewAvg);
			json.put("expAvg", expAvg);
			json.put("staAvg", staAvg);
			json.put("plaAvg", plaAvg);
			json.put("floorAvg", floorAvg);
			json.put("levelAvg", levelAvg);
			json.put("landAvg", landAvg);
			json.put("priceAvg", priceAvg);
			json.put("sizeAvg", sizeAvg);
			json.put("bedAvg", bedAvg);
			json.put("pricePerAvg", pricePerAvg);
			json.put("lowprice", lowprice);
			json.put("highprice", highprice);
			json.put("lowpricepersq", lowpricepersq);
			json.put("highpricepersq", highpricepersq);
			json.put("empty","full");
			
		}
		else{
			json.put("empty","empty");
		}
		
		System.err.println("json"+json);
		return json;

	}
	
	@RequestMapping(value = {"/listings-list" }, method = RequestMethod.GET)
	public ModelAndView listingPage() {

		ModelAndView mv = new ModelAndView();
		List<Listings> list=listingsService.getListings();
		mv.addObject("listingslist",list);
		mv.setViewName("listingslist");
		return mv;
	}
	@RequestMapping(value="/getListings",method=RequestMethod.POST)
	public ModelAndView getListings(@RequestParam("listingsId")int listingsId)
	{
		Listings listings=listingsService.getListings(listingsId);
		List<Property> propertylist = valuationService.getPropertyValued();
		List<ValuationReport> referencelist = valuationService.getReference();
		List<SoldTransactions> cityylist=soldTransactionService.getCity();
		List<SoldTransactions> arealist=soldTransactionService.getArea();
		List<SoldTransactions> hoodlist=soldTransactionService.getNeighbourhood();
		List<SoldTransactions> bullist=soldTransactionService.getBuildings();
		ModelAndView mv=new ModelAndView();
		mv.addObject("propertylist",propertylist);
		mv.addObject("referencelist",referencelist);
		mv.addObject("cityylist",cityylist);
		mv.addObject("arealist",arealist);
		mv.addObject("hoodlist",hoodlist);
		mv.addObject("bullist",bullist);
		mv.setViewName("listingseditform");
		mv.addObject("listingsform",listings);
		return mv;
	}
	
	@RequestMapping(value="/editListings",method=RequestMethod.POST)
	public ModelAndView editListings(@ModelAttribute("listings")Listings listings,HttpSession session) throws IllegalStateException, IOException {
		listingsService.editListings(listings);
		 ModelAndView mv = new ModelAndView();
		 List<Listings> list=listingsService.getListings();
		 List<Property> propertylist = valuationService.getPropertyValued();
		List<ValuationReport> referencelist = valuationService.getReference();
		List<SoldTransactions> cityylist=soldTransactionService.getCity();
		List<SoldTransactions> arealist=soldTransactionService.getArea();
		List<SoldTransactions> hoodlist=soldTransactionService.getNeighbourhood();
		List<SoldTransactions> bullist=soldTransactionService.getBuildings();
		List<Property> categorylist = valuationService.getCategory();
		
		System.err.println("categorylist"+categorylist.size());
		mv.addObject("categorylist",categorylist);
		mv.addObject("propertylist",propertylist);
		mv.addObject("referencelist",referencelist);
		mv.addObject("cityylist",cityylist);
		mv.addObject("arealist",arealist);
		mv.addObject("hoodlist",hoodlist);
		mv.addObject("bullist",bullist);
		mv.addObject("listingslist",list);
		 mv.setViewName("listingslist");
	     return mv;
		
	}
	@RequestMapping(value = "/delete-listings")
	public ModelAndView deleteListings(@RequestParam("listingsId") int listingsId, HttpServletRequest request) throws Exception {
		listingsService.deleteListings(listingsId);
		ModelAndView mv = new ModelAndView();
		List<Listings> list=listingsService.getListings();
		mv.addObject("listingslist",list);
	    mv.setViewName("listingslist");
	    return mv;

	}

	
}
