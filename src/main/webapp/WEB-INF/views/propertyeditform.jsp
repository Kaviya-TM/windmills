<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isELIgnored="false"%>
<title>Windmills | Property Valued</title>
<link rel='shortcut icon' type='image/x-icon'
	href='resources/assets/img/favicon.ico' />
<link rel="stylesheet" href="resources/assets/css/property.css">
<link rel="stylesheet" href="resources/assets/css/main.css">
<link rel="stylesheet"
	href="resources/assets/bundles/pretty-checkbox/pretty-checkbox.min.css">
<link rel="stylesheet"
	href="resources/assets/bundles/bootstrap-daterangepicker/daterangepicker.css">
<link rel="stylesheet"
	href="resources\assets\fonts\material\material-icons.css">
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
								<div class="propertyholder">
					<label class="propertylabel">Maximum Age</label> <input
						type="text" class="form-control form-control-sm propertytext"
						name="maxage" id="" value="${propertyform.maxage}" placeholder="Maximum Age">
				</div>
				<div class="propertyholder">
					<label class="propertylabel">Parking Price</label> <input
						type="text" class="form-control form-control-sm propertytext"
						name="parkingprice" id="" value="${propertyform.parkingprice}"  placeholder="Parking Price">
				</div>
				<div class="propertyholder">
					<label class="propertylabel">Pool Price</label> <input
						type="text" class="form-control form-control-sm propertytext"
						name="poolprice" id="" value="${propertyform.poolprice}" placeholder="Pool Price">
				</div>
				<div class="propertyholder">
					<label class="propertylabel">Landscape Price</label> <input
						type="text" class="form-control form-control-sm propertytext"
						name="landscapeprice" value="${propertyform.parkingprice}"  id="" placeholder="Landscape Price">
				</div>
				<div class="propertyholder">
					<label class="propertylabel">WhiteGoods Price</label> <input
						type="text" class="form-control form-control-sm propertytext"
						name="whitegoodsprice" value="${propertyform.whitegoodsprice}" id="" placeholder="WhiteGoods Price">
				</div>
				<div class="propertyholder">
					<label class="propertylabel">Utilities Connected Price</label> <input
						type="text" class="form-control form-control-sm propertytext"
						name="utilityprice" id="" value="${propertyform.utilityprice}" placeholder="Utilities Connected Price">
				</div>
				<div class="propertyholder">
					<label class="propertylabel">Developer Margin</label> <input
						type="text" class="form-control form-control-sm propertytext"
						name="devmargin" value="${propertyform.devmargin}" id="" placeholder="Developer Margin">
				</div>
				<input type="hidden" id="propertyId"" name="propertyId"
				value="${propertyform.propertyId}"/>
				<div class="form-group" style="width: 100%">
					<button type="submit" style="width: 7% !important;background: forestgreen;margin-right:5px;float:left">Update</button>
					<button type="none" id="cancel" style="width: 7% !important;background: orange;margin-right:5px;float:left">Cancel</button>
					<div type="none" style="cursor:pointer;border-radius: 5px;width: 7% !important;top: 10px;background: #ff6600;float:left; padding: 1px;position: relative;">
						<i class="material-icons" style="color: #fff;font-size: 20px;">delete</i>
						<a id="delete" class="icon-name" style="color:#fff;top: -4px;position: relative;">Delete</a>
					</div>
					
					
				</div>
			</div>
		</form:form>
	</div>
</div>
<%@include file="footer.jsp"%>
<script
	src="resources/assets/bundles/bootstrap-daterangepicker/daterangepicker.js"></script>
<script src="resources/assets/js/propertyedit.js"></script>
