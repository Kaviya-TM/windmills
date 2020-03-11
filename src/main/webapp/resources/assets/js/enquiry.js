$('.enquiry .sub-header').text('Enquiry');
$('.error').hide();
$('#enquiry').submit(function(e) {
	
	if($('#ecity').val() === '' || $('#earea').val() === '' || $('#eneighbourhood').val() === '' || $('#ebuildingName').val() === '' ){
		 e.preventDefault();
		 $('.error').show();
	}
	if($('.err').is(':visible')){
		  e.preventDefault();
		  $(':input', this).each(function() {
			  $(this).removeAttr("disabled");
		   });		  
	}
});
