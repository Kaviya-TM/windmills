var lilocWeight = null;
var liviewWeight = null; 
var liquaWeight = null;
var lifloorWeight = null;
var lilandWeight = null;
var libuaWeight = null;
var lidateWeight = null;
var liexpWeight = null;
var liplaWeight = null;
var listaWeight = null;
var libedWeight = null;
var lifurWeight = null;
var libalWeight = null;
var liupgradeWeight = null;
var liparkWeight = null;
var lipoolWeight = null;
var lilandScapeWeight = null;
var liwhiteGoodsWeight = null;
var liutilitiesWeight = null;
var litenureWeight = null;
var lidevmargin = null;
var lipriceAvg = null;
var lipricePerAvg = null;
var lilandAvg = null;
var lilocAvg = null;
var liageAvg = null;
var litenAvg = null;
var liviewAvg = null;
var listaAvg = null;
var liquaAvg = null;
var liupgAvg = null;
var lifurAvg = null;
var liparkAvg = null;
var lipoolAvg = null;
var libalAvg =null;
var lidevAvg =null;
var lilandscapeAvg = null;
var ligoodAvg = null;
var liutiAvg = null;
var liexpAvg = null;
var liplaAvg = null;
var lifloorAvg = null;
var liadjloc = null;
var liadjview = null;
var liadjqua = null;
var liadjfloor = null;
var liadjbua = null;
var liadjbed = null;
var liadjexp= null;
var liadjpla = null;
var liadjsta = null;
var liadjdate = null;
var liadjland = null;
var liadjdev = null;
var lifinalValue = null;
$("#liavgbal").keyup(function(){
	var lidiffbal = parseInt($('#lisubbal').val()) - parseInt($(this).val());
    $('#lidiffbal').val(lidiffbal);
	liadjbal =  parseInt(($('#lidiffbal').val()).replace(/,/g , ''))  * parseFloat(($("#cliweibal").val()).replace(/%/g , '')) * parseInt(lipricePerAvg) / 100;
	$('#liadjbal').val(toComma(liadjbal));
	 //Market Value//
	 var marketValue = parseInt(lipriceAvg) + parseInt(liadjloc.toString().replace(/,/g , '')) + parseInt(liadjage.toString().replace(/,/g , '')) + parseInt(liadjten.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjview.toString().replace(/,/g , '')) + parseInt(liadjsta.toString().replace(/,/g , '')) + parseInt(liadjqua.toString().replace(/,/g , '')) + parseInt(liadjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjfur.toString().replace(/,/g , '')) + parseInt(liadjexp.toString().replace(/,/g , '')) + parseInt(liadjpla.toString().replace(/,/g , '')) + parseInt(liadjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(liadjbed.toString().replace(/,/g , '')) + parseInt(liadjpark.toString().replace(/,/g , '')) + parseInt(liadjpool.toString().replace(/,/g , '')) + parseInt(liadjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjgood.toString().replace(/,/g , '')) + parseInt(liadjuti.toString().replace(/,/g , '')) + parseInt(liadjbal.toString().replace(/,/g , '')) + parseInt(liadjland.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjbua.toString().replace(/,/g , '')) + parseInt(liadjdev.toString().replace(/,/g , '')) + parseInt(liadjdate.toString().replace(/,/g , ''));
	 $('#listingmarketvalue').val(toComma(marketValue));
	 lifinalValue = parseInt(parseInt(($('#listingmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#listingfinalvalue').val(toComma(lifinalValue));
});
$("#liavgdev").keyup(function(){
	var lidiffdev = parseInt($('#lisubdev').val()) - parseInt($(this).val());
    $('#lidiffdev').val(lidiffdev);
	liadjdev =  parseInt(($('#lidiffdev').val()).replace(/,/g , ''))  * parseFloat(($("#cliweidev").val()).replace(/%/g , '')) * parseInt(lipriceAvg) / 100;
	$('#liadjdev').val(toComma(liadjdev));
	 //Market Value//
	 var marketValue = parseInt(lipriceAvg) + parseInt(liadjloc.toString().replace(/,/g , '')) + parseInt(liadjage.toString().replace(/,/g , '')) + parseInt(liadjten.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjview.toString().replace(/,/g , '')) + parseInt(liadjsta.toString().replace(/,/g , '')) + parseInt(liadjqua.toString().replace(/,/g , '')) + parseInt(liadjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjfur.toString().replace(/,/g , '')) + parseInt(liadjexp.toString().replace(/,/g , '')) + parseInt(liadjpla.toString().replace(/,/g , '')) + parseInt(liadjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(liadjbed.toString().replace(/,/g , '')) + parseInt(liadjpark.toString().replace(/,/g , '')) + parseInt(liadjpool.toString().replace(/,/g , '')) + parseInt(liadjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjgood.toString().replace(/,/g , '')) + parseInt(liadjuti.toString().replace(/,/g , '')) + parseInt(liadjbal.toString().replace(/,/g , '')) + parseInt(liadjland.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjbua.toString().replace(/,/g , '')) + parseInt(liadjdev.toString().replace(/,/g , '')) + parseInt(liadjdate.toString().replace(/,/g , ''));
	 $('#listingmarketvalue').val(toComma(marketValue));
	 lifinalValue = parseInt(parseInt(($('#listingmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#listingfinalvalue').val(toComma(lifinalValue));
});
$("#liavgbua").keyup(function(){
	 var lidiffbua =  parseInt($('#buitUpAreaSize').val()) - parseInt(($("#liavgbua").val()).toString().replace(/,/g , ''));
	 $('#lidiffbua').val(toComma(lidiffbua));
	  liadjbua =  parseInt(($('#lidiffbua').val()).replace(/,/g , ''))  * parseFloat(libuaWeight.replace(/%/g , '')) * parseInt(lipricePerAvg) / 100;
	 $('#liadjbua').val(toComma(liadjbua));
	 //Market Value//
	 var marketValue = parseInt(lipriceAvg) + parseInt(liadjloc.toString().replace(/,/g , '')) + parseInt(liadjage.toString().replace(/,/g , '')) + parseInt(liadjten.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjview.toString().replace(/,/g , '')) + parseInt(liadjsta.toString().replace(/,/g , '')) + parseInt(liadjqua.toString().replace(/,/g , '')) + parseInt(liadjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjfur.toString().replace(/,/g , '')) + parseInt(liadjexp.toString().replace(/,/g , '')) + parseInt(liadjpla.toString().replace(/,/g , '')) + parseInt(liadjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(liadjbed.toString().replace(/,/g , '')) + parseInt(liadjpark.toString().replace(/,/g , '')) + parseInt(liadjpool.toString().replace(/,/g , '')) + parseInt(liadjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjgood.toString().replace(/,/g , '')) + parseInt(liadjuti.toString().replace(/,/g , '')) + parseInt(liadjbal.toString().replace(/,/g , '')) + parseInt(liadjland.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjbua.toString().replace(/,/g , '')) + parseInt(liadjdev.toString().replace(/,/g , '')) + parseInt(liadjdate.toString().replace(/,/g , ''));
	 $('#listingmarketvalue').val(toComma(marketValue));
	 lifinalValue = parseInt(parseInt(($('#listingmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#listingfinalvalue').val(toComma(lifinalValue));
});
$("#liavgpark").keyup(function(){
	var lidiffpark = parseInt($('#lisubpark').val()) - parseInt($(this).val());
    $('#lidiffpark').val(lidiffpark);
	liadjpark =  parseInt(($('#lidiffpark').val()).replace(/,/g , ''))  * parseFloat(($("#cliweipark").val()).replace(/%/g , '')) * parseInt($('#parkingPrice').val()) / 100;
	$('#liadjpark').val(toComma(liadjpark));
	 //Market Value//
	 var marketValue = parseInt(lipriceAvg) + parseInt(liadjloc.toString().replace(/,/g , '')) + parseInt(liadjage.toString().replace(/,/g , '')) + parseInt(liadjten.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjview.toString().replace(/,/g , '')) + parseInt(liadjsta.toString().replace(/,/g , '')) + parseInt(liadjqua.toString().replace(/,/g , '')) + parseInt(liadjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjfur.toString().replace(/,/g , '')) + parseInt(liadjexp.toString().replace(/,/g , '')) + parseInt(liadjpla.toString().replace(/,/g , '')) + parseInt(liadjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(liadjbed.toString().replace(/,/g , '')) + parseInt(liadjpark.toString().replace(/,/g , '')) + parseInt(liadjpool.toString().replace(/,/g , '')) + parseInt(liadjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjgood.toString().replace(/,/g , '')) + parseInt(liadjuti.toString().replace(/,/g , '')) + parseInt(liadjbal.toString().replace(/,/g , '')) + parseInt(liadjland.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjbua.toString().replace(/,/g , '')) + parseInt(liadjdev.toString().replace(/,/g , '')) + parseInt(liadjdate.toString().replace(/,/g , ''));
	 $('#listingmarketvalue').val(toComma(marketValue));
	 lifinalValue = parseInt(parseInt(($('#listingmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#listingfinalvalue').val(toComma(lifinalValue));
});
$("#liavgage").keyup(function(){
	var lidiffage = parseInt($('#lisubage').val()) - parseInt($(this).val());
    $('#lidiffage').val(lidiffage);
	liadjage =  parseInt(($('#lidiffage').val()).replace(/,/g , ''))  * parseFloat(($("#cliweiage").val()).replace(/%/g , '')) * parseInt(lipriceAvg) / 100;
	$('#liadjage').val(toComma(liadjage));
	 //Market Value//
	 var marketValue = parseInt(lipriceAvg) + parseInt(liadjloc.toString().replace(/,/g , '')) + parseInt(liadjage.toString().replace(/,/g , '')) + parseInt(liadjten.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjview.toString().replace(/,/g , '')) + parseInt(liadjsta.toString().replace(/,/g , '')) + parseInt(liadjqua.toString().replace(/,/g , '')) + parseInt(liadjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjfur.toString().replace(/,/g , '')) + parseInt(liadjexp.toString().replace(/,/g , '')) + parseInt(liadjpla.toString().replace(/,/g , '')) + parseInt(liadjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(liadjbed.toString().replace(/,/g , '')) + parseInt(liadjpark.toString().replace(/,/g , '')) + parseInt(liadjpool.toString().replace(/,/g , '')) + parseInt(liadjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjgood.toString().replace(/,/g , '')) + parseInt(liadjuti.toString().replace(/,/g , '')) + parseInt(liadjbal.toString().replace(/,/g , '')) + parseInt(liadjland.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjbua.toString().replace(/,/g , ''))+ parseInt(liadjdev.toString().replace(/,/g , ''))  + parseInt(liadjdate.toString().replace(/,/g , ''));
	 $('#listingmarketvalue').val(toComma(marketValue));
	 lifinalValue = parseInt(parseInt(($('#listingmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#listingfinalvalue').val(toComma(lifinalValue));
});
$("#cliweiloc").keyup(function(){
	if($("#cliweiloc").val() != $("#liweiloc").val()){
		$("#cliweiloc").css("color","crimson");
	}
	else{
		$("#cliweiloc").css("color","#6c757d");
	}
	liadjloc =  parseFloat(($('#lidiffloc').val()).replace(/,/g , ''))  * parseFloat(($("#cliweiloc").val()).replace(/%/g , '')) * parseInt(lipriceAvg) / 100;
	$('#liadjloc').val(toComma(liadjloc));
	 //Market Value//
	 var marketValue = parseInt(lipriceAvg) + parseInt(liadjloc.toString().replace(/,/g , '')) + parseInt(liadjage.toString().replace(/,/g , '')) + parseInt(liadjten.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjview.toString().replace(/,/g , '')) + parseInt(liadjsta.toString().replace(/,/g , '')) + parseInt(liadjqua.toString().replace(/,/g , '')) + parseInt(liadjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjfur.toString().replace(/,/g , '')) + parseInt(liadjexp.toString().replace(/,/g , '')) + parseInt(liadjpla.toString().replace(/,/g , '')) + parseInt(liadjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(liadjbed.toString().replace(/,/g , '')) + parseInt(liadjpark.toString().replace(/,/g , '')) + parseInt(liadjpool.toString().replace(/,/g , '')) + parseInt(liadjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjgood.toString().replace(/,/g , '')) + parseInt(liadjuti.toString().replace(/,/g , '')) + parseInt(liadjbal.toString().replace(/,/g , '')) + parseInt(liadjland.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjbua.toString().replace(/,/g , '')) + parseInt(liadjdev.toString().replace(/,/g , '')) + parseInt(liadjdate.toString().replace(/,/g , ''));
	 $('#listingmarketvalue').val(toComma(marketValue));
	 lifinalValue = parseInt(parseInt(($('#listingmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#listingfinalvalue').val(toComma(lifinalValue));
});
$("#cliweiage").keyup(function(){
	if($("#cliweiage").val() != $("#liweiage").val()){
		$("#cliweiage").css("color","crimson");
	}
	else{
		$("#cliweiage").css("color","#6c757d");
	}
	liadjage =  parseFloat(($('#lidiffage').val()).replace(/,/g , ''))  * parseFloat(($("#cliweiage").val()).replace(/%/g , '')) * parseInt(lipriceAvg) / 100;
	$('#liadjage').val(toComma(liadjage));
	 //Market Value//
	 var marketValue = parseInt(lipriceAvg) + parseInt(liadjloc.toString().replace(/,/g , '')) + parseInt(liadjage.toString().replace(/,/g , '')) + parseInt(liadjten.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjview.toString().replace(/,/g , '')) + parseInt(liadjsta.toString().replace(/,/g , '')) + parseInt(liadjqua.toString().replace(/,/g , '')) + parseInt(liadjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjfur.toString().replace(/,/g , '')) + parseInt(liadjexp.toString().replace(/,/g , '')) + parseInt(liadjpla.toString().replace(/,/g , '')) + parseInt(liadjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(liadjbed.toString().replace(/,/g , '')) + parseInt(liadjpark.toString().replace(/,/g , '')) + parseInt(liadjpool.toString().replace(/,/g , '')) + parseInt(liadjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjgood.toString().replace(/,/g , '')) + parseInt(liadjuti.toString().replace(/,/g , '')) + parseInt(liadjbal.toString().replace(/,/g , '')) + parseInt(liadjland.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjbua.toString().replace(/,/g , '')) + parseInt(liadjdev.toString().replace(/,/g , '')) + parseInt(liadjdate.toString().replace(/,/g , ''));
	 $('#listingmarketvalue').val(toComma(marketValue));
	 lifinalValue = parseInt(parseInt(($('#listingmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#listingfinalvalue').val(toComma(lifinalValue));
});
$("#cliweiten").keyup(function(){
	if($("#cliweiten").val() != $("#liweiten").val()){
		$("#cliweiten").css("color","crimson");
	}
	else{
		$("#cliweiten").css("color","#6c757d");
	}
	liadjten =  parseFloat(($('#lidifften').val()).replace(/,/g , ''))  * parseFloat(($("#cliweiten").val()).replace(/%/g , '')) * parseInt(lipriceAvg) / 100;
	$('#liadjten').val(toComma(liadjten));
	 //Market Value//
	 var marketValue = parseInt(lipriceAvg) + parseInt(liadjloc.toString().replace(/,/g , '')) + parseInt(liadjage.toString().replace(/,/g , '')) + parseInt(liadjten.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjview.toString().replace(/,/g , '')) + parseInt(liadjsta.toString().replace(/,/g , '')) + parseInt(liadjqua.toString().replace(/,/g , '')) + parseInt(liadjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjfur.toString().replace(/,/g , '')) + parseInt(liadjexp.toString().replace(/,/g , '')) + parseInt(liadjpla.toString().replace(/,/g , '')) + parseInt(liadjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(liadjbed.toString().replace(/,/g , '')) + parseInt(liadjpark.toString().replace(/,/g , '')) + parseInt(liadjpool.toString().replace(/,/g , '')) + parseInt(liadjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjgood.toString().replace(/,/g , '')) + parseInt(liadjuti.toString().replace(/,/g , '')) + parseInt(liadjbal.toString().replace(/,/g , '')) + parseInt(liadjland.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjbua.toString().replace(/,/g , '')) + parseInt(liadjdev.toString().replace(/,/g , '')) + parseInt(liadjdate.toString().replace(/,/g , ''));
	 $('#listingmarketvalue').val(toComma(marketValue));
	 lifinalValue = parseInt(parseInt(($('#listingmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#listingfinalvalue').val(toComma(lifinalValue));
});
$("#cliweiview").keyup(function(){
	if($("#cliweiview").val() != $("#liweiview").val()){
		$("#cliweiview").css("color","crimson");
	}
	else{
		$("#cliweiview").css("color","#6c757d");
	}
	liadjview =  parseFloat(($('#lidiffview').val()).replace(/,/g , ''))  * parseFloat(($("#cliweiview").val()).replace(/%/g , '')) * parseInt(lipriceAvg) / 100;
	$('#liadjview').val(toComma(liadjview));
	 //Market Value//
	 var marketValue = parseInt(lipriceAvg) + parseInt(liadjloc.toString().replace(/,/g , '')) + parseInt(liadjage.toString().replace(/,/g , '')) + parseInt(liadjten.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjview.toString().replace(/,/g , '')) + parseInt(liadjsta.toString().replace(/,/g , '')) + parseInt(liadjqua.toString().replace(/,/g , '')) + parseInt(liadjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjfur.toString().replace(/,/g , '')) + parseInt(liadjexp.toString().replace(/,/g , '')) + parseInt(liadjpla.toString().replace(/,/g , '')) + parseInt(liadjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(liadjbed.toString().replace(/,/g , '')) + parseInt(liadjpark.toString().replace(/,/g , '')) + parseInt(liadjpool.toString().replace(/,/g , '')) + parseInt(liadjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjgood.toString().replace(/,/g , '')) + parseInt(liadjuti.toString().replace(/,/g , '')) + parseInt(liadjbal.toString().replace(/,/g , '')) + parseInt(liadjland.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjbua.toString().replace(/,/g , '')) + parseInt(liadjdev.toString().replace(/,/g , '')) + parseInt(liadjdate.toString().replace(/,/g , ''));
	 $('#listingmarketvalue').val(toComma(marketValue));
	 lifinalValue = parseInt(parseInt(($('#listingmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#listingfinalvalue').val(toComma(lifinalValue));
});
$("#cliweista").keyup(function(){
	if($("#cliweista").val() != $("#liweista").val()){
		$("#cliweista").css("color","crimson");
	}
	else{
		$("#cliweista").css("color","#6c757d");
	}
	liadjsta =  parseFloat(($('#lidiffsta').val()).replace(/,/g , ''))  * parseFloat(($("#cliweista").val()).replace(/%/g , '')) * parseInt(lipriceAvg) / 100;
	$('#liadjsta').val(toComma(liadjsta));
	 //Market Value//
	 var marketValue = parseInt(lipriceAvg) + parseInt(liadjloc.toString().replace(/,/g , '')) + parseInt(liadjage.toString().replace(/,/g , '')) + parseInt(liadjten.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjview.toString().replace(/,/g , '')) + parseInt(liadjsta.toString().replace(/,/g , '')) + parseInt(liadjqua.toString().replace(/,/g , '')) + parseInt(liadjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjfur.toString().replace(/,/g , '')) + parseInt(liadjexp.toString().replace(/,/g , '')) + parseInt(liadjpla.toString().replace(/,/g , '')) + parseInt(liadjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(liadjbed.toString().replace(/,/g , '')) + parseInt(liadjpark.toString().replace(/,/g , '')) + parseInt(liadjpool.toString().replace(/,/g , '')) + parseInt(liadjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjgood.toString().replace(/,/g , '')) + parseInt(liadjuti.toString().replace(/,/g , '')) + parseInt(liadjbal.toString().replace(/,/g , '')) + parseInt(liadjland.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjbua.toString().replace(/,/g , '')) + parseInt(liadjdev.toString().replace(/,/g , '')) + parseInt(liadjdate.toString().replace(/,/g , ''));
	 $('#listingmarketvalue').val(toComma(marketValue));
	 lifinalValue = parseInt(parseInt(($('#listingmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#listingfinalvalue').val(toComma(lifinalValue));
});
$("#cliweidev").keyup(function(){
	if($("#cliweidev").val() != $("#liweidev").val()){
		$("#cliweidev").css("color","crimson");
	}
	else{
		$("#cliweidev").css("color","#6c757d");
	}
	liadjdev =  parseFloat(($('#lidiffdev').val()).replace(/,/g , ''))  * parseFloat(($("#cliweidev").val()).replace(/%/g , '')) * parseInt(lipriceAvg) / 100;
	$('#liadjdev').val(toComma(liadjdev));
	 //Market Value//
	 var marketValue = parseInt(lipriceAvg) + parseInt(liadjloc.toString().replace(/,/g , '')) + parseInt(liadjage.toString().replace(/,/g , '')) + parseInt(liadjten.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjview.toString().replace(/,/g , '')) + parseInt(liadjsta.toString().replace(/,/g , '')) + parseInt(liadjqua.toString().replace(/,/g , '')) + parseInt(liadjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjfur.toString().replace(/,/g , '')) + parseInt(liadjexp.toString().replace(/,/g , '')) + parseInt(liadjpla.toString().replace(/,/g , '')) + parseInt(liadjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(liadjbed.toString().replace(/,/g , '')) + parseInt(liadjpark.toString().replace(/,/g , '')) + parseInt(liadjpool.toString().replace(/,/g , '')) + parseInt(liadjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjgood.toString().replace(/,/g , '')) + parseInt(liadjuti.toString().replace(/,/g , '')) + parseInt(liadjbal.toString().replace(/,/g , '')) + parseInt(liadjland.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjbua.toString().replace(/,/g , '')) + parseInt(liadjdev.toString().replace(/,/g , '')) + parseInt(liadjdate.toString().replace(/,/g , ''));
	 $('#listingmarketvalue').val(toComma(marketValue));
	 lifinalValue = parseInt(parseInt(($('#listingmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#listingfinalvalue').val(toComma(lifinalValue));
});
$("#cliweiqua").keyup(function(){
	if($("#cliweiqua").val() != $("#liweiqua").val()){
		$("#cliweiqua").css("color","crimson");
	}
	else{
		$("#cliweiqua").css("color","#6c757d");
	}
	liadjqua =  parseFloat(($('#lidiffqua').val()).replace(/,/g , ''))  * parseFloat(($("#cliweiqua").val()).replace(/%/g , '')) * parseInt(lipriceAvg) / 100;
	$('#liadjqua').val(toComma(liadjqua));
	 //Market Value//
	 var marketValue = parseInt(lipriceAvg) + parseInt(liadjloc.toString().replace(/,/g , '')) + parseInt(liadjage.toString().replace(/,/g , '')) + parseInt(liadjten.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjview.toString().replace(/,/g , '')) + parseInt(liadjsta.toString().replace(/,/g , '')) + parseInt(liadjqua.toString().replace(/,/g , '')) + parseInt(liadjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjfur.toString().replace(/,/g , '')) + parseInt(liadjexp.toString().replace(/,/g , '')) + parseInt(liadjpla.toString().replace(/,/g , '')) + parseInt(liadjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(liadjbed.toString().replace(/,/g , '')) + parseInt(liadjpark.toString().replace(/,/g , '')) + parseInt(liadjpool.toString().replace(/,/g , '')) + parseInt(liadjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjgood.toString().replace(/,/g , '')) + parseInt(liadjuti.toString().replace(/,/g , '')) + parseInt(liadjbal.toString().replace(/,/g , '')) + parseInt(liadjland.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjbua.toString().replace(/,/g , '')) + parseInt(liadjdev.toString().replace(/,/g , '')) + parseInt(liadjdate.toString().replace(/,/g , ''));
	 $('#listingmarketvalue').val(toComma(marketValue));
	 lifinalValue = parseInt(parseInt(($('#listingmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#listingfinalvalue').val(toComma(lifinalValue));
});
$("#cliweiupg").keyup(function(){
	if($("#cliweiupg").val() != $("#liweiupg").val()){
		$("#cliweiupg").css("color","crimson");
	}
	else{
		$("#cliweiupg").css("color","#6c757d");
	}
	liadjupg =  parseFloat(($('#lidiffupg').val()).replace(/,/g , ''))  * parseFloat(($("#cliweiupg").val()).replace(/%/g , '')) * parseInt(lipriceAvg) / 100;
	$('#liadjupg').val(toComma(liadjupg));
	 //Market Value//
	 var marketValue = parseInt(lipriceAvg) + parseInt(liadjloc.toString().replace(/,/g , '')) + parseInt(liadjage.toString().replace(/,/g , '')) + parseInt(liadjten.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjview.toString().replace(/,/g , '')) + parseInt(liadjsta.toString().replace(/,/g , '')) + parseInt(liadjqua.toString().replace(/,/g , '')) + parseInt(liadjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjfur.toString().replace(/,/g , '')) + parseInt(liadjexp.toString().replace(/,/g , '')) + parseInt(liadjpla.toString().replace(/,/g , '')) + parseInt(liadjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(liadjbed.toString().replace(/,/g , '')) + parseInt(liadjpark.toString().replace(/,/g , '')) + parseInt(liadjpool.toString().replace(/,/g , '')) + parseInt(liadjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjgood.toString().replace(/,/g , '')) + parseInt(liadjuti.toString().replace(/,/g , '')) + parseInt(liadjbal.toString().replace(/,/g , '')) + parseInt(liadjland.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjbua.toString().replace(/,/g , ''))+ parseInt(liadjdev.toString().replace(/,/g , ''))  + parseInt(liadjdate.toString().replace(/,/g , ''));
	 $('#listingmarketvalue').val(toComma(marketValue));
	 lifinalValue = parseInt(parseInt(($('#listingmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#listingfinalvalue').val(toComma(lifinalValue));
});
$("#cliweifur").keyup(function(){
	if($("#cliweifur").val() != $("#liweifur").val()){
		$("#cliweifur").css("color","crimson");
	}
	else{
		$("#cliweifur").css("color","#6c757d");
	}
	liadjfur =  parseFloat(($('#lidifffur').val()).replace(/,/g , ''))  * parseFloat(($("#cliweifur").val()).replace(/%/g , '')) * parseInt(lipriceAvg) / 100;
	$('#liadjfur').val(toComma(liadjfur));
	 //Market Value//
	 var marketValue = parseInt(lipriceAvg) + parseInt(liadjloc.toString().replace(/,/g , '')) + parseInt(liadjage.toString().replace(/,/g , '')) + parseInt(liadjten.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjview.toString().replace(/,/g , '')) + parseInt(liadjsta.toString().replace(/,/g , '')) + parseInt(liadjqua.toString().replace(/,/g , '')) + parseInt(liadjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjfur.toString().replace(/,/g , '')) + parseInt(liadjexp.toString().replace(/,/g , '')) + parseInt(liadjpla.toString().replace(/,/g , '')) + parseInt(liadjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(liadjbed.toString().replace(/,/g , '')) + parseInt(liadjpark.toString().replace(/,/g , '')) + parseInt(liadjpool.toString().replace(/,/g , '')) + parseInt(liadjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjgood.toString().replace(/,/g , '')) + parseInt(liadjuti.toString().replace(/,/g , '')) + parseInt(liadjbal.toString().replace(/,/g , '')) + parseInt(liadjland.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjbua.toString().replace(/,/g , '')) + parseInt(liadjdev.toString().replace(/,/g , '')) + parseInt(liadjdate.toString().replace(/,/g , ''));
	 $('#listingmarketvalue').val(toComma(marketValue));
	 lifinalValue = parseInt(parseInt(($('#listingmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#listingfinalvalue').val(toComma(lifinalValue));
});
$("#cliweiexp").keyup(function(){
	if($("#cliweiexp").val() != $("#liweiexp").val()){
		$("#cliweiexp").css("color","crimson");
	}
	else{
		$("#cliweiexp").css("color","#6c757d");
	}
	liadjexp =  parseFloat(($('#lidiffexp').val()).replace(/,/g , ''))  * parseFloat(($("#cliweiexp").val()).replace(/%/g , '')) * parseInt(lipriceAvg) / 100;
	$('#liadjexp').val(toComma(liadjexp));
	 //Market Value//
	 var marketValue = parseInt(lipriceAvg) + parseInt(liadjloc.toString().replace(/,/g , '')) + parseInt(liadjage.toString().replace(/,/g , '')) + parseInt(liadjten.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjview.toString().replace(/,/g , '')) + parseInt(liadjsta.toString().replace(/,/g , '')) + parseInt(liadjqua.toString().replace(/,/g , '')) + parseInt(liadjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjfur.toString().replace(/,/g , '')) + parseInt(liadjexp.toString().replace(/,/g , '')) + parseInt(liadjpla.toString().replace(/,/g , '')) + parseInt(liadjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(liadjbed.toString().replace(/,/g , '')) + parseInt(liadjpark.toString().replace(/,/g , '')) + parseInt(liadjpool.toString().replace(/,/g , '')) + parseInt(liadjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjgood.toString().replace(/,/g , '')) + parseInt(liadjuti.toString().replace(/,/g , '')) + parseInt(liadjbal.toString().replace(/,/g , '')) + parseInt(liadjland.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjbua.toString().replace(/,/g , '')) + parseInt(liadjdev.toString().replace(/,/g , '')) + parseInt(liadjdate.toString().replace(/,/g , ''));
	 $('#listingmarketvalue').val(toComma(marketValue));
	 lifinalValue = parseInt(parseInt(($('#listingmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#listingfinalvalue').val(toComma(lifinalValue));
});
$("#cliweipla").keyup(function(){
	if($("#cliweipla").val() != $("#liweipla").val()){
		$("#cliweipla").css("color","crimson");
	}
	else{
		$("#cliweipla").css("color","#6c757d");
	}
	liadjpla =  parseFloat(($('#lidiffpla').val()).replace(/,/g , ''))  * parseFloat(($("#cliweipla").val()).replace(/%/g , '')) * parseInt(lipriceAvg) / 100;
	$('#liadjpla').val(toComma(liadjpla));
	 //Market Value//
	 var marketValue = parseInt(lipriceAvg) + parseInt(liadjloc.toString().replace(/,/g , '')) + parseInt(liadjage.toString().replace(/,/g , '')) + parseInt(liadjten.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjview.toString().replace(/,/g , '')) + parseInt(liadjsta.toString().replace(/,/g , '')) + parseInt(liadjqua.toString().replace(/,/g , '')) + parseInt(liadjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjfur.toString().replace(/,/g , '')) + parseInt(liadjexp.toString().replace(/,/g , '')) + parseInt(liadjpla.toString().replace(/,/g , '')) + parseInt(liadjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(liadjbed.toString().replace(/,/g , '')) + parseInt(liadjpark.toString().replace(/,/g , '')) + parseInt(liadjpool.toString().replace(/,/g , '')) + parseInt(liadjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjgood.toString().replace(/,/g , '')) + parseInt(liadjuti.toString().replace(/,/g , '')) + parseInt(liadjbal.toString().replace(/,/g , '')) + parseInt(liadjland.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjbua.toString().replace(/,/g , '')) + parseInt(liadjdev.toString().replace(/,/g , '')) + parseInt(liadjdate.toString().replace(/,/g , ''));
	 $('#listingmarketvalue').val(toComma(marketValue));
	 lifinalValue = parseInt(parseInt(($('#listingmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#listingfinalvalue').val(toComma(lifinalValue));
});
$("#cliweifloor").keyup(function(){
	if($("#cliweifloor").val() != $("#liweifloor").val()){
		$("#cliweifloor").css("color","crimson");
	}
	else{
		$("#cliweifloor").css("color","#6c757d");
	}
	liadjfloor =  parseFloat(($('#lidifffloor').val()).replace(/,/g , ''))  * parseFloat(($("#cliweifloor").val()).replace(/%/g , '')) * parseInt(lipriceAvg) / 100;
	$('#liadjfloor').val(toComma(liadjfloor));
	 //Market Value//
	 var marketValue = parseInt(lipriceAvg) + parseInt(liadjloc.toString().replace(/,/g , '')) + parseInt(liadjage.toString().replace(/,/g , '')) + parseInt(liadjten.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjview.toString().replace(/,/g , '')) + parseInt(liadjsta.toString().replace(/,/g , '')) + parseInt(liadjqua.toString().replace(/,/g , '')) + parseInt(liadjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjfur.toString().replace(/,/g , '')) + parseInt(liadjexp.toString().replace(/,/g , '')) + parseInt(liadjpla.toString().replace(/,/g , '')) + parseInt(liadjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(liadjbed.toString().replace(/,/g , '')) + parseInt(liadjpark.toString().replace(/,/g , '')) + parseInt(liadjpool.toString().replace(/,/g , '')) + parseInt(liadjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjgood.toString().replace(/,/g , '')) + parseInt(liadjuti.toString().replace(/,/g , '')) + parseInt(liadjbal.toString().replace(/,/g , '')) + parseInt(liadjland.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjbua.toString().replace(/,/g , ''))+ parseInt(liadjdev.toString().replace(/,/g , ''))  + parseInt(liadjdate.toString().replace(/,/g , ''));
	 $('#listingmarketvalue').val(toComma(marketValue));
	 lifinalValue = parseInt(parseInt(($('#listingmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#listingfinalvalue').val(toComma(lifinalValue));
});
$("#cliweibed").keyup(function(){
	if($("#cliweibed").val() != $("#liweibed").val()){
		$("#cliweibed").css("color","crimson");
	}
	else{
		$("#cliweibed").css("color","#6c757d");
	}
	liadjbed =  parseFloat(($('#lidiffbed').val()).replace(/,/g , ''))  * parseFloat(($("#cliweibed").val()).replace(/%/g , '')) * parseInt(lipriceAvg) / 100;
	$('#liadjbed').val(toComma(liadjbed));
	 //Market Value//
	 var marketValue = parseInt(lipriceAvg) + parseInt(liadjloc.toString().replace(/,/g , '')) + parseInt(liadjage.toString().replace(/,/g , '')) + parseInt(liadjten.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjview.toString().replace(/,/g , '')) + parseInt(liadjsta.toString().replace(/,/g , '')) + parseInt(liadjqua.toString().replace(/,/g , '')) + parseInt(liadjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjfur.toString().replace(/,/g , '')) + parseInt(liadjexp.toString().replace(/,/g , '')) + parseInt(liadjpla.toString().replace(/,/g , '')) + parseInt(liadjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(liadjbed.toString().replace(/,/g , '')) + parseInt(liadjpark.toString().replace(/,/g , '')) + parseInt(liadjpool.toString().replace(/,/g , '')) + parseInt(liadjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjgood.toString().replace(/,/g , '')) + parseInt(liadjuti.toString().replace(/,/g , '')) + parseInt(liadjbal.toString().replace(/,/g , '')) + parseInt(liadjland.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjbua.toString().replace(/,/g , '')) + parseInt(liadjdev.toString().replace(/,/g , '')) + parseInt(liadjdate.toString().replace(/,/g , ''));
	 $('#listingmarketvalue').val(toComma(marketValue));
	 lifinalValue = parseInt(parseInt(($('#listingmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#listingfinalvalue').val(toComma(lifinalValue));
});

$("#cliweipark").keyup(function(){
	if($("#cliweipark").val() != $("#liweipark").val()){
		$("#cliweipark").css("color","crimson");
	}
	else{
		$("#cliweipark").css("color","#6c757d");
	}
	liadjpark = parseFloat(($('#lidiffpark').val()).replace(/,/g , '')) * parseFloat(($("#cliweipark").val()).replace(/%/g , '')) * parseInt($('#parkingPrice').val()) / 100;
    $('#liadjpark').val(toComma(liadjpark));
	 //Market Value//
	 var marketValue = parseInt(lipriceAvg) + parseInt(liadjloc.toString().replace(/,/g , '')) + parseInt(liadjage.toString().replace(/,/g , '')) + parseInt(liadjten.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjview.toString().replace(/,/g , '')) + parseInt(liadjsta.toString().replace(/,/g , '')) + parseInt(liadjqua.toString().replace(/,/g , '')) + parseInt(liadjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjfur.toString().replace(/,/g , '')) + parseInt(liadjexp.toString().replace(/,/g , '')) + parseInt(liadjpla.toString().replace(/,/g , '')) + parseInt(liadjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(liadjbed.toString().replace(/,/g , '')) + parseInt(liadjpark.toString().replace(/,/g , '')) + parseInt(liadjpool.toString().replace(/,/g , '')) + parseInt(liadjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjgood.toString().replace(/,/g , '')) + parseInt(liadjuti.toString().replace(/,/g , '')) + parseInt(liadjbal.toString().replace(/,/g , '')) + parseInt(liadjland.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjbua.toString().replace(/,/g , '')) + parseInt(liadjdev.toString().replace(/,/g , '')) + parseInt(liadjdate.toString().replace(/,/g , ''));
	 $('#listingmarketvalue').val(toComma(marketValue));
	 lifinalValue = parseInt(parseInt(($('#listingmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#listingfinalvalue').val(toComma(lifinalValue));
});
$("#cliweipool").keyup(function(){
	if($("#cliweipool").val() != $("#liweipool").val()){
		$("#cliweipool").css("color","crimson");
	}
	else{
		$("#cliweipool").css("color","#6c757d");
	}
	liadjpool = parseFloat(($('#lidiffpool').val()).replace(/,/g , '')) * parseFloat(($("#cliweipool").val()).replace(/%/g , '')) * parseInt($('#poolPrice').val()) / 100;
    $('#liadjpool').val(toComma(liadjpool));
	 //Market Value//
	 var marketValue = parseInt(lipriceAvg) + parseInt(liadjloc.toString().replace(/,/g , '')) + parseInt(liadjage.toString().replace(/,/g , '')) + parseInt(liadjten.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjview.toString().replace(/,/g , '')) + parseInt(liadjsta.toString().replace(/,/g , '')) + parseInt(liadjqua.toString().replace(/,/g , '')) + parseInt(liadjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjfur.toString().replace(/,/g , '')) + parseInt(liadjexp.toString().replace(/,/g , '')) + parseInt(liadjpla.toString().replace(/,/g , '')) + parseInt(liadjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(liadjbed.toString().replace(/,/g , '')) + parseInt(liadjpark.toString().replace(/,/g , '')) + parseInt(liadjpool.toString().replace(/,/g , '')) + parseInt(liadjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjgood.toString().replace(/,/g , '')) + parseInt(liadjuti.toString().replace(/,/g , '')) + parseInt(liadjbal.toString().replace(/,/g , '')) + parseInt(liadjland.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjbua.toString().replace(/,/g , '')) + parseInt(liadjdev.toString().replace(/,/g , '')) + parseInt(liadjdate.toString().replace(/,/g , ''));
	 $('#listingmarketvalue').val(toComma(marketValue));
	 lifinalValue = parseInt(parseInt(($('#listingmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#listingfinalvalue').val(toComma(lifinalValue));
});
$("#cliweilandscape").keyup(function(){
	if($("#cliweilandscape").val() != $("#liweilandscape").val()){
		$("#cliweilandscape").css("color","crimson");
	}
	else{
		$("#cliweilandscape").css("color","#6c757d");
	}
	liadjlandscape = parseFloat(($('#lidifflandscape').val()).replace(/,/g , '')) * parseFloat(($("#cliweilandscape").val()).replace(/%/g , '')) * parseInt($('#landscapePrice').val()) / 100;
    $('#liadjlandscape').val(toComma(liadjlandscape));
	 //Market Value//
	 var marketValue = parseInt(lipriceAvg) + parseInt(liadjloc.toString().replace(/,/g , '')) + parseInt(liadjage.toString().replace(/,/g , '')) + parseInt(liadjten.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjview.toString().replace(/,/g , '')) + parseInt(liadjsta.toString().replace(/,/g , '')) + parseInt(liadjqua.toString().replace(/,/g , '')) + parseInt(liadjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjfur.toString().replace(/,/g , '')) + parseInt(liadjexp.toString().replace(/,/g , '')) + parseInt(liadjpla.toString().replace(/,/g , '')) + parseInt(liadjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(liadjbed.toString().replace(/,/g , '')) + parseInt(liadjpark.toString().replace(/,/g , '')) + parseInt(liadjpool.toString().replace(/,/g , '')) + parseInt(liadjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjgood.toString().replace(/,/g , '')) + parseInt(liadjuti.toString().replace(/,/g , '')) + parseInt(liadjbal.toString().replace(/,/g , '')) + parseInt(liadjland.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjbua.toString().replace(/,/g , '')) + parseInt(liadjdev.toString().replace(/,/g , '')) + parseInt(liadjdate.toString().replace(/,/g , ''));
	 $('#listingmarketvalue').val(toComma(marketValue));
	 lifinalValue = parseInt(parseInt(($('#listingmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#listingfinalvalue').val(toComma(lifinalValue));
});
$("#cliweigood").keyup(function(){
	if($("#cliweigood").val() != $("#liweigood").val()){
		$("#cliweigood").css("color","crimson");
	}
	else{
		$("#cliweigood").css("color","#6c757d");
	}
	liadjgood = parseFloat(($('#lidiffgood').val()).replace(/,/g , '')) * parseFloat(($("#cliweigood").val()).replace(/%/g , '')) * parseInt($('#whitegoodsPrice').val()) / 100;
    $('#liadjgood').val(toComma(liadjgood));
	 //Market Value//
	 var marketValue = parseInt(lipriceAvg) + parseInt(liadjloc.toString().replace(/,/g , '')) + parseInt(liadjage.toString().replace(/,/g , '')) + parseInt(liadjten.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjview.toString().replace(/,/g , '')) + parseInt(liadjsta.toString().replace(/,/g , '')) + parseInt(liadjqua.toString().replace(/,/g , '')) + parseInt(liadjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjfur.toString().replace(/,/g , '')) + parseInt(liadjexp.toString().replace(/,/g , '')) + parseInt(liadjpla.toString().replace(/,/g , '')) + parseInt(liadjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(liadjbed.toString().replace(/,/g , '')) + parseInt(liadjpark.toString().replace(/,/g , '')) + parseInt(liadjpool.toString().replace(/,/g , '')) + parseInt(liadjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjgood.toString().replace(/,/g , '')) + parseInt(liadjuti.toString().replace(/,/g , '')) + parseInt(liadjbal.toString().replace(/,/g , '')) + parseInt(liadjland.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjbua.toString().replace(/,/g , '')) + parseInt(liadjdev.toString().replace(/,/g , '')) + parseInt(liadjdate.toString().replace(/,/g , ''));
	 $('#listingmarketvalue').val(toComma(marketValue));
	 lifinalValue = parseInt(parseInt(($('#listingmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#listingfinalvalue').val(toComma(lifinalValue));
});
$("#cliweiuti").keyup(function(){
	if($("#cliweiuti").val() != $("#liweiuti").val()){
		$("#cliweiuti").css("color","crimson");
	}
	else{
		$("#cliweiuti").css("color","#6c757d");
	}
	liadjuti = parseFloat(($('#lidiffuti').val()).replace(/,/g , '')) * parseFloat(($("#cliweiuti").val()).replace(/%/g , '')) * parseInt($('#utiliesPrice').val()) / 100;
    $('#liadjuti').val(toComma(liadjuti));
	 //Market Value//
	 var marketValue = parseInt(lipriceAvg) + parseInt(liadjloc.toString().replace(/,/g , '')) + parseInt(liadjage.toString().replace(/,/g , '')) + parseInt(liadjten.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjview.toString().replace(/,/g , '')) + parseInt(liadjsta.toString().replace(/,/g , '')) + parseInt(liadjqua.toString().replace(/,/g , '')) + parseInt(liadjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjfur.toString().replace(/,/g , '')) + parseInt(liadjexp.toString().replace(/,/g , '')) + parseInt(liadjpla.toString().replace(/,/g , '')) + parseInt(liadjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(liadjbed.toString().replace(/,/g , '')) + parseInt(liadjpark.toString().replace(/,/g , '')) + parseInt(liadjpool.toString().replace(/,/g , '')) + parseInt(liadjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjgood.toString().replace(/,/g , '')) + parseInt(liadjuti.toString().replace(/,/g , '')) + parseInt(liadjbal.toString().replace(/,/g , '')) + parseInt(liadjland.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjbua.toString().replace(/,/g , '')) + parseInt(liadjdev.toString().replace(/,/g , '')) + parseInt(liadjdate.toString().replace(/,/g , ''));
	 $('#listingmarketvalue').val(toComma(marketValue));
	 lifinalValue = parseInt(parseInt(($('#listingmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#listingfinalvalue').val(toComma(lifinalValue));
});
$("#cliweibal").keyup(function(){
	if($("#cliweibal").val() != $("#liweibal").val()){
		$("#cliweibal").css("color","crimson");
	}
	else{
		$("#cliweibal").css("color","#6c757d");
	}
	liadjbal = parseFloat(($('#lidiffbal').val()).replace(/,/g , '')) * parseFloat(($("#cliweibal").val()).replace(/%/g , '')) * parseInt(lipricePerAvg) / 100;
    $('#liadjbal').val(toComma(liadjbal));
	 //Market Value//
	 var marketValue = parseInt(lipriceAvg) + parseInt(liadjloc.toString().replace(/,/g , '')) + parseInt(liadjage.toString().replace(/,/g , '')) + parseInt(liadjten.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjview.toString().replace(/,/g , '')) + parseInt(liadjsta.toString().replace(/,/g , '')) + parseInt(liadjqua.toString().replace(/,/g , '')) + parseInt(liadjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjfur.toString().replace(/,/g , '')) + parseInt(liadjexp.toString().replace(/,/g , '')) + parseInt(liadjpla.toString().replace(/,/g , '')) + parseInt(liadjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(liadjbed.toString().replace(/,/g , '')) + parseInt(liadjpark.toString().replace(/,/g , '')) + parseInt(liadjpool.toString().replace(/,/g , '')) + parseInt(liadjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjgood.toString().replace(/,/g , '')) + parseInt(liadjuti.toString().replace(/,/g , '')) + parseInt(liadjbal.toString().replace(/,/g , '')) + parseInt(liadjland.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjbua.toString().replace(/,/g , '')) + parseInt(liadjdev.toString().replace(/,/g , '')) + parseInt(liadjdate.toString().replace(/,/g , ''));
	 $('#listingmarketvalue').val(toComma(marketValue));
	 lifinalValue = parseInt(parseInt(($('#listingmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#listingfinalvalue').val(toComma(lifinalValue));
});
$("#cliweiland").keyup(function(){
	if($("#cliweiland").val() != $("#liweiland").val()){
		$("#cliweiland").css("color","crimson");
	}
	else{
		$("#cliweiland").css("color","#6c757d");
	}
	if($('#landPrice').val() != ""){
		 liadjland = parseInt(($('#lidiffland').val()).replace(/,/g , ''))  *  parseFloat(($("#cliweiland").val()).replace(/%/g , ''))  * parseInt($('#landPrice').val()) / 100;
	 }
	 else{
		 liadjland = 0;
	 }
    $('#liadjland').val(toComma(liadjland));
	 //Market Value//
	 var marketValue = parseInt(lipriceAvg) + parseInt(liadjloc.toString().replace(/,/g , '')) + parseInt(liadjage.toString().replace(/,/g , '')) + parseInt(liadjten.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjview.toString().replace(/,/g , '')) + parseInt(liadjsta.toString().replace(/,/g , '')) + parseInt(liadjqua.toString().replace(/,/g , '')) + parseInt(liadjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjfur.toString().replace(/,/g , '')) + parseInt(liadjexp.toString().replace(/,/g , '')) + parseInt(liadjpla.toString().replace(/,/g , '')) + parseInt(liadjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(liadjbed.toString().replace(/,/g , '')) + parseInt(liadjpark.toString().replace(/,/g , '')) + parseInt(liadjpool.toString().replace(/,/g , '')) + parseInt(liadjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjgood.toString().replace(/,/g , '')) + parseInt(liadjuti.toString().replace(/,/g , '')) + parseInt(liadjbal.toString().replace(/,/g , '')) + parseInt(liadjland.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjbua.toString().replace(/,/g , '')) + parseInt(liadjdev.toString().replace(/,/g , '')) + parseInt(liadjdate.toString().replace(/,/g , ''));
	 $('#listingmarketvalue').val(toComma(marketValue));
	 lifinalValue = parseInt(parseInt(($('#listingmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#listingfinalvalue').val(toComma(lifinalValue));
});
$("#cliweibua").keyup(function(){
	if($("#cliweibua").val() != $("#liweibua").val()){
		$("#cliweibua").css("color","crimson");
	}
	else{
		$("#cliweibua").css("color","#6c757d");
	}
	liadjbua = parseFloat(($('#lidiffbua').val()).replace(/,/g , '')) * parseFloat(($("#cliweibua").val()).replace(/%/g , '')) * parseInt(lipricePerAvg) / 100;
    $('#liadjbua').val(toComma(liadjbua));
	 //Market Value//
	 var marketValue = parseInt(lipriceAvg) + parseInt(liadjloc.toString().replace(/,/g , '')) + parseInt(liadjage.toString().replace(/,/g , '')) + parseInt(liadjten.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjview.toString().replace(/,/g , '')) + parseInt(liadjsta.toString().replace(/,/g , '')) + parseInt(liadjqua.toString().replace(/,/g , '')) + parseInt(liadjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjfur.toString().replace(/,/g , '')) + parseInt(liadjexp.toString().replace(/,/g , '')) + parseInt(liadjpla.toString().replace(/,/g , '')) + parseInt(liadjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(liadjbed.toString().replace(/,/g , '')) + parseInt(liadjpark.toString().replace(/,/g , '')) + parseInt(liadjpool.toString().replace(/,/g , '')) + parseInt(liadjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjgood.toString().replace(/,/g , '')) + parseInt(liadjuti.toString().replace(/,/g , '')) + parseInt(liadjbal.toString().replace(/,/g , '')) + parseInt(liadjland.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjbua.toString().replace(/,/g , ''))+ parseInt(liadjdev.toString().replace(/,/g , ''))  + parseInt(liadjdate.toString().replace(/,/g , ''));
	 $('#listingmarketvalue').val(toComma(marketValue));
	 lifinalValue = parseInt(parseInt(($('#listingmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#listingfinalvalue').val(toComma(lifinalValue));
});
$("#cliweidate").keyup(function(){
	if($("#cliweidate").val() != $("#liweidate").val()){
		$("#cliweidate").css("color","crimson");
	}
	else{
		$("#cliweidate").css("color","#6c757d");
	}
	var value = $(this).val();
	liadjdate = parseFloat(value.replace(/%/g , '')) * parseInt(lipriceAvg) * (16 / 30) / 100;
    $('#liadjdate').val(toComma(liadjdate));
	 //Market Value//
	 var marketValue = parseInt(lipriceAvg) + parseInt(liadjloc.toString().replace(/,/g , '')) + parseInt(liadjage.toString().replace(/,/g , '')) + parseInt(liadjten.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjview.toString().replace(/,/g , '')) + parseInt(liadjsta.toString().replace(/,/g , '')) + parseInt(liadjqua.toString().replace(/,/g , '')) + parseInt(liadjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjfur.toString().replace(/,/g , '')) + parseInt(liadjexp.toString().replace(/,/g , '')) + parseInt(liadjpla.toString().replace(/,/g , '')) + parseInt(liadjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(liadjbed.toString().replace(/,/g , '')) + parseInt(liadjpark.toString().replace(/,/g , '')) + parseInt(liadjpool.toString().replace(/,/g , '')) + parseInt(liadjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjgood.toString().replace(/,/g , '')) + parseInt(liadjuti.toString().replace(/,/g , '')) + parseInt(liadjbal.toString().replace(/,/g , '')) + parseInt(liadjland.toString().replace(/,/g , '')) + 
	 				   parseInt(liadjbua.toString().replace(/,/g , '')) + parseInt(liadjdev.toString().replace(/,/g , '')) + parseInt(liadjdate.toString().replace(/,/g , ''));
	 $('#listingmarketvalue').val(toComma(marketValue));
	 lifinalValue = parseInt(parseInt(($('#listingmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#listingfinalvalue').val(toComma(lifinalValue));
});

$("#laverage").click(function(){
	   var propertyType=$('#propertyvalued').val();
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
		 $('#liavgage').val($('#age').val());
		 $('#ecommunity').val(area);
		 $('#ebuidingName').val(buildingName);
		 $('#epropertyType').val(propertyType);
		 $('#vlc-wr').text($('#reference').val());
		 $('#vlc-vd').text($('#valDate').val());
		 $('#vlc-property').text(propList);
		 $('#vlc-datefrom').text(datefrom);
		 $('#vlc-dateto').text(dateto);
		 $('#vlc-buildingName').text(buildingName);
		 $('#vlc-subCommunity').text(neighbourhood);
		 $('#vlc-community').text(area);
		 $('#vlc-city').text(city);
		 if($('#landPrice').val() != ''){
			 $('#liclandprice').text(toComma($('#landPrice').val()));
		 }
		 else{
			 $('#liclandprice').text(0);
		 }
		 $('#licparkingPrice').text(toComma($('#parkingPrice').val()));
		 $('#licpoolPrice').text(toComma($('#poolPrice').val()));
		 $('#liclandscapePrice').text(toComma($('#landscapePrice').val()));
		 $('#licwhitegoodsPrice').text(toComma($('#whitegoodsPrice').val()));
		 $('#licutiliesPrice').text(toComma($('#utiliesPrice').val()));
		 if(bedfrom != ""){
			 $('#vlc-bedfrom').text(bedfrom);
		 }
		 else{
			 $('#vlc-bedfrom').text("-");
		 }
		 if(bedto !=""){
			 $('#vlc-bedto').text(bedto);
		 }
		 else{
			 $('#vlc-bedto').text("-");
		 }
		 if(landfrom !=""){
			 $('#vlc-landfrom').text(landfrom);
		 }
		 else{
			 $('#vlc-landfrom').text("-");
		 }
		 if(landto !=""){
			 $('#vlc-landto').text(landto);
		 }
		 else{
			 $('#vlc-landto').text("-");
		 }
		 if(buafrom !=""){
			 $('#vlc-buafrom').text(buafrom);
		 }
		 else{
			 $('#vlc-buafrom').text("-");
		 }
		 if(buato !=""){
			 $('#vlc-buato').text(buato);
		 }
		 else{
			 $('#vlc-buato').text("-");
		 }
		 if(pricefrom !=""){
			 $('#vlc-pricefrom').text(pricefrom);
		 }
		 else{
			 $('#vlc-pricefrom').text("-");
		 }
		 if(priceto !=""){
			 $('#vlc-priceto').text(priceto);
		 }
		 else{
			 $('#vlc-priceto').text("-");
		 }
		 if(pricesqtfrom !=""){
			 $('#vlc-pricesqtfrom').text(pricesqtfrom);
		 }
		 else{
			 $('#vlc-pricesqtfrom').text("-");
		 }
		 if(pricesqtto !=""){
			 $('#vlc-pricesqtto').text(pricesqtto);
		 }
		 else{
			 $('#vlc-pricesqtto').text("-");
		 }
	   $.ajax({	
			url : 'listings-filter-transac',
			dataType: "text",
			asyn: true,
			data : {city : city,area:area,neighbourhood:neighbourhood,buildingName:buildingName,bedfrom:bedfrom,bedto:bedto,
				landfrom:landfrom,landto:landto,buafrom:buafrom,buato:buato,pricefrom:pricefrom,priceto:priceto,
				pricesqtfrom:pricesqtfrom,pricesqtto:pricesqtto,datefrom:datefrom,dateto:dateto,propList:propList},
			method : 'POST',
			success : function(response) {	
				var obj = $.parseJSON(response);
			    lipriceAvg = obj.lipriceAvg;
			    lipricePerAvg = obj.lipricePerAvg;
				var lisizeAvg = obj.lisizeAvg;
				var lidateAvg = obj.lidateAvg;
				var libedAvg = obj.libedAvg;
				lilocAvg = obj.lilocAvg;
				liageAvg = obj.liageAvg;
				litenAvg = obj.litenAvg;
				liviewAvg = obj.liviewAvg;
				listaAvg = obj.listaAvg;
				liquaAvg = obj.liquaAvg;
				liupgAvg = obj.liupgAvg;
				lifurAvg = obj.lifurAvg;
				liparkAvg = obj.liparkAvg;
				lipoolAvg = obj.lipoolAvg;
				lilandscapeAvg = obj.lilandscapeAvg;
				ligoodAvg = obj.ligoodAvg;
				liutiAvg = obj.liutiAvg;
				libalAvg = obj.libalAvg;
				lidevAvg = obj.lidevAvg;
				liexpAvg = obj.liexpAvg;
				liplaAvg = obj.liplaAvg;
				lifloorAvg = obj.lifloorAvg;
				lilandAvg = obj.lilandAvg;
				if(lilandAvg == "-"){
					lilandAvg = 0;
				}
				var lilessThan1Month = obj.lilessThan1Month;
				var lilessThan2Month = obj.lilessThan2Month;
				var lilessThan3Month = obj.lilessThan3Month;
				var lilessThan4Month = obj.lilessThan4Month;
				var lilessThan5Month = obj.lilessThan5Month;
				var lilessThan6Month = obj.lilessThan6Month;
				var lilessThan7Month = obj.lilessThan7Month;
				var lilessThan8Month = obj.lilessThan8Month;
				var lilessThan9Month = obj.lilessThan9Month;
				var lilessThan10Month = obj.lilessThan10Month;
				var lilessThan11Month = obj.lilessThan11Month;
				var lilessThan12Month = obj.lilessThan12Month;
				liexpWeight = obj.liexpWeight;
				liplaWeight = obj.liplaWeight;
				listaWeight = obj.listaWeight;
				libedWeight = obj.libedWeight;
				lifurWeight = obj.lifurWeight;
				liupgradeWeight = obj.liupgradeWeight;
				libalWeight = obj.libalWeight;
				lilocWeight = obj.lilocWeight;
				liviewWeight = obj.liviewWeight;
				liquaWeight = obj.liquaWeight;
				lifloorWeight = obj.lifloorWeight;
				lilandWeight = obj.lilandWeight;
				libuaWeight = obj.libuaWeight;
				liupgradeWeight = obj.liupgradeWeight;
				liparkWeight = obj.liparkWeight;
				lipoolWeight = obj.lipoolWeight;
				litenureWeight = obj.litenWeight;
				lidevmargin = obj.lidevmargin;
				liageWeight = obj.liageWeight;
				lilandScapeWeight = obj.lilandScapeWeight;
				liwhiteGoodsWeight = obj.liwhiteGoodsWeight;
				liutilitiesWeight = obj.liutilitiesWeight;
				var bau = $('#builtUpAreaSize').val();
				var location = $('#location').val();
				var tenure = $('#tenure').val();
				var landscape = $('#landscape').val();
				var whitegoods = $('#whitegoods').val();
				var utilities = $('#utilities').val();
				var pool = $('#pool').val();
				var quality = $('#quality').val();
				var view = $('#view').val();
				var floorNo =  $('#floorno').val();
				var fullBulFloors =  $('#fullBulFloors').val();
				var maxAge = $('#maxAge').val();
				var finalAge = (parseFloat(liageWeight.replace(/%/g , '') / maxAge * 100)) + "" +"%";
				$('#liliavgdate').val(lidateAvg);
				$('#ebed').val(libedAvg);
				$('#liliavgbua').val(toComma(lisizeAvg));
				$('#elipriceAvg').val(toComma(lipriceAvg));
				$('#elipriceAvgper').val(toComma(lipricePerAvg));
				//Standard Weightage//
				$('#liweiloc').val(lilocWeight);
				$('#liweiview').val(liviewWeight);
				$('#liweiqua').val(liquaWeight);
				$('#liweifloor').val(lifloorWeight);
				$('#liweiland').val(lilandWeight);
				$('#liweibua').val(libuaWeight);
				$('#liweibed').val(libedWeight);
				$('#liweiexp').val(liexpWeight);
				$('#liweipla').val(liplaWeight);
				$('#liweista').val(listaWeight);
				$('#liweifur').val(lifurWeight);
				$('#liweibal').val(libalWeight);
				$('#liweiupg').val(liupgradeWeight);
				$('#liweipark').val(liparkWeight);
				$('#liweipool').val(lipoolWeight);
				$('#liweilandscape').val(lilandScapeWeight);
				$('#liweigood').val(liwhiteGoodsWeight);
				$('#liweiuti').val(liutilitiesWeight);
				$('#liweiten').val(litenureWeight);
				$('#liweiage').val(finalAge);
				$('#liweidev').val(lidevmargin);
				//changed weightage//
				$('#cliweiloc').val(lilocWeight);
				$('#cliweiview').val(liviewWeight);
				$('#cliweiqua').val(liquaWeight);
				$('#cliweifloor').val(lifloorWeight);
				$('#cliweiland').val(lilandWeight);
				$('#cliweibua').val(libuaWeight);
				$('#cliweibed').val(libedWeight);
				$('#cliweiexp').val(liexpWeight);
				$('#cliweipla').val(liplaWeight);
				$('#cliweista').val(listaWeight);
				$('#cliweifur').val(lifurWeight);
				$('#cliweibal').val(libalWeight);
				$('#cliweiupg').val(liupgradeWeight);
				$('#cliweipark').val(liparkWeight);
				$('#cliweipool').val(lipoolWeight);
				$('#cliweilandscape').val(lilandScapeWeight);
				$('#cliweigood').val(liwhiteGoodsWeight);
				$('#cliweiuti').val(liutilitiesWeight);
				$('#cliweiten').val(litenureWeight);
				$('#cliweiage').val(finalAge);
				$('#cliweidev').val(lidevmargin);
				
				// location//
				$('#liavgloc').val(lilocAvg);
				var lisubloc = calAvg(location);
				$('#lisubloc').val(lisubloc);
			    var lidiffloc = parseInt($('#lisubloc').val()) - parseInt($('#liavgloc').val());
			    $('#lidiffloc').val(lidiffloc);
			     liadjloc = parseInt(($('#lidiffloc').val()).replace(/,/g , '')) * parseFloat(lilocWeight.replace(/%/g , '')) * parseInt(lipriceAvg) / 100;
			    $('#liadjloc').val(toComma(liadjloc));
			    
			    // age//
			    $('#liavgage').val(liageAvg);
				$('#lisubage').val($('#age').val());
			    var lidiffage = parseInt($('#lisubage').val()) - parseInt($('#liavgage').val());
			    $('#lidiffage').val(lidiffage);
			    liadjage = parseInt(($('#lidiffage').val()).replace(/,/g , '')) * parseFloat(liageWeight.replace(/%/g , '')) * parseInt(lipriceAvg) / 100;
			    $('#liadjage').val(toComma(liadjage));
			    
			    // tenure//
			    $('#liavgten').val(litenAvg);
				var lisubten = calTenure(tenure);
				$('#lisubten').val(lisubten);
			    var lidifften = parseFloat($('#lisubten').val()) - parseFloat($('#liavgten').val());
			    $('#lidifften').val(lidifften);
			     liadjten= parseFloat(($('#lidifften').val()).replace(/,/g , '')) * parseFloat(litenureWeight.replace(/%/g , '')) * parseInt(lipriceAvg) / 100;
			    $('#liadjten').val(toComma(liadjten));
			    
			    // view//
			    $('#liavgview').val(liviewAvg);
			    var lisubview = calView(view);
			    $('#lisubview').val(lisubview);
			    var lidiffview = parseInt($('#lisubview').val()) - parseInt($('#liavgview').val());
			    $('#lidiffview').val(lidiffview);
			     liadjview = parseInt(($('#lidiffview').val()).replace(/,/g , ''))  * parseFloat(liviewWeight.replace(/%/g , '')) * parseInt(lipriceAvg) / 100;
			    $('#liadjview').val(toComma(liadjview));
			    
			    //Finishing Status//
			    $('#liavgsta').val(listaAvg);
				 $('#lisubsta').val(calSta($('#status').val()));
				 var lidiffsta = parseFloat($('#lisubsta').val() - $('#liavgsta').val());
				 $('#lidiffsta').val(lidiffsta);
				  liadjsta =  parseFloat(($('#lidiffsta').val()).replace(/,/g , ''))  * parseFloat(listaWeight.replace(/%/g , '')) * parseInt(lipriceAvg) / 100;
				 $('#liadjsta').val(toComma(liadjsta));
				 
				 // quality//
			    $('#liavgqua').val(liquaAvg);
			    var lisubqua = calAvg(quality);
			    $('#lisubqua').val(lisubqua);
			    var lidiffqua = parseInt($('#lisubqua').val()) - parseInt($('#liavgqua').val());
			    $('#lidiffqua').val(lidiffqua);
			     liadjqua = parseInt(($('#lidiffqua').val()).replace(/,/g , ''))  * parseFloat(liquaWeight.replace(/%/g , ''))  * parseInt(lipriceAvg) / 100;
			    $('#liadjqua').val(toComma(liadjqua));
			   
			    // upgrades//
			    $('#liavgupg').val(liupgAvg);
			    $('#lisubupg').val($('#overupg').val());
			    var lidiffupg = parseInt($('#lisubupg').val()) - parseInt($('#liavgupg').val());
			    $('#lidiffupg').val(lidiffupg);
			    liadjupg = parseInt(($('#lidiffupg').val()).replace(/,/g , ''))  * parseFloat(liupgradeWeight.replace(/%/g , '')) * parseInt(lipriceAvg) / 100;
			    $('#liadjupg').val(toComma(liadjupg));
			    
			    //Furnished//
			    $('#liavgfur').val(lifurAvg);
				 $('#lisubfur').val(calFur($('#furnished').val()));
				 var lidifffur = parseFloat($('#lisubfur').val() - $('#liavgfur').val());
				 $('#lidifffur').val(lidifffur);
				  liadjfur =  parseFloat(($('#lidifffur').val()).replace(/,/g , ''))  * parseFloat(lifurWeight.replace(/%/g , '')) * parseInt(lipriceAvg) / 100;
				 $('#liadjfur').val(toComma(liadjfur));
				 
				 //Property Exposure//
				 $('#liavgexp').val(liexpAvg);
				 $('#lisubexp').val(calExp($('#exposure').val()));
				 var lidiffexp = parseFloat($('#lisubexp').val() - $('#liavgexp').val());
				 $('#lidiffexp').val(lidiffexp);
				  liadjexp =  parseFloat(($('#lidiffexp').val()).replace(/,/g , ''))  * parseFloat(liexpWeight.replace(/%/g , '')) * parseInt(lipriceAvg) / 100;
				 $('#liadjexp').val(toComma(liadjexp));
				 
				 //Property Placement//
				 $('#liavgpla').val(liplaAvg);
				 $('#lisubpla').val(calPla($('#placement').val()));
				 var lidiffpla = parseFloat($('#lisubpla').val() - $('#liavgpla').val());
				 $('#lidiffpla').val(lidiffpla);
				  liadjpla =  parseFloat(($('#lidiffpla').val()).replace(/,/g , ''))  * parseFloat(liplaWeight.replace(/%/g , '')) * parseInt(lipriceAvg) / 100;
				 $('#liadjpla').val(toComma(liadjpla));
				
				//floor//
				 $('#liavgfloor').val(lifloorAvg);
				$('#lisubfloor').val(floorNo);
				var lidifffloor = parseFloat($('#lisubfloor').val() - $('#liavgfloor').val());
				$('#lidifffloor').val(lidifffloor);
				 liadjfloor = parseFloat(($('#lidifffloor').val()).replace(/,/g , ''))  * parseFloat(lifloorWeight.replace(/%/g , '')) * parseInt(lipriceAvg) / 100;
				$('#liadjfloor').val(toComma(liadjfloor));
				
				//beds//
				 $('#liavgbed').val(libedAvg);
				 $('#lisubbed').val($('#bedroom').val());
				 var lidiffbed =  parseInt($('#lisubbed').val()) - parseInt(libedAvg);
				 $('#lidiffbed').val(lidiffbed);
				  liadjbed =  parseInt(($('#lidiffbed').val()).replace(/,/g , ''))  * parseFloat(libedWeight.replace(/%/g , '')) * parseInt(lipriceAvg) / 100;
				 $('#liadjbed').val(toComma(liadjbed));
				 
				 // parking//
			    $('#liavgpark').val(liparkAvg);
			    $('#lisubpark').val($('#parking').val());
			    var lidiffpark = parseFloat($('#lisubpark').val()) - parseFloat($('#liavgpark').val());
			    $('#lidiffpark').val(lidiffpark);
			     liadjpark = parseFloat(($('#lidiffpark').val()).replace(/,/g , '')) * parseFloat(liparkWeight.replace(/%/g , '')) * parseInt($('#parkingPrice').val()) / 100;
			    $('#liadjpark').val(toComma(liadjpark));
				    
			    // pool//
			    $('#liavgpool').val(lipoolAvg);
				var lisubpool = calPool(pool);
				$('#lisubpool').val(lisubpool);
			    var lidiffpool = parseFloat($('#lisubpool').val()) - parseFloat($('#liavgpool').val());
			    $('#lidiffpool').val(lidiffpool);
			     liadjpool = parseFloat(($('#lidiffpool').val()).replace(/,/g , '')) * parseFloat(lipoolWeight.replace(/%/g , '')) * parseInt($('#poolPrice').val()) / 100;
			    $('#liadjpool').val(toComma(liadjpool));
			    	
			    // landscape//
			    $('#liavglandscape').val(lilandscapeAvg);
				var lisublandscape = calLandScape(landscape);
				$('#lisublandscape').val(lisublandscape);
			    var lidifflandscape = parseFloat($('#lisublandscape').val()) - parseFloat($('#liavglandscape').val());
			    $('#lidifflandscape').val(lidifflandscape);
			     liadjlandscape= parseFloat(($('#lidifflandscape').val()).replace(/,/g , '')) * parseFloat(lilandScapeWeight.replace(/%/g , '')) * parseInt($('#landscapePrice').val()) / 100;
			    $('#liadjlandscape').val(toComma(liadjlandscape));
			   
			    // whitegoods//
			    $('#liavggood').val(ligoodAvg);
				var lisubgood= calPool(whitegoods);
				$('#lisubgood').val(lisubgood);
			    var lidiffgood = parseFloat($('#lisubgood').val()) - parseFloat($('#liavggood').val());
			    $('#lidiffgood').val(lidiffgood);
			    liadjgood= parseFloat(($('#lidiffgood').val()).replace(/,/g , '')) * parseFloat(liwhiteGoodsWeight.replace(/%/g , '')) * parseInt($('#whitegoodsPrice').val()) / 100;
			    $('#liadjgood').val(toComma(liadjgood));
			    
			    // utilities//
			    $('#liavguti').val(liutiAvg);
				var lisubuti= calPool(utilities);
				$('#lisubuti').val(lisubuti);
			    var lidiffuti = parseFloat($('#lisubuti').val()) - parseFloat($('#liavguti').val());
			    $('#lidiffuti').val(lidiffuti);
			    liadjuti= parseFloat(($('#lidiffuti').val()).replace(/,/g , '')) * parseFloat(liutilitiesWeight.replace(/%/g , '')) * parseInt($('#utiliesPrice').val()) / 100;
			    $('#liadjuti').val(toComma(liadjuti));
			    

			    // developer margin//
			    $('#liavgdev').val(lidevAvg)
			    var lisubdev = calMargin($('#devmargin').val());
			    $('#lisubdev').val(lisubdev);
			    var lidiffdev = parseFloat($('#lisubdev').val()) - parseFloat($('#liavgdev').val());
			    $('#lidiffdev').val(lidiffdev);
			    liadjdev= parseFloat(($('#lidiffdev').val()).replace(/,/g , '')) * parseFloat(lidevmargin.replace(/%/g , '')) *  parseInt(lipriceAvg) / 100;
			    $('#liadjdev').val(toComma(liadjdev));
			   
			    // balsize//
			    $('#liavgbal').val(libalAvg);
			    $('#lisubbal').val($('#balsize').val());
			    var lidiffbal = parseInt($('#lisubbal').val()) - parseInt($('#liavgbal').val());
			    $('#lidiffbal').val(lidiffbal);
			    liadjbal = parseInt(($('#lidiffbal').val()).replace(/,/g , ''))  * parseFloat(libalWeight.replace(/%/g , '')) * parseInt(lipricePerAvg) / 100;
			    $('#liadjbal').val(toComma(liadjbal));
			    
				//LandSize//
				 $('#liavgland').val(toComma(lilandAvg));
				 var lisubland = null;
				 if($('#landSize').val() !=""){
					 lisubland = $('#landSize').val();
				 }
				 else{
					 lisubland = 0;
				 }
				 $('#lisubland').val(toComma(lisubland));
				 var lidiffland = parseInt(lisubland) - parseInt(lilandAvg);
				 $('#lidiffland').val(toComma(lidiffland));
				 if($('#landPrice').val() != ""){
					 liadjland = parseInt(($('#lidiffland').val()).replace(/,/g , ''))  * parseFloat(lilandWeight.replace(/%/g , '')) * parseInt($('#landPrice').val()) / 100;
				 }
				 else{
					 liadjland = 0;
				 }
				 $('#liadjland').val(toComma(liadjland));
				 
				//bua//
				 $('#liavgbua').val(toComma(lisizeAvg));
				 $('#lisubbua').val(toComma($('#netbuitUpAreaSize').val()));
				 var lidiffbua =  parseInt($('#netbuitUpAreaSize').val()) - parseInt(lisizeAvg);
				 $('#lidiffbua').val(toComma(lidiffbua));
				 liadjbua =  parseInt(($('#lidiffbua').val()).replace(/,/g , ''))  * parseFloat(libuaWeight.replace(/%/g , '')) * parseInt(lipricePerAvg) / 100;
				 $('#liadjbua').val(toComma(liadjbua));
				 
				 //date//
				 $('#liavgdate').val(lidateAvg);
				 $('#lisubdate').val($('#insdate').val());
				 var lidiffdate = calDate($('#liavgdate').val(),$('#lisubdate').val());
				 $('#lidiffdate').val(toComma(lidiffdate));
				 if( lidiffdate <= 30 ){
					 lidateWeight = lilessThan1Month;
					 $('#liweidate').val(lilessThan1Month);
					 $('#cliweidate').val(lilessThan1Month);
					  liadjdate = parseFloat(lilessThan1Month.replace(/%/g , '')) * parseInt(lipriceAvg) * (16 / 30) / 100;
					 $('#liadjdate').val(toComma(liadjdate));
				 }
				 if( lidiffdate <= 60 && lidiffdate > 30){
					 lidateWeight = lilessThan2Month;
					 $('#liweidate').val(lilessThan2Month);
					 $('#cliweidate').val(lilessThan2Month);
					  liadjdate = parseFloat(lilessThan2Month.replace(/%/g , '')) * parseInt(lipriceAvg) * (16 / 30) / 100;
					 $('#liadjdate').val(toComma(liadjdate));
				 }
				 if( lidiffdate <= 90 && lidiffdate > 60){
					 lidateWeight = lilessThan3Month;
					 $('#liweidate').val(lilessThan3Month);
					 $('#cliweidate').val(lilessThan3Month);
					  liadjdate = parseFloat(lilessThan3Month.replace(/%/g , '')) * parseInt(lipriceAvg) * (16 / 30) / 100;
					 $('#liadjdate').val(toComma(liadjdate));
				 }
				 if( lidiffdate <= 120 && lidiffdate > 90){
					 lidateWeight = lilessThan4Month;
					 $('#liweidate').val(lilessThan4Month);
					 $('#cliweidate').val(lilessThan4Month);
					  liadjdate = parseFloat(lilessThan4Month.replace(/%/g , '')) * parseInt(lipriceAvg) * (16 / 30) / 100;
					 $('#liadjdate').val(toComma(liadjdate));
				 }
				 if( lidiffdate <= 150 && lidiffdate > 120){
					 lidateWeight = lilessThan5Month;
					 $('#liweidate').val(lilessThan5Month);
					 $('#cliweidate').val(lilessThan5Month);
					  liadjdate = parseFloat(lilessThan5Month.replace(/%/g , '')) * parseInt(lipriceAvg) * (16 / 30) / 100;
					 $('#liadjdate').val(toComma(liadjdate));
				 }
				 if( lidiffdate <= 180 && lidiffdate > 150){
					 lidateWeight = lilessThan6Month;
					 $('#liweidate').val(lilessThan6Month);
					 $('#cliweidate').val(lilessThan6Month);
					  liadjdate = parseFloat(lilessThan6Month.replace(/%/g , '')) * parseInt(lipriceAvg) * (16 / 30) / 100;
					 $('#liadjdate').val(toComma(liadjdate));
				 }
				 if( lidiffdate <= 210 && lidiffdate > 180){
					 lidateWeight = lilessThan7Month;
					 $('#liweidate').val(lilessThan7Month);
					 $('#cliweidate').val(lilessThan7Month);
					  liadjdate = parseFloat(lilessThan7Month.replace(/%/g , '')) * parseInt(lipriceAvg) * (16 / 30) / 100;
					 $('#liadjdate').val(toComma(liadjdate));
				 }
				 if( lidiffdate <= 240 && lidiffdate > 210){
					 lidateWeight = lilessThan8Month;
					 $('#liweidate').val(lilessThan8Month);
					 $('#cliweidate').val(lilessThan8Month);
					  liadjdate = parseFloat(lilessThan8Month.replace(/%/g , '')) * parseInt(lipriceAvg) * (16 / 30) / 100;
					 $('#liadjdate').val(toComma(liadjdate));
				 }
				 if( lidiffdate <= 270 && lidiffdate > 240){
					 lidateWeight = lilessThan9Month;
					 $('#liweidate').val(lilessThan9Month);
					 $('#cliweidate').val(lilessThan9Month);
					  liadjdate = parseFloat(lilessThan9Month.replace(/%/g , '')) * parseInt(lipriceAvg) * (16 / 30) / 100;
					 $('#liadjdate').val(toComma(liadjdate));
				 }
				 if( lidiffdate <= 300 && lidiffdate > 270){
					 lidateWeight = lilessThan10Month;
					 $('#liweidate').val(lilessThan10Month);
					 $('#cliweidate').val(lilessThan10Month);
					  liadjdate = parseFloat(lilessThan10Month.replace(/%/g , '')) * parseInt(lipriceAvg) * (16 / 30) / 100;
					 $('#liadjdate').val(toComma(liadjdate));
				 }
				 if( lidiffdate <= 330 && lidiffdate > 300){
					 lidateWeight = lilessThan11Month;
					 $('#liweidate').val(lilessThan11Month);
					 $('#cliweidate').val(lilessThan11Month);
					  liadjdate = parseFloat(lilessThan11Month.replace(/%/g , '')) * parseInt(lipriceAvg) * (16 / 30) / 100;
					 $('#liadjdate').val(toComma(liadjdate));
				 }
				 if( lidiffdate <= 360 && lidiffdate > 330){
					 lidateWeight = lilessThan12Month;
					 $('#liweidate').val(lilessThan12Month);
					 $('#cliweidate').val(lilessThan12Month);
					  liadjdate = parseFloat(lilessThan12Month.replace(/%/g , '')) * parseInt(lipriceAvg) * (16 / 30) / 100;
					 $('#liadjdate').val(toComma(liadjdate));
				 }
				 
			     //Market Value//
				 var marketValue = parseInt(lipriceAvg) + parseInt(liadjloc.toString().replace(/,/g , '')) + parseInt(liadjage.toString().replace(/,/g , '')) + parseInt(liadjten.toString().replace(/,/g , '')) + 
				 				   parseInt(liadjview.toString().replace(/,/g , '')) + parseInt(liadjsta.toString().replace(/,/g , '')) + parseInt(liadjqua.toString().replace(/,/g , '')) + parseInt(liadjupg.toString().replace(/,/g , '')) + 
				 				   parseInt(liadjfur.toString().replace(/,/g , '')) + parseInt(liadjexp.toString().replace(/,/g , '')) + parseInt(liadjpla.toString().replace(/,/g , '')) + parseInt(liadjfloor.toString().replace(/,/g , '')) +
				 				   parseInt(liadjbed.toString().replace(/,/g , '')) + parseInt(liadjpark.toString().replace(/,/g , '')) + parseInt(liadjpool.toString().replace(/,/g , '')) + parseInt(liadjlandscape.toString().replace(/,/g , '')) + 
				 				   parseInt(liadjgood.toString().replace(/,/g , '')) + parseInt(liadjuti.toString().replace(/,/g , '')) + parseInt(liadjbal.toString().replace(/,/g , '')) + parseInt(liadjland.toString().replace(/,/g , '')) + 
				 				   parseInt(liadjbua.toString().replace(/,/g , '')) + parseInt(liadjdev.toString().replace(/,/g , '')) + parseInt(liadjdate.toString().replace(/,/g , ''));
				 $('#listingmarketvalue').val(toComma(marketValue));
				 lifinalValue = parseInt(parseInt(($('#listingmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
				 $('#listingfinalvalue').val(toComma(lifinalValue));
				 
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
	if(value == "lisubstandard"){
		final = "2";
	}
	if(value == "Poor"){
		final = "1";
	}
	return final;
}
function calTenure(value){
	var final = null;
	if(value == "Freehold"){
		final = "2";
	}
	if(value == "Non-Freehold(Emiratis)"){
		final = "1";
	}
	if(value == "Non-Freehold(Emiratis & GCC Citizens)"){
		final = "1.5";
	}
	if(value == "Leasehold"){
		final = "3";
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
		final = "1";
	}
	if(value == "Fitted"){
		final = "2";
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
function calLandScape(value){
	var final = null;
	if(value == "Yes"){
		final = "2";
	}
	if(value == "No"){
		final = "1";
	}
	if(value == "Semi-Landscape"){
		final = "1.5";
	}
	return final;
}
function calMargin(value){
	var final = null;
	if(value == "Yes"){
		final = "1";
	}
	if(value == "No"){
		final = "2";
	}
	return final;
}
function calPool(value){
	var final = null;
	if(value == "Yes"){
		final = "2";
	}
	if(value == "No"){
		final = "1";
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
	if(value == "Substandard View"){
		final = "2";
	}
	if(value == "Poor View"){
		final = "1";
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