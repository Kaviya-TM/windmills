$('.valuationform .sub-header').text('Valuation Form');
$('.inspecting').hide();
$('.scheduling').hide();
$('.submitting').hide();
$('.checkconflict').hide();
var j=$('#row').val();
$('#reference').val("REV-2020-"+j+"");
$('#country').val("United Arab Emirates");
$('#age').val(0);
$('#remlife').val(40);
$('#age').keyup(function(){
	if($('#age').val() != ''){
		var life = 40 - $('#age').val();
		$('#remlife').val(life);
	}
	else{
		$('#remlife').val(40);
	}
});

function stringToDate(_date,_format,_delimiter)
{
            var formatLowerCase=_format.toLowerCase();
            var formatItems=formatLowerCase.split(_delimiter);
            var dateItems=_date.split(_delimiter);
            var monthIndex=formatItems.indexOf("mmm");
            var dayIndex=formatItems.indexOf("dd");
            var yearIndex=formatItems.indexOf("yyyy");
            var month=parseInt(dateItems[monthIndex]);
            month-=1;
            var formatedDate = new Date(dateItems[yearIndex],month,dateItems[dayIndex]);
            return formatedDate;
}
$("#clientname").change(function() {
	console.log("clientName",$(this).val());
	var clientName = $('#clientname').val();
	var dropdown = $('#contactPerson');
	$(dropdown).find("option").remove();
	$.ajax({
		url : 'getValuationInstructingPerson',
		data : {clientName : clientName},
		method : 'POST',
		success : function(response) {	
// 			 dropdown.append($('<option></option>').attr("hidden", "").text("Valuation Instructing Person"));
				$.each(response, function (key, entry) {
				    dropdown.append($('<option></option>').attr('value', entry).text(entry));
				})
			 return;
		},
	});	
});
$("#propertyvalued").change(function() {
	var propertyValued = $('#propertyvalued').val();
	$.ajax({
		url : 'getValuationApproach',
		dataType: "text",
		data : {propertyValued : propertyValued},
		method : 'POST',
		success : function(response) {	
			var obj = $.parseJSON(response);
			var valApproach = obj.valApproach;
			var apprreason = obj.appReasoning;
			 $('#valApproach').val(valApproach);
			 $("#valApproach option[value='+valApproach+']").attr("selected",true);
			$('#apprreason').val(apprreason);
			 $("#apprreason option[value='+apprreason+']").attr("selected",true);
			return;
			},
	});	
});
$("#insdate").change(function() {
	var weekday = new Array(7);
	weekday[0] = "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";
	var date;
	var a = $('#insdate').val();
	var b =  a.substring(3,6);
	if(b=="Jan"){
		date= a.replace(b,"01");
	}
	if(b=="Feb"){
		date= a.replace(b,"02");
	}
	if(b=="Mar"){
		date= a.replace(b,"03");
	}
	if(b=="Apr"){
		date= a.replace(b,"04");
	}
	if(b=="May"){
		date= a.replace(b,"05");
	}
	if(b=="Jun"){
		date= a.replace(b,"06");
	}
	if(b=="Jul"){
		date= a.replace(b,"07");
	}
	if(b=="Aug"){
		date= a.replace(b,"08");
	}
	if(b=="Sep"){
		date= a.replace(b,"09");
	}
	if(b=="Oct"){
		date= a.replace(b,"10");
	}
	if(b=="Nov"){
		date= a.replace(b,"11");
	}
	if(b=="Dec"){
		date= a.replace(b,"12");
	}
	var fdate = stringToDate(date,"dd-mmm-yyyy","-");
	$('#insday').val(weekday[fdate.getDay()]);
});
$("#receive").css("background-image", "linear-gradient(to right, #DF0101 , #DF0101)");
$("#receive").click(function(){
	$('.inspecting').hide();
	$('.submitting').hide();
	$('.receiving').show();
	$('.scheduling').hide();
	$('.checkconflict').hide();
	$("#receive").css("background-image", "linear-gradient(to right, #DF0101 , #DF0101)");
	$("#schedule").css("background-image", "linear-gradient(to right, #000080 , #000080)");
	$("#inspect").css("background-image", "linear-gradient(to right, #000080 , #000080)");
	$("#conflict").css("background-image", "linear-gradient(to right, #000080 , #000080)");
	$("#submit").css("background-image", "linear-gradient(to right, #000080 , #000080)");
});
$("#schedule").click(function(){
	$('.inspecting').hide();
	$('.submitting').hide();
	$('.receiving').hide();
	$('.scheduling').show();
	$('.checkconflict').hide();
	$("#inspect").css("background-image", "linear-gradient(to right, #000080 , #000080)");
	$("#receive").css("background-image", "linear-gradient(to right, #000080 , #000080)");
	$("#schedule").css("background-image", "linear-gradient(to right, #DF0101 , #DF0101)");
	$("#submit").css("background-image", "linear-gradient(to right, #000080 , #000080)");
	$("#conflict").css("background-image", "linear-gradient(to right, #000080 , #000080)");
});
$("#inspect").click(function(){
	$('.inspecting').show();
	$('.submitting').hide();
	$('.receiving').hide();
	$('.scheduling').hide();
	$('.checkconflict').hide();
	$("#inspect").css("background-image", "linear-gradient(to right, #DF0101 , #DF0101)");
	$("#receive").css("background-image", "linear-gradient(to right, #000080 , #000080)");
	$("#schedule").css("background-image", "linear-gradient(to right, #000080 , #000080)");
	$("#submit").css("background-image", "linear-gradient(to right, #000080 , #000080)");
	$("#conflict").css("background-image", "linear-gradient(to right, #000080 , #000080)");
});
function conflictcheck(){
	var name = $('#ownername').val();
	if(name !=''){
		$('#cownername').val(name)
	}
	var cname = $('#cusname').val();
	if(cname !=''){
		$('#ccusname').val(cname)
	}
	var unitno = $('#unitno').val();
	if(unitno !=''){
		$('#cunitno').val(unitno)
	}
	var floorno = $('#floorno').val();
	if(floorno !=''){
		$('#cfloorno').val(floorno)
	}
	var streetno = $('#streetno').val();
	if(streetno !=''){
		$('#cstreetno').val(streetno)
	}
	var plotno = $('#plotno').val();
	if(plotno !=''){
		$('#cplotno').val(plotno)
	}
	var streetname = $('#streetname').val();
	if(streetname !=''){
		$('#cstreetname').val(streetname)
	}
	var community = $('#community').val();
	if(community !=''){
		$('#ccommunity').val(community)
	}
	var subcommunity = $('#subcommunity').val();
	if(community !=''){
		$('#csubcommunity').val(subcommunity)
	}
	var town = $('#town').val();
	if(town !=''){
		$('#ctown').val(town)
	}
	var city = $('#city').val();
	if(city !=''){
		$('#ccity').val(city)
	}
	var country = $('#country').val();
	if(country !=''){
		$('#ccountry').val(country)
	}
}
//$("#conflict").click(function(){
//	$('.inspecting').hide();
//	$('.submitting').hide();
//	$('.receiving').hide();
//	$('.scheduling').hide();
//	$('.checkconflict').show();
//	conflictcheck();
//	$("#conflict").css("background-image", "linear-gradient(to right, #DF0101 , #DF0101)");
//	$("#inspect").css("background-image", "linear-gradient(to right, #000080 , #000080)");
//	$("#receive").css("background-image", "linear-gradient(to right, #000080 , #000080)");
//	$("#schedule").css("background-image", "linear-gradient(to right, #000080 , #000080)");
//	$("#submit").css("background-image", "linear-gradient(to right, #000080 , #000080)");
//});
$("#submit").click(function(){
	$('.inspecting').hide();
	$('.submitting').show();
	$('.receiving').hide();
	$('.scheduling').hide();
	$('.checkconflict').hide();
	$("#submit").css("background-image", "linear-gradient(to right, #DF0101 , #DF0101)");
	$("#receive").css("background-image", "linear-gradient(to right, #000080 , #000080)");
	$("#inspect").css("background-image", "linear-gradient(to right, #000080 , #000080)");
	$("#schedule").css("background-image", "linear-gradient(to right, #000080 , #000080)");
	$("#conflict").css("background-image", "linear-gradient(to right, #000080 , #000080)");
});
$("#receivenxt").click(function(){
	$('.inspecting').hide();
	$('.submitting').hide();
	$('.receiving').hide();
	$('.scheduling').show();
	$('.checkconflict').hide();
	conflictcheck();
	$("#inspect").css("background-image", "linear-gradient(to right, #000080 , #000080)");
	$("#receive").css("background-image", "linear-gradient(to right, #000080 , #000080)");
	$("#schedule").css("background-image", "linear-gradient(to right, #DF0101 , #DF0101)");
	$("#submit").css("background-image", "linear-gradient(to right, #000080 , #000080)");
	$("#conflict").css("background-image", "linear-gradient(to right, #DF0101 , #DF0101)");
});
$("#schedulenxt").click(function(){
	$('.inspecting').show();
	$('.submitting').hide();
	$('.receiving').hide();
	$('.scheduling').hide();
	$("#submit").css("background-image", "linear-gradient(to right, #000080 , #000080)");
	$("#receive").css("background-image", "linear-gradient(to right, #000080 , #000080)");
	$("#inspect").css("background-image", "linear-gradient(to right, #DF0101 , #DF0101)");
	$("#schedule").css("background-image", "linear-gradient(to right, #000080 , #000080)");
	$("#conflict").css("background-image", "linear-gradient(to right, #000080 , #000080)");
});
$("#scheduleprv").click(function(){
	$('.inspecting').hide();
	$('.submitting').hide();
	$('.receiving').show();
	$('.scheduling').hide();
	$("#receive").css("background-image", "linear-gradient(to right, #DF0101 , #DF0101)");
	$("#inspect").css("background-image", "linear-gradient(to right, #000080 , #000080)");
	$("#submit").css("background-image", "linear-gradient(to right, #000080 , #000080)");
	$("#schedule").css("background-image", "linear-gradient(to right, #000080 , #000080)");
	$("#conflict").css("background-image", "linear-gradient(to right, #000080 , #000080)");
});
$("#inspectnxt").click(function(){
	$('.inspecting').hide();
	$('.submitting').show();
	$('.receiving').hide();
	$('.scheduling').hide();
	$("#submit").css("background-image", "linear-gradient(to right, #DF0101 , #DF0101)");
	$("#receive").css("background-image", "linear-gradient(to right, #000080 , #000080)");
	$("#inspect").css("background-image", "linear-gradient(to right, #000080 , #000080)");
	$("#schedule").css("background-image", "linear-gradient(to right, #000080 , #000080)");
	$("#conflict").css("background-image", "linear-gradient(to right, #000080 , #000080)");
});
$("#inspectprv").click(function(){
	$('.inspecting').hide();
	$('.submitting').hide();
	$('.receiving').hide();
	$('.scheduling').show();
	$("#receive").css("background-image", "linear-gradient(to right, #000080 , #000080)");
	$("#inspect").css("background-image", "linear-gradient(to right, #000080 , #000080)");
	$("#submit").css("background-image", "linear-gradient(to right, #000080 , #000080)");
	$("#conflict").css("background-image", "linear-gradient(to right, #DF0101 , #DF0101)");
	$("#schedule").css("background-image", "linear-gradient(to right, #DF0101 , #DF0101)");
});
$("#submitprv").click(function(){
	$('.inspecting').show();
	$('.submitting').hide();
	$('.receiving').hide();
	$('.scheduling').hide();
	$("#receive").css("background-image", "linear-gradient(to right, #000080 , #000080)");
	$("#inspect").css("background-image", "linear-gradient(to right, #DF0101 , #DF0101)");
	$("#submit").css("background-image", "linear-gradient(to right, #000080 , #000080)");
	$("#schedule").css("background-image", "linear-gradient(to right, #000080 , #000080)");
	$("#conflict").css("background-image", "linear-gradient(to right, #000080 , #000080)");
});