<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isELIgnored="false"%>
<title>Windmills | Sold Transactions</title>
<link rel='shortcut icon' type='image/x-icon'
	href='resources/assets/img/favicon.ico' />
<link rel="stylesheet" href="resources/assets/css/soldtransaction.css">
<div class="soldtransaction">
	<%@include file="header.jsp"%>
	<%@include file="sidebar.jsp"%>
	<div class="main-content"
		style="background: rgb(229, 231, 233) !important;margin-top: 70px; width: 100%;padding-right:0px; min-height: 530px !important">
		<div class="row">
			<div class="column" style="background:none;border:none;margin-bottom:10px">
				<div class="head" style="width:6%">
					<b>City</b>
				</div>
				<div class="head">
					<b>Area</b>
				</div>
				<div class="head" style="width:8.7%">
					<b>NeighbourHood</b>
				</div>
				<div class="head" style="width:8.3%">
					<b>Building Name</b>
				</div>
				<div class="head" style="width:9.8%">
					<b>Property SubType</b>
				</div>
				<div class="head" style="width:5.9%">
					<b>Developer</b>
				</div>
				<div class="head" style="width:10.7%">
					<b>Room No Estimated</b>
				</div>
				<div class="head" style="width:5%">
					<b>Size sqf</b>
				</div>
				<div class="head" style="width:7.8%">
					<b>Land Area sqf</b>
				</div>
				<div class="head" style="width:5%">
					<b>Date</b>
				</div>
				<div class="head" style="width:5%">
					<b>TYpe</b>
				</div>
				<div class="head">
					<b>Price AED</b>
				</div>
				<div class="head">
					<b> AED/sqf</b>
				</div>
			</div>
			<c:forEach items="${soldTransaction}" var="transaction">
<%-- 				<form:form action="getValuation" id="${transaction.transactionId}" --%>
				<div id="${transaction.transactionId}"
					class="column" style="margin-bottom:5px">
					<div id="${transaction.transactionId}">
						<div class="head stylename" style="width:6%">${transaction.city}</div>
						<div class="head stylename">${transaction.area}</div>
						<div class="head stylename" style="width:8.7%">${transaction.neighbourhood}</div>
						<div class="head stylename" style="width:8.3%">${transaction.buildingName}</div>
						<div class="head stylename" style="width:9.8%">${transaction.propertySubType}</div>
						<div class="head stylename" style="width:5.9%">${transaction.developer}</div>
						<div class="head stylename" style="width:10.7%">${transaction.roomNoEstimated}</div>
						<div class="head stylename" style="width:5%">${transaction.sizeSqf}</div>
						<div class="head stylename" style="width:7.8%">${transaction.landAreaSqf}</div>
						<div class="head stylename" style="width:5%">${transaction.date}</div>
						<div class="head stylename" style="width:5%">${transaction.type}</div>
						<div class="head stylename">${transaction.price}</div>
						<div class="head stylename">${transaction.pricePerSqFt}</div>
						<input type="hidden" id="transactionId" name="transactionId" value="${transaction.transactionId}" />
				   </div>
<%-- 				</form:form> --%>
				</div>
			</c:forEach>
		</div>
	</div>
</div>
<%@include file="footer.jsp"%>
<script src="resources/assets/js/soldtransaction.js"></script>
	