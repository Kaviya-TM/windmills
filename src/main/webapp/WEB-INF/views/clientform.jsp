<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isELIgnored="false"%>
<link rel='shortcut icon' type='image/x-icon'
	href='resources/assets/img/favicon.ico' />
<link rel="stylesheet" href="resources/assets/css/clientform.css">
<link
	href="resources/assets/bundles/vendor/datepicker/daterangepicker.css"
	rel="stylesheet" media="all">
<div class="clientform">
	<%@include file="header.jsp"%>
	<%@include file="sidebar.jsp"%>
	<div class="main-content"
		style="background: rgb(229, 231, 233) !important;overflow: scroll; overflow-x: hidden; margin-top: 70px; width: 100%; min-height: 530px !important">
		<form:form action="addClientDetails" id="clientform"
			modelAttribute="clientdetails">
			<div class="form-group"
				style="color: #000080; width: 100%; height: unset; margin-bottom: 4px !important;">
				<div class="client header">Client Details</div>
			</div>
			<div class="form-group">
				<div class="clientholder">
					<label class="labelholder">Client Name</label> <input type="text"
						class="form-control form-control-sm textholder" name="clientName"
						id="" placeholder="Client Name" autocomplete="on">
				</div>
			</div>
			<div class="form-group">
				<div class="clientholder">
					<label class="labelholder">Instructing Person</label> <input
						type="text" class="form-control form-control-sm textholder"
						name="contactPerson" id="" placeholder="Instructing Person"
						autocomplete="on">
				</div>
			</div>
			<div class="form-group">
				<div class="clientholder">
					<label class="labelholder">Instructing Person Position</label> <input
						type="text" class="form-control form-control-sm textholder"
						name="contactPosition" id=""
						placeholder="Instructing Person Position" autocomplete="on">
				</div>
			</div>
			<div class="form-group">
				<div class="clientholder">
					<label class="labelholder">Instructing Person Number </label> <input
						type="number" class="form-control form-control-sm textholder"
						name="contactNumber" id="" placeholder="Instructing Person Number"
						autocomplete="on">
				</div>
			</div>
			<div class="form-group">
				<div class="clientholder">
					<label class="labelholder">Instructing Person Mail</label> <input
						type="text" class="form-control form-control-sm textholder"
						name="contactMail" id="" placeholder="Instructing Person Mail"
						autocomplete="on">
				</div>
			</div>
			<div class="form-group">
				<div class="clientholder">
					<label class="labelholder">Relationship Start Date</label>
					<div class="input-group textholder">
						<div class="input-group-prepend">
							<div class="input-group-text">
								<i class="fas fa-calendar"></i>
							</div>
						</div>
						<input type="text" class="form-control form-control-sm datepicker" name="relStartDate" id="">
					</div>
				</div>
			</div>
			<div class="form-group"
				style="color: #000080; width: 100%; height: unset; margin-bottom: 10px !important;">
				<div class="client header">Agreed Fees Structure For Standard
					Property</div>
			</div>
			<div class="form-group" style="width: 100%;">
				<div class="clholder" style="margin-bottom: 0px;">
					<label class="llholder" style="color: green"><b>Emirates</b></label>
					<label class="tlholder" style="color: brown; margin-left: 2px; width:15% !important"><b>Physical Inspection</b></label> 
					<label class="tlholder" style="color: green; margin-left: 2px"><b>TAT</b></label> 
					<label class="tlholder" style="color: brown; margin-left: -5px"><b>Desktop</b></label>
					<label class="tlholder" style="color: green; margin-left: 2px"><b>TAT</b></label> 
					<label class="tlholder" style="color: brown; margin-left: 2px"><b>DriveBy</b></label>
					<label class="tlholder" style="color: green; margin-left: 2px"><b>TAT</b></label>
				</div>
				<div class="clholder">
					<label class="llholder">Dubai</label>
					 <input type="text" class="form-control form-control-sm tlholder" name="pifee_Dubai" id="" placeholder="AED" autocomplete="on">
					  <input type="text" class="form-control form-control-sm tlholder"  style="margin-left:8px;" name="pitat_Dubai" id="" placeholder="Days" autocomplete="on"> 
					 <input type="text" class="form-control form-control-sm tlholder"  style="margin-left:7px;" name="dtfee_Dubai" id="" placeholder="AED" autocomplete="on"> 
					  <input type="text" class="form-control form-control-sm tlholder" style="margin-left:7px;"  name="dttat_Dubai" id="" placeholder="Days" autocomplete="on"> 
					 <input type="text" class="form-control form-control-sm tlholder" style="margin-left:7px;"  name="dbfee_Dubai" id="" placeholder="AED" autocomplete="on">
					 <input type="text" class="form-control form-control-sm lholder" style="margin-left:7px;"  name="dbtat_Dubai" id="" placeholder="Days" autocomplete="on">
				</div>
				<div class="clholder">
					<label class="llholder">Abu Dubai</label>
					 <input type="text" class="form-control form-control-sm tlholder" name="pifee_AbuDhabi" id="" placeholder="AED" autocomplete="on">
					  <input type="text" class="form-control form-control-sm tlholder"  style="margin-left:8px;" name="pitat_AbuDhabi" id="" placeholder="Days" autocomplete="on"> 
					 <input type="text" class="form-control form-control-sm tlholder"  style="margin-left:7px;" name="dtfee_AbuDhabi" id="" placeholder="AED" autocomplete="on"> 
					  <input type="text" class="form-control form-control-sm tlholder" style="margin-left:7px;"  name="dttat_AbuDhabi" id="" placeholder="Days" autocomplete="on"> 
					 <input type="text" class="form-control form-control-sm tlholder" style="margin-left:7px;"  name="dbfee_AbuDhabi" id="" placeholder="AED" autocomplete="on">
					 <input type="text" class="form-control form-control-sm lholder" style="margin-left:7px;"  name="dbtat_AbuDhabi" id="" placeholder="Days" autocomplete="on">
				</div>

				<div class="clholder">
					<label class="llholder">Sharjah</label>
					 <input type="text" class="form-control form-control-sm tlholder" name="pifee_Sharjah" id="" placeholder="AED" autocomplete="on">
					  <input type="text" class="form-control form-control-sm tlholder"  style="margin-left:8px;" name="pitat_Sharjah" id="" placeholder="Days" autocomplete="on"> 
					 <input type="text" class="form-control form-control-sm tlholder"  style="margin-left:7px;" name="dtfee_Sharjah" id="" placeholder="AED" autocomplete="on"> 
					  <input type="text" class="form-control form-control-sm tlholder" style="margin-left:7px;"  name="dttat_Sharjah" id="" placeholder="Days" autocomplete="on"> 
					 <input type="text" class="form-control form-control-sm tlholder" style="margin-left:7px;"  name="dbfee_Sharjah" id="" placeholder="AED" autocomplete="on">
					 <input type="text" class="form-control form-control-sm lholder" style="margin-left:7px;"  name="dbtat_Sharjah" id="" placeholder="Days" autocomplete="on">
				</div>
				<div class="clholder">
					<label class="llholder">Fujairah</label>
					 <input type="text" class="form-control form-control-sm tlholder" name="pifee_Fujairah" id="" placeholder="AED" autocomplete="on">
					  <input type="text" class="form-control form-control-sm tlholder"  style="margin-left:8px;" name="pitat_Fujairah" id="" placeholder="Days" autocomplete="on"> 
					 <input type="text" class="form-control form-control-sm tlholder"  style="margin-left:7px;" name="dtfee_Fujairah" id="" placeholder="AED" autocomplete="on"> 
					  <input type="text" class="form-control form-control-sm tlholder" style="margin-left:7px;"  name="dttat_Fujairah" id="" placeholder="Days" autocomplete="on"> 
					 <input type="text" class="form-control form-control-sm tlholder" style="margin-left:7px;"  name="dbfee_Fujairah" id="" placeholder="AED" autocomplete="on">
					 <input type="text" class="form-control form-control-sm lholder" style="margin-left:7px;"  name="dbtat_Fujairah" id="" placeholder="Days" autocomplete="on">
				</div>
				<div class="clholder">
					<label class="llholder">Ajman</label>
					 <input type="text" class="form-control form-control-sm tlholder" name="pifee_Ajman" id="" placeholder="AED" autocomplete="on">
					  <input type="text" class="form-control form-control-sm tlholder"  style="margin-left:8px;" name="pitat_Ajman" id="" placeholder="Days" autocomplete="on"> 
					 <input type="text" class="form-control form-control-sm tlholder"  style="margin-left:7px;" name="dtfee_Ajman" id="" placeholder="AED" autocomplete="on"> 
					  <input type="text" class="form-control form-control-sm tlholder" style="margin-left:7px;"  name="dttat_Ajman" id="" placeholder="Days" autocomplete="on"> 
					 <input type="text" class="form-control form-control-sm tlholder" style="margin-left:7px;"  name="dbfee_Ajman" id="" placeholder="AED" autocomplete="on">
					 <input type="text" class="form-control form-control-sm lholder" style="margin-left:7px;"  name="dbtat_Ajman" id="" placeholder="Days" autocomplete="on">
				</div>
				<div class="clholder">
					<label class="llholder" style="line-height: 16px">RasAlKhaimah</label>
					 <input type="text" class="form-control form-control-sm tlholder" name="pifee_RasAlKhaima" id="" placeholder="AED" autocomplete="on">
					  <input type="text" class="form-control form-control-sm tlholder"  style="margin-left:8px;" name="pitat_RasAlKhaima" id="" placeholder="Days" autocomplete="on"> 
					 <input type="text" class="form-control form-control-sm tlholder"  style="margin-left:7px;" name="dtfee_RasAlKhaima" id="" placeholder="AED" autocomplete="on"> 
					  <input type="text" class="form-control form-control-sm tlholder" style="margin-left:7px;"  name="dttat_RasAlKhaima" id="" placeholder="Days" autocomplete="on"> 
					 <input type="text" class="form-control form-control-sm tlholder" style="margin-left:7px;"  name="dbfee_RasAlKhaima" id="" placeholder="AED" autocomplete="on">
					 <input type="text" class="form-control form-control-sm lholder" style="margin-left:7px;"  name="dbtat_RasAlKhaima" id="" placeholder="Days" autocomplete="on">
				</div>
				<div class="clholder">
					<label class="llholder" style="line-height: 16px">UmmAlQuwain</label>
					 <input type="text" class="form-control form-control-sm tlholder" name="pifee_UmmAlQuwain" id="" placeholder="AED" autocomplete="on">
					  <input type="text" class="form-control form-control-sm tlholder"  style="margin-left:8px;" name="pitat_UmmAlQuwain" id="" placeholder="Days" autocomplete="on"> 
					 <input type="text" class="form-control form-control-sm tlholder"  style="margin-left:7px;" name="dtfee_UmmAlQuwain" id="" placeholder="AED" autocomplete="on"> 
					  <input type="text" class="form-control form-control-sm tlholder" style="margin-left:7px;"  name="dttat_UmmAlQuwain" id="" placeholder="Days" autocomplete="on"> 
					 <input type="text" class="form-control form-control-sm tlholder" style="margin-left:7px;"  name="dbfee_UmmAlQuwain" id="" placeholder="AED" autocomplete="on">
					 <input type="text" class="form-control form-control-sm lholder" style="margin-left:7px;"  name="dbtat_UmmAlQuwain" id="" placeholder="Days" autocomplete="on">
				</div>
			</div>


			<br>

<!-- 			<div class="form-group" style="width: 100%; height: unset"> -->
<!-- 				<div class="client header" -->
<!-- 					style="color: #000080; width: 50%; float: left;"> -->
<!-- 					Other Contact Person <span class="othercontactadd">( Add )</span> -->
<!-- 				</div> -->
<!-- 						            	<div class="contactadd"><b>ADD</b></div>    -->
<!-- 			</div> -->
<!-- 			<div class="form-group" -->
<!-- 				style="width: 100%; margin-bottom: 4px !important;"> -->
<!-- 				<div class="contactholder"> -->
<!-- 					<div class="clientholder1" style="margin-top: 2px !important;"> -->
<!-- 						<div class="cname"> -->
<!-- 							<label class="labelholder1">Name</label> <input type="text" -->
<!-- 								class="form-control form-control-sm textholder1" name="" id="" -->
<!-- 								placeholder="Name" autocomplete="on"> -->
<!-- 						</div> -->
<!-- 						<div class="phone"> -->
<!-- 							<label class="labelholder1">Phone</label> <input type="text" -->
<!-- 								class="form-control form-control-sm textholder1" name="" id="" -->
<!-- 								placeholder="Phone" autocomplete="on"> -->
<!-- 						</div> -->
<!-- 						<div class="email"> -->
<!-- 							<label class="labelholder1">Email</label> <input type="text" -->
<!-- 								class="form-control form-control-sm textholder1" name="" id="" -->
<!-- 								placeholder="Email" autocomplete="on"> -->
<!-- 						</div> -->
<!-- 						<div class="removeDiv"> -->
<!-- 							<i class="fas fa-times"></i> -->
<!-- 						</div> -->
<!-- 						<br> -->
<!-- 					</div> -->
<!-- 				</div> -->
<!-- 			</div> -->
			<div class="form-group" style="width: 100%">
				<button type="submit">Save</button>
			</div>
		</form:form>
	</div>
</div>
<%@include file="footer.jsp"%>
<script src="resources/assets/js/clientform.js"></script>
<script
	src="resources/assets/bundles/bootstrap-daterangepicker/daterangepicker.js"></script>
