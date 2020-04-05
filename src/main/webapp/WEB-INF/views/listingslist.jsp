<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isELIgnored="false"%>
<title>Windmills | Listings</title>
<link rel='shortcut icon' type='image/x-icon'
	href='resources/assets/img/favicon.ico' />
<link rel="stylesheet" href="resources/assets/css/soldtransaction.css">
<div class="listingslist">
	<%@include file="header.jsp"%>
	<%@include file="sidebar.jsp"%>
	<div class="main-content"
		style="background: rgb(229, 231, 233) !important;margin-top: 70px; width: 100%;padding-right:0px; min-height: 530px !important">
		<div class="row">
			<div class="column" style="background:#ff6600;color:#fff !important;width:100% !important;margin-bottom:5px;border: 1px solid #ff6600;border-radius:5px;">
						<div class="head stylename" style="width:6.6%;color:#fff !important;font-weight:700">ListingsDate</div>
						<div class="head stylename" style="width:7%;color:#fff !important;font-weight:700">City</div>
						<div class="head stylename" style="color:#fff !important;font-weight:700">Area</div>
						<div class="head stylename" style="width:10%;color:#fff !important;font-weight:700">Neighbourhood</div>
						<div class="head stylename" style="width:12%;color:#fff !important;font-weight:700">Bulding Name</div>
						<div class="head stylename" style="width:12%;color:#fff !important;font-weight:700">Developer</div>
						<div class="head stylename" style="width:11%;color:#fff !important;font-weight:700">Property SubType</div>
						<div class="head stylename" style="width:8%;color:#fff !important;font-weight:700">Room No Est</div>
						<div class="head stylename" style="width:6%;color:#fff !important;font-weight:700">LandSize</div>
						<div class="head stylename" style="width:5%;color:#fff !important;font-weight:700">Size-sqf</div>
						<div class="head stylename" style="width:8%;color:#fff !important;font-weight:700">FinalRent</div>
						<div class="head stylename" style="width:6%;color:#fff !important;font-weight:700">Price</div>
			</div>
			<c:forEach items="${listingslist}" var="listings">
				<form:form action="getListings" id="${listings.listingsId}"  class="column" style="margin-bottom:5px;width:100% !important"> 
					<div id="${listings.listingsId}">
						<div class="head stylename" style="width:6.6%">${listings.listingsDate}</div>
						<div class="head stylename" style="width:7%">${listings.city}</div>
						<div class="head stylename">${listings.community}</div>
						<div class="head stylename" style="width:10%">${listings.subCommunity}</div>
						<div class="head stylename" style="width:12%">${listings.buildingName}</div>
						<div class="head stylename" style="width:12%">${listings.developer}</div>
						<div class="head stylename" style="width:12%">${listings.propertyListed}</div>
						<div class="head stylename" style="width:7%">${listings.noOfBedrooms}</div>
						<div class="head stylename" style="width:6%">${listings.landSize}</div>
						<div class="head stylename" style="width:5%">${listings.bua}</div>
						<div class="head stylename" style="width:10%">${listings.finalRent}</div>
						<div class="head stylename" style="width:0%">${listings.price}</div>
						<input type="hidden" id="listingsId" name="listingsId" value="${listings.listingsId}" />
				   </div>
				</form:form>
			</c:forEach>
<%-- 			<c:forEach items="${listingslist}" var="listings"> --%>
<%-- 				<form:form action="getListings" id="${listings.listingsId}" --%>
<%-- 					class="column" style="border:1px solid #000080;width:24%"> --%>
<%-- 					<div id="${listings.listingsId}"> --%>
<!-- 						<div class="imgPart"> -->
<!-- 							<img style="margin-top: 3px;" src="resources\assets\img\icon2.jpg"> -->
<!-- 						</div> -->
<!-- 						<div class="contentPart"> -->
<!-- 							<div class="name"> -->
<%-- 								<b style="color:#000080">${listings.listingsRef}</b> --%>
<!-- 							</div> -->
<%-- 							<input type="hidden" id="listingsId" name="listingsId" value="${listings.listingsId}" /> --%>
<!-- 						</div> -->
<!-- 					</div> -->
<%-- 				</form:form> --%>
<%-- 			</c:forEach> --%>
		</div>
	</div>
</div>
<%@include file="footer.jsp"%>
<script src="resources/assets/js/listingslist.js"></script>
