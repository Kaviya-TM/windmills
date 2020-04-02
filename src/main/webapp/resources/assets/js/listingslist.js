$('.listingslist .sub-header').text('Listings List');

$(".column").click(function() {	
	$('#'+$(this).attr("id")).submit();
});



