$("#documents").click(function() {
	if(document1 != "" && document1 != undefined && document1 != "None"){
		$("#doc1").val(document1);
	}
	else{
		$('.d1').hide();
	}
	if(document2 != "" && document2 != undefined && document1 != "None"){
		$("#doc2").val(document2);
	}
	else{
		$('.d2').hide();
	}
	if(document3 != "" && document3 != undefined && document1 != "None"){
		$("#doc3").val(document3);
	}
	else{
		$('.d3').hide();
	}
	if(document4 != "" && document4 != undefined && document1 != "None"){
		$("#doc4").val(document4);
	}
	else{
		$('.d4').hide();
	}
	if(document5 != "" && document5 != undefined && document1 != "None"){
		$("#doc5").val(document5);
	}
	else{
		$('.d5').hide();
	}
	if(document6 != "" && document6 != undefined && document1 != "None"){
		$("#doc6").val(document6);
	}
	else{
		$('.d6').hide();
	}
	if(document7 != "" && document7 != undefined && document1 != "None"){
		$("#doc7").val(document7);
	}
	else{
		$('.d7').hide();
	}
	if(document8 != "" && document8 != undefined && document1 != "None"){
		$("#doc8").val(document8);
	}
	else{
		$('.d8').hide();
	}
	if(document9 != "" && document9 != undefined && document1 != "None"){
		$("#doc9").val(document9);
	}
	else{
		$('.d9').hide();
	}
	if(document10 != "" && document10 != undefined && document1 != "None"){
		$("#doc10").val(document10);
	}
	else{
		$('.d10').hide();
	}
});

$(".firstblock").hide();
$(".secondblock").hide();
$(".thirdblock").hide();
$(".fourthblock").hide();
$(".fifthblock").hide();
$(".sixthblock").hide();
$(".sevenblock").hide();
$(".eightblock").hide();
$(".nineblock").hide();
$(".tenblock").hide();
//one//
$("#yes1").click(function() {	
	if($(this). is(":checked")){
		$(".firstblock").show();
	}
	else{
		$(".firstblock").hide();
	}
	
});
$("#no1").click(function() {
	if($(this). is(":checked")){
		$(".firstblock").hide();
	}
});
//two//
$("#yes2").click(function() {	
	if($(this). is(":checked")){
		$(".secondblock").show();
	}
	else{
		$(".secondblock").hide();
	}
	
});
$("#no2").click(function() {
	if($(this). is(":checked")){
		$(".secondblock").hide();
	}
});
//three//
$("#yes3").click(function() {	
	if($(this). is(":checked")){
		$(".thirdblock").show();
	}
	else{
		$(".thirdblock").hide();
	}
	
});
$("#no3").click(function() {
	if($(this). is(":checked")){
		$(".thirdblock").hide();
	}
});
//four//
$("#yes4").click(function() {	
	if($(this). is(":checked")){
		$(".fourthblock").show();
	}
	else{
		$(".fourthblock").hide();
	}
	
});
$("#no4").click(function() {
	if($(this). is(":checked")){
		$(".fourthblock").hide();
	}
});
//five//
$("#yes5").click(function() {	
	if($(this). is(":checked")){
		$(".fifthblock").show();
	}
	else{
		$(".fifthblock").hide();
	}
	
});
$("#no5").click(function() {
	if($(this). is(":checked")){
		$(".fifthblock").hide();
	}
});
//six//
$("#yes6").click(function() {	
	if($(this). is(":checked")){
		$(".sixthblock").show();
	}
	else{
		$(".sixthblock").hide();
	}
	
});
$("#no6").click(function() {
	if($(this). is(":checked")){
		$(".sixthblock").hide();
	}
});
//seven//
$("#yes7").click(function() {	
	if($(this). is(":checked")){
		$(".sevenblock").show();
	}
	else{
		$(".sevenblock").hide();
	}
	
});
$("#no7").click(function() {
	if($(this). is(":checked")){
		$(".sevenblock").hide();
	}
});
//eight//
$("#yes8").click(function() {	
	if($(this). is(":checked")){
		$(".eightblock").show();
	}
	else{
		$(".eightblock").hide();
	}
	
});
$("#no8").click(function() {
	if($(this). is(":checked")){
		$(".eightblock").hide();
	}
});
//nine//
$("#yes9").click(function() {	
	if($(this). is(":checked")){
		$(".nineblock").show();
	}
	else{
		$(".nineblock").hide();
	}
	
});
$("#no9").click(function() {
	if($(this). is(":checked")){
		$(".nineblock").hide();
	}
});
//ten//
$("#yes10").click(function() {	
	if($(this). is(":checked")){
		$(".tenblock").show();
	}
	else{
		$(".tenblock").hide();
	}
	
});
$("#no10").click(function() {
	if($(this). is(":checked")){
		$(".tenblock").hide();
	}
});

// buttons//

$("#document1").change(function() {	
	  var i = $(this).prev('label').clone();	
	  var file = $("#document1")[0].files[0].name;	
	  var filename = file.split(".");
	  $(this).prev('label').text(file);	
});

$("#document2").change(function() {	
	  var i = $(this).prev('label').clone();	
	  var file = $("#document2")[0].files[0].name;	
	  var filename = file.split(".");
	  $(this).prev('label').text(file);	
});

$("#document3").change(function() {	
	  var i = $(this).prev('label').clone();	
	  var file = $("#document3")[0].files[0].name;	
	  var filename = file.split(".");
	  $(this).prev('label').text(file);	
});

$("#document4").change(function() {	
	  var i = $(this).prev('label').clone();	
	  var file = $("#document4")[0].files[0].name;	
	  var filename = file.split(".");
	  $(this).prev('label').text(file);	
});

$("#document5").change(function() {	
	  var i = $(this).prev('label').clone();	
	  var file = $("#document5")[0].files[0].name;	
	  var filename = file.split(".");
	  $(this).prev('label').text(file);	
});

$("#document6").change(function() {	
	  var i = $(this).prev('label').clone();	
	  var file = $("#document6")[0].files[0].name;	
	  var filename = file.split(".");
	  $(this).prev('label').text(file);	
});

$("#document7").change(function() {	
	  var i = $(this).prev('label').clone();	
	  var file = $("#document7")[0].files[0].name;	
	  var filename = file.split(".");
	  $(this).prev('label').text(file);	
});

$("#document8").change(function() {	
	  var i = $(this).prev('label').clone();	
	  var file = $("#document8")[0].files[0].name;	
	  var filename = file.split(".");
	  $(this).prev('label').text(file);	
});

$("#document9").change(function() {	
	  var i = $(this).prev('label').clone();	
	  var file = $("#document9")[0].files[0].name;	
	  var filename = file.split(".");
	  $(this).prev('label').text(file);	
});

$("#document10").change(function() {	
	  var i = $(this).prev('label').clone();	
	  var file = $("#document10")[0].files[0].name;	
	  var filename = file.split(".");
	  $(this).prev('label').text(file);	
});