<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isELIgnored="false"%>
<link rel='shortcut icon' type='image/x-icon'
	href='resources/assets/img/favicon.ico' />
<link rel="stylesheet" href="resources/assets/css/servicelist.css">
<div class="servicelist">
	<%@include file="header.jsp"%>
	<%@include file="sidebar.jsp"%>
	<div class="main-content"
		style="background: rgb(229, 231, 233) !important; margin-top: 70px; width: 100%; min-height: 530px !important">
		<!-- 		        <section class="section"> -->
		<!-- 		    		<div class="row clearfix"> -->
		<!--               			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"> -->
		<!--                 			<div class="card"> -->
		<!--                   				<div class="card-body"> -->
		<!-- 									<div id="btnContainer"> -->
		<!-- 									  <button class="btnhold" onclick="listView()"><i class="fa fa-bars"></i></button>  -->
		<!-- 									  <button class="btnhold" onclick="gridView()"><i class="fa fa-th-large"></i></button> -->
		<!-- 									</div> -->
		<!-- 									<br> -->
		<div class="row">
			<c:forEach items="${officerlist}" var="officers">
				<form:form action="getServiceOfficer" id="${officers.serviceId}"
					class="column" style="border:1px solid #000080;">
					<div id="${officers.serviceId}">
						<div class="imgPart">
							<img style="margin-top: 3px;"
								src="resources\assets\img\Windmills-Group-Logo-Small.png">
						</div>
						<div class="contentPart">
							<div class="name">
								<b style="color: #000080">${officers.name}</b>
							</div>
							<%-- 											    	<div class="email"><b>Email:</b> ${officers.email}</div> --%>
							<%-- 											    	<div class="phone"><b>Phone:</b> ${officers.phone} </div> --%>
							<%-- 											    	<div class="position"><b>Position:</b> ${officers.position} </div> --%>
							<%-- 											    	<div class="position"><b>Join Date:</b> ${officers.joinDate} </div> --%>
							<%-- 											    	<c:if test="${not empty officers.separationDate}"> --%>
							<%-- 											    		<div class="position"><b>Separation Date:</b> ${officers.separationDate} </div> --%>
							<%-- 											    	</c:if> --%>
							<input type="hidden" id="serviceId" name="serviceId"
								value="${officers.serviceId}" />
						</div>
					</div>
				</form:form>
			</c:forEach>
		</div>
		<!--                     		</div> -->
		<!--                   		</div> -->
		<!--                		 </div> -->
		<!--               	</div>             -->
		<!--       			</section>        -->
	</div>
</div>
<%@include file="footer.jsp"%>
<script src="resources/assets/js/servicelist.js"></script>
