$('.soldtransaction .sub-header').text('Sold Transactions');

$(".column").click(function() {	
	$('#'+$(this).attr("id")).submit();
});


