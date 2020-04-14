<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isELIgnored="false"%>
<title>Windmills | Property Attribute Weightage</title>
<link rel='shortcut icon' type='image/x-icon'
	href='resources/assets/img/favicon.ico' />
<link rel="stylesheet" href="resources/assets/css/weightage.css">
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
		style="background: rgb(229, 231, 233) !important;overflow: scroll; overflow-x: hidden; margin-top: 70px; width: 100%; min-height: 530px !important">
		<form:form action="addWeightage" id="weightageform" modelAttribute="weightage">
			<div class="form-group">
				<div class="weightageholder">
					<label class="weightagelabel">Emirates</label>
					 <select class="form-control form-control-sm weightagetext" name="emirates">
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
				<div class="weightageholder">
					<label class="weightagelabel">Less than 1 Month</label> <input
						type="text" class="form-control form-control-sm weightagetext"
						name="lessThan1Month" id="" placeholder="ex:10%">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">Property Type</label> 
					<select
						class="form-control form-control-sm weightagetext"
						name="propertyType" id="">
						<c:forEach items="${propertylist}" var="item">
							<option value="${item.propertyValued}">${item.propertyValued}</option>
						</c:forEach>
					</select>
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">Less than 2 Month</label> <input
						type="text" class="form-control form-control-sm weightagetext"
						name="lessThan2Month" id="" placeholder="ex:10%">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">Location</label> <input
						type="text" class="form-control form-control-sm weightagetext"
						name="location" id="" placeholder="ex:10%">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">Less than 3 Month</label> <input
						type="text" class="form-control form-control-sm weightagetext"
						name="lessThan3Month" id="" placeholder="ex:10%">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">Age</label> <input
						type="text" class="form-control form-control-sm weightagetext"
						name="age" id="" placeholder="ex:1%">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">Less than 4 Month</label> <input
						type="text" class="form-control form-control-sm weightagetext"
						name="lessThan4Month" id="" placeholder="ex:10%">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">Property Exposure</label> <input
						type="text" class="form-control form-control-sm weightagetext"
						name="propertyExposure" id="" placeholder="ex:1%">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">Less than 5 Month</label> <input
						type="text" class="form-control form-control-sm weightagetext"
						name="lessThan5Month" id="" placeholder="ex:10%">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">Property Placement</label> <input
						type="text" class="form-control form-control-sm weightagetext"
						name="propertyPlacement" id="" placeholder="ex:1%">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">Less than 6 Month</label> <input
						type="text" class="form-control form-control-sm weightagetext"
						name="lessThan6Month" id="" placeholder="ex:10%">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">Finishing Status</label> <input
						type="text" class="form-control form-control-sm weightagetext"
						name="finishingStatus" id="" placeholder="ex:1%">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">Less than 7 Month</label> <input
						type="text" class="form-control form-control-sm weightagetext"
						name="lessThan7Month" id="" placeholder="ex:10%">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">Bedrooom</label> <input
						type="text" class="form-control form-control-sm weightagetext"
						name="bedroom" id="" placeholder="ex:1%">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">Less than 8 Month</label> <input
						type="text" class="form-control form-control-sm weightagetext"
						name="lessThan8Month" id="" placeholder="ex:10%">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">View</label> <input
						type="text" class="form-control form-control-sm weightagetext"
						name="view" id="" placeholder="ex:10%">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">Less than 9 Month</label> <input
						type="text" class="form-control form-control-sm weightagetext"
						name="lessThan9Month" id="" placeholder="ex:10%">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">Quality</label> <input
						type="text" class="form-control form-control-sm weightagetext"
						name="quality" id="" placeholder="ex:10%">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">Less than 10 Month</label> <input
						type="text" class="form-control form-control-sm weightagetext"
						name="lessThan10Month" id="" placeholder="ex:10%">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">Floor</label> <input
						type="text" class="form-control form-control-sm weightagetext"
						name="floor" id="" placeholder="ex:0.5%">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">Less than 11 Month</label> <input
						type="text" class="form-control form-control-sm weightagetext"
						name="lessThan11Month" id="" placeholder="ex:10%">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">Land Size</label> <input
						type="text" class="form-control form-control-sm weightagetext"
						name="landSize" id="" placeholder="ex:10%">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">Less than 12 Month</label> <input
						type="text" class="form-control form-control-sm weightagetext"
						name="lessThan12Month" id="" placeholder="ex:10%">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">BUA</label> <input
						type="text" class="form-control form-control-sm weightagetext"
						name="bua" id="" placeholder="ex:10%">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">Balcony size</label> <input
						type="text" class="form-control form-control-sm weightagetext"
						name="balsize" id="" placeholder="ex:10%">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">Furnished</label> <input
						type="text" class="form-control form-control-sm weightagetext"
						name="furnished" id="" placeholder="ex:10%">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">Upgrades</label> <input
						type="text" class="form-control form-control-sm weightagetext"
						name="upgrade" id="" placeholder="ex:10%">
				</div>
				<br>
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
