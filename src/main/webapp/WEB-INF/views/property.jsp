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
<div class="propertyform">
	<%@include file="header.jsp"%>
	<%@include file="sidebar.jsp"%>
	<div class="main-content"
		style="background: rgb(229, 231, 233) !important; margin-top: 70px; width: 100%; min-height: 530px !important">
		<form:form action="addPropertyValued" id="" modelAttribute="property">
			<div class="form-group"
				style="color: #000080; width: 50%;float:left; height: unset; margin-bottom: 20px !important;">
				<div class="client header">Property Valued Details</div>
			</div>
			<div class="form-group"
				style="color: #000080;width: 50%;float:left;height: unset; margin-bottom: 20px !important;">
				<div class="client header">Documents Required</div>
			</div>
			<div class="form-group" style="width: 50%;float:left;">
				<div class="propertyholder">
					<label class="propertylabel" style="width:45%">Property Valued</label> <input
						type="text" class="form-control form-control-sm propertytext" style="width:50% !important"
						name="propertyValued" id="" placeholder="Property Valued">
				</div>
				<div class="propertyholder">
					<label class="propertylabel" style="width:45%">Property Category</label> <input
						type="text" class="form-control form-control-sm propertytext" style="width:50% !important"
						name="propertyCategory" id="" placeholder="Property Category">
				</div>
				<div class="propertyholder">
					<label class="propertylabel" style="width:45%">Valuation Approach</label> <input
						type="text" class="form-control form-control-sm propertytext" style="width:50% !important"
						name="valuationApproach" id="" placeholder="Valuation Approach">
				</div>
				<div class="propertyholder">
					<label class="propertylabel" style="width:45%">Approach Reasoning</label> <input
						type="text" class="form-control form-control-sm propertytext" style="width:50% !important"
						name="approachReasoning" id="" placeholder="Approach Reasoning">
				</div>
				<div class="propertyholder">
					<label class="propertylabel" style="width:45%">Maximum Age</label> <input
						type="text" class="form-control form-control-sm propertytext" style="width:50% !important"
						name="maxage" id="" placeholder="Maximum Age">
				</div>
				<div class="propertyholder">
					<label class="propertylabel" style="width:45%">Number of years to complete the building</label> <input
						type="text" class="form-control form-control-sm propertytext" style="width:50% !important"
						name="noOfYears" id="" placeholder="Number of years to complete the building">
				</div>
				<div class="errMsg">Property Valued Already Exists</div>
			</div>
			<div class="form-group" style="width: 50%;float:left;">
				<div class="propertyholder">
					<label class="propertylabel" style="width:20%">Document 1</label>
					 <select class="form-control form-control-sm propertytext" style="width:60% !important"
						name="document1" id="document1">
							<option value="" hidden>-- Select--</option>
							<option value="Signed Terms of Engagement">Signed Terms of Engagement</option>
							<option value="Title Deed">Title Deed</option>
							<option value="Property Lease Deed">Property Lease Deed</option>
							<option value="Land Lease Agreement">Land Lease Agreement</option>
							<option value="Land Purchase Document">Land Purchase Document</option>
							<option value="Sale Purchase Agreement">Sale Purchase Agreement</option> 
							<option value="MoU for sale">MoU for sale</option>
							<option value="Initial Contract for Sale">Initial Contract for Sale</option>
							<option value="Affection or Site Plan">Affection or Site Plan</option>
							<option value="Floor Plans">Floor Plans</option>
							<option value="Building Permission Certificate">Building Permission Certificate</option>
							<option value="Building Completion Certificate">Building Completion Certificate</option>
							<option value="Contracting Agreement (including BOQ)">Contracting Agreement (including BOQ)</option>
							<option value="Renovation Agreement (including BOQ)">Renovation Agreement (including BOQ)</option>
							<option value="Civil Defence Certificate">Civil Defence Certificate</option>
							<option value="Tenancy Contracts">Tenancy Contracts</option>
							<option value="Rent List Spreadsheet">Rent List Spreadsheet</option>
							<option value="Utilities Connection Certificate">Utilities Connection Certificate</option>
							<option value="Property Management/Service Contract">Property Management/Service Contract</option>
							<option value="Financing Agreement">Financing Agreement</option>
							<option value="HVAC Maintenance Contract">HVAC Maintenance Contract</option>
							<option value="MEP Maintenance Contract">MEP Maintenance Contract</option>
							<option value="Civil Maintenance Contract">Civil Maintenance Contract</option>
							<option value="Security Contract">Security Contract</option>
							<option value="Cleaning Contract">Cleaning Contract</option>
							<option value="Pest Control Agreement">Pest Control Agreement</option>
							<option value="Insurance Policy">Insurance Policy</option>
							<option value="Financial Performance Statements">Financial Performance Statements</option>
							<option value="Financial Projections Statements">Financial Projections Statements</option>
							<option value="Average Daily Rate Performance Statement">Average Daily Rate Performance Statement</option>
							<option value="Average Daily Rate Projections Statement">Average Daily Rate Projections Statement</option>
							<option value="Average Occupancy Rate Performance Statement">Average Occupancy Rate Performance Statement</option>
							<option value="Average Occupancy Rate Projections Statement">Average Occupancy Rate Projections Statement</option>
							<option value="None">None</option>
					</select>
				</div>
				<div class="propertyholder">
					<label class="propertylabel" style="width:20%">Document 2</label>
					 <select class="form-control form-control-sm propertytext" style="width:60% !important"
						name="document2" id="document2">
							<option value="" hidden>-- Select--</option>
							<option value="Signed Terms of Engagement">Signed Terms of Engagement</option>
							<option value="Title Deed">Title Deed</option>
							<option value="Property Lease Deed">Property Lease Deed</option>
							<option value="Land Lease Agreement">Land Lease Agreement</option>
							<option value="Land Purchase Document">Land Purchase Document</option>
							<option value="Sale Purchase Agreement">Sale Purchase Agreement</option> 
							<option value="MoU for sale">MoU for sale</option>
							<option value="Initial Contract for Sale">Initial Contract for Sale</option>
							<option value="Affection or Site Plan">Affection or Site Plan</option>
							<option value="Floor Plans">Floor Plans</option>
							<option value="Building Permission Certificate">Building Permission Certificate</option>
							<option value="Building Completion Certificate">Building Completion Certificate</option>
							<option value="Contracting Agreement (including BOQ)">Contracting Agreement (including BOQ)</option>
							<option value="Renovation Agreement (including BOQ)">Renovation Agreement (including BOQ)</option>
							<option value="Civil Defence Certificate">Civil Defence Certificate</option>
							<option value="Tenancy Contracts">Tenancy Contracts</option>
							<option value="Rent List Spreadsheet">Rent List Spreadsheet</option>
							<option value="Utilities Connection Certificate">Utilities Connection Certificate</option>
							<option value="Property Management/Service Contract">Property Management/Service Contract</option>
							<option value="Financing Agreement">Financing Agreement</option>
							<option value="HVAC Maintenance Contract">HVAC Maintenance Contract</option>
							<option value="MEP Maintenance Contract">MEP Maintenance Contract</option>
							<option value="Civil Maintenance Contract">Civil Maintenance Contract</option>
							<option value="Security Contract">Security Contract</option>
							<option value="Cleaning Contract">Cleaning Contract</option>
							<option value="Pest Control Agreement">Pest Control Agreement</option>
							<option value="Insurance Policy">Insurance Policy</option>
							<option value="Financial Performance Statements">Financial Performance Statements</option>
							<option value="Financial Projections Statements">Financial Projections Statements</option>
							<option value="Average Daily Rate Performance Statement">Average Daily Rate Performance Statement</option>
							<option value="Average Daily Rate Projections Statement">Average Daily Rate Projections Statement</option>
							<option value="Average Occupancy Rate Performance Statement">Average Occupancy Rate Performance Statement</option>
							<option value="Average Occupancy Rate Projections Statement">Average Occupancy Rate Projections Statement</option>
							<option value="None">None</option>
					</select>
				</div>
				<div class="propertyholder">
					<label class="propertylabel" style="width:20%">Document 3</label>
					 <select class="form-control form-control-sm propertytext" style="width:60% !important"
						name="document3" id="document3">
							<option value="" hidden>-- Select--</option>
							<option value="Signed Terms of Engagement">Signed Terms of Engagement</option>
							<option value="Title Deed">Title Deed</option>
							<option value="Property Lease Deed">Property Lease Deed</option>
							<option value="Land Lease Agreement">Land Lease Agreement</option>
							<option value="Land Purchase Document">Land Purchase Document</option>
							<option value="Sale Purchase Agreement">Sale Purchase Agreement</option> 
							<option value="MoU for sale">MoU for sale</option>
							<option value="Initial Contract for Sale">Initial Contract for Sale</option>
							<option value="Affection or Site Plan">Affection or Site Plan</option>
							<option value="Floor Plans">Floor Plans</option>
							<option value="Building Permission Certificate">Building Permission Certificate</option>
							<option value="Building Completion Certificate">Building Completion Certificate</option>
							<option value="Contracting Agreement (including BOQ)">Contracting Agreement (including BOQ)</option>
							<option value="Renovation Agreement (including BOQ)">Renovation Agreement (including BOQ)</option>
							<option value="Civil Defence Certificate">Civil Defence Certificate</option>
							<option value="Tenancy Contracts">Tenancy Contracts</option>
							<option value="Rent List Spreadsheet">Rent List Spreadsheet</option>
							<option value="Utilities Connection Certificate">Utilities Connection Certificate</option>
							<option value="Property Management/Service Contract">Property Management/Service Contract</option>
							<option value="Financing Agreement">Financing Agreement</option>
							<option value="HVAC Maintenance Contract">HVAC Maintenance Contract</option>
							<option value="MEP Maintenance Contract">MEP Maintenance Contract</option>
							<option value="Civil Maintenance Contract">Civil Maintenance Contract</option>
							<option value="Security Contract">Security Contract</option>
							<option value="Cleaning Contract">Cleaning Contract</option>
							<option value="Pest Control Agreement">Pest Control Agreement</option>
							<option value="Insurance Policy">Insurance Policy</option>
							<option value="Financial Performance Statements">Financial Performance Statements</option>
							<option value="Financial Projections Statements">Financial Projections Statements</option>
							<option value="Average Daily Rate Performance Statement">Average Daily Rate Performance Statement</option>
							<option value="Average Daily Rate Projections Statement">Average Daily Rate Projections Statement</option>
							<option value="Average Occupancy Rate Performance Statement">Average Occupancy Rate Performance Statement</option>
							<option value="Average Occupancy Rate Projections Statement">Average Occupancy Rate Projections Statement</option>
							<option value="None">None</option>
					</select>
				</div>
				<div class="propertyholder">
					<label class="propertylabel" style="width:20%">Document 4</label>
					 <select class="form-control form-control-sm propertytext" style="width:60% !important"
						name="document4" id="document4">
							<option value="" hidden>-- Select--</option>
							<option value="Signed Terms of Engagement">Signed Terms of Engagement</option>
							<option value="Title Deed">Title Deed</option>
							<option value="Property Lease Deed">Property Lease Deed</option>
							<option value="Land Lease Agreement">Land Lease Agreement</option>
							<option value="Land Purchase Document">Land Purchase Document</option>
							<option value="Sale Purchase Agreement">Sale Purchase Agreement</option> 
							<option value="MoU for sale">MoU for sale</option>
							<option value="Initial Contract for Sale">Initial Contract for Sale</option>
							<option value="Affection or Site Plan">Affection or Site Plan</option>
							<option value="Floor Plans">Floor Plans</option>
							<option value="Building Permission Certificate">Building Permission Certificate</option>
							<option value="Building Completion Certificate">Building Completion Certificate</option>
							<option value="Contracting Agreement (including BOQ)">Contracting Agreement (including BOQ)</option>
							<option value="Renovation Agreement (including BOQ)">Renovation Agreement (including BOQ)</option>
							<option value="Civil Defence Certificate">Civil Defence Certificate</option>
							<option value="Tenancy Contracts">Tenancy Contracts</option>
							<option value="Rent List Spreadsheet">Rent List Spreadsheet</option>
							<option value="Utilities Connection Certificate">Utilities Connection Certificate</option>
							<option value="Property Management/Service Contract">Property Management/Service Contract</option>
							<option value="Financing Agreement">Financing Agreement</option>
							<option value="HVAC Maintenance Contract">HVAC Maintenance Contract</option>
							<option value="MEP Maintenance Contract">MEP Maintenance Contract</option>
							<option value="Civil Maintenance Contract">Civil Maintenance Contract</option>
							<option value="Security Contract">Security Contract</option>
							<option value="Cleaning Contract">Cleaning Contract</option>
							<option value="Pest Control Agreement">Pest Control Agreement</option>
							<option value="Insurance Policy">Insurance Policy</option>
							<option value="Financial Performance Statements">Financial Performance Statements</option>
							<option value="Financial Projections Statements">Financial Projections Statements</option>
							<option value="Average Daily Rate Performance Statement">Average Daily Rate Performance Statement</option>
							<option value="Average Daily Rate Projections Statement">Average Daily Rate Projections Statement</option>
							<option value="Average Occupancy Rate Performance Statement">Average Occupancy Rate Performance Statement</option>
							<option value="Average Occupancy Rate Projections Statement">Average Occupancy Rate Projections Statement</option>
							<option value="None">None</option>
					</select>
				</div>
				<div class="propertyholder">
					<label class="propertylabel" style="width:20%">Document 5</label>
					 <select class="form-control form-control-sm propertytext" style="width:60% !important"
						name="document5" id="document5">
							<option value="" hidden>-- Select--</option>
							<option value="Signed Terms of Engagement">Signed Terms of Engagement</option>
							<option value="Title Deed">Title Deed</option>
							<option value="Property Lease Deed">Property Lease Deed</option>
							<option value="Land Lease Agreement">Land Lease Agreement</option>
							<option value="Land Purchase Document">Land Purchase Document</option>
							<option value="Sale Purchase Agreement">Sale Purchase Agreement</option> 
							<option value="MoU for sale">MoU for sale</option>
							<option value="Initial Contract for Sale">Initial Contract for Sale</option>
							<option value="Affection or Site Plan">Affection or Site Plan</option>
							<option value="Floor Plans">Floor Plans</option>
							<option value="Building Permission Certificate">Building Permission Certificate</option>
							<option value="Building Completion Certificate">Building Completion Certificate</option>
							<option value="Contracting Agreement (including BOQ)">Contracting Agreement (including BOQ)</option>
							<option value="Renovation Agreement (including BOQ)">Renovation Agreement (including BOQ)</option>
							<option value="Civil Defence Certificate">Civil Defence Certificate</option>
							<option value="Tenancy Contracts">Tenancy Contracts</option>
							<option value="Rent List Spreadsheet">Rent List Spreadsheet</option>
							<option value="Utilities Connection Certificate">Utilities Connection Certificate</option>
							<option value="Property Management/Service Contract">Property Management/Service Contract</option>
							<option value="Financing Agreement">Financing Agreement</option>
							<option value="HVAC Maintenance Contract">HVAC Maintenance Contract</option>
							<option value="MEP Maintenance Contract">MEP Maintenance Contract</option>
							<option value="Civil Maintenance Contract">Civil Maintenance Contract</option>
							<option value="Security Contract">Security Contract</option>
							<option value="Cleaning Contract">Cleaning Contract</option>
							<option value="Pest Control Agreement">Pest Control Agreement</option>
							<option value="Insurance Policy">Insurance Policy</option>
							<option value="Financial Performance Statements">Financial Performance Statements</option>
							<option value="Financial Projections Statements">Financial Projections Statements</option>
							<option value="Average Daily Rate Performance Statement">Average Daily Rate Performance Statement</option>
							<option value="Average Daily Rate Projections Statement">Average Daily Rate Projections Statement</option>
							<option value="Average Occupancy Rate Performance Statement">Average Occupancy Rate Performance Statement</option>
							<option value="Average Occupancy Rate Projections Statement">Average Occupancy Rate Projections Statement</option>
							<option value="None">None</option>
					</select>
				</div>
				<div class="propertyholder">
					<label class="propertylabel" style="width:20%">Document 6</label>
					 <select class="form-control form-control-sm propertytext" style="width:60% !important"
						name="document6" id="document6">
							<option value="" hidden>-- Select--</option>
							<option value="Signed Terms of Engagement">Signed Terms of Engagement</option>
							<option value="Title Deed">Title Deed</option>
							<option value="Property Lease Deed">Property Lease Deed</option>
							<option value="Land Lease Agreement">Land Lease Agreement</option>
							<option value="Land Purchase Document">Land Purchase Document</option>
							<option value="Sale Purchase Agreement">Sale Purchase Agreement</option> 
							<option value="MoU for sale">MoU for sale</option>
							<option value="Initial Contract for Sale">Initial Contract for Sale</option>
							<option value="Affection or Site Plan">Affection or Site Plan</option>
							<option value="Floor Plans">Floor Plans</option>
							<option value="Building Permission Certificate">Building Permission Certificate</option>
							<option value="Building Completion Certificate">Building Completion Certificate</option>
							<option value="Contracting Agreement (including BOQ)">Contracting Agreement (including BOQ)</option>
							<option value="Renovation Agreement (including BOQ)">Renovation Agreement (including BOQ)</option>
							<option value="Civil Defence Certificate">Civil Defence Certificate</option>
							<option value="Tenancy Contracts">Tenancy Contracts</option>
							<option value="Rent List Spreadsheet">Rent List Spreadsheet</option>
							<option value="Utilities Connection Certificate">Utilities Connection Certificate</option>
							<option value="Property Management/Service Contract">Property Management/Service Contract</option>
							<option value="Financing Agreement">Financing Agreement</option>
							<option value="HVAC Maintenance Contract">HVAC Maintenance Contract</option>
							<option value="MEP Maintenance Contract">MEP Maintenance Contract</option>
							<option value="Civil Maintenance Contract">Civil Maintenance Contract</option>
							<option value="Security Contract">Security Contract</option>
							<option value="Cleaning Contract">Cleaning Contract</option>
							<option value="Pest Control Agreement">Pest Control Agreement</option>
							<option value="Insurance Policy">Insurance Policy</option>
							<option value="Financial Performance Statements">Financial Performance Statements</option>
							<option value="Financial Projections Statements">Financial Projections Statements</option>
							<option value="Average Daily Rate Performance Statement">Average Daily Rate Performance Statement</option>
							<option value="Average Daily Rate Projections Statement">Average Daily Rate Projections Statement</option>
							<option value="Average Occupancy Rate Performance Statement">Average Occupancy Rate Performance Statement</option>
							<option value="Average Occupancy Rate Projections Statement">Average Occupancy Rate Projections Statement</option>
							<option value="None">None</option>
					</select>
				</div>
				<div class="propertyholder">
					<label class="propertylabel" style="width:20%">Document 7</label>
					 <select class="form-control form-control-sm propertytext" style="width:60% !important"
						name="document7" id="document7">
							<option value="" hidden>-- Select--</option>
							<option value="Signed Terms of Engagement">Signed Terms of Engagement</option>
							<option value="Title Deed">Title Deed</option>
							<option value="Property Lease Deed">Property Lease Deed</option>
							<option value="Land Lease Agreement">Land Lease Agreement</option>
							<option value="Land Purchase Document">Land Purchase Document</option>
							<option value="Sale Purchase Agreement">Sale Purchase Agreement</option> 
							<option value="MoU for sale">MoU for sale</option>
							<option value="Initial Contract for Sale">Initial Contract for Sale</option>
							<option value="Affection or Site Plan">Affection or Site Plan</option>
							<option value="Floor Plans">Floor Plans</option>
							<option value="Building Permission Certificate">Building Permission Certificate</option>
							<option value="Building Completion Certificate">Building Completion Certificate</option>
							<option value="Contracting Agreement (including BOQ)">Contracting Agreement (including BOQ)</option>
							<option value="Renovation Agreement (including BOQ)">Renovation Agreement (including BOQ)</option>
							<option value="Civil Defence Certificate">Civil Defence Certificate</option>
							<option value="Tenancy Contracts">Tenancy Contracts</option>
							<option value="Rent List Spreadsheet">Rent List Spreadsheet</option>
							<option value="Utilities Connection Certificate">Utilities Connection Certificate</option>
							<option value="Property Management/Service Contract">Property Management/Service Contract</option>
							<option value="Financing Agreement">Financing Agreement</option>
							<option value="HVAC Maintenance Contract">HVAC Maintenance Contract</option>
							<option value="MEP Maintenance Contract">MEP Maintenance Contract</option>
							<option value="Civil Maintenance Contract">Civil Maintenance Contract</option>
							<option value="Security Contract">Security Contract</option>
							<option value="Cleaning Contract">Cleaning Contract</option>
							<option value="Pest Control Agreement">Pest Control Agreement</option>
							<option value="Insurance Policy">Insurance Policy</option>
							<option value="Financial Performance Statements">Financial Performance Statements</option>
							<option value="Financial Projections Statements">Financial Projections Statements</option>
							<option value="Average Daily Rate Performance Statement">Average Daily Rate Performance Statement</option>
							<option value="Average Daily Rate Projections Statement">Average Daily Rate Projections Statement</option>
							<option value="Average Occupancy Rate Performance Statement">Average Occupancy Rate Performance Statement</option>
							<option value="Average Occupancy Rate Projections Statement">Average Occupancy Rate Projections Statement</option>
							<option value="None">None</option>
					</select>
				</div>
				<div class="propertyholder">
					<label class="propertylabel" style="width:20%">Document 8</label>
					 <select class="form-control form-control-sm propertytext" style="width:60% !important"
						name="document8" id="document8">
							<option value="" hidden>-- Select--</option>
							<option value="Signed Terms of Engagement">Signed Terms of Engagement</option>
							<option value="Title Deed">Title Deed</option>
							<option value="Property Lease Deed">Property Lease Deed</option>
							<option value="Land Lease Agreement">Land Lease Agreement</option>
							<option value="Land Purchase Document">Land Purchase Document</option>
							<option value="Sale Purchase Agreement">Sale Purchase Agreement</option> 
							<option value="MoU for sale">MoU for sale</option>
							<option value="Initial Contract for Sale">Initial Contract for Sale</option>
							<option value="Affection or Site Plan">Affection or Site Plan</option>
							<option value="Floor Plans">Floor Plans</option>
							<option value="Building Permission Certificate">Building Permission Certificate</option>
							<option value="Building Completion Certificate">Building Completion Certificate</option>
							<option value="Contracting Agreement (including BOQ)">Contracting Agreement (including BOQ)</option>
							<option value="Renovation Agreement (including BOQ)">Renovation Agreement (including BOQ)</option>
							<option value="Civil Defence Certificate">Civil Defence Certificate</option>
							<option value="Tenancy Contracts">Tenancy Contracts</option>
							<option value="Rent List Spreadsheet">Rent List Spreadsheet</option>
							<option value="Utilities Connection Certificate">Utilities Connection Certificate</option>
							<option value="Property Management/Service Contract">Property Management/Service Contract</option>
							<option value="Financing Agreement">Financing Agreement</option>
							<option value="HVAC Maintenance Contract">HVAC Maintenance Contract</option>
							<option value="MEP Maintenance Contract">MEP Maintenance Contract</option>
							<option value="Civil Maintenance Contract">Civil Maintenance Contract</option>
							<option value="Security Contract">Security Contract</option>
							<option value="Cleaning Contract">Cleaning Contract</option>
							<option value="Pest Control Agreement">Pest Control Agreement</option>
							<option value="Insurance Policy">Insurance Policy</option>
							<option value="Financial Performance Statements">Financial Performance Statements</option>
							<option value="Financial Projections Statements">Financial Projections Statements</option>
							<option value="Average Daily Rate Performance Statement">Average Daily Rate Performance Statement</option>
							<option value="Average Daily Rate Projections Statement">Average Daily Rate Projections Statement</option>
							<option value="Average Occupancy Rate Performance Statement">Average Occupancy Rate Performance Statement</option>
							<option value="Average Occupancy Rate Projections Statement">Average Occupancy Rate Projections Statement</option>
							<option value="None">None</option>
					</select>
				</div>
				<div class="propertyholder">
					<label class="propertylabel" style="width:20%">Document 9</label>
					 <select class="form-control form-control-sm propertytext" style="width:60% !important"
						name="document9" id="document9">
							<option value="" hidden>-- Select--</option>
							<option value="Signed Terms of Engagement">Signed Terms of Engagement</option>
							<option value="Title Deed">Title Deed</option>
							<option value="Property Lease Deed">Property Lease Deed</option>
							<option value="Land Lease Agreement">Land Lease Agreement</option>
							<option value="Land Purchase Document">Land Purchase Document</option>
							<option value="Sale Purchase Agreement">Sale Purchase Agreement</option> 
							<option value="MoU for sale">MoU for sale</option>
							<option value="Initial Contract for Sale">Initial Contract for Sale</option>
							<option value="Affection or Site Plan">Affection or Site Plan</option>
							<option value="Floor Plans">Floor Plans</option>
							<option value="Building Permission Certificate">Building Permission Certificate</option>
							<option value="Building Completion Certificate">Building Completion Certificate</option>
							<option value="Contracting Agreement (including BOQ)">Contracting Agreement (including BOQ)</option>
							<option value="Renovation Agreement (including BOQ)">Renovation Agreement (including BOQ)</option>
							<option value="Civil Defence Certificate">Civil Defence Certificate</option>
							<option value="Tenancy Contracts">Tenancy Contracts</option>
							<option value="Rent List Spreadsheet">Rent List Spreadsheet</option>
							<option value="Utilities Connection Certificate">Utilities Connection Certificate</option>
							<option value="Property Management/Service Contract">Property Management/Service Contract</option>
							<option value="Financing Agreement">Financing Agreement</option>
							<option value="HVAC Maintenance Contract">HVAC Maintenance Contract</option>
							<option value="MEP Maintenance Contract">MEP Maintenance Contract</option>
							<option value="Civil Maintenance Contract">Civil Maintenance Contract</option>
							<option value="Security Contract">Security Contract</option>
							<option value="Cleaning Contract">Cleaning Contract</option>
							<option value="Pest Control Agreement">Pest Control Agreement</option>
							<option value="Insurance Policy">Insurance Policy</option>
							<option value="Financial Performance Statements">Financial Performance Statements</option>
							<option value="Financial Projections Statements">Financial Projections Statements</option>
							<option value="Average Daily Rate Performance Statement">Average Daily Rate Performance Statement</option>
							<option value="Average Daily Rate Projections Statement">Average Daily Rate Projections Statement</option>
							<option value="Average Occupancy Rate Performance Statement">Average Occupancy Rate Performance Statement</option>
							<option value="Average Occupancy Rate Projections Statement">Average Occupancy Rate Projections Statement</option>
							<option value="None">None</option>
					</select>
				</div>
				<div class="propertyholder">
					<label class="propertylabel" style="width:20%">Document 10</label>
					 <select class="form-control form-control-sm propertytext" style="width:60% !important"
						name="document10" id="document10">
							<option value="" hidden>-- Select--</option>
							<option value="Signed Terms of Engagement">Signed Terms of Engagement</option>
							<option value="Title Deed">Title Deed</option>
							<option value="Property Lease Deed">Property Lease Deed</option>
							<option value="Land Lease Agreement">Land Lease Agreement</option>
							<option value="Land Purchase Document">Land Purchase Document</option>
							<option value="Sale Purchase Agreement">Sale Purchase Agreement</option> 
							<option value="MoU for sale">MoU for sale</option>
							<option value="Initial Contract for Sale">Initial Contract for Sale</option>
							<option value="Affection or Site Plan">Affection or Site Plan</option>
							<option value="Floor Plans">Floor Plans</option>
							<option value="Building Permission Certificate">Building Permission Certificate</option>
							<option value="Building Completion Certificate">Building Completion Certificate</option>
							<option value="Contracting Agreement (including BOQ)">Contracting Agreement (including BOQ)</option>
							<option value="Renovation Agreement (including BOQ)">Renovation Agreement (including BOQ)</option>
							<option value="Civil Defence Certificate">Civil Defence Certificate</option>
							<option value="Tenancy Contracts">Tenancy Contracts</option>
							<option value="Rent List Spreadsheet">Rent List Spreadsheet</option>
							<option value="Utilities Connection Certificate">Utilities Connection Certificate</option>
							<option value="Property Management/Service Contract">Property Management/Service Contract</option>
							<option value="Financing Agreement">Financing Agreement</option>
							<option value="HVAC Maintenance Contract">HVAC Maintenance Contract</option>
							<option value="MEP Maintenance Contract">MEP Maintenance Contract</option>
							<option value="Civil Maintenance Contract">Civil Maintenance Contract</option>
							<option value="Security Contract">Security Contract</option>
							<option value="Cleaning Contract">Cleaning Contract</option>
							<option value="Pest Control Agreement">Pest Control Agreement</option>
							<option value="Insurance Policy">Insurance Policy</option>
							<option value="Financial Performance Statements">Financial Performance Statements</option>
							<option value="Financial Projections Statements">Financial Projections Statements</option>
							<option value="Average Daily Rate Performance Statement">Average Daily Rate Performance Statement</option>
							<option value="Average Daily Rate Projections Statement">Average Daily Rate Projections Statement</option>
							<option value="Average Occupancy Rate Performance Statement">Average Occupancy Rate Performance Statement</option>
							<option value="Average Occupancy Rate Projections Statement">Average Occupancy Rate Projections Statement</option>
							<option value="None">None</option>
					</select>
				</div>
			</div>
			<div class="form-group" style="width: 100%">
					<button type="submit">Save</button>
			</div>
		</form:form>
	</div>
</div>
<%@include file="footer.jsp"%>
<script
	src="resources/assets/bundles/bootstrap-daterangepicker/daterangepicker.js"></script>
<script src="resources/assets/js/property.js"></script>
