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

$('#addlisitings').submit(function(e) {
	var price = $('#price').val();
	price = price.toLocaleString();
	$('#price').val(price);
	var rent = $('#rent').val();
	rent = rent.toLocaleString();
	$('#rent').val(rent);
	var finalRent = $('#finalRent').val();
	finalRent = finalRent.toLocaleString();
	$('#finalRent').val(finalRent);
	if($('.err').is(':visible')){
		  e.preventDefault();
		  $(':input', this).each(function() {
			  $(this).removeAttr("disabled");
		   });		  
	}
});
