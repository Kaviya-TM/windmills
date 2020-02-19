
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isELIgnored="false"%>
<link rel='shortcut icon' type='image/x-icon'
	href='resources/assets/img/favicon.ico' />
<link rel="stylesheet" href="resources/assets/css/valuationform.css">
<link rel="stylesheet"
	href="resources/assets/bundles/bootstrap-daterangepicker/daterangepicker.css">
<link rel="stylesheet"
	href="resources/assets/bundles/bootstrap-timepicker/css/bootstrap-timepicker.min.css">
<link
	href="resources/assets/bundles/vendor/datepicker/daterangepicker.css"
	rel="stylesheet" media="all">

<div class="valuationform">
	<%@include file="header.jsp"%>
	<%@include file="sidebar.jsp"%>
	<div class="main-content"
		style="background: rgb(229, 231, 233) !important; overflow: scroll; overflow-x: hidden; margin-top: 70px; width: 100%; min-height: 530px !important">
		<div class="form-group">
			<button class="valbtn" id="receive">Receive Valuation</button>
			<!-- 		            	<button class="valbtn" id="conflict">Check Conflict Of Interest</button> -->
			<button class="valbtn" id="schedule">Schedule Inspection</button>
			<button class="valbtn" id="inspect">Inspect Property</button>
			<button class="valbtn" id="submit">Submit Valuation</button>
		</div>
		<form:form action="saveValuation" id="valuationform"
			modelAttribute="valuationreport">
			<div class="form-group receiving">
				<div class="vrholder">
					<label class="rholder">Windmills Reference</label> <input
						type="text" class="form-control form-control-sm textholder"
						name="windmillsRef" id="reference"
						placeholder="Windmills Reference" autocomplete="on">
				</div>
				<div class="vrholder">
					<label class="rholder">Client Reference</label> <input type="text"
						class="form-control form-control-sm textholder" name="clientRef"
						id="" placeholder="Client Reference" autocomplete="on">
				</div>
				<div class="vrholder">
					<label class="rholder">Client's Name</label> <select
						class="form-control form-control-sm textholder" name="clientName"
						id="clientname">
						<c:forEach items="${clientlist}" var="item">
							<option value="" hidden>-- Select Client Name ---</option>
							<option value="${item}">${item}</option>
						</c:forEach>
					</select>
				</div>
				<div class="vrholder">
					<label class="rholder">Client Customer Name</label> <input
						type="text" class="form-control form-control-sm textholder"
						name="clientCustomerName" id="cusname"
						placeholder="Client Customer Name" autocomplete="on">
				</div>
				<div class="vrholder">
					<label class="rholder">Owner Name</label> <input type="text"
						class="form-control form-control-sm textholder" name="ownerName"
						id="ownername" placeholder="Owner Name" autocomplete="on">
				</div>
				<div class="vrholder">
					<label class="rholder">Service Officer Name</label> <select
						class="form-control form-control-sm textholder"
						name="serviceOffName" id="">
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
						<input type="text" class="form-control form-control-sm datepicker"
							name="valInstrDate" id="valinsdate">
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
						<input type="text" class="form-control form-control-sm datepicker"
							name="" id="">
					</div>
				</div>
				<div class="vrholder">
					<label class="rholder">Property Valued</label>
					<!-- 					 <select -->
					<!-- 						class="form-control form-control-sm textholder" -->
					<!-- 						name="propertyValued" id="propertyvalued"> -->
					<!-- 						<option value="Commercial Land">Commercial Land</option> -->
					<!-- 						<option value="Commercial Building">Commercial Building</option> -->
					<!-- 						<option value="Commercial Office">Commercial Office</option> -->
					<!-- 						<option value="Commercial Shop">Commercial Shop</option> -->
					<!-- 						<option value="Industrial Land">Industrial Land</option> -->
					<!-- 						<option value="Industrial Factory">Industrial Factory</option> -->
					<!-- 						<option value="Industrial Labour Camp">Industrial Labour -->
					<!-- 							Camp</option> -->
					<!-- 						<option value="Industrial Warehouse">Industrial Warehouse</option> -->
					<!-- 						<option value="Agricultural Farm">Agricultural Farm</option> -->
					<!-- 						<option value="Agricultural Land">Agricultural Land</option> -->
					<!-- 						<option value="Mixed Use Land">Mixed Use Land</option> -->
					<!-- 						<option value="Mixed Use Building">Mixed Use Building</option> -->
					<!-- 						<option value="Residential Land">Residential Land</option> -->
					<!-- 						<option value="Residential Apartment">Residential -->
					<!-- 							Apartment</option> -->
					<!-- 						<option value="Residential Building">Residential Building</option> -->
					<!-- 						<option value="Residential Villa" selected>Residential -->
					<!-- 				Valuation Instructing Person			Villa</option> -->
					<!-- 						<option value="Residential Villa Compound">Residential -->
					<!-- 							Villa Compound</option> -->
					<!-- 						<option value="Residential Townhouse">Residential -->
					<!-- 							Townhouse</option> -->
					<!-- 						<option value="Trading Propery Mall">Trading Propery Mall</option> -->
					<!-- 						<option value="Trading Propery Shopping Complex">Trading -->
					<!-- 							Propery Shopping Complex</option> -->
					<!-- 						<option value="Trading Propery School">Trading Propery -->
					<!-- 							School</option> -->
					<!-- 						<option value="Trading Propery Hotel">Trading Propery -->
					<!-- 							Hotel</option> -->
					<!-- 						<option value="Trading Propery Hospital">Trading Propery -->
					<!-- 							Hospital</option> -->
					<!-- 					</select> -->
					<select class="form-control form-control-sm textholder"
						name="propertyValued" id="propertyvalued">
						<c:forEach items="${propertylist}" var="item">
							<option value="${item.propertyValued}">${item.propertyValued}</option>
						</c:forEach>
					</select>
				</div>
				<div class="vrholder">
					<label class="rholder">Tenure</label> <select
						class="form-control form-control-sm textholder" name="tenure"
						id="">
						<option value="" selected>Freehold</option>
						<option value="">Freehold(Emiratis)</option>
						<option value="">Freehold(Emiratis & GCC Citizens)</option>
						<option value="">Leasehold</option>

					</select>
				</div>
				<div class="vrholder">
					<label class="rholder">Unit Number</label> <input type="text"
						class="form-control form-control-sm textholder" name="unitNo"
						id="unitno" placeholder="Unit Number" autocomplete="on">
				</div>
				<div class="vrholder">
					<label class="rholder">Floor Number</label> <select
						class="form-control form-control-sm textholder" name="floorNo"
						id="floorno">
						<option value="" hidden>--- Select Floor Number---</option>
						<option value="0.5">Mezzanine</option>
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
						class="form-control form-control-sm textholder" name="streetNo"
						id="streetno" placeholder="Street Number" autocomplete="on">
				</div>
				<div class="vrholder">
					<label class="rholder">Street Name</label> <input type="text"
						class="form-control form-control-sm textholder" name="streetName"
						id="streetname" placeholder="Street Name" autocomplete="on">
				</div>
				<div class="vrholder">
					<label class="rholder">Building Number</label> <input type="text"
						class="form-control form-control-sm textholder" name="buildingNo"
						id="buildingno" placeholder="Building Number" autocomplete="on">
				</div>
				<div class="vrholder">
					<label class="rholder">Building/Project Name</label> <input type="text"
						class="form-control form-control-sm textholder"
						name="buildingName" id="buildingname" placeholder="Building/Project Name"
						autocomplete="on">
				</div>
				<div class="vrholder">
					<label class="rholder">Plot Number</label> <input type="text"
						class="form-control form-control-sm textholder" name="plotNo"
						id="plotno" placeholder="Plot Number" autocomplete="on">
				</div>
				<div class="vrholder">
					<label class="rholder">Sub Community Name</label>
					 <input
						type="text" class="form-control form-control-sm textholder"
						name="subCommunity" id="subcommunity"
						placeholder="Sub Community Name" autocomplete="on">
				</div>
				<div class="vrholder">
					<label class="rholder">Community Name</label> <select
						class="form-control form-control-sm textholder" name="community"
						id="community">
						<c:forEach items="${communitylist}" var="item">
							<option value="" hidden>Select Community</option>
							<option value="${item.community}">${item.community}</option>
						</c:forEach>
					</select>
				</div>
				<div class="vrholder">
					<label class="rholder">Town</label> <input type="text"
						class="form-control form-control-sm textholder" name="town"
						id="town" placeholder="Town" autocomplete="on">
				</div>
				<div class="vrholder">
					<label class="rholder">City</label>
					 <select
						class="form-control form-control-sm textholder" name="city"
						id="city">
						<c:forEach items="${citylist}" var="item">
							<option value="" hidden>Select City</option>
							<option value="${item}">${item}</option>
						</c:forEach>
					</select>
				</div>
				<div class="vrholder">
					<label class="rholder">Country</label> <input type="text"
						class="form-control form-control-sm textholder" name="country"
						id="country" placeholder="Country" autocomplete="on">
				</div>
				<div class="vrholder">
					<label class="rholder">Valuation Instructing Person</label> 
<!-- 					<input -->
<!-- 						type="text" class="form-control form-control-sm textholder" -->
<!-- 						name="valuationInstrPerson" id="contactPerson" -->
<!-- 						placeholder="Valuation Instructing Person" autocomplete="on"> -->
						<select class="form-control form-control-sm textholder" name="valuationInstrPerson" id="contactPerson">								
						<option value="" hidden>Valuation Instructing  Person</option>
		    										</select>
				</div>
				<div class="vrholder">
					<label class="rholder">Plot Size[Square Feet]</label> <input
						type="number" class="form-control form-control-sm textholder"
						name="plotSize" id="" placeholder="Plot Size[Square Feet]"
						autocomplete="on">
				</div>
				<div class="vrholder">
					<label class="rholder">Purpose Of Valuation</label> <select
						class="form-control form-control-sm textholder" name="propOfVal"
						id="">
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
						class="form-control form-control-sm textholder" name="valApproach"
						id="valApproach">
						<option value="Market Approach" selected>Market Approach</option>
						<option value="Income Approach">Income Approach</option>
						<option value="Profit Approach">Profit Approach</option>
						<option value="Cost Approach">Cost Approach</option>
						<option value="Residential Value Of Land Approach">Residential
							Value Of Land Approach</option>
					</select>
				</div>
				<div class="vrholder">
					<label class="rholder">Bases Of Value</label> <select
						class="form-control form-control-sm textholder"
						name="basesOfValue" id="">
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
						name="approachReasoning" id="apprreason">
						<option value="Comparable Sold Transaction & Listing Available"
							selected>Comparable Sold Transaction & Listing Available</option>
						<option value="Income Generating Property">Income
							Generating Property</option>
						<option value="Trading Property">Trading Property</option>
						<option value="No Secondary Market Available">No
							Secondary Market Available</option>
						<option value="No Comparable Land Available">No
							Comparable Land Available</option>
					</select>
				</div>
				<div class="valuationholder" style="margin-top: 5px">
					<div class="savebtn" id="receivenxt">Next</div>
				</div>
			</div>
			<div class="form-group checkconflict">
				<div class="vrholder">
					<label class="rholder">Owner Name</label> <input type="text"
						class="form-control form-control-sm textholder" name=""
						id="cownername" placeholder="Owner Name" autocomplete="on">
				</div>
				<div class="vrholder">
					<label class="rholder">Buyer Name</label> <input type="text"
						class="form-control form-control-sm textholder" name=""
						id="ccusname" placeholder="Buyer Name" autocomplete="on">
				</div>
				<div class="vrholder">
					<label class="rholder">Unit Number</label> <input type="text"
						class="form-control form-control-sm textholder" name=""
						id="cunitno" placeholder="Unit Number" autocomplete="on">
				</div>
				<div class="vrholder">
					<label class="rholder">Floor Number</label> <input type="text"
						class="form-control form-control-sm textholder" name=""
						id="cfloorno" placeholder="Floor Number" autocomplete="on">
				</div>
				<div class="vrholder">
					<label class="rholder">Street Number</label> <input type="text"
						class="form-control form-control-sm textholder" name=""
						id="cstreetno" placeholder="Street Number" autocomplete="on">
				</div>
				<div class="vrholder">
					<label class="rholder">Plot Number</label> <input type="text"
						class="form-control form-control-sm textholder" name=""
						id="cplotno" placeholder="Plot Number" autocomplete="on">
				</div>
				<div class="vrholder">
					<label class="rholder">Street Name</label> <input type="text"
						class="form-control form-control-sm textholder" name=""
						id="cstreetname" placeholder="Street Name" autocomplete="on">
				</div>
				<div class="vrholder">
					<label class="rholder">Community Name</label> <input type="text"
						class="form-control form-control-sm textholder" name=""
						id="ccommunity" placeholder="Community Name" autocomplete="on">
				</div>
				<div class="vrholder">
					<label class="rholder">Sub Community Name</label> <input
						type="text" class="form-control form-control-sm textholder"
						name="" id="csubcommunity" placeholder="Sub Community Name"
						autocomplete="on">
				</div>
				<div class="vrholder">
					<label class="rholder">Town</label> <input type="text"
						class="form-control form-control-sm textholder" name="" id="ctown"
						placeholder="Town" autocomplete="on">
				</div>
				<div class="vrholder">
					<label class="rholder">City</label> <input type="text"
						class="form-control form-control-sm textholder" name="" id="ccity"
						placeholder="City" autocomplete="on">
				</div>
				<div class="vrholder">
					<label class="rholder">Country</label> <input type="text"
						class="form-control form-control-sm textholder" name=""
						id="ccountry" placeholder="Country" autocomplete="on">
				</div>
				<div class="valuationholder adjustTop">
					<div class="savebtn" id="conflictbutton">Check Conflict</div>
				</div>
			</div>
			<div class="form-group scheduling">
				<div class="valuationholder">
					<label class="ilholder">Valuation Date</label>
					<div class="input-group itholder">
						<div class="input-group-prepend">
							<div class="input-group-text">
								<i class="fas fa-calendar"></i>
							</div>
						</div>
						<input type="text" class="form-control form-control-sm datepicker"
							name="" id="" placeholder="" autocomplete="on">
					</div>
				</div>
				<div class="valuationholder">
					<label class="ilholder">Inspection Date</label>
					<div class="input-group itholder">
						<div class="input-group-prepend">
							<div class="input-group-text">
								<i class="fas fa-calendar"></i>
							</div>
						</div>
						<input type="text" class="form-control form-control-sm datepicker"
							name="insDate" id="insdate" placeholder="" autocomplete="on">
					</div>
				</div>
				<div class="valuationholder">
					<label class="ilholder">Inspection Day</label>
					<div class="input-group itholder">
						<div class="input-group-prepend">
							<div class="input-group-text">
								<i class="fas fa-fire"></i>
							</div>
						</div>
						<input type="text" class="form-control form-control-sm " name=""
							id="insday" placeholder="" readonly autocomplete="on">
					</div>
				</div>
				<div class="valuationholder">
					<label class="ilholder">Inspection Time</label>
					<div class="input-group itholder">
						<div class="input-group-prepend">
							<div class="input-group-text">
								<i class="fas fa-clock"></i>
							</div>
						</div>
						<input type="text" class="form-control form-control-sm timepicker"
							name="" id="" placeholder="Inspection Time" autocomplete="on">
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
							name="" id="" placeholder="" autocomplete="on">
					</div>
				</div>
				<div class="valuationholder">
					<label class="ilholder">Inspection Type</label> <select
						class="form-control form-control-sm itholder" name="insType" id="">
						<option value="Physical Inspection" selected>Physical
							Inspection</option>
						<option value="Desktop">Desktop</option>
						<option value="Drive By">Drive By</option>
					</select>
				</div>
				<div class="valuationholder">
					<label class="ilholder">Inspection Officer</label> <select
						class="form-control form-control-sm itholder" name="insOfficer"
						id="">
						<c:forEach items="${serviceofficerlist}" var="item">
							<option value="${item.name}">${item.name}</option>
						</c:forEach>
						<c:forEach items="${dfservicer}" var="item1">
							<option selected="true" value="${item1.name}">${item1.name}</option>
						</c:forEach>
					</select>
				</div>
				<div class="valuationholder">
					<label class="ilholder">Mode Of Transport</label> 
					<select class="form-control form-control-sm itholder" name="" id="mode">
						<option value="Company Car">Company Car</option>
						<option value="Personal Car">Personal Car</option>
						<option value="External Transport">External Transport</option>
					</select>
				</div>
				<div class="valuationholder">
					<label class="ilholder"> Start Kilometres</label>
					 <input type="text"
						class="form-control form-control-sm itholder" name=""
						id="" placeholder="Start Kilometres" autocomplete="on">
				</div>
				<div class="valuationholder">
					<label class="ilholder"> End Kilometres</label>
					 <input type="text"
						class="form-control form-control-sm itholder" name=""
						id="" placeholder="End Kilometres" autocomplete="on">
				</div>
				<div class="valuationholder adjustTop">
					<div class="savebtn" id="scheduleprv">Previous</div>
					<div class="savebtn" id="schedulenxt">Next</div>
				</div>
			</div>
			<div class="form-group inspecting">
				<div class="viholder">
					<label class="rholder">Makani Number</label> <input type="text"
						class="form-control form-control-sm textholder" name="makaniNo"
						id="" placeholder="Makani Number" autocomplete="on">
				</div>
				<div class="viholder">
					<label class="rholder">Location</label> <select
						class="form-control form-control-sm textholder" name="location"
						id="">
						<option value="Good">Good</option>
						<option value="Average" selected>Average</option>
						<option value="Poor">Poor</option>
					</select>
				</div>
				<div class="viholder">
					<label class="rholder">Location Coordinates</label> <input
						type="text" class="form-control form-control-sm textholder"
						name="locationCoord" id="" placeholder="Location Coordinates"
						autocomplete="on">
				</div>
				<div class="viholder">
					<label class="rholder">Property Placement</label> <select
						class="form-control form-control-sm textholder"
						name="propertyPlacement" id="">
						<option value="Middle" selected>Middle</option>
						<option value="Corner">Corner</option>
						<option value="Not Applicable">Not Applicable</option>
					</select>
				</div>
				<div class="viholder">
					<label class="rholder">Property Exposure</label> <select
						class="form-control form-control-sm textholder"
						name="propertyExposure" id="">
						<option value="Single Row">Single Row</option>
						<option value="Back To Back" selected>Back To Back</option>
						<option value="Not Applicable">Not Applicable</option>
					</select>
				</div>
				<div class="viholder">
					<label class="rholder">Property Type</label> <input type="text"
						class="form-control form-control-sm textholder"
						name="propertyType" id="" placeholder="Property Type"
						autocomplete="on">
				</div>
				<div class="viholder">
					<label class="rholder">Property Condition</label> <select
						class="form-control form-control-sm textholder"
						name="propertyCondition" id="">
						<option value="Good">Good</option>
						<option value="Average" selected>Average</option>
						<option value="Poor">Poor</option>
					</select>
				</div>
				<div class="viholder">
					<label class="rholder">Development Type</label> <select
						class="form-control form-control-sm textholder" name="devType"
						id="">
						<option value="Standard" standard>Standard</option>
						<option value="Non-Standard">Non-Standard</option>
					</select>
				</div>
				<div class="viholder">
					<label class="rholder">Developer</label> <input type="text"
						class="form-control form-control-sm textholder" name="developer"
						id="" placeholder="Developer" autocomplete="on">
				</div>
				<div class="viholder">
					<label class="rholder">Estimated Age(Years)</label> <input
						type="number" class="form-control form-control-sm textholder"
						name="estAge" id="age" placeholder="Estimation Age(Years)"
						autocomplete="on">
				</div>
				<div class="viholder">
					<label class="rholder" style="line-height: 16px">Estimated
						Remaining Life(Years)</label> <input type="number"
						class="form-control form-control-sm textholder" name="estemLife"
						id="remlife" placeholder="Estimated Remaining Life"
						autocomplete="on">
				</div>
				<div class="viholder">
					<label class="rholder">Built Up Area Size</label> <input
						type="text" class="form-control form-control-sm textholder"
						name="buitUpAreaSize" id="" placeholder="Built Up Area Size"
						autocomplete="on">
				</div>
				<div class="viholder">
					<label class="rholder" style="line-height: 16px">Building/Community
						Facilities</label> <input type="text"
						class="form-control form-control-sm textholder"
						name="bulComFacilities" id=""
						placeholder="Building/Community Facilities" autocomplete="on">
				</div>
				<div class="viholder">
					<label class="rholder">Completion Status</label> <select
						class="form-control form-control-sm textholder"
						name="completionStatus" id="">
						<option value="Ready" selected>Ready</option>
						<option value="Not Ready">Not Ready</option>
					</select>
				</div>
				<div class="viholder">
					<label class="rholder">Occupancy Status</label> <select
						class="form-control form-control-sm textholder"
						name="occupancyStatus" id="">
						<option value="" hidden>--- Select ---</option>
						<option value="Occupied">Owner Occupied</option>
						<option value="Rented" selected>Rented</option>
						<option value="Vacant">Vacant</option>
					</select>
				</div>
				<div class="viholder">
					<label class="rholder">Accomodation</label> <select
						class="form-control form-control-sm textholder"
						name="accomodation" id="">
						<option value="" hidden>--- Select ---</option>
						<option value="1 Bedroom">1 Bedroom</option>
						<option value="2 Bedroom">2 Bedrooms</option>
						<option value="3 Bedroom">3 Bedrooms</option>
						<option value="4 Bedroom">4 Bedrooms</option>
						<option value="5 Bedroom">5 Bedrooms</option>
						<option value="6 Bedroom">6 Bedrooms</option>
						<option value="7 Bedroom">7 Bedrooms</option>
						<option value="8 Bedroom">8 Bedrooms</option>
						<option value="9 Bedroom">9 Bedrooms</option>
						<option value="10 Bedroom">10 Bedrooms</option>
					</select>
				</div>
				<div class="viholder">
					<label class="rholder">Ground Floor</label> <input type="text"
						class="form-control form-control-sm textholder" name="groundFloor"
						id="" placeholder="Ground Floor" autocomplete="on">
				</div>
				<div class="viholder">
					<label class="rholder">First Floor</label> <input type="text"
						class="form-control form-control-sm textholder" name="firstFloor"
						id="" placeholder="First Floor" autocomplete="on">
				</div>
				<div class="viholder">
					<label class="rholder">Second Floor</label> <input type="text"
						class="form-control form-control-sm textholder" name=secondFloor
						id="" placeholder="Second Floor" autocomplete="on">
				</div>
				<div class="viholder">
					<label class=rholder>Full Building Floors</label> <select
						class="form-control form-control-sm textholder"
						name="fullBulFloors" id="">
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
					<label class="rholder">Upgrades</label> <input type="text"
						class="form-control form-control-sm textholder" name="upgrades"
						id="" placeholder="Upgrades" autocomplete="on">
				</div>
				<div class="viholder">
					<label class="rholder">View</label> <select
						class="form-control form-control-sm textholder" name="view" id="">
						<option value="Park View">Park View</option>
						<option value="Sea View">Sea View</option>
						<option value="Marina View">Marina View</option>
						<option value="Community View" selected>Community View</option>
						<option value="Pool View">Pool View</option>
						<option value="Lake View">Lake View</option>
					</select>
				</div>
				<div class="viholder">
					<label class="rholder">Swimming Pool</label> <select
						class="form-control form-control-sm textholder"
						name="swimmingFool" id="">
						<option value="Yes">Yes</option>
						<option value="No" selected>No</option>
					</select>
				</div>
				<div class="viholder">
					<label class="rholder">Landscaping</label> <select
						class="form-control form-control-sm textholder" name="landScaping"
						id="">
						<option value="Yes">Yes</option>
						<option value="No" selected>No</option>
					</select>
				</div>
				<div class="viholder">
					<label class="rholder">Parking Bays</label> <select
						class="form-control form-control-sm textholder" name="parkingBays"
						id="">
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
					<label class="rholder">Fridge</label> <select
						class="form-control form-control-sm textholder" name="fridge"
						id="">
						<option value="Yes">Yes</option>
						<option value="No" selected>No</option>
					</select>
				</div>

				<div class="viholder">
					<label class="rholder">Oven</label> <select
						class="form-control form-control-sm textholder" name="oven" id="">
						<option value="Yes">Yes</option>
						<option value="No" selected>No</option>
					</select>
				</div>
				<div class="viholder">
					<label class="rholder">Window AC</label> <select
						class="form-control form-control-sm textholder" name="windowAC"
						id="">
						<option value="Yes">Yes</option>
						<option value="No" selected>No</option>
					</select>
				</div>

				<div class="viholder">
					<label class="rholder">Split Units AC</label> <select
						class="form-control form-control-sm textholder"
						name="splitUnitsAC" id="">
						<option value="Yes" selected>Yes</option>
						<option value="No">No</option>
					</select>
				</div>
				<div class="viholder">
					<label class="rholder">Central Chiller</label> <select
						class="form-control form-control-sm textholder"
						name="centralChiller" id="">
						<option value="Yes">Yes</option>
						<option value="No" selected>No</option>
					</select>
				</div>

				<div class="viholder">
					<label class="rholder">Cooker</label> <select
						class="form-control form-control-sm textholder" name="cooker"
						id="">
						<option value="Yes">Yes</option>
						<option value="No" selected>No</option>
					</select>
				</div>
				<div class="viholder">
					<label class="rholder">Washing Machine</label> <select
						class="form-control form-control-sm textholder"
						name="washingMachine" id="">
						<option value="Yes">Yes</option>
						<option value="No" selected>No</option>
					</select>
				</div>
				<div class="viholder">
					<label class="rholder">Furnished</label> <select
						class="form-control form-control-sm textholder" name="furnished"
						id="">
						<option value="Yes" selected>Yes</option>
						<option value="No">No</option>
					</select>
				</div>

				<div class="viholder">
					<label class="rholder">Utilities Connected</label> <select
						class="form-control form-control-sm textholder"
						name="utilityConnected" id="">
						<option value="Yes">Yes</option>
						<option value="No" selected>No</option>
					</select>
				</div>

				<div class="valuationholder adjustTop">
					<div class="savebtn" id="inspectprv">Previous</div>
					<div class="savebtn" id="inspectnxt">Next</div>
				</div>
			</div>
			<div class="form-group submitting">
				<div class="valuationholder">
					<label class="labelholder">Valuation Adjustments</label> <input
						type="text" class="form-control form-control-sm textholder"
						name="valAdjustment" id="" placeholder="Valuation Adjustments"
						autocomplete="on">
				</div>
				<div class="valuationholder">
					<label class="labelholder">Document Provided by Client</label> <input
						type="text" class="form-control form-control-sm textholder"
						name="docProvByClients" id=""
						placeholder="Document Provided by Client" autocomplete="on">
				</div>
				<div class="valuationholder">
					<label class="labelholder">Documents not Provided</label> <input
						type="text" class="form-control form-control-sm textholder"
						name="docNotProvided" id="" placeholder="Documents not Provided"
						autocomplete="on">
				</div>
				<div class="valuationholder">
					<label class="labelholder">Market Value</label> <input type="text"
						class="form-control form-control-sm textholder" name="marketValue"
						id="" placeholder="Market Value" autocomplete="on">
				</div>
				<div class="valuationholder">
					<label class="labelholder">Market Value Rate</label> <input
						type="text" class="form-control form-control-sm textholder"
						name="marketValueRate" id="" placeholder="Market Value Rate"
						autocomplete="on">
				</div>
				<div class="valuationholder">
					<label class="labelholder">Market Rent</label> <input type="text"
						class="form-control form-control-sm textholder" name="marketRent"
						id="" placeholder="Market Rent" autocomplete="on">
				</div>
				<div class="valuationholder">
					<label class="labelholder">Market Summary</label> <input
						type="text" class="form-control form-control-sm textholder"
						name="marketSummary" id="" placeholder="Market Summary"
						autocomplete="on">
				</div>
				<div class="valuationholder">
					<label class="labelholder">Special Assumption</label>
					<textarea type="text"
						class="form-control form-control-sm textholder"
						name="specialAssumption" id="assump"
						placeholder="Special Assumption" autocomplete="on"></textarea>
				</div>
				<div class="valuationholder" style="margin-top: 55px">
					<div class="savebtn" id="submitprv">Previous</div>
					<button type="submit" id="submitnxt" class="savebtn">Save</button>
				</div>
			</div>
			<br>
			<input type="hidden" id="row" name="" value="${noofrows}" />
		</form:form>

	</div>
</div>
<%@include file="footer.jsp"%>
<script
	src="resources/assets/bundles/bootstrap-daterangepicker/daterangepicker.js"></script>
<script
	src="resources/assets/bundles/bootstrap-timepicker/js/bootstrap-timepicker.min.js"></script>
<script src="resources/assets/js/valuationform.js"></script>