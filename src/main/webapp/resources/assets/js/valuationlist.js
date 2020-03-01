$('.valuationlist .sub-header').text('List of Valuation Reports');

$(".column").click(function() {	
	$('#'+$(this).attr("id")).submit();
});


