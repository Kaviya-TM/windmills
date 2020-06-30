$('.discounteditform .sub-header').text('Edit Sales Discount');
var discountId = 1;
var million1;
var million2;
var million3;
var million4;
var million5;
var million20;
var million50;
var million100;
$.ajax({
	url : 'editDiscountPage',
	dataType: "text",
	data : {discountId : discountId},
	method : 'POST',
	success : function(response) {	
		var obj = $.parseJSON(response);
		discountId = obj[0].discountId;
		million1 = obj[0].million1;
		million2 = obj[0].million2;
		million3 = obj[0].million3;
		million4 = obj[0].million4;
		million5 = obj[0].million5;
		million20 = obj[0].million20;
		million50 = obj[0].million50;
		million100 = obj[0].million100;
		$('#million1').val(million1);
		$('#million2').val(million2);
		$('#million3').val(million3);
		$('#million4').val(million4);
		$('#million5').val(million5);
		$('#million20').val(million20);
		$('#million50').val(million50);
		$('#million100').val(million100);
	}
});
