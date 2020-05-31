<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isELIgnored="false"%>
<title>Windmills | Development</title>
<link rel='shortcut icon' type='image/x-icon'
	href='resources/assets/img/favicon.ico' />
<link rel="stylesheet" href="resources/assets/css/clientform.css">
<link
	href="resources/assets/bundles/vendor/datepicker/daterangepicker.css"
	rel="stylesheet" media="all">
<div class="developmentform">
	<%@include file="header.jsp"%>
	<%@include file="sidebar.jsp"%>
	<div class="main-content"
		style="background: rgb(229, 231, 233) !important;overflow: scroll; overflow-x: hidden; margin-top: 70px; width: 100%; min-height: 530px !important">
		<form:form action="" name="" id="" modelAttribute="">
			<div class="form-group"
				style="color: #000080; width: 100%; height: unset; margin-bottom: 20px !important;">
				<div class="client header">For Villas</div>
			</div>
			<div class="form-group" style="width: 100%;">
				<div class="clholder" style="margin-bottom: 5px;">
					<label class="llholder" style="line-height:27px;color:green"><b>Emirates</b></label>
					<label class="tlholder" style="color: green; margin-left: 2px;text-align:center;width:10% !important"><b>3 Star</b></label> 
					<label class="tlholder" style="color: green; margin-left: 2px;text-align:center;width: 10% !important;"><b>4 Star</b></label> 
					<label class="tlholder" style="color: green; margin-left: -5px;text-align:center;width: 10% !important;"><b>5 Star</b></label>
					<label class="tlholder" style="color: green; margin-left: 2px;text-align:center;width: 10% !important;"><b>Charge</b></label> 
					<label class="tlholder" style="color: green; margin-left: 2px;text-align:center;width: 10% !important;"><b>Margin</b></label>
					<label class="tlholder" style="color: green; margin-left: 2px;text-align:center;width: 10% !important;"><b>Profit</b></label>
					<label class="tlholder" style="color: green; margin-left: 2px;text-align:center;width: 10% !important;"><b>Obsolescence</b></label>
				</div>
				<div class="clholder" style="margin-bottom: 5px;">
					<label class="llholder" style="line-height:27px" ><b>Dubai</b></label>
					<input type="text" class="form-control form-control-sm tlholder" name="dub3" id="dub3" style="margin-left: 2px; width:10% !important">
					<input type="text" class="form-control form-control-sm tlholder" name="dub4" id="dub4" style="margin-left: 2px;width: 10% !important;"> 
					<input type="text" class="form-control form-control-sm tlholder" name="dub5" id="dub5" style="margin-left: -5px;width: 10% !important;">
					<input type="text" class="form-control form-control-sm tlholder" name="dubCharge" id="dubCharge" style="margin-left: 2px;width: 10% !important;"> 
					<input type="text" class="form-control form-control-sm tlholder" name="dubMargin" id="dubMargin" style="margin-left: 2px;width: 10% !important;">
					<input type="text" class="form-control form-control-sm tlholder" name="dubProfit" id="dubProfit" style="margin-left: 2px;width: 10% !important;">
					<input type="text" class="form-control form-control-sm tlholder" name="dubObs" id="dubObs" style="margin-left: 2px;width: 10% !important;">
				</div>
				<div class="clholder" style="margin-bottom: 5px;">
					<label class="llholder" style="line-height:27px" ><b>Sharjah</b></label>
					<input type="text" class="form-control form-control-sm tlholder" name="sha3" id="sha3" style="margin-left: 2px; width:10% !important">
					<input type="text" class="form-control form-control-sm tlholder" name="sha4" id="sha4" style="margin-left: 2px;width: 10% !important;"> 
					<input type="text" class="form-control form-control-sm tlholder" name="sha5" id="sha5" style="margin-left: -5px;width: 10% !important;">
					<input type="text" class="form-control form-control-sm tlholder" name="shaCharge" id="shaCharge" style="margin-left: 2px;width: 10% !important;"> 
					<input type="text" class="form-control form-control-sm tlholder" name="shaMargin" id="shaMargin" style="margin-left: 2px;width: 10% !important;">
					<input type="text" class="form-control form-control-sm tlholder" name="shaProfit" id="shaProfit" style="margin-left: 2px;width: 10% !important;">
					<input type="text" class="form-control form-control-sm tlholder" name="shaObs" id="shaObs"  style="margin-left: 2px;width: 10% !important;">
				</div>
				<div class="clholder" style="margin-bottom: 5px;">
					<label class="llholder" style="line-height:27px" ><b>Ajman</b></label>
					<input type="text" class="form-control form-control-sm tlholder" name="ajm3" id="ajm3" style="margin-left: 2px; width:10% !important">
					<input type="text" class="form-control form-control-sm tlholder" name="ajm4" id="ajm4" style="margin-left: 2px;width: 10% !important;"> 
					<input type="text" class="form-control form-control-sm tlholder" name="ajm5" id="ajm5" style="margin-left: -5px;width: 10% !important;">
					<input type="text" class="form-control form-control-sm tlholder" name="ajmCharge" id="ajmCharge" style="margin-left: 2px;width: 10% !important;"> 
					<input type="text" class="form-control form-control-sm tlholder" name="ajmMargin" id="ajmMargin" style="margin-left: 2px;width: 10% !important;">
					<input type="text" class="form-control form-control-sm tlholder" name="ajmProfit" id="ajmProfit" style="margin-left: 2px;width: 10% !important;">
					<input type="text" class="form-control form-control-sm tlholder" name="ajmObs" id="ajmObs" style="margin-left: 2px;width: 10% !important;">
				</div>
				<div class="clholder" style="margin-bottom: 5px;">
					<label class="llholder" style="line-height:27px" ><b>Umm-Al-Quwain</b></label>
					<input type="text" class="form-control form-control-sm tlholder" name="umm3" id="umm3"  style="margin-left: 2px; width:10% !important">
					<input type="text" class="form-control form-control-sm tlholder" name="umm4" id="umm4" style="margin-left: 2px;width: 10% !important;"> 
					<input type="text" class="form-control form-control-sm tlholder" name="umm5" id="umm5" style="margin-left: -5px;width: 10% !important;">
					<input type="text" class="form-control form-control-sm tlholder" name="ummCharge" id="ummCharge" style="margin-left: 2px;width: 10% !important;"> 
					<input type="text" class="form-control form-control-sm tlholder" name="ummMargin" id="ummMargin" style="margin-left: 2px;width: 10% !important;">
					<input type="text" class="form-control form-control-sm tlholder" name="ummProfit" id="ummProfit" style="margin-left: 2px;width: 10% !important;">
					<input type="text" class="form-control form-control-sm tlholder" name="ummObs" id="ummObs" style="margin-left: 2px;width: 10% !important;">
				</div>
				<div class="clholder" style="margin-bottom: 5px;">
					<label class="llholder" style="line-height:27px"><b>Ras-Al-Khaimah</b></label>
					<input type="text" class="form-control form-control-sm tlholder" name="rak3" id="rak3" style="margin-left: 2px; width:10% !important">
					<input type="text" class="form-control form-control-sm tlholder" name="rak4" id="rak4" style="margin-left: 2px;width: 10% !important;"> 
					<input type="text" class="form-control form-control-sm tlholder" name="rak5" id="rak5" style="margin-left: -5px;width: 10% !important;">
					<input type="text" class="form-control form-control-sm tlholder" name="rakCharge" id="rakCharge" style="margin-left: 2px;width: 10% !important;"> 
					<input type="text" class="form-control form-control-sm tlholder" name="rakMargin" id="rakMargin" style="margin-left: 2px;width: 10% !important;">
					<input type="text" class="form-control form-control-sm tlholder" name="rakProfit" id="rakProfit" style="margin-left: 2px;width: 10% !important;">
					<input type="text" class="form-control form-control-sm tlholder" name="rakObs" id="rakObs" style="margin-left: 2px;width: 10% !important;">
				</div>
				<div class="clholder" style="margin-bottom: 5px;">
					<label class="llholder" style="line-height:27px" ><b>Fujairah</b></label>
					<input type="text" class="form-control form-control-sm tlholder" name="fuj3" id="fuj3" style="margin-left: 2px; width:10% !important">
					<input type="text" class="form-control form-control-sm tlholder" name="fuj4" id="fuj4"  style="margin-left: 2px;width: 10% !important;"> 
					<input type="text" class="form-control form-control-sm tlholder" name="fuj5" id="fuj5" style="margin-left: -5px;width: 10% !important;">
					<input type="text" class="form-control form-control-sm tlholder" name="fujCharge" id="fujCharge"  style="margin-left: 2px;width: 10% !important;"> 
					<input type="text" class="form-control form-control-sm tlholder" name="fujMargin" id="fujMargin" style="margin-left: 2px;width: 10% !important;">
					<input type="text" class="form-control form-control-sm tlholder" name="fujMargin" id="fujMargin" style="margin-left: 2px;width: 10% !important;">
					<input type="text" class="form-control form-control-sm tlholder" name="fujObs" id="fujObs" style="margin-left: 2px;width: 10% !important;">
				</div>
				<div class="clholder" style="margin-bottom: 5px;">
					<label class="llholder" style="line-height:27px" ><b>Abu Dhabi</b></label>
					<input type="text" class="form-control form-control-sm tlholder" name="ab3" id="abu3"  style="margin-left: 2px; width:10% !important">
					<input type="text" class="form-control form-control-sm tlholder" name="abu4" id="abu4" style="margin-left: 2px;width: 10% !important;"> 
					<input type="text" class="form-control form-control-sm tlholder" name="abu5" id="abu5" style="margin-left: -5px;width: 10% !important;">
					<input type="text" class="form-control form-control-sm tlholder" name=abuCharge id="abuCharge" style="margin-left: 2px;width: 10% !important;"> 
					<input type="text" class="form-control form-control-sm tlholder" name="abuMargin" id="abuMargin" style="margin-left: 2px;width: 10% !important;">
					<input type="text" class="form-control form-control-sm tlholder" name="abuProfit" id="abuProfit" style="margin-left: 2px;width: 10% !important;">
					<input type="text" class="form-control form-control-sm tlholder" name="abuObs" id="abuObs" style="margin-left: 2px;width: 10% !important;">
				</div>
			</div>
			
			<div class="form-group" style="width: 100%;margin-top:10px">
				<button type="submit">Save</button>
			</div>
		</form:form>
	</div>
</div>
<%@include file="footer.jsp"%>
<script src="resources/assets/js/development.js"></script>
<script
	src="resources/assets/bundles/bootstrap-daterangepicker/daterangepicker.js"></script>
