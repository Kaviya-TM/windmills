<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isELIgnored="false"%>
<title>Windmills | Weightage</title>
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
<div class="weighatgeeditform">
	<%@include file="header.jsp"%>
	<%@include file="sidebar.jsp"%>
	<div class="main-content"
		style="background: rgb(229, 231, 233) !important;overflow: scroll; overflow-x: hidden; margin-top: 70px; width: 100%; min-height: 530px !important">
		<form:form action="editWeightage" id="" modelAttribute="weightage">
			<div class="form-group">
				<div class="propertyholder">
					<label class="propertylabel">Emirates</label>
					 <select class="form-control form-control-sm propertytext" name="emirates">
						    <option value="${weightageeditform.emirates}" selected hidden>${weightageeditform.emirates}</option>
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
					<label class="propertylabel">Property Type</label> 
					<select class="form-control form-control-sm propertytext" name="propertyType" id="">
						<option value="${weightageeditform.propertyType}" selected hidden>${weightageeditform.propertyType}</option>  
						<c:forEach items="${propertylist}" var="item">
							<option value="${item.propertyValued}">${item.propertyValued}</option>
						</c:forEach>
					</select>
				</div>
				<div class="propertyholder">
					<label class="propertylabel">Location</label> <input
						type="text" class="form-control form-control-sm propertytext"
						name="location" value="${weightageeditform.location}" id="" placeholder="Location">
				</div>
				<div class="propertyholder">
					<label class="propertylabel">Age</label> <input
						type="text" class="form-control form-control-sm propertytext"
						name="age" value="${weightageeditform.age}" id="" placeholder="ex:1%">
				</div>
				<div class="propertyholder">
					<label class="propertylabel">View</label> <input
						type="text" class="form-control form-control-sm propertytext"
						name="view" id="" value="${weightageeditform.view}" placeholder="View">
				</div>
				<div class="propertyholder">
					<label class="propertylabel">Quality</label> <input
						type="text" class="form-control form-control-sm propertytext"
						name="quality" id="" value="${weightageeditform.quality}" placeholder="Quality">
				</div>
				<div class="propertyholder">
					<label class="propertylabel">Floor</label> <input
						type="text" class="form-control form-control-sm propertytext"
						name="floor" id="" value="${weightageeditform.floor}" placeholder="Floor">
				</div>
				<div class="propertyholder">
					<label class="propertylabel">Property Exposure</label> <input
						type="text" class="form-control form-control-sm propertytext"
						name="propertyExposure" value="${weightageeditform.propertyExposure}" id="" placeholder="ex:1%">
				</div>
				<div class="propertyholder">
					<label class="propertylabel">Property Placement</label> <input
						type="text" class="form-control form-control-sm propertytext"
						name="propertyPlacement" value="${weightageeditform.propertyPlacement}" id="" placeholder="ex:1%">
				</div>
				<div class="propertyholder">
					<label class="propertylabel">Finishing Status</label> <input
						type="text" class="form-control form-control-sm propertytext"
						name="finishingStatus" value="${weightageeditform.finishingStatus}" id="" placeholder="ex:1%">
				</div>
				<div class="propertyholder">
					<label class="propertylabel">Bedrooom</label> <input
						type="text" class="form-control form-control-sm propertytext"
						name="bedroom" id="" value="${weightageeditform.bedroom}" placeholder="ex:1%">
				</div>
				<div class="propertyholder">
					<label class="propertylabel">Land Size</label> <input
						type="text" class="form-control form-control-sm propertytext"
						name="landSize" id="" value="${weightageeditform.landSize}" placeholder="Land Size">
				</div>
				<div class="propertyholder">
					<label class="propertylabel">BUA</label> <input
						type="text" class="form-control form-control-sm propertytext"
						name="bua" value="${weightageeditform.bua}" id="" placeholder="BUA">
				</div>
				<input type="hidden" id="weightId"" name="weightId"
				value="${weightageeditform.weightId}"/>
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
<script src="resources/assets/js/weightageedit.js"></script>
