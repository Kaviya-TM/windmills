$('.deveditform .sub-header').text('Edit Development File');
$('.errMsg').hide();

$('#deveditform').submit(function(e) {
	if($('.err').is(':visible')){
		  e.preventDefault();
		  $(':input', this).each(function() {
			  $(this).removeAttr("disabled");
		   });		  
	}
});

$('#cancel').click(function(e){
	e.preventDefault();
	window.location.replace("development-list");
});

$("#delete").click(function(){
	 var developmentId=$('#developmentId').val();     
        var getUrl = window.location;
        var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];    
        var finalurl=baseUrl+"/delete-development?developmentId="+developmentId;   
       $("#delete").attr("href",finalurl);
});