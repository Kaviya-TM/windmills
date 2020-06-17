<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isELIgnored="false"%>
<title>Windmills | Weightage</title>
<link rel='shortcut icon' type='image/x-icon'
	href='resources/assets/img/favicon.ico' />
<link rel="stylesheet" href="resources/assets/css/weightage.css">
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
		style="background: rgb(229, 231, 233) !important;overflow: scroll;overflow-x: hidden;padding-top:10px !important;margin-top: 70px; width: 100%; min-height: 530px !important">
		<form:form action="editWeightage" id="" style="margin-top:-15px !important;" modelAttribute="weightage">
			<div class="form-group">
				<div class="weightageholder">
					<label class="weightagelabel">Emirates</label>
					 <select class="form-control form-control-sm weightagetext" name="emirates">
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
				<div class="weightageholder">
					<label class="weightagelabel">Less than 1 Month</label> <input
						type="text" class="form-control form-control-sm weightagetext"
						name="lessThan1Month" value="${weightageeditform.lessThan1Month}" id="" placeholder="ex:10%">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">Property Type</label> 
					<select class="form-control form-control-sm weightagetext" name="propertyType" id="">
						<option value="${weightageeditform.propertyType}" selected hidden>${weightageeditform.propertyType}</option>  
						<c:forEach items="${propertylist}" var="item">
							<option value="${item.propertyValued}">${item.propertyValued}</option>
						</c:forEach>
					</select>
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">Less than 2 Month</label> <input
						type="text" class="form-control form-control-sm weightagetext"
						name="lessThan2Month" value="${weightageeditform.lessThan2Month}" id="" placeholder="ex:10%">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">Location</label> <input
						type="text" class="form-control form-control-sm weightagetext"
						name="location" value="${weightageeditform.location}" id="" placeholder="Location">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">Less than 3 Month</label> <input
						type="text" class="form-control form-control-sm weightagetext"
						name="lessThan3Month" value="${weightageeditform.lessThan3Month}" id="" placeholder="ex:10%">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">Age</label> <input
						type="text" class="form-control form-control-sm weightagetext"
						name="age" value="${weightageeditform.age}" id="" placeholder="ex:1%">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">Less than 4 Month</label> <input
						type="text" class="form-control form-control-sm weightagetext"
						name="lessThan4Month" value="${weightageeditform.lessThan4Month}" id="" placeholder="ex:10%">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">View</label> <input
						type="text" class="form-control form-control-sm weightagetext"
						name="view" id="" value="${weightageeditform.view}" placeholder="View">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">Less than 5 Month</label> <input
						type="text" class="form-control form-control-sm weightagetext"
						name="lessThan5Month" value="${weightageeditform.lessThan5Month}" id="" placeholder="ex:10%">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">Quality</label> <input
						type="text" class="form-control form-control-sm weightagetext"
						name="quality" id="" value="${weightageeditform.quality}" placeholder="Quality">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">Less than 6 Month</label> <input
						type="text" class="form-control form-control-sm weightagetext"
						name="lessThan6Month" value="${weightageeditform.lessThan6Month}" id="" placeholder="ex:10%">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">Floor</label> <input
						type="text" class="form-control form-control-sm weightagetext"
						name="floor" id="" value="${weightageeditform.floor}" placeholder="Floor">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">Less than 7 Month</label> <input
						type="text" class="form-control form-control-sm weightagetext"
						name="lessThan7Month" value="${weightageeditform.lessThan7Month}" id="" placeholder="ex:10%">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">Property Exposure</label> <input
						type="text" class="form-control form-control-sm weightagetext"
						name="propertyExposure" value="${weightageeditform.propertyExposure}" id="" placeholder="ex:1%">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">Less than 8 Month</label> <input
						type="text" class="form-control form-control-sm weightagetext"
						name="lessThan8Month" value="${weightageeditform.lessThan8Month}" id="" placeholder="ex:10%">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">Property Placement</label> <input
						type="text" class="form-control form-control-sm weightagetext"
						name="propertyPlacement" value="${weightageeditform.propertyPlacement}" id="" placeholder="ex:1%">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">Less than 9 Month</label> <input
						type="text" class="form-control form-control-sm weightagetext"
						name="lessThan9Month" value="${weightageeditform.lessThan9Month}" id="" placeholder="ex:10%">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">Finishing Status</label> <input
						type="text" class="form-control form-control-sm weightagetext"
						name="finishingStatus" value="${weightageeditform.finishingStatus}" id="" placeholder="ex:1%">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">Less than 10 Month</label> <input
						type="text" class="form-control form-control-sm weightagetext"
						name="lessThan10Month" value="${weightageeditform.lessThan10Month}" id="" placeholder="ex:10%">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">Bedrooom</label> <input
						type="text" class="form-control form-control-sm weightagetext"
						name="bedroom" id="" value="${weightageeditform.bedroom}" placeholder="ex:1%">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">Less than 11 Month</label> <input
						type="text" class="form-control form-control-sm weightagetext"
						name="lessThan11Month" value="${weightageeditform.lessThan11Month}" id="" placeholder="ex:10%">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">Land Size</label> <input
						type="text" class="form-control form-control-sm weightagetext"
						name="landSize" id="" value="${weightageeditform.landSize}" placeholder="Land Size">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">Less than 12 Month</label> <input
						type="text" class="form-control form-control-sm weightagetext"
						name="lessThan12Month" value="${weightageeditform.lessThan12Month}" id="" placeholder="ex:10%">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">BUA</label> <input
						type="text" class="form-control form-control-sm weightagetext"
						name="bua" value="${weightageeditform.bua}" id="" placeholder="BUA">
				</div>
					<div class="weightageholder">
					<label class="weightagelabel">Balcony size</label> <input
						type="text" class="form-control form-control-sm weightagetext"
						name="balsize" value="${weightageeditform.balsize}" id="" placeholder="ex:10%">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">Furnished</label> <input
						type="text" class="form-control form-control-sm weightagetext"
						name="furnished" value="${weightageeditform.furnished}" id="" placeholder="ex:10%">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">Upgrades</label> <input
						type="text" class="form-control form-control-sm weightagetext"
						name="upgrade" value="${weightageeditform.upgrade}" id="" placeholder="ex:10%">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">Parking</label> <input type="text"
						class="form-control form-control-sm weightagetext"
						name="parking" id="" value="${weightageeditform.parking}"
						placeholder="ex:5%" autocomplete="on">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">Pool</label> <input type="text"
						class="form-control form-control-sm weightagetext"
						name="pool" id="" value="${weightageeditform.pool}"
						placeholder="ex:5%" autocomplete="on">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">Landscape</label> <input type="text"
						class="form-control form-control-sm weightagetext"
						name="landscape" id="" value="${weightageeditform.landscape}"
						placeholder="ex:5%" autocomplete="on">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">WhiteGoods</label> <input type="text"
						class="form-control form-control-sm weightagetext"
						name="whitegoods" id="" value="${weightageeditform.whitegoods}"
						placeholder="ex:5%" autocomplete="on">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel" style="">Utilities Connected </label> <input type="text"
						class="form-control form-control-sm weightagetext"
						name="utilities" id="" value="${weightageeditform.utilities}"
						placeholder="ex:5%" autocomplete="on">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel">Tenure</label> <input type="text"
						class="form-control form-control-sm weightagetext"
						name="tenure" id="" value="${weightageeditform.tenure}"
						placeholder="ex:5%" autocomplete="on">
				</div>
				<div class="weightageholder">
					<label class="weightagelabel" >Number Of Levels</label> <input type="text"
						class="form-control form-control-sm weightagetext"
						name="level"  id=""  value="${weightageeditform.level}"
						placeholder="ex:5%" autocomplete="on">
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
