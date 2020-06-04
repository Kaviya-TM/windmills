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
<link
	href="resources/assets/bundles/vendor/datepicker/daterangepicker.css"
	rel="stylesheet" media="all">
<div class="developmentform">
	<%@include file="header.jsp"%>
	<%@include file="sidebar.jsp"%>
	<div class="main-content"
		style="background: rgb(229, 231, 233) !important; margin-top: 70px; width: 100%; min-height: 530px !important">
		<form:form action="addDevelopment" id="" modelAttribute="development">
			<div class="form-group"
				style="color: #000080; width: 100%; height: unset; margin-bottom: 20px !important;">
				<div class="client header">For Villa</div>
			</div>
			<div class="form-group">
				<div class="propertyholder" style="width:50%">
					<label class="propertylabel" style="width:30%">Emirates</label>
					<select
						class="form-control form-control-sm propertytext" style="width:60% !important"
						name="emirates" id="" >
							<option value="" hidden>-- Select--</option>
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
				<div class="propertyholder" style="width:50%">
					<label class="propertylabel" style="width:30%">1 Star</label> <input
						type="text" class="form-control form-control-sm propertytext" style="width:60% !important"
						name="star1" id="" placeholder="1 Star">
				</div>
				<div class="propertyholder" style="width:50%">
					<label class="propertylabel" style="width:30%">2 Star</label> <input
						type="text" class="form-control form-control-sm propertytext" style="width:60% !important"
						name="star2" id="" placeholder="2 Star">
				</div>
				<div class="propertyholder" style="width:50%">
					<label class="propertylabel" style="width:30%">3 Star</label> <input
						type="text" class="form-control form-control-sm propertytext" style="width:60% !important"
						name="star3" id="" placeholder="3 Star">
				</div>
				<div class="propertyholder" style="width:50%">
					<label class="propertylabel" style="width:30%">4 Star</label> <input
						type="text" class="form-control form-control-sm propertytext" style="width:60% !important"
						name="star4" id="" placeholder="4 Star">
				</div>
				<div class="propertyholder" style="width:50%">
					<label class="propertylabel" style="width:30%">5 Star</label> <input
						type="text" class="form-control form-control-sm propertytext" style="width:60% !important"
						name="star5" id="" placeholder="5 Star">
				</div>
				<div class="propertyholder" style="width:50%">
					<label class="propertylabel" style="width:30%">Professional Charges</label> <input
						type="text" class="form-control form-control-sm propertytext" style="width:60% !important"
						name="profCharges" id="" placeholder="Professional Charges">
				</div>
				<div class="propertyholder" style="width:50%">
					<label class="propertylabel" style="width:30%">Contingency Margin</label> <input
						type="text" class="form-control form-control-sm propertytext" style="width:60% !important"
						name="conMargin" id="" placeholder="Contingency Margin">
				</div>
				<div class="propertyholder" style="width:50%">
					<label class="propertylabel" style="width:30%">Obsolescence</label> <input
						type="text" class="form-control form-control-sm propertytext" style="width:60% !important"
						name="obsolence" id="" placeholder="Obsolescence">
				</div>
				<div class="propertyholder" style="width:50%">
					<label class="propertylabel" style="width:30%">Developer Profit</label> <input
						type="text" class="form-control form-control-sm propertytext" style="width:60% !important"
						name="devProfit" id="" placeholder="Developer Profit">
				</div>
				<div class="propertyholder" style="width:50%">
					<label class="propertylabel" style="width:30%" >Parking Price</label> <input
						type="text" class="form-control form-control-sm propertytext" style="width:60% !important"
						name="parkingprice" id="" placeholder="Parking Price">
				</div>
				<div class="propertyholder" style="width:50%">
					<label class="propertylabel" style="width:30%">Pool Price</label> <input
						type="text" class="form-control form-control-sm propertytext" style="width:60% !important"
						name="poolprice" id="" placeholder="Pool Price">
				</div>
				<div class="propertyholder" style="width:50%">
					<label class="propertylabel" style="width:30%">Landscape Price</label> <input
						type="text" class="form-control form-control-sm propertytext" style="width:60% !important"
						name="landscapeprice" id="" placeholder="Landscape Price">
				</div>
				<div class="propertyholder" style="width:50%">
					<label class="propertylabel" style="width:30%" >WhiteGoods Price</label> <input
						type="text" class="form-control form-control-sm propertytext" style="width:60% !important"
						name="whitegoodsprice" id="" placeholder="WhiteGoods Price">
				</div>
				<div class="propertyholder" style="width:50%">
					<label class="propertylabel" style="width:30%">Utilities Connected Price</label> <input
						type="text" class="form-control form-control-sm propertytext" style="width:60% !important"
						name="utilityprice" id="" placeholder="Utilities Connected Price">
				</div>
				<div class="propertyholder" style="width:50%">
					<label class="propertylabel" style="width:30%">Developer Margin</label> <input
						type="text" class="form-control form-control-sm propertytext" style="width:60% !important"
						name="devmargin" id="" placeholder="Developer Margin">
				</div>
				<div class="propertyholder" style="width:50%">
					<label class="propertylabel" style="width:30%">Interest Rate</label> <input
						type="text" class="form-control form-control-sm propertytext" style="width:60% !important"
						name="interestRate" id="" placeholder="Interest Rate">
				</div>
				<div class="propertyholder" style="width:50%;">
					<label class="propertylabel" style="width:30%;color:transparent">Interest Rate</label> <input
						type="text" class="form-control form-control-sm propertytext" style="width:60% !important;background:none"
						name="" id="">
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
<script src="resources/assets/js/development.js"></script>
