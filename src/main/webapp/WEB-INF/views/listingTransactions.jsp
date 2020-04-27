<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isELIgnored="false"%>
<title>Windmills | Listings Transactions</title>
<link rel='shortcut icon' type='image/x-icon'
	href='resources/assets/img/favicon.ico' />
<link rel="stylesheet" href="resources/assets/css/listings.css">
<link rel="stylesheet" href="resources/assets/css/main.css">
<link rel="stylesheet"
	href="resources/assets/bundles/pretty-checkbox/pretty-checkbox.min.css">
<link rel="stylesheet"
	href="resources/assets/bundles/bootstrap-daterangepicker/daterangepicker.css">
	 <link rel="stylesheet" href="resources/assets/bundles/select2/dist/css/select2.min.css">
  <link rel="stylesheet" href="resources/assets/bundles/jquery-selectric/selectric.css">
<link
	href="resources/assets/bundles/vendor/datepicker/daterangepicker.css"
	rel="stylesheet" media="all">
<div class="listings">
	<%@include file="header.jsp"%>
	<%@include file="sidebar.jsp"%>
<div class="main-content"
		style="background: rgb(229, 231, 233) !important;padding-left: 220px !important; overflow: scroll; overflow-x: hidden; padding-right: 0px; margin-top: 70px; width: 100%; min-height: 530px !important">
				<form:form action="addlisitings" id="addlisitings" modelAttribute="listings">
				<div class="listholder">
					<label class="listlabel">Windmills Reference</label>
					<select
						class="form-control form-control-sm listtext"
						name="windmillsRef" id="">
						<c:forEach items="${referencelist}" var="item">
							<option value="${item.windmillsRef}">${item.windmillsRef}</option>
						</c:forEach>
					</select>
				</div>
				<div class="listholder">
					<label class="listlabel">Listings Reference</label>
				    <input type="text" class="form-control form-control-sm listtext" name="listingsRef" id="" placeholder="Listings Reference" autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Source</label>
					<select class="form-control form-control-sm listtext" name="source" id="">
						<option value="Property Finder">Property Finder</option>
						<option value="Dubizzle">Dubizzle</option>
						<option value="Bayut">Bayut</option>
						<option value="Waseet">Waseet</option>
						<option value="Dubai-Rest">Dubai-Rest</option>
						<option value="Simsari">Simsari</option>
						<option value="Real Estate Agency">Real Estate Agency</option>
						<option value="Reidin">Reidin</option>
						<option value="Zoom Property">Zoom Property</option>
						<option value="Property ePortal">Property ePortal</option>
						<option value="Driven Properties">Driven Properties</option>
						<option value="Just Property">Just Property</option>
						<option value="Property Price">Property Price</option>
						<option value="Index">Index</option>
					</select>
				</div>
				<div class="listholder">
					<label class="listlabel">Listing Website Link</label>
				    <input type="text" class="form-control form-control-sm listtext" name="listingWebsiteLink" id="" placeholder="Listing Website Link" autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Listing Date</label>
					<div class="input-group listtext">
						<div class="input-group-prepend">
							<div class="input-group-text">
								<i class="fas fa-calendar"></i>
							</div>
						</div>
						<input type="text" class="form-control form-control-sm datepicker" style=
						"height: 27px !important;font-size: 12px !important; font-family: sans-serif;" name="listingsDate" id="">
					</div>
				</div>
				<div class="listholder">
					<label class="listlabel">Property Listed</label>
					<select
						class="form-control form-control-sm listtext"
						name="propertyListed" id="">
						<c:forEach items="${propertylist}" var="item">
							<option value="${item.propertyValued}">${item.propertyValued}</option>
						</c:forEach>
					</select>
				</div>
				<div class="listholder">
					<label class="listlabel">Tenure</label>
					 <select
						class="form-control form-control-sm listtext"
						name="tenure" id="">
						<option value="Freehold" selected>Freehold</option>
						<option value="Non-Freehold(Emiratis)">Non-Freehold(Emiratis)</option>
						<option value="Non-Freehold(Emiratis & GCC Citizens)">Non-Freehold(Emiratis
							& GCC Citizens)</option>
						<option value="Leasehold">Leasehold</option>

					</select>
				</div>
				<div class="listholder">
					<label class="listlabel">Unit Number</label>
				    <input type="text" class="form-control form-control-sm listtext" name="unitNo" id="" placeholder="Unit Number" autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Floor Number</label>
					<select
						class="form-control form-control-sm listtext"
						name="floorNo" id="">
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
				<div class="listholder">
					<label class="listlabel">Building Number</label>
				    <input type="text" class="form-control form-control-sm listtext" name="buildingNo" id="" placeholder="Building Number" autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Building Name</label>
					<select class="form-control form-control-sm listtext" name="buildingName" id="list-buildingname">  
						<c:forEach items="${bullist}" var="item"> 
							<option value="" hidden>-- Select Building/Project Name ---</option> 
							<option value="${item}">${item}</option>
						</c:forEach> 
					</select> 
				</div>
				<div class="listholder">
					<label class="listlabel">Plot Number</label>
				    <input type="text" class="form-control form-control-sm listtext" name="plotNo" id="" placeholder="Plot Number" autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Makani</label>
				    <input type="text" class="form-control form-control-sm listtext" name="makani" id="" placeholder="Makani" autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Street Number/Name</label>
				    <input type="text" class="form-control form-control-sm listtext" name="streetName" id="" placeholder="Street Name" autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Sub Community Name</label> 
						 <select class="form-control form-control-sm listtext" name="subCommunity" id="list-subcommunity"> 
 							<c:forEach items="${hoodlist}" var="item">
 								<option value="" hidden>-- Select Sub Community ---</option>
							<option value="${item}">${item}</option> 
 							</c:forEach> 
 						</select> 
				</div>
				<div class="listholder">
					<label class="listlabel" style="line-height:16px;margin-bottom: 0px;">Community/Area Name</label>
				 	<select class="form-control form-control-sm listtext" name="community" id="list-community">
						<c:forEach items="${arealist}" var="item"> 
							<option value="" hidden>-- Select Community/Area---</option>
							<option value="${item}">${item}</option>
							</c:forEach>
					</select>
				</div>
				<div class="listholder">
					<label class="listlabel">City</label>
					 <select class="form-control form-control-sm listtext" name="city" id="list-city">
						<c:forEach items="${cityylist}" var="item">
							<option value="${item}">${item}</option>
						</c:forEach>
					</select>
				</div>
				<div class="listholder">
					<label class="listlabel">Location</label> <select
						class="form-control form-control-sm listtext"
						name="location" id="lilocation">
						<option value="Very Good">Very Good</option>
						<option value="Good">Good</option>
						<option value="Average" selected>Average</option>
						<option value="Substandard">Substandard</option>
						<option value="Poor">Poor</option>
					</select>
				</div>
				<div class="listholder">
					<label class="listlabel">Location Coordinates</label> <input
						type="text" class="form-control form-control-sm listtext"
						name="locationCoord" id=""
						placeholder="Location Coordinates" autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Land Size</label>
				    <input type="text" class="form-control form-control-sm listtext" name="landSize" id="landSize" placeholder="Land Size" autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel" style="line-height: 13px;">Built Up Area Size (sq.ft)</label>
				    <input type="text" class="form-control form-control-sm listtext" name="bua" id="libuiltUpAreaSize" placeholder="BUA" autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Balcony Size</label>
				    <input type="text" class="form-control form-control-sm listtext" name="balcony" id="" placeholder="Balcony Size" autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Property Placement</label> <select
						class="form-control form-control-sm listtext"
						name="propPlacement" id="">
						<option value="Middle" selected>Middle</option>
						<option value="Corner">Corner</option>
						<option value="Semi-Corner">Semi-Corner</option>
						<option value="Mulhaq">Mulhaq</option>
						<option value="Not Applicable">Not Applicable</option>
					</select>
				</div>
				<div class="listholder">
					<label class="listlabel">Property Exposure</label> <select
						class="form-control form-control-sm listtext"
						name="propExposure" id="">
						<option value="Single Row">Single Row</option>
						<option value="Back To Back" selected>Back To Back</option>
						<option value="Not Applicable">Not Applicable</option>
					</select>
				</div>
				<div class="listholder">
					<label class="listlabel">Property Type</label>
					 <select
						class="form-control form-control-sm listtext"
						name="propType" id="">
						<option value="2M" selected>2M</option>
						<option value="3M">3M</option>
						<option value="1E">1E</option>
						<option value="2E">2E</option>
						<option value="3E">3E</option>
					</select>
				</div>
				<div class="listholder">
					<label class="listlabel">Property Condition</label> <select
						class="form-control form-control-sm listtext"
						name="propCondition" id="">
						<option value="Very Good">Very Good</option>
						<option value="Good">Good</option>
						<option value="Average" selected>Average</option>
						<option value="Substandard">Substandard</option>
						<option value="Poor">Poor</option>
					</select>
				</div>
				<div class="listholder">
					<label class="listlabel">Development Type</label> <select
						class="form-control form-control-sm listtext"
						name="development" id="">
						<option value="Standard" selected>Standard</option>
						<option value="Non-Standard">Non-Standard</option>
					</select>
				</div>
				<div class="listholder">
					<label class="listlabel">Finished Status</label> <select
						class="form-control form-control-sm listtext"
						name="finishStatus" id="">
						<option value="Shell & Core" selected>Shell & Core</option>
						<option value="Fitted">Fitted</option>
					</select>
				</div>
				<div class="listholder">
					<label class="listlabel">Developer</label> 
					<select class="form-control form-control-sm listtext" name="developer" id="list-developer">  
						<c:forEach items="${devlist}" var="item"> 
							<option value="" hidden>-- Select Building/Project Name ---</option> 
							<option value="${item}">${item}</option>
						</c:forEach> 
					</select> 
				</div>
				<div class="listholder">
					<label class="listlabel">Estimated Age(Years)</label> <input
						type="number" class="form-control form-control-sm listtext"
						name="age" id=""
						placeholder="Estimation Age(Years)" autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Pool</label> <select
						class="form-control form-control-sm listtext"
						name="pool" id="">
						<option value="Yes">Yes</option>
						<option value="No" selected>No</option>
					</select>
				</div>
				<div class="listholder">
					<label class="listlabel">Gym</label> <select
						class="form-control form-control-sm listtext"
						name="gym" id="">
						<option value="Yes">Yes</option>
						<option value="No" selected>No</option>
					</select>
				</div>
				<div class="listholder">
					<label class="listlabel">Play Area</label> <select
						class="form-control form-control-sm listtext"
						name="playarea" id="">
						<option value="Yes">Yes</option>
						<option value="No" selected>No</option>
					</select>
				</div>
				<div class="listholder">
					<label class="listlabel" style="line-height: 16px">Other Community Facilities</label>
					<select class="form-control  form-control-sm listtext select2" style="width:62% !important" multiple="" name="otherComFacility" id="">
                        <option value="Park">Park</option>
                        <option value="PartyHall">PartyHall</option>
                        <option>Option 3</option>
                        <option>Option 4</option>
                        <option>Option 5</option>
                        <option>Option 6</option>
                      </select>
				</div>
				<div class="listholder">
					<label class="listlabel">Completion Status</label> <select
						class="form-control form-control-sm listtext"
						name="comStatus" id="">
						<option value="Ready" selected>Ready</option>
						<option value="Not Ready">Not Ready</option>
					</select>
				</div>
				<div class="listholder">
					<label class="listlabel">No of Bedrooms</label> <select
						class="form-control form-control-sm listtext"
						name="noOfBedrooms" id="">
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
				<div class="listholder">
					<label class="listlabel">Upgrades</label> <select
						class="form-control form-control-sm listtext"
						name="upgrades" id="">
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
				<div class="listholder">
					<label class="listlabel">Full Building Floors</label> <select
						class="form-control form-control-sm listtext"
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
				<div class="listholder">
					<label class="listlabel">Parking Space</label> <select
						class="form-control form-control-sm listtext"
						name="parkingSpace" id="">
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
				<div class="listholder">
					<label class="listlabel">View</label> <select
						class="form-control form-control-sm listtext"
						name="view" id="">
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
				<div class="listholder">
					<label class="listlabel">Landscaping</label> <select
						class="form-control form-control-sm listtext"
						name="landScape" id="">
						<option value="Yes">Yes</option>
						<option value="No" selected>No</option>
						<option value="Semi-Landscape">Semi-Landscape</option>
					</select>
				</div>
				<div class="listholder">
					<label class="listlabel">White Goods</label> <select
						class="form-control form-control-sm listtext"
						name="whiteGoods" id="">
						<option value="Yes">Yes</option>
						<option value="No" selected>No</option>
					</select>
				</div>
				<div class="listholder">
					<label class="listlabel">Furnished</label> <select
						class="form-control form-control-sm listtext"
						name="furnished" id="">
						<option value="Yes" selected>Yes</option>
						<option value="No">No</option>
						<option value="Semi-Furnished">Semi-Furnished</option>
					</select>
				</div>
				<div class="listholder">
					<label class="listlabel">Utilities Connected</label> <select
						class="form-control form-control-sm listtext"
						name="utilityConnected" id="">
						<option value="Yes">Yes</option>
						<option value="No" selected>No</option>
					</select>
				</div>
				<div class="listholder">
					  <label class="listlabel">Developer Margin</label>
	               	 <select
						class="form-control form-control-sm listtext"
						name="devmargin" id="lidevmargin">
						<option value="Yes">Yes</option>
						<option value="No" selected>No</option>
					</select>
				  </div>
				<div class="listholder">
					<label class="listlabel">Listings Price </label> <input type="text"
						class="form-control form-control-sm listtext"
						name="price" id="price"
						placeholder="Listings Price " autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Listings Rent </label> <input type="text"
						class="form-control form-control-sm listtext"
						name="rent" id="rent"
						placeholder="Listings Rent" autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Price/Sqt </label> <input type="text"
						class="form-control form-control-sm listtext"
						name="priceSqt" id="priceSqt"
						placeholder="Price/Sqt " autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Final Price </label> <input type="text"
						class="form-control form-control-sm listtext"
						name="finalRent" id="finalRent"
						placeholder="Final Price" autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Agent Name</label> <input type="text"
						class="form-control form-control-sm listtext"
						name="agName" id="" placeholder="Agent Name" autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Agent PhoneNo</label> <input type="text"
						class="form-control form-control-sm listtext"
						name="agPhoneNo" id="" placeholder="Agent PhoneNo " autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Agent Company</label> <input type="text"
						class="form-control form-control-sm listtext"
						name="agCompany" id="" placeholder="Agent Company" autocomplete="on">
				</div>
				<div class="listholder" style="margin-top: -6px;margin-bottom:20px;">
					<button type="submit" id="" class="savebtn">Save</button>
				</div>
		</form:form>
	</div>
</div>
<%@include file="footer.jsp"%>
<script src="resources/assets/bundles/bootstrap-daterangepicker/daterangepicker.js"></script>
<script src="resources/assets/js/listings.js"></script>
