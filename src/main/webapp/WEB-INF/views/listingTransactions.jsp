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
<link
	href="resources/assets/bundles/vendor/datepicker/daterangepicker.css"
	rel="stylesheet" media="all">
<div class="listings">
	<%@include file="header.jsp"%>
	<%@include file="sidebar.jsp"%>
	<div class="main-content"
		style="background: rgb(229, 231, 233) !important; margin-top: 70px;padding-top:7px !important;width: 100%; min-height: 530px !important">
		<form:form action="addlisitings" id="addlisitings" modelAttribute="">
				<div class="listholder">
					<label class="listlabel">Windmills Ref</label>
				    <input type="text" class="form-control form-control-sm listtext" name="" id="" placeholder="Windmills Reference" autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Listings Ref</label>
				    <input type="text" class="form-control form-control-sm listtext" name="" id="" placeholder="Listings Reference" autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Source</label>
				    <input type="text" class="form-control form-control-sm listtext" name="" id="" placeholder="Source" autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Listing Website Link</label>
				    <input type="text" class="form-control form-control-sm listtext" name="" id="" placeholder="Listing Website Link" autocomplete="on">
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
						"height: 27px !important;font-size: 12px !important; font-family: sans-serif;" name="" id="">
					</div>
				</div>
				<div class="listholder">
					<label class="listlabel">Property Listed</label>
				    <input type="text" class="form-control form-control-sm listtext" name="" id="" placeholder="Property Listed" autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Tenure</label>
				    <input type="text" class="form-control form-control-sm listtext" name="" id="" placeholder="Tenure" autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Unit Number</label>
				    <input type="text" class="form-control form-control-sm listtext" name="" id="" placeholder="Unit Number" autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Floor Number</label>
				    <input type="text" class="form-control form-control-sm listtext" name="" id="" placeholder="Floor Number" autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Street Number</label>
				    <input type="text" class="form-control form-control-sm listtext" name="" id="" placeholder="Street Number" autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Street Name</label>
				    <input type="text" class="form-control form-control-sm listtext" name="" id="" placeholder="Street Name" autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Building Number</label>
				    <input type="text" class="form-control form-control-sm listtext" name="" id="" placeholder="Building Number" autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Building Name</label>
					<select class="form-control form-control-sm listtext" name="" id="">  
						<c:forEach items="${bullist}" var="item"> 
							<option value="" hidden>-- Select Building/Project Name ---</option> 
							<option value="${item}">${item}</option>
						</c:forEach> 
					</select> 
				</div>
				<div class="listholder">
					<label class="listlabel" style="line-height:16px">Sub Community Name</label> 
						 <select class="form-control form-control-sm listtext" name="" id=""> 
 							<c:forEach items="${hoodlist}" var="item">
 								<option value="" hidden>-- Select Sub Community ---</option>
							<option value="${item}">${item}</option> 
 							</c:forEach> 
 						</select> 
				</div>
				<div class="listholder">
					<label class="listlabel" style="line-height:16px;margin-bottom: 0px;">Community/Area Name</label>
				 	<select class="form-control form-control-sm listtext" name="" id="">
						<c:forEach items="${arealist}" var="item"> 
							<option value="" hidden>-- Select Community/Area---</option>
							<option value="${item}">${item}</option>
							</c:forEach>
					</select>
				</div>
				<div class="listholder">
					<label class="listlabel">City</label>
					 <select class="form-control form-control-sm listtext" name="" id="">
						<c:forEach items="${citylist}" var="item">
							<option value="${item}">${item}</option>
						</c:forEach>
					</select>
				</div>
				<div class="listholder">
					<label class="listlabel">Plot Number</label>
				    <input type="text" class="form-control form-control-sm listtext" name="" id="" placeholder="Plot Number" autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Makani</label>
				    <input type="text" class="form-control form-control-sm listtext" name="" id="" placeholder="Makani" autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Location</label> <select
						class="form-control form-control-sm listtext"
						name="" id="">
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
						name="valuationReport.locationCoord" id="locationCoord"
						placeholder="Location Coordinates" autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Land Size</label>
				    <input type="text" class="form-control form-control-sm listtext" name="" id="" placeholder="" autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">BUA</label>
				    <input type="text" class="form-control form-control-sm listtext" name="" id="" placeholder="BUA" autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Property Placement</label> <select
						class="form-control form-control-sm listtext"
						name="" id="">
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
						name="" id="">
						<option value="Single Row">Single Row</option>
						<option value="Back To Back" selected>Back To Back</option>
						<option value="Not Applicable">Not Applicable</option>
					</select>
				</div>
				<div class="listholder">
					<label class="listlabel">Property Type</label> <input type="text"
						class="form-control form-control-sm listtext"
						name="" id=""
						placeholder="Property Type" autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Property Condition</label> <select
						class="form-control form-control-sm listtext"
						name="" id="">
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
						name="" id="">
						<option value="Standard" selected>Standard</option>
						<option value="Non-Standard">Non-Standard</option>
					</select>
				</div>
				<div class="listholder">
					<label class="listlabel">Developer</label> <select
						class="form-control form-control-sm listtext"
						name="" id="">
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
						name="" id=""
						placeholder="Estimation Age(Years)" autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Pool</label> <select
						class="form-control form-control-sm listtext"
						name="" id="">
						<option value="Yes">Yes</option>
						<option value="No" selected>No</option>
					</select>
				</div>
				<div class="listholder">
					<label class="listlabel">Gym</label> <select
						class="form-control form-control-sm listtext"
						name="" id="">
						<option value="Yes">Yes</option>
						<option value="No" selected>No</option>
					</select>
				</div>
				<div class="listholder">
					<label class="listlabel">Play Area</label> <select
						class="form-control form-control-sm listtext"
						name="" id="">
						<option value="Yes">Yes</option>
						<option value="No" selected>No</option>
					</select>
				</div>
				<div class="listholder">
					<label class="listlabel" style="line-height: 16px">Other
						Community Facilities</label> <input type="text"
						class="form-control form-control-sm listtext"
						name="" id=""
						placeholder="Other Community Facilities" autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Completion Status</label> <select
						class="form-control form-control-sm listtext"
						name="" id="">
						<option value="Ready" selected>Ready</option>
						<option value="Not Ready">Not Ready</option>
					</select>
				</div>
				<div class="listholder">
					<label class="listlabel">No of Bedrooms</label> <select
						class="form-control form-control-sm listtext"
						name="" id="">
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
						name="" id="">
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
						name="" id="">
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
						name="" id="">
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
					</select>
				</div>
				<div class="listholder">
					<label class="listlabel">Landscaping</label> <select
						class="form-control form-control-sm listtext"
						name="" id="">
						<option value="Yes">Yes</option>
						<option value="No" selected>No</option>
						<option value="Semi-Landscape">Semi-Landscape</option>
					</select>
				</div>
				<div class="listholder">
					<label class="listlabel">White Goods</label> <select
						class="form-control form-control-sm listtext"
						name="" id="">
						<option value="Yes">Yes</option>
						<option value="No" selected>No</option>
					</select>
				</div>
				<div class="listholder">
					<label class="listlabel">Furnished</label> <select
						class="form-control form-control-sm listtext"
						name="valuationReport.furnished" id="">
						<option value="Yes" selected>Yes</option>
						<option value="No">No</option>
						<option value="Semi-Furnished">Semi-Furnished</option>
					</select>
				</div>
				<div class="listholder">
					<label class="listlabel">Utilities Connected</label> <select
						class="form-control form-control-sm listtext"
						name="valuationReport.utilityConnected" id="">
						<option value="Yes">Yes</option>
						<option value="No" selected>No</option>
					</select>
				</div>
				<div class="listholder">
					<label class="listlabel">Agent Name</label> <input type="text"
						class="form-control form-control-sm listtext"
						name="" id=""
						placeholder="Agent " autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Agent </label> <input type="text"
						class="form-control form-control-sm listtext"
						name="" id=""
						placeholder="Agent " autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Price </label> <input type="text"
						class="form-control form-control-sm listtext"
						name="" id=""
						placeholder="Price " autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Rent </label> <input type="text"
						class="form-control form-control-sm listtext"
						name="" id=""
						placeholder="Rent " autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel">Rent/Price </label> <input type="text"
						class="form-control form-control-sm listtext"
						name="" id=""
						placeholder="Rent/Price" autocomplete="on">
				</div>
				<div class="listholder">
					<label class="listlabel" style="display:none">Rent/Price </label> <input type="text"
						class="form-control form-control-sm listtext" style="display:none"
						name="" id=""
						placeholder="Rent/Price" autocomplete="on">
				</div>
				<div class="listholder" style="margin-top: -4px">
					<button type="submit" id="" class="savebtn">Save</button>
				</div>
		</form:form>
	</div>
</div>
<%@include file="footer.jsp"%>
<script src="resources/assets/bundles/bootstrap-daterangepicker/daterangepicker.js"></script>
<script src="resources/assets/js/listings.js"></script>
