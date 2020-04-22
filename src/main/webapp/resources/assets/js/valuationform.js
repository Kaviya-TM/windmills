
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
			var developer = obj.developer;
			console.log("communitty",community);
			 $('#city').val(community);
			 $('#community').val(city);
			 $('#developer').val(developer);
			 $('#subcommunity').val(subcommunity);
			return;
			},
	});	
});
$("#senquiry").click(function() {
	$('#s-buildingName').val($('#buildingname').val());
	$('#s-city').val($('#city').val());
	$('#s-community').val($('#community').val());
	$('#s-subcommunity').val($('#subcommunity').val());
	$('#s-propList').val($('#propertyvalued').val());
});

$("#s-buildingName").change(function() {	
	var buildingName = $('#s-buildingName').val();
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
			 $('#s-city').val(community);
			 $('#s-community').val(city);
			 $('#s-subcommunity').val(subcommunity);
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


$("#sfilter").click(function(){
	 var city=$('#s-city').val(); 
	 var area=$('#s-community').val(); 
	 var neighbourhood=$('#s-subcommunity').val(); 
	 var buildingName=$('#s-buildingName').val(); 
	 var bedfrom=$('#bedfrom').val(); 
	 var bedto=$('#bedto').val(); 
	 var landfrom=$('#landfrom').val(); 
	 var landto=$('#landto').val(); 
	 var buafrom=$('#buafrom').val(); 
	 var buato=$('#buato').val(); 
	 var pricefrom=$('#pricefrom').val(); 
	 var priceto=$('#priceto').val(); 
	 var pricesqtfrom=$('#pricesqtfrom').val(); 
	 var pricesqtto=$('#pricesqtto').val(); 
	 var datefrom=$('#datefrom').val(); 
	 var dateto=$('#dateto').val(); 
	 var propList=$('#s-propList').val(); 
	 $('#v-wr').text($('#reference').val());
	 $('#v-vd').text($('#valDate').val());
	 $('#v-property').text(propList);
	 $('#v-datefrom').text(datefrom);
	 $('#v-dateto').text(dateto);
	 $('#v-buildingName').text(buildingName);
	 $('#v-subCommunity').text(neighbourhood);
	 $('#v-community').text(area);
	 $('#v-city').text(city);
	 if(bedfrom != ""){
		 $('#v-bedfrom').text(bedfrom);
	 }
	 else{
		 $('#v-bedfrom').text("-");
	 }
	 if(bedto !=""){
		 $('#v-bedto').text(bedto);
	 }
	 else{
		 $('#v-bedto').text("-");
	 }
	 if(landfrom !=""){
		 $('#v-landfrom').text(landfrom);
	 }
	 else{
		 $('#v-landfrom').text("-");
	 }
	 if(landto !=""){
		 $('#v-landto').text(landto);
	 }
	 else{
		 $('#v-landto').text("-");
	 }
	 if(buafrom !=""){
		 $('#v-buafrom').text(buafrom);
	 }
	 else{
		 $('#v-buafrom').text("-");
	 }
	 if(buato !=""){
		 $('#v-buato').text(buato);
	 }
	 else{
		 $('#v-buato').text("-");
	 }
	 if(pricefrom !=""){
		 $('#v-pricefrom').text(pricefrom);
	 }
	 else{
		 $('#v-pricefrom').text("-");
	 }
	 if(priceto !=""){
		 $('#v-priceto').text(priceto);
	 }
	 else{
		 $('#v-priceto').text("-");
	 }
	 if(pricesqtfrom !=""){
		 $('#v-pricesqtfrom').text(pricesqtfrom);
	 }
	 else{
		 $('#v-pricesqtfrom').text("-");
	 }
	 if(pricesqtto !=""){
		 $('#v-pricesqtto').text(pricesqtto);
	 }
	 else{
		 $('#v-pricesqtto').text("-");
	 }
	 
	 $.ajax({
			url : 'filtered-transaction-list',
			dataType: "text",
			data : {city : city,area:area,neighbourhood:neighbourhood,buildingName:buildingName,bedfrom:bedfrom,bedto:bedto,
				landfrom:landfrom,landto:landto,buafrom:buafrom,buato:buato,pricefrom:pricefrom,priceto:priceto,
				pricesqtfrom:pricesqtfrom,pricesqtto:pricesqtto,datefrom:datefrom,dateto:dateto,propList:propList},
			method : 'POST',
			success : function(response) {
				console.log(response);
				var obj = $.parseJSON(response);
				console.log(obj.list);
				if(obj.empty === "empty"){
					$('.errfilter').show();
					$('.filter').hide();
					$('.secsec').css("display","block !important");
					$('#filter').css("background","#ff6600");
					$('#senquiry').css("background","#000080");
					$('.senquiry').hide();
				}
				else{
					$('.errfilter').hide();
					$('.senquiry').hide();
					$('.filter').show();
					$('div.boxlist').remove();
					$('#filter').css("background","#ff6600");
					$('#senquiry').css("background","#000080");
					var pricePerAvg = toComma(obj.pricePerAvg);
					var sizeAvg = toComma(obj.sizeAvg);
					var priceAvg = toComma(obj.priceAvg);
					var landAvg = toComma(obj.landAvg);
					if(landAvg === "NaN"){
						landAvg = "-";
					}
					var pricePerAvg = toComma(obj.pricePerAvg);
					for (x in obj.list) {
						var date = obj.list[x].date;
						var formatdate = null;
						if(date.includes("/01/")){
							formatdate = date.replace("/01/", "-Jan-");
						}
						if(date.includes("/02/")){
							formatdate = date.replace("/02/", "-Feb-");
						}
						if(date.includes("/03/")){
							formatdate = date.replace("/03/", "-Mar-");
						}
						if(date.includes("/04/")){
							formatdate = date.replace("/04/", "-Apr-");
						}
						if(date.includes("/05/")){
							formatdate = date.replace("/05/", "-May-");
						}
						if(date.includes("/06/")){
							formatdate = date.replace("/06/", "-Jun-");
						}
						if(date.includes("/07/")){
							formatdate = date.replace("/07/", "-Jul-");
						}
						if(date.includes("/08/")){
							formatdate = date.replace("/08/", "-Aug-");
						}
						if(date.includes("/09/")){
							formatdate = date.replace("/09/", "-Sep-");
						}
						if(date.includes("/10/")){
							formatdate = date.replace("/10/", "-Oct-");
						}
						if(date.includes("/11/")){
							formatdate = date.replace("/11/", "-Nov-");
						}
						if(date.includes("/12/")){
							formatdate = date.replace("/12/", "-Dec-");
						}
						
						$('.filter').append("" +
								"<div id="+obj.list[x].transactionId+" class='column boxlist' style='margin-bottom:5px;display:flex'>" +
									" <div class='head stylename' style='width:7.6%'>" + formatdate + "</div>" +
									  	" <div class='head stylename' style='width:7.6%'>" + obj.list[x].area + "</div>" +
									  	" <div class='head stylename' style='width:14%'>" + obj.list[x].neighbourhood + "</div>" +
									  	" <div class='head stylename' style='width:15%'>" + obj.list[x].buildingName + "</div>" +
									  	" <div class='head stylename' style='width:15%'>" + obj.list[x].developer + "</div>" +
									  	" <div class='head stylename' style='width:12%'>" + obj.list[x].propertySubType + "</div>" +
									  	" <div class='head stylename' style='width:6%'>" + obj.list[x].roomNoEstimated + "</div>" +
									  	" <div class='head stylename' style='width:6%'>" + obj.list[x].landAreaSqf + "</div>" +
									  	" <div class='head stylename' style='width:5%'>" + obj.list[x].sizeSqf + "</div>" +
									  	" <div class='head stylename' style='width:8%'>" + obj.list[x].price + "</div>" +
									  	" <div class='head stylename' style='width:0%'>" + obj.list[x].pricePerSqFt + "</div>" +
									  
							    "</div>");
					}	
					$('.filter').append("" +
							"<div class='column boxlist' style='margin-bottom:5px;background:orange;display:flex'>" +
							" <div class='head stylename' style='width:7.6%;color:#fff'>" + obj.dateAvg + "</div>" +
						  	" <div class='head stylename' style='width:7.6%;color:orange'>" +formatdate + "</div>" +
						  	" <div class='head stylename' style='width:14%;color:orange'>" + formatdate + "</div>" +
						  	" <div class='head stylename' style='width:15%;color:orange'>" +formatdate + "</div>" +
						  	" <div class='head stylename' style='width:15%;color:orange'>" + formatdate + "</div>" +
						  	" <div class='head stylename' style='width:12%;color:orange'>" + formatdate + "</div>" +
						  	" <div class='head stylename' style='width:6%;color:#fff'>" + obj.bedAvg+ "</div>" +
						  	" <div class='head stylename' style='width:6%;color:#fff'>" + landAvg + "</div>" +
						  	" <div class='head stylename' style='width:5%;color:#fff'>" + sizeAvg+ "</div>" +
						  	" <div class='head stylename' style='width:8%;color:#fff'>" + priceAvg + "</div>" +
						  	" <div class='head stylename' style='width:0%;color:#fff'>" + pricePerAvg + "</div>" +
				    "</div>");
				}
			}
	 });	
});
function toComma(value){
	var result = parseInt(value);
	result = result.toLocaleString();
	return result;
}

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
$("#vsummary").click(function() {
	$("#soldTransac").val($('#soldmarketvalue').val());
});

$("#buitUpAreaSize").keyup(function() {
	var buitUpAreaSize = $('#buitUpAreaSize').val();
	var balsize = $('#balsize').val();
	var final = parseInt(buitUpAreaSize) - parseInt(balsize);
	$("#netbuitUpAreaSize").val(final);
});
$("#balsize").keyup(function() {
	var buitUpAreaSize = $('#buitUpAreaSize').val();
	var balsize = $('#balsize').val();
	var final = parseInt(buitUpAreaSize) - parseInt(balsize);
	$("#netbuitUpAreaSize").val(final);
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
		var maxAge = obj.maxAge;
		var parkingPrice = obj.parkingPrice;
		var poolPrice = obj.poolPrice;
		var landscapePrice = obj.landscapePrice;
		var whitegoodsPrice = obj.whitegoodsPrice;
		var utiliesPrice = obj.utiliesPrice;
		 $('#valApproach').val(valApproach);
		 $("#valApproach option[value='+valApproach+']").attr("selected",true);
		$('#apprreason').val(apprreason);
		 $("#apprreason option[value='+apprreason+']").attr("selected",true);
		 $('#maxAge').val(maxAge);
		 $('#parkingPrice').val(parkingPrice);
		 $('#poolPrice').val(poolPrice);
		 $('#landscapePrice').val(landscapePrice);
		 $('#whitegoodsPrice').val(whitegoodsPrice);
		 $('#utiliesPrice').val(utiliesPrice);
		return;
		},
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
			var maxAge = obj.maxAge;
			var parkingPrice = obj.parkingPrice;
			var poolPrice = obj.poolPrice;
			var landscapePrice = obj.landscapePrice;
			var whitegoodsPrice = obj.whitegoodsPrice;
			var utiliesPrice = obj.utiliesPrice;
			 $('#valApproach').val(valApproach);
			 $("#valApproach option[value='+valApproach+']").attr("selected",true);
			$('#apprreason').val(apprreason);
			 $("#apprreason option[value='+apprreason+']").attr("selected",true);
			 $('#maxAge').val(maxAge);
			 $('#parkingPrice').val(parkingPrice);
			 $('#poolPrice').val(poolPrice);
			 $('#landscapePrice').val(landscapePrice);
			 $('#whitegoodsPrice').val(whitegoodsPrice);
			 $('#utiliesPrice').val(utiliesPrice);
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
