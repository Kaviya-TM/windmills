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
import model.SoldTransactions;
import model.ValuationReport;
import service.ClientService;
import service.PropertyService;
import service.ServiceOfficerService;
import service.SoldTransactionService;


@Controller
public class SoldTransactionController {

	@Autowired
	private SoldTransactionService soldTransactionService;
	
	static Logger log = Logger.getLogger(SoldTransactionController.class);

	@RequestMapping(value = {"/sold-transactions" }, method = RequestMethod.GET)
	public ModelAndView soldTransactions() {
		ModelAndView mv = new ModelAndView();
		List<SoldTransactions> list=soldTransactionService.getSoldTransactions();
		mv.addObject("soldTransaction",list);
		mv.setViewName("soldTransaction");
		return mv;
	}
	@RequestMapping(value = {"/enquiry" }, method = RequestMethod.GET)
	public ModelAndView enquiry() {
		ModelAndView mv = new ModelAndView();
		List<SoldTransactions> citylist=soldTransactionService.getCity();
		List<SoldTransactions> arealist=soldTransactionService.getArea();
		List<SoldTransactions> hoodlist=soldTransactionService.getNeighbourhood();
		List<SoldTransactions> bullist=soldTransactionService.getBuildings();
		mv.addObject("citylist",citylist);
		mv.addObject("arealist",arealist);
		mv.addObject("hoodlist",hoodlist);
		mv.addObject("bullist",bullist);
		mv.setViewName("enquiry");
		return mv;
	}
	@RequestMapping(value="/filter-transactions",method=RequestMethod.POST)
	public ModelAndView filter(@RequestParam("city")String city,@RequestParam("area")String area,
			@RequestParam("neighbourhood")String neighbourhood,@RequestParam("buildingName")String buildingName){
		
		ModelAndView mv = new ModelAndView();
		List<SoldTransactions> filterTransaction=soldTransactionService.getFilter(city,area,neighbourhood,buildingName);
		String dateAvg = soldTransactionService.getDateAvg(filterTransaction);
		String priceAvg = soldTransactionService.getpriceAvg(filterTransaction);
		String sizeAvg = soldTransactionService.getSizeAvg(filterTransaction);
		String pricePerAvg = soldTransactionService.getpricePerAvg(filterTransaction);
		String bedAvg = soldTransactionService.getBedAvg(filterTransaction);
		mv.addObject("pricePerAvg",pricePerAvg);
		mv.addObject("sizeAvg",sizeAvg);
		mv.addObject("bedAvg",bedAvg);
		mv.addObject("priceAvg",priceAvg);
		mv.addObject("dateAvg",dateAvg);
		mv.addObject("filterTransaction",filterTransaction);
		mv.setViewName("filterTransaction");
		return mv;
	
	}
	
}
