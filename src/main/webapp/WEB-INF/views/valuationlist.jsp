<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isELIgnored="false"%>
<link rel='shortcut icon' type='image/x-icon'
	href='resources/assets/img/favicon.ico' />
<link rel="stylesheet" href="resources/assets/css/servicelist.css">
<div class="valuationlist">
	<%@include file="header.jsp"%>
	<%@include file="sidebar.jsp"%>
	<div class="main-content"
		style="background: rgb(229, 231, 233) !important; margin-top: 70px; width: 100%; min-height: 530px !important">
		<div class="row">
			<c:forEach items="${valuationlist}" var="valuations">
				<form:form action="getValuation" id="${valuations.reportId}"
					class="column" style="border:1px solid #000080;width:11%;padding:2px">
					<div id="${valuations.reportId}">
						<div class="imgPart" style="width:26%">
							<img style="margin-top: 3px;"
								src="resources\assets\img\icon3.png">
						</div>
						<div class="contentPart">
							<div class="name">
								<b style="color: #000080">${valuations.windmillsRef}</b>
							</div>
							<input type="hidden" id="reportId" name="reportId"
								value="${valuations.reportId}" />
						</div>
					</div>
				</form:form>
			</c:forEach>
		</div>
	</div>
</div>
<%@include file="footer.jsp"%>
<script src="resources/assets/js/valuationlist.js"></script>
