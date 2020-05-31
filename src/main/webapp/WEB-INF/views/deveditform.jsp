<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isELIgnored="false"%>
<title>Windmills | Development</title>
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
<div class="deveditform">
	<%@include file="header.jsp"%>
	<%@include file="sidebar.jsp"%>
	<div class="main-content"
		style="background: rgb(229, 231, 233) !important; margin-top: 70px; width: 100%; min-height: 530px !important">
		<form:form action="editDevelopment" id="" modelAttribute="development">
			<div class="form-group"
				style="color: #000080; width: 100%; height: unset; margin-bottom: 20px !important;">
				<div class="client header">For Villa</div>
			</div>
			<div class="form-group">
				<div class="propertyholder">
					<label class="propertylabel">Emirates</label>
					<select
						class="form-control form-control-sm propertytext"
						name="emirates" id="" >
							<option value="${devform.emirates}" selected hidden>${devform.emirates}</option>
							<option value="Dubai">Dubai</option>
							<option value="Abu Dhabi">Abu Dhabi</option>
							<option value="Sharjah">Sharjah</option>
							<option value="Ajman">Ajman</option>
							<option value="Al Ain">Al Ain</option>
							<option value="Ras Al Khaimah">Ras Al Khaimah</option>
							<option value="Fujairah">Fujairah</option>
							<option value="Umm Al Quwain">Umm Al Quwain</option>
					</select>
					
				</div>
				<div class="propertyholder">
					<label class="propertylabel">3 Star</label> <input
						type="text" class="form-control form-control-sm propertytext"
						name="star3"  value="${devform.star3}" id="" placeholder="3 Star">
				</div>
				<div class="propertyholder">
					<label class="propertylabel">4 Star</label> <input
						type="text" class="form-control form-control-sm propertytext"
						name="star4" value="${devform.star4}"  id="" placeholder="4 Star">
				</div>
				<div class="propertyholder">
					<label class="propertylabel">5 Star</label> <input
						type="text" class="form-control form-control-sm propertytext"
						name="star5" value="${devform.star5}" id="" placeholder="5 Star">
				</div>
				<div class="propertyholder">
					<label class="propertylabel">Professional Charges</label> <input
						type="text" class="form-control form-control-sm propertytext"
						name="profCharges" value="${devform.profCharges}" id="" placeholder="Professional Charges">
				</div>
				<div class="propertyholder">
					<label class="propertylabel">Contingency Margin</label> <input
						type="text" class="form-control form-control-sm propertytext"
						name="conMargin" value="${devform.conMargin}" id="" placeholder="Contingency Margin">
				</div>
				<div class="propertyholder">
					<label class="propertylabel">Obsolescence</label> <input
						type="text" class="form-control form-control-sm propertytext"
						name="obsolence"  value="${devform.obsolence}" id="" placeholder="Obsolescence">
				</div>
				<input type="hidden" id="developmentId"" name="developmentId"
				value="${devform.developmentId}"/>
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
<script src="resources/assets/js/devedit.js"></script>
