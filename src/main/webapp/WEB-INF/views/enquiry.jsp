<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isELIgnored="false"%>
<title>Windmills | Enquiry</title>
<link rel='shortcut icon' type='image/x-icon'
	href='resources/assets/img/favicon.ico' />
<link rel="stylesheet" href="resources/assets/css/enquiry.css">
<link rel="stylesheet" href="resources/assets/css/main.css">
<link rel="stylesheet"
	href="resources/assets/bundles/pretty-checkbox/pretty-checkbox.min.css">
<link rel="stylesheet"
	href="resources/assets/bundles/bootstrap-daterangepicker/daterangepicker.css">
<link
	href="resources/assets/bundles/vendor/datepicker/daterangepicker.css"
	rel="stylesheet" media="all">
<div class="enquiry">
	<%@include file="header.jsp"%>
	<%@include file="sidebar.jsp"%>
	<div class="main-content"
		style="background: rgb(229, 231, 233) !important; margin-top: 70px; width: 100%; min-height: 530px !important">
		<form:form action="filter-transactions" id="enquiry" modelAttribute="">
			<div class="form-group">
				<div class="enquiryholder">
					<label class="enquirylabel">City<b style="color:red"> *</b></label>
					<select class="form-control form-control-sm enquirytext" name="city" id="ecity">
						<c:forEach items="${citylist}" var="item">
							<option value="" hidden>-- Select City ---</option>
							<option value="${item}">${item}</option>
						</c:forEach>
					</select>
				</div>
				<div class="enquiryholder">
					<label class="enquirylabel">Area<b style="color:red"> *</b></label> 
					<select class="form-control form-control-sm enquirytext" name="area" id="earea">
						<c:forEach items="${arealist}" var="item">
							<option value="" hidden>-- Select Area---</option>
							<option value="${item}">${item}</option>
						</c:forEach>
					</select>
				</div>
				<div class="enquiryholder">
					<label class="enquirylabel">NeighbourHood<b style="color:red"> *</b></label> 
					<select class="form-control form-control-sm enquirytext" name="neighbourhood" id="eneighbourhood">
						<c:forEach items="${hoodlist}" var="item">
							<option value="" hidden>-- Select NeighbourHood ---</option>
							<option value="${item}">${item}</option>
						</c:forEach>
					</select>
				</div>
				<div class="enquiryholder">
					<label class="enquirylabel">Building Name<b style="color:red"> *</b></label>
					<select class="form-control form-control-sm enquirytext" name="buildingName" id="ebuildingName">
						<c:forEach items="${bullist}" var="item">
							<option value="" hidden>---  Select Building Name - - -</option>
							<option value="${item}">${item}</option>
						</c:forEach>
					</select>
				</div>
				<div class="error" style="color:red">
					All fields are mandatory
				</div>
				<div class="form-group" style="width: 100%">
					<button type="submit">Search</button>
				</div>
			</div>
		</form:form>
	</div>
</div>
<%@include file="footer.jsp"%>
<script
	src="resources/assets/bundles/bootstrap-daterangepicker/daterangepicker.js"></script>
<script src="resources/assets/js/enquiry.js"></script>
