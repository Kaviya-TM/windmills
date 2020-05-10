<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isELIgnored="false"%>
<title>Windmills | Edit Valuation</title>
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
<link rel="stylesheet" href="resources/assets/css/listings.css">	
<link
	href="resources/assets/bundles/vendor/datepicker/daterangepicker.css"
	rel="stylesheet" media="all">
<div class="masterseditform">
	<%@include file="header.jsp"%>
	<%@include file="sidebar.jsp"%>
	<div class="main-content"
		style="background: rgb(229, 231, 233) !important;padding-left: 220px !important;padding-top: 3px !important; overflow: scroll; overflow-x: hidden; padding-right: 0px; margin-top: 70px; width: 100%; min-height: 530px !important">
		<form:form action="editMasters" style="margin-top:-18px !important;" id="listingseditform" modelAttribute="masters">
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">Instruction Date</label>
					<input type="text" class="form-control form-control-sm listtext"  value="${mastersform.instructionDate}" name="instructionDate" placeholder="ex: 20-Apr-2020" id="">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">Inspection Date</label>
					<input type="text" class="form-control form-control-sm listtext"  value="${mastersform.inspectionDate}" name="inspectionDate" placeholder="ex: 20-Apr-2020" id="">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">Fees(AED)</label>
					<input type="text" class="form-control form-control-sm listtext"  value="${mastersform.fee}" placeholder="Fees(AED)" name="Fee" id="">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">Target Date</label>
					<input type="text" class="form-control form-control-sm listtext"  value="${mastersform.targetDate}" name="targetDate" placeholder="ex: 20-Apr-2020" id="">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">Target Time</label>
					<input type="text" class="form-control form-control-sm listtext"  value="${mastersform.targetTime}" placeholder="Target Time" name="targetTime" id="">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">Due Date</label>
					<input type="text" class="form-control form-control-sm listtext"  value="${mastersform.dueDate}" name="dueDate" placeholder="ex: 20-Apr-2020" id="">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">Date Submitted</label>
				    <input type="text" class="form-control form-control-sm listtext" value="${mastersform.dateSubmitted}" name="dateSubmitted" placeholder="Date Submitted" id=""  autocomplete="on">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">Remarks</label>
				    <input type="text" class="form-control form-control-sm listtext" value="${mastersform.remarks}" name="remarks" placeholder="Remarks"  id=""  autocomplete="on">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">Windmills Reference</label>
				    <input type="text" class="form-control form-control-sm listtext" value="${mastersform.wmRef}" placeholder="Windmills Reference" name="wmRef" id="" autocomplete="on">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">Client Reference</label>
				    <input type="text" class="form-control form-control-sm listtext" value="${mastersform.clientRef}" placeholder="Client Reference" name="clientRef" id=""  autocomplete="on">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">Client</label>
				    <input type="text" class="form-control form-control-sm listtext" value="${mastersform.client}" placeholder="Client" name="client" id=""  autocomplete="on">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">Individual/Company</label>
				    <input type="text" class="form-control form-control-sm listtext" value="${mastersform.indivOrCompany}" placeholder="Individual/Company" name="indivOrCompany" id=""  autocomplete="on">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">Owner/Customer</label>
				    <input type="text" class="form-control form-control-sm listtext" value="${mastersform.ownOrCustomer}" placeholder="Owner/Customer" name="ownOrCustomer" id=""  autocomplete="on">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">Contact Person</label>
				    <input type="text" class="form-control form-control-sm listtext" value="${mastersform.contactPerson}" placeholder="Contact Person" name="contactPerson" id=""  autocomplete="on">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">Designation</label>
				    <input type="text" class="form-control form-control-sm listtext" value="${mastersform.designation}" placeholder="Designation" name="designation" id=""  autocomplete="on">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">Contact Number</label>
				    <input type="text" class="form-control form-control-sm listtext" value="${mastersform.contactNo}" placeholder="Contact Number" name="contactNo" id=""  autocomplete="on">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">Type</label>
				    <input type="text" class="form-control form-control-sm listtext" value="${mastersform.type}" name="type" id="" placeholder="Type" autocomplete="on">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">Property Valued</label>
				    <input type="text" class="form-control form-control-sm listtext" value="${mastersform.propValued}" name="propValued" id="" placeholder="Property Valued" autocomplete="on">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">Tenure</label>
				    <input type="text" class="form-control form-control-sm listtext" value="${mastersform.tenure}" name="tenure" id=""  placeholder="Tenure" autocomplete="on">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">Plot Number</label>
				    <input type="text" class="form-control form-control-sm listtext" value="${mastersform.plotNo}" name="plotNo" id="" placeholder="Plot Number"  autocomplete="on">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">Unit Number</label>
				    <input type="text" class="form-control form-control-sm listtext" value="${mastersform.unitNo}" name="unitNo" id="" placeholder="Unit Number" autocomplete="on">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">Building</label>
				    <input type="text" class="form-control form-control-sm listtext" value="${mastersform.building}" name="building" id="" placeholder="Building Name" autocomplete="on">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">SubCommunity</label>
				    <input type="text" class="form-control form-control-sm listtext" value="${mastersform.subCommunity}" name="subCommunity" id="" placeholder="SubCommunity" autocomplete="on">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">Community</label>
				    <input type="text" class="form-control form-control-sm listtext" value="${mastersform.community}" name="community" id="" placeholder="Community" autocomplete="on">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">City</label>
				    <input type="text" class="form-control form-control-sm listtext" value="${mastersform.city}" name="city" id="" placeholder="City" autocomplete="on">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">Valuation Type</label>
				    <input type="text" class="form-control form-control-sm listtext" value="${mastersform.valuationType}" name="valuationType" placeholder="Valuation Type" id=""  autocomplete="on">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">Method Of Valuation</label>
				    <input type="text" class="form-control form-control-sm listtext" value="${mastersform.methodOfValuation}" placeholder="Method Of Valuation" name="methodOfValuation" id=""  autocomplete="on">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">Valuer</label>
				    <input type="text" class="form-control form-control-sm listtext" value="${mastersform.valuer}" placeholder="Valuer" name="valuer" id=""  autocomplete="on">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">Taquimee Number</label>
				    <input type="text" class="form-control form-control-sm listtext" value="${mastersform.taquimeeNo}" placeholder="Taquimee Number" name="taquimeeNo" id=""  autocomplete="on">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">Location Rating</label>
				    <input type="text" class="form-control form-control-sm listtext" value="${mastersform.locationRating}" placeholder="Location Rating" name="locationRating" id=""  autocomplete="on">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">View Rating</label>
				    <input type="text" class="form-control form-control-sm listtext" value="${mastersform.viewRating}" placeholder="View Rating" name="viewRating" id=""  autocomplete="on">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">Quality Rating</label>
				    <input type="text" class="form-control form-control-sm listtext" value="${mastersform.qualityRating}" placeholder="Quality Rating" name="qualityRating" id=""  autocomplete="on">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">Property Placement</label>
				    <input type="text" class="form-control form-control-sm listtext" value="${mastersform.propplacement}" placeholder="Property Placement"  name="propplacement" id=""  autocomplete="on">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">Finishing Status</label>
				    <input type="text" class="form-control form-control-sm listtext" value="${mastersform.finishingStatus}" placeholder="Finishing Status" name="finishingStatus" id=""  autocomplete="on">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">Property Exposure</label>
				    <input type="text" class="form-control form-control-sm listtext" value="${mastersform.propExposure}" placeholder="Property Exposure" name="propExposure" id=""  autocomplete="on">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">Floor Number</label>
				    <input type="text" class="form-control form-control-sm listtext" value="${mastersform.floorNo}"  placeholder="Floor Number" name="floorNo" id=""  autocomplete="on">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">Number Of Rooms</label>
				    <input type="text" class="form-control form-control-sm listtext" value="${mastersform.noOfRooms}"  placeholder="Number Of Rooms" name="noOfRooms" id=""  autocomplete="on">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">LandSize/sqf</label>
				    <input type="text" class="form-control form-control-sm listtext" value="${mastersform.landsizepersqf}"  placeholder="LandSize/sqf" name="landsizepersqf" id=""  autocomplete="on">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">MV Of Land/sqf</label>
				    <input type="text" class="form-control form-control-sm listtext" value="${mastersform.mvoflandpersqf}"  placeholder="MV Of Land/sqf" name="mvoflandpersqf" id=""  autocomplete="on">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">BUA/sqf</label>
				    <input type="text" class="form-control form-control-sm listtext" value="${mastersform.BUApersqf}"  placeholder="BUA/sqf" name="BUApersqf" id=""  autocomplete="on">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">BUA/sm</label>
				    <input type="text" class="form-control form-control-sm listtext" value="${mastersform.BUApersm}"  placeholder="BUA/sm" name="BUApersm" id=""  autocomplete="on">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">BldgAge</label>
				    <input type="text" class="form-control form-control-sm listtext" value="${mastersform.bldgAge}"  placeholder="BldgAge" name="bldgAge" id=""  autocomplete="on">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">Status Of Valuer</label>
				    <input type="text" class="form-control form-control-sm listtext" value="${mastersform.statusOfValuer}"  placeholder="Status Of Valuer" name="statusOfValuer" id=""  autocomplete="on">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">Market Value</label>
				    <input type="text" class="form-control form-control-sm listtext" value="${mastersform.mv}"  placeholder="Market Value" name="mv" id=""  autocomplete="on">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">MV/sqf</label>
				    <input type="text" class="form-control form-control-sm listtext" value="${mastersform.mvpersqf}" placeholder="MV/sqf"  name="mvpersqf" id=""  autocomplete="on">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">Purpose Of Valuation</label>
				    <input type="text" class="form-control form-control-sm listtext" value="${mastersform.purposeOfValuation}" placeholder="Purpose Of Valuation"  name="purposeOfValuation" id=""  autocomplete="on">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel" style="line-height:16px">Report Acceptance Date</label>
					<input type="text" class="form-control form-control-sm listtext"  value="${mastersform.reportAcceptanceDate}" name="reportAcceptanceDate" placeholder="ex: 20-Apr-2020" id="">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">Proposal Signed Date</label>
					<input type="text" class="form-control form-control-sm listtext"  value="${mastersform.proposalSignedDate}" name="proposalSignedDate" placeholder="ex: 20-Apr-2020" id="">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">Invoice Number</label>
				    <input type="text" class="form-control form-control-sm listtext" value="${mastersform.invoiceNumber}" placeholder="Invoice Number"  name="invoiceNumber" id=""  autocomplete="on">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">Invoice Date</label>
				    <input type="text" class="form-control form-control-sm listtext"  value="${mastersform.invoiceDate}" name="invoiceDate" placeholder="ex: 20-Apr-2020" id="">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">Payment Date</label>
					<input type="text" class="form-control form-control-sm listtext"  value="${mastersform.paymentDate}" name="paymentDate" placeholder="ex: 20-Apr-2020" id="">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel" style="line-height:16px">Payment Received Date</label>
					<input type="text" class="form-control form-control-sm listtext"  value="${mastersform.paymentReceivedDate}" name="paymentReceivedDate" placeholder="ex: 20-Apr-2020" id="">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">Over Due Days</label>
				    <input type="text" class="form-control form-control-sm listtext" value="${mastersform.overdueDays}" placeholder="Over Due Days"  name="overdueDays" id=""  autocomplete="on">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">HardCopy Filled Date</label>
					<input type="text" class="form-control form-control-sm listtext"  value="${mastersform.hardCopyFilledDate}" placeholder="HardCopy Filled Date"  name="hardCopyFilledDate" placeholder="ex: 20-Apr-2020" id="">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">SoftCopy Filled Date</label>
					<input type="text" class="form-control form-control-sm listtext"  value="${mastersform.softCopyFilledDate}" placeholder="SoftCopy Filled Date"  name="softCopyFilledDate" placeholder="ex: 20-Apr-2020" id="">
				</div>
				<div class="listholder" style="height:28.5px ">
					<label class="listlabel">Google Drive Link</label>
				    <input type="text" class="form-control form-control-sm listtext" value="${mastersform.googleDriveLink}" placeholder="Google Drive Link"  name="googleDriveLink" id=""  autocomplete="on">
				</div>
				<div class="listholder" style="height:28.5px;">
					<label class="listlabel" style="display:none">Inspection Date</label>
					<input type="text" class="form-control form-control-sm listtext"  style="display:none" value="" name="" placeholder="ex: 20-Apr-2020" id="">
				</div>
				<input type="hidden" id="masterId"" name="masterId"
				value="${mastersform.masterId}"/>
				<div class="form-group" style="width: 100%">
					<button type="submit" style="width: 7% !important;background: forestgreen;margin-right:5px;float:left;padding:4px;margin-top:10px">Update</button>
					<button type="none" id="cancel" style="width: 7% !important;background: orange;margin-right:5px;padding:4px;margin-top:10px;float:left">Cancel</button>
					<div type="none" style="cursor:pointer;border-radius: 5px;width: 7% !important;margin-top:10px;background: #ff6600;float:left;position: relative;">
						<i class="material-icons" style="color: #fff;font-size: 17px;">delete</i>
						<a id="delete" class="icon-name" style="color:#fff;top: -3px;position: relative;">Delete</a>
					</div>
					
					
				</div>
			</div>
		</form:form>
	</div>
</div>
<%@include file="footer.jsp"%>
<script
	src="resources/assets/bundles/bootstrap-daterangepicker/daterangepicker.js"></script>
<script src="resources/assets/js/mastersedit.js"></script>
