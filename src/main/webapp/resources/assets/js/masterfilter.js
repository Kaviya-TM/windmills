
$("#m-buildingName").change(function() {
	var buildingName = $('#m-buildingName').val();
	$.ajax({
		url : 'getmEverything',
		dataType: "text",
		data : {buildingName : buildingName},
		method : 'POST',
		success : function(response) {	
			var obj = $.parseJSON(response);
			var community = obj.city;
			var subcommunity = obj.subcommunity;
			var city = obj.community;
			console.log("communitty",community);
			 $('#m-city').val(community);
			 $('#m-community').val(city);
			 $('#m-subcommunity').val(subcommunity);
			return;
			},
	});	
});
$("#m-propList").change(function() {
	var propList = $('#m-propList').val();
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
$("#menquiry").click(function() {
	$('#m-buildingName').val($('#buildingname').val());
	$('#m-city').val($('#city').val());
	$('#m-community').val($('#community').val());
	$('#m-subcommunity').val($('#subcommunity').val());
	$('#m-propList').val($('#propertyvalued').val());
	if($('#m-propList').val() == "Residential Apartment"){
		 $(".landfrom").css("pointer-events","none");
		 $(".landfrom").css("color","darkgrey");
		 $(".landto").css("pointer-events","none");
		 $(".landto").css("color","darkgrey");
	 }
});

$("#masterfilter").click(function(){
	 var city=$('#m-city').val(); 
	 var area=$('#m-community').val(); 
	 var neighbourhood=$('#m-subcommunity').val(); 
	 var buildingName=$('#m-buildingName').val(); 
	 var bedfrom=$('#m-bedfrom').val(); 
	 var bedto=$('#m-bedto').val(); 
	 var landfrom=$('#m-landfrom').val(); 
	 var landto=$('#m-landto').val(); 
	 var buafrom=$('#m-buafrom').val(); 
	 var buato=$('#m-buato').val(); 
	 var pricefrom=$('#m-pricefrom').val(); 
	 var priceto=$('#m-priceto').val(); 
	 var pricesqtfrom=$('#m-pricesqtfrom').val(); 
	 var pricesqtto=$('#m-pricesqtto').val(); 
	 var datefrom=$('#m-datefrom').val(); 
	 var dateto=$('#m-dateto').val(); 
	 var propList=$('#m-propList').val(); 
	 $('#vvv-wr').text($('#reference').val());
	 $('#vvv-vd').text($('#valDate').val());
	 $('#vvv-property').text(propList);
	 $('#vvv-datefrom').text(datefrom);
	 $('#vvv-dateto').text(dateto);
	 $('#vvv-buildingName').text(buildingName);
	 $('#vvv-subCommunity').text(neighbourhood);
	 $('#vvv-community').text(area);
	 $('#vvv-city').text(city);
	 if(bedfrom != ""){
		 $('#vvv-bedfrom').text(bedfrom);
	 }
	 else{
		 $('#vvv-bedfrom').text("-");
	 }
	 if(bedto !=""){
		 $('#vvv-bedto').text(bedto);
	 }
	 else{
		 $('#vvv-bedto').text("-");
	 }
	 if(landfrom !=""){
		 $('#vvv-landfrom').text(landfrom);
	 }
	 else{
		 $('#vvv-landfrom').text("-");
	 }
	 if(landto !=""){
		 $('#vvv-landto').text(landto);
	 }
	 else{
		 $('#vvv-landto').text("-");
	 }
	 if(buafrom !=""){
		 $('#vvv-buafrom').text(buafrom);
	 }
	 else{
		 $('#vvv-buafrom').text("-");
	 }
	 if(buato !=""){
		 $('#vvv-buato').text(buato);
	 }
	 else{
		 $('#vvv-buato').text("-");
	 }
	 if(pricefrom !=""){
		 $('#vvv-pricefrom').text(pricefrom);
	 }
	 else{
		 $('#vvv-pricefrom').text("-");
	 }
	 if(priceto !=""){
		 $('#vvv-priceto').text(priceto);
	 }
	 else{
		 $('#vvv-priceto').text("-");
	 }
	 if(pricesqtfrom !=""){
		 $('#vvv-pricesqtfrom').text(pricesqtfrom);
	 }
	 else{
		 $('#vvv-pricesqtfrom').text("-");
	 }
	 if(pricesqtto !=""){
		 $('#vvv-pricesqtto').text(pricesqtto);
	 }
	 else{
		 $('#vvv-pricesqtto').text("-");
	 }
	 
	 $.ajax({
			url : 'masters-filtered-transaction',
			dataType: "text",
			data : {city : city,area:area,neighbourhood:neighbourhood,buildingName:buildingName,bedfrom:bedfrom,bedto:bedto,
				landfrom:landfrom,landto:landto,buafrom:buafrom,buato:buato,pricefrom:pricefrom,priceto:priceto,
				pricesqtfrom:pricesqtfrom,pricesqtto:pricesqtto,datefrom:datefrom,dateto:dateto,propList:propList},
			method : 'POST',
			success : function(response) {
				var obj = $.parseJSON(response);
				if(obj.empty === "empty"){
					$('.errfilter').show();
					$('.mfilter').hide();
					$('#mfilter').css("background","#ff6600");
					$('#menquiry').css("background","#000080");
					$('.menquiry').hide();
				}
				else{
					$('.errfilter').hide();
					$('.menquiry').hide();
					$('.mfilter').show();
					$('div.boxlist').remove();
					$('#mfilter').css("background","#ff6600");
					$('#menquiry').css("background","#000080");
					var pricePerAvg = toComma(obj.pricePerAvg);
					var sizeAvg = toComma(obj.sizeAvg);
					var priceAvg = toComma(obj.priceAvg);
					var landAvg = toComma(obj.landAvg);
					var count = toComma(obj.count);
					var lowprice = toComma(obj.lowprice);
					var highprice = toComma(obj.highprice);
					var lowpricepersq = toComma(obj.lowpricepersq);
					var highpricepersq = toComma(obj.highpricepersq);
					if(landAvg === "NaN"){
						landAvg = "-";
					}
					var pricePerAvg = toComma(obj.pricePerAvg);
					for (x in obj.list) {
						console.log(obj.list[x].BUApersqf);
						$('.mfilter').append("" +
								"<div id="+obj.list[x].transactionId+" class='column boxlist' style='width:99.5%;margin-bottom:5px;display:flex'>" +
									" <div class='head stylename' style='width:7.6%'>" + obj.list[x].instructionDate + "</div>" +
									" <div class='head stylename' style='width:8.8%'>" + obj.list[x].wmRef + "</div>" +
									" <div class='head stylename' style='width:7%'>" + obj.list[x].tenure + "</div>" +
									" <div class='head stylename' style='width:7%'>" + obj.list[x].locationRating + "</div>" +
									  	" <div class='head stylename' style='width:3%'>" + obj.list[x].bldgAge + "</div>" +
									  	" <div class='head stylename' style='width:7%'>" + obj.list[x].viewRating + "</div>" +
									  	" <div class='head stylename' style='width:7%'>" + obj.list[x].qualityRating + "</div>" +
									  	" <div class='head stylename' style='width:7%'>" + obj.list[x].finishingStatus + "</div>" +
									  	" <div class='head stylename' style='width:6%'>" + obj.list[x].propExposure +"</div>" +
									  	" <div class='head stylename' style='width:7%'>" + obj.list[x].propplacement +"</div>" +
									  	" <div class='head stylename' style='width:5%'>" + obj.list[x].floorNo + "</div>" +
									  	" <div class='head stylename' style='width:5%'>" + obj.list[x].noOfRooms + "</div>" +
									  	" <div class='head stylename' style='width:6%'>" + obj.list[x].landsizepersqf + "</div>" +
									  	" <div class='head stylename' style='width:5%'>" + obj.list[x].buapersqf + "</div>" +
									  	" <div class='head stylename' style='width:8%'>" + obj.list[x].mv + "</div>" +
									  	" <div class='head stylename' style='width:0%'>" + obj.list[x].mvpersqf + "</div>" +
									  
							    "</div>");
					}	
					$('.mfilter').append("" +
							"<div class='column boxlist' style='display:flex;height: 3% !important;line-height: 6px;background:bisque;color:#fff !important;margin-bottom:5px;border: 1px solid bisque;width: 99.5%;border-radius:5px;'>" +
							" <div class='head stylename' style='width:7.6%;color:black'>" + obj.dateAvg + "</div>" +
							" <div class='head stylename' style='width:8.8%;color:bisque'>" + obj.list[x].dateAvg + "</div>" +
							" <div class='head stylename' style='width:7%;color:black'>" + obj.tenureAvg + "</div>" +
							" <div class='head stylename' style='width:7%;color:black'>" + obj.locAvg + "</div>" +
						  	" <div class='head stylename' style='width:3%;color:black'>"+ obj.ageAvg + "</div>" +
						  	" <div class='head stylename' style='width:7%;color:black'>" + obj.viewAvg + "</div>" +
							" <div class='head stylename' style='width:7%;color:black'>" + obj.qualityAvg + "</div>" +
						  	" <div class='head stylename' style='width:7%;color:black'>" + obj.staAvg + "</div>" +
						  	" <div class='head stylename' style='width:6%;color:black'>" + obj.expAvg + "</div>" +
						  	" <div class='head stylename' style='width:7%;color:black'>" + obj.plaAvg + "</div>" +
							" <div class='head stylename' style='width:5%;color:black'>" + obj.floorAvg + "</div>" +
						  	" <div class='head stylename' style='width:5%;color:black'>" + obj.bedAvg+ "</div>" +
						  	" <div class='head stylename' style='width:6%;color:black'>" + landAvg + "</div>" +
						  	" <div cla" +
						  	"ss='head stylename' style='width:5%;color:black'>" + sizeAvg+ "</div>" +
						  	" <div class='head stylename' style='width:8%;color:black'>" + priceAvg + "</div>" +
						  	" <div class='head stylename' style='width:0%;color:black'>" + pricePerAvg + "</div>" +
				    "</div>");
					$('.mfilter').append("" +
							"<div class='column boxlist' style='display:flex;height: 3% !important;line-height: 6px;background:lightgoldenrodyellow;color:#fff !important;margin-bottom:5px;border: 1px solid lightgoldenrodyellow;width: 99.5%;border-radius:5px;'>" +
							" <div class='head stylename' style='width:18%;color:black'>" + "Count - "+ count + "</div>" +
							" <div class='head stylename' style='width:18%;color:black'>" + "Lowest Price - "+ lowprice + "</div>" +
						  	" <div class='head stylename' style='width:18%;color:black'>"+ "Highest Price - "+ highprice + "</div>" +
						  	" <div class='head stylename' style='width:18%;color:black'>" + "Lowest Price/Sqf - "+ lowpricepersq + "</div>" +
						  	" <div class='head stylename' style='width:18%;color:black'>" + "Highest Price/Sqf - "+ highpricepersq + "</div>" +
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