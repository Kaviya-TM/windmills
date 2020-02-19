<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isELIgnored="false"%>
<link rel='shortcut icon' type='image/x-icon'
	href='resources/assets/img/favicon.ico' />
<link rel="stylesheet" href="resources/assets/css/property.css">
<link rel="stylesheet" href="resources/assets/css/main.css">
<link rel="stylesheet"
	href="resources/assets/bundles/pretty-checkbox/pretty-checkbox.min.css">
<link rel="stylesheet"
	href="resources/assets/bundles/bootstrap-daterangepicker/daterangepicker.css">
<link
	href="resources/assets/bundles/vendor/datepicker/daterangepicker.css"
	rel="stylesheet" media="all">
<div class="propertyeditform">
	<%@include file="header.jsp"%>
	<%@include file="sidebar.jsp"%>
	<div class="main-content"
		style="background: rgb(229, 231, 233) !important; margin-top: 70px; width: 100%; min-height: 530px !important">
		<form:form action="editPropertyValued" id="" modelAttribute="property">
			<div class="form-group"
				style="color: #000080; width: 100%; height: unset; margin-bottom: 20px !important;">
				<div class="client header">Property Valued Details</div>
			</div>
			<div class="form-group">
				<div class="propertyholder">
					<label class="propertylabel">Property Valued</label> <input
						type="text" class="form-control form-control-sm propertytext"
						name="propertyValued" value="${propertyform.propertyValued}" id="" placeholder="Property Valued">
				</div>
				<div class="propertyholder">
					<label class="propertylabel">Valuation Approach</label> <input
						type="text" class="form-control form-control-sm propertytext"
						name="valuationApproach" value="${propertyform.valuationApproach}" id="" placeholder="Valuation Approach">
				</div>
				<div class="propertyholder">
					<label class="propertylabel">Approach Reasoning</label> <input
						type="text" class="form-control form-control-sm propertytext"
						name="approachReasoning" value="${propertyform.approachReasoning}" id="" placeholder="Approach Reasoning">
				</div>
				<input type="hidden" id="propertyId"" name="propertyId"
				value="${propertyform.propertyId}"/>
				<div class="form-group" style="width: 100%">
					<button type="submit" style="background: #000080">Update</button>
					<button type="none" id="cancel" style="background: #DF0101">Cancel</button>
				</div>
			</div>
		</form:form>
	</div>
</div>
<%@include file="footer.jsp"%>
<script
	src="resources/assets/bundles/bootstrap-daterangepicker/daterangepicker.js"></script>
<script src="resources/assets/js/propertyedit.js"></script>
