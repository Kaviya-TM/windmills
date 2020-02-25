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

$("#delete").click(function(){
	 var propertyId=$('#propertyId').val();     
        var getUrl = window.location;
        var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];    
        var finalurl=baseUrl+"/delete-property-valued?propertyId="+propertyId;   
       $("#delete").attr("href",finalurl);
});