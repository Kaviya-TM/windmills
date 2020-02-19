$('.propertylist .sub-header').text('Property Valued List');
var elements = document.getElementsByClassName("column");
$(".column").click(function() {	
	$('#'+$(this).attr("id")).submit();
});
//Declare a loop variable
var i;

//List View
function listView() {
	for (i = 0; i < elements.length; i++) {
	 elements[i].style.width = "100%";
	}
	$('.imgPart').addClass('addWidth');
}

//Grid View
function gridView() {
	for (i = 0; i < elements.length; i++) {
	 elements[i].style.width = "30%";
	}
	$('.imgPart').removeClass('addWidth');
}

/* Optional: Add active class to the current button (highlight it) */
var container = document.getElementById("btnContainer");
var btns = container.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
btns[i].addEventListener("click", function() {
var current = document.getElementsByClassName("active");
current[0].className = current[0].className.replace(" active", "");
this.className += " active";
});
}

