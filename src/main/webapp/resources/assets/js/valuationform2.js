$('.valuationform .sub-header').text('Valuation Form');
$('.inspecting1').hide();
$('.inspecting2').hide();
$('.scheduling').hide();
$('.submitting').hide();
$('.documents').hide();
$('.market-summary').hide();
$('.spl-assumption').hide();

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
	if(value === "1 Bathroom"){
		$('#1ba').show();
		$('#2ba,#3ba,#4ba,#5ba,#6ba,#7ba,#8ba,#9ba,#10ba').hide();
	}
	if(value === "2 Bathrooms"){
		$('#1ba,#2ba').show();
		$('#3ba,#4ba,#5ba,#6ba,#7ba,#8ba,#9ba,#10ba').hide();
	}
	if(value === "3 Bathrooms"){
		$('#1ba,#2ba,#3ba').show();
		$('#4ba,#5ba,#6ba,#7ba,#8ba,#9ba,#10ba').hide();
	}
	if(value === "4 Bathrooms"){
		$('#1ba,#2ba,#3ba,#4ba').show();
		$('#5ba,#6ba,#7ba,#8ba,#9ba,#10ba').hide();
	}
	if(value === "5 Bathrooms"){
		$('#1ba,#2ba,#3ba,#4ba,#5ba').show();
		$('#6ba,#7ba,#8ba,#9ba,#10ba').hide();
	}
	if(value === "6 Bathrooms"){
		$('#1ba,#2ba,#3ba,#4ba,#5ba,#6ba').show();
		$('#7ba,#8ba,#9ba,#10ba').hide();
	}
	if(value === "7 Bathrooms"){
		$('#1ba,#2ba,#3ba,#4ba,#5ba,#6ba,#7ba').show();
		$('#8ba,#9ba,#10ba').hide();
	}
	if(value === "8 Bathrooms"){
		$('#1ba,#2ba,#3ba,#4ba,#5ba,#6ba,#7ba,#8ba').show();
		$('#9ba,#10ba').hide();
	}
	if(value === "9 Bathrooms"){
		$('#10ba').hide();
		$('#1ba,#2ba,#3ba,#4ba,#5ba,#6ba,#7ba,#8ba,#9ba').show();
	}
	if(value === "10 Bathrooms"){
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
	$('.market-summary').hide();
	$('.spl-assumption').hide();
	$('.documents').hide();
	$("#documents").css("background", "#000080");
	$("#marketsum").css("background", "#000080");
	$("#splAssumption").css("background", "#000080");
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
	$('.market-summary').hide();
	$('.spl-assumption').hide();
	$('.documents').hide();
	$("#documents").css("background", "#000080");
	$("#marketsum").css("background", "#000080");
	$("#splAssumption").css("background", "#000080");
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
	$('.market-summary').hide();
	$('.spl-assumption').hide();
	$('.documents').hide();
	$("#documents").css("background", "#000080");
	$("#marketsum").css("background", "#000080");
	$("#splAssumption").css("background", "#000080");
	$("#inspect2").css("background", "#000080");
	$("#inspect1").css("background", "#DF0101");
	$("#receive").css("background", "#000080");
	$("#schedule").css("background", "#000080");
	$("#submit").css("background", "#000080");
	$("#conflict").css("background", "#000080");
});
$("#documents").click(function(){
	$('.inspecting1').hide();
	$('.submitting').hide();
	$('.receiving').hide();
	$('.scheduling').hide();
	$('.inspecting2').hide();
	$('.market-summary').hide();
	$('.spl-assumption').hide();
	$('.documents').show();
	$("#documents").css("background", "#DF0101");
	$("#marketsum").css("background", "#000080");
	$("#splAssumption").css("background", "#000080");
	$("#inspect1").css("background", "#000080");
	$("#inspect2").css("background", "#000080");
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
	$('.market-summary').hide();
	$('.spl-assumption').hide();
	$('.documents').hide();
	$("#documents").css("background", "#000080");
	$("#marketsum").css("background", "#000080");
	$("#splAssumption").css("background", "#000080");
	$("#inspect1").css("background", "#000080");
	$("#inspect2").css("background", "#DF0101");
	$("#receive").css("background", "#000080");
	$("#schedule").css("background", "#000080");
	$("#submit").css("background", "#000080");
	$("#conflict").css("background", "#000080");
});
$("#marketsum").click(function(){
	$('.inspecting1').hide();
	$('.submitting').hide();
	$('.receiving').hide();
	$('.scheduling').hide();
	$('.inspecting2').hide();
	$('.market-summary').show();
	$('.spl-assumption').hide();
	$('.documents').hide();
	$("#documents").css("background", "#000080");
	$("#marketsum").css("background", "#DF0101");
	$("#splAssumption").css("background", "#000080");
	$("#inspect1").css("background", "#000080");
	$("#submit").css("background", "#000080");
	$("#receive").css("background", "#000080");
	$("#schedule").css("background", "#000080");
	$("#inspect2").css("background", "#000080");
	$("#conflict").css("background", "#000080");
});
$("#splAssumption").click(function(){
	$('.inspecting1').hide();
	$('.submitting').hide();
	$('.receiving').hide();
	$('.scheduling').hide();
	$('.inspecting2').hide();
	$('.market-summary').hide();
	$('.spl-assumption').show();
	$('.documents').hide();
	$("#documents").css("background", "#000080");
	$("#inspect1").css("background", "#000080");
	$("#splAssumption").css("background", "#DF0101");
	$("#marketsum").css("background", "#000080");
	$("#submit").css("background", "#000080");
	$("#receive").css("background", "#000080");
	$("#schedule").css("background", "#000080");
	$("#inspect2").css("background", "#000080");
	$("#conflict").css("background", "#000080");
});
$("#submit").click(function(){
	$('.inspecting1').hide();
	$('.submitting').show();
	$('.receiving').hide();
	$('.scheduling').hide();
	$('.inspecting2').hide();
	$('.market-summary').hide();
	$('.spl-assumption').hide();
	$('.documents').hide();
	$("#documents").css("background", "#000080");
	$("#marketsum").css("background", "#000080");
	$("#splAssumption").css("background", "#000080");
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
	$('.scheduling').hide();
	$('.inspecting2').hide();
	$('.market-summary').hide();
	$('.spl-assumption').hide();
	$('.documents').show();
	$("#documents").css("background", "#DF0101");
	$("#marketsum").css("background", "#000080");
	$("#splAssumption").css("background", "#000080");
	$("#inspect1").css("background", "#000080");
	$("#schedule").css("background", "#000080");
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
	$('.market-summary').hide();
	$('.spl-assumption').hide();
	$('.documents').hide();
	$("#documents").css("background", "#000080");
	$("#marketsum").css("background", "#000080");
	$("#splAssumption").css("background", "#000080");
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
	$('.receiving').hide();
	$('.scheduling').hide();
	$('.inspecting2').hide();
	$('.market-summary').hide();
	$('.spl-assumption').hide();
	$('.documents').show();
	$("#documents").css("background", "#DF0101");
	$("#marketsum").css("background", "#000080");
	$("#splAssumption").css("background", "#000080");
	$("#schedule").css("background", "#000080");
	$("#receive").css("background", "#000080");
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
	$('.market-summary').hide();
	$('.spl-assumption').hide();
	$('.documents').hide();
	$("#documents").css("background", "#000080");
	$("#marketsum").css("background", "#000080");
	$("#splAssumption").css("background", "#000080");
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
	$('.market-summary').hide();
	$('.spl-assumption').hide();
	$('.documents').hide();
	$("#documents").css("background", "#000080");
	$("#marketsum").css("background", "#000080");
	$("#splAssumption").css("background", "#000080");
	$("#inspect2").css("background", "#000080");
	$("#schedule").css("background", "#DF0101");
	$("#inspect1").css("background", "#000080");
	$("#submit").css("background", "#000080");
	$("#receive").css("background", "#000080");
	$("#conflict").css("background", "#000080");
});
$("#splnxt").click(function(){
	$('.inspecting1').hide();
	$('.inspecting2').hide();
	$('.submitting').hide();
	$('.receiving').hide();
	$('.scheduling').hide();
	$('.market-summary').show();
	$('.spl-assumption').hide();
	$('.documents').hide();
	$("#documents").css("background", "#000080");
	$("#marketsum").css("background", "#DF0101");
	$("#splAssumption").css("background", "#000080");
	$("#schedule").css("background", "#000080");
	$("#submit").css("background", "#000080");
	$("#inspect1").css("background", "#000080");
	$("#inspect2").css("background", "#000080");
	$("#receive").css("background", "#000080");
	$("#conflict").css("background", "#000080");
});
$("#splprv").click(function(){
	$('.inspecting1').hide();
	$('.inspecting2').show();
	$('.submitting').hide();
	$('.receiving').hide();
	$('.scheduling').hide();
	$('.market-summary').hide();
	$('.spl-assumption').hide();
	$('.documents').hide();
	$("#documents").css("background", "#000080");
	$("#marketsum").css("background", "#000080");
	$("#splAssumption").css("background", "#000080");
	$("#inspect1").css("background", "#000080");
	$("#inspect2").css("background", "#DF0101");
	$("#schedule").css("background", "#000080");
	$("#submit").css("background", "#000080");
	$("#receive").css("background", "#000080");
	$("#conflict").css("background", "#000080");
});
$("#mrtnxt").click(function(){
	$('.inspecting1').hide();
	$('.inspecting2').hide();
	$('.submitting').show();
	$('.receiving').hide();
	$('.scheduling').hide();
	$('.market-summary').hide();
	$('.spl-assumption').hide();
	$('.documents').hide();
	$("#documents").css("background", "#000080");
	$("#marketsum").css("background", "#000080");
	$("#splAssumption").css("background", "#000080");
	$("#schedule").css("background", "#000080");
	$("#submit").css("background", "#DF0101");
	$("#inspect1").css("background", "#000080");
	$("#inspect2").css("background", "#000080");
	$("#receive").css("background", "#000080");
	$("#conflict").css("background", "#000080");
});
$("#mrtprv").click(function(){
	$('.inspecting1').hide();
	$('.inspecting2').hide();
	$('.submitting').hide();
	$('.receiving').hide();
	$('.scheduling').hide();
	$('.market-summary').hide();
	$('.spl-assumption').show();
	$('.documents').hide();
	$("#documents").css("background", "#000080");
	$("#marketsum").css("background", "#000080");
	$("#splAssumption").css("background", "#DF0101");
	$("#inspect1").css("background", "#000080");
	$("#inspect2").css("background", "#000080");
	$("#inspect1").css("background", "#000080");
	$("#schedule").css("background", "#000080");
	$("#submit").css("background", "#000080");
	$("#receive").css("background", "#000080");
	$("#conflict").css("background", "#000080");
});
$("#docnxt").click(function(){
	$('.inspecting1').hide();
	$('.inspecting2').hide();
	$('.submitting').hide();
	$('.receiving').hide();
	$('.scheduling').show();
	$('.market-summary').hide();
	$('.spl-assumption').hide();
	$('.documents').hide();
	$("#documents").css("background", "#000080");
	$("#marketsum").css("background", "#000080");
	$("#splAssumption").css("background", "#000080");
	$("#schedule").css("background", "#DF0101");
	$("#submit").css("background", "#000080");
	$("#inspect1").css("background", "#000080");
	$("#inspect2").css("background", "#000080");
	$("#receive").css("background", "#000080");
	$("#conflict").css("background", "#000080");
});
$("#docprv").click(function(){
	$('.inspecting1').hide();
	$('.inspecting2').hide();
	$('.submitting').hide();
	$('.receiving').show();
	$('.scheduling').hide();
	$('.market-summary').hide();
	$('.spl-assumption').hide();
	$('.documents').hide();
	$("#documents").css("background", "#000080");
	$("#marketsum").css("background", "#000080");
	$("#splAssumption").css("background", "#000080");
	$("#inspect2").css("background", "#000080");
	$("#inspect1").css("background", "#000080");
	$("#schedule").css("background", "#000080");
	$("#submit").css("background", "#000080");
	$("#receive").css("background", "#DF0101");
	$("#conflict").css("background", "#000080");
});
$("#inspect2nxt").click(function(){
	$('.inspecting1').hide();
	$('.inspecting2').hide();
	$('.submitting').hide();
	$('.receiving').hide();
	$('.scheduling').hide();
	$('.market-summary').hide();
	$('.spl-assumption').show();
	$('.documents').hide();
	$("#documents").css("background", "#000080");
	$("#marketsum").css("background", "#000080");
	$("#splAssumption").css("background", "#DF0101");
	$("#schedule").css("background", "#000080");
	$("#submit").css("background", "#000080");
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
	$('.market-summary').hide();
	$('.spl-assumption').hide();
	$('.documents').hide();
	$("#documents").css("background", "#000080");
	$("#marketsum").css("background", "#000080");
	$("#splAssumption").css("background", "#000080");
	$("#inspect2").css("background", "#000080");
	$("#inspect1").css("background", "#DF0101");
	$("#schedule").css("background", "#000080");
	$("#submit").css("background", "#000080");
	$("#receive").css("background", "#000080");
	$("#conflict").css("background", "#000080");
});
$("#submitprv").click(function(){
	$('.inspecting2').hide();
	$('.inspecting1').hide();
	$('.submitting').hide();
	$('.receiving').hide();
	$('.scheduling').hide();
	$('.market-summary').show();
	$('.spl-assumption').hide();
	$('.documents').hide();
	$("#documents").css("background", "#000080");
	$("#marketsum").css("background", "#DF0101");
	$("#splAssumption").css("background", "#000080");
	$("#inspect1").css("background", "#000080");
	$("#inspect2").css("background", "#000080");
	$("#schedule").css("background", "#000080");
	$("#submit").css("background", "#000080");
	$("#receive").css("background", "#000080");
	$("#conflict").css("background", "#000080");
});