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
		 $('#vv-bedfrom').text("-");
	 }
	 if(bedto !=""){
		 $('#vv-bedto').text(bedto);
	 }
	 else{
		 $('#vv-bedto').text("-");
	 }
	 if(landfrom !=""){
		 $('#vv-landfrom').text(landfrom);
	 }
	 else{
		 $('#vv-landfrom').text("-");
	 }
	 if(landto !=""){
		 $('#vv-landto').text(landto);
	 }
	 else{
		 $('#vv-landto').text("-");
	 }
	 if(buafrom !=""){
		 $('#vv-buafrom').text(buafrom);
	 }
	 else{
		 $('#vv-buafrom').text("-");
	 }
	 if(buato !=""){
		 $('#vv-buato').text(buato);
	 }
	 else{
		 $('#vv-buato').text("-");
	 }
	 if(pricefrom !=""){
		 $('#vv-pricefrom').text(pricefrom);
	 }
	 else{
		 $('#vv-pricefrom').text("-");
	 }
	 if(priceto !=""){
		 $('#vv-priceto').text(priceto);
	 }
	 else{
		 $('#vv-priceto').text("-");
	 }
	 if(pricesqtfrom !=""){
		 $('#vv-pricesqtfrom').text(pricesqtfrom);
	 }
	 else{
		 $('#vv-pricesqtfrom').text("-");
	 }
	 if(pricesqtto !=""){
		 $('#vv-pricesqtto').text(pricesqtto);
	 }
	 else{
		 $('#vv-pricesqtto').text("-");
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
					var count = toComma(obj.count);
					var lowprice = toComma(obj.lowprice);
					var highprice = toComma(obj.highprice);
					var lowpricepersq = toComma(obj.lowpricepersq);
					var highpricepersq = toComma(obj.highpricepersq);
					if(landAvg === "NaN"){
						landAvg = "-";
					}
					var pricePerAvg = toComma(obj.pricePerAvg);
					var locvalue = null;
					var viewvalue = null;
					var stavalue = null;
					var expvalue = null;
					var plavalue = null;
					for (x in obj.list) {
						if(obj.list[x].location === "Very Good"){
							locvalue = "5"; 
						}
						if(obj.list[x].location === "Good"){
							locvalue = "4"; 
						}
						if(obj.list[x].location === "Average"){
							locvalue = "3"; 
						}
						if(obj.list[x].location === "Not Good"){
							locvalue = "2"; 
						}
						if(obj.list[x].location === "Poor"){
							locvalue = "1"; 
						}
						if(obj.list[x].view == "Park View" || obj.list[x].view == "Pool View" || obj.list[x].view == "Mountain View"){
							viewvalue = "5";
						}
						if(obj.list[x].view == "Sea View" || obj.list[x].view == "Marina View" || obj.list[x].view == "Lake View"){
							viewvalue = "5";
						}
						if(obj.list[x].view == "Partial Park View" || obj.list[x].view == "Partial Pool View" || obj.list[x].view == "Partial Mountain View"){
							viewvalue = "4";
						}
						if(obj.list[x].view == "Partial Sea View" || obj.list[x].view == "Partial Marina View" || obj.list[x].view == "Partial Lake View"){
							viewvalue = "4";
						}
						if(obj.list[x].view == "Community View"){
							viewvalue = "3";
						}
						if(obj.list[x].view == "Substandard View"){
							viewvalue = "2";
						}
						if(obj.list[x].view == "Poor View"){
							viewvalue = "1";
						}
						if(obj.list[x].finishStatus == "Shell & Core"){
							stavalue = "0";
						}
						if(obj.list[x].finishStatus == "Fitted"){
							stavalue = "1";
						}
						if(obj.list[x].propExposure == "Single Row"){
							expvalue = "1";
						}
						if(obj.list[x].propExposure == "Back To Back"){
							expvalue = "0";
						}
						if(obj.list[x].propExposure == "Not Applicable"){
							expvalue = "0";
						}
						if(obj.list[x].propPlacement == "Middle"){
							plavalue = "0";
						}
						if(obj.list[x].propPlacement == "Corner"){
							plavalue = "1";
						}
						if(obj.list[x].propPlacement == "Semi-Corner"){
							plavalue = "1.5";
						}
						if(obj.list[x].propPlacement == "Not Applicable"){
							plavalue = "0";
						}
						$('.lfilter').append("" +
								"<div id="+obj.list[x].transactionId+" class='column boxlist' style='width:99.5%;margin-bottom:5px;display:flex'>" +
									" <div class='head stylename' style='width:7.6%'>" + obj.list[x].listingsDate + "</div>" +
									" <div class='head stylename' style='width:8%'>" + obj.list[x].source + "</div>" +
									" <div class='head stylename' style='width:6.8%'>" + obj.list[x].listingsRef + "</div>" +
									" <div class='head stylename' style='width:8%'>" + obj.list[x].location +"("+locvalue+")"+"</div>" +
									  	" <div class='head stylename' style='width:3%'>" + obj.list[x].age + "</div>" +
									  	" <div class='head stylename' style='width:8%'>" + obj.list[x].view +"("+viewvalue+")"+"</div>" +
									  	" <div class='head stylename' style='width:8%'>" + obj.list[x].finishStatus +"("+stavalue+")"+"</div>" +
									  	" <div class='head stylename' style='width:9%'>" + obj.list[x].propExposure +"("+expvalue+")"+"</div>" +
									  	" <div class='head stylename' style='width:8%'>" + obj.list[x].propPlacement  +"("+plavalue+")"+"</div>" +
									  	" <div class='head stylename' style='width:5%'>" + obj.list[x].floorNo + "</div>" +
									  	" <div class='head stylename' style='width:5%'>" + obj.list[x].noOfBedrooms + "</div>" +
									  	" <div class='head stylename' style='width:6%'>" + obj.list[x].landSize + "</div>" +
									  	" <div class='head stylename' style='width:5%'>" + obj.list[x].bua + "</div>" +
									  	" <div class='head stylename' style='width:8%'>" + obj.list[x].price + "</div>" +
									  	" <div class='head stylename' style='width:0%'>" + obj.list[x].priceSqt + "</div>" +
									  
							    "</div>");
					}	
					$('.lfilter').append("" +
							"<div class='column boxlist' style='display:flex;height: 3% !important;line-height: 6px;background:bisque;color:#fff !important;margin-bottom:5px;border: 1px solid bisque;width: 99.5%;border-radius:5px;'>" +
							" <div class='head stylename' style='width:7.6%;color:black'>" + obj.dateAvg + "</div>" +
							" <div class='head stylename' style='width:7%;color:bisque'>" + obj.list[x].dateAvg + "</div>" +
							" <div class='head stylename' style='width:7.8%;color:bisque'>" + obj.list[x].dateAvg + "</div>" +
							" <div class='head stylename' style='width:8%;color:black'>" + obj.locAvg + "</div>" +
						  	" <div class='head stylename' style='width:3%;color:black'>"+ obj.ageAvg + "</div>" +
						  	" <div class='head stylename' style='width:8%;color:black'>" + obj.viewAvg + "</div>" +
						  	" <div class='head stylename' style='width:8%;color:black'>" + obj.staAvg + "</div>" +
						  	" <div class='head stylename' style='width:9%;color:black'>" + obj.expAvg + "</div>" +
						  	" <div class='head stylename' style='width:8%;color:black'>" + obj.plaAvg + "</div>" +
							" <div class='head stylename' style='width:5%;color:black'>" + obj.floorAvg + "</div>" +
						  	" <div class='head stylename' style='width:5%;color:black'>" + obj.bedAvg+ "</div>" +
						  	" <div class='head stylename' style='width:6%;color:black'>" + landAvg + "</div>" +
						  	" <div class='head stylename' style='width:5%;color:black'>" + sizeAvg+ "</div>" +
						  	" <div class='head stylename' style='width:8%;color:black'>" + priceAvg + "</div>" +
						  	" <div class='head stylename' style='width:0%;color:black'>" + pricePerAvg + "</div>" +
				    "</div>");
					$('.lfilter').append("" +
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