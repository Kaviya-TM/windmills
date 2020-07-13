<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isELIgnored="false"%>
<title>Windmills | Service Officer</title>
<link rel='shortcut icon' type='image/x-icon'
	href='resources/assets/img/favicon.ico' />
<link rel="stylesheet" href="resources/assets/css/serviceofficer.css">
<link rel="stylesheet" href="resources/assets/css/main.css">
<link rel="stylesheet"
	href="resources/assets/bundles/pretty-checkbox/pretty-checkbox.min.css">
<link rel="stylesheet"
	href="resources/assets/bundles/bootstrap-daterangepicker/daterangepicker.css">
<link
	href="resources/assets/bundles/vendor/datepicker/daterangepicker.css"
	rel="stylesheet" media="all">
<div class="serviceeditform">
	<%@include file="header.jsp"%>
	<%@include file="sidebar.jsp"%>
	<div class="main-content"
		style="background: rgb(229, 231, 233) !important; margin-top: 70px; width: 100%; min-height: 530px !important">
		<form:form action="editServiceOfficer" id="serviceeditform"
			modelAttribute="serviceOfficer">
			<div class="form-group"
				style="color: #000080; width: 100%; height: unset; margin-bottom: 20px !important;">
				<div class="client header">Service Officer Details</div>
			</div>
			<div class="form-group">
				<div class="serviceholder">
					<label class="servicelabel">Email</label> <input type="text"
						class="form-control form-control-sm servicetext" name="email"
						value="${serviceform.email}" id="OfficerEmail" placeholder="Email">
				</div>
				<div class="errMsg">Service Officer Email Already Exists</div>
				<div class="serviceholder">
					<label class="servicelabel">Name</label> <input type="text"
						class="form-control form-control-sm servicetext" name="name"
						value="${serviceform.name}" id="" placeholder="Name">
				</div>
				<div class="serviceholder">
					<label class="servicelabel">Phone</label> <input type="text"
						class="form-control form-control-sm servicetext" name="phone"
						value="${serviceform.phone}" id="" placeholder="Phone">
				</div>
				<div class="serviceholder">
					<label class="servicelabel">Position</label> <input type="text"
						class="form-control form-control-sm servicetext" name="position"
						value="${serviceform.position}" id="" placeholder="Position">
				</div>
				<div class="serviceholder">
					<label class="servicelabel">Joining Date</label>
					<div class="input-group textholder servicetext">
						<div class="input-group-prepend">
							<div class="input-group-text">
								<i class="fas fa-calendar"></i>
							</div>
						</div>
						<input type="text" class="form-control form-control-sm datepicker"
							name="joinDate" value="${serviceform.joinDate}" id="">
					</div>
				</div>
				<div class="serviceholder" style="height: 20px">
					<div class="pretty p-svg p-curve">
						<input type="checkbox" id="useractive" name="activeUser"
							value="${serviceform.activeUser}">
						<div class="state p-success">
							<!-- svg path -->
							<svg class="svg svg-icon" viewBox="0 0 20 20">
				                          <path
									d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
									style="stroke: white;fill:white;"></path>
				                        </svg>
							<label style="margin-left: 5px; line-height: 11px">Separation
								of Employee</label>
						</div>
					</div>
				</div>
				<div class="serviceholder sepdate none">
					<label class="servicelabel">Separation Date</label>
					<div class="input-group textholder servicetext">
						<div class="input-group-prepend">
							<div class="input-group-text">
								<i class="fas fa-calendar"></i>
							</div>
						</div>
						<input type="text" class="form-control form-control-sm datepicker"
							name="" value="${serviceform.separationDate}" id="separationDate">
					</div>
				</div>
			</div>
			<input type="hidden" id="serviceId" name="serviceId"
				value="${serviceform.serviceId}" "/>
			<div class="form-group" style="width: 100%">
				<button type="submit" style="background: #000080">Update</button>
				<button type="none" id="cancel" style="background: #ff6600">Cancel</button>
			</div>
		</form:form>
	</div>
</div>
<%@include file="footer.jsp"%>
<script
	src="resources/assets/bundles/bootstrap-daterangepicker/daterangepicker.js"></script>
<script src="resources/assets/js/serviceedit.js"></script>
