<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isELIgnored="false"%>
<title>Windmills | Property Valued</title>
<link rel='shortcut icon' type='image/x-icon'
	href='resources/assets/img/favicon.ico' />
<link rel="stylesheet" href="resources/assets/css/property.css">
<link rel="stylesheet" href="resources/assets/css/main.css">
<link rel="stylesheet"
	href="resources/assets/bundles/pretty-checkbox/pretty-checkbox.min.css">
<link rel="stylesheet"
	href="resources/assets/bundles/bootstrap-daterangepicker/daterangepicker.css">
<link rel="stylesheet"
	href="resources\assets\fonts\material\material-icons.css">
<link rel="stylesheet" href="resources/assets/css/listings.css">	
<link
	href="resources/assets/bundles/vendor/datepicker/daterangepicker.css"
	rel="stylesheet" media="all">
<div class="listingseditform">
	<%@include file="header.jsp"%>
	<%@include file="sidebar.jsp"%>
	<div class="main-content"
		style="background: rgb(229, 231, 233) !important;padding-left: 220px !important;padding-top: 10px !important; overflow: scroll; overflow-x: hidden; padding-right: 0px; margin-top: 70px; width: 100%; min-height: 530px !important">
		<form:form action="editListings" style="margin-top:-18px !important;" id="listingseditform" modelAttribute="listings">
				<div class="listholder">
					<label class="listlabel">Windmills Reference</label>
					<select
						class="form-control form-control-sm listtext"
						name="windmillsRef" id="">
					<option value="${listingsform.windmillsRef}" selected hidden>${listingsform.windmillsRef}</option>
						<c:forEach items="${referencelist}" var="item">
							<option value="${item.windmillsRef}">${item.windmillsRef}</option>
						</c:forEach>
					</select>
				</div>
				<div class="listholder">
					<label class="listlabel">Listings Reference</label>
				    <input type="text" class="form-control form-control-sm listtext" name="listingsRef" value="${listingsform.listingsRef}" id="" placeholder="Listings Reference" autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Source</label>
					<select class="form-control form-control-sm listtext" name="source" id="">
						<option value="${listingsform.source}" selected hidden>${listingsform.source}</option>
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
				    <input type="text" class="form-control form-control-sm listtext" name="listingWebsiteLink" value="${listingsform.listingWebsiteLink}" id="" placeholder="Listing Website Link" autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Listing Date</label>
					<div class="input-group listtext">
						<div class="input-group-prepend">
							<div class="input-group-text">
								<i class="fas fa-calendar"></i>
							</div>
						</div>
						<input type="text" class="form-control form-control-sm datepicker"  value="${listingsform.listingsDate}"  style=
						"height: 27px !important;font-size: 12px !important; font-family: sans-serif;" name="listingsDate" id="">
					</div>
				</div>
				<div class="listholder">
					<label class="listlabel">Property Listed</label>
					<select class="form-control form-control-sm listtext" name="propertyListed" id="">
					    <option value="${listingsform.propertyListed}" selected hidden>${listingsform.propertyListed}</option>
						<c:forEach items="${propertylist}" var="item">
							<option value="${item.propertyValued}">${item.propertyValued}</option>
						</c:forEach>
					</select>
				</div>
				<div class="listholder">
					<label class="listlabel">Tenure</label>
					 <select class="form-control form-control-sm listtext" name="tenure" id="">
						<option value="${listingsform.tenure}" selected hidden>${listingsform.tenure}</option>
						<option value="Freehold">Freehold</option>
						<option value="Non-Freehold(Emiratis)">Non-Freehold(Emiratis)</option>
						<option value="Non-Freehold(Emiratis & GCC Citizens)">Non-Freehold(Emiratis & GCC Citizens)</option>
						<option value="Leasehold">Leasehold</option>
					</select>
				</div>
				<div class="listholder">
					<label class="listlabel">Unit Number</label>
				    <input type="text" class="form-control form-control-sm listtext" value="${listingsform.unitNo}" name="unitNo" id="" placeholder="Unit Number" autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Floor Number</label>
					<select
						class="form-control form-control-sm listtext"
						name="floorNo" id="">
						<option value="${listingsform.floorNo}" selected hidden>${listingsform.floorNo}</option>
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
				    <input type="text" class="form-control form-control-sm listtext"  value="${listingsform.buildingNo}"  name="buildingNo" id="" placeholder="Building Number" autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Building Name</label>
					<select class="form-control form-control-sm listtext" name="buildingName" id="list-buildingname">  
							<option value="${listingsform.buildingName}" selected hidden>${listingsform.buildingName}</option>
						<c:forEach items="${bullist}" var="item"> 
							<option value="${item}">${item}</option>
						</c:forEach> 
					</select> 
				</div>
				<div class="listholder">
					<label class="listlabel">Plot Number</label>
				    <input type="text" class="form-control form-control-sm listtext" value="${listingsform.plotNo}"  name="plotNo" id="" placeholder="Plot Number" autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Makani</label>
				    <input type="text" class="form-control form-control-sm listtext" value="${listingsform.makani}"  name="makani" id="" placeholder="Makani" autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Street Number/Name</label>
				    <input type="text" class="form-control form-control-sm listtext" value="${listingsform.streetName}"  name="streetName" id="" placeholder="Street Name" autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">SubCommunity Name</label> 
						 <select class="form-control form-control-sm listtext" name="subCommunity" id="list-subcommunity"> 
 								<option value="${listingsform.subCommunity}" selected hidden>${listingsform.subCommunity}</option>
 							<c:forEach items="${hoodlist}" var="item">
							<option value="${item}">${item}</option> 
 							</c:forEach> 
 						</select> 
				</div>
				<div class="listholder">
					<label class="listlabel" style="line-height:16px;margin-bottom: 0px;">Community/Area Name</label>
				 	<select class="form-control form-control-sm listtext" name="community" id="list-community">
							<option value="${listingsform.community}" selected hidden>${listingsform.community}</option>
						<c:forEach items="${arealist}" var="item"> 
							<option value="${item}">${item}</option>
							</c:forEach>
					</select>
					
				</div>
				<div class="listholder">
					<label class="listlabel">City</label>
					 <select class="form-control form-control-sm listtext" name="city" id="list-city">
							<option value="${listingsform.city}" selected hidden>${listingsform.city}</option>
						<c:forEach items="${cityylist}" var="item">
							<option value="${item}">${item}</option>
						</c:forEach>
					</select>
				</div>
				<div class="listholder">
					<label class="listlabel">Location</label> 
					<select class="form-control form-control-sm listtext" name="location" id="">
						<option value="${listingsform.location}" selected hidden>${listingsform.location}</option>
						<option value="Very Good">Very Good</option>
						<option value="Good">Good</option>
						<option value="Average">Average</option>
						<option value="Substandard">Substandard</option>
						<option value="Poor">Poor</option>
					</select>
				</div>
				<div class="listholder">
					<label class="listlabel">Location Coordinates</label> <input
						type="text" class="form-control form-control-sm listtext"
						name="locationCoord" value="${listingsform.locationCoord}" id=""
						placeholder="Location Coordinates" autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Land Size</label>
				    <input type="text" value="${listingsform.landSize}" class="form-control form-control-sm listtext" name="landSize" id="" placeholder="Land Size" autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel" style="line-height: 13px;">Built Up Area Size (sq.ft)</label>
				    <input type="text" class="form-control form-control-sm listtext" name="bua" value="${listingsform.bua}"  id="" placeholder="BUA" autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Balcony Size</label>
				    <input type="text" class="form-control form-control-sm listtext" name="balcony" id="" value="${listingsform.balcony}" placeholder="Balcony Size" autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Property Placement</label> <select
						class="form-control form-control-sm listtext"
						name="propPlacement" id="">
						<option value="${listingsform.propPlacement}" hidden selected>${listingsform.propPlacement}</option>
						<option value="Middle">Middle</option>
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
						<option value="${listingsform.propExposure}" hidden selected>${listingsform.propExposure}</option>
						<option value="Single Row">Single Row</option>
						<option value="Back To Back">Back To Back</option>
						<option value="Not Applicable">Not Applicable</option>
					</select>
				</div>
				<div class="listholder">
					<label class="listlabel">Property Type</label> 
					<select
						class="form-control form-control-sm listtext"
						name="propType" id="">
						<option value="${listingsform.propType}" hidden selected>${listingsform.propType}</option>
						<option value="2M">2M</option>
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
						<option value="${listingsform.propCondition}" hidden selected>${listingsform.propCondition}</option>
						<option value="Very Good">Very Good</option>
						<option value="Good">Good</option>
						<option value="Average">Average</option>
						<option value="Substandard">Substandard</option>
						<option value="Poor">Poor</option>
					</select>
				</div>
				<div class="listholder">
					<label class="listlabel">Development Type</label> <select
						class="form-control form-control-sm listtext"
						name="development" id="">
						<option value="${listingsform.development}" hidden selected>${listingsform.development}</option>
						<option value="Standard">Standard</option>
						<option value="Non-Standard">Non-Standard</option>
					</select>
				</div>
				<div class="listholder">
					<label class="listlabel">Finished Status</label> <select
						class="form-control form-control-sm listtext"
						name="finishStatus" value="${listingsform.finishStatus}" id="">
						<option value="Shell & Core" selected>Shell & Core</option>
						<option value="Fitted">Fitted</option>
					</select>
				</div>
				<div class="listholder">
					<label class="listlabel">Developer</label> <select
						class="form-control form-control-sm listtext"
						name="developer" id="">
						<option value="${listingsform.developer}" hidden selected>${listingsform.developer}</option>
						<option value="Al Ain Holding">Al Ain Holding</option>
						<option value="Akshara Global Real Estate Development LLC">Akshara
							Global Real Estate Development LLC</option>
						<option value="Al Mada Marble">Al Mada Marble</option>
						<option value="Al Masarat Real Estate">Al Masarat Real
							Estate</option>
						<option value="Al Mazaya Real Estate FZ LLC">Al Mazaya
							Real Estate FZ LLC</option>
						<option value="Al Mizan Group">Al Mizan Group</option>
						<option value="Al Shafar Development">Al Shafar
							Development</option>
						<option value="Arabian Gulf Properties">Arabian Gulf
							Properties</option>
						<option value="Aurora Real Estate Development">Aurora
							Real Estate Development</option>
						<option value="AYS Developments Limited">AYS Developments
							Limited</option>
						<option value="Azizi">Azizi</option>
						<option value="B&M Riviera Properties Development">B&M
							Riviera Properties Development</option>
						<option value="Binghatti">Binghatti</option>
						<option value="Bloom Properties">Bloom Properties</option>
						<option value="Bolton Real Estate Development LLC">Bolton
							Real Estate Development LLC</option>
						<option value="Cayan Group">Cayan Group</option>
						<option value="Chapal">Chapal</option>
						<option value="Damac Properties">Damac Properties</option>
						<option value="Danube Properties">Danube Properties</option>
						<option value="Dar Al Arkan">Dar Al Arkan</option>
						<option value="Deyaar">Deyaar</option>
						<option value="Dubai Investments Park Development Company">Dubai
							Investments Park Development Company</option>
						<option value="Dubai Investments Real Estate Company">Dubai
							Investments Real Estate Company</option>
						<option value="Dubai Properties">Dubai Properties</option>
						<option value="Dubai South">Dubai South</option>
						<option value="Dubai Sports City LLC">Dubai Sports City
							LLC</option>
						<option value="Ellington Properties">Ellington Properties</option>
						<option value="Emaar">Emaar</option>
						<option value="Emaar/DP World">Emaar/DP World</option>
						<option value="Empire Arabia Real Estate Developers LLC">Empire
							Arabia Real Estate Developers LLC</option>
						<option value="Five Holdings">Five Holdings</option>
						<option value="GGICO">GGICO</option>
						<option value="HMG Properties">HMG Properties</option>
						<option value="IFA">IFA</option>
						<option value="Iman Developers">Iman Developers</option>
						<option value="Innovation SEZ Developer LTD">Innovation
							SEZ Developer LTD</option>
						<option value="Jumeirah Golf Estates LLC">Jumeirah Golf
							Estates LLC</option>
						<option value="Kerzer International">Kerzer International</option>
						<option value="Kleindienst Group">Kleindienst Group</option>
						<option value="Liv Developers">Liv Developers</option>
						<option value="Lokhandwala Builders">Lokhandwala Builders</option>
						<option value="Lootah Group">Lootah Group</option>
						<option value="MAG Group">MAG Group</option>
						<option value="Meraas">Meraas</option>
						<option value="Meraki">Meraki</option>
						<option value="Meydan Group">Meydan Group</option>
						<option value="Nakheel">Nakheel</option>
						<option value="Naseria Contracting">Naseria Contracting</option>
						<option value="Nshama">Nshama</option>
						<option value="Omniyat">Omniyat</option>
						<option value="Pacific Investment">Pacific Investment</option>
						<option value="Pal Developments L.L.C.">Pal Developments
							L.L.C.</option>
						<option value="Pantheon Properties Limited">Pantheon
							Properties Limited</option>
						<option value="Private Developer">Private Developer</option>
						<option value="Realty One">Realty One</option>
						<option value="RKMDurar Properties">RKMDurar Properties</option>
						<option value="Samana Developers">Samana Developers</option>
						<option value="Select Group">Select Group</option>
						<option value="Seven Tides">Seven Tides</option>
						<option value="Shapoorji Pallonji Group">Shapoorji
							Pallonji Group</option>
						<option value="Sobha Group">Sobha Group</option>
						<option value="Tanmiyat">Tanmiyat</option>
						<option value="Texture Holdings">Texture Holdings</option>
						<option value="The First Group">The First Group</option>
						<option value="Tiger Properties">Tiger Properties</option>
						<option value="Time Properties">Time Properties</option>
						<option value="Titan Developers">Titan Developers</option>
						<option value="Trident">Trident</option>
						<option value="Vascon Trading Ltd.">Vascon Trading Ltd.</option>
						<option value="Vincitore Real Estate Development LLC">Vincitore
							Real Estate Development LLC</option>
						<option value="Wasl">Wasl</option>
						<option value="Zaya Real Estate Development">Zaya Real
							Estate Development</option>
					</select>
				</div>
				<div class="listholder">
					<label class="listlabel">Estimated Age(Years)</label> <input
						type="number" class="form-control form-control-sm listtext"
						name="age" value="${listingsform.age}" id=""
						placeholder="Estimation Age(Years)" autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Pool</label> <select
						class="form-control form-control-sm listtext"
						name="pool" id="">
						<option value="${listingsform.pool}" selected hidden>${listingsform.pool}</option>
						<option value="Yes">Yes</option>
						<option value="No">No</option>
					</select>
				</div>
				<div class="listholder">
					<label class="listlabel">Gym</label> <select
						class="form-control form-control-sm listtext"
						name="gym" id="">
						<option value="${listingsform.gym}" selected hidden>${listingsform.gym}</option>
						<option value="Yes">Yes</option>
						<option value="No">No</option>
					</select>
				</div>
				<div class="listholder">
					<label class="listlabel">Play Area</label> <select
						class="form-control form-control-sm listtext"
						name="playarea" id="">
						<option value="${listingsform.playarea}" selected hidden>${listingsform.playarea}</option>
						<option value="Yes">Yes</option>
						<option value="No" >No</option>
					</select>
				</div>
				<div class="listholder">
					<label class="listlabel" style="line-height: 16px">Other
						Community Facilities</label> <input type="text"
						class="form-control form-control-sm listtext"
						name="otherComFacility"  value="${listingsform.otherComFacility}" id=""
						placeholder="Other Community Facilities" autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Completion Status</label> <select
						class="form-control form-control-sm listtext"
						name="comStatus" id="">
						<option value="${listingsform.comStatus}" selected hidden>${listingsform.comStatus}</option>
						<option value="Ready">Ready</option>
						<option value="Not Ready">Not Ready</option>
					</select>
				</div>
				<div class="listholder">
					<label class="listlabel">No of Bedrooms</label> <select
						class="form-control form-control-sm listtext"
						name="noOfBedrooms" id="">
						<option value="${listingsform.noOfBedrooms}" selected hidden>${listingsform.noOfBedrooms}</option>
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
						<option value="${listingsform.upgrades}" selected hidden>${listingsform.upgrades}</option>
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
						<option value="${listingsform.fullBulFloors}" selected hidden>${listingsform.fullBulFloors}</option>
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
						<option value="${listingsform.parkingSpace}" selected hidden>${listingsform.parkingSpace}</option>
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
						<option value="${listingsform.view}" selected hidden>${listingsform.view}</option>
						<option value="Park View">Park View</option>
						<option value="Sea View">Sea View</option>
						<option value="Marina View">Marina View</option>
						<option value="Community View">Community View</option>
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
						<option value="${listingsform.landScape}" selected hidden>${listingsform.landScape}</option>
						<option value="Yes">Yes</option>
						<option value="No">No</option>
						<option value="Semi-Landscape">Semi-Landscape</option>
					</select>
				</div>
				<div class="listholder">
					<label class="listlabel">White Goods</label> <select
						class="form-control form-control-sm listtext"
						name="whiteGoods" id="">
						<option value="${listingsform.whiteGoods}" selected hidden>${listingsform.whiteGoods}</option>
						<option value="Yes">Yes</option>
						<option value="No">No</option>
					</select>
				</div>
				<div class="listholder">
					<label class="listlabel">Furnished</label> <select
						class="form-control form-control-sm listtext"
						name="furnished" id="">
						<option value="${listingsform.furnished}" selected hidden>${listingsform.furnished}</option>
						<option value="Yes">Yes</option>
						<option value="No">No</option>
						<option value="Semi-Furnished">Semi-Furnished</option>
					</select>
				</div>
				<div class="listholder">
					<label class="listlabel">Utilities Connected</label> <select
						class="form-control form-control-sm listtext"
						name="utilityConnected" id="">
						<option value="${listingsform.utilityConnected}" selected hidden>${listingsform.utilityConnected}</option>
						<option value="Yes">Yes</option>
						<option value="No">No</option>
					</select>
				</div>
				<div class="listholder">
					  <label class="listlabel">Developer Margin</label>
	               	 <select
						class="form-control form-control-sm listtext"
						name="devmargin" id="lidevmargin">
						<option value="${listingsform.devmargin}" selected hidden>${listingsform.devmargin}</option>
						<option value="Yes">Yes</option>
						<option value="No" selected>No</option>
					</select>
				  </div>
				<div class="listholder">
					<label class="listlabel">Listings Price </label> <input type="text"
						class="form-control form-control-sm listtext"
						name="price" value="${listingsform.price}" id="price"
						placeholder="Listings Price " autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Listings Rent </label> <input type="text"
						class="form-control form-control-sm listtext"
						name="rent" id="rent" value="${listingsform.rent}"
						placeholder="Listings Rent" autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Price/Sqt </label> <input type="text"
						class="form-control form-control-sm listtext"
						name="priceSqt" value="${listingsform.priceSqt}"id="priceSqt"
						placeholder="Price/Sqt " autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Final Price </label> <input type="text"
						class="form-control form-control-sm listtext"
						name="finalRent" value="${listingsform.finalRent}" id="finalRent"
						placeholder="Final Price " autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Agent Name</label> <input type="text"
						class="form-control form-control-sm listtext"
						name="agName" id="" value="${listingsform.agName}" placeholder="Agent Name" autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Agent PhoneNo</label> <input type="text"
						class="form-control form-control-sm listtext"
						name="agPhoneNo" value="${listingsform.agPhoneNo}" id="" placeholder="Agent PhoneNo " autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Agent Company</label> <input type="text"
						class="form-control form-control-sm listtext"
						name="agCompany" value="${listingsform.agCompany}" id="" placeholder="Agent Company" autocomplete="on">
				</div>
				<input type="hidden" id="listingsId"" name="listingsId"
				value="${listingsform.listingsId}"/>
				<div class="form-group" style="width: 100%">
					<button type="submit" style="width: 7% !important;background: forestgreen;margin-right:5px;float:left;padding:4px;margin-top:10px">Update</button>
					<button type="none" id="cancel" style="width: 7% !important;background: orange;margin-right:5px;padding:4px;margin-top:10px;float:left">Cancel</button>
					<div type="none" style="cursor:pointer;border-radius: 5px;width: 7% !important;margin-top:10px;background: #ff6600;float:left;position: relative;">
						<i class="material-icons" style="color: #fff;font-size: 17px;">delete</i>
						<a id="delete" class="icon-name" style="color:#fff;top: -3px;position: relative;">Delete</a>
					</div>
					
					
				</div>
			</div>
		</form:form>
	</div>
</div>
<%@include file="footer.jsp"%>
<script
	src="resources/assets/bundles/bootstrap-daterangepicker/daterangepicker.js"></script>
<script src="resources/assets/js/listingsedit.js"></script>
