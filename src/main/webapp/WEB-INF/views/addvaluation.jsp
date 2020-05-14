
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isELIgnored="false"%>
<title>Windmills | Valuation</title>
<link rel='shortcut icon' type='image/x-icon'
	href='resources/assets/img/favicon.ico' />
<link rel="stylesheet" href="resources/assets/css/valuationform.css">
<link rel="stylesheet"
	href="resources/assets/bundles/bootstrap-daterangepicker/daterangepicker.css">
	<link rel="stylesheet"
	href="resources/assets/bundles/pretty-checkbox/pretty-checkbox.min.css">
<link rel="stylesheet"
	href="resources/assets/bundles/bootstrap-timepicker/css/bootstrap-timepicker.min.css">
<link rel="stylesheet" href="resources/assets/css/soldtransaction.css">
<link
	href="resources/assets/bundles/vendor/datepicker/daterangepicker.css"
	rel="stylesheet" media="all">

<div class="valuationform">
	<%@include file="header.jsp"%>
	<%@include file="sidebar.jsp"%>
	<div class="main-content"
		style="background: rgb(229, 231, 233) !important;padding-left: 212px !important;padding-top: 10px !important; overflow: scroll; overflow-x: hidden; padding-right: 0px; margin-top: 70px; width: 100%; min-height: 530px !important">
		<div class="form-group">
			<button class="valbtn" id="receive" style="width: 4.6%;">Receive Valuation</button>
			<button class="valbtn" id="conflict" style="width: 3.4%;">Check COI</button>
			<button class="valbtn" id="documents" style="width: 4.1%;">Receive Doc</button>
			<button class="valbtn" id="schedule" style="width: 5.5%;">Schedule Inspection</button>
			<button class="valbtn" id="inspect1" style="width: 5%;">Inspect PropertyA</button>
			<button class="valbtn" id="inspect2" style="width: 5%;">Inspect PropertyB</button>
			<button class="valbtn" id="splAssumption" style="width: 5.8%;">Special Assumption</button>
			<button class="valbtn" id="extent" style="width: 6.2%;">Extent Of Investigation</button>
			<button class="valbtn" id="marketsum" style="width: 4.7%;">Market Summary</button>
			<button class="valbtn" id="senquiry" style="width: 4.8%;">SoldTrans Enquiry</button>
			<button class="valbtn" id="filter" style="width: 5%;">SoldTrans List</button>
			<button class="valbtn" id="average" style="width: 4.8%;">SoldTrans Calcs</button>
			<button class="valbtn" id="menquiry" style="width: 3.8%;">Master Enquiry</button>
			<button class="valbtn" id="mfilter" style="width: 3.5%;">Master List</button>
			<button class="valbtn" id="maverage" style="width: 3.5%;">Master Calcs</button>
 			<button class="valbtn" id="lenquiry" style="width: 4%;">Listings Enquiry</button>
			<button class="valbtn" id="lfilter" style="width: 3.7%;">Listing Trans</button>
			<button class="valbtn" id="laverage" style="width: 3.5%;">Listing Calcs</button>
			<button class="valbtn" id="vsummary">Valuation Summary</button>
			<button class="valbtn" id="submit">Finalize Valuation</button>
			<button class="valbtn" id="payment">Payment Section</button>
		</div>
		<form:form action="saveValuation" id="valuationform" enctype="multipart/form-data" modelAttribute="valuationreportform">
			<div class="errfilter">No Matching Found !!!</div>
			<div class="form-group lenquiry">
				<div class="valuationholder" style="width:25% !important">
					<label class="labelholder" style="width:40% !important">Date From<b style="color:red"> *</b></label>
					<div class="input-group textholder" style="width:55% !important">
						<div class="input-group-prepend">
							<div class="input-group-text">
								<i class="fas fa-calendar"></i>
							</div>
						</div>
						<input type="text" class="form-control form-control-sm datepicker"
							style="height: 27px !important;font-size: 12px !important; font-family: sans-serif;" name="" id="l-datefrom">
					</div>
				</div>
				<div class="valuationholder" style="width:25% !important">
					<label class="labelholder" style="width:40% !important">Date To<b style="color:red"> *</b></label>
					<div class="input-group textholder" style="width:55% !important">
						<div class="input-group-prepend">
							<div class="input-group-text">
								<i class="fas fa-calendar"></i>
							</div>
						</div>
						<input type="text" class="form-control form-control-sm datepicker"
							style="height: 27px !important;font-size: 12px !important; font-family: sans-serif;"  name="" id="l-dateto">
					</div>
				</div>
				<div class="valuationholder">
					<label class="labelholder" style="width:10% !important">Property Listing</label>
					<select class="form-control form-control-sm textholder" style="width:39% !important"
						name="valuationReport.propertyValued" id="l-propList">
						<c:forEach items="${propertylist}" var="item">
							<option value="${item.propertyValued}">${item.propertyValued}</option>
						</c:forEach>
					</select>
				</div>
				<div class="valuationholder">
					<label class="labelholder" style="width:10% !important">Building Name</label> 
					<select
							class="form-control form-control-sm textholder"  
							name="valuationReport.buildingName" id="l-buildingName" style="width:39% !important" >  
							<c:forEach items="${bullist}" var="item"> 
								<option value="" hidden>-- Select Building/Project Name ---</option> 
								<option value="${item}">${item}</option>
 							</c:forEach> 
					</select> 
				</div>
				<div class="valuationholder">
					<label class="labelholder" style="width:10% !important;line-height:16px">Sub-Community Name</label>
						<select
 							class="form-control form-control-sm textholder" 
 							name="" id="l-subcommunity" style="width:39% !important"> 
 							<c:forEach items="${hoodlist}" var="item">
 								<option value="" hidden>-- Select Sub Community ---</option>
							<option value="${item}">${item}</option> 
 							</c:forEach> 
 						</select>
				</div>	
				<div class="valuationholder">
					<label class="labelholder" style="width:10% !important">Community Name</label>
					<select
						class="form-control form-control-sm textholder"
						name="" id="l-community" style="width:39% !important">
							<c:forEach items="${arealist}" var="item"> 
								<option value="" hidden>-- Select Community/Area---</option>
								<option value="${item}">${item}</option>
 							</c:forEach>
					</select>
				</div>
				<div class="valuationholder">
					<label class="labelholder" style="width:10% !important">City</label> 
					<select
						class="form-control form-control-sm textholder"
						name="" id="l-city" style="width:39% !important">
						<c:forEach items="${citylist}" var="item">
							<option value="${item}">${item}</option>
						</c:forEach>
					</select>
				</div>
				<div class="valuationholder" style="width:25% !important">
					<label class="labelholder" style="width:40% !important">Bedroom From</label> <select
						class="form-control form-control-sm textholder"
						name="" id="l-bedfrom" style="width:55% !important">
						<option value="" hidden>-- Select--</option>
						<option value="1-Bedroom">1-Bedroom	</option>
						<option value="2-Bedroom">2-Bedroom</option>
						<option value="3-Bedroom">3-Bedroom</option>
						<option value="4-Bedroom">4-Bedroom</option>
						<option value="5-Bedroom">5-Bedroom</option>
						<option value="6-Bedroom">6-Bedroom</option>
						<option value="7-Bedroom">7-Bedroom	</option>
						<option value="8-Bedroom">8-Bedroom</option>
						<option value="9-Bedroom">9-Bedroom</option>
						<option value="10-Bedroom">10-Bedroom</option>
					</select>
				</div>
				<div class="valuationholder" style="width:25% !important">
					<label class="labelholder" style="width:40% !important">Bedroom To</label> <select
						class="form-control form-control-sm textholder" style="width:55% !important"
						name="" id="l-bedto">
						<option value="" hidden>-- Select--</option>
						<option value="1-Bedroom">1-Bedroom	</option>
						<option value="2-Bedroom">2-Bedroom</option>
						<option value="3-Bedroom">3-Bedroom</option>
						<option value="4-Bedroom">4-Bedroom</option>
						<option value="5-Bedroom">5-Bedroom</option>
						<option value="6-Bedroom">6-Bedroom</option>
						<option value="7-Bedroom">7-Bedroom	</option>
						<option value="8-Bedroom">8-Bedroom</option>
						<option value="9-Bedroom">9-Bedroom</option>
						<option value="10-Bedroom">10-Bedroom</option>
					</select>
				</div>
				<div class="valuationholder" style="width:100% !important">
					<div class="valuationholder landto" style="width:25% !important">
						<label class="labelholder" style="width:40% !important">LandSize From</label>
						<select class="form-control form-control-sm textholder" style="width:55% !important"
						name="" id="l-landfrom">
							<option value="" hidden>-- Select--</option>
							<option value="0">0</option>
							<option value="500">500</option>
							<option value="1000">1000</option>
							<option value="1500">1500</option>
							<option value="2000">2000</option>
							<option value="2500">2500</option>
							<option value="3000">3000</option>
							<option value="3500">3500</option>
							<option value="4000">4000</option>
							<option value="4500">4500</option>
							<option value="5000">5000</option>
							<option value="5500">5500</option>
							<option value="6000">6000</option>
							<option value="6500">6500</option>
							<option value="7000">7000</option>
							<option value="7500">7500</option>
							<option value="8000">8000</option>
							<option value="8500">8500</option>
							<option value="9000">9000</option>
							<option value="9500">9500</option>
							<option value="10000">10000</option>
						</select>
					</div>
					<div class="valuationholder landto" style="width:25% !important">
						<label class="labelholder" style="width:40% !important">LandSize To</label>
						<select class="form-control form-control-sm textholder" style="width:55% !important"
						name="" id="l-landto">
							<option value="" hidden>-- Select--</option>
							<option value="0">0</option>
							<option value="500">500</option>
							<option value="1000">1000</option>
							<option value="1500">1500</option>
							<option value="2000">2000</option>
							<option value="2500">2500</option>
							<option value="3000">3000</option>
							<option value="3500">3500</option>
							<option value="4000">4000</option>
							<option value="4500">4500</option>
							<option value="5000">5000</option>
							<option value="5500">5500</option>
							<option value="6000">6000</option>
							<option value="6500">6500</option>
							<option value="7000">7000</option>
							<option value="7500">7500</option>
							<option value="8000">8000</option>
							<option value="8500">8500</option>
							<option value="9000">9000</option>
							<option value="9500">9500</option>
							<option value="10000">10000</option>
						</select>
					</div>
				</div>
				<div class="valuationholder" style="width:25% !important">
					<label class="labelholder" style="width:40% !important">BUA From</label>
					 <select class="form-control form-control-sm textholder" style="width:55% !important"
						name="" id="l-buafrom">
							<option value="" hidden>-- Select--</option>
							<option value="0">0</option>
							<option value="500">500</option>
							<option value="1000">1000</option>
							<option value="1500">1500</option>
							<option value="2000">2000</option>
							<option value="2500">2500</option>
							<option value="3000">3000</option>
							<option value="3500">3500</option>
							<option value="4000">4000</option>
							<option value="4500">4500</option>
							<option value="5000">5000</option>
							<option value="5500">5500</option>
							<option value="6000">6000</option>
							<option value="6500">6500</option>
							<option value="7000">7000</option>
							<option value="7500">7500</option>
							<option value="8000">8000</option>
							<option value="8500">8500</option>
							<option value="9000">9000</option>
							<option value="9500">9500</option>
							<option value="10000">10000</option>
						</select>
				</div>
				<div class="valuationholder" style="width:25% !important">
					<label class="labelholder" style="width:40% !important">BUA To</label>
					<select class="form-control form-control-sm textholder" style="width:55% !important"
						name="" id="l-buato">
							<option value="" hidden>-- Select--</option>
							<option value="0">0</option>
							<option value="500">500</option>
							<option value="1000">1000</option>
							<option value="1500">1500</option>
							<option value="2000">2000</option>
							<option value="2500">2500</option>
							<option value="3000">3000</option>
							<option value="3500">3500</option>
							<option value="4000">4000</option>
							<option value="4500">4500</option>
							<option value="5000">5000</option>
							<option value="5500">5500</option>
							<option value="6000">6000</option>
							<option value="6500">6500</option>
							<option value="7000">7000</option>
							<option value="7500">7500</option>
							<option value="8000">8000</option>
							<option value="8500">8500</option>
							<option value="9000">9000</option>
							<option value="9500">9500</option>
							<option value="10000">10000</option>
						</select>
				</div>
				<div class="valuationholder" style="width:100% !important">
					<div class="valuationholder" style="width:25% !important">
						<label class="labelholder" style="width:40% !important">Price From</label>
						<select class="form-control form-control-sm textholder" style="width:55% !important"
						name="" id="l-pricefrom">
							<option value="" hidden>-- Select--</option>
							<option value="0">0</option>
							<option value="500000">500000</option>
							<option value="1000000">1000000</option>
							<option value="1500000">1500000</option>
							<option value="2000000">2000000</option>
							<option value="2500000">2500000</option>
							<option value="3000000">3000000</option>
							<option value="3500000">3500000</option>
							<option value="4000000">4000000</option>
							<option value="4500000">4500000</option>
							<option value="5000000">5000000</option>
							<option value="5500000">5500000</option>
							<option value="6000000">6000000</option>
							<option value="6500000">6500000</option>
							<option value="7000000">7000000</option>
							<option value="7500000">7500000</option>
							<option value="8000000">8000000</option>
							<option value="8500000">8500000</option>
							<option value="9000000">9000000</option>
							<option value="9500000">9500000</option>
							<option value="10000000">10000000</option>
						</select>
					</div>
					<div class="valuationholder" style="width:25% !important">
						<label class="labelholder" style="width:40% !important">Price To</label>
						<select class="form-control form-control-sm textholder" style="width:55% !important"
						name="" id="l-priceto">
							<option value="" hidden>-- Select--</option>
							<option value="0">0</option>
							<option value="500000">500000</option>
							<option value="1000000">1000000</option>
							<option value="1500000">1500000</option>
							<option value="2000000">2000000</option>
							<option value="2500000">2500000</option>
							<option value="3000000">3000000</option>
							<option value="3500000">3500000</option>
							<option value="4000000">4000000</option>
							<option value="4500000">4500000</option>
							<option value="5000000">5000000</option>
							<option value="5500000">5500000</option>
							<option value="6000000">6000000</option>
							<option value="6500000">6500000</option>
							<option value="7000000">7000000</option>
							<option value="7500000">7500000</option>
							<option value="8000000">8000000</option>
							<option value="8500000">8500000</option>
							<option value="9000000">9000000</option>
							<option value="9500000">9500000</option>
							<option value="10000000">10000000</option>
						</select>
					</div>
				</div>
				<div class="valuationholder" style="width:100% !important">
					<div class="valuationholder" style="width:25% !important">
						<label class="labelholder" style="width:40% !important">Price/Sqt From</label>
						<select class="form-control form-control-sm textholder" style="width:55% !important"
						name="" id="l-pricesqtfrom">
							<option value="" hidden>-- Select--</option>
							<option value="0">0</option>
							<option value="100">100</option>
							<option value="200">200</option>
							<option value="300">300</option>
							<option value="400">400</option>
							<option value="500">500</option>
							<option value="600">600</option>
							<option value="700">700</option>
							<option value="800">800</option>
							<option value="900">900</option>
							<option value="1000">1000</option>
							<option value="1100">1100</option>
							<option value="1200">1200</option>
							<option value="1300">1300</option>
							<option value="1400">1400</option>
							<option value="1500">1500</option>
							<option value="1600">1600</option>
							<option value="1700">1700</option>
							<option value="1800">1800</option>
							<option value="1900">1900</option>
							<option value="2000">2000</option>
						</select>
					</div>
					<div class="valuationholder" style="width:25% !important">
						<label class="labelholder" style="width:40% !important">Price/Sqt To</label>
						<select class="form-control form-control-sm textholder" style="width:55% !important"
						name="" id="l-pricesqtto">
							<option value="" hidden>-- Select--</option>
							<option value="0">0</option>
							<option value="100">100</option>
							<option value="200">200</option>
							<option value="300">300</option>
							<option value="400">400</option>
							<option value="500">500</option>
							<option value="600">600</option>
							<option value="700">700</option>
							<option value="800">800</option>
							<option value="900">900</option>
							<option value="1000">1000</option>
							<option value="1100">1100</option>
							<option value="1200">1200</option>
							<option value="1300">1300</option>
							<option value="1400">1400</option>
							<option value="1500">1500</option>
							<option value="1600">1600</option>
							<option value="1700">1700</option>
							<option value="1800">1800</option>
							<option value="1900">1900</option>
							<option value="2000">2000</option>
						</select>
					</div>
				</div>
				
				
				<div class="valuationholder" style="margin-top: 20px">
					<div class="savebtn" id="listingfilter">Filter</div>
				</div>
			</div>
			<div class="form-group menquiry">
				<div class="valuationholder" style="width:25% !important">
					<label class="labelholder" style="width:40% !important">Date From<b style="color:red"> *</b></label>
					<div class="input-group textholder" style="width:55% !important">
						<div class="input-group-prepend">
							<div class="input-group-text">
								<i class="fas fa-calendar"></i>
							</div>
						</div>
						<input type="text" class="form-control form-control-sm datepicker"
							style="height: 27px !important;font-size: 12px !important; font-family: sans-serif;" name="" id="m-datefrom">
					</div>
				</div>
				<div class="valuationholder" style="width:25% !important">
					<label class="labelholder" style="width:40% !important">Date To<b style="color:red"> *</b></label>
					<div class="input-group textholder" style="width:55% !important">
						<div class="input-group-prepend">
							<div class="input-group-text">
								<i class="fas fa-calendar"></i>
							</div>
						</div>
						<input type="text" class="form-control form-control-sm datepicker"
							style="height: 27px !important;font-size: 12px !important; font-family: sans-serif;"  name="" id="m-dateto">
					</div>
				</div>
				<div class="valuationholder">
					<label class="labelholder" style="width:10% !important">Property Listing</label>
					<select class="form-control form-control-sm textholder" style="width:39% !important"
						name="valuationReport.propertyValued" id="m-propList">
						<c:forEach items="${propertylist}" var="item">
							<option value="${item.propertyValued}">${item.propertyValued}</option>
						</c:forEach>
					</select>
				</div>
				<div class="valuationholder">
					<label class="labelholder" style="width:10% !important">Building Name</label> 
					<select
							class="form-control form-control-sm textholder"  
							name="valuationReport.buildingName" id="m-buildingName" style="width:39% !important" >  
							<c:forEach items="${mbullist}" var="item"> 
								<option value="" hidden>-- Select Building/Project Name ---</option> 
								<option value="${item}">${item}</option>
 							</c:forEach> 
					</select> 
				</div>
				<div class="valuationholder">
					<label class="labelholder" style="width:10% !important;line-height:16px">Sub-Community Name</label>
						<select
 							class="form-control form-control-sm textholder" 
 							name="" id="m-subcommunity" style="width:39% !important"> 
 							<c:forEach items="${msublist}" var="item">
 								<option value="" hidden>-- Select Sub Community ---</option>
							<option value="${item}">${item}</option> 
 							</c:forEach> 
 						</select>
				</div>	
				<div class="valuationholder">
					<label class="labelholder" style="width:10% !important">Community Name</label>
					<select
						class="form-control form-control-sm textholder"
						name="" id="m-community" style="width:39% !important">
							<c:forEach items="${mcomlist}" var="item"> 
								<option value="" hidden>-- Select Community/Area---</option>
								<option value="${item}">${item}</option>
 							</c:forEach>
					</select>
				</div>
				<div class="valuationholder">
					<label class="labelholder" style="width:10% !important">City</label> 
					<select
						class="form-control form-control-sm textholder"
						name="" id="m-city" style="width:39% !important">
						<c:forEach items="${mcitylist}" var="item">
							<option value="${item}">${item}</option>
						</c:forEach>
					</select>
				</div>
				<div class="valuationholder" style="width:25% !important">
					<label class="labelholder" style="width:40% !important">Bedroom From</label> <select
						class="form-control form-control-sm textholder"
						name="" id="m-bedfrom" style="width:55% !important">
						<option value="" hidden>-- Select--</option>
						<option value="1-Bedroom">1-Bedroom	</option>
						<option value="2-Bedroom">2-Bedroom</option>
						<option value="3-Bedroom">3-Bedroom</option>
						<option value="4-Bedroom">4-Bedroom</option>
						<option value="5-Bedroom">5-Bedroom</option>
						<option value="6-Bedroom">6-Bedroom</option>
						<option value="7-Bedroom">7-Bedroom	</option>
						<option value="8-Bedroom">8-Bedroom</option>
						<option value="9-Bedroom">9-Bedroom</option>
						<option value="10-Bedroom">10-Bedroom</option>
					</select>
				</div>
				<div class="valuationholder" style="width:25% !important">
					<label class="labelholder" style="width:40% !important">Bedroom To</label> <select
						class="form-control form-control-sm textholder" style="width:55% !important"
						name="" id="m-bedto">
						<option value="" hidden>-- Select--</option>
						<option value="1-Bedroom">1-Bedroom	</option>
						<option value="2-Bedroom">2-Bedroom</option>
						<option value="3-Bedroom">3-Bedroom</option>
						<option value="4-Bedroom">4-Bedroom</option>
						<option value="5-Bedroom">5-Bedroom</option>
						<option value="6-Bedroom">6-Bedroom</option>
						<option value="7-Bedroom">7-Bedroom	</option>
						<option value="8-Bedroom">8-Bedroom</option>
						<option value="9-Bedroom">9-Bedroom</option>
						<option value="10-Bedroom">10-Bedroom</option>
					</select>
				</div>
				<div class="valuationholder" style="width:100% !important">
					<div class="valuationholder landto" style="width:25% !important">
						<label class="labelholder" style="width:40% !important">LandSize From</label>
						<select class="form-control form-control-sm textholder" style="width:55% !important"
						name="" id="m-landfrom">
							<option value="" hidden>-- Select--</option>
							<option value="0">0</option>
							<option value="500">500</option>
							<option value="1000">1000</option>
							<option value="1500">1500</option>
							<option value="2000">2000</option>
							<option value="2500">2500</option>
							<option value="3000">3000</option>
							<option value="3500">3500</option>
							<option value="4000">4000</option>
							<option value="4500">4500</option>
							<option value="5000">5000</option>
							<option value="5500">5500</option>
							<option value="6000">6000</option>
							<option value="6500">6500</option>
							<option value="7000">7000</option>
							<option value="7500">7500</option>
							<option value="8000">8000</option>
							<option value="8500">8500</option>
							<option value="9000">9000</option>
							<option value="9500">9500</option>
							<option value="10000">10000</option>
						</select>
					</div>
					<div class="valuationholder landto" style="width:25% !important">
						<label class="labelholder" style="width:40% !important">LandSize To</label>
						<select class="form-control form-control-sm textholder" style="width:55% !important"
						name="" id="m-landto">
							<option value="" hidden>-- Select--</option>
							<option value="0">0</option>
							<option value="500">500</option>
							<option value="1000">1000</option>
							<option value="1500">1500</option>
							<option value="2000">2000</option>
							<option value="2500">2500</option>
							<option value="3000">3000</option>
							<option value="3500">3500</option>
							<option value="4000">4000</option>
							<option value="4500">4500</option>
							<option value="5000">5000</option>
							<option value="5500">5500</option>
							<option value="6000">6000</option>
							<option value="6500">6500</option>
							<option value="7000">7000</option>
							<option value="7500">7500</option>
							<option value="8000">8000</option>
							<option value="8500">8500</option>
							<option value="9000">9000</option>
							<option value="9500">9500</option>
							<option value="10000">10000</option>
						</select>
					</div>
				</div>
				<div class="valuationholder" style="width:25% !important">
					<label class="labelholder" style="width:40% !important">BUA From</label>
					 <select class="form-control form-control-sm textholder" style="width:55% !important"
						name="" id="m-buafrom">
							<option value="" hidden>-- Select--</option>
							<option value="0">0</option>
							<option value="500">500</option>
							<option value="1000">1000</option>
							<option value="1500">1500</option>
							<option value="2000">2000</option>
							<option value="2500">2500</option>
							<option value="3000">3000</option>
							<option value="3500">3500</option>
							<option value="4000">4000</option>
							<option value="4500">4500</option>
							<option value="5000">5000</option>
							<option value="5500">5500</option>
							<option value="6000">6000</option>
							<option value="6500">6500</option>
							<option value="7000">7000</option>
							<option value="7500">7500</option>
							<option value="8000">8000</option>
							<option value="8500">8500</option>
							<option value="9000">9000</option>
							<option value="9500">9500</option>
							<option value="10000">10000</option>
						</select>
				</div>
				<div class="valuationholder" style="width:25% !important">
					<label class="labelholder" style="width:40% !important">BUA To</label>
					<select class="form-control form-control-sm textholder" style="width:55% !important"
						name="" id="m-buato">
							<option value="" hidden>-- Select--</option>
							<option value="0">0</option>
							<option value="500">500</option>
							<option value="1000">1000</option>
							<option value="1500">1500</option>
							<option value="2000">2000</option>
							<option value="2500">2500</option>
							<option value="3000">3000</option>
							<option value="3500">3500</option>
							<option value="4000">4000</option>
							<option value="4500">4500</option>
							<option value="5000">5000</option>
							<option value="5500">5500</option>
							<option value="6000">6000</option>
							<option value="6500">6500</option>
							<option value="7000">7000</option>
							<option value="7500">7500</option>
							<option value="8000">8000</option>
							<option value="8500">8500</option>
							<option value="9000">9000</option>
							<option value="9500">9500</option>
							<option value="10000">10000</option>
						</select>
				</div>
				<div class="valuationholder" style="width:100% !important">
					<div class="valuationholder" style="width:25% !important">
						<label class="labelholder" style="width:40% !important">Price From</label>
						<select class="form-control form-control-sm textholder" style="width:55% !important"
						name="" id="m-pricefrom">
							<option value="" hidden>-- Select--</option>
							<option value="0">0</option>
							<option value="500000">500000</option>
							<option value="1000000">1000000</option>
							<option value="1500000">1500000</option>
							<option value="2000000">2000000</option>
							<option value="2500000">2500000</option>
							<option value="3000000">3000000</option>
							<option value="3500000">3500000</option>
							<option value="4000000">4000000</option>
							<option value="4500000">4500000</option>
							<option value="5000000">5000000</option>
							<option value="5500000">5500000</option>
							<option value="6000000">6000000</option>
							<option value="6500000">6500000</option>
							<option value="7000000">7000000</option>
							<option value="7500000">7500000</option>
							<option value="8000000">8000000</option>
							<option value="8500000">8500000</option>
							<option value="9000000">9000000</option>
							<option value="9500000">9500000</option>
							<option value="10000000">10000000</option>
						</select>
					</div>
					<div class="valuationholder" style="width:25% !important">
						<label class="labelholder" style="width:40% !important">Price To</label>
						<select class="form-control form-control-sm textholder" style="width:55% !important"
						name="" id="m-priceto">
							<option value="" hidden>-- Select--</option>
							<option value="0">0</option>
							<option value="500000">500000</option>
							<option value="1000000">1000000</option>
							<option value="1500000">1500000</option>
							<option value="2000000">2000000</option>
							<option value="2500000">2500000</option>
							<option value="3000000">3000000</option>
							<option value="3500000">3500000</option>
							<option value="4000000">4000000</option>
							<option value="4500000">4500000</option>
							<option value="5000000">5000000</option>
							<option value="5500000">5500000</option>
							<option value="6000000">6000000</option>
							<option value="6500000">6500000</option>
							<option value="7000000">7000000</option>
							<option value="7500000">7500000</option>
							<option value="8000000">8000000</option>
							<option value="8500000">8500000</option>
							<option value="9000000">9000000</option>
							<option value="9500000">9500000</option>
							<option value="10000000">10000000</option>
						</select>
					</div>
				</div>
				<div class="valuationholder" style="width:100% !important">
					<div class="valuationholder" style="width:25% !important">
						<label class="labelholder" style="width:40% !important">Price/Sqt From</label>
						<select class="form-control form-control-sm textholder" style="width:55% !important"
						name="" id="m-pricesqtfrom">
							<option value="" hidden>-- Select--</option>
							<option value="0">0</option>
							<option value="100">100</option>
							<option value="200">200</option>
							<option value="300">300</option>
							<option value="400">400</option>
							<option value="500">500</option>
							<option value="600">600</option>
							<option value="700">700</option>
							<option value="800">800</option>
							<option value="900">900</option>
							<option value="1000">1000</option>
							<option value="1100">1100</option>
							<option value="1200">1200</option>
							<option value="1300">1300</option>
							<option value="1400">1400</option>
							<option value="1500">1500</option>
							<option value="1600">1600</option>
							<option value="1700">1700</option>
							<option value="1800">1800</option>
							<option value="1900">1900</option>
							<option value="2000">2000</option>
						</select>
					</div>
					<div class="valuationholder" style="width:25% !important">
						<label class="labelholder" style="width:40% !important">Price/Sqt To</label>
						<select class="form-control form-control-sm textholder" style="width:55% !important"
						name="" id="m-pricesqtto">
							<option value="" hidden>-- Select--</option>
							<option value="0">0</option>
							<option value="100">100</option>
							<option value="200">200</option>
							<option value="300">300</option>
							<option value="400">400</option>
							<option value="500">500</option>
							<option value="600">600</option>
							<option value="700">700</option>
							<option value="800">800</option>
							<option value="900">900</option>
							<option value="1000">1000</option>
							<option value="1100">1100</option>
							<option value="1200">1200</option>
							<option value="1300">1300</option>
							<option value="1400">1400</option>
							<option value="1500">1500</option>
							<option value="1600">1600</option>
							<option value="1700">1700</option>
							<option value="1800">1800</option>
							<option value="1900">1900</option>
							<option value="2000">2000</option>
						</select>
					</div>
				</div>
				
				
				<div class="valuationholder" style="margin-top: 20px">
					<div class="savebtn" id="masterfilter">Filter</div>
				</div>
			</div>
			<div class="form-group senquiry">
				<div class="valuationholder" style="width:25% !important">
					<label class="labelholder" style="width:40% !important">Date From<b style="color:red"> *</b></label>
					<div class="input-group textholder" style="width:55% !important">
						<div class="input-group-prepend">
							<div class="input-group-text">
								<i class="fas fa-calendar"></i>
							</div>
						</div>
						<input type="text" class="form-control form-control-sm datepicker"
							style="height: 27px !important;font-size: 12px !important; font-family: sans-serif;" name="" id="datefrom">
					</div>
				</div>
				<div class="valuationholder" style="width:25% !important">
					<label class="labelholder" style="width:40% !important">Date To<b style="color:red"> *</b></label>
					<div class="input-group textholder" style="width:55% !important">
						<div class="input-group-prepend">
							<div class="input-group-text">
								<i class="fas fa-calendar"></i>
							</div>
						</div>
						<input type="text" class="form-control form-control-sm datepicker"
							style="height: 27px !important;font-size: 12px !important; font-family: sans-serif;"  name="" id="dateto">
					</div>
				</div>
				<div class="valuationholder">
					<label class="labelholder" style="width:10% !important">Property Listing</label>
					<select class="form-control form-control-sm textholder" style="width:39% !important"
						name="valuationReport.propertyValued" id="s-propList">
						<c:forEach items="${propertylist}" var="item">
							<option value="${item.propertyValued}">${item.propertyValued}</option>
						</c:forEach>
					</select>
				</div>
				<div class="valuationholder">
					<label class="labelholder" style="width:10% !important">Building Name</label> 
					<select
							class="form-control form-control-sm textholder"  
							name="valuationReport.buildingName" id="s-buildingName" style="width:39% !important" >  
							<c:forEach items="${bullist}" var="item"> 
								<option value="" hidden>-- Select Building/Project Name ---</option> 
								<option value="${item}">${item}</option>
 							</c:forEach> 
					</select> 
				</div>
				<div class="valuationholder">
					<label class="labelholder" style="width:10% !important;line-height:16px">Sub-Community Name</label>
						<select
 							class="form-control form-control-sm textholder" 
 							name="" id="s-subcommunity" style="width:39% !important"> 
 							<c:forEach items="${hoodlist}" var="item">
 								<option value="" hidden>-- Select Sub Community ---</option>
							<option value="${item}">${item}</option> 
 							</c:forEach> 
 						</select>
				</div>	
				<div class="valuationholder">
					<label class="labelholder" style="width:10% !important">Community Name</label>
					<select
						class="form-control form-control-sm textholder"
						name="" id="s-community" style="width:39% !important">
							<c:forEach items="${arealist}" var="item"> 
								<option value="" hidden>-- Select Community/Area---</option>
								<option value="${item}">${item}</option>
 							</c:forEach>
					</select>
				</div>
				<div class="valuationholder">
					<label class="labelholder" style="width:10% !important">City</label> 
					<select
						class="form-control form-control-sm textholder"
						name="" id="s-city" style="width:39% !important">
						<c:forEach items="${citylist}" var="item">
							<option value="${item}">${item}</option>
						</c:forEach>
					</select>
				</div>
				<div class="valuationholder" style="width:25% !important">
					<label class="labelholder" style="width:40% !important">Bedroom From</label> <select
						class="form-control form-control-sm textholder"
						name="" id="bedfrom" style="width:55% !important">
						<option value="" hidden>-- Select--</option>
						<option value="1-Bedroom">1-Bedroom	</option>
						<option value="2-Bedroom">2-Bedroom</option>
						<option value="3-Bedroom">3-Bedroom</option>
						<option value="4-Bedroom">4-Bedroom</option>
						<option value="5-Bedroom">5-Bedroom</option>
						<option value="6-Bedroom">6-Bedroom</option>
						<option value="7-Bedroom">7-Bedroom	</option>
						<option value="8-Bedroom">8-Bedroom</option>
						<option value="9-Bedroom">9-Bedroom</option>
						<option value="10-Bedroom">10-Bedroom</option>
					</select>
				</div>
				<div class="valuationholder" style="width:25% !important">
					<label class="labelholder" style="width:40% !important">Bedroom To</label> <select
						class="form-control form-control-sm textholder" style="width:55% !important"
						name="" id="bedto">
						<option value="" hidden>-- Select--</option>
						<option value="1-Bedroom">1-Bedroom	</option>
						<option value="2-Bedroom">2-Bedroom</option>
						<option value="3-Bedroom">3-Bedroom</option>
						<option value="4-Bedroom">4-Bedroom</option>
						<option value="5-Bedroom">5-Bedroom</option>
						<option value="6-Bedroom">6-Bedroom</option>
						<option value="7-Bedroom">7-Bedroom	</option>
						<option value="8-Bedroom">8-Bedroom</option>
						<option value="9-Bedroom">9-Bedroom</option>
						<option value="10-Bedroom">10-Bedroom</option>
					</select>
				</div>
				<div class="valuationholder" style="width:100% !important">
					<div class="valuationholder" style="width:25% !important">
						<label class="labelholder" style="width:40% !important">LandSize From</label>
						<select class="form-control form-control-sm textholder" style="width:55% !important"
						name="" id="landfrom">
							<option value="" hidden>-- Select--</option>
							<option value="0">0</option>
							<option value="500">500</option>
							<option value="1000">1000</option>
							<option value="1500">1500</option>
							<option value="2000">2000</option>
							<option value="2500">2500</option>
							<option value="3000">3000</option>
							<option value="3500">3500</option>
							<option value="4000">4000</option>
							<option value="4500">4500</option>
							<option value="5000">5000</option>
							<option value="5500">5500</option>
							<option value="6000">6000</option>
							<option value="6500">6500</option>
							<option value="7000">7000</option>
							<option value="7500">7500</option>
							<option value="8000">8000</option>
							<option value="8500">8500</option>
							<option value="9000">9000</option>
							<option value="9500">9500</option>
							<option value="10000">10000</option>
						</select>
					</div>
					<div class="valuationholder" style="width:25% !important">
						<label class="labelholder" style="width:40% !important">LandSize To</label>
						<select class="form-control form-control-sm textholder" style="width:55% !important"
						name="" id="landto">
							<option value="" hidden>-- Select--</option>
							<option value="0">0</option>
							<option value="500">500</option>
							<option value="1000">1000</option>
							<option value="1500">1500</option>
							<option value="2000">2000</option>
							<option value="2500">2500</option>
							<option value="3000">3000</option>
							<option value="3500">3500</option>
							<option value="4000">4000</option>
							<option value="4500">4500</option>
							<option value="5000">5000</option>
							<option value="5500">5500</option>
							<option value="6000">6000</option>
							<option value="6500">6500</option>
							<option value="7000">7000</option>
							<option value="7500">7500</option>
							<option value="8000">8000</option>
							<option value="8500">8500</option>
							<option value="9000">9000</option>
							<option value="9500">9500</option>
							<option value="10000">10000</option>
						</select>
					</div>
				</div>
				<div class="valuationholder" style="width:25% !important">
					<label class="labelholder" style="width:40% !important">BUA From</label>
					 <select class="form-control form-control-sm textholder" style="width:55% !important"
						name="" id="buafrom">
							<option value="" hidden>-- Select--</option>
							<option value="0">0</option>
							<option value="500">500</option>
							<option value="1000">1000</option>
							<option value="1500">1500</option>
							<option value="2000">2000</option>
							<option value="2500">2500</option>
							<option value="3000">3000</option>
							<option value="3500">3500</option>
							<option value="4000">4000</option>
							<option value="4500">4500</option>
							<option value="5000">5000</option>
							<option value="5500">5500</option>
							<option value="6000">6000</option>
							<option value="6500">6500</option>
							<option value="7000">7000</option>
							<option value="7500">7500</option>
							<option value="8000">8000</option>
							<option value="8500">8500</option>
							<option value="9000">9000</option>
							<option value="9500">9500</option>
							<option value="10000">10000</option>
						</select>
				</div>
				<div class="valuationholder" style="width:25% !important">
					<label class="labelholder" style="width:40% !important">BUA To</label>
					<select class="form-control form-control-sm textholder" style="width:55% !important"
						name="" id="buato">
							<option value="" hidden>-- Select--</option>
							<option value="0">0</option>
							<option value="500">500</option>
							<option value="1000">1000</option>
							<option value="1500">1500</option>
							<option value="2000">2000</option>
							<option value="2500">2500</option>
							<option value="3000">3000</option>
							<option value="3500">3500</option>
							<option value="4000">4000</option>
							<option value="4500">4500</option>
							<option value="5000">5000</option>
							<option value="5500">5500</option>
							<option value="6000">6000</option>
							<option value="6500">6500</option>
							<option value="7000">7000</option>
							<option value="7500">7500</option>
							<option value="8000">8000</option>
							<option value="8500">8500</option>
							<option value="9000">9000</option>
							<option value="9500">9500</option>
							<option value="10000">10000</option>
						</select>
				</div>
				<div class="valuationholder" style="width:100% !important">
					<div class="valuationholder" style="width:25% !important">
						<label class="labelholder" style="width:40% !important">Price From</label>
						<select class="form-control form-control-sm textholder" style="width:55% !important"
						name="" id="pricefrom">
							<option value="" hidden>-- Select--</option>
							<option value="0">0</option>
							<option value="500000">500000</option>
							<option value="1000000">1000000</option>
							<option value="1500000">1500000</option>
							<option value="2000000">2000000</option>
							<option value="2500000">2500000</option>
							<option value="3000000">3000000</option>
							<option value="3500000">3500000</option>
							<option value="4000000">4000000</option>
							<option value="4500000">4500000</option>
							<option value="5000000">5000000</option>
							<option value="5500000">5500000</option>
							<option value="6000000">6000000</option>
							<option value="6500000">6500000</option>
							<option value="7000000">7000000</option>
							<option value="7500000">7500000</option>
							<option value="8000000">8000000</option>
							<option value="8500000">8500000</option>
							<option value="9000000">9000000</option>
							<option value="9500000">9500000</option>
							<option value="10000000">10000000</option>
						</select>
					</div>
					<div class="valuationholder" style="width:25% !important">
						<label class="labelholder" style="width:40% !important">Price To</label>
						<select class="form-control form-control-sm textholder" style="width:55% !important"
						name="" id="priceto">
							<option value="" hidden>-- Select--</option>
							<option value="0">0</option>
							<option value="500000">500000</option>
							<option value="1000000">1000000</option>
							<option value="1500000">1500000</option>
							<option value="2000000">2000000</option>
							<option value="2500000">2500000</option>
							<option value="3000000">3000000</option>
							<option value="3500000">3500000</option>
							<option value="4000000">4000000</option>
							<option value="4500000">4500000</option>
							<option value="5000000">5000000</option>
							<option value="5500000">5500000</option>
							<option value="6000000">6000000</option>
							<option value="6500000">6500000</option>
							<option value="7000000">7000000</option>
							<option value="7500000">7500000</option>
							<option value="8000000">8000000</option>
							<option value="8500000">8500000</option>
							<option value="9000000">9000000</option>
							<option value="9500000">9500000</option>
							<option value="10000000">10000000</option>
						</select>
					</div>
				</div>
				<div class="valuationholder" style="width:100% !important">
					<div class="valuationholder" style="width:25% !important">
						<label class="labelholder" style="width:40% !important">Price/Sqt From</label>
						<select class="form-control form-control-sm textholder" style="width:55% !important"
						name="" id="pricesqtfrom">
							<option value="" hidden>-- Select--</option>
							<option value="0">0</option>
							<option value="100">100</option>
							<option value="200">200</option>
							<option value="300">300</option>
							<option value="400">400</option>
							<option value="500">500</option>
							<option value="600">600</option>
							<option value="700">700</option>
							<option value="800">800</option>
							<option value="900">900</option>
							<option value="1000">1000</option>
							<option value="1100">1100</option>
							<option value="1200">1200</option>
							<option value="1300">1300</option>
							<option value="1400">1400</option>
							<option value="1500">1500</option>
							<option value="1600">1600</option>
							<option value="1700">1700</option>
							<option value="1800">1800</option>
							<option value="1900">1900</option>
							<option value="2000">2000</option>
						</select>
					</div>
					<div class="valuationholder" style="width:25% !important">
						<label class="labelholder" style="width:40% !important">Price/Sqt To</label>
						<select class="form-control form-control-sm textholder" style="width:55% !important"
						name="" id="pricesqtto">
							<option value="" hidden>-- Select--</option>
							<option value="0">0</option>
							<option value="100">100</option>
							<option value="200">200</option>
							<option value="300">300</option>
							<option value="400">400</option>
							<option value="500">500</option>
							<option value="600">600</option>
							<option value="700">700</option>
							<option value="800">800</option>
							<option value="900">900</option>
							<option value="1000">1000</option>
							<option value="1100">1100</option>
							<option value="1200">1200</option>
							<option value="1300">1300</option>
							<option value="1400">1400</option>
							<option value="1500">1500</option>
							<option value="1600">1600</option>
							<option value="1700">1700</option>
							<option value="1800">1800</option>
							<option value="1900">1900</option>
							<option value="2000">2000</option>
						</select>
					</div>
				</div>
				
				
				<div class="valuationholder" style="margin-top: 20px">
					<div class="savebtn" id="sfilter">Filter</div>
				</div>
			</div>
			<div class="form-group filter">	
				<div class="" style="position:relative;top:-3px;clear:both">
					<div class="wr" style="width:85%;float:left;">
						<div class="seclabel" style="width:13%;color:crimson">Windmills Reference:</div>
						<div class="sectext" style="color:crimson" name="" id="v-wr"></div>
					</div>
					<div class="vd">
						<div class="seclabel" style="width:8%;color:crimson">Valuation Date:</div>
						<div class="sectext" style="color:crimson" name="" id="v-vd"></div>
					</div>
			</div>
			<div class="secsec" style="background: lightgoldenrodyellow;clear:both;width: 99.5% !important;margin-bottom: 8px; height:8%;border-radius: 5px;">
			<div class="selholder" style="width: 20%;">
					<div class="seclabel" style="width: 31%;">Property:</div>
					<div class="sectext" style="" name="" id="v-property"></div>
			</div>
			<div class="selholder" style="width: 31%;">
					<div class="seclabel" style="width: 18%;">Building:</div>
					<div class="sectext" style="" name="" id="v-buildingName"></div>
			</div>
			<div class="selholder" style="width: 29%;">
					<div class="seclabel" style="width: 31%;">SubCommunity:</div>
					<div class="sectext" style="" name="" id="v-subCommunity"></div>
			</div>
			<div class="selholder"  style="width: 20%;">
					<div class="seclabel" style="width: 35%;">Community:</div>
					<div class="sectext" style="" name="" id="v-community"></div>
			</div>
<!-- 			<div class="selholder" style="width: 10%;"> -->
<!-- 					<div class="seclabel" style="">City:</div> -->
<!-- 					<div class="sectext" style="" name="" id="vv-city"></div> -->
<!-- 			</div> -->
			<div class="selholder" style="width: 20%;">
					<div class="seclabel" style="width: 31%;">Date From:</div>
					<div class="sectext" style="" name="" id="v-datefrom"></div>
			</div>
			<div class="selholder" style="width: 16%;">
					<div class="seclabel" style="width: 53%;">Bedroom From:</div>
					<div class="sectext" style="" name="" id="v-bedfrom"></div>
			</div>
			<div class="selholder" style="width: 15%;">
					<div class="seclabel" style="width: 57%;">LandSize From: </div>
					<div class="sectext" style="" name="" id="v-landfrom"></div>
			</div>
			<div class="selholder" style="width: 15%;">
					<div class="seclabel" style="width: 52%;">SizeSqt From: </div>
					<div class="sectext" style="" name="" id="v-buafrom"></div>
			</div>
			<div class="selholder" style="width: 14%;">
					<div class="seclabel" style="width: 45%;">Price From:</div>
					<div class="sectext" style="" name="" id="v-pricefrom"></div>			
			</div>
			<div class="selholder">
					<div class="seclabel" style="width: 50%;">PricePerSqt From: </div>
					<div class="sectext" style="" name="" id="v-pricesqtfrom"></div>	
			</div>
			<div class="selholder" style="width: 20%;">
					<div class="seclabel" style="width: 31%;">Date To:</div>
					<div class="sectext" style="" name="" id="v-dateto"></div>
			</div>
			<div class="selholder" style="width: 16%;">
					<div class="seclabel" style="width: 53%;">Bedroom To:</div>
					<div class="sectext" style="" name="" id="v-bedto"></div>
			</div>
			<div class="selholder" style="width: 15%;">
					<div class="seclabel" style="width: 57%;">LandSize To: </div>
					<div class="sectext" style="" name="" id="v-landto"></div>
			</div>
			<div class="selholder" style="width: 15%;">
					<div class="seclabel" style="width: 52%;">SizeSqt To: </div>
					<div class="sectext" style="" name="" id="v-buato"></div>
			</div>
			<div class="selholder" style="width: 14%;">
					<div class="seclabel" style="width: 45%;">Price To: </div>
					<div class="sectext" style="" name="" id="v-priceto"></div>	
			</div>
			<div class="selholder">
					<div class="seclabel" style="width: 50%;">PricePerSqt To: </div>
					<div class="sectext" style="" name="" id="v-pricesqtto"></div>	
			</div>
		</div>
				<div class="column" style="display:flex;    height: 3% !important;
    line-height: 6px;background:lightcyan;color:#fff !important;margin-bottom:5px;border: 1px solid lightcyan;border-radius:5px;">
					<div class="head stylename" style="width:7.6%;color:darkblue !important;font-weight:700">Date</div>
					<div class="head stylename" style="width:7.6%;color:darkblue !important;font-weight:700">Area</div>
					<div class="head stylename" style="width:14%;color:darkblue !important;font-weight:700">Neighbourhood</div>
					<div class="head stylename" style="width:15%;color:darkblue !important;font-weight:700">Building Name</div>
					<div class="head stylename" style="width:14%;color:darkblue !important;font-weight:700">Developer</div>
					<div class="head stylename" style="width:11%;color:darkblue !important;font-weight:700">Property SubType</div>
					<div class="head stylename" style="width:8%;color:darkblue !important;font-weight:700">RoomNo Est</div>
					<div class="head stylename" style="width:6%;color:darkblue !important;font-weight:700">LA-sqf</div>
					<div class="head stylename" style="width:5%;color:darkblue !important;font-weight:700">Size-sqf</div>
					<div class="head stylename" style="color:darkblue !important;font-weight:700">Price AED</div>
					<div class="head stylename" style="width:0%;color:darkblue !important;font-weight:700">AED/sqf</div>
				</div>
			</div>
			<div class="form-group lfilter">	
			<div class="" style="position:relative;top:-3px;clear:both">
					<div class="wr" style="width:85%;float:left;">
						<div class="seclabel" style="width:13%;color:crimson">Windmills Reference:</div>
						<div class="sectext" style="color:crimson" name="" id="vv-wr"></div>
					</div>
					<div class="vd">
						<div class="seclabel" style="width:8%;color:crimson">Valuation Date:</div>
						<div class="sectext" style="color:crimson" name="" id="vv-vd"></div>
					</div>
			</div>
			<div class="secsec" style="background: lightgoldenrodyellow;clear:both;width: 99.5% !important;margin-bottom: 8px; height:8%;border-radius: 5px;">
			<div class="selholder" style="width: 20%;">
					<div class="seclabel" style="width: 31%;">Property:</div>
					<div class="sectext" style="" name="" id="vv-property"></div>
			</div>
			<div class="selholder" style="width: 31%;">
					<div class="seclabel" style="width: 18%;">Building:</div>
					<div class="sectext" style="" name="" id="vv-buildingName"></div>
			</div>
			<div class="selholder" style="width: 29%;">
					<div class="seclabel" style="width: 31%;">SubCommunity:</div>
					<div class="sectext" style="" name="" id="vv-subCommunity"></div>
			</div>
			<div class="selholder"  style="width: 20%;">
					<div class="seclabel" style="width: 35%;">Community:</div>
					<div class="sectext" style="" name="" id="vv-community"></div>
			</div>
<!-- 			<div class="selholder" style="width: 10%;"> -->
<!-- 					<div class="seclabel" style="">City:</div> -->
<!-- 					<div class="sectext" style="" name="" id="vv-city"></div> -->
<!-- 			</div> -->
			<div class="selholder" style="width: 20%;">
					<div class="seclabel" style="width: 31%;">Date From:</div>
					<div class="sectext" style="" name="" id="vv-datefrom"></div>
			</div>
			<div class="selholder" style="width: 16%;">
					<div class="seclabel" style="width: 53%;">Bedroom From:</div>
					<div class="sectext" style="" name="" id="vv-bedfrom"></div>
			</div>
			<div class="selholder" style="width: 15%;">
					<div class="seclabel" style="width: 57%;">LandSize From: </div>
					<div class="sectext" style="" name="" id="vv-landfrom"></div>
			</div>
			<div class="selholder" style="width: 15%;">
					<div class="seclabel" style="width: 52%;">SizeSqt From: </div>
					<div class="sectext" style="" name="" id="vv-buafrom"></div>
			</div>
			<div class="selholder" style="width: 14%;">
					<div class="seclabel" style="width: 45%;">Price From:</div>
					<div class="sectext" style="" name="" id="vv-pricefrom"></div>			
			</div>
			<div class="selholder">
					<div class="seclabel" style="width: 50%;">PricePerSqt From: </div>
					<div class="sectext" style="" name="" id="vv-pricesqtfrom"></div>	
			</div>
			<div class="selholder" style="width: 20%;">
					<div class="seclabel" style="width: 31%;">Date To:</div>
					<div class="sectext" style="" name="" id="vv-dateto"></div>
			</div>
			<div class="selholder" style="width: 16%;">
					<div class="seclabel" style="width: 53%;">Bedroom To:</div>
					<div class="sectext" style="" name="" id="vv-bedto"></div>
			</div>
			<div class="selholder" style="width: 15%;">
					<div class="seclabel" style="width: 57%;">LandSize To: </div>
					<div class="sectext" style="" name="" id="vv-landto"></div>
			</div>
			<div class="selholder" style="width: 15%;">
					<div class="seclabel" style="width: 52%;">SizeSqt To: </div>
					<div class="sectext" style="" name="" id="vv-buato"></div>
			</div>
			<div class="selholder" style="width: 14%;">
					<div class="seclabel" style="width: 45%;">Price To: </div>
					<div class="sectext" style="" name="" id="vv-priceto"></div>	
			</div>
			<div class="selholder">
					<div class="seclabel" style="width: 50%;">PricePerSqt To: </div>
					<div class="sectext" style="" name="" id="vv-pricesqtto"></div>	
			</div>
		</div>
			<div class="column" style="display:flex;height: 3% !important;width:99.5%;line-height: 6px;background:lightcyan;color:#fff !important;margin-bottom:5px;border: 1px solid lightcyan;border-radius:5px;">
					<div class="head stylename" style="width:7.6%;color:darkblue !important;font-weight:700">Date</div>
					<div class="head stylename" style="width:8%;color:darkblue !important;font-weight:700">Source</div>
					<div class="head stylename" style="width:6.8%;color:darkblue !important;font-weight:700">ListingsRef</div>
					<div class="head stylename" style="width:8%;color:darkblue !important;font-weight:700">Location</div>
					<div class="head stylename" style="width:3%;color:darkblue !important;font-weight:700">Age</div>
					<div class="head stylename" style="width:8%;color:darkblue !important;font-weight:700">View</div>
					<div class="head stylename" style="width:8%;color:darkblue !important;font-weight:700">FinishingStatus</div>
					<div class="head stylename" style="width:9%;color:darkblue !important;font-weight:700">PropExposure</div>
					<div class="head stylename" style="width:8%;color:darkblue !important;font-weight:700">PropPlacement</div>
					<div class="head stylename" style="width:5%;color:darkblue !important;font-weight:700">Floors</div>
					<div class="head stylename" style="width:5%;color:darkblue !important;font-weight:700">Beds</div>
					<div class="head stylename" style="width:6%;color:darkblue !important;font-weight:700">LA-sqf</div>
					<div class="head stylename" style="width:5%;color:darkblue !important;font-weight:700">Size-sqf</div>
					<div class="head stylename" style="color:darkblue !important;font-weight:700">Price AED</div>
					<div class="head stylename" style="width:0%;color:darkblue !important;font-weight:700">AED/sqf</div>
				</div>
			</div>
			<div class="form-group mfilter">	
			<div class="" style="position:relative;top:-3px;clear:both">
					<div class="wr" style="width:85%;float:left;">
						<div class="seclabel" style="width:13%;color:crimson">Windmills Reference:</div>
						<div class="sectext" style="color:crimson" name="" id="vvv-wr"></div>
					</div>
					<div class="vd">
						<div class="seclabel" style="width:8%;color:crimson">Valuation Date:</div>
						<div class="sectext" style="color:crimson" name="" id="vvv-vd"></div>
					</div>
			</div>
			<div class="secsec" style="background: lightgoldenrodyellow;clear:both;width: 99.5% !important;margin-bottom: 8px; height:8%;border-radius: 5px;">
			<div class="selholder" style="width: 20%;">
					<div class="seclabel" style="width: 31%;">Property:</div>
					<div class="sectext" style="" name="" id="vvv-property"></div>
			</div>
			<div class="selholder" style="width: 31%;">
					<div class="seclabel" style="width: 18%;">Building:</div>
					<div class="sectext" style="" name="" id="vvv-buildingName"></div>
			</div>
			<div class="selholder" style="width: 29%;">
					<div class="seclabel" style="width: 31%;">SubCommunity:</div>
					<div class="sectext" style="" name="" id="vvv-subCommunity"></div>
			</div>
			<div class="selholder"  style="width: 20%;">
					<div class="seclabel" style="width: 35%;">Community:</div>
					<div class="sectext" style="" name="" id="vvv-community"></div>
			</div>
<!-- 			<div class="selholder" style="width: 10%;"> -->
<!-- 					<div class="seclabel" style="">City:</div> -->
<!-- 					<div class="sectext" style="" name="" id="vv-city"></div> -->
<!-- 			</div> -->
			<div class="selholder" style="width: 20%;">
					<div class="seclabel" style="width: 31%;">Date From:</div>
					<div class="sectext" style="" name="" id="vvv-datefrom"></div>
			</div>
			<div class="selholder" style="width: 16%;">
					<div class="seclabel" style="width: 53%;">Bedroom From:</div>
					<div class="sectext" style="" name="" id="vvv-bedfrom"></div>
			</div>
			<div class="selholder" style="width: 15%;">
					<div class="seclabel" style="width: 57%;">LandSize From: </div>
					<div class="sectext" style="" name="" id="vvv-landfrom"></div>
			</div>
			<div class="selholder" style="width: 15%;">
					<div class="seclabel" style="width: 52%;">SizeSqt From: </div>
					<div class="sectext" style="" name="" id="vvv-buafrom"></div>
			</div>
			<div class="selholder" style="width: 14%;">
					<div class="seclabel" style="width: 45%;">Price From:</div>
					<div class="sectext" style="" name="" id="vvv-pricefrom"></div>			
			</div>
			<div class="selholder">
					<div class="seclabel" style="width: 50%;">PricePerSqt From: </div>
					<div class="sectext" style="" name="" id="vvv-pricesqtfrom"></div>	
			</div>
			<div class="selholder" style="width: 20%;">
					<div class="seclabel" style="width: 31%;">Date To:</div>
					<div class="sectext" style="" name="" id="vvv-dateto"></div>
			</div>
			<div class="selholder" style="width: 16%;">
					<div class="seclabel" style="width: 53%;">Bedroom To:</div>
					<div class="sectext" style="" name="" id="vvv-bedto"></div>
			</div>
			<div class="selholder" style="width: 15%;">
					<div class="seclabel" style="width: 57%;">LandSize To: </div>
					<div class="sectext" style="" name="" id="vvv-landto"></div>
			</div>
			<div class="selholder" style="width: 15%;">
					<div class="seclabel" style="width: 52%;">SizeSqt To: </div>
					<div class="sectext" style="" name="" id="vvv-buato"></div>
			</div>
			<div class="selholder" style="width: 14%;">
					<div class="seclabel" style="width: 45%;">Price To: </div>
					<div class="sectext" style="" name="" id="vvv-priceto"></div>	
			</div>
			<div class="selholder">
					<div class="seclabel" style="width: 50%;">PricePerSqt To: </div>
					<div class="sectext" style="" name="" id="vvv-pricesqtto"></div>	
			</div>
		</div>
			<div class="column" style="display:flex;height: 3% !important;width:99.5%;line-height: 6px;background:lightcyan;color:#fff !important;margin-bottom:5px;border: 1px solid lightcyan;border-radius:5px;">
					<div class="head stylename" style="width:7.6%;color:darkblue !important;font-weight:700">Date</div>
					<div class="head stylename" style="width:8.8%;color:darkblue !important;font-weight:700">WM-Ref</div>
					<div class="head stylename" style="width:7%;color:darkblue !important;font-weight:700">Tenure</div>
					<div class="head stylename" style="width:7%;color:darkblue !important;font-weight:700">Location</div>
					<div class="head stylename" style="width:3%;color:darkblue !important;font-weight:700">Age</div>
					<div class="head stylename" style="width:7%;color:darkblue !important;font-weight:700">View</div>
					<div class="head stylename" style="width:7%;color:darkblue !important;font-weight:700">Condition</div>
					<div class="head stylename" style="width:7%;color:darkblue !important;font-weight:700">Finishing</div>
					<div class="head stylename" style="width:6%;color:darkblue !important;font-weight:700">Exposure</div>
					<div class="head stylename" style="width:7%;color:darkblue !important;font-weight:700">Placement</div>
					<div class="head stylename" style="width:5%;color:darkblue !important;font-weight:700">Floors</div>
					<div class="head stylename" style="width:5%;color:darkblue !important;font-weight:700">Beds</div>
					<div class="head stylename" style="width:6%;color:darkblue !important;font-weight:700">Land</div>
					<div class="head stylename" style="width:5%;color:darkblue !important;font-weight:700">BUA</div>
					<div class="head stylename" style="color:darkblue !important;font-weight:700">MV</div>
					<div class="head stylename" style="width:0%;color:darkblue !important;font-weight:700">MV/sqf</div>
				</div>
			</div>
			<div class="form-group conflict">
				<div class="coholder" style="color:black !important;margin-top:65px !important">
	                  <div class="" style="float:left;margin-right:20px;color: black;">Do we have any conflict related to Buyer?</div>  
	                  <div class="pretty p-svg p-curve" style="float:left;color: black;margin-right:10px">
							<input type="checkbox" id="" name="" value="">
							<div class="state p-success">
								<svg class="svg svg-icon" viewBox="0 0 20 20">
					                <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
									style="stroke: white;fill:white;"></path>
					            </svg>
								<label style="margin-left: 5px; line-height: 11px;font-size:13px">Yes</label>
							</div>
					  </div> 
					  <div class="pretty p-svg p-curve" style="float:left;color: black;">
							<input type="checkbox" id="" name="" value="">
							<div class="state p-success">
								<svg class="svg svg-icon" viewBox="0 0 20 20">
					                <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
									style="stroke: white;fill:white;"></path>
					            </svg>
								<label style="margin-left: 5px; line-height: 11px;font-size:13px">No</label>
							</div>
					  </div>   
				  </div><br>
				  	<div class="coholder" style="color:balck !important">
	                  <div class="" style="float:left;margin-right:20px;color: black;">Do we have any conflict related to Seller?</div>  
	                  <div class="pretty p-svg p-curve" style="float:left;color: black;margin-right:10px">
							<input type="checkbox" id="" name="" value="">
							<div class="state p-success">
								<svg class="svg svg-icon" viewBox="0 0 20 20">
					                <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
									style="stroke: white;fill:white;"></path>
					            </svg>
								<label style="margin-left: 5px; line-height: 11px;font-size:13px">Yes</label>
							</div>
					  </div> 
					  <div class="pretty p-svg p-curve" style="float:left;color: black;">
							<input type="checkbox" id="" name="" value="">
							<div class="state p-success">
								<svg class="svg svg-icon" viewBox="0 0 20 20">
					                <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
									style="stroke: white;fill:white;"></path>
					            </svg>
								<label style="margin-left: 5px; line-height: 11px;font-size:13px">No</label>
							</div>
					  </div>   
				  </div><br>
				  	<div class="coholder" style="color:balck !important">
	                  <div class="" style="float:left;margin-right:20px;color: black;">Do we have any conflict related to Client?</div>  
	                  <div class="pretty p-svg p-curve" style="float:left;color: black;margin-right:10px">
							<input type="checkbox" id="" name="" value="">
							<div class="state p-success">
								<svg class="svg svg-icon" viewBox="0 0 20 20">
					                <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
									style="stroke: white;fill:white;"></path>
					            </svg>
								<label style="margin-left: 5px; line-height: 11px;font-size:13px">Yes</label>
							</div>
					  </div> 
					  <div class="pretty p-svg p-curve" style="float:left;color: black;">
							<input type="checkbox" id="" name="" value="">
							<div class="state p-success">
								<svg class="svg svg-icon" viewBox="0 0 20 20">
					                <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
									style="stroke: white;fill:white;"></path>
					            </svg>
								<label style="margin-left: 5px; line-height: 11px;font-size:13px">No</label>
							</div>
					  </div>   
				  </div>
            </div> 
			<div class="form-group receiving">
				<div class="vrholder">
					<label class="rholder">Windmills Reference</label> <input
						type="text" class="form-control form-control-sm textholder"
						name="valuationReport.windmillsRef" id="reference"
						placeholder="Windmills Reference" autocomplete="on">
				</div>
				<div class="vrholder">
					<label class="rholder">Client Reference</label> <input type="text"
						class="form-control form-control-sm textholder"
						name="valuationReport.clientRef" id=""
						placeholder="Client Reference" autocomplete="on">
				</div>
				<div class="vrholder">
					<label class="rholder">Client's Name</label> <select
						class="form-control form-control-sm textholder"
						name="valuationReport.clientName" id="clientname">
						<c:forEach items="${clientlist}" var="item">
							<option value="" hidden>-- Select Client Name ---</option>
							<option value="${item}">${item}</option>
						</c:forEach>
					</select>
				</div>
				<div class="vrholder">
					<label class="rholder">Client Customer Name</label> <input
						type="text" class="form-control form-control-sm textholder"
						name="valuationReport.clientCustomerName" id="cusname"
						placeholder="Client Customer Name" autocomplete="on">
				</div>
				<div class="vrholder">
					<label class="rholder">Owner Name</label> <input type="text"
						class="form-control form-control-sm textholder"
						name="valuationReport.ownerName" id="ownername"
						placeholder="Owner Name" autocomplete="on">
				</div>
				<div class="vrholder">
					<label class="rholder">Service Officer Name</label> <select
						class="form-control form-control-sm textholder"
						name="valuationReport.serviceOffName" id="">
						<c:forEach items="${serviceofficerlist}" var="item">
							<option value="${item.name}">${item.name}</option>
						</c:forEach>
						<c:forEach items="${dfservicer}" var="item1">
							<option selected="true" value="${item1.name}">${item1.name}</option>
						</c:forEach>
					</select>
				</div>
				<div class="vrholder">
					<label class="rholder">Valuation Instructions Date</label>
					<div class="input-group textholder">
						<div class="input-group-prepend">
							<div class="input-group-text">
								<i class="fas fa-calendar"></i>
							</div>
						</div>
						<input type="text" class="form-control form-control-sm datepicker" style="height: 27px !important;font-size: 12px !important; font-family: sans-serif;"
							name="valuationReport.valInstrDate" id="valinsdate">
					</div>
				</div>
				<div class="vrholder">
					<label class="rholder">Internal Target Date</label>
					<div class="input-group textholder">
						<div class="input-group-prepend">
							<div class="input-group-text">
								<i class="fas fa-calendar"></i>
							</div>
						</div>
						<input type="text" class="form-control form-control-sm datepicker" style="height: 27px !important;font-size: 12px !important; font-family: sans-serif;"
							name="valuationReport.intTargetDate" id="">
					</div>
				</div>
				<div class="vrholder">
					<label class="rholder">Property Valued</label> <select
						class="form-control form-control-sm textholder"
						name="valuationReport.propertyValued" id="propertyvalued">
						<c:forEach items="${propertylist}" var="item">
							<option value="${item.propertyValued}">${item.propertyValued}</option>
						</c:forEach>
					</select>
				</div>
				<div class="vrholder">
					<label class="rholder">Property Category</label> <select
						class="form-control form-control-sm textholder"
						name="valuationReport.propertyValued" id="propertyCategory">
						<c:forEach items="${categorylist}" var="item">
							<option value="${item}">${item}</option>
						</c:forEach>
					</select>
				</div>
				<div class="vrholder">
					<label class="rholder">Tenure</label> <select
						class="form-control form-control-sm textholder"
						name="valuationReport.tenure" id="tenure">
						<option value="Freehold" selected>Freehold</option>
						<option value="Non-Freehold(Emiratis)">Non-Freehold(Emiratis)</option>
						<option value="Non-Freehold(Emiratis & GCC Citizens)">Non-Freehold(Emiratis
							& GCC Citizens)</option>
						<option value="Leasehold">Leasehold</option>

					</select>
				</div>
				<div class="vrholder">
					<label class="rholder">Unit Number</label> <input type="text"
						class="form-control form-control-sm textholder"
						name="valuationReport.unitNo" id="unitno"
						placeholder="Unit Number" autocomplete="on">
				</div>
				<div class="vrholder">
					<label class="rholder">Floor Number</label> <select
						class="form-control form-control-sm textholder"
						name="valuationReport.floorNo" id="floorno">
						<option value="" hidden>--- Select Floor Number---</option>
						<option value="1">Mezzanine</option>
						<option value="1">1 Floor</option>
						<option value="2">2 Floor</option>
						<option value="3">3 Floor</option>
						<option value="4">4 Floor</option>
						<option value="5">5 Floor</option>
						<option value="6">6 Floor</option>
						<option value="7">7 Floor</option>
						<option value="8">8 Floor</option>
						<option value="9">9 Floor</option>
						<option value="10">10 Floor</option>
						<option value="11">11 Floor</option>
						<option value="12">12 Floor</option>
						<option value="13">13 Floor</option>
						<option value="14">14 Floor</option>
						<option value="15">15 Floor</option>
						<option value="16">16 Floor</option>
						<option value="17">17 Floor</option>
						<option value="18">18 Floor</option>
						<option value="19">19 Floor</option>
						<option value="20">20 Floor</option>
						<option value="21">21 Floor</option>
						<option value="22">22 Floor</option>
						<option value="23">23 Floor</option>
						<option value="24">24 Floor</option>
						<option value="25">25 Floor</option>
						<option value="26">26 Floor</option>
						<option value="27">27 Floor</option>
						<option value="28">28 Floor</option>
						<option value="29">29 Floor</option>
						<option value="30">30 Floor</option>
						<option value="31">31 Floor</option>
						<option value="32">32 Floor</option>
						<option value="33">33 Floor</option>
						<option value="34">34 Floor</option>
						<option value="35">35 Floor</option>
						<option value="36">36 Floor</option>
						<option value="37">37 Floor</option>
						<option value="38">38 Floor</option>
						<option value="39">39 Floor</option>
						<option value="40">40 Floor</option>
						<option value="41">41 Floor</option>
						<option value="42">42 Floor</option>
						<option value="43">43 Floor</option>
						<option value="44">44 Floor</option>
						<option value="45">45 Floor</option>
						<option value="46">46 Floor</option>
						<option value="47">47 Floor</option>
						<option value="48">48 Floor</option>
						<option value="49">49 Floor</option>
						<option value="50">50 Floor</option>
						<option value="51">51 Floor</option>
						<option value="52">52 Floor</option>
						<option value="53">53 Floor</option>
						<option value="54">54 Floor</option>
						<option value="55">55 Floor</option>
						<option value="56">56 Floor</option>
						<option value="57">57 Floor</option>
						<option value="58">58 Floor</option>
						<option value="59">59 Floor</option>
						<option value="60">60 Floor</option>
						<option value="61">61 Floor</option>
						<option value="62">62 Floor</option>
						<option value="63">63 Floor</option>
						<option value="64">64 Floor</option>
						<option value="65">65 Floor</option>
						<option value="66">66 Floor</option>
						<option value="67">67 Floor</option>
						<option value="68">68 Floor</option>
						<option value="69">69 Floor</option>
						<option value="70">70 Floor</option>
						<option value="71">71 Floor</option>
						<option value="72">72 Floor</option>
						<option value="73">73 Floor</option>
						<option value="74">74 Floor</option>
						<option value="75">75 Floor</option>
						<option value="76">76 Floor</option>
						<option value="77">77 Floor</option>
						<option value="78">78 Floor</option>
						<option value="79">79 Floor</option>
						<option value="80">80 Floor</option>
						<option value="81">81 Floor</option>
						<option value="82">82 Floor</option>
						<option value="83">83 Floor</option>
						<option value="84">84 Floor</option>
						<option value="85">85 Floor</option>
						<option value="86">86 Floor</option>
						<option value="87">87 Floor</option>
						<option value="88">88 Floor</option>
						<option value="89">89 Floor</option>
						<option value="90">90 Floor</option>
						<option value="91">91 Floor</option>
						<option value="92">92 Floor</option>
						<option value="93">93 Floor</option>
						<option value="94">94 Floor</option>
						<option value="95">95 Floor</option>
						<option value="96">96 Floor</option>
						<option value="97">97 Floor</option>
						<option value="98">98 Floor</option>
						<option value="99">99 Floor</option>
						<option value="100">100 Floor</option>
					</select>
				</div>
				<div class="vrholder">
					<label class="rholder">Street Number</label> <input type="text"
						class="form-control form-control-sm textholder"
						name="valuationReport.streetNo" id="streetno"
						placeholder="Street Number" autocomplete="on">
				</div>
				<div class="vrholder">
					<label class="rholder">Street Name</label> <input type="text"
						class="form-control form-control-sm textholder"
						name="valuationReport.streetName" id="streetname"
						placeholder="Street Name" autocomplete="on">
				</div>
				<div class="vrholder">
					<label class="rholder">Building Number</label> <input type="text"
						class="form-control form-control-sm textholder"
						name="valuationReport.buildingNo" id="buildingno"
						placeholder="Building Number" autocomplete="on">
				</div>
				<div class="vrholder">
					<label class="rholder">Building/Project Name</label>
<!-- 					 <input -->
<!-- 						type="text" class="form-control form-control-sm textholder" -->
<!-- 						name="valuationReport.buildingName" id="buildingname" -->
<!-- 						placeholder="Building/Project Name" autocomplete="on"> -->
						<select
 							class="form-control form-control-sm textholder"  
 							name="valuationReport.buildingName" id="buildingname">  
 							<c:forEach items="${bullist}" var="item"> 
 								<option value="" hidden>-- Select Building/Project Name ---</option> 
 								<option value="${item}">${item}</option>
  							</c:forEach> 
						</select> 
						
				</div>
				<div class="vrholder">
					<label class="rholder">Plot Number</label> <input type="text"
						class="form-control form-control-sm textholder"
						name="valuationReport.plotNo" id="plotno"
						placeholder="Plot Number" autocomplete="on">
				</div>
				<div class="vrholder">
					<label class="rholder">Sub Community Name</label> 
<!-- 					<input -->
<!-- 						type="text" class="form-control form-control-sm textholder" -->
<!-- 						name="valuationReport.subCommunity" id="subcommunity" -->
<!-- 						placeholder="Sub Community Name" autocomplete="on"> -->
						 <select
 							class="form-control form-control-sm textholder" 
 							name="valuationReport.subCommunity" id="subcommunity"> 
 							<c:forEach items="${hoodlist}" var="item">
 								<option value="" hidden>-- Select Sub Community ---</option>
							<option value="${item}">${item}</option> 
 							</c:forEach> 
 						</select> 
				</div>
				<div class="vrholder">
					<label class="rholder">Community/Area Name</label> <select
						class="form-control form-control-sm textholder"
						name="valuationReport.community" id="community">
<%-- 						<c:forEach items="${communitylist}" var="item"> --%>
<!-- 							<option value="" hidden>Select Community</option> -->
<%-- 							<option value="${item.community}">${item.community}</option> --%>
<%-- 						</c:forEach> --%>
							<c:forEach items="${arealist}" var="item"> 
								<option value="" hidden>-- Select Community/Area---</option>
								<option value="${item}">${item}</option>
 							</c:forEach>
					</select>
				</div>
<!-- 				<div class="vrholder"> -->
<!-- 					<label class="rholder">Town</label> <input type="text" -->
<!-- 						class="form-control form-control-sm textholder" -->
<!-- 						name="valuationReport.town" id="town" placeholder="Town" -->
<!-- 						autocomplete="on"> -->
<!-- 				</div> -->
				<div class="vrholder">
					<label class="rholder">City</label> <select
						class="form-control form-control-sm textholder"
						name="valuationReport.city" id="city">
						<c:forEach items="${citylist}" var="item">
							<option value="${item}">${item}</option>
						</c:forEach>
					</select>
				</div>
				<div class="vrholder">
					<label class="rholder">Country</label> <input type="text"
						class="form-control form-control-sm textholder"
						name="valuationReport.country" id="country" placeholder="Country"
						autocomplete="on">
				</div>
				<div class="vrholder">
					<label class="rholder">Valuation Instructing Person</label> <select
						class="form-control form-control-sm textholder"
						name="valuationReport.valuationInstrPerson" id="contactPerson">
						<option value="" hidden>--- Select ---</option>
					</select>
				</div>
				<div class="vrholder">
					<label class="rholder">Land Size[Square Feet]</label> <input
						type="number" class="form-control form-control-sm textholder"
						name="valuationReport.plotSize" id="landSize"
						placeholder="Land Size[Square Feet]" autocomplete="on">
				</div>
				<div class="vrholder">
					<label class="rholder">Land Price</label> <input
						type="number" class="form-control form-control-sm textholder"
						name="valuationReport.plotSize" id="landPrice"
						placeholder="Land Price" autocomplete="on">
				</div>
				<div class="vrholder">
					<label class="rholder">Purpose Of Valuation</label> <select
						class="form-control form-control-sm textholder"
						name="valuationReport.propOfVal" id="">
						<option value="Buying">Buying</option>
						<option value="Selling">Selling</option>
						<option value="Court Proceeding">Court Proceeding</option>
						<option value="Financial Reporting">Financial Reporting</option>
						<option value="Secured Lending" selected>Secured Lending</option>
						<option value="Strategic Management">Strategic Management</option>
					</select>
				</div>
				<div class="vrholder">
					<label class="rholder">Valuation Approach</label> <select
						class="form-control form-control-sm textholder"
						name="valuationReport.valApproach" id="valApproach">
						<c:forEach items="${valapproachlist}" var="item">
							<option value="${item}">${item}</option>
						</c:forEach>
					</select>
				</div>
				<div class="vrholder">
					<label class="rholder">Bases Of Value</label> <select
						class="form-control form-control-sm textholder"
						name="valuationReport.basesOfValue" id="">
						<option value="Market Value" selected>Market Value</option>
						<option value="Market Rent">Market Rent</option>
						<option value="Investment Value">Investment Value</option>
						<option value="Equitable Value/Fair">Equitable Value/Fair</option>
						<option value="Synergistic Value">Synergistic Value</option>
						<option value="Liquidable Value">Liquidable Value</option>
					</select>

				</div>

				<div class="vrholder">
					<label class="rholder">Approach Reasoning</label> <select
						class="form-control form-control-sm textholder"
						name="valuationReport.approachReasoning" id="apprreason">
						<c:forEach items="${appreasonlist}" var="item">
							<option value="${item}">${item}</option>
						</c:forEach>
					</select>
				</div>
				<div class="vrholder">
					  <label class="rholder">Developer Margin</label>
	               	 <select
						class="form-control form-control-sm textholder"
						name="" id="devmargin">
						<option value="Yes">Yes</option>
						<option value="No" selected>No</option>
					</select>
				  </div>
				<div class="valuationholder" style="margin-top: 5px;height:45px">
					<div class="savebtn" id="receivenxt">Next</div>
				</div>
			</div>
			<div class="form-group scheduling">
				<div class="valuationholder">
					<label class="ilholder">Inspection Type</label> <select
						class="form-control form-control-sm itholder"
						name="valuationReport.insType" id="insType">
						<option value="Physical Inspection" selected>Physical
							Inspection</option>
						<option value="Desktop">Desktop</option>
						<option value="Drive By">Drive By</option>
					</select>
				</div>
				<div class="valuationholder">
					<label class="ilholder">Valuation Date</label>
					<div class="input-group itholder">
						<div class="input-group-prepend">
							<div class="input-group-text">
								<i class="fas fa-calendar"></i>
							</div>
						</div>
						<input type="text" class="form-control form-control-sm datepicker"
							name="valuationReport.valDate" id="valDate" placeholder=""
							autocomplete="on">
					</div>
				</div>
				<div class="valuationholder insDate">
					<label class="ilholder">Inspection Date</label>
					<div class="input-group itholder">
						<div class="input-group-prepend">
							<div class="input-group-text">
								<i class="fas fa-calendar"></i>
							</div>
						</div>
						<input type="text" class="form-control form-control-sm datepicker"
							name="valuationReport.insDate" id="insdate" placeholder=""
							autocomplete="on">
					</div>
				</div>
				<div class="valuationholder insday">
					<label class="ilholder">Inspection Day</label>
					<div class="input-group itholder">
						<div class="input-group-prepend">
							<div class="input-group-text">
								<i class="fas fa-fire"></i>
							</div>
						</div>
						<input type="text" class="form-control form-control-sm "
							name="valuationReport.insDay" id="insday" placeholder="" readonly
							autocomplete="on">
					</div>
				</div>
				<div class="valuationholder instime">
					<label class="ilholder">Inspection Time</label>
					<div class="input-group itholder">
						<div class="input-group-prepend">
							<div class="input-group-text">
								<i class="fas fa-clock"></i>
							</div>
						</div>
						<input type="text" class="form-control form-control-sm timepicker"
							name="valuationReport.insTime" id="instime"
							placeholder="Inspection Time" autocomplete="on">
					</div>
				</div>
				<div class="valuationholder">
					<label class="ilholder">Client's Deadline</label>
					<div class="input-group itholder">
						<div class="input-group-prepend">
							<div class="input-group-text">
								<i class="fas fa-calendar"></i>
							</div>
						</div>
						<input type="text" class="form-control form-control-sm datepicker"
							name="valuationReport.clientDeadline" id="" placeholder=""
							autocomplete="on">
					</div>
				</div>
				<div class="valuationholder startkms">
					<label class="ilholder">Fee(AED)</label> <input
						type="text" class="form-control form-control-sm itholder"
						name="" id=""
						placeholder="Fee(AED)" autocomplete="on">
				</div>
				<div class="valuationholder insOfficer">
					<label class="ilholder">Inspection Officer</label> <select
						class="form-control form-control-sm itholder"
						name="valuationReport.insOfficer" id="insOfficer">
						<c:forEach items="${serviceofficerlist}" var="item">
							<option value="${item.name}">${item.name}</option>
						</c:forEach>
						<c:forEach items="${dfservicer}" var="item1">
							<option selected="true" value="${item1.name}">${item1.name}</option>
						</c:forEach>
					</select>
				</div>
				<div class="valuationholder mode">
					<label class="ilholder">Mode Of Transport</label> <select
						class="form-control form-control-sm itholder"
						name="valuationReport.modeOfTransport" id="mode">
						<option value="Company Car">Company Car</option>
						<option value="Personal Car">Personal Car</option>
						<option value="External Transport">External Transport</option>
					</select>
				</div>
				<div class="valuationholder startkms">
					<label class="ilholder"> Start Kilometres</label> <input
						type="text" class="form-control form-control-sm itholder"
						name="valuationReport.startkms" id="startkms"
						placeholder="Start Kilometres" autocomplete="on">
				</div>
				<div class="valuationholder endkms">
					<label class="ilholder"> End Kilometres</label> <input type="text"
						class="form-control form-control-sm itholder"
						name="valuationReport.endkms" id="endkms"
						placeholder="End Kilometres" autocomplete="on">
				</div>
				<div class="valuationholder adjustTop">
					<div class="savebtn" id="scheduleprv">Previous</div>
					<div class="savebtn" id="schedulenxt">Next</div>
				</div>
			</div>
			<div class="form-group inspecting1">
				<div class="viholder">
					<label class="rholder">Makani Number</label> <input type="text"
						class="form-control form-control-sm textholder"
						name="valuationReport.makaniNo" id="" placeholder="Makani Number"
						autocomplete="on">
				</div>
				<div class="viholder">
					<label class="rholder">Location</label> <select
						class="form-control form-control-sm textholder"
						name="valuationReport.location" id="location">
						<option value="Very Good">Very Good</option>
						<option value="Good">Good</option>
						<option value="Average" selected>Average</option>
						<option value="Substandard">Substandard</option>
						<option value="Poor">Poor</option>
					</select>
				</div>
				<div class="viholder">
					<label class="rholder">Location Coordinates</label> <input
						type="text" class="form-control form-control-sm textholder"
						name="valuationReport.locationCoord" id="locationCoord"
						placeholder="Location Coordinates" autocomplete="on">
				</div>
				<div class="viholder">
					<label class="rholder">Property Placement</label> <select
						class="form-control form-control-sm textholder"
						name="valuationReport.propertyPlacement" id="placement">
						<option value="Middle" selected>Middle</option>
						<option value="Corner">Corner</option>
						<option value="Semi-Corner">Semi-Corner</option>
					</select>
				</div>
				<div class="viholder">
					<label class="rholder">Property Exposure</label> <select
						class="form-control form-control-sm textholder"
						name="valuationReport.propertyExposure" id="exposure">
						<option value="Single Row">Single Row</option>
						<option value="Back To Back" selected>Back To Back</option>
					</select>
				</div>
				<div class="viholder">
					<label class="rholder">Property Type</label> <input type="text"
						class="form-control form-control-sm textholder"
						name="valuationReport.propertyType" id=""
						placeholder="Property Type" autocomplete="on">
				</div>
				<div class="viholder">
					<label class="rholder">Property Condition</label> <select
						class="form-control form-control-sm textholder"
						name="valuationReport.propertyCondition" id="quality">
						<option value="Very Good">Very Good</option>
						<option value="Good">Good</option>
						<option value="Average" selected>Average</option>
						<option value="Substandard">Substandard</option>
						<option value="Poor">Poor</option>
					</select>
				</div>
				<div class="viholder">
					<label class="rholder">Development Type</label> <select
						class="form-control form-control-sm textholder"
						name="valuationReport.devType" id="">
						<option value="Standard" standard>Standard</option>
						<option value="Non-Standard">Non-Standard</option>
					</select>
				</div>
				<div class="viholder">
					<label class="rholder">Finishing Status</label> <select
						class="form-control form-control-sm textholder"
						name="valuationReport.devType" id="status">
						<option value="Shell & Core" selected>Shell & Core</option>
						<option value="Fitted">Fitted</option>
					</select>
				</div>
				<div class="viholder">
					<label class="rholder">Developer</label> 
					<select
						class="form-control form-control-sm textholder"
						name="valuationReport.developer" id="developer">
						<c:forEach items="${devlist}" var="item">
							<option value="${item}">${item}</option>
						</c:forEach>
					</select>
<!-- 					<select -->
<!-- 						class="form-control form-control-sm textholder" -->
<!-- 						name="" id=""> -->
<!-- 						<option value="Al Ain Holding">Al Ain Holding</option> -->
<!-- 						<option value="Akshara Global Real Estate Development LLC">Akshara -->
<!-- 							Global Real Estate Development LLC</option> -->
<!-- 						<option value="Al Mada Marble">Al Mada Marble</option> -->
<!-- 						<option value="Al Masarat Real Estate">Al Masarat Real -->
<!-- 							Estate</option> -->
<!-- 						<option value="Al Mazaya Real Estate FZ LLC">Al Mazaya -->
<!-- 							Real Estate FZ LLC</option> -->
<!-- 						<option value="Al Mizan Group">Al Mizan Group</option> -->
<!-- 						<option value="Al Shafar Development">Al Shafar -->
<!-- 							Development</option> -->
<!-- 						<option value="Arabian Gulf Properties">Arabian Gulf -->
<!-- 							Properties</option> -->
<!-- 						<option value="Aurora Real Estate Development">Aurora -->
<!-- 							Real Estate Development</option> -->
<!-- 						<option value="AYS Developments Limited">AYS Developments -->
<!-- 							Limited</option> -->
<!-- 						<option value="Azizi">Azizi</option> -->
<!-- 						<option value="B&M Riviera Properties Development">B&M -->
<!-- 							Riviera Properties Development</option> -->
<!-- 						<option value="Binghatti">Binghatti</option> -->
<!-- 						<option value="Bloom Properties">Bloom Properties</option> -->
<!-- 						<option value="Bolton Real Estate Development LLC">Bolton -->
<!-- 							Real Estate Development LLC</option> -->
<!-- 						<option value="Cayan Group">Cayan Group</option> -->
<!-- 						<option value="Chapal">Chapal</option> -->
<!-- 						<option value="Damac Properties">Damac Properties</option> -->
<!-- 						<option value="Danube Properties">Danube Properties</option> -->
<!-- 						<option value="Dar Al Arkan">Dar Al Arkan</option> -->
<!-- 						<option value="Deyaar">Deyaar</option> -->
<!-- 						<option value="Dubai Investments Park Development Company">Dubai -->
<!-- 							Investments Park Development Company</option> -->
<!-- 						<option value="Dubai Investments Real Estate Company">Dubai -->
<!-- 							Investments Real Estate Company</option> -->
<!-- 						<option value="Dubai Properties">Dubai Properties</option> -->
<!-- 						<option value="Dubai South">Dubai South</option> -->
<!-- 						<option value="Dubai Sports City LLC">Dubai Sports City -->
<!-- 							LLC</option> -->
<!-- 						<option value="Ellington Properties">Ellington Properties</option> -->
<!-- 						<option value="Emaar">Emaar</option> -->
<!-- 						<option value="Emaar/DP World">Emaar/DP World</option> -->
<!-- 						<option value="Empire Arabia Real Estate Developers LLC">Empire -->
<!-- 							Arabia Real Estate Developers LLC</option> -->
<!-- 						<option value="Five Holdings">Five Holdings</option> -->
<!-- 						<option value="GGICO">GGICO</option> -->
<!-- 						<option value="HMG Properties">HMG Properties</option> -->
<!-- 						<option value="IFA">IFA</option> -->
<!-- 						<option value="Iman Developers">Iman Developers</option> -->
<!-- 						<option value="Innovation SEZ Developer LTD">Innovation -->
<!-- 							SEZ Developer LTD</option> -->
<!-- 						<option value="Jumeirah Golf Estates LLC">Jumeirah Golf -->
<!-- 							Estates LLC</option> -->
<!-- 						<option value="Kerzer International">Kerzer International</option> -->
<!-- 						<option value="Kleindienst Group">Kleindienst Group</option> -->
<!-- 						<option value="Liv Developers">Liv Developers</option> -->
<!-- 						<option value="Lokhandwala Builders">Lokhandwala Builders</option> -->
<!-- 						<option value="Lootah Group">Lootah Group</option> -->
<!-- 						<option value="MAG Group">MAG Group</option> -->
<!-- 						<option value="Meraas">Meraas</option> -->
<!-- 						<option value="Meraki">Meraki</option> -->
<!-- 						<option value="Meydan Group">Meydan Group</option> -->
<!-- 						<option value="Nakheel">Nakheel</option> -->
<!-- 						<option value="Naseria Contracting">Naseria Contracting</option> -->
<!-- 						<option value="Nshama">Nshama</option> -->
<!-- 						<option value="Omniyat">Omniyat</option> -->
<!-- 						<option value="Pacific Investment">Pacific Investment</option> -->
<!-- 						<option value="Pal Developments L.L.C.">Pal Developments -->
<!-- 							L.L.C.</option> -->
<!-- 						<option value="Pantheon Properties Limited">Pantheon -->
<!-- 							Properties Limited</option> -->
<!-- 						<option value="Private Developer">Private Developer</option> -->
<!-- 						<option value="Realty One">Realty One</option> -->
<!-- 						<option value="RKMDurar Properties">RKMDurar Properties</option> -->
<!-- 						<option value="Samana Developers">Samana Developers</option> -->
<!-- 						<option value="Select Group">Select Group</option> -->
<!-- 						<option value="Seven Tides">Seven Tides</option> -->
<!-- 						<option value="Shapoorji Pallonji Group">Shapoorji -->
<!-- 							Pallonji Group</option> -->
<!-- 						<option value="Sobha Group">Sobha Group</option> -->
<!-- 						<option value="Tanmiyat">Tanmiyat</option> -->
<!-- 						<option value="Texture Holdings">Texture Holdings</option> -->
<!-- 						<option value="The First Group">The First Group</option> -->
<!-- 						<option value="Tiger Properties">Tiger Properties</option> -->
<!-- 						<option value="Time Properties">Time Properties</option> -->
<!-- 						<option value="Titan Developers">Titan Developers</option> -->
<!-- 						<option value="Trident">Trident</option> -->
<!-- 						<option value="Vascon Trading Ltd.">Vascon Trading Ltd.</option> -->
<!-- 						<option value="Vincitore Real Estate Development LLC">Vincitore -->
<!-- 							Real Estate Development LLC</option> -->
<!-- 						<option value="Wasl">Wasl</option> -->
<!-- 						<option value="Zaya Real Estate Development">Zaya Real -->
<!-- 							Estate Development</option> -->
<!-- 					</select> -->
				</div>
				<div class="viholder">
					<label class="rholder">Estimated Age(Years)</label> <input
						type="number" class="form-control form-control-sm textholder"
						name="valuationReport.estAge" id="age"
						placeholder="Estimation Age(Years)" autocomplete="on">
				</div>
				<div class="viholder">
					<label class="rholder" style="line-height: 16px">Estimated
						Remaining Life(Years)</label> <input type="number"
						class="form-control form-control-sm textholder"
						name="valuationReport.estemLife" id="remlife"
						placeholder="Estimated Remaining Life" autocomplete="on">
				</div>
				<div class="viholder">
					<label class="rholder">Balcony / Terrace Size</label> <input type="text"
						class="form-control form-control-sm textholder"
						name="" id="balsize"
						placeholder="Balcony/Terrace Size" autocomplete="on">
				</div>
				<div class="viholder"> 
					<label class="rholder" style="line-height: 16px">Built Up
						Area Size (sq.ft)</label> <input type="text"
						class="form-control form-control-sm textholder"
						name="valuationReport.buitUpAreaSize" id="buitUpAreaSize"
						placeholder="Built Up Area Size(sq.ft)" autocomplete="on">
				</div>
				<div class="viholder"> 
					<label class="rholder">Net Built Up Area Size</label> <input type="text"
						class="form-control form-control-sm textholder"
						name="" id="netbuitUpAreaSize"
						placeholder="Net Built Up Area Size" autocomplete="on">
				</div>
				<div class="viholder">
					<label class="rholder">Pool</label> <select
						class="form-control form-control-sm textholder"
						name="valuationReport.pool" id="pool">
						<option value="Yes">Yes</option>
						<option value="No" selected>No</option>
					</select>
				</div>
				<div class="viholder">
					<label class="rholder">Gym</label> <select
						class="form-control form-control-sm textholder"
						name="valuationReport.gym" id="gym">
						<option value="Yes">Yes</option>
						<option value="No" selected>No</option>
					</select>
				</div>
				<div class="viholder">
					<label class="rholder">Play Area</label> <select
						class="form-control form-control-sm textholder"
						name="valuationReport.playarea" id="playarea">
						<option value="Yes">Yes</option>
						<option value="No" selected>No</option>
					</select>
				</div>
				<div class="viholder">
					<label class="rholder" style="line-height: 16px">Other
						Community Facilities</label> <input type="text"
						class="form-control form-control-sm textholder"
						name="valuationReport.otherComFacilities" id="otherfac"
						placeholder="Other Community Facilities" autocomplete="on">
				</div>
				<div class="viholder">
					<label class="rholder">Completion Status</label> <select
						class="form-control form-control-sm textholder"
						name="valuationReport.completionStatus" id="">
						<option value="Ready" selected>Ready</option>
						<option value="Not Ready">Not Ready</option>
					</select>
				</div>
				<div class="viholder">
					<label class="rholder">Occupancy Status</label> <select
						class="form-control form-control-sm textholder"
						name="valuationReport.occupancyStatus" id="">
						<option value="" hidden>--- Select ---</option>
						<option value="Occupied">Owner Occupied</option>
						<option value="Rented" selected>Rented</option>
						<option value="Vacant">Vacant</option>
					</select>
				</div>
				<div class="viholder">
					<label class="rholder">No of Bedrooms</label> <select
						class="form-control form-control-sm textholder"
						name="valuationReport.noOfbedrooms" id="bedroom">
						<option value="" hidden>--- Select ---</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
						<option value="10">10</option>
					</select>
				</div>
				<div class="viholder">
					<label class="rholder">No of Bathrooms</label> <select
						class="form-control form-control-sm textholder"
						name="valuationReport.noOfbathrooms" id="bathroom">
						<option value="" hidden>--- Select ---</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
						<option value="10">10</option>
					</select>
				</div>
				<div class="viholder">
					<label class="rholder">Full Building Floors</label> <select
						class="form-control form-control-sm textholder"
						name="valuationReport.fullBulFloors" id="fullBulFloors">
						<option value="" hidden>--- Select ---</option>
						<option value="Ground + 1 Floor">Ground + 1 Floor</option>
						<option value="Ground + 2 Floor">Ground + 2 Floor</option>
						<option value="Ground + 3 Floor">Ground + 3 Floor</option>
						<option value="Ground + 4 Floor">Ground + 4 Floor</option>
						<option value="Ground + 5 Floor">Ground + 5 Floor</option>
						<option value="Ground + 6 Floor">Ground + 6 Floor</option>
						<option value="Ground + 7 Floor">Ground + 7 Floor</option>
						<option value="Ground + 8 Floor">Ground + 8 Floor</option>
						<option value="Ground + 9 Floor">Ground + 9 Floor</option>
						<option value="Ground + 10 Floor">Ground + 10 Floor</option>
						<option value="Ground + 11 Floor">Ground + 11 Floor</option>
						<option value="Ground + 12 Floor">Ground + 12 Floor</option>
						<option value="Ground + 13 Floor">Ground + 13 Floor</option>
						<option value="Ground + 14 Floor">Ground + 14 Floor</option>
						<option value="Ground + 15 Floor">Ground + 15 Floor</option>
					</select>
				</div>
				<div class="viholder">
					<label class="rholder">Parking</label> <select
						class="form-control form-control-sm textholder"
						name="valuationReport.parkingBays" id="parking">
						<option value="" hidden>--- Select ---</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
						<option value="10">10</option>
					</select>
				</div>
				<div class="viholder">
					<label class="rholder">View</label> <select
						class="form-control form-control-sm textholder"
						name="valuationReport.view" id="view">
						<option value="Park View">Park View</option>
						<option value="Sea View">Sea View</option>
						<option value="Marina View">Marina View</option>
						<option value="Community View" selected>Community View</option>
						<option value="Pool View">Pool View</option>
						<option value="Mountain View">Mountain View</option>
						<option value="Lake View">Lake View</option>
						<option value="Partial Park View">Partial Park View</option>
						<option value="Partial Sea View">Partial Sea View</option>
						<option value="Partial Marina View">Partial Marina View</option>
						<option value="Partial Pool View">Partial Pool View</option>
						<option value="Partial Mountain View">Partial Mountain View</option>
						<option value="Partial Lake View">Partial Lake View</option>
						<option value="Substandard View">Substandard View</option>
						<option value="Poor View">Poor View</option>
					</select>
				</div>
				<div class="viholder">
					<label class="rholder">Landscaping</label> <select
						class="form-control form-control-sm textholder"
						name="valuationReport.landScaping" id="landscape">
						<option value="Yes">Yes</option>
						<option value="No" selected>No</option>
						<option value="Semi-Landscape">Semi-Landscape</option>
					</select>
				</div>
				<div class="viholder">
					<label class="rholder">Fridge</label> <select
						class="form-control form-control-sm textholder"
						name="valuationReport.fridge" id="">
						<option value="Yes">Yes</option>
						<option value="No" selected>No</option>
					</select>
				</div>

				<div class="viholder">
					<label class="rholder">Oven</label> <select
						class="form-control form-control-sm textholder"
						name="valuationReport.oven" id="">
						<option value="Yes">Yes</option>
						<option value="No" selected>No</option>
					</select>
				</div>
				<div class="viholder">
					<label class="rholder">Cooker</label> <select
						class="form-control form-control-sm textholder"
						name="valuationReport.cooker" id="">
						<option value="Yes">Yes</option>
						<option value="No" selected>No</option>
					</select>
				</div>
				<div class="viholder">
					<label class="rholder">AC Type</label> <select
						class="form-control form-control-sm textholder"
						name="valuationReport.acType" id="">
						<option value="Window AC">Window AC</option>
						<option value="Split Units AC">Split Units AC</option>
						<option value="Central Chiller">Central Chiller</option>
					</select>
				</div>
				<div class="viholder">
					<label class="rholder">Washing Machine</label> <select
						class="form-control form-control-sm textholder"
						name="valuationReport.washingMachine" id="">
						<option value="Yes">Yes</option>
						<option value="No" selected>No</option>
					</select>
				</div>
				<div class="viholder">
					<label class="rholder">Furnished</label> <select
						class="form-control form-control-sm textholder"
						name="valuationReport.furnished" id="furnished">
						<option value="Yes" selected>Yes</option>
						<option value="No">No</option>
						<option value="Semi-Furnished">Semi-Furnished</option>
					</select>
				</div>
				<div class="viholder">
					<label class="rholder">White Goods</label> <select
						class="form-control form-control-sm textholder"
						name="" id="whitegoods">
						<option value="Yes">Yes</option>
						<option value="No" selected>No</option>
					</select>
				</div>
				<div class="viholder">
					<label class="rholder">Utilities Connected</label> <select
						class="form-control form-control-sm textholder"
						name="valuationReport.utilityConnected" id="utilities">
						<option value="Yes">Yes</option>
						<option value="No" selected>No</option>
					</select>
				</div>
				<div class="viholder">
					<label class="rholder">Maximum Age</label> <input type="text"
						class="form-control form-control-sm textholder"
						name="" id="maxAge"
						placeholder="Maximum Age" autocomplete="on">
				</div>
				<div class="viholder">
					<label class="rholder">Parking Price</label> <input type="text"
						class="form-control form-control-sm textholder"
						name="" id="parkingPrice"
						placeholder="Parking Price" autocomplete="on">
				</div>
				<div class="viholder">
					<label class="rholder">Pool Price</label> <input type="text"
						class="form-control form-control-sm textholder"
						name="" id="poolPrice"
						placeholder="Pool Price" autocomplete="on">
				</div>
				<div class="viholder">
					<label class="rholder">Landscape Price</label> <input type="text"
						class="form-control form-control-sm textholder"
						name="" id="landscapePrice"
						placeholder="Landscape Price" autocomplete="on">
				</div>
				<div class="viholder">
					<label class="rholder" style="line-height:16px">Utilities Connected Price</label> <input type="text"
						class="form-control form-control-sm textholder"
						name="" id="utiliesPrice"
						placeholder="Utilities Connected Price" autocomplete="on">
				</div>
				<div class="viholder">
					<label class="rholder">WhiteGoods Price</label> <input type="text"
						class="form-control form-control-sm textholder"
						name="" id="whitegoodsPrice"
						placeholder="WhiteGoods Price" autocomplete="on">
				</div>
				<div class="valuationholder adjustTop" style="height:45px">
					<div class="savebtn" id="inspect1prv">Previous</div>
					<div class="savebtn" id="inspect1nxt">Next</div>
				</div>
			</div>
			<div class="form-group inspecting2">
				<div class="bed" style="width: 30%; float: left; margin-right: 2%">
					<div class="valuationholder">
						<label class="labelholder"
							style="width: 22%; color: forestgreen; text-align: center"><b>Bedroom</b></label>
						<label class="labelholder"
							style="width: 30%; color: forestgreen; text-align: center"><b>Floors</b></label>
						<label class="labelholder"
							style="width: 30%; color: forestgreen; text-align: right"><b>Upgrades</b></label>
					</div>
					<div class="valuationholder" id="1">
						<input type="number"
							style="width: 22% !important; text-align: center;"
							class="form-control form-control-sm textholder" name="" id=""
							value="1" readonly autocomplete="on"> <select
							class="form-control form-control-sm textholder"
							style="width: 30% !important; margin-left: 16px" name="" id="">
							<option value="Ground">Ground</option>
							<option value="First">First</option>
							<option value="Second">Second</option>
						</select> <select class="form-control form-control-sm textholder"
							style="width: 30% !important; margin-left: 21px" name="" id="">
							<option value="Standard">Standard</option>
							<option value="Upgraded">Upgraded</option>
						</select>
					</div>
					<div class="valuationholder" id="2">
						<input type="number"
							style="width: 22% !important; text-align: center;"
							class="form-control form-control-sm textholder" name="" id=""
							value="2" readonly autocomplete="on"> <select
							class="form-control form-control-sm textholder"
							style="width: 30% !important; margin-left: 16px" name="" id="">
							<option value="Ground">Ground</option>
							<option value="First">First</option>
							<option value="Second">Second</option>
						</select> <select class="form-control form-control-sm textholder"
							style="width: 30% !important; margin-left: 21px" name="" id="">
							<option value="Standard">Standard</option>
							<option value="Upgraded">Upgraded</option>
						</select>
					</div>
					<div class="valuationholder" id="3">
						<input type="number"
							style="width: 22% !important; text-align: center;"
							class="form-control form-control-sm textholder" name="" id=""
							value="3" readonly autocomplete="on"> <select
							class="form-control form-control-sm textholder"
							style="width: 30% !important; margin-left: 16px" name="" id="">
							<option value="Ground">Ground</option>
							<option value="First">First</option>
							<option value="Second">Second</option>
						</select> <select class="form-control form-control-sm textholder"
							style="width: 30% !important; margin-left: 21px" name="" id="">
							<option value="Standard">Standard</option>
							<option value="Upgraded">Upgraded</option>
						</select>
					</div>
					<div class="valuationholder" id="4">
						<input type="number"
							style="width: 22% !important; text-align: center;"
							class="form-control form-control-sm textholder" name="" id=""
							value="4" readonly autocomplete="on"> <select
							class="form-control form-control-sm textholder"
							style="width: 30% !important; margin-left: 16px" name="" id="">
							<option value="Ground">Ground</option>
							<option value="First">First</option>
							<option value="Second">Second</option>
						</select> <select class="form-control form-control-sm textholder"
							style="width: 30% !important; margin-left: 21px" name="" id="">
							<option value="Standard">Standard</option>
							<option value="Upgraded">Upgraded</option>
						</select>
					</div>
					<div class="valuationholder" id="5">
						<input type="number"
							style="width: 22% !important; text-align: center;"
							class="form-control form-control-sm textholder" name="" id=""
							value="5" readonly autocomplete="on"> <select
							class="form-control form-control-sm textholder"
							style="width: 30% !important; margin-left: 16px" name="" id="">
							<option value="Ground">Ground</option>
							<option value="First">First</option>
							<option value="Second">Second</option>
						</select> <select class="form-control form-control-sm textholder"
							style="width: 30% !important; margin-left: 21px" name="" id="">
							<option value="Standard">Standard</option>
							<option value="Upgraded">Upgraded</option>
						</select>
					</div>
					<div class="valuationholder" id="6">
						<input type="number"
							style="width: 22% !important; text-align: center;"
							class="form-control form-control-sm textholder" name="" id=""
							value="6" readonly autocomplete="on"> <select
							class="form-control form-control-sm textholder"
							style="width: 30% !important; margin-left: 16px" name="" id="">
							<option value="Ground">Ground</option>
							<option value="First">First</option>
							<option value="Second">Second</option>
						</select> <select class="form-control form-control-sm textholder"
							style="width: 30% !important; margin-left: 21px" name="" id="">
							<option value="Standard">Standard</option>
							<option value="Upgraded">Upgraded</option>
						</select>
					</div>
					<div class="valuationholder" id="7">
						<input type="number"
							style="width: 22% !important; text-align: center;"
							class="form-control form-control-sm textholder" name="" id=""
							value="7" readonly autocomplete="on"> <select
							class="form-control form-control-sm textholder"
							style="width: 30% !important; margin-left: 16px" name="" id="">
							<option value="Ground">Ground</option>
							<option value="First">First</option>
							<option value="Second">Second</option>
						</select> <select class="form-control form-control-sm textholder"
							style="width: 30% !important; margin-left: 21px" name="" id="">
							<option value="Standard">Standard</option>
							<option value="Upgraded">Upgraded</option>
						</select>
					</div>
					<div class="valuationholder" id="8">
						<input type="number"
							style="width: 22% !important; text-align: center;"
							class="form-control form-control-sm textholder" name="" id=""
							value="8" readonly autocomplete="on"> <select
							class="form-control form-control-sm textholder"
							style="width: 30% !important; margin-left: 16px" name="" id="">
							<option value="Ground">Ground</option>
							<option value="First">First</option>
							<option value="Second">Second</option>
						</select> <select class="form-control form-control-sm textholder"
							style="width: 30% !important; margin-left: 21px" name="" id="">
							<option value="Standard">Standard</option>
							<option value="Upgraded">Upgraded</option>
						</select>
					</div>
					<div class="valuationholder" id="9">
						<input type="number"
							style="width: 22% !important; text-align: center;"
							class="form-control form-control-sm textholder" name="" id=""
							value="9" readonly autocomplete="on"> <select
							class="form-control form-control-sm textholder"
							style="width: 30% !important; margin-left: 16px" name="" id="">
							<option value="Ground">Ground</option>
							<option value="First">First</option>
							<option value="Second">Second</option>
						</select> <select class="form-control form-control-sm textholder"
							style="width: 30% !important; margin-left: 21px" name="" id="">
							<option value="Standard">Standard</option>
							<option value="Upgraded">Upgraded</option>
						</select>
					</div>
					<div class="valuationholder" id="10">
						<input type="number"
							style="width: 22% !important; text-align: center;"
							class="form-control form-control-sm textholder" name="" id=""
							value="10" readonly autocomplete="on"> <select
							class="form-control form-control-sm textholder"
							style="width: 30% !important; margin-left: 16px" name="" id="">
							<option value="Ground">Ground</option>
							<option value="First">First</option>
							<option value="Second">Second</option>
						</select> <select class="form-control form-control-sm textholder"
							style="width: 30% !important; margin-left: 21px" name="" id="">
							<option value="Standard">Standard</option>
							<option value="Upgraded">Upgraded</option>
						</select>
					</div>
				</div>
				<div class="bath" style="width: 30%; float: left; margin-right: 2%">
					<div class="valuationholder" id="1ba">
						<label class="labelholder"
							style="width: 22%; color: forestgreen; text-align: center"><b>Bathroom</b></label>
						<label class="labelholder"
							style="width: 30%; color: forestgreen; text-align: center"><b>Floors</b></label>
						<label class="labelholder"
							style="width: 30%; color: forestgreen; text-align: right"><b>Upgrades</b></label>
					</div>
					<div class="valuationholder">
						<input type="number"
							style="width: 22% !important; text-align: center;"
							class="form-control form-control-sm textholder" name="" id=""
							value="1" readonly autocomplete="on"> <select
							class="form-control form-control-sm textholder"
							style="width: 30% !important; margin-left: 16px" name="" id="">
							<option value="Ground">Ground</option>
							<option value="First">First</option>
							<option value="Second">Second</option>
						</select> <select class="form-control form-control-sm textholder"
							style="width: 30% !important; margin-left: 21px" name="" id="">
							<option value="Standard">Standard</option>
							<option value="Upgraded">Upgraded</option>
						</select>
					</div>
					<div class="valuationholder" id="2ba">
						<input type="number"
							style="width: 22% !important; text-align: center;"
							class="form-control form-control-sm textholder" name="" id=""
							value="2" readonly autocomplete="on"> <select
							class="form-control form-control-sm textholder"
							style="width: 30% !important; margin-left: 16px" name="" id="">
							<option value="Ground">Ground</option>
							<option value="First">First</option>
							<option value="Second">Second</option>
						</select> <select class="form-control form-control-sm textholder"
							style="width: 30% !important; margin-left: 21px" name="" id="">
							<option value="Standard">Standard</option>
							<option value="Upgraded">Upgraded</option>
						</select>
					</div>
					<div class="valuationholder" id="3ba">
						<input type="number"
							style="width: 22% !important; text-align: center;"
							class="form-control form-control-sm textholder" name="" id=""
							value="3" readonly autocomplete="on"> <select
							class="form-control form-control-sm textholder"
							style="width: 30% !important; margin-left: 16px" name="" id="">
							<option value="Ground">Ground</option>
							<option value="First">First</option>
							<option value="Second">Second</option>
						</select> <select class="form-control form-control-sm textholder"
							style="width: 30% !important; margin-left: 21px" name="" id="">
							<option value="Standard">Standard</option>
							<option value="Upgraded">Upgraded</option>
						</select>
					</div>
					<div class="valuationholder" id="4ba">
						<input type="number"
							style="width: 22% !important; text-align: center;"
							class="form-control form-control-sm textholder" name="" id=""
							value="4" readonly autocomplete="on"> <select
							class="form-control form-control-sm textholder"
							style="width: 30% !important; margin-left: 16px" name="" id="">
							<option value="Ground">Ground</option>
							<option value="First">First</option>
							<option value="Second">Second</option>
						</select> <select class="form-control form-control-sm textholder"
							style="width: 30% !important; margin-left: 21px" name="" id="">
							<option value="Standard">Standard</option>
							<option value="Upgraded">Upgraded</option>
						</select>
					</div>
					<div class="valuationholder" id="5ba">
						<input type="number"
							style="width: 22% !important; text-align: center;"
							class="form-control form-control-sm textholder" name="" id=""
							value="5" readonly autocomplete="on"> <select
							class="form-control form-control-sm textholder"
							style="width: 30% !important; margin-left: 16px" name="" id="">
							<option value="Ground">Ground</option>
							<option value="First">First</option>
							<option value="Second">Second</option>
						</select> <select class="form-control form-control-sm textholder"
							style="width: 30% !important; margin-left: 21px" name="" id="">
							<option value="Standard">Standard</option>
							<option value="Upgraded">Upgraded</option>
						</select>
					</div>
					<div class="valuationholder" id="6ba">
						<input type="number"
							style="width: 22% !important; text-align: center;"
							class="form-control form-control-sm textholder" name="" id=""
							value="6" readonly autocomplete="on"> <select
							class="form-control form-control-sm textholder"
							style="width: 30% !important; margin-left: 16px" name="" id="">
							<option value="Ground">Ground</option>
							<option value="First">First</option>
							<option value="Second">Second</option>
						</select> <select class="form-control form-control-sm textholder"
							style="width: 30% !important; margin-left: 21px" name="" id="">
							<option value="Standard">Standard</option>
							<option value="Upgraded">Upgraded</option>
						</select>
					</div>
					<div class="valuationholder" id="7ba">
						<input type="number"
							style="width: 22% !important; text-align: center;"
							class="form-control form-control-sm textholder" name="" id=""
							value="7" readonly autocomplete="on"> <select
							class="form-control form-control-sm textholder"
							style="width: 30% !important; margin-left: 16px" name="" id="">
							<option value="Ground">Ground</option>
							<option value="First">First</option>
							<option value="Second">Second</option>
						</select> <select class="form-control form-control-sm textholder"
							style="width: 30% !important; margin-left: 21px" name="" id="">
							<option value="Standard">Standard</option>
							<option value="Upgraded">Upgraded</option>
						</select>
					</div>
					<div class="valuationholder" id="8ba">
						<input type="number"
							style="width: 22% !important; text-align: center;"
							class="form-control form-control-sm textholder" name="" id=""
							value="8" readonly autocomplete="on"> <select
							class="form-control form-control-sm textholder"
							style="width: 30% !important; margin-left: 16px" name="" id="">
							<option value="Ground">Ground</option>
							<option value="First">First</option>
							<option value="Second">Second</option>
						</select> <select class="form-control form-control-sm textholder"
							style="width: 30% !important; margin-left: 21px" name="" id="">
							<option value="Standard">Standard</option>
							<option value="Upgraded">Upgraded</option>
						</select>
					</div>
					<div class="valuationholder" id="9ba">
						<input type="number"
							style="width: 22% !important; text-align: center;"
							class="form-control form-control-sm textholder" name="" id=""
							value="9" readonly autocomplete="on"> <select
							class="form-control form-control-sm textholder"
							style="width: 30% !important; margin-left: 16px" name="" id="">
							<option value="Ground">Ground</option>
							<option value="First">First</option>
							<option value="Second">Second</option>
						</select> <select class="form-control form-control-sm textholder"
							style="width: 30% !important; margin-left: 21px" name="" id="">
							<option value="Standard">Standard</option>
							<option value="Upgraded">Upgraded</option>
						</select>
					</div>
					<div class="valuationholder" id="10ba">
						<input type="number"
							style="width: 22% !important; text-align: center;"
							class="form-control form-control-sm textholder" name="" id=""
							value="10" readonly autocomplete="on"> <select
							class="form-control form-control-sm textholder"
							style="width: 30% !important; margin-left: 16px" name="" id="">
							<option value="Ground">Ground</option>
							<option value="First">First</option>
							<option value="Second">Second</option>
						</select> <select class="form-control form-control-sm textholder"
							style="width: 30% !important; margin-left: 21px" name="" id="">
							<option value="Standard">Standard</option>
							<option value="Upgraded">Upgraded</option>
						</select>
					</div>
				</div>
				<div class="third" style="width: 30%; float: left; margin-right: 0%">
					<div class="valuationholder">
						<label class="labelholder"
							style="width: 21%; color: forestgreen; text-align: center"><b>Others</b></label>
						<label class="labelholder"
							style="width: 17%; color: forestgreen; text-align: center"><b>Count</b></label>
						<label class="labelholder"
							style="width: 25%; color: forestgreen; text-align: center"><b>Floors</b></label>
						<label class="labelholder"
							style="width: 29%; color: forestgreen; text-align: right"><b>Upgrades</b></label>
					</div>
					<div class="valuationholder">
						<label class="labelholder" style="width: 22%;"><b>Kitchen</b></label>
						<input type="number"
							style="width: 16% !important; text-align: center;"
							class="form-control form-control-sm textholder" name=""
							id="kitcount" value="" autocomplete="on"> <select
							class="form-control form-control-sm textholder"
							style="width: 25% !important; margin-left: 10px" name=""
							id="kitfloor">
							<option value="Ground">Ground</option>
							<option value="First">First</option>
							<option value="Second">Second</option>
						</select> <select class="form-control form-control-sm textholder"
							style="width: 29% !important; margin-left: 13px" name=""
							id="kitupg">
							<option value="Standard">Standard</option>
							<option value="Upgraded">Upgraded</option>
						</select>
					</div>
					<div class="valuationholder">
						<label class="labelholder" style="width: 22%;"><b>Living
								Area</b></label> <input type="number"
							style="width: 16% !important; text-align: center;"
							class="form-control form-control-sm textholder" name="" id="la"
							value="" autocomplete="on"> <select
							class="form-control form-control-sm textholder"
							style="width: 25% !important; margin-left: 10px" name="" id="laf">
							<option value="Ground">Ground</option>
							<option value="First">First</option>
							<option value="Second">Second</option>
						</select> <select class="form-control form-control-sm textholder"
							style="width: 29% !important; margin-left: 13px" name="" id="lau">
							<option value="Standard">Standard</option>
							<option value="Upgraded">Upgraded</option>
						</select>
					</div>
					<div class="valuationholder">
						<label class="labelholder" style="width: 22%;"><b>Dining
								Area</b></label> <input type="number"
							style="width: 16% !important; text-align: center;"
							class="form-control form-control-sm textholder" name="" id="da"
							value="" autocomplete="on"> <select
							class="form-control form-control-sm textholder"
							style="width: 25% !important; margin-left: 10px" name="" id="daf">
							<option value="Ground">Ground</option>
							<option value="First">First</option>
							<option value="Second">Second</option>
						</select> <select class="form-control form-control-sm textholder"
							style="width: 29% !important; margin-left: 13px" name="" id="dau">
							<option value="Standard">Standard</option>
							<option value="Upgraded">Upgraded</option>
						</select>
					</div>
					<div class="valuationholder">
						<label class="labelholder" style="width: 22%;"><b>Balcony</b></label>
						<input type="number"
							style="width: 16% !important; text-align: center;"
							class="form-control form-control-sm textholder" name="" id="ba"
							value="" autocomplete="on"> <select
							class="form-control form-control-sm textholder"
							style="width: 25% !important; margin-left: 10px" name="" id="baf">
							<option value="Ground">Ground</option>
							<option value="First">First</option>
							<option value="Second">Second</option>
						</select> <select class="form-control form-control-sm textholder"
							style="width: 29% !important; margin-left: 13px" name="" id="bau">
							<option value="Standard">Standard</option>
							<option value="Upgraded">Upgraded</option>
						</select>
					</div>
					<div class="valuationholder" style="position:relative;top:30px">
						<label class="labelholder" style="width: 42%;"><b> OverAll Upgrades</b></label>
						<select class="form-control form-control-sm textholder" style="width:55% !important; text-align: center" id="overupg">
							<option value="" hidden>--- Select ---</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
							<option value="6">6</option>
							<option value="7">7</option>
							<option value="8">8</option>
							<option value="9">9</option>
							<option value="10">10</option>
						</select>
					</div>
				</div>
				<div class="valuationholder adjustTop">
					<div class="savebtn" id="inspect2prv">Previous</div>
					<div class="savebtn" id="inspect2nxt">Next</div>
				</div>
			</div>
			<div class="form-group documents">
				<div class="valuationholder">
					<input type="text" class="labelholder"
						style="line-height: 25px !important; width: 15%; border: none; background: none"
						id="tdl" name="documents[0].description" value="Title Deed">
					<label for="titledeed" class="custom-file-upload"> <i
						class="fa fa-cloud-upload"></i>Upload
					</label> <input id="titledeed" name='files[0]' type="file"
						style="display: none;">

				</div>
				<div class="valuationholder" style="margin-top: 10px">
					<input type="text" class="labelholder"
						style="line-height: 25px !important; width: 15%; border: none; background: none"
						id="fpl" name="documents[1].description" value="Floor Plan">
					<label for="floorplan" class="custom-file-upload"> <i
						class="fa fa-cloud-upload"></i>Upload
					</label> <input id="floorplan" name='files[1]' type="file"
						style="display: none;">
				</div>
				<div class="valuationholder" style="margin-top: 10px">
					<input type="text" class="labelholder"
						style="line-height: 25px !important; width: 15%; border: none; background: none"
						id="apl" name="documents[2].description" value="Affection Plan">
					<label for="affectionplan" class="custom-file-upload"> <i
						class="fa fa-cloud-upload"></i>Upload
					</label> <input id="affectionplan" name='files[2]' type="file"
						style="display: none;">
				</div>
				<div class="valuationholder" style="margin-top: 10px">
					<input type="text" class="labelholder"
						style="line-height: 25px !important; width: 15%; border: none; background: none"
						id="lll" name="documents[3].description"
						value="Land Lease Agreement"> <label for="landleaseag"
						class="custom-file-upload"> <i class="fa fa-cloud-upload"></i>Upload
					</label> <input id="landleaseag" name='files[3]' type="file"
						style="display: none;">
				</div>
				<div class="valuationholder" style="margin-top: 10px">
					<input type="text" class="labelholder"
						style="line-height: 25px !important; width: 15%; border: none; background: none"
						id="sl" name="documents[4].description" value="SPA"> <label
						for="spa" class="custom-file-upload"> <i
						class="fa fa-cloud-upload"></i>Upload
					</label> <input id="spa" name='files[4]' type="file" style="display: none;">
				</div>
				<div class="valuationholder adjustTop" style="margin-top: 20px">
					<div class="savebtn" id="docprv">Previous</div>
					<div class="savebtn" id="docnxt">Next</div>
				</div>
				<div class="valuationholder" style="margin-top: 20px">
					<div style="color: red">(Note: If neccessary documents are
						not received , please ask the client formally by email)</div>
				</div>
			</div>
			<div class="form-group spl-assumption">
				<div class="valuationholder">
					<label class="labelholder" style="width: 120px !important">Special
						Assumption</label>
					<textarea type="text"
						style="height: 385px !important; width: 88% !important"
						class="form-control form-control-sm textholder"
						name="valuationReport.specialAssumption" id="assump"
						autocomplete="on"></textarea>
				</div>
				<div class="valuationholder adjustTop" style="margin-top: 371px">
					<div class="savebtn" id="splprv">Previous</div>
					<div class="savebtn" id="splnxt">Next</div>
				</div>
			</div>
			<div class="form-group extent">
				<div class="valuationholder">
					<label class="labelholder" style="width: 134px !important">Extent Of Investigation</label>
					<textarea type="text"
						style="height: 385px !important; width: 86% !important"
						class="form-control form-control-sm textholder"
						name="" id="" autocomplete="on"></textarea>
				</div>
				<div class="valuationholder adjustTop" style="margin-top: 371px">
					<div class="savebtn" id="extprv">Previous</div>
					<div class="savebtn" id="extnxt">Next</div>
				</div>
			</div>
			<div class="form-group market-summary">
				<div class="valuationholder">
					<label class="labelholder" style="width: 115px !important">Market
						Summary</label>
					<textarea type="text"
						style="height: 385px !important; width: 88% !important"
						class="form-control form-control-sm textholder"
						name="valuationReport.marketSummary" id="" autocomplete="on"></textarea>
				</div>
				<div class="valuationholder adjustTop" style="margin-top: 371px">
					<div class="savebtn" id="mrtprv">Previous</div>
					<div class="savebtn" id="mrtnxt">Next</div>
				</div>
			</div>
			<%@include file="soldcalcs.jsp"%>
			<%@include file="listingscalcs.jsp"%>
						<%@include file="mastercalcs.jsp"%>
			<div class="form-group vsummary">
				<div class="valuationholder">
					<label class="labelholder" style="width:28%">Transaction Price</label> <input
						type="text" class="form-control form-control-sm textholder"
						name="" id=""
						placeholder="Transaction Price" autocomplete="on">
				</div>
				<div class="valuationholder">
					<label class="labelholder" style="width:28%">Estimated Market Value as per Sold Transactions</label> <input type="text"
						class="form-control form-control-sm textholder"
						name="" id="soldTransac"
						placeholder="Estimated Market Value as per Sold Transactions" autocomplete="off">
				</div>
				<div class="valuationholder">
					<label class="labelholder" style="width:28%">Estimated Market Value as per Previous Valuations</label> <input type="text"
						class="form-control form-control-sm textholder"
						name="" id=""
						placeholder="Estimated Market Value as per Previous Valuations" autocomplete="off">
				</div>
				<div class="valuationholder">
					<label class="labelholder" style="width:28%">Estimated Market Value as per Listings Transactions</label> <input type="text"
						class="form-control form-control-sm textholder"
						name="" id="listingsTransac"
						placeholder="Estimated Market Value as per Listings Transactions" autocomplete="off">
				</div>
<!-- 				<div class="valuationholder" style="margin-top: 20px"> -->
<!-- 					<div class="savebtn" id="vsumprev">Previous</div> -->
<!-- 					<div class="savebtn" id="vsumnext">Next</div> -->
<!-- 				</div> -->
			</div>
			<br>
			<div class="form-group payment" style="margin-top: -15px;">
				<div class="valuationholder">
					<label class="labelholder">Invoice Number</label> <input
						type="text" class="form-control form-control-sm textholder"
						name="" id=""
						placeholder="Invoice Number" autocomplete="on">
				</div>
				<div class="valuationholder">
					<label class="labelholder">Invoice Date</label>
					<div class="input-group textholder">
						<div class="input-group-prepend">
							<div class="input-group-text">
								<i class="fas fa-calendar"></i>
							</div>
						</div>
						<input type="text" class="form-control form-control-sm datepicker" style="height: 27px !important;font-size: 12px !important; font-family: sans-serif;"
							name="" id="">
					</div>
				</div>
				<div class="valuationholder">
					<label class="labelholder">Payment Date</label>
					<div class="input-group textholder">
						<div class="input-group-prepend">
							<div class="input-group-text">
								<i class="fas fa-calendar"></i>
							</div>
						</div>
						<input type="text" class="form-control form-control-sm datepicker" style="height: 27px !important;font-size: 12px !important; font-family: sans-serif;"
							name="" id="">
					</div>
				</div>
				<div class="valuationholder">
					<label class="labelholder">Payment Receive Date</label>
					<div class="input-group textholder">
						<div class="input-group-prepend">
							<div class="input-group-text">
								<i class="fas fa-calendar"></i>
							</div>
						</div>
						<input type="text" class="form-control form-control-sm datepicker" style="height: 27px !important;font-size: 12px !important; font-family: sans-serif;"
							name="" id="">
					</div>
				</div>
				<div class="valuationholder" style="margin-top: 20px">
					<div class="savebtn" id="submitprv">Previous</div>
					<button type="submit" id="submitnxt" class="savebtn">Save</button>
				</div>
			</div>
			<br>
			<div class="form-group submitting" style="margin-top: -30px;">
				<div class="valuationholder">
					<label class="labelholder">Valuation Adjustments</label> <input
						type="text" class="form-control form-control-sm textholder"
						name="valuationReport.valAdjustment" id="valadjustments"
						placeholder="Valuation Adjustments" autocomplete="on">
				</div>
				<div class="valuationholder">
					<label class="labelholder">MV Of Land/Sq</label> <input
						type="text" class="form-control form-control-sm textholder"
						name="" id=""
						placeholder="MV Of Land/Sq" autocomplete="on">
				</div>
				<div class="valuationholder">
					<label class="labelholder">Report Acceptance Date</label>
					<div class="input-group textholder">
						<div class="input-group-prepend">
							<div class="input-group-text">
								<i class="fas fa-calendar"></i>
							</div>
						</div>
						<input type="text" class="form-control form-control-sm datepicker" style="height: 27px !important;font-size: 12px !important; font-family: sans-serif;"
							name="" id="">
					</div>
				</div>
				<div class="valuationholder">
					<label class="labelholder">Market Value</label> <input type="text"
						class="form-control form-control-sm textholder"
						name="valuationReport.marketValue" id="marketValue"
						placeholder="Market Value" autocomplete="off">
				</div>
				<div class="valuationholder wordsec" style="height: 17px">
					<div class="word"
						style="position: relative; left: 221px; font-weight: 800; letter-spacing: 0.6px; font-size: 11px; color: #6BB245; text-transform: capitalize; top: -2px;"></div>
				</div>
				<div class="valuationholder">
					<label class="labelholder">Market Value Rate(Per Square
						Feet)</label> <input type="text"
						class="form-control form-control-sm textholder"
						name="valuationReport.marketValueRate" id="marketValueRate"
						placeholder="Market Value Rate" autocomplete="off">
				</div>
				<div class="valuationholder">
					<label class="labelholder">Market Rent</label> <input type="text"
						class="form-control form-control-sm textholder"
						name="valuationReport.marketRent" id="marketrent"
						placeholder="Market Rent" autocomplete="off">
				</div>
				<div class="valuationholder" style="margin-top: 20px">
					<div class="savebtn" id="submitprv">Previous</div>
					<button type="submit" id="submitnxt" class="savebtn">Next</button>
				</div>
			</div>
			<br>
			<input type="hidden" id="row" name="" value="${noofrows}" />
			<input type="hidden" id="propertyAddress"
				name="valuationReport.propertyAddress" value="" />
			<input type="hidden" id="bulComFacilities"
				name="valuationReport.bulComFacilities" value="" />
			<input type="hidden" id="groundFloor"
				name="valuationReport.groundFloor" value="" />
			<input type="hidden" id="firstFloor"
				name="valuationReport.firstFloor" value="" />
			<input type="hidden" id="secondFloor"
				name="valuationReport.secondFloor" value="" />
			<input type="hidden" id="upgrades" name="valuationReport.upgrades"
				value="" />

		</form:form>

	</div>
</div>
<%@include file="footer.jsp"%>
<script
	src="resources/assets/bundles/bootstrap-daterangepicker/daterangepicker.js"></script>
<script
	src="resources/assets/bundles/bootstrap-timepicker/js/bootstrap-timepicker.min.js"></script>
<script language="JavaScript"
	src="http://www.geoplugin.net/javascript.gp" type="text/javascript"></script>
<script src="resources/assets/js/numbertoword.js"></script>
<script src="resources/assets/js/valuationform.js"></script>
<script src="resources/assets/js/soldcalcs.js"></script>
<script src="resources/assets/js/listingscalcs.js"></script>
<script src="resources/assets/js/mastercalcs.js"></script>
<script src="resources/assets/js/masterfilter.js"></script>
<script src="resources/assets/js/listingfilter.js"></script>
<script src="resources/assets/js/hideshow.js"></script>