$('.valuationform .sub-header').text('Valuation Form');
$('.inspecting1').hide();
$('.inspecting2').hide();
$('.scheduling').hide();
$('.submitting').hide();
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
$(document).on("keypress", ":input:not(:submit)", function(event) {
	if (event.key == "Enter") {
        event.preventDefault();
    }
});
//if ("geolocation" in navigator){ 
//	navigator.geolocation.getCurrentPosition(function(position){ 
//		var latitude=  position.coords.latitude; 
//		latitude = latitude.toString();
//		var la = latitude.substring(0,9);
//		var longitude = position.coords.longitude;
//		longitude = longitude.toString();
//		var lo = longitude.substring(0,9);
//		var locationCoord = la +","+ lo;
//		$('#locationCoord').val(locationCoord);
//		console.log(locationCoord);
//	});
//}
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
	var clientName = $('#clientname').val();
	var dropdown = $('#contactPerson');
	$(dropdown).find("option").remove();
	$.ajax({
		url : 'getValuationInstructingPerson',
		data : {clientName : clientName},
		method : 'POST',
		success : function(response) {	
				$.each(response, function (key, entry) {
				    dropdown.append($('<option></option>').attr('value', entry).text(entry));
				})
			 return;
		},
	});	
});
var latitude = geoplugin_latitude();
var longitude = geoplugin_longitude()
$('#locationCoord').val(latitude+","+longitude);
console.log(latitude+","+longitude);

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
$("#community").change(function() {
	var community = $('#community').val();
	$.ajax({
		url : 'getCity',
		data : {community : community},
		method : 'POST',
		success : function(response) {	
			$('#city').val(response);
			 $("#city option[value='+response+']").attr("selected",true);
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
	$('.inspecting1').hide();
	$('.submitting').hide();
	$('.receiving').show();
	$('.scheduling').hide();
	$('.inspecting2').hide();
	$("#inspect2").css("background", "#000080");
	$("#receive").css("background", "#DF0101");
	$("#schedule").css("background", "#000080");
	$("#inspect1").css("background", "#000080");
	$("#submit").css("background", "#000080");
	$("#conflict").css("background", "#000080");
});
$("#schedule").click(function(){
	$('.inspecting1').hide();
	$('.submitting').hide();
	$('.receiving').hide();
	$('.scheduling').show();
	$('.inspecting2').hide();
	$("#inspect2").css("background", "#000080");
	$("#schedule").css("background", "#DF0101");
	$("#receive").css("background", "#000080");
	$("#inspect1").css("background", "#000080");
	$("#submit").css("background", "#000080");
	$("#conflict").css("background", "#000080");
});
$("#inspect1").click(function(){
	$('.inspecting1').show();
	$('.submitting').hide();
	$('.receiving').hide();
	$('.scheduling').hide();
	$('.inspecting2').hide();
	$("#inspect2").css("background", "#000080");
	$("#inspect1").css("background", "#DF0101");
	$("#receive").css("background", "#000080");
	$("#schedule").css("background", "#000080");
	$("#submit").css("background", "#000080");
	$("#conflict").css("background", "#000080");
});
$("#inspect2").click(function(){
	$('.inspecting1').hide();
	$('.submitting').hide();
	$('.receiving').hide();
	$('.scheduling').hide();
	$('.inspecting2').show();
	$("#inspect1").css("background", "#000080");
	$("#inspect2").css("background", "#DF0101");
	$("#receive").css("background", "#000080");
	$("#schedule").css("background", "#000080");
	$("#submit").css("background", "#000080");
	$("#conflict").css("background", "#000080");
});
$("#submit").click(function(){
	$('.inspecting1').hide();
	$('.submitting').show();
	$('.receiving').hide();
	$('.scheduling').hide();
	$('.inspecting2').hide();
	$("#inspect1").css("background", "#000080");
	$("#submit").css("background", "#DF0101");
	$("#receive").css("background", "#000080");
	$("#schedule").css("background", "#000080");
	$("#inspect2").css("background", "#000080");
	$("#conflict").css("background", "#000080");
});

$("#receivenxt").click(function(){
	$('.inspecting1').hide();
	$('.submitting').hide();
	$('.receiving').hide();
	$('.scheduling').show();
	$('.inspecting2').hide();
	$("#inspect1").css("background", "#000080");
	$("#schedule").css("background", "#DF0101");
	$("#receive").css("background", "#000080");
	$("#submit").css("background", "#000080");
	$("#inspect2").css("background", "#000080");
	$("#conflict").css("background", "#000080");
});
$("#schedulenxt").click(function(){
	$('.inspecting1').show();
	$('.submitting').hide();
	$('.receiving').hide();
	$('.scheduling').hide();
	$('.inspecting2').hide();
	$("#schedule").css("background", "#000080");
	$("#inspect1").css("background", "#DF0101");
	$("#receive").css("background", "#000080");
	$("#submit").css("background", "#000080");
	$("#inspect2").css("background", "#000080");
	$("#conflict").css("background", "#000080");
});
$("#scheduleprv").click(function(){
	$('.inspecting1').hide();
	$('.submitting').hide();
	$('.receiving').show();
	$('.scheduling').hide();
	$('.inspecting2').hide();
	$("#schedule").css("background", "#000080");
	$("#receive").css("background", "#DF0101");
	$("#inspect1").css("background", "#000080");
	$("#submit").css("background", "#000080");
	$("#inspect2").css("background", "#000080");
	$("#conflict").css("background", "#000080");
});
$("#inspect1nxt").click(function(){
	$('.inspecting1').hide();
	$('.inspecting2').show();
	$('.submitting').hide();
	$('.receiving').hide();
	$('.scheduling').hide();
	$("#schedule").css("background", "#000080");
	$("#inspect2").css("background", "#DF0101");
	$("#inspect1").css("background", "#000080");
	$("#submit").css("background", "#000080");
	$("#receive").css("background", "#000080");
	$("#conflict").css("background", "#000080");
});
$("#inspect1prv").click(function(){
	$('.inspecting1').hide();
	$('.inspecting2').hide();
	$('.submitting').hide();
	$('.receiving').hide();
	$('.scheduling').show();
	$("#inspect2").css("background", "#000080");
	$("#schedule").css("background", "#DF0101");
	$("#inspect1").css("background", "#000080");
	$("#submit").css("background", "#000080");
	$("#receive").css("background", "#000080");
	$("#conflict").css("background", "#000080");
});
$("#inspect2nxt").click(function(){
	$('.inspecting1').hide();
	$('.inspecting2').hide();
	$('.submitting').show();
	$('.receiving').hide();
	$('.scheduling').hide();
	$("#schedule").css("background", "#000080");
	$("#submit").css("background", "#DF0101");
	$("#inspect1").css("background", "#000080");
	$("#inspect2").css("background", "#000080");
	$("#receive").css("background", "#000080");
	$("#conflict").css("background", "#000080");
});
$("#inspect2prv").click(function(){
	$('.inspecting1').show();
	$('.inspecting2').hide();
	$('.submitting').hide();
	$('.receiving').hide();
	$('.scheduling').hide();
	$("#inspect2").css("background", "#000080");
	$("#inspect1").css("background", "#DF0101");
	$("#schedule").css("background", "#000080");
	$("#submit").css("background", "#000080");
	$("#receive").css("background", "#000080");
	$("#conflict").css("background", "#000080");
});
$("#submitprv").click(function(){
	$('.inspecting2').show();
	$('.inspecting1').hide();
	$('.submitting').hide();
	$('.receiving').hide();
	$('.scheduling').hide();
	$("#inspect1").css("background", "#000080");
	$("#inspect2").css("background", "#DF0101");
	$("#schedule").css("background", "#000080");
	$("#submit").css("background", "#000080");
	$("#receive").css("background", "#000080");
	$("#conflict").css("background", "#000080");
});