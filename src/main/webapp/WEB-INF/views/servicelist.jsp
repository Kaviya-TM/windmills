<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isELIgnored="false"%>
<title>Windmills | Service Officer</title>
<link rel='shortcut icon' type='image/x-icon'
	href='resources/assets/img/favicon.ico' />
<link rel="stylesheet" href="resources/assets/css/servicelist.css">
<div class="servicelist">
	<%@include file="header.jsp"%>
	<%@include file="sidebar.jsp"%>
	<div class="main-content"
		style="background: rgb(229, 231, 233) !important; margin-top: 70px; width: 100%; min-height: 530px !important">
		<div class="row">
			<c:forEach items="${Officerlist}" var="Officers">
				<form:form action="getServiceOfficer" id="${Officers.serviceId}"
					class="column" style="border:1px solid #000080;">
					<div id="${Officers.serviceId}">
						<div class="imgPart">
							<img style="margin-top: 3px;"
								src="resources\assets\img\icon1.jpg">
						</div>
						<div class="contentPart">
							<div class="name">
								<b style="color: #000080">${Officers.name}</b>
							</div>
							<input type="hidden" id="serviceId" name="serviceId"
								value="${Officers.serviceId}" />
						</div>
					</div>
				</form:form>
			</c:forEach>
		</div>
	</div>
</div>
<%@include file="footer.jsp"%>
<script src="resources/assets/js/servicelist.js"></script>
