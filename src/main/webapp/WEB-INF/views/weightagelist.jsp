<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isELIgnored="false"%>
<title>Windmills | Property Valued</title>
<link rel='shortcut icon' type='image/x-icon'
	href='resources/assets/img/favicon.ico' />
<link rel="stylesheet" href="resources/assets/css/servicelist.css">
<div class="weightagelist">
	<%@include file="header.jsp"%>
	<%@include file="sidebar.jsp"%>
	<div class="main-content"
		style="background: rgb(229, 231, 233) !important; margin-top: 70px; width: 100%; min-height: 530px !important">
		<div class="row">
			<c:forEach items="${weightagelist}" var="weightage">
				<form:form action="getWeightage" id="${weightage.weightId}"
					class="column" style="border:1px solid #000080;width:24%">
					<div id="${weightage.weightId}">
						<div class="imgPart">
							<img style="margin-top: 3px;"
								src="resources\assets\img\icon2.jpg">
						</div>
						<div class="contentPart">
							<div class="name">
								<b style="color: #000080">${weightage.propertyType}</b>
							</div>
							<input type="hidden" id="weightId" name="weightId"
								value="${weightage.weightId}" />
						</div>
					</div>
				</form:form>
			</c:forEach>
		</div>
	</div>
</div>
<%@include file="footer.jsp"%>
<script src="resources/assets/js/weightagelist.js"></script>
