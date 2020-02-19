$('.propertyeditform .sub-header').text('Edit Property Valued');
$('.errMsg').hide();

$('#propertyeditform').submit(function(e) {
	if($('.err').is(':visible')){
		  e.preventDefault();
		  $(':input', this).each(function() {
			  $(this).removeAttr("disabled");
		   });		  
	}
});

$('#cancel').click(function(e){
	e.preventDefault();
	window.location.replace("property-valued-list");
});