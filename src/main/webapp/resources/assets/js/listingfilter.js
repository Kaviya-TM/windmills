$("#l-buildingName").change(function() {
	var buildingName = $('#l-buildingName').val();
	$.ajax({
		url : 'getEverything',
		dataType: "text",
		data : {buildingName : buildingName},
		method : 'POST',
		success : function(response) {	
			var obj = $.parseJSON(response);
			var community = obj.city;
			var subcommunity = obj.subcommunity;
			var city = obj.community;
			console.log("communitty",community);
			 $('#l-city').val(community);
			 $('#l-community').val(city);
			 $('#l-subcommunity').val(subcommunity);
			return;
			},
	});	
});
$("#l-propList").change(function() {
	var propList = $('#l-propList').val();
	if(propList != "Residential Apartment"){
		 $(".landfrom").css("pointer-events","all");
		 $(".landfrom").css("color","#6c757d");
		 $(".landto").css("pointer-events","all");
		 $(".landto").css("color","#6c757d");
	}
	if(propList === "Residential Apartment"){
		 $(".landfrom").css("pointer-events","none");
		 $(".landfrom").css("color","darkgrey");
		 $(".landto").css("pointer-events","none");
		 $(".landto").css("color","darkgrey");
	}
});
$("#lenquiry").click(function() {
	$('#l-buildingName').val($('#buildingname').val());
	$('#l-city').val($('#city').val());
	$('#l-community').val($('#community').val());
	$('#l-subcommunity').val($('#subcommunity').val());
	$('#l-propList').val($('#propertyvalued').val());
	if($('#l-propList').val() == "Residential Apartment"){
		 $(".landfrom").css("pointer-events","none");
		 $(".landfrom").css("color","darkgrey");
		 $(".landto").css("pointer-events","none");
		 $(".landto").css("color","darkgrey");
	 }
});

$("#listingfilter").click(function(){
	 var city=$('#l-city').val(); 
	 var area=$('#l-community').val(); 
	 var neighbourhood=$('#l-subcommunity').val(); 
	 var buildingName=$('#l-buildingName').val(); 
	 var bedfrom=$('#l-bedfrom').val(); 
	 var bedto=$('#l-bedto').val(); 
	 var landfrom=$('#l-landfrom').val(); 
	 var landto=$('#l-landto').val(); 
	 var buafrom=$('#l-buafrom').val(); 
	 var buato=$('#l-buato').val(); 
	 var pricefrom=$('#l-pricefrom').val(); 
	 var priceto=$('#l-priceto').val(); 
	 var pricesqtfrom=$('#l-pricesqtfrom').val(); 
	 var pricesqtto=$('#l-pricesqtto').val(); 
	 var datefrom=$('#l-datefrom').val(); 
	 var dateto=$('#l-dateto').val(); 
	 var propList=$('#l-propList').val(); 
	 if(propList == "Residential Apartment"){
		 $(".landfrom").css("pointer-events","none");
		 $(".landfrom").css("color","darkgrey");
		 $(".landto").css("pointer-events","none");
		 $(".landto").css("color","darkgrey");
	 }
	 $('#vv-wr').text($('#reference').val());
	 $('#vv-vd').text($('#valDate').val());
	 $('#vv-property').text(propList);
	 $('#vv-datefrom').text(datefrom);
	 $('#vv-dateto').text(dateto);
	 $('#vv-buildingName').text(buildingName);
	 $('#vv-subCommunity').text(neighbourhood);
	 $('#vv-community').text(area);
	 $('#vv-city').text(city);
	 if(bedfrom != ""){
		 $('#vv-bedfrom').text(bedfrom);
	 }
	 else{
		 $('#vv-bedfrom').text("---");
	 }
	 if(bedto !=""){
		 $('#vv-bedto').text(bedto);
	 }
	 else{
		 $('#vv-bedto').text("---");
	 }
	 if(landfrom !=""){
		 $('#vv-landfrom').text(landfrom);
	 }
	 else{
		 $('#vv-landfrom').text("---");
	 }
	 if(landto !=""){
		 $('#vv-landto').text(landto);
	 }
	 else{
		 $('#vv-landto').text("---");
	 }
	 if(buafrom !=""){
		 $('#vv-buafrom').text(buafrom);
	 }
	 else{
		 $('#vv-buafrom').text("---");
	 }
	 if(buato !=""){
		 $('#vv-buato').text(buato);
	 }
	 else{
		 $('#vv-buato').text("---");
	 }
	 if(pricefrom !=""){
		 $('#vv-pricefrom').text(pricefrom);
	 }
	 else{
		 $('#vv-pricefrom').text("---");
	 }
	 if(priceto !=""){
		 $('#vv-priceto').text(priceto);
	 }
	 else{
		 $('#vv-priceto').text("---");
	 }
	 if(pricesqtfrom !=""){
		 $('#vv-pricesqtfrom').text(pricesqtfrom);
	 }
	 else{
		 $('#vv-pricesqtfrom').text("---");
	 }
	 if(pricesqtto !=""){
		 $('#vv-pricesqtto').text(pricesqtto);
	 }
	 else{
		 $('#vv-pricesqtto').text("---");
	 }
	 
	 $.ajax({
			url : 'listings-filtered-transaction',
			dataType: "text",
			data : {city : city,area:area,neighbourhood:neighbourhood,buildingName:buildingName,bedfrom:bedfrom,bedto:bedto,
				landfrom:landfrom,landto:landto,buafrom:buafrom,buato:buato,pricefrom:pricefrom,priceto:priceto,
				pricesqtfrom:pricesqtfrom,pricesqtto:pricesqtto,datefrom:datefrom,dateto:dateto,propList:propList},
			method : 'POST',
			success : function(response) {
				var obj = $.parseJSON(response);
				if(obj.empty === "empty"){
					$('.errfilter').show();
					$('.lfilter').hide();
					$('#lfilter').css("background","#ff6600");
					$('#lenquiry').css("background","#000080");
					$('.lenquiry').hide();
				}
				else{
					$('.errfilter').hide();
					$('.lenquiry').hide();
					$('.lfilter').show();
					$('div.boxlist').remove();
					$('#lfilter').css("background","#ff6600");
					$('#lenquiry').css("background","#000080");
					var pricePerAvg = toComma(obj.pricePerAvg);
					var sizeAvg = toComma(obj.sizeAvg);
					var priceAvg = toComma(obj.priceAvg);
					var landAvg = toComma(obj.landAvg);
					if(landAvg === "NaN"){
						landAvg = "-";
					}
					var pricePerAvg = toComma(obj.pricePerAvg);
					for (x in obj.list) {
						$('.lfilter').append("" +
								"<div id="+obj.list[x].transactionId+" class='column boxlist' style='margin-bottom:5px;display:flex'>" +
									" <div class='head stylename' style='width:7.6%'>" + obj.list[x].listingsDate + "</div>" +
									  	" <div class='head stylename' style='width:7.6%'>" + obj.list[x].community + "</div>" +
									  	" <div class='head stylename' style='width:14%'>" + obj.list[x].subCommunity + "</div>" +
									  	" <div class='head stylename' style='width:15%'>" + obj.list[x].buildingName + "</div>" +
									  	" <div class='head stylename' style='width:15%'>" + obj.list[x].developer + "</div>" +
									  	" <div class='head stylename' style='width:12%'>" + obj.list[x].propertyListed + "</div>" +
									  	" <div class='head stylename' style='width:6%'>" + obj.list[x].noOfBedrooms + "</div>" +
									  	" <div class='head stylename' style='width:6%'>" + obj.list[x].landSize + "</div>" +
									  	" <div class='head stylename' style='width:5%'>" + obj.list[x].bua + "</div>" +
									  	" <div class='head stylename' style='width:8%'>" + obj.list[x].price + "</div>" +
									  	" <div class='head stylename' style='width:0%'>" + obj.list[x].priceSqt + "</div>" +
									  
							    "</div>");
					}	
					$('.lfilter').append("" +
							"<div class='column boxlist' style='margin-bottom:5px;background:orange;display:flex'>" +
							" <div class='head stylename' style='width:7.6%;color:#fff'>" + obj.dateAvg + "</div>" +
						  	" <div class='head stylename' style='width:7.6%;color:orange'>"+ obj.dateAvg + "</div>" +
						  	" <div class='head stylename' style='width:14%;color:orange'>" + obj.dateAvg + "</div>" +
						  	" <div class='head stylename' style='width:15%;color:orange'>" + obj.dateAvg + "</div>" +
						  	" <div class='head stylename' style='width:15%;color:orange'>" + obj.dateAvg + "</div>" +
						  	" <div class='head stylename' style='width:12%;color:orange'>" + obj.dateAvg + "</div>" +
						  	" <div class='head stylename' style='width:6%;color:#fff'>" + obj.bedAvg+ "</div>" +
						  	" <div class='head stylename' style='width:6%;color:#fff'>" + landAvg + "</div>" +
						  	" <div class='head stylename' style='width:5%;color:#fff'>" + sizeAvg+ "</div>" +
						  	" <div class='head stylename' style='width:8%;color:#fff'>" + priceAvg + "</div>" +
						  	" <div class='head stylename' style='width:0%;color:#fff'>" + pricePerAvg + "</div>" +
				    "</div>");
				}
			}
	 });	
});
function toComma(value){
	var result = parseInt(value);
	result = result.toLocaleString();
	return result;
}