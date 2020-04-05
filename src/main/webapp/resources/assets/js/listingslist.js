$('.listingslist .sub-header').text('Listings Transactions');

$(".column").click(function() {	
	$('#'+$(this).attr("id")).submit();
});



