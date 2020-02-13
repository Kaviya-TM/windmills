$('.serviceeditform .sub-header').text('Edit Service Officer');
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
	window.location.replace("service-officer-list");
});