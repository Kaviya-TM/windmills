$('.serviceform .sub-header').text('Service Officer Form');
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
});
$('#useractive').attr("checked",true);