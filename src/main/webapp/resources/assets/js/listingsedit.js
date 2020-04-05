$('.listingseditform .sub-header').text('Edit Listings');

$('#listingseditform').submit(function(e) {
	if($('.err').is(':visible')){
		  e.preventDefault();
		  $(':input', this).each(function() {
			  $(this).removeAttr("disabled");
		   });		  
	}
});

$('#cancel').click(function(e){
	e.preventDefault();
	window.location.replace("listings-list");
});

$("#delete").click(function(){
	 var listingsId=$('#listingsId').val();     
        var getUrl = window.location;
        var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];    
        var finalurl=baseUrl+"/delete-listings?listingsId="+listingsId;   
       $("#delete").attr("href",finalurl);
});