<div class="form-group scheduling">
			<div class="slighthalf" style="width:50%;float:left">
				<div class="valuationholder">
					<label class="ilholder" style="width:30%">Inspection Type<b style="color:red"> *</b></label> <select
						class="form-control form-control-sm itholder" style="width: 60% !important;"
						name="valuationReport.insType" id="insType">
						<option value="Physical Inspection" selected>Physical
							Inspection</option>
						<option value="Desktop">Desktop</option>
						<option value="Drive By">Drive By</option>
					</select>
				</div>
				<div class="valuationholder">
					<label class="ilholder" style="width:30%">Valuation Date<b style="color:red"> *</b></label>
					<div class="input-group itholder" style="width: 60% !important;">
						<div class="input-group-prepend">
							<div class="input-group-text">
								<i class="fas fa-calendar"></i>
							</div>
						</div>
						<input type="text" class="form-control form-control-sm datepicker"
							name="valuationReport.valDate" id="valDate" placeholder=""
							autocomplete="on">
					</div>
				</div>
				<div class="valuationholder insDate">
					<label class="ilholder" style="width:30%">Inspection Date<b style="color:red"> *</b></label>
					<div class="input-group itholder" style="width: 60% !important;">
						<div class="input-group-prepend">
							<div class="input-group-text">
								<i class="fas fa-calendar"></i>
							</div>
						</div>
						<input type="text" class="form-control form-control-sm datepicker"
							name="valuationReport.insDate" id="insdate" placeholder=""
							autocomplete="on">
					</div>
				</div>
				<div class="valuationholder insday">
					<label class="ilholder" style="width:30%">Inspection Day<b style="color:red"> *</b></label>
					<div class="input-group itholder" style="width: 60% !important;">
						<div class="input-group-prepend">
							<div class="input-group-text">
								<i class="fas fa-fire"></i>
							</div>
						</div>
						<input type="text" class="form-control form-control-sm "
							name="valuationReport.insDay" id="insday" placeholder="" readonly
							autocomplete="on">
					</div>
				</div>
				<div class="valuationholder instime">
					<label class="ilholder" style="width:30%">Inspection Time<b style="color:red"> *</b></label>
					<div class="input-group itholder" style="width: 60% !important;">
						<div class="input-group-prepend">
							<div class="input-group-text">
								<i class="fas fa-clock"></i>
							</div>
						</div>
						<input type="text" class="form-control form-control-sm timepicker"
							name="valuationReport.insTime" id="instime"
							placeholder="Inspection Time" autocomplete="on">
					</div>
				</div>
				<div class="valuationholder">
					<label class="ilholder" style="width:30%">Client's Deadline<b style="color:red"> *</b></label>
					<div class="input-group itholder" style="width: 60% !important;">
						<div class="input-group-prepend">
							<div class="input-group-text">
								<i class="fas fa-calendar"></i>
							</div>
						</div>
						<input type="text" class="form-control form-control-sm datepicker"
							name="valuationReport.clientDeadline" id="clientdeadline" placeholder=""
							autocomplete="on">
					</div>
				</div>
				<div class="valuationholder startkms">
					<label class="ilholder" style="width:30%">Fee(AED)<b style="color:red"> *</b></label> <input
						type="text" class="form-control form-control-sm itholder" style="width: 60% !important;"
						name="" id="fee"
						placeholder="Fee(AED)" autocomplete="on">
				</div>
				<div class="valuationholder insOfficer">
					<label class="ilholder" style="width:30%">Inspection Officer<b style="color:red"> *</b></label> <select
						class="form-control form-control-sm itholder" style="width: 60% !important;"
						name="valuationReport.insOfficer" id="insOfficer">
						<c:forEach items="${serviceOfficerlist}" var="item">
							<option value="${item.name}">${item.name}</option>
						</c:forEach>
						<c:forEach items="${dfservicer}" var="item1">
							<option selected="true" value="${item1.name}">${item1.name}</option>
						</c:forEach>
					</select>
				</div>
				<div class="valuationholder mode">
					<label class="ilholder" style="width:30%">Mode Of Transport<b style="color:red"> *</b></label> <select
						class="form-control form-control-sm itholder" style="width: 60% !important;"
						name="valuationReport.modeOfTransport" id="mode">
						<option value="Company Car">Company Car</option>
						<option value="Personal Car">Personal Car</option>
						<option value="External Transport">External Transport</option>
					</select>
				</div>
				<div class="valuationholder startkms">
					<label class="ilholder" style="width:30%"> Start Kilometres<b style="color:red"> *</b></label> <input
						type="text" class="form-control form-control-sm itholder" style="width: 60% !important;"
						name="valuationReport.startkms" id="startkms"
						placeholder="Start Kilometres" autocomplete="on">
				</div>
				<div class="valuationholder endkms">
					<label class="ilholder" style="width:30%"> End Kilometres<b style="color:red"> *</b></label> <input type="text"
						class="form-control form-control-sm itholder" style="width: 60% !important;"
						name="valuationReport.endkms" id="endkms"
						placeholder="End Kilometres" autocomplete="on">
				</div>
<!-- 				<div class="valuationholder adjustTop"> -->
<!-- 					<div class="savebtn" id="scheduleprv">Previous</div> -->
<!-- 					<div class="savebtn" id="schedulenxt">Next</div> -->
<!-- 				</div> -->
			</div>
			<div class="srighthalf" style="width:50%;float:left">
				<div class="valuationholder startkms">
					<label class="ilholder" style="width:30%"> Contact Person Name<b style="color:red"> *</b></label> <input
						type="text" class="form-control form-control-sm itholder" style="width: 60% !important;"
						name="" id="contactPersonName"
						placeholder="Contact Person Name" autocomplete="on">
				</div>
				<div class="valuationholder startkms">
					<label class="ilholder" style="width:30%"> Contact Email</label> <input
						type="text" class="form-control form-control-sm itholder" style="width: 60% !important;"
						name="" id="contactEmail"
						placeholder="Contact Email" autocomplete="on">
				</div>
				<div class="valuationholder startkms">
					<label class="ilholder" style="width:30%"> Contact Phone No<b style="color:red"> *</b></label> <input
						type="text" class="form-control form-control-sm itholder" style="width: 60% !important;"
						name="" id="contactPhoneNo"
						placeholder="Contact Phone No" autocomplete="on">
				</div>
			
			</div>
			
</div>