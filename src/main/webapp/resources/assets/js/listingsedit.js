$('.listingseditform .sub-header').text('Edit Listings');

function toComma(value){
	value = value.replace(/,/g , '');
	var result = parseInt(value);
	result = result.toLocaleString();
	return result;
}
var propertyValued = $('#propertyListed').val();
$.ajax({
	url : 'getValuationApproach',
	dataType: "text",
	data : {propertyValued : propertyValued},
	method : 'POST',
	success : function(response) {	
		var obj = $.parseJSON(response);
		var propertyCategory = obj.propertyCategory;
		 $('#propertyCategory').val(propertyCategory);
		 $("#propertyCategory option[value='+propertyCategory+']").attr("selected",true);
		return;
		},
});	
$("#propertyListed").change(function() {
	var propertyValued = $('#propertyListed').val();
	$.ajax({
		url : 'getValuationApproach',
		dataType: "text",
		data : {propertyValued : propertyValued},
		method : 'POST',
		success : function(response) {	
			var obj = $.parseJSON(response);
			var propertyCategory = obj.propertyCategory;
			 $('#propertyCategory').val(propertyCategory);
			 $("#propertyCategory option[value='+propertyCategory+']").attr("selected",true);
			return;
			},
	});	
});

$('#listingseditform').submit(function(e) {
	var price = $('#price').val();
	price = toComma(price);
	$('#price').val(price);
	var priceSqt = $('#priceSqt').val();
	priceSqt = toComma(priceSqt);
	$('#priceSqt').val(priceSqt);
	var landSize = $('#landSize').val();
	if(landSize == ""){
		$('#landSize').val("-");
	}
	else{
		landSize = toComma(landSize);
		$('#landSize').val(landSize);
	}
	if(bua == ""){
		$('#bua').val("-");
	}
	else{
		bua = toComma(bua);
		$('#bua').val(bua);
	}
	var rent = $('#rent').val();
	rent = toComma(rent);
	$('#rent').val(rent);
	var finalRent = $('#finalRent').val();
	finalRent = toComma(finalRent);
	$('#finalRent').val(finalRent);
	if($('.err').is(':visible')){
		  e.preventDefault();
		  $(':input', this).each(function() {
			  $(this).removeAttr("disabled");
		   });		  
	}
});

$('#cancel').click(function(e){
	e.preventDefault();
	window.location.replace("listings-list");
});

$("#delete").click(function(){
	 var listingsId=$('#listingsId').val();     
        var getUrl = window.location;
        var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];    
        var finalurl=baseUrl+"/delete-listings?listingsId="+listingsId;   
       $("#delete").attr("href",finalurl);
});