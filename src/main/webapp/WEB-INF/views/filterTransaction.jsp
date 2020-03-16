<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isELIgnored="false"%>
<title>Windmills | Sold Transactions</title>
<link rel='shortcut icon' type='image/x-icon'
	href='resources/assets/img/favicon.ico' />
<link rel="stylesheet" href="resources/assets/css/soldtransaction.css">
<div class="filter">
	<%@include file="header.jsp"%>
	<%@include file="sidebar.jsp"%>
	<div class="main-content"
		style="background: rgb(229, 231, 233) !important;margin-top: 70px; width: 100%;padding-right:0px; min-height: 530px !important">
		<div class="row">
			<div class="column" style="background:#ff6600;color:#fff !important;margin-bottom:5px;border: 1px solid #ff6600;border-radius:5px;">
						<div class="head stylename" style="width:5.6%;color:#fff !important;font-weight:700">Date</div>
						<div class="head stylename" style="width:5%;color:#fff !important;font-weight:700">Type</div>
						<div class="head stylename" style="width:6%;color:#fff !important;font-weight:700">City</div>
						<div class="head stylename" style="color:#fff !important;font-weight:700">Area</div>
						<div class="head stylename" style="width:9%;color:#fff !important;font-weight:700">Neighbourhood</div>
						<div class="head stylename" style="width:12%;color:#fff !important;font-weight:700">Bulding Name</div>
						<div class="head stylename" style="width:12%;color:#fff !important;font-weight:700">Developer</div>
						<div class="head stylename" style="width:11%;color:#fff !important;font-weight:700">Property SubType</div>
						<div class="head stylename" style="width:8%;color:#fff !important;font-weight:700">Room No Est</div>
						<div class="head stylename" style="width:6%;color:#fff !important;font-weight:700">LA-sqf</div>
						<div class="head stylename" style="width:5%;color:#fff !important;font-weight:700">Size-sqf</div>
						<div class="head stylename" style="color:#fff !important;font-weight:700">Price AED</div>
						<div class="head stylename" style="width:0%;color:#fff !important;font-weight:700">AED/sqf</div>
			</div>
			<c:forEach items="${filterTransaction}" var="transaction">
				<div id="${transaction.transactionId}"
					class="column" style="margin-bottom:5px">
					<div id="${transaction.transactionId}">
						<div class="head stylename" style="width:5.6%">${transaction.date}</div>
						<div class="head stylename" style="width:5%">${transaction.type}</div>
						<div class="head stylename" style="width:6%">${transaction.city}</div>
						<div class="head stylename">${transaction.area}</div>
						<div class="head stylename" style="width:9%">${transaction.neighbourhood}</div>
						<div class="head stylename" style="width:12%">${transaction.buildingName}</div>
						<div class="head stylename" style="width:12%">${transaction.developer}</div>
						<div class="head stylename" style="width:12%">${transaction.propertySubType}</div>
						<div class="head stylename" style="width:7%">${transaction.roomNoEstimated}</div>
						<div class="head stylename" style="width:6%">${transaction.landAreaSqf}</div>
						<div class="head stylename" style="width:5%">${transaction.sizeSqf}</div>
						<div class="head stylename" style="width:8%">${transaction.price}</div>
						<div class="head stylename" style="width:0%">${transaction.pricePerSqFt}</div>
						<input type="hidden" id="transactionId" name="transactionId" value="${transaction.transactionId}" />
				   </div>
				</div>
			</c:forEach>
			<div class="column" style="background:darkseagreen;color:#fff !important;margin-top:10px;margin-bottom:5px;border: 1px solid darkseagreen;border-radius:5px;">
						<div class="head stylename" style="width:5.6%;color:#fff !important;font-weight:700">${dateAvg}</div>
						<div class="head stylename" style="width:5%;color:darkseagreen !important;font-weight:700">Type</div>
						<div class="head stylename" style="width:6%;color:darkseagreen !important;font-weight:700">City</div>
						<div class="head stylename" style="color:darkseagreen !important;font-weight:700">Area</div>
						<div class="head stylename" style="width:9%;color:darkseagreen !important;font-weight:700">Neighbourhood</div>
						<div class="head stylename" style="width:12%;color:darkseagreen !important;font-weight:700">Bulding Name</div>
						<div class="head stylename" style="width:12%;color:darkseagreen !important;font-weight:700">Developer</div>
						<div class="head stylename" style="width:11%;color:darkseagreen !important;font-weight:700">Property SubType</div>
						<div class="head stylename" style="width:8%;color:darkseagreen !important;font-weight:700">${bedAvg}</div>
						<div class="head stylename" style="width:6%;color:darkseagreen !important;font-weight:700">LA-sqf</div>
						<div class="head stylename" style="width:5%;color:#fff !important;font-weight:700">${sizeAvg}</div>
						<div class="head stylename" style="color:#fff !important;font-weight:700">${priceAvg}</div>
						<div class="head stylename" style="width:0%;color:#fff !important;font-weight:700">${pricePerAvg}</div>
			</div>
		</div>
	</div>
</div>
<%@include file="footer.jsp"%>
<script src="resources/assets/js/filter.js"></script>
	