<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isELIgnored="false"%>
<title>Windmills | Property Attribute Weightage</title>
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
<div class="weightageform">
	<%@include file="header.jsp"%>
	<%@include file="sidebar.jsp"%>
	<div class="main-content"
		style="background: rgb(229, 231, 233) !important; margin-top: 70px; width: 100%; min-height: 530px !important">
		<form:form action="addWeightage" id="weightageform" modelAttribute="weightage">
			<div class="form-group">
				<div class="propertyholder">
					<label class="propertylabel">Emirates</label>
					 <select class="form-control form-control-sm propertytext" name="emirates">
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
					<select
						class="form-control form-control-sm propertytext"
						name="propertyType" id="">
						<c:forEach items="${propertylist}" var="item">
							<option value="${item.propertyValued}">${item.propertyValued}</option>
						</c:forEach>
					</select>
				</div>
				<div class="propertyholder">
					<label class="propertylabel">Location</label> <input
						type="text" class="form-control form-control-sm propertytext"
						name="location" id="" placeholder="ex:10%">
				</div>
				<div class="propertyholder">
					<label class="propertylabel">Age</label> <input
						type="text" class="form-control form-control-sm propertytext"
						name="age" id="" placeholder="ex:1%">
				</div>
				<div class="propertyholder">
					<label class="propertylabel">View</label> <input
						type="text" class="form-control form-control-sm propertytext"
						name="view" id="" placeholder="ex:10%">
				</div>
				<div class="propertyholder">
					<label class="propertylabel">Quality</label> <input
						type="text" class="form-control form-control-sm propertytext"
						name="quality" id="" placeholder="ex:10%">
				</div>
				<div class="propertyholder">
					<label class="propertylabel">Floor</label> <input
						type="text" class="form-control form-control-sm propertytext"
						name="floor" id="" placeholder="ex:0.5%">
				</div>
				<div class="propertyholder">
					<label class="propertylabel">Land Size</label> <input
						type="text" class="form-control form-control-sm propertytext"
						name="landSize" id="" placeholder="ex:10%">
				</div>
				<div class="propertyholder">
					<label class="propertylabel">BUA</label> <input
						type="text" class="form-control form-control-sm propertytext"
						name="bua" id="" placeholder="ex:10%">
				</div>

				<div class="form-group" style="width: 100%">
					<button type="submit">Save</button>
				</div>
			</div>
		</form:form>
	</div>
</div>
<%@include file="footer.jsp"%>
<script
	src="resources/assets/bundles/bootstrap-daterangepicker/daterangepicker.js"></script>
<script src="resources/assets/js/weightage.js"></script>
