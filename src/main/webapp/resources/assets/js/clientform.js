$('.clientform .sub-header').text('Client Form');
$(".contactadd").click(function () {	 
	$(".contactholder").append('<div class="clientholder1"><div class="cname"><label class="labelholder1" >Name</label><input type="text" class="form-control form-control-sm textholder1" name="" id="" placeholder="Name" autocomplete="off"></div><div class="phone"><label class="labelholder1">Phone</label><input type="text" class="form-control form-control-sm textholder1" name="" id="" placeholder="Phone" autocomplete="off"></div><div class="email"><label class="labelholder1">Email</label><input type="text" class="form-control form-control-sm textholder1" name="" id="" placeholder="Email" autocomplete="off"></div><div class="removeDiv"><i class="fas fa-times"></i></div><br></div>');
	$(".removeDiv").click(function () {
	   	$(this).closest('.clientholder1').remove();	
	});
});
$(".removeDiv").click(function () {
   	$(this).closest('.clientholder1').remove();	
});

$('#clientform').submit(function(e) {
	 $(':input', this).each(function() {
		 var value = $(this).val();
		 if(value == ""){
			 $(this).attr("disabled","true");
	}
	 });
});
$(".othercontactadd").click(function () {	 
	$(".contactholder").append('<div class="clientholder1"><div class="cname"><label class="labelholder1" >Name</label><input type="text" class="form-control form-control-sm textholder1" name="" id="" placeholder="Name" autocomplete="off"></div><div class="phone"><label class="labelholder1">Phone</label><input type="text" class="form-control form-control-sm textholder1" name="" id="" placeholder="Phone" autocomplete="off"></div><div class="email"><label class="labelholder1">Email</label><input type="text" class="form-control form-control-sm textholder1" name="" id="" placeholder="Email" autocomplete="off"></div><div class="removeDiv"><i class="fas fa-times"></i></div><br></div>');
	$(".removeDiv").click(function () {
	   	$(this).closest('.clientholder1').remove();	
	});
});