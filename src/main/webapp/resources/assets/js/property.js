$('.propertyform .sub-header').text('Property Valued Form');
$('.errMsg').hide();
$('#OfficerEmail').keyup(function(e) {		
	var email = $(this).val();	
	 $.ajax({
			url : 'checkServiceOfficer',
			data : {email : email},
			method : 'POST',
			success : function(response) {	
				console.log(response);
				if(response){
					$('#OfficerEmail').addClass('err');	
					$('.errMsg').show();
				}
				else{
					$('#OfficerEmail').removeClass('err');	
					$('.errMsg').hide();
				}
			},
	  });	
});
$('#propertyform').submit(function(e) {
	if($('.err').is(':visible')){
		  e.preventDefault();
		  $(':input', this).each(function() {
			  $(this).removeAttr("disabled");
		   });		  
	}
});
