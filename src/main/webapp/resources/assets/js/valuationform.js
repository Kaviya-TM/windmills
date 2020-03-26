
var j=$('#row').val();
$('#reference').val("REV-2020-"+j+"");
$('#country').val("United Arab Emirates");
$('#age').val(0);
$('#remlife').val(40);
$('.error').hide();
$('#age').keyup(function(){
	if($('#age').val() != ''){
		var life = 40 - $('#age').val();
		$('#remlife').val(life);
	}
	else{
		$('#remlife').val(40);
	}
});
$("#buildingname").change(function() {
	var buildingName = $('#buildingname').val();
	$.ajax({
		url : 'getEverything',
		dataType: "text",
		data : {buildingName : buildingName},
		method : 'POST',
		success : function(response) {	
			var obj = $.parseJSON(response);
			var community = obj.city;
			var subcommunity = obj.subcommunity;
			var city = obj.community;
			console.log("communitty",community);
			 $('#city').val(community);
			 $('#community').val(city);
			 $('#subcommunity').val(subcommunity);
			return;
			},
	});	
});

$("#titledeed").change(function() {	
	  var i = $(this).prev('label').clone();	
	  var file = $("#titledeed")[0].files[0].name;	
	  var filename = file.split(".");
	  $(this).prev('label').text(file);	
});
$("#floorplan").change(function() {	
	  var i = $(this).prev('label').clone();	
	  var file = $("#floorplan")[0].files[0].name;	
	  var filename = file.split(".");
	  $(this).prev('label').text(file);	
});
$("#affectionplan").change(function() {	
	  var i = $(this).prev('label').clone();	
	  var file = $("#affectionplan")[0].files[0].name;	
	  var filename = file.split(".");
	  $(this).prev('label').text(file);	
});
$("#landleaseag").change(function() {	
	  var i = $(this).prev('label').clone();	
	  var file = $("#landleaseag")[0].files[0].name;	
	  var filename = file.split(".");
	  $(this).prev('label').text(file);	landleaseag
});
$("#spa").change(function() {	
	  var i = $(this).prev('label').clone();	
	  var file = $("#spa")[0].files[0].name;	
	  var filename = file.split(".");
	  $(this).prev('label').text(file);	landleaseag
});
function bedroom(){
	var i=0;j=0;k=0;m=0;n=0;o=0;
	var a=0;b=0;c=0;d=0;e=0;f=0;
	var ground = null;
	var first = null;
	var second = null;
	var upgrades = null;
	$( ".bed select:visible" ).each(function( index ) {
	  if($(this).val() === "Ground"){
	       i++;
	  }
	if($(this).val() === "First"){
	       j++;
	  }
	if($(this).val() === "Second"){
	       k++;
	  }
	if($(this).val() === "Upgraded"){    
	   if($(this).prev().val() === "Ground"){
	       m++;
	   }
	   if($(this).prev().val() === "First"){
	       n++;
	   }
	     if($(this).prev().val() === "Second"){
	       o++;
	   }
	  }
	});
	$( ".bath select:visible" ).each(function( index ) {
		  if($(this).val() === "Ground"){
		       a++;
		  }
		if($(this).val() === "First"){
		       b++;
		  }
		if($(this).val() === "Second"){
		       c++;
		  }
		if($(this).val() === "Upgraded"){    
		   if($(this).prev().val() === "Ground"){
		       d++;
		   }
		   if($(this).prev().val() === "First"){
		       e++;
		   }
		     if($(this).prev().val() === "Second"){
		       f++;
		   }
		  }
		});
	
	if(i>0){
		ground = i+" Bedrooms";
	}
	if(a >0 && i === 0){
		ground = a+" Bathrooms";
	}
	if(a >0 && i != 0){
		ground = ground+','+a+" Bathrooms";
	}
	if(ground != null && parseInt($('#kitcount').val()) > 0 && $('#kitfloor').val() === "Ground"){
		ground =ground +','+$('#kitcount').val()+" Kitchen";
	}
	else if(parseInt($('#kitcount').val()) > 0 && $('#kitfloor').val() === "Ground" && ground == null){
		ground = $('#kitcount').val()+" Kitchen";
	}
	if(ground != null && parseInt($('#la').val()) > 0 && $('#laf').val() === "Ground"){
		ground =ground +','+$('#la').val()+" Living Area";
	}
	else if(parseInt($('#la').val()) > 0 && $('#laf').val() === "Ground" && ground == null){
		ground = $('#la').val()+" Living Area";
	}
	if(ground != null && parseInt($('#da').val()) > 0 && $('#daf').val() === "Ground"){
		ground =ground +','+$('#da').val()+" Dining Area";
	}
	else if(parseInt($('#da').val()) > 0 && $('#daf').val() === "Ground" && ground == null){
		ground = $('#da').val()+" Dining Area";
	}
	if(ground != null && parseInt($('#ba').val()) > 0 && $('#baf').val() === "Ground"){
		ground =ground +','+$('#ba').val()+" Balcony";
	}
	else if(parseInt($('#ba').val()) > 0 && $('#baf').val() === "Ground" && ground == null){
		ground = $('#ba').val()+" Balcony";
	}
	if(ground === null){
		ground = "Not Applicable";
	}
	if(j>0){
		first = j+" Bedrooms";
	}
	if(b >0 && j === 0){
		first = b+" Bathrooms";
	}
	if(b >0 && j != 0){
		first = first+','+b+" Bathrooms";
	}
	if(first != null && parseInt($('#kitcount').val()) > 0 && $('#kitfloor').val() === "First"){
		first =first +','+$('#kitcount').val()+" Kitchen";
	}
	else if(parseInt($('#kitcount').val()) > 0 && $('#kitfloor').val() === "First" && first == null){
		first = $('#kitcount').val()+" Kitchen";
	}
	if(first != null && parseInt($('#la').val()) > 0 && $('#laf').val() === "First"){
		first =first +','+$('#la').val()+" Living Area";
	}
	else if(parseInt($('#la').val()) > 0 && $('#laf').val() === "First" && first == null){
		first = $('#la').val()+" Living Area";
	}
	if(first != null && parseInt($('#da').val()) > 0 && $('#daf').val() === "First"){
		first =first +','+$('#da').val()+" Dining Area";
	}
	else if(parseInt($('#da').val()) > 0 && $('#daf').val() === "First" && first == null){
		first = $('#da').val()+" Dining Area";
	}
	if(first != null && parseInt($('#ba').val()) > 0 && $('#baf').val() === "First"){
		first =first +','+$('#ba').val()+" Balcony";
	}
	else if(parseInt($('#ba').val()) > 0 && $('#daf').val() === "First" && first == null){
		first = $('#ba').val()+" Balcony";
	}
	if(first === null){
		first = "Not Applicable";
	}
	
	if(k>0){
		second = k+" Bedrooms";
	}
	if(c >0 && k != 0){
		second = second+','+c+" Bathrooms";
	}
	if(c >0 && k === 0){
		second = c+" Bathrooms";
	}
	if(second != null && parseInt($('#kitcount').val()) > 0 && $('#kitfloor').val() === "Second"){
		second =second +','+$('#kitcount').val()+" Kitchen";
	}
	else if(parseInt($('#kitcount').val()) > 0 && $('#kitfloor').val() === "Second" && second == null){
		second = $('#kitcount').val()+" Kitchen";
	}
	if(second != null && parseInt($('#la').val()) > 0 && $('#laf').val() === "Second"){
		second =second +','+$('#la').val()+" Living Area";
	}
	else if(parseInt($('#la').val()) > 0 && $('#laf').val() === "Second" && second == null){
		second = $('#la').val()+" Living Area";
	}
	if(second != null && parseInt($('#da').val()) > 0 && $('#daf').val() === "Second"){
		second =second +','+$('#da').val()+" Dining Area";
	}
	else if(parseInt($('#da').val()) > 0 && $('#daf').val() === "Second" && second == null){
		second = $('#da').val()+" Dining Area";
	}
	if(second != null && parseInt($('#ba').val()) > 0 && $('#baf').val() === "Second"){
		second =second +','+$('#ba').val()+" Balcony";
	}
	else if(parseInt($('#ba').val()) > 0 && $('#baf').val() === "Second" && second == null){
		second = $('#ba').val()+" Balcony";
	}
	if(second === null){
		second = "Not Applicable";
	}
	if(m>0){
		upgrades = m +" Bedrooms in Ground Floor";
	}
	if(n>0 && upgrades != null){
		upgrades =upgrades+','+ n +" Bedrooms in First Floor";
	}
	if(n>0 && upgrades === null){
		upgrades =  n +" Bedrooms in First Floor";
	}
	if(o>0 && upgrades != null){
		upgrades =upgrades+','+ o +" Bedrooms in Second Floor";
	}
	if(o>0 && upgrades === null){
		upgrades = o +" Bedrooms in Second Floor";
	}
	if(d>0 && upgrades != null){
		upgrades =upgrades+','+ d +" Bathrooms in Ground Floor";
	}
	if(d>0 && upgrades === null){
		upgrades = d +" Bathrooms in Ground Floor";
	}
	if(e>0 && upgrades != null){
		upgrades =upgrades+','+ e +" Bathrooms in Second Floor";
	}
	if(e>0 && upgrades === null){
		upgrades = e +" Bathrooms in First Floor";
	}
	if(f>0 && upgrades != null){
		upgrades =upgrades+','+ f +" Bathrooms in Second Floor";
	}
	if(f>0 && upgrades === null){
		upgrades = f +" Bathrooms in First Floor";
	}
	if(upgrades != null && parseInt($('#kitcount').val()) > 0 && $('#kitfloor').val() === "Ground" && $('#kitupg').val() === "Upgraded"){
		upgrades =upgrades +','+$('#kitcount').val()+" Kitchen in Ground Floor";
	}
	else if(parseInt($('#kitcount').val()) > 0 && $('#kitfloor').val() === "Ground" && upgrades == null && $('#kitupg').val() === "Upgraded"){
		upgrades = $('#kitcount').val()+" Kitchen in Ground Floor";
	}
	if(upgrades != null && parseInt($('#kitcount').val()) > 0 && $('#kitfloor').val() === "First" && $('#kitupg').val() === "Upgraded"){
		upgrades =upgrades +','+$('#kitcount').val()+" Kitchen in First Floor";
	}
	else if(parseInt($('#kitcount').val()) > 0 && $('#kitfloor').val() === "First" && $('#kitupg').val() === "Upgraded"  && upgrades == null){
		upgrades = $('#kitcount').val()+" Kitchen in First Floor";
	}
	if(upgrades != null && parseInt($('#kitcount').val()) > 0 && $('#kitfloor').val() === "Second" && $('#kitupg').val() === "Upgraded"){
		upgrades =upgrades +','+$('#kitcount').val()+" Kitchen in Second Floor";
	}
	else if(parseInt($('#kitcount').val()) > 0 && $('#kitfloor').val() === "Second" && $('#kitupg').val() === "Upgraded" && upgrades == null){
		upgrades = $('#kitcount').val()+" Kitchen in Second Floor";
	}


	if(upgrades != null && parseInt($('#la').val()) > 0 && $('#laf').val() === "Ground" && $('#lau').val() === "Upgraded"){
		upgrades =upgrades +','+$('#la').val()+" Living Area in Ground Floor";
	}
	else if(parseInt($('#la').val()) > 0 && $('#laf').val() === "Ground" && upgrades == null && $('#lau').val() === "Upgraded"){
		upgrades = $('#la').val()+" Living Area in Ground Floor";
	}
	if(upgrades != null && parseInt($('#la').val()) > 0 && $('#laf').val() === "First" && $('#lau').val() === "Upgraded"){
		upgrades =upgrades +','+$('#la').val()+" Living Area in First Floor";
	}
	else if(parseInt($('#la').val()) > 0 && $('#laf').val() === "First" && $('#lau').val() === "Upgraded"  && upgrades == null){
		upgrades = $('#la').val()+" Living Area in First Floor";
	}
	if(upgrades != null && parseInt($('#la').val()) > 0 && $('#laf').val() === "Second" && $('#lau').val() === "Upgraded"){
		upgrades =upgrades +','+$('#la').val()+" Living Area in Second Floor";
	}
	else if(parseInt($('#la').val()) > 0 && $('#laf').val() === "Second" && $('#lau').val() === "Upgraded" && upgrades == null){
		upgrades = $('#la').val()+" Living Area in Second Floor";
	}
	
	
	if(upgrades != null && parseInt($('#da').val()) > 0 && $('#daf').val() === "Ground" && $('#dau').val() === "Upgraded"){
		upgrades =upgrades +','+$('#da').val()+" Dining Area in Ground Floor";
	}
	else if(parseInt($('#da').val()) > 0 && $('#daf').val() === "Ground" && upgrades == null && $('#dau').val() === "Upgraded"){
		upgrades = $('#da').val()+" Dining Area in Ground Floor";
	}
	if(upgrades != null && parseInt($('#da').val()) > 0 && $('#daf').val() === "First" && $('#dau').val() === "Upgraded"){
		upgrades =upgrades +','+$('#da').val()+" Dining Area in First Floor";
	}
	else if(parseInt($('#da').val()) > 0 && $('#daf').val() === "First" && $('#dau').val() === "Upgraded"  && upgrades == null){
		upgrades = $('#da').val()+" Dining Area in First Floor";
	}
	if(upgrades != null && parseInt($('#da').val()) > 0 && $('#daf').val() === "Second" && $('#dau').val() === "Upgraded"){
		upgrades =upgrades +','+$('#da').val()+" Dining Area in Second Floor";
	}
	else if(parseInt($('#da').val()) > 0 && $('#daf').val() === "Second" && $('#dau').val() === "Upgraded" && upgrades == null){
		upgrades = $('#da').val()+" Dining Area in Second Floor";
	}
	
	if(upgrades != null && parseInt($('#ba').val()) > 0 && $('#baf').val() === "Ground" && $('#bau').val() === "Upgraded"){
		upgrades =upgrades +','+$('#ba').val()+" Balcony in Ground Floor";
	}
	else if(parseInt($('#ba').val()) > 0 && $('#baf').val() === "Ground" && upgrades == null && $('#bau').val() === "Upgraded"){
		upgrades = $('#ba').val()+" Balcony in Ground Floor";
	}
	if(upgrades != null && parseInt($('#ba').val()) > 0 && $('#baf').val() === "First" && $('#bau').val() === "Upgraded"){
		upgrades =upgrades +','+$('#ba').val()+" Balcony in First Floor";
	}
	else if(parseInt($('#ba').val()) > 0 && $('#baf').val() === "First" && $('#bau').val() === "Upgraded"  && upgrades == null){
		upgrades = $('#ba').val()+" Balcony in First Floor";
	}
	if(upgrades != null && parseInt($('#ba').val()) > 0 && $('#baf').val() === "Second" && $('#bau').val() === "Upgraded"){
		upgrades =upgrades +','+$('#ba').val()+" Balcony in Second Floor";
	}
	else if(parseInt($('#ba').val()) > 0 && $('#baf').val() === "Second" && $('#bau').val() === "Upgraded" && upgrades == null){
		upgrades = $('#ba').val()+" Balconyin Second Floor";
	}
	
	
	if(upgrades === null){
		upgrades = "None"
	}
	$('#groundFloor').val(ground);
	$('#firstFloor').val(first);
	$('#secondFloor').val(second);
	$('#upgrades').val(upgrades);
	console.log("Ground Floor-->",ground);
	console.log("First Floor-->",first);
	console.log("Second Floor-->",second);
	console.log("upgrades-->",upgrades);
}
$("#inspect2nxt").click(function() {
	bedroom();
});
$("#splAssumption").click(function() {
	bedroom();
});
$("#documents").click(function() {
	propertyAddress();
});
$("#inspect1").click(function() {
	propertyAddress();
});
$("#receivenxt").click(function() {
	propertyAddress();
});
	//var date = $('#valinsdate').val();
//var newdate = new Date(date);
//newdate.setDate(newdate.getDate() + 2);
//var nd = new Date(newdate);
//var months=["Jan","Feb","Mar","Apr","May","Jun","Jul",
//"Aug","Sep","Oct","Nov","Dec"];
//var val=nd.getDate()+"-"+months[nd.getMonth()]+"-"+nd.getFullYear()
//$('#valinsdate').val(val);
//console.log(val);
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
$("#inspect2").click(function() {
	bulidingFac();
});
$("#inspect1nxt").click(function() {
	bulidingFac();
});
$('#valuationform').submit(function(e) {
	 $(':input', this).each(function() {
		 var value = $(this).val();
		 if(value == "" ){
			 $(this).attr("disabled","true");
		 }
	 });
	if($('#titledeed').val() === ''){
		$('#tdl').attr("disabled","true");
	}
	if($('#floorplan').val() === ''){
		$('#fpl').attr("disabled","true");
	}
	if($('#affectionplan').val() === ''){
		$('#apl').attr("disabled","true");
	}
	if($('#landleaseag').val() === ''){
		$('#lll').attr("disabled","true");
	}
	if($('#spa').val() === ''){
		$('#sl').attr("disabled","true");
	}
});
function bulidingFac(){
	var pool = $("#pool").val();
	var gym = $("#gym").val();
	var playArea = $("#playarea").val();
	var otherFac = $('#otherfac').val();
	var bulComFacilities = null;
	if(pool === "Yes"){
		bulComFacilities = "Pool";
	}
	if(gym === "Yes" && bulComFacilities != null){
		bulComFacilities = bulComFacilities + ",Gym";
	}
	else{
		bulComFacilities = "Gym";
	}
	if(playArea === "Yes" && bulComFacilities != null){
		bulComFacilities = bulComFacilities + ",Play Area";
	}
	else if(playArea === "No" && bulComFacilities != null){
		bulComFacilities = bulComFacilities;
	}
	if(otherFac != '' && bulComFacilities != null){
		bulComFacilities = bulComFacilities +","+ otherFac;
	}
	else{
		bulComFacilities = otherFac;
	}
	$('#bulComFacilities').val(bulComFacilities);
}
function propertyAddress(){
	var unit = $('#unitno').val();
	var streetNo = $('#streetno').val();
	var streetName = $('#streetname').val();
	var buildingNo = $('#buildingno').val();
	var buildingName = $('#buildingname').val();
	var subCommunity = $('#subcommunity').val();
	var community = $('#community').val();
	var town = $('#town').val();
	var city = $('#city').val();
	var country = $('#country').val();
	var propertyAddress = null;
	if(unit != null){
		propertyAddress = "Unit "+unit;
	}
	if(streetNo != null){
		propertyAddress = propertyAddress+","+streetNo;
	}
	if(streetName != null){
		propertyAddress = propertyAddress +" "+ streetName;
	}
	if(buildingNo != null){
		propertyAddress = propertyAddress+",Building "+buildingNo;
	}
	if(buildingName != null){
		propertyAddress = propertyAddress+","+buildingName;
	}
	if(subCommunity != null){
		propertyAddress = propertyAddress+","+subCommunity;
	}
	if(community != null){
		propertyAddress = propertyAddress+","+community;
	}
	if(town != null){
		propertyAddress = propertyAddress+","+town;
	}
	if(city != null){
		propertyAddress = propertyAddress+","+city;
	}
	if(country != null){
		propertyAddress = propertyAddress+","+country;
	}
	$('#propertyAddress').val(propertyAddress);
}
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
function calDate(startD,endD){
	    
	  var startDate = new Date(startD);
	  var endDate   = new Date(endD);
	      
	  var endMoment   = moment(endDate);
	  var startMoment = moment(startDate);
	  
	  var finalDate = endMoment.diff(startMoment, 'days');

	  return finalDate;
}
function calView(value){
	var final = null;
	if(value == "Park View" || value == "Pool View" || value == "Mountain View"){
		final = "5";
	}
	if(value == "Sea View" || value == "Marina View" || value == "Lake View"){
		final = "5";
	}
	if(value == "Partial Park View" || value == "Partial Pool View" || value == "Partial Mountain View"){
		final = "4";
	}
	if(value == "Partial Sea View" || value == "Partial Marina View" || value == "Partial Lake View"){
		final = "4";
	}
	if(value == "Community View"){
		final = "3";
	}
	return final;
}
function calExp(value){
	var final = null;
	if(value == "Single Row"){
		final = "2";
	}
	if(value == "Back To Back"){
		final = "1";
	}
	if(value == "Not Applicable"){
		final = "0";
	}
	return final;
}
function calAvg(value){
	var final = null;
	if(value == "Very Good"){
		final = "5";
	}
	if(value == "Good"){
		final = "4";
	}
	if(value == "Average"){
		final = "3";
	}
	if(value == "Substandard"){
		final = "2";
	}
	if(value == "Poor"){
		final = "1";
	}
	return final;
}
function calPla(value){
	var final = null;
	if(value == "Middle"){
		final = "3";
	}
	if(value == "Corner"){
		final = "5";
	}
	if(value == "Semi-Corner"){
		final = "4";
	}
	if(value == "Mulhaq"){
		final = "2";
	}
	if(value == "Not Applicable"){
		final = "0";
	}
	return final;
}
function calSta(value){
	var final = null;
	if(value == "Shell & Core"){
		final = "1";
	}
	if(value == "Fitted"){
		final = "2";
	}
	return final;
}
$("#filter").click(function(){
	 var city=$('#city').val(); 
	 var area=$('#community').val(); 
	 var neighbourhood=$('#subcommunity').val(); 
	 var buildingName=$('#buildingname').val(); 
	 $.ajax({
			url : 'filtered-transaction-list',
			dataType: "text",
			data : {city : city,area:area,neighbourhood:neighbourhood,buildingName:buildingName},
			method : 'POST',
			success : function(response) {
				var obj = $.parseJSON(response);
				if((Object.keys(obj).length) === 0){
					$('.errfilter').show();
					$('.filter').hide();
				}
				else{
					$('.errfilter').hide();
					$('.filter').show();
					$('div.boxlist').remove();
					for (x in obj) {
						console.log(obj[x].transactionId);
						$('.filter').append("" +
								"<div id="+obj[x].transactionId+" class='column boxlist' style='margin-bottom:5px;height:40px'>" +
									" <div id="+ obj[x].transactionId +">" +
									  	" <div class='head stylename' style='width:5.6%'>" + obj[x].date + "</div>" +
									  	" <div class='head stylename' style='width:5%'>" + obj[x].type + "</div>" +
									  	" <div class='head stylename' style='width:6%'>" + obj[x].city + "</div>" +
									  	" <div class='head stylename' >" + obj[x].area + "</div>" +
									  	" <div class='head stylename' style='width:9%'>" + obj[x].neighbourhood + "</div>" +
									  	" <div class='head stylename' style='width:12%'>" + obj[x].buildingName + "</div>" +
									  	" <div class='head stylename' style='width:12%'>" + obj[x].developer + "</div>" +
									  	" <div class='head stylename' style='width:12%'>" + obj[x].propertySubType + "</div>" +
									  	" <div class='head stylename' style='width:7%'>" + obj[x].roomNoEstimated + "</div>" +
									  	" <div class='head stylename' style='width:6%'>" + obj[x].landAreaSqf + "</div>" +
									  	" <div class='head stylename' style='width:5%'>" + obj[x].sizeSqf + "</div>" +
									  	" <div class='head stylename' style='width:8%'>" + obj[x].price + "</div>" +
									  	" <div class='head stylename' style='width:0%'>" + obj[x].pricePerSqFt + "</div>" +
									  "</div>" +
							    "</div>");
					}
				}
			}
	 });	
});
function toComma(value){
	var result = parseInt(value);
	result = result.toLocaleString();
	return result;
}
var locWeight = null;
var viewWeight = null; 
var quaWeight = null;
var floorWeight = null;
var landWeight = null;
var buaWeight = null;
var dateWeight = null;
var expWeight = null;
var plaWeight = null;
var staWeight = null;
var bedWeight = null;
var priceAvg = null;
var pricePerAvg = null;
var landAvg = null;
var adjloc = null;
var adjview = null;
var adjqua = null;
var adjfloor = null;
var adjbua = null;
var adjbed = null;
var adjexp= null;
var adjpla = null;
var adjsta = null;
var adjdate = null;
var finalValue = null;

$("#weiloc").keyup(function(){
	var value = $(this).val();
	if(value != locWeight){
		$('#chaloc').show();
		$('#chaloc').text(locWeight);
		adjloc =  parseInt(($('#diffloc').val()).replace(/,/g , ''))  * parseFloat(($("#weiloc").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
		$('#adjloc').val(toComma(adjloc));
		if(landAvg == "-"){
			   var marketValue = parseInt(priceAvg) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , ''))  + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 else{
			   var marketValue = parseInt(priceAvg) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , ''))  + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 finalValue = parseInt(parseInt(($('#marketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
		 $('#finalvalue').val(toComma(finalValue));
	}
	else{
		$('#chaloc').hide();
        adjloc =  parseInt(($('#diffloc').val()).replace(/,/g , ''))  * parseFloat(($("#weiloc").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
		$('#adjloc').val(toComma(adjloc));
		if(landAvg == "-"){
			   var marketValue = parseInt(priceAvg) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , ''))  + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 else{
			   var marketValue = parseInt(priceAvg) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , ''))  + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		finalValue = parseInt(parseInt(($('#marketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
		 $('#finalvalue').val(toComma(finalValue));
	}
});
$("#weiview").keyup(function(){
	var value = $(this).val();
	if(value != viewWeight){
		$('#chaview').show();
		$('#chaview').text(viewWeight);
		adjview =  parseInt(($('#diffview').val()).replace(/,/g , ''))  * parseFloat(($("#weiview").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
		$('#adjview').val(toComma(adjview));
		if(landAvg == "-"){
			   var marketValue = parseInt(priceAvg) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , ''))  + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 else{
			   var marketValue = parseInt(priceAvg) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , ''))  + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		finalValue = parseInt(parseInt(($('#marketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
		 $('#finalvalue').val(toComma(finalValue));
	}
	else{
		$('#chaview').hide();
		adjview =  parseInt(($('#diffview').val()).replace(/,/g , ''))  * parseFloat(($("#weiview").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
		$('#adjview').val(toComma(adjview));
		if(landAvg == "-"){
			   var marketValue = parseInt(priceAvg) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , ''))  + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 else{
			   var marketValue = parseInt(priceAvg) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , ''))  + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 finalValue = parseInt(parseInt(($('#marketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
		 $('#finalvalue').val(toComma(finalValue));
		
	}
});
$("#weiqua").keyup(function(){
	var value = $(this).val();
	if(value != quaWeight){
		$('#chaqua').show();
		$('#chaqua').text(quaWeight);
		adjqua =  parseInt(($('#diffqua').val()).replace(/,/g , ''))  * parseFloat(($("#weiqua").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
		$('#adjqua').val(toComma(adjqua));
		if(landAvg == "-"){
			   var marketValue = parseInt(priceAvg) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , ''))  + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 else{
			   var marketValue = parseInt(priceAvg) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , ''))  + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 finalValue = parseInt(parseInt(($('#marketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
		 $('#finalvalue').val(toComma(finalValue));
	}
	else{
		$('#chaqua').hide();
		adjqua =  parseInt(($('#diffqua').val()).replace(/,/g , ''))  * parseFloat(($("#weiqua").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
		$('#adjqua').val(toComma(adjqua));
		if(landAvg == "-"){
			   var marketValue = parseInt(priceAvg) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , ''))  + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 else{
			   var marketValue = parseInt(priceAvg) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , ''))  + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 finalValue = parseInt(parseInt(($('#marketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
		 $('#finalvalue').val(toComma(finalValue));
	}
});
$("#weifloor").keyup(function(){
	var value = $(this).val();
	if(value != floorWeight){
		$('#chafloor').show();
		$('#chafloor').text(floorWeight);
		adjfloor =  parseInt(($('#difffloor').val()).replace(/,/g , ''))  * parseFloat(($("#weifloor").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
		$('#adjfloor').val(toComma(adjfloor));
		if(landAvg == "-"){
			   var marketValue = parseInt(priceAvg) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , ''))  + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 else{
			   var marketValue = parseInt(priceAvg) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , ''))  + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 finalValue = parseInt(parseInt(($('#marketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
		 $('#finalvalue').val(toComma(finalValue));
		
	}
	else{
		$('#chafloor').hide();
		adjfloor =  parseInt(($('#difffloor').val()).replace(/,/g , ''))  * parseFloat(($("#weifloor").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
		$('#adjfloor').val(toComma(adjfloor));
		if(landAvg == "-"){
			   var marketValue = parseInt(priceAvg) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , ''))  + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 else{
			   var marketValue = parseInt(priceAvg) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , ''))  + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 finalValue = parseInt(parseInt(($('#marketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
		 $('#finalvalue').val(toComma(finalValue));
	}
});
$("#weibua").keyup(function(){
	var value = $(this).val();
	if(value != buaWeight){
		$('#chabua').show();
		$('#chabua').text(buaWeight);
		adjbua =  parseInt(($('#diffbua').val()).replace(/,/g , ''))  * parseFloat(($("#weibua").val()).replace(/%/g , '')) * parseInt(pricePerAvg) / 100;
		$('#adjbua').val(toComma(adjbua));
		if(landAvg == "-"){
			   var marketValue = parseInt(priceAvg) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , ''))  + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 else{
			   var marketValue = parseInt(priceAvg) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , ''))  + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 finalValue = parseInt(parseInt(($('#marketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
		 $('#finalvalue').val(toComma(finalValue));
	}
	else{
		$('#chabua').hide();
		adjbua =  parseInt(($('#diffbua').val()).replace(/,/g , ''))  * parseFloat(($("#weibua").val()).replace(/%/g , '')) * parseInt(pricePerAvg) / 100;
		$('#adjbua').val(toComma(adjbua));
		if(landAvg == "-"){
			   var marketValue = parseInt(priceAvg) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , ''))  + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 else{
			   var marketValue = parseInt(priceAvg) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , ''))  + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 finalValue = parseInt(parseInt(($('#marketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
		 $('#finalvalue').val(toComma(finalValue));
	}
});
$("#weiland").keyup(function(){
	var value = $(this).val();
	if(value != landWeight){
		$('#chaland').show();
		$('#chaland').text(landWeight);
		adjland =  parseInt(($('#diffland').val()).replace(/,/g , ''))  * parseFloat(($("#weiland").val()).replace(/%/g , '')) * parseInt(pricePerAvg) / 100;
		$('#adjland').val(toComma(adjland));
		if(landAvg == "-"){
			   var marketValue = parseInt(priceAvg) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , ''))  + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 else{
			   var marketValue = parseInt(priceAvg) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , ''))  + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 finalValue = parseInt(parseInt(($('#marketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
		 $('#finalvalue').val(toComma(finalValue));
	}
	else{
		$('#chaland').hide();
		adjland =  parseInt(($('#diffland').val()).replace(/,/g , ''))  * parseFloat(($("#weiland").val()).replace(/%/g , '')) * parseInt(pricePerAvg) / 100;
		$('#adjland').val(toComma(adjland));
		if(landAvg == "-"){
			   var marketValue = parseInt(priceAvg) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , ''))  + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 else{
			   var marketValue = parseInt(priceAvg) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , ''))  + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 finalValue = parseInt(parseInt(($('#marketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
		 $('#finalvalue').val(toComma(finalValue));
	}
});
$("#weibed").keyup(function(){
	var value = $(this).val();
	if(value != bedWeight){
		$('#chabed').show();
		$('#chabed').text(bedWeight);
		adjbed =  parseInt(($('#diffbed').val()).replace(/,/g , ''))  * parseFloat(($("#weibed").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
		$('#adjbed').val(toComma(adjbed));
		if(landAvg == "-"){
			   var marketValue = parseInt(priceAvg) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , ''))  + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 else{
			   var marketValue = parseInt(priceAvg) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , ''))  + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 finalValue = parseInt(parseInt(($('#marketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
		 $('#finalvalue').val(toComma(finalValue));
	}
	else{
		$('#chabed').hide();
		adjbed =  parseInt(($('#diffbed').val()).replace(/,/g , ''))  * parseFloat(($("#weibed").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
		$('#adjbed').val(toComma(adjbed));
		if(landAvg == "-"){
			   var marketValue = parseInt(priceAvg) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , ''))  + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 else{
			   var marketValue = parseInt(priceAvg) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , ''))  + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 finalValue = parseInt(parseInt(($('#marketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
		 $('#finalvalue').val(toComma(finalValue));
	}
});
$("#weista").keyup(function(){
	var value = $(this).val();
	if(value != staWeight){
		$('#chasta').show();
		$('#chasta').text(staWeight);
		adjsta =  parseInt(($('#diffsta').val()).replace(/,/g , ''))  * parseFloat(($("#weista").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
		$('#adjsta').val(toComma(adjsta));
		if(landAvg == "-"){
			   var marketValue = parseInt(priceAvg) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , ''))  + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 else{
			   var marketValue = parseInt(priceAvg) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , ''))  + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 finalValue = parseInt(parseInt(($('#marketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
		 $('#finalvalue').val(toComma(finalValue));
	}
	else{
		$('#chasta').hide();
		adjsta =  parseInt(($('#diffsta').val()).replace(/,/g , ''))  * parseFloat(($("#weista").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
		$('#adjsta').val(toComma(adjsta));
		if(landAvg == "-"){
			   var marketValue = parseInt(priceAvg) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , ''))  + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 else{
			   var marketValue = parseInt(priceAvg) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , ''))  + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 finalValue = parseInt(parseInt(($('#marketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
		 $('#finalvalue').val(toComma(finalValue));
	}
});
$("#weipla").keyup(function(){
	var value = $(this).val();
	if(value != plaWeight){
		$('#chapla').show();
		$('#chapla').text(plaWeight);
		adjpla =  parseInt(($('#diffpla').val()).replace(/,/g , ''))  * parseFloat(($("#weipla").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
		$('#adjpla').val(toComma(adjpla));
		if(landAvg == "-"){
			   var marketValue = parseInt(priceAvg) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , ''))  + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 else{
			   var marketValue = parseInt(priceAvg) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , ''))  + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 finalValue = parseInt(parseInt(($('#marketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
		 $('#finalvalue').val(toComma(finalValue));
	}
	else{
		$('#chapla').hide();
		adjpla =  parseInt(($('#diffpla').val()).replace(/,/g , ''))  * parseFloat(($("#weipla").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
		$('#adjpla').val(toComma(adjpla));
		if(landAvg == "-"){
			   var marketValue = parseInt(priceAvg) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , ''))  + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 else{
			   var marketValue = parseInt(priceAvg) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , ''))  + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 finalValue = parseInt(parseInt(($('#marketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
		 $('#finalvalue').val(toComma(finalValue));
	}
});
$("#weiexp").keyup(function(){
	var value = $(this).val();
	if(value != expWeight){
		$('#chaexp').show();
		$('#chaexp').text(expWeight);
		adjexp =  parseInt(($('#diffexp').val()).replace(/,/g , ''))  * parseFloat(($("#weiexp").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
		$('#adjexp').val(toComma(adjexp));
		if(landAvg == "-"){
			   var marketValue = parseInt(priceAvg) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , ''))  + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 else{
			   var marketValue = parseInt(priceAvg) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , ''))  + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 finalValue = parseInt(parseInt(($('#marketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
		 $('#finalvalue').val(toComma(finalValue));
		 
	}
	else{
		$('#chaexp').hide();
		var adjexp =  parseInt(($('#diffexp').val()).replace(/,/g , ''))  * parseFloat(($("#weiexp").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
		$('#adjexp').val(toComma(adjexp));
		if(landAvg == "-"){
			   var marketValue = parseInt(priceAvg) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , ''))  + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 else{
			   var marketValue = parseInt(priceAvg) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , ''))  + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 finalValue = parseInt(parseInt(($('#marketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
		 $('#finalvalue').val(toComma(finalValue));
	}
});
$("#weidate").keyup(function(){
	var value = $(this).val();
	if(value != dateWeight){
		$('#chadate').show();
		$('#chadate').text(dateWeight);
		adjdate =  parseFloat(value.replace(/%/g , '')) * parseInt(priceAvg) * (16 / 30) / 100;
		$('#adjdate').val(toComma(adjdate));
		if(landAvg == "-"){
			   var marketValue = parseInt(priceAvg) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , ''))  + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 else{
			   var marketValue = parseInt(priceAvg) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , ''))  + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 finalValue = parseInt(parseInt(($('#marketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
		 $('#finalvalue').val(toComma(finalValue));
	}
	else{
		$('#chadate').hide();
		adjdate = parseFloat(value.replace(/%/g , '')) * parseInt(priceAvg) * (16 / 30) / 100;
		$('#adjdate').val(toComma(adjdate));
		if(landAvg == "-"){
			   var marketValue = parseInt(priceAvg) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , ''))  + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 else{
			   var marketValue = parseInt(priceAvg) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , ''))  + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 finalValue = parseInt(parseInt(($('#marketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
		 $('#finalvalue').val(toComma(finalValue));
	}
});
$("#average").click(function(){
	   var city=$('#city').val(); 
	   var area=$('#community').val();
	   var buildingName=$('#buildingname').val(); 
	   var neighbourhood=$('#subcommunity').val(); 
	   var propertyType=$('#propertyvalued').val();
	   $('#ecommunity').val(area);
	   $('#ebuidingName').val(buildingName);
	   $('#epropertyType').val(propertyType);
	   $.ajax({
			url : 'filter-transac',
			dataType: "text",
			asyn: true,
			data : {city : city,area:area,neighbourhood:neighbourhood,buildingName:buildingName,propertyType:propertyType},
			method : 'POST',
			success : function(response) {	
				var obj = $.parseJSON(response);
			    priceAvg = obj.priceAvg;
			    pricePerAvg = obj.pricePerAvg;
				var sizeAvg = obj.sizeAvg;
				var dateAvg = obj.dateAvg;
				var bedAvg = obj.bedAvg;
				landAvg = obj.landAvg;
				var lessThan1Month = obj.lessThan1Month;
				var lessThan2Month = obj.lessThan2Month;
				var lessThan3Month = obj.lessThan3Month;
				var lessThan4Month = obj.lessThan4Month;
				var lessThan5Month = obj.lessThan5Month;
				var lessThan6Month = obj.lessThan6Month;
				var lessThan7Month = obj.lessThan7Month;
				var lessThan8Month = obj.lessThan8Month;
				var lessThan9Month = obj.lessThan9Month;
				var lessThan10Month = obj.lessThan10Month;
				var lessThan11Month = obj.lessThan11Month;
				var lessThan12Month = obj.lessThan12Month;
				expWeight = obj.expWeight;
				plaWeight = obj.plaWeight;
				staWeight = obj.staWeight;
				bedWeight = obj.bedWeight;
				locWeight = obj.locWeight;
				viewWeight = obj.viewWeight;
				quaWeight = obj.quaWeight;
				floorWeight = obj.floorWeight;
				landWeight = obj.landWeight;
				buaWeight = obj.buaWeight;
//				var dateWeight = obj.dateWeight;
				var bau = $('#buitUpAreaSize').val();
				var location = $('#location').val();
				var quality = $('#quality').val();
				var view = $('#view').val();
				var floorNo =  $('#floorno').val();
				var fullBulFloors =  $('#fullBulFloors').val();
				$('#edate').val(dateAvg);
				$('#ebed').val(bedAvg);
				$('#esizeavg').val(toComma(sizeAvg));
				$('#epriceavg').val(toComma(priceAvg));
				$('#epriceavg').val(toComma(priceAvg));
				$('#epriceavgper').val(toComma(pricePerAvg));
				if(landAvg != "-"){
					 $('#elandavg').val(toComma(landAvg));
				}
				$('#weiloc').val(locWeight);
				$('#weiview').val(viewWeight);
				$('#weiqua').val(quaWeight);
				$('#weifloor').val(floorWeight);
				$('#weiland').val(landWeight);
				$('#weibua').val(buaWeight);
				$('#weibed').val(bedWeight);
				$('#weiexp').val(expWeight);
				$('#weipla').val(plaWeight);
				$('#weista').val(staWeight);
				// location//
				var subloc = calAvg(location);
				$('#subloc').val(subloc);
			    var diffloc = parseInt($('#subloc').val()) - parseInt($('#avgloc').val());
			    $('#diffloc').val(toComma(diffloc));
			     adjloc = parseInt(($('#diffloc').val()).replace(/,/g , '')) * parseFloat(locWeight.replace(/%/g , '')) * parseInt(priceAvg) / 100;
			    $('#adjloc').val(toComma(adjloc));
			    // quality//
			    var subqua = calAvg(quality);
			    $('#subqua').val(subqua);
			    var diffqua = parseInt($('#subqua').val()) - parseInt($('#avgqua').val());
			    $('#diffqua').val(toComma(diffqua));
			     adjqua = parseInt(($('#diffqua').val()).replace(/,/g , ''))  * parseFloat(quaWeight.replace(/%/g , ''))  * parseInt(priceAvg) / 100;
			    $('#adjqua').val(toComma(adjqua));
			    // view//
			    var subview = calView(view);
			    $('#subview').val(subview);
			    var diffview = parseInt($('#subview').val()) - parseInt($('#avgview').val());
			    $('#diffview').val(toComma(diffview));
			     adjview = parseInt(($('#diffview').val()).replace(/,/g , ''))  * parseFloat(viewWeight.replace(/%/g , '')) * parseInt(priceAvg) / 100;
			    $('#adjview').val(toComma(adjview));
			    //floor//
				var suffix = fullBulFloors.match(/\d+/);
				if(suffix){
					suffix = parseInt(parseInt(suffix[0]) / 2);
					suffix = suffix.toString();
					$('#avgfloor').val(suffix);
				}
				$('#subfloor').val(floorNo);
				var difffloor = parseInt($('#subfloor').val()) - parseInt($('#avgfloor').val());
				$('#difffloor').val(toComma(difffloor));
				 adjfloor = parseInt(($('#difffloor').val()).replace(/,/g , ''))  * parseFloat(floorWeight.replace(/%/g , '')) * parseInt(priceAvg) / 100;
				$('#adjfloor').val(toComma(adjfloor));
				//LandSize//
				if(landAvg != "-"){
					 $('#avgland').val(toComma(landAvg));
					 $('#subland').val(toComma($('#landSize').val()));
					 var diffland = parseInt($('#landSize').val()) - parseInt(landAvg);
					 $('#diffland').val(toComma(diffland));
					 var adjland = parseInt(($('#diffland').val()).replace(/,/g , ''))  * parseFloat(landWeight.replace(/%/g , '')) * parseInt(pricePerAvg) / 100;
					 $('#adjland').val(toComma(adjland));
				}else{
					$('#avgland').val(landAvg);
					$('#subland').val(landAvg);
					$('#diffland').val(landAvg);
					$('#adjland').val(landAvg);
					$('#elandavg').val(landAvg);
					$('#weiland').val(landAvg);
				}
				//bua//
				 $('#avgbua').val(toComma(sizeAvg));
				 $('#subbua').val(toComma($('#buitUpAreaSize').val()));
				 var diffbua =  parseInt($('#buitUpAreaSize').val()) - parseInt(sizeAvg);
				 $('#diffbua').val(toComma(diffbua));
				  adjbua =  parseInt(($('#diffbua').val()).replace(/,/g , ''))  * parseFloat(buaWeight.replace(/%/g , '')) * parseInt(pricePerAvg) / 100;
				 $('#adjbua').val(toComma(adjbua));
				 //date//
				 $('#avgdate').val(dateAvg);
				 $('#subdate').val($('#insdate').val());
				 var diffdate = calDate($('#avgdate').val(),$('#subdate').val());
				 $('#diffdate').val(toComma(diffdate));
				 if( diffdate <= 30 ){
					 dateWeight = lessThan1Month;
					 $('#weidate').val(lessThan1Month);
					  adjdate = parseFloat(lessThan1Month.replace(/%/g , '')) * parseInt(priceAvg) * (16 / 30) / 100;
					 $('#adjdate').val(toComma(adjdate));
				 }
				 if( diffdate <= 60 && diffdate > 30){
					 dateWeight = lessThan2Month;
					 $('#weidate').val(lessThan2Month);
					  adjdate = parseFloat(lessThan2Month.replace(/%/g , '')) * parseInt(priceAvg) * (16 / 30) / 100;
					 $('#adjdate').val(toComma(adjdate));
				 }
				 if( diffdate <= 90 && diffdate > 60){
					 dateWeight = lessThan3Month;
					 $('#weidate').val(lessThan3Month);
					  adjdate = parseFloat(lessThan3Month.replace(/%/g , '')) * parseInt(priceAvg) * (16 / 30) / 100;
					 $('#adjdate').val(toComma(adjdate));
				 }
				 if( diffdate <= 120 && diffdate > 90){
					 dateWeight = lessThan4Month;
					 $('#weidate').val(lessThan4Month);
					  adjdate = parseFloat(lessThan4Month.replace(/%/g , '')) * parseInt(priceAvg) * (16 / 30) / 100;
					 $('#adjdate').val(toComma(adjdate));
				 }
				 if( diffdate <= 150 && diffdate > 120){
					 dateWeight = lessThan5Month;
					 $('#weidate').val(lessThan5Month);
					  adjdate = parseFloat(lessThan5Month.replace(/%/g , '')) * parseInt(priceAvg) * (16 / 30) / 100;
					 $('#adjdate').val(toComma(adjdate));
				 }
				 if( diffdate <= 180 && diffdate > 150){
					 dateWeight = lessThan6Month;
					 $('#weidate').val(lessThan6Month);
					  adjdate = parseFloat(lessThan6Month.replace(/%/g , '')) * parseInt(priceAvg) * (16 / 30) / 100;
					 $('#adjdate').val(toComma(adjdate));
				 }
				 if( diffdate <= 210 && diffdate > 180){
					 dateWeight = lessThan7Month;
					 $('#weidate').val(lessThan7Month);
					  adjdate = parseFloat(lessThan7Month.replace(/%/g , '')) * parseInt(priceAvg) * (16 / 30) / 100;
					 $('#adjdate').val(toComma(adjdate));
				 }
				 if( diffdate <= 240 && diffdate > 210){
					 dateWeight = lessThan8Month;
					 $('#weidate').val(lessThan8Month);
					  adjdate = parseFloat(lessThan8Month.replace(/%/g , '')) * parseInt(priceAvg) * (16 / 30) / 100;
					 $('#adjdate').val(toComma(adjdate));
				 }
				 if( diffdate <= 270 && diffdate > 240){
					 dateWeight = lessThan9Month;
					 $('#weidate').val(lessThan9Month);
					  adjdate = parseFloat(lessThan9Month.replace(/%/g , '')) * parseInt(priceAvg) * (16 / 30) / 100;
					 $('#adjdate').val(toComma(adjdate));
				 }
				 if( diffdate <= 300 && diffdate > 270){
					 dateWeight = lessThan10Month;
					 $('#weidate').val(lessThan10Month);
					  adjdate = parseFloat(lessThan10Month.replace(/%/g , '')) * parseInt(priceAvg) * (16 / 30) / 100;
					 $('#adjdate').val(toComma(adjdate));
				 }
				 if( diffdate <= 330 && diffdate > 300){
					 dateWeight = lessThan11Month;
					 $('#weidate').val(lessThan11Month);
					  adjdate = parseFloat(lessThan11Month.replace(/%/g , '')) * parseInt(priceAvg) * (16 / 30) / 100;
					 $('#adjdate').val(toComma(adjdate));
				 }
				 if( diffdate <= 360 && diffdate > 330){
					 dateWeight = lessThan12Month;
					 $('#weidate').val(lessThan12Month);
					  adjdate = parseFloat(lessThan12Month.replace(/%/g , '')) * parseInt(priceAvg) * (16 / 30) / 100;
					 $('#adjdate').val(toComma(adjdate));
				 }
				 //beds//
				 $('#avgbed').val(bedAvg);
				 $('#subbed').val($('#bedroom').val());
				 var diffbed =  parseInt($('#subbed').val()) - parseInt(bedAvg);
				 $('#diffbed').val(toComma(diffbed));
				  adjbed =  parseInt(($('#diffbed').val()).replace(/,/g , ''))  * parseFloat(bedWeight.replace(/%/g , '')) * parseInt(priceAvg) / 100;
				 $('#adjbed').val(toComma(adjbed));
				 //Property Placement//
				 $('#subpla').val(calPla($('#placement').val()));
				 var diffpla = parseInt(parseInt($('#subpla').val() - $('#avgpla').val()));
				 $('#diffpla').val(toComma(diffpla));
				  adjpla =  parseInt(($('#diffpla').val()).replace(/,/g , ''))  * parseFloat(plaWeight.replace(/%/g , '')) * parseInt(priceAvg) / 100;
				 $('#adjpla').val(toComma(adjpla));
				 //Property Exposure//
				 $('#subexp').val(calExp($('#exposure').val()));
				 var diffexp = parseInt(parseInt($('#subexp').val() - $('#avgexp').val()));
				 $('#diffexp').val(toComma(diffexp));
				  adjexp =  parseInt(($('#diffexp').val()).replace(/,/g , ''))  * parseFloat(expWeight.replace(/%/g , '')) * parseInt(priceAvg) / 100;
				 $('#adjexp').val(toComma(adjexp));
				//Finishing Status//
				 $('#substa').val(calSta($('#status').val()));
				 var diffsta = parseInt(parseInt($('#substa').val() - $('#avgsta').val()));
				 $('#diffsta').val(toComma(diffsta));
				  adjsta =  parseInt(($('#diffsta').val()).replace(/,/g , ''))  * parseFloat(staWeight.replace(/%/g , '')) * parseInt(priceAvg) / 100;
				 $('#adjsta').val(toComma(adjsta));
			     //Market Value//
				 if(landAvg == "-"){
					   var marketValue = parseInt(priceAvg) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
	   					parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , ''))  + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
					   $('#marketvalue').val(toComma(marketValue));
				 }
				 else{
					   var marketValue = parseInt(priceAvg) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
	   					parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , ''))  + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
					   $('#marketvalue').val(toComma(marketValue));
				 }
				 finalValue = parseInt(parseInt(($('#marketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
				 $('#finalvalue').val(toComma(finalValue));
			},

		});	
});
$("#bedroom").change(function() {
	var value = $(this).val();
	if(value.includes("1")){
		$('#1').show();
		$('#2,#3,#4,#5,#6,#7,#8,#9,#10').hide();
	}
	if(value.includes("2")){
		$('#1,#2').show();
		$('#3,#4,#5,#6,#7,#8,#9,#10').hide();
	}
	if(value.includes("3")){
		$('#1,#2,#3').show();
		$('#4,#5,#6,#7,#8,#9,#10').hide();
	}
	if(value.includes("4")){
		$('#1,#2,#3,#4').show();
		$('#5,#6,#7,#8,#9,#10').hide();
	}
	if(value.includes("5")){
		$('#1,#2,#3,#4,#5').show();
		$('#6,#7,#8,#9,#10').hide();
	}
	if(value.includes("6")){
		$('#1,#2,#3,#4,#5,#6').show();
		$('#7,#8,#9,#10').hide();
	}
	if(value.includes("7")){
		$('#1,#2,#3,#4,#5,#6,#7').show();
		$('#8,#9,#10').hide();
	}
	if(value.includes("8")){
		$('#1,#2,#3,#4,#5,#6,#7,#8').show();
		$('#9,#10').hide();
	}
	if(value.includes("9")){
		$('#10').hide();
		$('#1,#2,#3,#4,#5,#6,#7,#8,#9').show();
	}
	if(value.includes("10")){
		$('#1,#2,#3,#4,#5,#6,#7,#8,#9,#10').show();
	}
});
$("#bathroom").change(function() {
	var value = $(this).val();
	if(value === "1"){
		$('#1ba').show();
		$('#2ba,#3ba,#4ba,#5ba,#6ba,#7ba,#8ba,#9ba,#10ba').hide();
	}
	if(value === "2"){
		$('#1ba,#2ba').show();
		$('#3ba,#4ba,#5ba,#6ba,#7ba,#8ba,#9ba,#10ba').hide();
	}
	if(value === "3"){
		$('#1ba,#2ba,#3ba').show();
		$('#4ba,#5ba,#6ba,#7ba,#8ba,#9ba,#10ba').hide();
	}
	if(value === "4"){
		$('#1ba,#2ba,#3ba,#4ba').show();
		$('#5ba,#6ba,#7ba,#8ba,#9ba,#10ba').hide();
	}
	if(value === "5"){
		$('#1ba,#2ba,#3ba,#4ba,#5ba').show();
		$('#6ba,#7ba,#8ba,#9ba,#10ba').hide();
	}
	if(value === "6"){
		$('#1ba,#2ba,#3ba,#4ba,#5ba,#6ba').show();
		$('#7ba,#8ba,#9ba,#10ba').hide();
	}
	if(value === "7"){
		$('#1ba,#2ba,#3ba,#4ba,#5ba,#6ba,#7ba').show();
		$('#8ba,#9ba,#10ba').hide();
	}
	if(value === "8"){
		$('#1ba,#2ba,#3ba,#4ba,#5ba,#6ba,#7ba,#8ba').show();
		$('#9ba,#10ba').hide();
	}
	if(value === "9"){
		$('#10ba').hide();
		$('#1ba,#2ba,#3ba,#4ba,#5ba,#6ba,#7ba,#8ba,#9ba').show();
	}
	if(value === "10"){
		$('#1ba,#2ba,#3ba,#4ba,#5ba,#6ba,#7ba,#8ba,#9ba,#10ba').show();
	}
});
$('.wordsec').hide();

$('#marketValue').keydown(function(e) {
	if (e.which == 9) { 
		var get_num = $('#marketValue').val();
		var a = parseInt(get_num);
		a = a.toLocaleString();
		$('#marketValue').val(a);
		
	}
});
$("#marketValue").keyup(function() {
	var get_num = $(this).val();
	get_num =get_num.replace(/,/g , '');
	if(get_num != '')
	{
		var num_to_words = toWords(get_num);
		var numword =num_to_words.replace(/,/g , '')
		$('.word').text("("+numword+" Dirhams Only)");
		$('.wordsec').show();
	}
	else{
		$('.word').text("");
		$('.wordsec').hide();
	}
	var bulitupsize = $('#buitUpAreaSize').val();
	if(bulitupsize != '' && get_num != ''){
		var finalvalue = parseInt(get_num)/parseInt(bulitupsize);
		var rent = finalvalue.toFixed();
		$('#marketValueRate').val(rent);
	}
	else{
		$('#marketValueRate').val("");
	}
	if(get_num != ''){
		var finalrent = parseInt(get_num) * (6 / 100);
		finalrent = finalrent.toLocaleString();
		$('#marketrent').val(finalrent);
	}
	else{
		$('#marketrent').val("");
		
	}
});
$("#buitUpAreaSize").keyup(function() {
	var get_num = $('#marketValue').val();	
	get_num =get_num.replace(/,/g , '');
	if(get_num != '')
	{
		var num_to_words = toWords(get_num);
		var numword =num_to_words.replace(/,/g , '')
		$('.word').text("("+numword+" Dirhams Only)");
		$('.wordsec').show();
	}
	else{
		$('.word').text("");
		$('.wordsec').hide();
	}
	var bulitupsize = $(this).val();
	if(bulitupsize != '' && get_num != ''){
		var finalvalue = parseInt(get_num)/parseInt(bulitupsize);
		var rent = finalvalue.toFixed();
		$('#marketValueRate').val(rent);
	}
	else{
		$('#marketValueRate').val("");
	}
});
$("#insType").change(function() {
	var value = $(this).val();
	if(value === "Desktop"){
		$('.insdate,.insday,.instime,.insOfficer,.mode,.startkms,.endkms').hide();
	}
	else{
		$('.insdate,.insday,.instime,.insOfficer,.mode,.startkms,.endkms').show();
	}
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
//$("#community").change(function() {
//	var community = $('#community').val();
//	$.ajax({
//		url : 'getCity',
//		data : {community : community},
//		method : 'POST',
//		success : function(response) {	
//			$('#city').val(response);
//			 $("#city option[value='+response+']").attr("selected",true);
//			return;
//		},
//	});	
//});

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
