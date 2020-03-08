<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isELIgnored="false"%>
<link rel='shortcut icon' type='image/x-icon'
	href='resources/assets/img/favicon.ico' />
<link rel="stylesheet" href="resources/assets/css/valuationlist.css">
<div class="valuationlist">
	<%@include file="header.jsp"%>
	<%@include file="sidebar.jsp"%>
	<div class="main-content"
		style="background: rgb(229, 231, 233) !important; margin-top: 70px; width: 100%; min-height: 530px !important">
		<div class="row">
			<div class="column" style="background:none;border:none;margin-bottom:10px">
							<div class="head color" style="width: 8%; color:#fff;">
								<b>Windmills Ref</b>
							</div>
							<div class="head color1" style="width: 8%;color:#fff;">
								<b>Client Ref</b>
							</div>
							<div class="head color" style="width: 8%;color:#fff;">
								<b>Client Name</b>
							</div>
							<div class="head color1" style="width: 10%;color:#fff;">
								<b>Property Valued</b>
							</div>
							<div class="head color" style="width: 27%;color:#fff;">
								<b>Property Address</b>
							</div>
							<div class="head color1" style="width: 9%;color:#fff;">
								<b>Valuation Date</b>
							</div>
							<div class="head color" style="width: 9%;color:#fff;">
								<b>Service Officer</b>
							</div>
							<div class="head color1" style="width: 8%;color:#fff;">
								<b>MV Rate</b>
							</div>
							<div class="head color" style="border-right:none;width: 8%;color:#fff;">
								<b>MV</b>
							</div>
				</div>
			<c:forEach items="${valuationlist}" var="valuations">
				<form:form action="getValuation" id="${valuations.reportId}"
					class="column" style="margin-bottom:5px">
					<div id="${valuations.reportId}">
							<div class="head"  style="width: 8%;height:45px">
								<b style="color: #000080">${valuations.windmillsRef}</b>
							</div>
							<div class="head"  style="width: 8%;height:45px">
								<b style="color: #000080">${valuations.clientRef}</b>
							</div>
							<div class="head"  style="width: 8%;height:45px">
								<b style="color: #000080">${valuations.clientName}</b>
							</div>
							<div class="head"  style="width: 10%;height:45px">
								<b style="color: #000080">${valuations.propertyValued}</b>
							</div>
							<div class="head"  style="width: 27%;height:45px">
								<b style="color: #000080">${valuations.propertyAddress}</b>
							</div>
							<div class="head"  style="width: 9%;height:45px">
								<b style="color: #000080">${valuations.valDate}</b>
							</div>
							<div class="head"  style="width: 9%;height:45px">
								<b style="color: #000080">${valuations.serviceOffName}</b>
							</div>
							<div class="head" style="width:8%;height:45px">
								<b style="color: #000080">${valuations.marketValueRate}</b>
							</div>
							<div class="head"  style="width: 8%;height:45px;border-right:none;">
								<b style="color: #000080">${valuations.marketValue}</b>
							</div>
							<input type="hidden" id="reportId" name="reportId"
								value="${valuations.reportId}" />
					</div>
				</form:form>
			</c:forEach>
		</div>
	</div>
</div>
<%@include file="footer.jsp"%>
<script src="resources/assets/js/valuationlist.js"></script>
	