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
import model.MasterValuation;
import model.Property;
import model.ServiceOfficer;
import model.SoldTransactions;
import model.ValuationReport;
import service.ClientService;
import service.MasterService;
import service.PropertyService;
import service.ServiceOfficerService;
import service.SoldTransactionService;


@Controller
public class MasterController {

	@Autowired
	private MasterService masterService;
	
	static Logger log = Logger.getLogger(MasterController.class);

	@RequestMapping(value = {"/previous-valuation-list" }, method = RequestMethod.GET)
	public ModelAndView soldTransactions() {
		ModelAndView mv = new ModelAndView();
		List<MasterValuation> list=masterService.getMasterList();
		mv.addObject("masterValuation",list);
		mv.setViewName("masterValuation");
		return mv;
	}
	
	@RequestMapping(value="/getMaster",method=RequestMethod.POST)
	public ModelAndView getMaster(@RequestParam("masterId")int masterId)
	{
		MasterValuation masters=masterService.getMaster(masterId);
		ModelAndView mv=new ModelAndView();
		mv.setViewName("masterseditform");
		mv.addObject("mastersform",masters);
		return mv;
	}
	
	@RequestMapping(value="/editMasters",method=RequestMethod.POST)
	public ModelAndView editMasters(@ModelAttribute("masters")MasterValuation masters,HttpSession session) throws IllegalStateException, IOException {
		masterService.updateMasters(masters);
		ModelAndView mv = new ModelAndView();
		List<MasterValuation> list=masterService.getMasterList();
		mv.addObject("masterValuation",list);
		mv.setViewName("masterValuation");
		return mv;
	}
	@RequestMapping(value = "/delete-masters")
	public ModelAndView deleteMasters(@RequestParam("masterId") int masterId, HttpServletRequest request) throws Exception {
		masterService.deleteMasters(masterId);
		ModelAndView mv = new ModelAndView();
		List<MasterValuation> list=masterService.getMasterList();
		mv.addObject("masterValuation",list);
		mv.setViewName("masterValuation");
		return mv;

	}
	@RequestMapping(value = "/getmEverything", method = RequestMethod.POST)
	@ResponseBody
	public JSONObject getEverything(@RequestParam("buildingName") String buildingName) {
			String community = masterService.getCommunity(buildingName);
			String subcommunity = masterService.getSubCommunity(buildingName);
			String city = masterService.getCityy(buildingName);
			JSONObject json = new JSONObject();
			json.put("city", city);
			json.put("subcommunity", subcommunity);
			json.put("community", community);
			return json;
	}
	@RequestMapping(value = "/masters-filtered-transaction", method = RequestMethod.POST)
	@ResponseBody
	public JSONObject getFilterTransacList(@RequestParam("city")String city,@RequestParam("area")String area,
			@RequestParam("neighbourhood")String neighbourhood,@RequestParam("buildingName")String buildingName,@RequestParam("landfrom")String landfrom,@RequestParam("buafrom")String buafrom,
			@RequestParam("buato")String buato,@RequestParam("landto")String landto,@RequestParam("bedfrom")String bedfrom,@RequestParam("bedto")String bedto,
			@RequestParam("pricefrom")String pricefrom,@RequestParam("priceto")String priceto,@RequestParam("pricesqtfrom")String pricesqtfrom,@RequestParam("pricesqtto")String pricesqtto,
			@RequestParam("datefrom")String datefrom,@RequestParam("dateto")String dateto,@RequestParam("propList")String propList) throws ParseException{
		List<MasterValuation> list = masterService.getFilterList(city,area,neighbourhood,buildingName,bedfrom,bedto,landfrom,landto,buafrom,buato,pricefrom,priceto,pricesqtfrom,pricesqtto,datefrom,dateto,propList);
		
		JSONObject json = new JSONObject();
		if(list.size() > 0){
			String dateAvg = masterService.getDateAvg(list);
			String locAvg =  masterService.getLocationAvg(list);
			String ageAvg = masterService.getAgeAvg(list);
			String viewAvg = masterService.getViewAvg(list);
			String staAvg = masterService.getStatusAvg(list);
			String expAvg = masterService.getExposureAvg(list);
			String plaAvg = masterService.getPlacementAvg(list);
			String floorAvg = masterService.getFloorAvg(list);
			String qualityAvg = masterService.getQualityAvg(list);
			String landAvg = masterService.getlandAvg(list);
			String priceAvg = masterService.getpriceAvg(list);
			String sizeAvg = masterService.getSizeAvg(list);
			String pricePerAvg = masterService.getpricePerAvg(list);
			String bedAvg = masterService.getBedAvg(list);
			String tenureAvg = masterService.getTenureAvg(list);
			int count = list.size();
			int lowprice = masterService.getLowPrice(list);
			int highprice = masterService.getHighPrice(list);
			int lowpricepersq = masterService.getLowPricePerSq(list);
			int highpricepersq = masterService.getHighPricePerSq(list);
			json.put("list", list);
			json.put("count", count);
			json.put("lowprice", lowprice);
			json.put("highprice", highprice);
			json.put("lowpricepersq", lowpricepersq);
			json.put("highpricepersq", highpricepersq);
			json.put("dateAvg", dateAvg);
			json.put("locAvg", locAvg);
			json.put("ageAvg", ageAvg);
			json.put("viewAvg", viewAvg);
			json.put("expAvg", expAvg);
			json.put("staAvg", staAvg);
			json.put("plaAvg", plaAvg);
			json.put("floorAvg", floorAvg);
			json.put("qualityAvg", qualityAvg);
			json.put("tenureAvg", tenureAvg);
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
		
		System.err.println("json"+json);
		return json;

	}
}
