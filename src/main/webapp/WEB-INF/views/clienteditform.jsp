<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isELIgnored="false"%>
<link rel='shortcut icon' type='image/x-icon'
	href='resources/assets/img/favicon.ico' />
<link rel="stylesheet" href="resources/assets/css/clientform.css">
<link
	href="resources/assets/bundles/vendor/datepicker/daterangepicker.css"
	rel="stylesheet" media="all">
<div class="clienteditform">
	<%@include file="header.jsp"%>
	<%@include file="sidebar.jsp"%>
	<div class="main-content"
		style="background: rgb(229, 231, 233) !important;overflow: scroll; overflow-x: hidden; margin-top: 70px; width: 100%; min-height: 530px !important">
		<form:form action="editClientDetails" id="clientform"
			modelAttribute="clientdetails">
			<div class="form-group"
				style="color: #000080; width: 100%; height: unset; margin-bottom: 4px !important;">
				<div class="client header">Client Details</div>
			</div>
			<div class="form-group">
				<div class="clientholder">
					<label class="labelholder">Client Name</label> <input type="text"
						class="form-control form-control-sm textholder" name="clientName"
						id="" value="${clientform.clientName}" placeholder="Client Name" autocomplete="on">
				</div>
			</div>
			<div class="form-group">
				<div class="clientholder">
					<label class="labelholder">Instructing Person</label> <input
						type="text" class="form-control form-control-sm textholder"
						name="contactPerson" id="" value="${clientform.contactPerson}" placeholder="Instructing Person"
						autocomplete="on">
				</div>
			</div>
			<div class="form-group">
				<div class="clientholder">
					<label class="labelholder">Instructing Person Position</label> <input
						type="text" class="form-control form-control-sm textholder"
						name="contactPosition" id="" value="${clientform.contactPosition}"
						placeholder="Instructing Person Position" autocomplete="on">
				</div>
			</div>
			<div class="form-group">
				<div class="clientholder">
					<label class="labelholder">Instructing Person Number </label> <input
						type="number" class="form-control form-control-sm textholder"
						name="contactNumber" id="" value="${clientform.contactNumber}" placeholder="Instructing Person Number"
						autocomplete="on">
				</div>
			</div>
			<div class="form-group">
				<div class="clientholder">
					<label class="labelholder">Instructing Person Mail</label> <input
						type="text" class="form-control form-control-sm textholder"
						name="contactMail" id=""  value="${clientform.contactMail}" placeholder="Instructing Person Mail"
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
						<input type="text" value="${clientform.relStartDate}" class="form-control form-control-sm datepicker" name="relStartDate" id="">
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
					 <input type="text" class="form-control form-control-sm tlholder" name="pifee_Dubai" value="${clientform.pifee_Dubai}" id="" placeholder="AED" autocomplete="on">
					  <input type="text" class="form-control form-control-sm tlholder"  style="margin-left:8px;" name="pitat_Dubai" value="${clientform.pitat_Dubai}" id="" placeholder="Days" autocomplete="on"> 
					 <input type="text" class="form-control form-control-sm tlholder"  style="margin-left:7px;" name="dtfee_Dubai" value="${clientform.dtfee_Dubai}" id="" placeholder="AED" autocomplete="on"> 
					  <input type="text" class="form-control form-control-sm tlholder" style="margin-left:7px;"  name="dttat_Dubai" value="${clientform.dttat_Dubai}" id="" placeholder="Days" autocomplete="on"> 
					 <input type="text" class="form-control form-control-sm tlholder" style="margin-left:7px;"  name="dbfee_Dubai" value="${clientform.dbfee_Dubai}" id="" placeholder="AED" autocomplete="on">
					 <input type="text" class="form-control form-control-sm lholder" style="margin-left:7px;"  name="dbtat_Dubai" value="${clientform.dbtat_Dubai}" id="" placeholder="Days" autocomplete="on">
				</div>
				<div class="clholder">
					<label class="llholder">Abu Dubai</label>
					 <input type="text" class="form-control form-control-sm tlholder" name="pifee_AbuDhabi" id="" value="${clientform.pifee_AbuDhabi}" placeholder="AED" autocomplete="on">
					  <input type="text" class="form-control form-control-sm tlholder"  style="margin-left:8px;" name="pitat_AbuDhabi" value="${clientform.pitat_AbuDhabi}" id="" placeholder="Days" autocomplete="on"> 
					 <input type="text" class="form-control form-control-sm tlholder"  style="margin-left:7px;" name="dtfee_AbuDhabi" value="${clientform.dtfee_AbuDhabi}" id="" placeholder="AED" autocomplete="on"> 
					  <input type="text" class="form-control form-control-sm tlholder" style="margin-left:7px;"  name="dttat_AbuDhabi" value="${clientform.dttat_AbuDhabi}" id="" placeholder="Days" autocomplete="on"> 
					 <input type="text" class="form-control form-control-sm tlholder" style="margin-left:7px;"  name="dbfee_AbuDhabi" value="${clientform.dbfee_AbuDhabi}" id="" placeholder="AED" autocomplete="on">
					 <input type="text" class="form-control form-control-sm lholder" style="margin-left:7px;"  name="dbtat_AbuDhabi" value="${clientform.dbtat_AbuDhabi}"  id="" placeholder="Days" autocomplete="on">
				</div>

				<div class="clholder">
					<label class="llholder">Sharjah</label>
					 <input type="text" class="form-control form-control-sm tlholder" name="pifee_Sharjah"  value="${clientform.pifee_Sharjah}" id="" placeholder="AED" autocomplete="on">
					  <input type="text" class="form-control form-control-sm tlholder"  style="margin-left:8px;" name="pitat_Sharjah"  value="${clientform.pitat_Sharjah}"id="" placeholder="Days" autocomplete="on"> 
					 <input type="text" class="form-control form-control-sm tlholder"  style="margin-left:7px;" name="dtfee_Sharjah"  value="${clientform.dtfee_Sharjah}" id="" placeholder="AED" autocomplete="on"> 
					  <input type="text" class="form-control form-control-sm tlholder" style="margin-left:7px;"  name="dttat_Sharjah"  value="${clientform.dttat_Sharjah}" id="" placeholder="Days" autocomplete="on"> 
					 <input type="text" class="form-control form-control-sm tlholder" style="margin-left:7px;"  name="dbfee_Sharjah"  value="${clientform.dbfee_Sharjah}" id="" placeholder="AED" autocomplete="on">
					 <input type="text" class="form-control form-control-sm lholder" style="margin-left:7px;"  name="dbtat_Sharjah"  value="${clientform.dbtat_Sharjah}" id="" placeholder="Days" autocomplete="on">
				</div>
				<div class="clholder">
					<label class="llholder">Ajman</label>
					 <input type="text" class="form-control form-control-sm tlholder" name="pifee_Fujairah"  value="${clientform.pifee_Ajman}" id="" placeholder="AED" autocomplete="on">
					  <input type="text" class="form-control form-control-sm tlholder"  style="margin-left:8px;" name="pitat_Ajman"  value="${clientform.pitat_Ajman}" id="" placeholder="Days" autocomplete="on"> 
					 <input type="text" class="form-control form-control-sm tlholder"  style="margin-left:7px;" name="dtfee_Ajman" value="${clientform.dtfee_Ajman}"  id="" placeholder="AED" autocomplete="on"> 
					  <input type="text" class="form-control form-control-sm tlholder" style="margin-left:7px;"  name="dttat_Ajman"  value="${clientform.dttat_Ajman}" id="" placeholder="Days" autocomplete="on"> 
					 <input type="text" class="form-control form-control-sm tlholder" style="margin-left:7px;"  name="dbfee_Ajman"  value="${clientform.dbfee_Ajman}" id="" placeholder="AED" autocomplete="on">
					 <input type="text" class="form-control form-control-sm lholder" style="margin-left:7px;"  name="dbtat_Ajman"  value="${clientform.dbtat_Ajman}" id="" placeholder="Days" autocomplete="on">
				</div>
				<div class="clholder">
					<label class="llholder">Fujairah</label>
					 <input type="text" class="form-control form-control-sm tlholder" name="pifee_Ajman" value="${clientform.pifee_Fujairah}" id="" placeholder="AED" autocomplete="on">
					  <input type="text" class="form-control form-control-sm tlholder"  style="margin-left:8px;" name="pitat_Ajman"  value="${clientform.pitat_Ajman}" id="" placeholder="Days" autocomplete="on"> 
					 <input type="text" class="form-control form-control-sm tlholder"  style="margin-left:7px;" name="dtfee_Ajman"  value="${clientform.dtfee_Ajman}" id="" placeholder="AED" autocomplete="on"> 
					  <input type="text" class="form-control form-control-sm tlholder" style="margin-left:7px;"  name="dttat_Ajman"  value="${clientform.dttat_Ajman}" id="" placeholder="Days" autocomplete="on"> 
					 <input type="text" class="form-control form-control-sm tlholder" style="margin-left:7px;"  name="dbfee_Ajman"  value="${clientform.dbfee_Ajman}" id="" placeholder="AED" autocomplete="on">
					 <input type="text" class="form-control form-control-sm lholder" style="margin-left:7px;"  name="dbtat_Ajman"  value="${clientform.dbtat_Ajman}" id="" placeholder="Days" autocomplete="on">
				</div>
				<div class="clholder">
					<label class="llholder" style="line-height: 16px">RasAlKhaimah</label>
					 <input type="text" class="form-control form-control-sm tlholder" name="pifee_RasAlKhaima" value="${clientform.pifee_RasAlKhaima}" id="" placeholder="AED" autocomplete="on">
					  <input type="text" class="form-control form-control-sm tlholder"  style="margin-left:8px;" name="pitat_RasAlKhaima" value="${clientform.pitat_RasAlKhaima}" id="" placeholder="Days" autocomplete="on"> 
					 <input type="text" class="form-control form-control-sm tlholder"  style="margin-left:7px;" name="dtfee_RasAlKhaima" value="${clientform.dtfee_RasAlKhaima}" id="" placeholder="AED" autocomplete="on"> 
					  <input type="text" class="form-control form-control-sm tlholder" style="margin-left:7px;"  name="dttat_RasAlKhaima" value="${clientform.dttat_RasAlKhaima}" id="" placeholder="Days" autocomplete="on"> 
					 <input type="text" class="form-control form-control-sm tlholder" style="margin-left:7px;"  name="dbfee_RasAlKhaima" value="${clientform.dbfee_RasAlKhaima}" id="" placeholder="AED" autocomplete="on">
					 <input type="text" class="form-control form-control-sm lholder" style="margin-left:7px;"  name="dbtat_RasAlKhaima" value="${clientform.dbtat_RasAlKhaima}" id="" placeholder="Days" autocomplete="on">
				</div>
				<div class="clholder">
					<label class="llholder" style="line-height: 16px">UmmAlQuwain</label>
					 <input type="text" class="form-control form-control-sm tlholder" name="pifee_UmmAlQuwain" value="${clientform.pifee_UmmAlQuwain}" id="" placeholder="AED" autocomplete="on">
					  <input type="text" class="form-control form-control-sm tlholder"  style="margin-left:8px;" name="pitat_UmmAlQuwain" value="${clientform.pitat_UmmAlQuwain}" id="" placeholder="Days" autocomplete="on"> 
					 <input type="text" class="form-control form-control-sm tlholder"  style="margin-left:7px;" name="dtfee_UmmAlQuwain" value="${clientform.dtfee_UmmAlQuwain}" id="" placeholder="AED" autocomplete="on"> 
					  <input type="text" class="form-control form-control-sm tlholder" style="margin-left:7px;"  name="dttat_UmmAlQuwain" value="${clientform.dttat_UmmAlQuwain}" id="" placeholder="Days" autocomplete="on"> 
					 <input type="text" class="form-control form-control-sm tlholder" style="margin-left:7px;"  name="dbfee_UmmAlQuwain" value="${clientform.dbfee_UmmAlQuwain}" id="" placeholder="AED" autocomplete="on">
					 <input type="text" class="form-control form-control-sm lholder" style="margin-left:7px;"  name="dbtat_UmmAlQuwain" value="${clientform.dbtat_UmmAlQuwain}" id="" placeholder="Days" autocomplete="on">
				</div>
			</div>
			<br>
			<input type="hidden" id="clientId"" name="clientId"
				value="${clientform.clientId}"/>
			<div class="form-group" style="width: 100%">
				<button type="submit" style="background: #000080">Update</button>
				<button type="none" id="cancel" style="background: #DF0101">Cancel</button>
			</div>
		</form:form>
	</div>
</div>
<%@include file="footer.jsp"%>
<script src="resources/assets/js/clientedit.js"></script>
<script
	src="resources/assets/bundles/bootstrap-daterangepicker/daterangepicker.js"></script>
