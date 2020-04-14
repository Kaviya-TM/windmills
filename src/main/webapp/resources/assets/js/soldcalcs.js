var locWeight = null;
var viewWeight = null; 
var quaWeight = null;
var floorWeight = null;
var landWeight = null;
var buaWeight = null;
var dateWeight = null;
var expWeight = null;
var plaWeight = null;
var staWeight = null;
var bedWeight = null;
var furWeight = null;
var balWeight = null;
var upgradeWeight = null;
var priceAvg = null;
var pricePerAvg = null;
var landAvg = null;
var adjloc = null;
var adjview = null;
var adjqua = null;
var adjfloor = null;
var adjbua = null;
var adjbed = null;
var adjexp= null;
var adjpla = null;
var adjsta = null;
var adjdate = null;
var finalValue = null;

$("#weiloc").keyup(function(){
	var value = $(this).val();
	if(value != locWeight){
		$('#chaloc').show();
		$('#chaloc').text(locWeight);
		adjloc =  parseInt(($('#diffloc').val()).replace(/,/g , ''))  * parseFloat(($("#weiloc").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
		$('#adjloc').val(toComma(adjloc));
		if(landAvg == "-"){
			   var marketValue = parseInt(priceAvg)+ parseInt(adjbal.toString().replace(/,/g , ''))  +parseInt(adjupg.toString().replace(/,/g , '')) +  parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , ''))  + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 else{
			   var marketValue = parseInt(priceAvg)+ parseInt(adjbal.toString().replace(/,/g , ''))  +parseInt(adjupg.toString().replace(/,/g , '')) +  parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , ''))  + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 finalValue = parseInt(parseInt(($('#marketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
		 $('#finalvalue').val(toComma(finalValue));
	}
	else{
		$('#chaloc').hide();
        adjloc =  parseInt(($('#diffloc').val()).replace(/,/g , ''))  * parseFloat(($("#weiloc").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
		$('#adjloc').val(toComma(adjloc));
		if(landAvg == "-"){
			   var marketValue = parseInt(priceAvg)+ parseInt(adjbal.toString().replace(/,/g , ''))  +parseInt(adjupg.toString().replace(/,/g , '')) +  parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , ''))  + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 else{
			   var marketValue = parseInt(priceAvg)+ parseInt(adjbal.toString().replace(/,/g , ''))  +parseInt(adjupg.toString().replace(/,/g , '')) +  parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , ''))  + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		finalValue = parseInt(parseInt(($('#marketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
		 $('#finalvalue').val(toComma(finalValue));
	}
});
$("#avgbal").keyup(function(){
	var diffbal = parseInt($('#subbal').val()) - parseInt($(this).val());
    $('#diffbal').val(diffbal);
		adjbal =  parseInt(($('#diffbal').val()).replace(/,/g , ''))  * parseFloat(($("#weibal").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
		$('#adjbal').val(toComma(adjbal));
		if(landAvg == "-"){
			   var marketValue = parseInt(priceAvg)+ parseInt(adjbal.toString().replace(/,/g , ''))  +parseInt(adjupg.toString().replace(/,/g , '')) +  parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , ''))  + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 else{
			   var marketValue = parseInt(priceAvg)+ parseInt(adjbal.toString().replace(/,/g , ''))  +parseInt(adjupg.toString().replace(/,/g , '')) +  parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , ''))  + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 finalValue = parseInt(parseInt(($('#marketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
		 $('#finalvalue').val(toComma(finalValue));
});
$("#weibal").keyup(function(){
	var value = $(this).val();
	if(value != balWeight){
		$('#chabal').show();
		$('#chabal').text(balWeight);
		adjbal =  parseInt(($('#diffbal').val()).replace(/,/g , ''))  * parseFloat(($("#weibal").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
		$('#adjbal').val(toComma(adjbal));
		if(landAvg == "-"){
			   var marketValue = parseInt(priceAvg)+ parseInt(adjbal.toString().replace(/,/g , ''))  +parseInt(adjupg.toString().replace(/,/g , '')) +  parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , ''))  + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 else{
			   var marketValue = parseInt(priceAvg)+ parseInt(adjbal.toString().replace(/,/g , ''))  +parseInt(adjupg.toString().replace(/,/g , '')) +  parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , ''))  + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 finalValue = parseInt(parseInt(($('#marketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
		 $('#finalvalue').val(toComma(finalValue));
	}
	else{
		$('#chabal').hide();
        adjbal =  parseInt(($('#diffbal').val()).replace(/,/g , ''))  * parseFloat(($("#weibal").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
		$('#adjbal').val(toComma(adjbal));
		if(landAvg == "-"){
			   var marketValue = parseInt(priceAvg)+ parseInt(adjbal.toString().replace(/,/g , ''))  +parseInt(adjupg.toString().replace(/,/g , '')) +  parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , ''))  + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 else{
			   var marketValue = parseInt(priceAvg)+ parseInt(adjbal.toString().replace(/,/g , ''))  +parseInt(adjupg.toString().replace(/,/g , '')) +  parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , ''))  + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		finalValue = parseInt(parseInt(($('#marketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
		 $('#finalvalue').val(toComma(finalValue));
	}
});
$("#weiview").keyup(function(){
	var value = $(this).val();
	if(value != viewWeight){
		$('#chaview').show();
		$('#chaview').text(viewWeight);
		adjview =  parseInt(($('#diffview').val()).replace(/,/g , ''))  * parseFloat(($("#weiview").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
		$('#adjview').val(toComma(adjview));
		if(landAvg == "-"){
			   var marketValue = parseInt(priceAvg)+ parseInt(adjbal.toString().replace(/,/g , ''))  + parseInt(adjupg.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , ''))  + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 else{
			   var marketValue = parseInt(priceAvg)+ parseInt(adjbal.toString().replace(/,/g , ''))  +parseInt(adjupg.toString().replace(/,/g , '')) +  parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , ''))  + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		finalValue = parseInt(parseInt(($('#marketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
		 $('#finalvalue').val(toComma(finalValue));
	}
	else{
		$('#chaview').hide();
		adjview =  parseInt(($('#diffview').val()).replace(/,/g , ''))  * parseFloat(($("#weiview").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
		$('#adjview').val(toComma(adjview));
		if(landAvg == "-"){
			   var marketValue = parseInt(priceAvg)+ parseInt(adjbal.toString().replace(/,/g , ''))  +parseInt(adjupg.toString().replace(/,/g , '')) +  parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , ''))  + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 else{
			   var marketValue = parseInt(priceAvg)+ parseInt(adjbal.toString().replace(/,/g , ''))  + parseInt(adjupg.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , ''))  + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 finalValue = parseInt(parseInt(($('#marketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
		 $('#finalvalue').val(toComma(finalValue));
		
	}
});
$("#weiqua").keyup(function(){
	var value = $(this).val();
	if(value != quaWeight){
		$('#chaqua').show();
		$('#chaqua').text(quaWeight);
		adjqua =  parseInt(($('#diffqua').val()).replace(/,/g , ''))  * parseFloat(($("#weiqua").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
		$('#adjqua').val(toComma(adjqua));
		if(landAvg == "-"){
			   var marketValue = parseInt(priceAvg)+ parseInt(adjbal.toString().replace(/,/g , ''))  +parseInt(adjupg.toString().replace(/,/g , '')) +  parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , ''))  + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 else{
			   var marketValue = parseInt(priceAvg)+ parseInt(adjbal.toString().replace(/,/g , ''))  +parseInt(adjupg.toString().replace(/,/g , '')) +  parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , ''))  + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 finalValue = parseInt(parseInt(($('#marketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
		 $('#finalvalue').val(toComma(finalValue));
	}
	else{
		$('#chaqua').hide();
		adjqua =  parseInt(($('#diffqua').val()).replace(/,/g , ''))  * parseFloat(($("#weiqua").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
		$('#adjqua').val(toComma(adjqua));
		if(landAvg == "-"){
			   var marketValue = parseInt(priceAvg) + parseInt(adjbal.toString().replace(/,/g , '')) +parseInt(adjupg.toString().replace(/,/g , '')) +  parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , ''))  + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 else{
			   var marketValue = parseInt(priceAvg) + parseInt(adjbal.toString().replace(/,/g , '')) + parseInt(adjupg.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , ''))  + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 finalValue = parseInt(parseInt(($('#marketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
		 $('#finalvalue').val(toComma(finalValue));
	}
});
$("#weifloor").keyup(function(){
	var value = $(this).val();
	if(value != floorWeight){
		$('#chafloor').show();
		$('#chafloor').text(floorWeight);
		adjfloor =  parseFloat(($('#difffloor').val()).replace(/,/g , ''))  * parseFloat(($("#weifloor").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
		$('#adjfloor').val(toComma(adjfloor));
		if(landAvg == "-"){
			   var marketValue = parseInt(priceAvg) + parseInt(adjbal.toString().replace(/,/g , '')) + parseInt(adjupg.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , ''))  + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 else{
			   var marketValue = parseInt(priceAvg) + parseInt(adjbal.toString().replace(/,/g , '')) +parseInt(adjupg.toString().replace(/,/g , '')) +  parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , ''))  + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 finalValue = parseInt(parseInt(($('#marketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
		 $('#finalvalue').val(toComma(finalValue));
		
	}
	else{
		$('#chafloor').hide();
		adjfloor =  parseFloat(($('#difffloor').val()).replace(/,/g , ''))  * parseFloat(($("#weifloor").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
		$('#adjfloor').val(toComma(adjfloor));
		if(landAvg == "-"){
			   var marketValue = parseInt(priceAvg)+ parseInt(adjbal.toString().replace(/,/g , ''))  +parseInt(adjupg.toString().replace(/,/g , '')) +  parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , ''))  + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 else{
			   var marketValue = parseInt(priceAvg) + parseInt(adjbal.toString().replace(/,/g , '')) +parseInt(adjupg.toString().replace(/,/g , '')) +  parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , ''))  + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 finalValue = parseInt(parseInt(($('#marketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
		 $('#finalvalue').val(toComma(finalValue));
	}
});
$("#weiupg").keyup(function(){
	var value = $(this).val();
	if(value != upgradeWeight){
		$('#chaupg').show();
		$('#chaupg').text(upgradeWeight);
		adjupg =  parseInt(($('#diffupg').val()).replace(/,/g , ''))  * parseFloat(($("#weiupg").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
		$('#adjupg').val(toComma(adjupg));
		if(landAvg == "-"){
			   var marketValue = parseInt(priceAvg)+ parseInt(adjbal.toString().replace(/,/g , ''))  +parseInt(adjupg.toString().replace(/,/g , '')) +  parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , ''))  + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 else{
			   var marketValue = parseInt(priceAvg)+ parseInt(adjbal.toString().replace(/,/g , ''))  +parseInt(adjupg.toString().replace(/,/g , '')) +  parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , ''))  + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 finalValue = parseInt(parseInt(($('#marketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
		 $('#finalvalue').val(toComma(finalValue));
	}
	else{
		$('#chaupg').hide();
		adjupg =  parseInt(($('#diffupg').val()).replace(/,/g , ''))  * parseFloat(($("#weiupg").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
		$('#adjupg').val(toComma(adjupg));
		if(landAvg == "-"){
			   var marketValue = parseInt(priceAvg) + parseInt(adjbal.toString().replace(/,/g , '')) + parseInt(adjupg.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , ''))  + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 else{
			   var marketValue = parseInt(priceAvg)+ parseInt(adjbal.toString().replace(/,/g , ''))  +parseInt(adjupg.toString().replace(/,/g , '')) +  parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , ''))  + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 finalValue = parseInt(parseInt(($('#marketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
		 $('#finalvalue').val(toComma(finalValue));
	}
});
$("#weibua").keyup(function(){
	var value = $(this).val();
	if(value != buaWeight){
		$('#chabua').show();
		$('#chabua').text(buaWeight);
		adjbua =  parseInt(($('#diffbua').val()).replace(/,/g , ''))  * parseFloat(($("#weibua").val()).replace(/%/g , '')) * parseInt(pricePerAvg) / 100;
		$('#adjbua').val(toComma(adjbua));
		if(landAvg == "-"){
			   var marketValue = parseInt(priceAvg) + parseInt(adjbal.toString().replace(/,/g , '')) +parseInt(adjupg.toString().replace(/,/g , '')) +  parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , ''))  + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 else{
			   var marketValue = parseInt(priceAvg)+ parseInt(adjbal.toString().replace(/,/g , ''))  +parseInt(adjupg.toString().replace(/,/g , '')) +  parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , ''))  + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 finalValue = parseInt(parseInt(($('#marketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
		 $('#finalvalue').val(toComma(finalValue));
	}
	else{
		$('#chabua').hide();
		adjbua =  parseInt(($('#diffbua').val()).replace(/,/g , ''))  * parseFloat(($("#weibua").val()).replace(/%/g , '')) * parseInt(pricePerAvg) / 100;
		$('#adjbua').val(toComma(adjbua));
		if(landAvg == "-"){
			   var marketValue = parseInt(priceAvg)+ parseInt(adjbal.toString().replace(/,/g , ''))  + parseInt(adjupg.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , ''))  + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 else{
			   var marketValue = parseInt(priceAvg) + parseInt(adjbal.toString().replace(/,/g , '')) +parseInt(adjupg.toString().replace(/,/g , '')) +  parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , ''))  + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 finalValue = parseInt(parseInt(($('#marketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
		 $('#finalvalue').val(toComma(finalValue));
	}
});
$("#weiland").keyup(function(){
	var value = $(this).val();
	if(value != landWeight){
		$('#chaland').show();
		$('#chaland').text(landWeight);
		adjland =  parseInt(($('#diffland').val()).replace(/,/g , ''))  * parseFloat(($("#weiland").val()).replace(/%/g , '')) * parseInt(pricePerAvg) / 100;
		$('#adjland').val(toComma(adjland));
		if(landAvg == "-"){
			   var marketValue = parseInt(priceAvg) + parseInt(adjbal.toString().replace(/,/g , '')) + parseInt(adjupg.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , ''))  + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 else{
			   var marketValue = parseInt(priceAvg) + parseInt(adjbal.toString().replace(/,/g , '')) + parseInt(adjupg.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , ''))  + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 finalValue = parseInt(parseInt(($('#marketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
		 $('#finalvalue').val(toComma(finalValue));
	}
	else{
		$('#chaland').hide();
		adjland =  parseInt(($('#diffland').val()).replace(/,/g , ''))  * parseFloat(($("#weiland").val()).replace(/%/g , '')) * parseInt(pricePerAvg) / 100;
		$('#adjland').val(toComma(adjland));
		if(landAvg == "-"){
			   var marketValue = parseInt(priceAvg)+ parseInt(adjbal.toString().replace(/,/g , ''))  +parseInt(adjupg.toString().replace(/,/g , '')) +  parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , ''))  + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 else{
			   var marketValue = parseInt(priceAvg) + parseInt(adjbal.toString().replace(/,/g , '')) +parseInt(adjupg.toString().replace(/,/g , '')) +  parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , ''))  + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 finalValue = parseInt(parseInt(($('#marketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
		 $('#finalvalue').val(toComma(finalValue));
	}
});
$("#weibed").keyup(function(){
	var value = $(this).val();
	if(value != bedWeight){
		$('#chabed').show();
		$('#chabed').text(bedWeight);
		adjbed =  parseInt(($('#diffbed').val()).replace(/,/g , ''))  * parseFloat(($("#weibed").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
		$('#adjbed').val(toComma(adjbed));
		if(landAvg == "-"){
			   var marketValue = parseInt(priceAvg)+ parseInt(adjbal.toString().replace(/,/g , ''))  +parseInt(adjupg.toString().replace(/,/g , '')) +  parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , ''))  + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 else{
			   var marketValue = parseInt(priceAvg)+ parseInt(adjbal.toString().replace(/,/g , ''))  + parseInt(adjupg.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , ''))  + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 finalValue = parseInt(parseInt(($('#marketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
		 $('#finalvalue').val(toComma(finalValue));
	}
	else{
		$('#chabed').hide();
		adjbed =  parseInt(($('#diffbed').val()).replace(/,/g , ''))  * parseFloat(($("#weibed").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
		$('#adjbed').val(toComma(adjbed));
		if(landAvg == "-"){
			   var marketValue = parseInt(priceAvg) + parseInt(adjbal.toString().replace(/,/g , '')) +parseInt(adjupg.toString().replace(/,/g , '')) +  parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , ''))  + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 else{
			   var marketValue = parseInt(priceAvg) + parseInt(adjbal.toString().replace(/,/g , '')) + parseInt(adjupg.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , ''))  + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 finalValue = parseInt(parseInt(($('#marketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
		 $('#finalvalue').val(toComma(finalValue));
	}
});
$("#weista").keyup(function(){
	var value = $(this).val();
	if(value != staWeight){
		$('#chasta').show();
		$('#chasta').text(staWeight);
		adjsta =  parseInt(($('#diffsta').val()).replace(/,/g , ''))  * parseFloat(($("#weista").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
		$('#adjsta').val(toComma(adjsta));
		if(landAvg == "-"){
			   var marketValue = parseInt(priceAvg)+ parseInt(adjbal.toString().replace(/,/g , ''))  +parseInt(adjupg.toString().replace(/,/g , '')) +  parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , ''))  + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 else{
			   var marketValue = parseInt(priceAvg) + parseInt(adjbal.toString().replace(/,/g , '')) +parseInt(adjupg.toString().replace(/,/g , '')) +  parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , ''))  + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 finalValue = parseInt(parseInt(($('#marketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
		 $('#finalvalue').val(toComma(finalValue));
	}
	else{
		$('#chasta').hide();
		adjsta =  parseInt(($('#diffsta').val()).replace(/,/g , ''))  * parseFloat(($("#weista").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
		$('#adjsta').val(toComma(adjsta));
		if(landAvg == "-"){
			   var marketValue = parseInt(priceAvg) + parseInt(adjbal.toString().replace(/,/g , '')) + parseInt(adjupg.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , ''))  + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 else{
			   var marketValue = parseInt(priceAvg) + parseInt(adjbal.toString().replace(/,/g , '')) + parseInt(adjupg.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , ''))  + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 finalValue = parseInt(parseInt(($('#marketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
		 $('#finalvalue').val(toComma(finalValue));
	}
});
$("#weipla").keyup(function(){
	var value = $(this).val();
	if(value != plaWeight){
		$('#chapla').show();
		$('#chapla').text(plaWeight);
		adjpla =  parseFloat(($('#diffpla').val()).replace(/,/g , ''))  * parseFloat(($("#weipla").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
		$('#adjpla').val(toComma(adjpla));
		if(landAvg == "-"){
			   var marketValue = parseInt(priceAvg) + parseInt(adjbal.toString().replace(/,/g , '')) +parseInt(adjupg.toString().replace(/,/g , '')) +  parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , ''))  + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 else{
			   var marketValue = parseInt(priceAvg) + parseInt(adjbal.toString().replace(/,/g , '')) +parseInt(adjupg.toString().replace(/,/g , '')) +  parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , ''))  + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 finalValue = parseInt(parseInt(($('#marketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
		 $('#finalvalue').val(toComma(finalValue));
	}
	else{
		$('#chapla').hide();
		adjpla =  parseFloat(($('#diffpla').val()).replace(/,/g , ''))  * parseFloat(($("#weipla").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
		$('#adjpla').val(toComma(adjpla));
		if(landAvg == "-"){
			   var marketValue = parseInt(priceAvg) + parseInt(adjbal.toString().replace(/,/g , '')) +parseInt(adjupg.toString().replace(/,/g , '')) +  parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , ''))  + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 else{
			   var marketValue = parseInt(priceAvg) + parseInt(adjbal.toString().replace(/,/g , '')) +parseInt(adjupg.toString().replace(/,/g , '')) +  parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , ''))  + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 finalValue = parseInt(parseInt(($('#marketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
		 $('#finalvalue').val(toComma(finalValue));
	}
});
$("#weifur").keyup(function(){
	var value = $(this).val();
	if(value != plaWeight){
		$('#chafur').show();
		$('#chafur').text(plaWeight);
		adjfur =  parseFloat(($('#difffur').val()).replace(/,/g , ''))  * parseFloat(($("#weifur").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
		$('#adjfur').val(toComma(adjfur));
		if(landAvg == "-"){
			   var marketValue = parseInt(priceAvg) + parseInt(adjbal.toString().replace(/,/g , '')) +parseInt(adjupg.toString().replace(/,/g , '')) +  parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+ parseInt(adjfur.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , ''))  + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 else{
			   var marketValue = parseInt(priceAvg) + parseInt(adjbal.toString().replace(/,/g , '')) +parseInt(adjupg.toString().replace(/,/g , '')) +  parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+  parseInt(adjfur.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , ''))  + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 finalValue = parseInt(parseInt(($('#marketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
		 $('#finalvalue').val(toComma(finalValue));
	}
	else{
		$('#chafur').hide();
		adjfur =  parseFloat(($('#difffur').val()).replace(/,/g , ''))  * parseFloat(($("#weifur").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
		$('#adjfur').val(toComma(adjfur));
		if(landAvg == "-"){
			   var marketValue = parseInt(priceAvg)+ parseInt(adjbal.toString().replace(/,/g , ''))  + parseInt(adjupg.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , ''))+ parseInt(adjfur.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , ''))  + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 else{
			   var marketValue = parseInt(priceAvg)+ parseInt(adjbal.toString().replace(/,/g , ''))  + parseInt(adjupg.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , '')) +  parseInt(adjfur.toString().replace(/,/g , ''))+ parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , ''))  + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 finalValue = parseInt(parseInt(($('#marketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
		 $('#finalvalue').val(toComma(finalValue));
	}
});
$("#weiexp").keyup(function(){
	var value = $(this).val();
	if(value != expWeight){
		$('#chaexp').show();
		$('#chaexp').text(expWeight);
		adjexp =  parseFloat(($('#diffexp').val()).replace(/,/g , ''))  * parseFloat(($("#weiexp").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
		$('#adjexp').val(toComma(adjexp));
		if(landAvg == "-"){
			   var marketValue = parseInt(priceAvg) + parseInt(adjbal.toString().replace(/,/g , '')) + parseInt(adjupg.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , ''))  + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 else{
			   var marketValue = parseInt(priceAvg)+ parseInt(adjbal.toString().replace(/,/g , ''))  +parseInt(adjupg.toString().replace(/,/g , '')) +  parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , ''))  + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 finalValue = parseInt(parseInt(($('#marketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
		 $('#finalvalue').val(toComma(finalValue));
		 
	}
	else{
		$('#chaexp').hide();
		var adjexp =  parseFloat(($('#diffexp').val()).replace(/,/g , ''))  * parseFloat(($("#weiexp").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
		$('#adjexp').val(toComma(adjexp));
		if(landAvg == "-"){
			   var marketValue = parseInt(priceAvg) + parseInt(adjbal.toString().replace(/,/g , '')) +parseInt(adjupg.toString().replace(/,/g , '')) +  parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , ''))  + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 else{
			   var marketValue = parseInt(priceAvg) + parseInt(adjbal.toString().replace(/,/g , '')) +parseInt(adjupg.toString().replace(/,/g , '')) +  parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , ''))  + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 finalValue = parseInt(parseInt(($('#marketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
		 $('#finalvalue').val(toComma(finalValue));
	}
});
$("#weidate").keyup(function(){
	var value = $(this).val();
	if(value != dateWeight){
		$('#chadate').show();
		$('#chadate').text(dateWeight);
		adjdate =  parseFloat(value.replace(/%/g , '')) * parseInt(priceAvg) * (16 / 30) / 100;
		$('#adjdate').val(toComma(adjdate));
		if(landAvg == "-"){
			   var marketValue = parseInt(priceAvg) + parseInt(adjbal.toString().replace(/,/g , '')) +parseInt(adjupg.toString().replace(/,/g , '')) +  parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , ''))  + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 else{
			   var marketValue = parseInt(priceAvg) + parseInt(adjbal.toString().replace(/,/g , '')) +parseInt(adjupg.toString().replace(/,/g , '')) +  parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , ''))  + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 finalValue = parseInt(parseInt(($('#marketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
		 $('#finalvalue').val(toComma(finalValue));
	}
	else{
		$('#chadate').hide();
		adjdate = parseFloat(value.replace(/%/g , '')) * parseInt(priceAvg) * (16 / 30) / 100;
		$('#adjdate').val(toComma(adjdate));
		if(landAvg == "-"){
			   var marketValue = parseInt(priceAvg) + parseInt(adjbal.toString().replace(/,/g , '')) +parseInt(adjupg.toString().replace(/,/g , '')) +  parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , ''))  + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 else{
			   var marketValue = parseInt(priceAvg) + parseInt(adjbal.toString().replace(/,/g , '')) +parseInt(adjupg.toString().replace(/,/g , '')) +  parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
				parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , ''))  + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
			   $('#marketvalue').val(toComma(marketValue));
		 }
		 finalValue = parseInt(parseInt(($('#marketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
		 $('#finalvalue').val(toComma(finalValue));
	}
});

$("#average").click(function(){
	   var propertyType=$('#propertyvalued').val();
	   	 var city=$('#s-city').val(); 
		 var area=$('#s-community').val(); 
		 var neighbourhood=$('#s-subcommunity').val(); 
		 var buildingName=$('#s-buildingName').val(); 
		 var bedfrom=$('#bedfrom').val(); 
		 var bedto=$('#bedto').val(); 
		 var landfrom=$('#landfrom').val(); 
		 var landto=$('#landto').val(); 
		 var buafrom=$('#buafrom').val(); 
		 var buato=$('#buato').val(); 
		 var pricefrom=$('#pricefrom').val(); 
		 var priceto=$('#priceto').val(); 
		 var pricesqtfrom=$('#pricesqtfrom').val(); 
		 var pricesqtto=$('#pricesqtto').val(); 
		 var datefrom=$('#datefrom').val(); 
		 var dateto=$('#dateto').val(); 
		 var propList=$('#s-propList').val(); 
		 $('#ecommunity').val(area);
		 $('#ebuidingName').val(buildingName);
		 $('#epropertyType').val(propertyType);
		 $('#vc-wr').text($('#reference').val());
		 $('#vc-vd').text($('#valDate').val());
		 $('#vc-property').text(propList);
		 $('#vc-datefrom').text(datefrom);
		 $('#vc-dateto').text(dateto);
		 $('#vc-buildingName').text(buildingName);
		 $('#vc-subCommunity').text(neighbourhood);
		 $('#vc-community').text(area);
		 $('#vc-city').text(city);
		 if($('#landPrice').val() != ''){
			 $('#clandprice').text(toComma($('#landPrice').val()));
		 }
		 else{
			 $('#clandprice').text(" -");
		 }
		 if(bedfrom != ""){
			 $('#vc-bedfrom').text(bedfrom);
		 }
		 else{
			 $('#vc-bedfrom').text("-");
		 }
		 if(bedto !=""){
			 $('#vc-bedto').text(bedto);
		 }
		 else{
			 $('#vc-bedto').text("-");
		 }
		 if(landfrom !=""){
			 $('#vc-landfrom').text(landfrom);
		 }
		 else{
			 $('#vc-landfrom').text("-");
		 }
		 if(landto !=""){
			 $('#vc-landto').text(landto);
		 }
		 else{
			 $('#vc-landto').text("-");
		 }
		 if(buafrom !=""){
			 $('#vc-buafrom').text(buafrom);
		 }
		 else{
			 $('#vc-buafrom').text("-");
		 }
		 if(buato !=""){
			 $('#vc-buato').text(buato);
		 }
		 else{
			 $('#vc-buato').text("-");
		 }
		 if(pricefrom !=""){
			 $('#vc-pricefrom').text(pricefrom);
		 }
		 else{
			 $('#vc-pricefrom').text("-");
		 }
		 if(priceto !=""){
			 $('#vc-priceto').text(priceto);
		 }
		 else{
			 $('#vc-priceto').text("-");
		 }
		 if(pricesqtfrom !=""){
			 $('#vc-pricesqtfrom').text(pricesqtfrom);
		 }
		 else{
			 $('#vc-pricesqtfrom').text("-");
		 }
		 if(pricesqtto !=""){
			 $('#vc-pricesqtto').text(pricesqtto);
		 }
		 else{
			 $('#vc-pricesqtto').text("-");
		 }
	   $.ajax({	
			url : 'filter-transac',
			dataType: "text",
			asyn: true,
			data : {city : city,area:area,neighbourhood:neighbourhood,buildingName:buildingName,bedfrom:bedfrom,bedto:bedto,
				landfrom:landfrom,landto:landto,buafrom:buafrom,buato:buato,pricefrom:pricefrom,priceto:priceto,
				pricesqtfrom:pricesqtfrom,pricesqtto:pricesqtto,datefrom:datefrom,dateto:dateto,propList:propList},
			method : 'POST',
			success : function(response) {	
				var obj = $.parseJSON(response);
			    priceAvg = obj.priceAvg;
			    pricePerAvg = obj.pricePerAvg;
				var sizeAvg = obj.sizeAvg;
				var dateAvg = obj.dateAvg;
				var bedAvg = obj.bedAvg;
				landAvg = obj.landAvg;
				var lessThan1Month = obj.lessThan1Month;
				var lessThan2Month = obj.lessThan2Month;
				var lessThan3Month = obj.lessThan3Month;
				var lessThan4Month = obj.lessThan4Month;
				var lessThan5Month = obj.lessThan5Month;
				var lessThan6Month = obj.lessThan6Month;
				var lessThan7Month = obj.lessThan7Month;
				var lessThan8Month = obj.lessThan8Month;
				var lessThan9Month = obj.lessThan9Month;
				var lessThan10Month = obj.lessThan10Month;
				var lessThan11Month = obj.lessThan11Month;
				var lessThan12Month = obj.lessThan12Month;
				expWeight = obj.expWeight;
				plaWeight = obj.plaWeight;
				staWeight = obj.staWeight;
				bedWeight = obj.bedWeight;
				furWeight = obj.furWeight;
				upgradeWeight = obj.upgradeWeight;
				balWeight = obj.balWeight;
				locWeight = obj.locWeight;
				viewWeight = obj.viewWeight;
				quaWeight = obj.quaWeight;
				floorWeight = obj.floorWeight;
				landWeight = obj.landWeight;
				buaWeight = obj.buaWeight;
				var bau = $('#buitUpAreaSize').val();
				var location = $('#location').val();
				var quality = $('#quality').val();
				var view = $('#view').val();
				var floorNo =  $('#floorno').val();
				var fullBulFloors =  $('#fullBulFloors').val();
				$('#edate').val(dateAvg);
				$('#ebed').val(bedAvg);
				$('#esizeavg').val(toComma(sizeAvg));
				$('#epriceavg').val(toComma(priceAvg));
				$('#epriceavg').val(toComma(priceAvg));
				$('#epriceavgper').val(toComma(pricePerAvg));
				if(landAvg != "-"){
					 $('#elandavg').val(toComma(landAvg));
				}
				$('#weiloc').val(locWeight);
				$('#weiview').val(viewWeight);
				$('#weiqua').val(quaWeight);
				$('#weifloor').val(floorWeight);
				$('#weiland').val(landWeight);
				$('#weibua').val(buaWeight);
				$('#weibed').val(bedWeight);
				$('#weiexp').val(expWeight);
				$('#weipla').val(plaWeight);
				$('#weista').val(staWeight);
				$('#weifur').val(furWeight);
				$('#weibal').val(balWeight);
				$('#weiupg').val(upgradeWeight);
				// location//
				var subloc = calAvg(location);
				$('#subloc').val(subloc);
			    var diffloc = parseInt($('#subloc').val()) - parseInt($('#avgloc').val());
			    $('#diffloc').val(diffloc);
			     adjloc = parseInt(($('#diffloc').val()).replace(/,/g , '')) * parseFloat(locWeight.replace(/%/g , '')) * parseInt(priceAvg) / 100;
			    $('#adjloc').val(toComma(adjloc));
			    // quality//
			    var subqua = calAvg(quality);
			    $('#subqua').val(subqua);
			    var diffqua = parseInt($('#subqua').val()) - parseInt($('#avgqua').val());
			    $('#diffqua').val(diffqua);
			     adjqua = parseInt(($('#diffqua').val()).replace(/,/g , ''))  * parseFloat(quaWeight.replace(/%/g , ''))  * parseInt(priceAvg) / 100;
			    $('#adjqua').val(toComma(adjqua));
			    // view//
			    var subview = calView(view);
			    $('#subview').val(subview);
			    var diffview = parseInt($('#subview').val()) - parseInt($('#avgview').val());
			    $('#diffview').val(diffview);
			     adjview = parseInt(($('#diffview').val()).replace(/,/g , ''))  * parseFloat(viewWeight.replace(/%/g , '')) * parseInt(priceAvg) / 100;
			    $('#adjview').val(toComma(adjview));
			    // upgrades//
			    $('#subupg').val($('#overupg').val());
			    var diffupg = parseInt($('#subupg').val()) - parseInt($('#avgupg').val());
			    $('#diffupg').val(diffupg);
			    adjupg = parseInt(($('#diffupg').val()).replace(/,/g , ''))  * parseFloat(upgradeWeight.replace(/%/g , '')) * parseInt(priceAvg) / 100;
			    $('#adjupg').val(toComma(adjupg));
			    // balsize//
			    $('#avgbal').val($('#balsize').val());
			    $('#subbal').val($('#balsize').val());
			    var diffbal = parseInt($('#subbal').val()) - parseInt($('#avgbal').val());
			    $('#diffbal').val(diffbal);
			    adjbal = parseInt(($('#diffbal').val()).replace(/,/g , ''))  * parseFloat(balWeight.replace(/%/g , '')) * parseInt(priceAvg) / 100;
			    $('#adjbal').val(toComma(adjbal));
			    //floor//
				var suffix = fullBulFloors.match(/\d+/);
				if(suffix){
					suffix = parseFloat(parseFloat(suffix[0]) / 2);
					suffix = suffix.toString();
					$('#avgfloor').val(suffix);
				}
				$('#subfloor').val(floorNo);
				var difffloor = parseFloat($('#subfloor').val() - $('#avgfloor').val());
				$('#difffloor').val(difffloor);
				 adjfloor = parseFloat(($('#difffloor').val()).replace(/,/g , ''))  * parseFloat(floorWeight.replace(/%/g , '')) * parseInt(priceAvg) / 100;
				$('#adjfloor').val(toComma(adjfloor));
				//LandSize//
				if(landAvg != "-"){
					 $('#avgland').val(toComma(landAvg));
					 $('#subland').val(toComma($('#landSize').val()));
					 var diffland = parseInt($('#landSize').val()) - parseInt(landAvg);
					 $('#diffland').val(toComma(diffland));
					 var adjland = parseInt(($('#diffland').val()).replace(/,/g , ''))  * parseFloat(landWeight.replace(/%/g , '')) * parseInt(pricePerAvg) / 100;
					 $('#adjland').val(toComma(adjland));
				}else{
					$('#avgland').val(landAvg);
					$('#subland').val(landAvg);
					$('#diffland').val(landAvg);
					$('#adjland').val(landAvg);
					$('#elandavg').val(landAvg);
					$('#weiland').val(landAvg);
				}
				//bua//
				 $('#avgbua').val(toComma(sizeAvg));
				 $('#subbua').val(toComma($('#buitUpAreaSize').val()));
				 var diffbua =  parseInt($('#buitUpAreaSize').val()) - parseInt(sizeAvg);
				 $('#diffbua').val(toComma(diffbua));
				  adjbua =  parseInt(($('#diffbua').val()).replace(/,/g , ''))  * parseFloat(buaWeight.replace(/%/g , '')) * parseInt(pricePerAvg) / 100;
				 $('#adjbua').val(toComma(adjbua));
				 //date//
				 $('#avgdate').val(dateAvg);
				 $('#subdate').val($('#insdate').val());
				 var diffdate = calDate($('#avgdate').val(),$('#subdate').val());
				 $('#diffdate').val(toComma(diffdate));
				 if( diffdate <= 30 ){
					 dateWeight = lessThan1Month;
					 $('#weidate').val(lessThan1Month);
					  adjdate = parseFloat(lessThan1Month.replace(/%/g , '')) * parseInt(priceAvg) * (16 / 30) / 100;
					 $('#adjdate').val(toComma(adjdate));
				 }
				 if( diffdate <= 60 && diffdate > 30){
					 dateWeight = lessThan2Month;
					 $('#weidate').val(lessThan2Month);
					  adjdate = parseFloat(lessThan2Month.replace(/%/g , '')) * parseInt(priceAvg) * (16 / 30) / 100;
					 $('#adjdate').val(toComma(adjdate));
				 }
				 if( diffdate <= 90 && diffdate > 60){
					 dateWeight = lessThan3Month;
					 $('#weidate').val(lessThan3Month);
					  adjdate = parseFloat(lessThan3Month.replace(/%/g , '')) * parseInt(priceAvg) * (16 / 30) / 100;
					 $('#adjdate').val(toComma(adjdate));
				 }
				 if( diffdate <= 120 && diffdate > 90){
					 dateWeight = lessThan4Month;
					 $('#weidate').val(lessThan4Month);
					  adjdate = parseFloat(lessThan4Month.replace(/%/g , '')) * parseInt(priceAvg) * (16 / 30) / 100;
					 $('#adjdate').val(toComma(adjdate));
				 }
				 if( diffdate <= 150 && diffdate > 120){
					 dateWeight = lessThan5Month;
					 $('#weidate').val(lessThan5Month);
					  adjdate = parseFloat(lessThan5Month.replace(/%/g , '')) * parseInt(priceAvg) * (16 / 30) / 100;
					 $('#adjdate').val(toComma(adjdate));
				 }
				 if( diffdate <= 180 && diffdate > 150){
					 dateWeight = lessThan6Month;
					 $('#weidate').val(lessThan6Month);
					  adjdate = parseFloat(lessThan6Month.replace(/%/g , '')) * parseInt(priceAvg) * (16 / 30) / 100;
					 $('#adjdate').val(toComma(adjdate));
				 }
				 if( diffdate <= 210 && diffdate > 180){
					 dateWeight = lessThan7Month;
					 $('#weidate').val(lessThan7Month);
					  adjdate = parseFloat(lessThan7Month.replace(/%/g , '')) * parseInt(priceAvg) * (16 / 30) / 100;
					 $('#adjdate').val(toComma(adjdate));
				 }
				 if( diffdate <= 240 && diffdate > 210){
					 dateWeight = lessThan8Month;
					 $('#weidate').val(lessThan8Month);
					  adjdate = parseFloat(lessThan8Month.replace(/%/g , '')) * parseInt(priceAvg) * (16 / 30) / 100;
					 $('#adjdate').val(toComma(adjdate));
				 }
				 if( diffdate <= 270 && diffdate > 240){
					 dateWeight = lessThan9Month;
					 $('#weidate').val(lessThan9Month);
					  adjdate = parseFloat(lessThan9Month.replace(/%/g , '')) * parseInt(priceAvg) * (16 / 30) / 100;
					 $('#adjdate').val(toComma(adjdate));
				 }
				 if( diffdate <= 300 && diffdate > 270){
					 dateWeight = lessThan10Month;
					 $('#weidate').val(lessThan10Month);
					  adjdate = parseFloat(lessThan10Month.replace(/%/g , '')) * parseInt(priceAvg) * (16 / 30) / 100;
					 $('#adjdate').val(toComma(adjdate));
				 }
				 if( diffdate <= 330 && diffdate > 300){
					 dateWeight = lessThan11Month;
					 $('#weidate').val(lessThan11Month);
					  adjdate = parseFloat(lessThan11Month.replace(/%/g , '')) * parseInt(priceAvg) * (16 / 30) / 100;
					 $('#adjdate').val(toComma(adjdate));
				 }
				 if( diffdate <= 360 && diffdate > 330){
					 dateWeight = lessThan12Month;
					 $('#weidate').val(lessThan12Month);
					  adjdate = parseFloat(lessThan12Month.replace(/%/g , '')) * parseInt(priceAvg) * (16 / 30) / 100;
					 $('#adjdate').val(toComma(adjdate));
				 }
				 //beds//
				 $('#avgbed').val(bedAvg);
				 $('#subbed').val($('#bedroom').val());
				 var diffbed =  parseInt($('#subbed').val()) - parseInt(bedAvg);
				 $('#diffbed').val(diffbed);
				  adjbed =  parseInt(($('#diffbed').val()).replace(/,/g , ''))  * parseFloat(bedWeight.replace(/%/g , '')) * parseInt(priceAvg) / 100;
				 $('#adjbed').val(toComma(adjbed));
				 //Property Placement//
				 $('#subpla').val(calPla($('#placement').val()));
				 var diffpla = parseFloat($('#subpla').val() - $('#avgpla').val());
				 $('#diffpla').val(diffpla);
				  adjpla =  parseFloat(($('#diffpla').val()).replace(/,/g , ''))  * parseFloat(plaWeight.replace(/%/g , '')) * parseInt(priceAvg) / 100;
				 $('#adjpla').val(toComma(adjpla));
				 //Property Exposure//
				 $('#subexp').val(calExp($('#exposure').val()));
				 var diffexp = parseFloat($('#subexp').val() - $('#avgexp').val());
				 $('#diffexp').val(diffexp);
				  adjexp =  parseFloat(($('#diffexp').val()).replace(/,/g , ''))  * parseFloat(expWeight.replace(/%/g , '')) * parseInt(priceAvg) / 100;
				 $('#adjexp').val(toComma(adjexp));
				//Finishing Status//
				 $('#substa').val(calSta($('#status').val()));
				 var diffsta = parseFloat($('#substa').val() - $('#avgsta').val());
				 $('#diffsta').val(diffsta);
				  adjsta =  parseFloat(($('#diffsta').val()).replace(/,/g , ''))  * parseFloat(staWeight.replace(/%/g , '')) * parseInt(priceAvg) / 100;
				 $('#adjsta').val(toComma(adjsta));
				//Furnished//
				 $('#subfur').val(calFur($('#furnished').val()));
				 var difffur = parseFloat($('#subfur').val() - $('#avgfur').val());
				 $('#difffur').val(difffur);
				  adjfur =  parseFloat(($('#difffur').val()).replace(/,/g , ''))  * parseFloat(furWeight.replace(/%/g , '')) * parseInt(priceAvg) / 100;
				 $('#adjfur').val(toComma(adjfur));
			     //Market Value//
				 if(landAvg == "-"){
					   var marketValue = parseInt(priceAvg)+ parseInt(adjbal.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
	   					parseInt(adjloc.toString().replace(/,/g , '')) +parseInt(adjupg.toString().replace(/,/g , '')) +  parseInt(adjfur.toString().replace(/,/g , ''))+ parseInt(adjview.toString().replace(/,/g , ''))  + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
					   $('#marketvalue').val(toComma(marketValue));
				 }
				 else{
					   var marketValue = parseInt(priceAvg)+ parseInt(adjbal.toString().replace(/,/g , ''))  + parseInt(adjdate.toString().replace(/,/g , '')) +parseInt(adjbua.toString().replace(/,/g , '')) +parseInt(adjqua.toString().replace(/,/g , '')) +parseInt(adjfloor.toString().replace(/,/g , ''))+
	   					parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjupg.toString().replace(/,/g , '')) +  parseInt(adjfur.toString().replace(/,/g , ''))+ parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , ''))  + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , ''));
					   $('#marketvalue').val(toComma(marketValue));
				 }
				 finalValue = parseInt(parseInt(($('#marketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
				 $('#finalvalue').val(toComma(finalValue));
			},

		});	
});
function toComma(value){
	var result = parseInt(value);
	result = result.toLocaleString();
	return result;
}
function calAvg(value){
	var final = null;
	if(value == "Very Good"){
		final = "5";
	}
	if(value == "Good"){
		final = "4";
	}
	if(value == "Average"){
		final = "3";
	}
	if(value == "Substandard"){
		final = "2";
	}
	if(value == "Poor"){
		final = "1";
	}
	return final;
}
function calPla(value){
	var final = null;
	if(value == "Middle"){
		final = "1";
	}
	if(value == "Corner"){
		final = "2";
	}
	if(value == "Semi-Corner"){
		final = "1.5";
	}
	if(value == "Not Applicable"){
		final = "0";
	}
	return final;
}
function calSta(value){
	var final = null;
	if(value == "Shell & Core"){
		final = "2";
	}
	if(value == "Fitted"){
		final = "1";
	}
	return final;
}
function calDate(startD,endD){
    
	  var startDate = new Date(startD);
	  var endDate   = new Date(endD);
	      
	  var endMoment   = moment(endDate);
	  var startMoment = moment(startDate);
	  
	  var finalDate = endMoment.diff(startMoment, 'days');

	  return finalDate;
}
function calFur(value){
	var final = null;
	if(value == "Yes"){
		final = "2";
	}
	if(value == "No"){
		final = "1";
	}
	if(value == "Semi-Furnished"){
		final = "1.5";
	}
	return final;
}
function calView(value){
	var final = null;
	if(value == "Park View" || value == "Pool View" || value == "Mountain View"){
		final = "5";
	}
	if(value == "Sea View" || value == "Marina View" || value == "Lake View"){
		final = "5";
	}
	if(value == "Partial Park View" || value == "Partial Pool View" || value == "Partial Mountain View"){
		final = "4";
	}
	if(value == "Partial Sea View" || value == "Partial Marina View" || value == "Partial Lake View"){
		final = "4";
	}
	if(value == "Community View"){
		final = "3";
	}
	return final;
}
function calExp(value){
	var final = null;
	if(value == "Single Row"){
		final = "2";
	}
	if(value == "Back To Back"){
		final = "1";
	}
	if(value == "Not Applicable"){
		final = "0";
	}
	return final;
}