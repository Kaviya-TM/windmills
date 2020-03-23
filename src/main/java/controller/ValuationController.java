package controller;

import java.io.IOException;
import java.sql.SQLException;
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
import model.Property;
import model.ServiceOfficer;
import model.SoldTransactions;
import model.ValuationReport;
import model.ValuationReportForm;
import model.Weightage;
import service.ClientService;
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
		mv.addObject("cityylist",cityylist);
		mv.addObject("arealist",arealist);
		mv.addObject("hoodlist",hoodlist);
		mv.addObject("bullist",bullist);
		mv.addObject("citylist",citylist);
		mv.addObject("arealist",arealist);
		mv.addObject("hoodlist",hoodlist);
		mv.addObject("bullist",bullist);
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
	public List<SoldTransactions> getFilterTransacList(@RequestParam("city")String city,@RequestParam("area")String area,
			@RequestParam("neighbourhood")String neighbourhood,@RequestParam("buildingName")String buildingName){
		System.err.println("**"+neighbourhood);
		List<SoldTransactions> list = soldTransactionService.getFilter(city,area,neighbourhood,buildingName);
		return list;

	}
	
	@RequestMapping(value = "/getValuationApproach", method = RequestMethod.POST)
	@ResponseBody
	public JSONObject getValuationApproach(@RequestParam("propertyValued") String propertyValued) {
		String valApproach = valuationService.getValuationApproach(propertyValued);
		String appReasoning = valuationService.getApproachReasoning(propertyValued);
		JSONObject json = new JSONObject();
		json.put("valApproach", valApproach);
		json.put("appReasoning", appReasoning);
		return json;

	}
	@RequestMapping(value = "/filter-transac", method = RequestMethod.POST)
	@ResponseBody
	public JSONObject getFilterTransac(@RequestParam("city")String city,@RequestParam("area")String area,
			@RequestParam("neighbourhood")String neighbourhood,@RequestParam("buildingName")String buildingName, @RequestParam("propertyType")String propertyType){
		
		ModelAndView mv = new ModelAndView();
		List<SoldTransactions> filterTransaction=soldTransactionService.getFilter(city,area,neighbourhood,buildingName);
		List<Weightage> weightage = weightageService.getWeightage(city,propertyType);
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
		String dateAvg = soldTransactionService.getDateAvg(filterTransaction);
		String landAvg = soldTransactionService.getlandAvg(filterTransaction);
		String priceAvg = soldTransactionService.getpriceAvg(filterTransaction);
		String sizeAvg = soldTransactionService.getSizeAvg(filterTransaction);
		String pricePerAvg = soldTransactionService.getpricePerAvg(filterTransaction);
		String bedAvg = soldTransactionService.getBedAvg(filterTransaction);
		JSONObject json = new JSONObject();
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
		json.put("dateAvg", dateAvg);
		json.put("landAvg", landAvg);
		json.put("priceAvg", priceAvg);
		json.put("sizeAvg", sizeAvg);
		json.put("bedAvg", bedAvg);
		json.put("pricePerAvg", pricePerAvg);
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
		System.err.println("buildingName"+buildingName);
			String community = valuationService.getCommunity(buildingName);
			String subcommunity = valuationService.getSubCommunity(buildingName);
			String city = valuationService.getCityy(buildingName);
			JSONObject json = new JSONObject();
			json.put("city", city);
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
