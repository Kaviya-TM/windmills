<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isELIgnored="false"%>
<title>Windmills | Previous Valuations</title>
<link rel='shortcut icon' type='image/x-icon'
	href='resources/assets/img/favicon.ico' />
<link rel="stylesheet" href="resources/assets/css/soldtransaction.css">
<div class="masterlist">
	<%@include file="header.jsp"%>
	<%@include file="sidebar.jsp"%>
	<div class="main-content"
		style="background: rgb(229, 231, 233) !important;margin-top: 70px; width: 100%;padding-right:0px; min-height: 530px !important">
		<div class="row">
			<div class="column" style="background:#ff6600;color:#fff !important;width:100% !important;margin-bottom:5px;border: 1px solid #ff6600;border-radius:5px;">
						<div class="head stylename" style="width:5.6%;color:#fff !important;font-weight:700">Date</div>
						<div class="head stylename" style="width:7%;padding-left:29px;color:#fff !important;font-weight:700">WM-Ref</div>
						<div class="head stylename" style="width:6%;color:#fff !important;font-weight:700;padding-left:40px">Valuer</div>
						<div class="head stylename" style="width:7%;color:#fff !important;font-weight:700;padding-left: 31px;">Category</div>
						<div class="head stylename" style="width:8.2%;color:#fff !important;font-weight:700;padding-left: 20px;">Property</div>
						<div class="head stylename" style="width:5%;color:#fff !important;font-weight:700">Rooms</div>
						<div class="head stylename" style="width:11%;color:#fff !important;font-weight:700;padding-left: 31px;'">Community</div>
						<div class="head stylename" style="width:11%;color:#fff !important;font-weight:700;padding-left: 31px;">SubCommunity</div>
						<div class="head stylename" style="width:12%;color:#fff !important;font-weight:700;padding-left: 31px;">Building Name</div>
						<div class="head stylename" style="width:3%;color:#fff !important;font-weight:700">Age</div>
						<div class="head stylename" style="width:4%;color:#fff !important;font-weight:700">View</div>
						<div class="head stylename" style="width:4%;color:#fff !important;font-weight:700">LA/sqf</div>
						<div class="head stylename" style="width:5%;color:#fff !important;font-weight:700">BUA/sqf</div>
						<div class="head stylename" style="width:6%;color:#fff !important;font-weight:700">Price AED</div>
						<div class="head stylename" style="width:5%;color:#fff !important;font-weight:700">Price/Sqt</div>
			</div>
			<c:forEach items="${masterValuation}" var="master">
				<form:form action="getMaster" id="${master.masterId}"  class="column" style="margin-bottom:5px;width:100% !important"> 
					<div id="${master.masterId}">
						<div class="head stylename" style="width:5.6%;padding:0px;line-height:22px">${master.instructionDate}</div>
						<div class="head stylename" style="width:9%;">${master.wmRef}</div>
						<div class="head stylename" style="width:6%;">${master.valuer}</div>
						<div class="head stylename" style="width:6%">${master.type}</div>
						<div class="head stylename" style="width:8.2%">${master.propValued}</div>
						<div class="head stylename" style="width:5%;text-align:center">${master.noOfRooms}</div>
						<div class="head stylename" style="width:11%">${master.community}</div>
						<div class="head stylename" style="width:11%">${master.subCommunity}</div>
						<div class="head stylename" style="width:12%">${master.building}</div>
						<div class="head stylename" style="width:2%">${master.bldgAge}</div>
						<div class="head stylename" style="width:4%">${master.viewRating}</div>
						<div class="head stylename" style="width:4%">${master.landsizepersqf}</div>
						<div class="head stylename" style="width:5%">${master.buapersqf}</div>
						<div class="head stylename" style="width:6%">${master.mv}</div>
						<div class="head stylename" style="width:5%">${master.mvpersqf}</div>
						<input type="hidden" id="masterId" name="masterId" value="${master.masterId}" />
				   </div>
				</form:form>
			</c:forEach>
<%-- 			<c:forEach items="${listingslist}" var="listings"> --%>
<%-- 				<form:form action="getListings" id="${master.listingsId}" --%>
<%-- 					class="column" style="border:1px solid #000080;width:24%"> --%>
<%-- 					<div id="${master.listingsId}"> --%>
<!-- 						<div class="imgPart"> -->
<!-- 							<img style="margin-top: 3px;" src="resources\assets\img\icon2.jpg"> -->
<!-- 						</div> -->
<!-- 						<div class="contentPart"> -->
<!-- 							<div class="name"> -->
<%-- 								<b style="color:#000080">${master.listingsRef}</b> --%>
<!-- 							</div> -->
<%-- 							<input type="hidden" id="listingsId" name="listingsId" value="${master.listingsId}" /> --%>
<!-- 						</div> -->
<!-- 					</div> -->
<%-- 				</form:form> --%>
<%-- 			</c:forEach> --%>
		</div>
	</div>
</div>
<%@include file="footer.jsp"%>
<script src="resources/assets/js/masterlist.js"></script>
