$('.serviceeditform .sub-header').text('Edit Service Officer');
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
$('#serviceform').submit(function(e) {
	if($('.err').is(':visible')){
		  e.preventDefault();
		  $(':input', this).each(function() {
			  $(this).removeAttr("disabled");
		   });		  
	}
});
$('#useractive').click(function() {		
	$(".sepdate").toggleClass("none");
	if($(".sepdate").hasClass("none")){
		//
	}
	else{
		$('#separationDate').attr("name","separationDate");
	}
});
$('#cancel').click(function(e){
	e.preventDefault();
	window.location.replace("service-Officer-list");
});