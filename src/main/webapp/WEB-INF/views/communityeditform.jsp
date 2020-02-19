<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isELIgnored="false"%>
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
<div class="communityeditform">
	<%@include file="header.jsp"%>
	<%@include file="sidebar.jsp"%>
	<div class="main-content"
		style="background: rgb(229, 231, 233) !important; margin-top: 70px; width: 100%; min-height: 530px !important">
		<form:form action="editCommunity" id="" modelAttribute="community">
			<div class="form-group"
				style="color: #000080; width: 100%; height: unset; margin-bottom: 20px !important;">
				<div class="client header">Community Details</div>
			</div>
			<div class="form-group">
				<div class="communityholder">
					<label class="communitylabel">Community</label> <input type="text"
						class="form-control form-control-sm communitytext"
						name="community" value="${communityform.community}" id="" placeholder="Community">
				</div>
				<div class="communityholder">
					<label class="communitylabel">City</label> <input type="text"
						class="form-control form-control-sm communitytext" name="city" value="${communityform.city}"
						id="" placeholder="City">
				</div>
				<input type="hidden" id="communityId"" name="communityId"
				value="${communityform.communityId}"/>
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
<script src="resources/assets/js/communityedit.js"></script>
