<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isELIgnored="false"%>
<title>Windmills | Client</title>
<link rel='shortcut icon' type='image/x-icon'
	href='resources/assets/img/favicon.ico' />
<link rel="stylesheet" href="resources/assets/css/servicelist.css">
<div class="clientlist">
	<%@include file="header.jsp"%>
	<%@include file="sidebar.jsp"%>
	<div class="main-content"
		style="background: rgb(229, 231, 233) !important; margin-top: 70px; width: 100%; min-height: 530px !important">
		<div class="row">
			<c:forEach items="${clientlist}" var="clients">
				<form:form action="getClient" id="${clients.clientId}"
					class="column" style="border:1px solid #000080;width:24%">
					<div id="${clients.clientId}">
						<div class="imgPart">
							<img style="margin-top: 3px;"
								src="resources\assets\img\Windmills-Group-Logo-Small.png">
						</div>
						<div class="contentPart">
							<div class="name" style="margin-top:2px !important">
								<b style="color: #000080">${clients.clientName}</b>
							</div>
							<div class="email">${clients.contactPerson}</div>
							<input type="hidden" id="clientId" name="clientId"
								value="${clients.clientId}" />
						</div>
					</div>
				</form:form>
			</c:forEach>
		</div>
	</div>
</div>
<%@include file="footer.jsp"%>
<script src="resources/assets/js/clientlist.js"></script>
