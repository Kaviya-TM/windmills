<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isELIgnored="false"%>
<title>Windmills | Sales Discount</title>
<link rel='shortcut icon' type='image/x-icon'
	href='resources/assets/img/favicon.ico' />
<link rel="stylesheet" href="resources/assets/css/community.css">
<link rel="stylesheet" href="resources/assets/css/main.css">
<link rel="stylesheet"
	href="resources/assets/bundles/pretty-checkbox/pretty-checkbox.min.css">
<link rel="stylesheet"
	href="resources/assets/bundles/bootstrap-daterangepicker/daterangepicker.css">
<link
	href="resources/assets/bundles/vendor/datepicker/daterangepicker.css"
	rel="stylesheet" media="all">
<div class="discounteditform">
	<%@include file="header.jsp"%>
	<%@include file="sidebar.jsp"%>
	<div class="main-content"
		style="background: rgb(229, 231, 233) !important; margin-top: 70px; width: 100%; min-height: 530px !important">
		<form:form action="editDiscount" id="" modelAttribute="discount">
			<div class="form-group"
				style="color: #000080; width: 100%; height: unset; margin-bottom: 20px !important;">
				<div class="client header">Sales Discount</div>
			</div>
			<div class="form-group">
				<div class="communityholder">
					<label class="communitylabel">Upto 1,000,000</label> <input type="text"
						class="form-control form-control-sm communitytext"
						name="million1" id="million1" placeholder="">
				</div>
				<div class="communityholder">
					<label class="communitylabel">Upto 2,000,000</label> <input type="text"
						class="form-control form-control-sm communitytext" name="million2"
						id="million2" placeholder="">
				</div>
				<div class="communityholder">
					<label class="communitylabel">Upto 3,000,000</label> <input type="text"
						class="form-control form-control-sm communitytext" name="million3"
						id="million3" placeholder="">
				</div>
				<div class="communityholder">
					<label class="communitylabel">Upto 4,000,000</label> <input type="text"
						class="form-control form-control-sm communitytext" name="million4"
						id="million4" placeholder="">
				</div>
				<div class="communityholder">
					<label class="communitylabel">Upto 5,000,000</label> <input type="text"
						class="form-control form-control-sm communitytext" name="million5"
						id="million5" placeholder="">
				</div>
				<div class="communityholder">
					<label class="communitylabel">Upto 20,000,000</label> <input type="text"
						class="form-control form-control-sm communitytext" name="million20"
						id="million20" placeholder="">
				</div>
				<div class="communityholder">
					<label class="communitylabel">Upto 50,000,000</label> <input type="text"
						class="form-control form-control-sm communitytext" name="million50"
						id="million50" placeholder="">
				</div>
				<div class="communityholder">
					<label class="communitylabel">Upto 100,000,000</label> <input type="text"
						class="form-control form-control-sm communitytext" name="million100"
						id="million100" placeholder="">
				</div>				<input type="hidden" id="discountId"" name="discountId"
				value="1"/>
			<div class="form-group" style="width: 100%">
				<button type="submit" style="background: #000080">Update</button>
				<button type="none" id="cancel" style="background: #ff6600">Cancel</button>
			</div>
			</div>
		</form:form>
	</div>
</div>
<%@include file="footer.jsp"%>
<script
	src="resources/assets/bundles/bootstrap-daterangepicker/daterangepicker.js"></script>
<script src="resources/assets/js/discountedit.js"></script>
