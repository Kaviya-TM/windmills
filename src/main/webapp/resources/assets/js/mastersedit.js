$('.masterseditform .sub-header').text('Edit Previous Valuation');

//function toComma(value){
//	value = value.replace(/,/g , '');
//	var result = parseInt(value);
//	result = result.toLocaleString();
//	return result;
//}
//
//$('#listingseditform').submit(function(e) {
//	var price = $('#price').val();
//	price = toComma(price);
//	$('#price').val(price);
//	var priceSqt = $('#priceSqt').val();
//	priceSqt = toComma(priceSqt);
//	$('#priceSqt').val(priceSqt);
//	var landSize = $('#landSize').val();
//	if(landSize == ""){
//		$('#landSize').val("-");
//	}
//	else{
//		landSize = toComma(landSize);
//		$('#landSize').val(landSize);
//	}
//	if(bua == ""){
//		$('#bua').val("-");
//	}
//	else{
//		bua = toComma(bua);
//		$('#bua').val(bua);
//	}
//	var rent = $('#rent').val();
//	rent = toComma(rent);
//	$('#rent').val(rent);
//	var finalRent = $('#finalRent').val();
//	finalRent = toComma(finalRent);
//	$('#finalRent').val(finalRent);
//	if($('.err').is(':visible')){
//		  e.preventDefault();
//		  $(':input', this).each(function() {
//			  $(this).removeAttr("disabled");
//		   });		  
//	}
//});
//
$('#cancel').click(function(e){
	e.preventDefault();
	window.location.replace("previous-valuation-list");
});
//
$("#delete").click(function(){
	 var masterId=$('#masterId').val();     
        var getUrl = window.location;
        var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];    
        var finalurl=baseUrl+"/delete-masters?masterId="+masterId;   
       $("#delete").attr("href",finalurl);
});