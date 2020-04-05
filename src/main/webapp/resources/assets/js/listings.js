$('.listings .sub-header').text('Lisiting Transactions');
$("#list-buildingname").change(function() {
	var buildingName = $('#list-buildingname').val();
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
			 $('#list-city').val(community);
			 $('#list-community').val(city);
			 $('#list-subcommunity').val(subcommunity);
			return;
			},
	});	
});
function toComma(value){
	value = value.replace(/,/g , '');
	var result = parseInt(value);
	result = result.toLocaleString();
	return result;
}
$(".select2").select2({
    placeholder: "Other Facilities",
    allowClear: true
});
$('#addlisitings').submit(function(e) {
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
