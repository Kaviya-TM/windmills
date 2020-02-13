$('.propertyform .sub-header').text('Property Valued Form');
$('.errMsg').hide();
$('#officerEmail').keyup(function(e) {		
	var email = $(this).val();	
	 $.ajax({
			url : 'checkServiceOfficer',
			data : {email : email},
			method : 'POST',
			success : function(response) {	
				console.log(response);
				if(response){
					$('#officerEmail').addClass('err');	
					$('.errMsg').show();
				}
				else{
					$('#officerEmail').removeClass('err');	
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
