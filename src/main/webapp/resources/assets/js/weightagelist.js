$('.weightagelist .sub-header').text('Property Attribute Weightage List');
var elements = document.getElementsByClassName("column");
$(".column").click(function() {	
	$('#'+$(this).attr("id")).submit();
});


