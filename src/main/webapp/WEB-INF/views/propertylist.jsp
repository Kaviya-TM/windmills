<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isELIgnored="false"%>
<link rel='shortcut icon' type='image/x-icon'
	href='resources/assets/img/favicon.ico' />
<link rel="stylesheet" href="resources/assets/css/servicelist.css">
<div class="propertylist">
	<%@include file="header.jsp"%>
	<%@include file="sidebar.jsp"%>
	<div class="main-content"
		style="background: rgb(229, 231, 233) !important; margin-top: 70px; width: 100%; min-height: 530px !important">
		<div class="row">
			<c:forEach items="${propertylist}" var="property">
				<form:form action="getPropertyValued" id="${property.propertyId}"
					class="column" style="border:1px solid #000080;width:24%">
					<div id="${property.propertyId}">
						<div class="imgPart">
							<img style="margin-top: 3px;"
								src="resources\assets\img\icon2.jpg">
						</div>
						<div class="contentPart">
							<div class="name">
								<b style="color: #000080">${property.propertyValued}</b>
							</div>
							<input type="hidden" id="propertyId" name="propertyId"
								value="${property.propertyId}" />
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
<script src="resources/assets/js/propertylist.js"></script>
