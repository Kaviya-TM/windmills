$('.weighatgeeditform .sub-header').text('Edit Property Atrribute Weightage');

$('#weighatgeeditform').submit(function(e) {
	if($('.err').is(':visible')){
		  e.preventDefault();
		  $(':input', this).each(function() {
			  $(this).removeAttr("disabled");
		   });		  
	}
});

$('#cancel').click(function(e){
	e.preventDefault();
	window.location.replace("property-attribute-weightage-list");
});

$("#delete").click(function(){
	 var weightId=$('#weightId').val();     
        var getUrl = window.location;
        var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];    
        var finalurl=baseUrl+"/delete-weightage?weightId="+weightId;   
       $("#delete").attr("href",finalurl);
});