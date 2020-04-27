package controller;

import java.io.IOException;
import java.sql.SQLException;
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
import model.Community;
import model.Documents;
import model.Listings;
import model.Property;
import model.ServiceOfficer;
import model.SoldTransactions;
import model.ValuationReport;
import model.ValuationReportForm;
import model.Weightage;
import service.ClientService;
import service.ListingsService;
import service.ServiceOfficerService;
import service.SoldTransactionService;
import service.ValuationService;
import service.WeightageService;


@Controller
public class ValuationController {
	
	@Autowired
	private ValuationService valuationService;
	
	@Autowired
	private WeightageService weightageService;
	
	@Autowired
	private SoldTransactionService soldTransactionService;
	
	@Autowired
	private ListingsService listingsService;
	
	
	static Logger log = Logger.getLogger(ValuationController.class);

	@RequestMapping(value = {"/addValuation" }, method = RequestMethod.GET)
	public ModelAndView valuationPage() {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("addvaluation");
		List<ClientDetails> clientlist = valuationService.getClients();
		List<Property> propertylist = valuationService.getPropertyValued();
		List<Community> communitylist = valuationService.getCommunity();
		List<Community> citylist = valuationService.getCity();
		List<Property> appreasonlist = valuationService.getApproachReasoningList();
		List<Property> valapproachlist = valuationService.getValuationApproachList();
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String email = authentication.getName();
		List<ServiceOfficer> serviceofficerlist = valuationService.getServiceOfficer(email);
		List<ServiceOfficer>  list= valuationService.getDefaultServicer(email);
		int row = valuationService.getNumberOfRows();
		List<SoldTransactions> cityylist=soldTransactionService.getCity();
		List<SoldTransactions> arealist=soldTransactionService.getArea();
		List<SoldTransactions> hoodlist=soldTransactionService.getNeighbourhood();
		List<SoldTransactions> bullist=soldTransactionService.getBuildings();
		List<SoldTransactions> devlist=soldTransactionService.getDevelopers();
		mv.addObject("cityylist",cityylist);
		mv.addObject("arealist",arealist);
		mv.addObject("hoodlist",hoodlist);
		mv.addObject("bullist",bullist);
		mv.addObject("citylist",citylist);
		mv.addObject("arealist",arealist);
		mv.addObject("hoodlist",hoodlist);
		mv.addObject("bullist",bullist);
		mv.addObject("devlist",devlist);
		mv.addObject("clientlist", clientlist);
		mv.addObject("citylist", citylist);
		mv.addObject("propertylist", propertylist);
		mv.addObject("appreasonlist", appreasonlist);
		mv.addObject("valapproachlist", valapproachlist);
		mv.addObject("communitylist", communitylist);
		mv.addObject("noofrows", row);
		mv.addObject("serviceofficerlist", serviceofficerlist);
		mv.addObject("dfservicer",list);
		return mv;
	}

	@RequestMapping(value = "/getValuationInstructingPerson", method = RequestMethod.POST)
	@ResponseBody
	public List<ClientDetails> getValuationInstructingPerson(@RequestParam("clientName") String clientName) {
		List<ClientDetails> list = valuationService.getValuationInstructingPerson(clientName);
		return list;

	}
	@RequestMapping(value = "/filtered-transaction-list", method = RequestMethod.POST)
	@ResponseBody
	public JSONObject getFilterTransacList(@RequestParam("city")String city,@RequestParam("area")String area,
			@RequestParam("neighbourhood")String neighbourhood,@RequestParam("buildingName")String buildingName,@RequestParam("landfrom")String landfrom,@RequestParam("buafrom")String buafrom,
			@RequestParam("buato")String buato,@RequestParam("landto")String landto,@RequestParam("bedfrom")String bedfrom,@RequestParam("bedto")String bedto,
			@RequestParam("pricefrom")String pricefrom,@RequestParam("priceto")String priceto,@RequestParam("pricesqtfrom")String pricesqtfrom,@RequestParam("pricesqtto")String pricesqtto,
			@RequestParam("datefrom")String datefrom,@RequestParam("dateto")String dateto,@RequestParam("propList")String propList) throws ParseException{
		List<SoldTransactions> list = soldTransactionService.getFilterList(city,area,neighbourhood,buildingName,bedfrom,bedto,landfrom,landto,buafrom,buato,pricefrom,priceto,pricesqtfrom,pricesqtto,datefrom,dateto,propList);
		JSONObject json = new JSONObject();
		if(list.size() > 0){
			String dateAvg = soldTransactionService.getDateAvg(list);
			String landAvg = soldTransactionService.getlandAvg(list);
			String priceAvg = soldTransactionService.getpriceAvg(list);
			String sizeAvg = soldTransactionService.getSizeAvg(list);
			String pricePerAvg = soldTransactionService.getpricePerAvg(list);
			String bedAvg = soldTransactionService.getBedAvg(list);
			json.put("list", list);
			json.put("dateAvg", dateAvg);
			json.put("landAvg", landAvg);
			json.put("priceAvg", priceAvg);
			json.put("sizeAvg", sizeAvg);
			json.put("bedAvg", bedAvg);
			json.put("pricePerAvg", pricePerAvg);
			json.put("empty","full");
			
		}
		else{
			json.put("empty","empty");
		}
		
		System.err.println(json);
		return json;

	}
	
	@RequestMapping(value = "/getValuationApproach", method = RequestMethod.POST)
	@ResponseBody
	public JSONObject getValuationApproach(@RequestParam("propertyValued") String propertyValued) {
		String valApproach = valuationService.getValuationApproach(propertyValued);
		String appReasoning = valuationService.getApproachReasoning(propertyValued);
		String maxAge = valuationService.getMaximumAge(propertyValued);
		String parkingPrice = valuationService.getParkingPrice(propertyValued);
		String poolPrice = valuationService.getPoolPrice(propertyValued);
		String landscapePrice = valuationService.getLandScapePrice(propertyValued);
		String whitegoodsPrice = valuationService.getWhiteGoodsPrice(propertyValued);
		String utiliesPrice = valuationService.getUtiliesPrice(propertyValued);
		JSONObject json = new JSONObject();
		json.put("valApproach", valApproach);
		json.put("appReasoning", appReasoning);
		json.put("maxAge", maxAge);
		json.put("parkingPrice", parkingPrice);
		json.put("poolPrice", poolPrice);
		json.put("landscapePrice", landscapePrice);
		json.put("whitegoodsPrice", whitegoodsPrice);
		json.put("utiliesPrice", utiliesPrice);
		return json;

	}
	@RequestMapping(value = "/filter-transac", method = RequestMethod.POST)
	@ResponseBody
	public JSONObject getFilterTransac(@RequestParam("city")String city,@RequestParam("area")String area,
			@RequestParam("neighbourhood")String neighbourhood,@RequestParam("buildingName")String buildingName,@RequestParam("landfrom")String landfrom,@RequestParam("buafrom")String buafrom,
			@RequestParam("buato")String buato,@RequestParam("landto")String landto,@RequestParam("bedfrom")String bedfrom,@RequestParam("bedto")String bedto,
			@RequestParam("pricefrom")String pricefrom,@RequestParam("priceto")String priceto,@RequestParam("pricesqtfrom")String pricesqtfrom,@RequestParam("pricesqtto")String pricesqtto,
			@RequestParam("datefrom")String datefrom,@RequestParam("dateto")String dateto,@RequestParam("propList")String propList) throws ParseException{
		
		ModelAndView mv = new ModelAndView();
		List<SoldTransactions> filterTransaction = soldTransactionService.getFilterList(city,area,neighbourhood,buildingName,bedfrom,bedto,landfrom,landto,buafrom,buato,pricefrom,priceto,pricesqtfrom,pricesqtto,datefrom,dateto,propList);
		List<Weightage> weightage = weightageService.getWeightage(city,propList);
		String locWeight = weightageService.getLocWeight(weightage);
		String viewWeight = weightageService.getViewWeight(weightage);
		String dateWeight = weightageService.getDateWeight(weightage);
		String quaWeight = weightageService.getQuaWeight(weightage);
		String floorWeight = weightageService.getFloorWeight(weightage);
		String landWeight = weightageService.getLandWeight(weightage);
		String buaWeight = weightageService.getBuaWeight(weightage);
		String expWeight = weightageService.getExpWeight(weightage);
		String plaWeight = weightageService.getPlaWeight(weightage);
		String staWeight = weightageService.getStaWeight(weightage);
		String bedWeight = weightageService.getBedWeight(weightage);
		String furWeight = weightageService.getFurWeight(weightage);
		String balWeight = weightageService.getBalWeight(weightage);
		String parkWeight = weightageService.getParkWeight(weightage);
		String poolWeight = weightageService.getPoolWeight(weightage);
		String landScapeWeight = weightageService.getLandScapeWeight(weightage);
		String whiteGoodsWeight = weightageService.getWhiteGoodsWeight(weightage);
		String utilitiesWeight = weightageService.getUtilitiesWeight(weightage);
		String tenWeight = weightageService.getTenureWeight(weightage);
		String ageWeight = weightageService.getAgeWeight(weightage);
		String devmargin = valuationService.getDevMargin(propList);
		String upgradeWeight = weightageService.getUpgradeWeight(weightage);
		String lessThan1Month = weightageService.getLessThan1Month(weightage);
		String lessThan2Month = weightageService.getLessThan2Month(weightage);
		String lessThan3Month = weightageService.getLessThan3Month(weightage);
		String lessThan4Month = weightageService.getLessThan4Month(weightage);
		String lessThan5Month = weightageService.getLessThan5Month(weightage);
		String lessThan6Month = weightageService.getLessThan6Month(weightage);
		String lessThan7Month = weightageService.getLessThan7Month(weightage);
		String lessThan8Month = weightageService.getLessThan8Month(weightage);
		String lessThan9Month = weightageService.getLessThan9Month(weightage);
		String lessThan10Month = weightageService.getLessThan10Month(weightage);
		String lessThan11Month = weightageService.getLessThan11Month(weightage);
		String lessThan12Month = weightageService.getLessThan12Month(weightage);
		String dateAvg = soldTransactionService.getDateAvg(filterTransaction);
		String landAvg = soldTransactionService.getlandAvg(filterTransaction);
		String priceAvg = soldTransactionService.getpriceAvg(filterTransaction);
		String sizeAvg = soldTransactionService.getSizeAvg(filterTransaction);
		String pricePerAvg = soldTransactionService.getpricePerAvg(filterTransaction);
		String bedAvg = soldTransactionService.getBedAvg(filterTransaction);
		JSONObject json = new JSONObject();
		json.put("lessThan1Month", lessThan1Month);
		json.put("lessThan2Month", lessThan2Month);
		json.put("lessThan3Month", lessThan3Month);
		json.put("lessThan4Month", lessThan4Month);
		json.put("lessThan5Month", lessThan5Month);
		json.put("lessThan6Month", lessThan6Month);
		json.put("lessThan7Month", lessThan7Month);
		json.put("lessThan8Month", lessThan8Month);
		json.put("lessThan9Month", lessThan9Month);
		json.put("lessThan10Month", lessThan10Month);
		json.put("lessThan11Month", lessThan11Month);
		json.put("lessThan12Month", lessThan12Month);
		json.put("expWeight", expWeight);
		json.put("plaWeight", plaWeight);
		json.put("staWeight", staWeight);
		json.put("bedWeight", bedWeight);
		json.put("locWeight", locWeight);
		json.put("viewWeight", viewWeight);
		json.put("quaWeight", quaWeight);
		json.put("dateWeight", dateWeight);
		json.put("floorWeight", floorWeight);
		json.put("landWeight", landWeight);
		json.put("buaWeight", buaWeight);
		json.put("balWeight", balWeight);
		json.put("upgradeWeight", upgradeWeight);
		json.put("furWeight", furWeight);
		json.put("parkWeight", parkWeight);
		json.put("poolWeight", poolWeight);
		json.put("landScapeWeight", landScapeWeight);
		json.put("whiteGoodsWeight", whiteGoodsWeight);
		json.put("utilitiesWeight", utilitiesWeight);
		json.put("devmargin", devmargin);
		json.put("tenWeight", tenWeight);
		json.put("ageWeight", ageWeight);
		json.put("dateAvg", dateAvg);
		json.put("landAvg", landAvg);
		json.put("priceAvg", priceAvg);
		json.put("sizeAvg", sizeAvg);
		json.put("bedAvg", bedAvg);
		json.put("pricePerAvg", pricePerAvg);
		return json;

	}
	@RequestMapping(value = "/listings-filter-transac", method = RequestMethod.POST)
	@ResponseBody
	public JSONObject getListingsFilterTransac(@RequestParam("city")String city,@RequestParam("area")String area,
			@RequestParam("neighbourhood")String neighbourhood,@RequestParam("buildingName")String buildingName,@RequestParam("landfrom")String landfrom,@RequestParam("buafrom")String buafrom,
			@RequestParam("buato")String buato,@RequestParam("landto")String landto,@RequestParam("bedfrom")String bedfrom,@RequestParam("bedto")String bedto,
			@RequestParam("pricefrom")String pricefrom,@RequestParam("priceto")String priceto,@RequestParam("pricesqtfrom")String pricesqtfrom,@RequestParam("pricesqtto")String pricesqtto,
			@RequestParam("datefrom")String datefrom,@RequestParam("dateto")String dateto,@RequestParam("propList")String propList) throws ParseException{
		
		ModelAndView mv = new ModelAndView();
		List<Listings> list = listingsService.getFilterList(city,area,neighbourhood,buildingName,bedfrom,bedto,landfrom,landto,buafrom,buato,pricefrom,priceto,pricesqtfrom,pricesqtto,datefrom,dateto,propList);
		List<Weightage> weightage = weightageService.getWeightage(city,propList);
		String locWeight = weightageService.getLocWeight(weightage);
		String viewWeight = weightageService.getViewWeight(weightage);
		String dateWeight = weightageService.getDateWeight(weightage);
		String quaWeight = weightageService.getQuaWeight(weightage);
		String floorWeight = weightageService.getFloorWeight(weightage);
		String landWeight = weightageService.getLandWeight(weightage);
		String buaWeight = weightageService.getBuaWeight(weightage);
		String expWeight = weightageService.getExpWeight(weightage);
		String plaWeight = weightageService.getPlaWeight(weightage);
		String staWeight = weightageService.getStaWeight(weightage);
		String bedWeight = weightageService.getBedWeight(weightage);
		String furWeight = weightageService.getFurWeight(weightage);
		String balWeight = weightageService.getBalWeight(weightage);
		String parkWeight = weightageService.getParkWeight(weightage);
		String poolWeight = weightageService.getPoolWeight(weightage);
		String landScapeWeight = weightageService.getLandScapeWeight(weightage);
		String whiteGoodsWeight = weightageService.getWhiteGoodsWeight(weightage);
		String utilitiesWeight = weightageService.getUtilitiesWeight(weightage);
		String tenWeight = weightageService.getTenureWeight(weightage);
		String ageWeight = weightageService.getAgeWeight(weightage);
		String devmargin = valuationService.getDevMargin(propList);
		String upgradeWeight = weightageService.getUpgradeWeight(weightage);
		String lessThan1Month = weightageService.getLessThan1Month(weightage);
		String lessThan2Month = weightageService.getLessThan2Month(weightage);
		String lessThan3Month = weightageService.getLessThan3Month(weightage);
		String lessThan4Month = weightageService.getLessThan4Month(weightage);
		String lessThan5Month = weightageService.getLessThan5Month(weightage);
		String lessThan6Month = weightageService.getLessThan6Month(weightage);
		String lessThan7Month = weightageService.getLessThan7Month(weightage);
		String lessThan8Month = weightageService.getLessThan8Month(weightage);
		String lessThan9Month = weightageService.getLessThan9Month(weightage);
		String lessThan10Month = weightageService.getLessThan10Month(weightage);
		String lessThan11Month = weightageService.getLessThan11Month(weightage);
		String lessThan12Month = weightageService.getLessThan12Month(weightage);
		String lilocAvg = listingsService.getLocationAvg(list);
		String liageAvg = listingsService.getAgeAvg(list);
		String litenAvg = listingsService.getTenureAvg(list);
		String liviewAvg = listingsService.getViewAvg(list);
		String listaAvg = listingsService.getStatusAvg(list);
		String liquaAvg = listingsService.getQualityAvg(list);
		String liupgAvg = listingsService.getUpgradeAvg(list);
		String lifurAvg = listingsService.getFurnishedAvg(list);
		String liparkAvg = listingsService.getParkAvg(list);
		String lipoolAvg = listingsService.getPoolAvg(list);
		String lilandscapeAvg = listingsService.getLandScapeAvg(list);
		String ligoodAvg = listingsService.getGoodAvg(list);
		String liutiAvg = listingsService.getUtilitiesAvg(list);
		String liexpAvg = listingsService.getExposureAvg(list);
		String liplaAvg = listingsService.getPlacementAvg(list);
		String lifloorAvg = listingsService.getFloorAvg(list);
		String libalAvg = listingsService.getBalconyAvg(list);
		String lidevAvg = listingsService.getDevmarginAvg(list);
		String lidateAvg = listingsService.getDateAvg(list);
		String lilandAvg = listingsService.getlandAvg(list);
		String lipriceAvg = listingsService.getpriceAvg(list);
		String lisizeAvg = listingsService.getSizeAvg(list);
		String lipricePerAvg = listingsService.getpricePerAvg(list);
		String libedAvg = listingsService.getBedAvg(list);
		JSONObject json = new JSONObject();
		json.put("lilessThan1Month", lessThan1Month);
		json.put("lilessThan2Month", lessThan2Month);
		json.put("lilessThan3Month", lessThan3Month);
		json.put("lilessThan4Month", lessThan4Month);
		json.put("lilessThan5Month", lessThan5Month);
		json.put("lilessThan6Month", lessThan6Month);
		json.put("lilessThan7Month", lessThan7Month);
		json.put("lilessThan8Month", lessThan8Month);
		json.put("lilessThan9Month", lessThan9Month);
		json.put("lilessThan10Month", lessThan10Month);
		json.put("lilessThan11Month", lessThan11Month);
		json.put("lilessThan12Month", lessThan12Month);
		json.put("liexpWeight", expWeight);
		json.put("liplaWeight", plaWeight);
		json.put("listaWeight", staWeight);
		json.put("libedWeight", bedWeight);
		json.put("lilocWeight", locWeight);
		json.put("liviewWeight", viewWeight);
		json.put("liquaWeight", quaWeight);
		json.put("lidateWeight", dateWeight);
		json.put("lifloorWeight", floorWeight);
		json.put("lilandWeight", landWeight);
		json.put("libuaWeight", buaWeight);
		json.put("libalWeight", balWeight);
		json.put("liupgradeWeight", upgradeWeight);
		json.put("lifurWeight", furWeight);
		json.put("liparkWeight", parkWeight);
		json.put("lipoolWeight", poolWeight);
		json.put("lilandScapeWeight", landScapeWeight);
		json.put("liwhiteGoodsWeight", whiteGoodsWeight);
		json.put("liutilitiesWeight", utilitiesWeight);
		json.put("lidevmargin", devmargin);
		json.put("litenWeight", tenWeight);
		json.put("liageWeight", ageWeight);
		json.put("lidateAvg", lidateAvg);
		json.put("lilandAvg", lilandAvg);
		json.put("lipriceAvg", lipriceAvg);
		json.put("lisizeAvg", lisizeAvg);
		json.put("libedAvg", libedAvg);
		json.put("lilocAvg", lilocAvg);
		json.put("liageAvg", liageAvg);
		json.put("litenAvg", litenAvg);
		json.put("liviewAvg", liviewAvg);
		json.put("listaAvg", listaAvg);
		json.put("liquaAvg", liquaAvg);
		json.put("liupgAvg", liupgAvg);
		json.put("lifurAvg", lifurAvg);
		json.put("liparkAvg", liparkAvg);
		json.put("lipoolAvg", lipoolAvg);
		json.put("libalAvg", libalAvg);
		json.put("lidevAvg", lidevAvg);
		json.put("lilandscapeAvg", lilandscapeAvg);
		json.put("ligoodAvg", ligoodAvg);
		json.put("liutiAvg", liutiAvg);
		json.put("liexpAvg", liexpAvg);
		json.put("liplaAvg", liplaAvg);
		json.put("lifloorAvg", lifloorAvg);
		json.put("lipricePerAvg", lipricePerAvg);
		return json;

	}
	@RequestMapping(value = {"/valuation-list" }, method = RequestMethod.GET)
	public ModelAndView serviceOfficerPage() {

		ModelAndView mv = new ModelAndView();
		List<ValuationReport> list=valuationService.getValuationList();
		mv.addObject("valuationlist",list);
		mv.setViewName("valuationlist");
		return mv;
	}

	@RequestMapping(value="/getValuation",method=RequestMethod.POST)
	public ModelAndView getValuation(@RequestParam("reportId")int reportId)
	{
		ValuationReport valuationreport=valuationService.getValuation(reportId);
		ModelAndView mv=new ModelAndView();
		mv.setViewName("editvaluation");
		List<ClientDetails> clientlist = valuationService.getClients();
		List<Property> propertylist = valuationService.getPropertyValued();
		List<Community> communitylist = valuationService.getCommunity();
		List<Community> citylist = valuationService.getCity();
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String email = authentication.getName();
		List<ServiceOfficer> serviceofficerlist = valuationService.getServiceOfficer(email);
		List<ServiceOfficer>  list= valuationService.getDefaultServicer(email);
		List<Property> appreasonlist = valuationService.getApproachReasoningList();
		List<Property> valapproachlist = valuationService.getValuationApproachList();
	//	List<Documents> documents = valuationService.getDocuments(reportId);
		mv.addObject("serviceofficerlist", serviceofficerlist);
		mv.addObject("clientlist", clientlist);
		mv.addObject("communitylist", communitylist);
		mv.addObject("citylist", citylist);
		mv.addObject("propertylist", propertylist);
		mv.addObject("appreasonlist", appreasonlist);
		mv.addObject("valapproachlist", valapproachlist);
		mv.addObject("valuationreport",valuationreport);
		mv.addObject("dfservicer",list);
	//	mv.addObject("documents", documents);
		return mv;
		
	}
	
//	@RequestMapping(value = "/getCity", method = RequestMethod.POST)
//	@ResponseBody
//	public String getCity(@RequestParam("community") String community) {
//		String city = valuationService.getCity(community);
//		return city;
//
//	}
	@RequestMapping(value = "/getEverything", method = RequestMethod.POST)
	@ResponseBody
	public JSONObject getEverything(@RequestParam("buildingName") String buildingName) {
			String community = valuationService.getCommunity(buildingName);
			String subcommunity = valuationService.getSubCommunity(buildingName);
			String city = valuationService.getCityy(buildingName);
			String developer = valuationService.getDeveloper(buildingName);
			JSONObject json = new JSONObject();
			json.put("city", city);
			json.put("developer", developer);
			json.put("subcommunity", subcommunity);
			json.put("community", community);
			return json;
	}
	
	@RequestMapping(value = "/saveValuation", method = RequestMethod.POST)
	public ModelAndView saveValuation(@ModelAttribute("valuationreportform") ValuationReportForm valuationreportform,HttpServletRequest request,HttpSession session)throws SQLException, Exception {
		valuationService.saveValuationReport(request,valuationreportform);
	    ModelAndView mv = new ModelAndView();
	    mv.setViewName("main");
		return mv;
	}
//	
//	@RequestMapping(value="/editValuation",method=RequestMethod.POST)
//	public ModelAndView editValuation(@ModelAttribute("valuationreportform")ValuationReportForm valuationreportform,HttpSession session) throws IllegalStateException, IOException {
//	
//		valuationService.editValuation(valuationreportform);
//		log.info("***");
//		 ModelAndView mv = new ModelAndView();
//		    mv.setViewName("main");
//			return mv;
//		
//	}
	@RequestMapping(value="/editValuationReport",method=RequestMethod.POST)
	public ModelAndView editValuation(@ModelAttribute("valuationreportform")ValuationReportForm  valuationreportform,HttpSession session) throws IllegalStateException, IOException {
	
		valuationService.editValuationReport(valuationreportform);
		log.info("**AAAAAACCCCCCCCCCCC*+"+valuationreportform.getValuationReport().getAcType());
		 ModelAndView mv = new ModelAndView();
		    mv.setViewName("main");
			return mv;
		
	}
	
}
