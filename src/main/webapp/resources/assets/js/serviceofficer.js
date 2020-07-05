$('.serviceform .sub-header').text('Service Officer Form');
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
});
$('#useractive').attr("checked",true);