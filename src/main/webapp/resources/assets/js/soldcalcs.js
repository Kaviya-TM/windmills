var locWeight = null;
var viewWeight = null; 
var quaWeight = null;
var floorWeight = null;
var levelWeight = null;
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
var parkWeight = null;
var poolWeight = null;
var landScapeWeight = null;
var whiteGoodsWeight = null;
var utilitiesWeight = null;
var tenureWeight = null;
var devmargin = null;
var priceAvg = null;
var pricePerAvg = null;
var landAvg = null;
var adjloc = null;
var adjview = null;
var adjqua = null;
var adjfloor = null;
var adjlevel = null;
var adjbua = null;
var adjbed = null;
var adjexp= null;
var adjpla = null;
var adjsta = null;
var adjdate = null;
var adjland = null;
var adjdev = null;
var finalValue = null;
$("#avgloc").keyup(function(){
	var diffloc = parseFloat($('#subloc').val()) - parseFloat($(this).val());
    $('#diffloc').val(diffloc);
	adjloc =  parseFloat(($('#diffloc').val()).replace(/,/g , ''))  * parseFloat(($("#cweiloc").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
	$('#adjloc').val(toComma(adjloc));
	 //Market Value//
	 var marketValue = parseInt(priceAvg) + parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjage.toString().replace(/,/g , '')) + parseInt(adjten.toString().replace(/,/g , '')) + 
	 				   parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , '')) + parseInt(adjqua.toString().replace(/,/g , '')) + parseInt(adjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(adjfur.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjfloor.toString().replace(/,/g , '')) + parseInt(adjlevel.toString().replace(/,/g , '')) +
	 				   parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjpark.toString().replace(/,/g , '')) + parseInt(adjpool.toString().replace(/,/g , '')) + parseInt(adjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(adjgood.toString().replace(/,/g , '')) + parseInt(adjuti.toString().replace(/,/g , '')) + parseInt(adjbal.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , '')) + 
	 				   parseInt(adjbua.toString().replace(/,/g , '')) + parseInt(adjdev.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , ''));
	 $('#soldmarketvalue').val(toComma(marketValue));
	 finalValue = parseInt(parseInt(($('#soldmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#soldfinalvalue').val(toComma(finalValue));
});
$("#avgview").keyup(function(){
	var diffview = parseFloat($('#subview').val()) - parseFloat($(this).val());
    $('#diffview').val(diffview);
    adjview =  parseFloat(($('#diffview').val()).replace(/,/g , ''))  * parseFloat(($("#cweiview").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
	$('#adjview').val(toComma(adjview));
	 //Market Value//
	 var marketValue = parseInt(priceAvg) + parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjage.toString().replace(/,/g , '')) + parseInt(adjten.toString().replace(/,/g , '')) + 
	 				   parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , '')) + parseInt(adjqua.toString().replace(/,/g , '')) + parseInt(adjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(adjfur.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjfloor.toString().replace(/,/g , '')) +  parseInt(adjlevel.toString().replace(/,/g , '')) +
	 				   parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjpark.toString().replace(/,/g , '')) + parseInt(adjpool.toString().replace(/,/g , '')) + parseInt(adjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(adjgood.toString().replace(/,/g , '')) + parseInt(adjuti.toString().replace(/,/g , '')) + parseInt(adjbal.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , '')) + 
	 				   parseInt(adjbua.toString().replace(/,/g , '')) + parseInt(adjdev.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , ''));
	 $('#soldmarketvalue').val(toComma(marketValue));
	 finalValue = parseInt(parseInt(($('#soldmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#soldfinalvalue').val(toComma(finalValue));
});
$("#avgqua").keyup(function(){
	var diffqua = parseFloat($('#subqua').val()) - parseFloat($(this).val());
    $('#diffqua').val(diffqua);
    adjqua =  parseFloat(($('#diffqua').val()).replace(/,/g , ''))  * parseFloat(($("#cweiqua").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
	$('#adjqua').val(toComma(adjqua));
	 //Market Value//
	 var marketValue = parseInt(priceAvg) + parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjage.toString().replace(/,/g , '')) + parseInt(adjten.toString().replace(/,/g , '')) + 
	 				   parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , '')) + parseInt(adjqua.toString().replace(/,/g , '')) + parseInt(adjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(adjfur.toString().avgbedreplace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjfloor.toString().replace(/,/g , '')) +  parseInt(adjlevel.toString().replace(/,/g , '')) +
	 				   parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjpark.toString().replace(/,/g , '')) + parseInt(adjpool.toString().replace(/,/g , '')) + parseInt(adjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(adjgood.toString().replace(/,/g , '')) + parseInt(adjuti.toString().replace(/,/g , '')) + parseInt(adjbal.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , '')) + 
	 				   parseInt(adjbua.toString().replace(/,/g , '')) + parseInt(adjdev.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , ''));
	 $('#soldmarketvalue').val(toComma(marketValue));
	 finalValue = parseInt(parseInt(($('#soldmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#soldfinalvalue').val(toComma(finalValue));
});
$("#avglevel").keyup(function(){
	var difflevel = parseFloat($('#sublevel').val()) - parseFloat($(this).val());
    $('#difflevel').val(difflevel);
    adjlevel =  parseFloat(($('#difflevel').val()).replace(/,/g , ''))  * parseFloat(($("#cweilevel").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
	$('#adjlevel').val(toComma(adjlevel));
	 //Market Value//
	 var marketValue = parseInt(priceAvg) + parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjage.toString().replace(/,/g , '')) + parseInt(adjten.toString().replace(/,/g , '')) + 
	 				   parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , '')) + parseInt(adjqua.toString().replace(/,/g , '')) + parseInt(adjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(adjfur.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjfloor.toString().replace(/,/g , '')) +  parseInt(adjlevel.toString().replace(/,/g , '')) +
	 				   parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjpark.toString().replace(/,/g , '')) + parseInt(adjpool.toString().replace(/,/g , '')) + parseInt(adjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(adjgood.toString().replace(/,/g , '')) + parseInt(adjuti.toString().replace(/,/g , '')) + parseInt(adjbal.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , '')) + 
	 				   parseInt(adjbua.toString().replace(/,/g , '')) + parseInt(adjdev.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , ''));
	 $('#soldmarketvalue').val(toComma(marketValue));
	 finalValue = parseInt(parseInt(($('#soldmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#soldfinalvalue').val(toComma(finalValue));
});
$("#avgupg").keyup(function(){
	var diffupg = parseFloat($('#subupg').val()) - parseFloat($(this).val());
    $('#diffupg').val(diffupg);
    adjupg =  parseFloat(($('#diffupg').val()).replace(/,/g , ''))  * parseFloat(($("#cweiupg").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
	$('#adjupg').val(toComma(adjupg));
	 //Market Value//
	 var marketValue = parseInt(priceAvg) + parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjage.toString().replace(/,/g , '')) + parseInt(adjten.toString().replace(/,/g , '')) + 
	 				   parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , '')) + parseInt(adjqua.toString().replace(/,/g , '')) + parseInt(adjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(adjfur.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjfloor.toString().replace(/,/g , '')) +  parseInt(adjlevel.toString().replace(/,/g , '')) +
	 				   parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjpark.toString().replace(/,/g , '')) + parseInt(adjpool.toString().replace(/,/g , '')) + parseInt(adjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(adjgood.toString().replace(/,/g , '')) + parseInt(adjuti.toString().replace(/,/g , '')) + parseInt(adjbal.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , '')) + 
	 				   parseInt(adjbua.toString().replace(/,/g , '')) + parseInt(adjdev.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , ''));
	 $('#soldmarketvalue').val(toComma(marketValue));
	 finalValue = parseInt(parseInt(($('#soldmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#soldfinalvalue').val(toComma(finalValue));
});
$("#avgten").keyup(function(){
	var difften = parseFloat($('#subten').val()) - parseFloat($(this).val());
    $('#difften').val(difften);
	adjten =  parseFloat(($('#difften').val()).replace(/,/g , ''))  * parseFloat(($("#cweiten").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
	$('#adjten').val(toComma(adjten));
	 //Market Value//
	 var marketValue = parseInt(priceAvg) + parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjage.toString().replace(/,/g , '')) + parseInt(adjten.toString().replace(/,/g , '')) + 
	 				   parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , '')) + parseInt(adjqua.toString().replace(/,/g , '')) + parseInt(adjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(adjfur.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjfloor.toString().replace(/,/g , '')) +  parseInt(adjlevel.toString().replace(/,/g , '')) +
	 				   parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjpark.toString().replace(/,/g , '')) + parseInt(adjpool.toString().replace(/,/g , '')) + parseInt(adjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(adjgood.toString().replace(/,/g , '')) + parseInt(adjuti.toString().replace(/,/g , '')) + parseInt(adjbal.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , '')) + 
	 				   parseInt(adjbua.toString().replace(/,/g , '')) + parseInt(adjdev.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , ''));
	 $('#soldmarketvalue').val(toComma(marketValue));
	 finalValue = parseInt(parseInt(($('#soldmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#soldfinalvalue').val(toComma(finalValue));
});
$("#avgsta").keyup(function(){
	var diffsta = parseFloat($('#substa').val()) - parseFloat($(this).val());
    $('#diffsta').val(diffsta);
	adjsta =  parseFloat(($('#diffsta').val()).replace(/,/g , ''))  * parseFloat(($("#cweista").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
	$('#adjsta').val(toComma(adjsta));
	 //Market Value//
	 var marketValue = parseInt(priceAvg) + parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjage.toString().replace(/,/g , '')) + parseInt(adjten.toString().replace(/,/g , '')) + 
	 				   parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , '')) + parseInt(adjqua.toString().replace(/,/g , '')) + parseInt(adjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(adjfur.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjfloor.toString().replace(/,/g , '')) +  parseInt(adjlevel.toString().replace(/,/g , '')) +
	 				   parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjpark.toString().replace(/,/g , '')) + parseInt(adjpool.toString().replace(/,/g , '')) + parseInt(adjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(adjgood.toString().replace(/,/g , '')) + parseInt(adjuti.toString().replace(/,/g , '')) + parseInt(adjbal.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , '')) + 
	 				   parseInt(adjbua.toString().replace(/,/g , '')) + parseInt(adjdev.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , ''));
	 $('#soldmarketvalue').val(toComma(marketValue));
	 finalValue = parseInt(parseInt(($('#soldmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#soldfinalvalue').val(toComma(finalValue));
});
$("#avgfur").keyup(function(){
	var difffur = parseFloat($('#subfur').val()) - parseFloat($(this).val());
    $('#difffur').val(difffur);
	adjfur =  parseFloat(($('#difffur').val()).replace(/,/g , ''))  * parseFloat(($("#cweifur").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
	$('#adjfur').val(toComma(adjfur));
	 //Market Value//
	 var marketValue = parseInt(priceAvg) + parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjage.toString().replace(/,/g , '')) + parseInt(adjten.toString().replace(/,/g , '')) + 
	 				   parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , '')) + parseInt(adjqua.toString().replace(/,/g , '')) + parseInt(adjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(adjfur.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjfloor.toString().replace(/,/g , '')) +  parseInt(adjlevel.toString().replace(/,/g , '')) +
	 				   parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjpark.toString().replace(/,/g , '')) + parseInt(adjpool.toString().replace(/,/g , '')) + parseInt(adjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(adjgood.toString().replace(/,/g , '')) + parseInt(adjuti.toString().replace(/,/g , '')) + parseInt(adjbal.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , '')) + 
	 				   parseInt(adjbua.toString().replace(/,/g , '')) + parseInt(adjdev.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , ''));
	 $('#soldmarketvalue').val(toComma(marketValue));
	 finalValue = parseInt(parseInt(($('#soldmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#soldfinalvalue').val(toComma(finalValue));
});
$("#avgexp").keyup(function(){
	var diffexp = parseFloat($('#subexp').val()) - parseFloat($(this).val());
    $('#diffexp').val(diffexp);
	adjexp =  parseFloat(($('#diffexp').val()).replace(/,/g , ''))  * parseFloat(($("#cweiexp").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
	$('#adjexp').val(toComma(adjexp));
	 //Market Value//
	 var marketValue = parseInt(priceAvg) + parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjage.toString().replace(/,/g , '')) + parseInt(adjten.toString().replace(/,/g , '')) + 
	 				   parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , '')) + parseInt(adjqua.toString().replace(/,/g , '')) + parseInt(adjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(adjfur.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjfloor.toString().replace(/,/g , '')) +  parseInt(adjlevel.toString().replace(/,/g , '')) +
	 				   parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjpark.toString().replace(/,/g , '')) + parseInt(adjpool.toString().replace(/,/g , '')) + parseInt(adjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(adjgood.toString().replace(/,/g , '')) + parseInt(adjuti.toString().replace(/,/g , '')) + parseInt(adjbal.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , '')) + 
	 				   parseInt(adjbua.toString().replace(/,/g , '')) + parseInt(adjdev.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , ''));
	 $('#soldmarketvalue').val(toComma(marketValue));
	 finalValue = parseInt(parseInt(($('#soldmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#soldfinalvalue').val(toComma(finalValue));
});
$("#avgpla").keyup(function(){
	var diffpla = parseFloat($('#subpla').val()) - parseFloat($(this).val());
    $('#diffpla').val(diffpla);
	adjpla =  parseFloat(($('#diffpla').val()).replace(/,/g , ''))  * parseFloat(($("#cweipla").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
	$('#adjpla').val(toComma(adjpla));
	 //Market Value//
	 var marketValue = parseInt(priceAvg) + parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjage.toString().replace(/,/g , '')) + parseInt(adjten.toString().replace(/,/g , '')) + 
	 				   parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , '')) + parseInt(adjqua.toString().replace(/,/g , '')) + parseInt(adjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(adjfur.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjfloor.toString().replace(/,/g , '')) +  parseInt(adjlevel.toString().replace(/,/g , '')) +
	 				   parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjpark.toString().replace(/,/g , '')) + parseInt(adjpool.toString().replace(/,/g , '')) + parseInt(adjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(adjgood.toString().replace(/,/g , '')) + parseInt(adjuti.toString().replace(/,/g , '')) + parseInt(adjbal.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , '')) + 
	 				   parseInt(adjbua.toString().replace(/,/g , '')) + parseInt(adjdev.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , ''));
	 $('#soldmarketvalue').val(toComma(marketValue));
	 finalValue = parseInt(parseInt(($('#soldmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#soldfinalvalue').val(toComma(finalValue));
});
$("#avgpool").keyup(function(){
	var diffpool = parseFloat($('#subpool').val()) - parseFloat($(this).val());
    $('#diffpool').val(diffpool);
	adjpool =  parseFloat(($('#diffpool').val()).replace(/,/g , ''))  * parseFloat(($("#cweipool").val()).replace(/%/g , '')) * parseInt($('#poolPrice').val()) / 100;
	$('#adjpool').val(toComma(adjpool));
	 //Market Value//
	 var marketValue = parseInt(priceAvg) + parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjage.toString().replace(/,/g , '')) + parseInt(adjten.toString().replace(/,/g , '')) + 
	 				   parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , '')) + parseInt(adjqua.toString().replace(/,/g , '')) + parseInt(adjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(adjfur.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjfloor.toString().replace(/,/g , '')) +  parseInt(adjlevel.toString().replace(/,/g , '')) +
	 				   parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjpark.toString().replace(/,/g , '')) + parseInt(adjpool.toString().replace(/,/g , '')) + parseInt(adjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(adjgood.toString().replace(/,/g , '')) + parseInt(adjuti.toString().replace(/,/g , '')) + parseInt(adjbal.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , '')) + 
	 				   parseInt(adjbua.toString().replace(/,/g , '')) + parseInt(adjdev.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , ''));
	 $('#soldmarketvalue').val(toComma(marketValue));
	 finalValue = parseInt(parseInt(($('#soldmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#soldfinalvalue').val(toComma(finalValue));
});
$("#avglandscape").keyup(function(){
	var difflandscape = parseFloat($('#sublandscape').val()) - parseFloat($(this).val());
    $('#difflandscape').val(difflandscape);
	adjlandscape =  parseFloat(($('#difflandscape').val()).replace(/,/g , ''))  * parseFloat(($("#cweilandscape").val()).replace(/%/g , '')) * parseInt($('#landscapePrice').val()) / 100;
	$('#adjlandscape').val(toComma(adjlandscape));
	 //Market Value//
	 var marketValue = parseInt(priceAvg) + parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjage.toString().replace(/,/g , '')) + parseInt(adjten.toString().replace(/,/g , '')) + 
	 				   parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , '')) + parseInt(adjqua.toString().replace(/,/g , '')) + parseInt(adjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(adjfur.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjfloor.toString().replace(/,/g , '')) +  parseInt(adjlevel.toString().replace(/,/g , '')) +
	 				   parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjpark.toString().replace(/,/g , '')) + parseInt(adjpool.toString().replace(/,/g , '')) + parseInt(adjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(adjgood.toString().replace(/,/g , '')) + parseInt(adjuti.toString().replace(/,/g , '')) + parseInt(adjbal.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , '')) + 
	 				   parseInt(adjbua.toString().replace(/,/g , '')) + parseInt(adjdev.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , ''));
	 $('#soldmarketvalue').val(toComma(marketValue));
	 finalValue = parseInt(parseInt(($('#soldmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#soldfinalvalue').val(toComma(finalValue));
});
$("#avggood").keyup(function(){
	var diffgood = parseFloat($('#subgood').val()) - parseFloat($(this).val());
    $('#diffgood').val(diffgood);
	adjgood =  parseFloat(($('#diffgood').val()).replace(/,/g , ''))  * parseFloat(($("#cweigood").val()).replace(/%/g , '')) * parseInt($('#whitegoodsPrice').val()) / 100;
	$('#adjgood').val(toComma(adjgood));
	 //Market Value//
	 var marketValue = parseInt(priceAvg) + parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjage.toString().replace(/,/g , '')) + parseInt(adjten.toString().replace(/,/g , '')) + 
	 				   parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , '')) + parseInt(adjqua.toString().replace(/,/g , '')) + parseInt(adjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(adjfur.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjfloor.toString().replace(/,/g , '')) +  parseInt(adjlevel.toString().replace(/,/g , '')) +
	 				   parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjpark.toString().replace(/,/g , '')) + parseInt(adjpool.toString().replace(/,/g , '')) + parseInt(adjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(adjgood.toString().replace(/,/g , '')) + parseInt(adjuti.toString().replace(/,/g , '')) + parseInt(adjbal.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , '')) + 
	 				   parseInt(adjbua.toString().replace(/,/g , '')) + parseInt(adjdev.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , ''));
	 $('#soldmarketvalue').val(toComma(marketValue));
	 finalValue = parseInt(parseInt(($('#soldmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#soldfinalvalue').val(toComma(finalValue));
});
$("#avguti").keyup(function(){
	var diffuti = parseFloat($('#subuti').val()) - parseFloat($(this).val());
    $('#diffuti').val(diffuti);
	adjuti =  parseFloat(($('#diffuti').val()).replace(/,/g , ''))  * parseFloat(($("#cweiuti").val()).replace(/%/g , '')) * parseInt($('#utiliesPrice').val()) / 100;
	$('#adjuti').val(toComma(adjuti));
	 //Market Value//
	 var marketValue = parseInt(priceAvg) + parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjage.toString().replace(/,/g , '')) + parseInt(adjten.toString().replace(/,/g , '')) + 
	 				   parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , '')) + parseInt(adjqua.toString().replace(/,/g , '')) + parseInt(adjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(adjfur.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjfloor.toString().replace(/,/g , '')) +  parseInt(adjlevel.toString().replace(/,/g , '')) +
	 				   parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjpark.toString().replace(/,/g , '')) + parseInt(adjpool.toString().replace(/,/g , '')) + parseInt(adjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(adjgood.toString().replace(/,/g , '')) + parseInt(adjuti.toString().replace(/,/g , '')) + parseInt(adjbal.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , '')) + 
	 				   parseInt(adjbua.toString().replace(/,/g , '')) + parseInt(adjdev.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , ''));
	 $('#soldmarketvalue').val(toComma(marketValue));
	 finalValue = parseInt(parseInt(($('#soldmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#soldfinalvalue').val(toComma(finalValue));
});
$("#avgbal").keyup(function(){
	var diffbal = parseInt($('#subbal').val()) - parseInt($(this).val());
    $('#diffbal').val(diffbal);
	adjbal =  parseInt(($('#diffbal').val()).replace(/,/g , ''))  * parseFloat(($("#cweibal").val()).replace(/%/g , '')) * parseInt(pricePerAvg) / 100;
	$('#adjbal').val(toComma(adjbal));
	 //Market Value//
	 var marketValue = parseInt(priceAvg) + parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjage.toString().replace(/,/g , '')) + parseInt(adjten.toString().replace(/,/g , '')) + 
	 				   parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , '')) + parseInt(adjqua.toString().replace(/,/g , '')) + parseInt(adjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(adjfur.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjfloor.toString().replace(/,/g , '')) +  parseInt(adjlevel.toString().replace(/,/g , '')) +
	 				   parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjpark.toString().replace(/,/g , '')) + parseInt(adjpool.toString().replace(/,/g , '')) + parseInt(adjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(adjgood.toString().replace(/,/g , '')) + parseInt(adjuti.toString().replace(/,/g , '')) + parseInt(adjbal.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , '')) + 
	 				   parseInt(adjbua.toString().replace(/,/g , '')) + parseInt(adjdev.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , ''));
	 $('#soldmarketvalue').val(toComma(marketValue));
	 finalValue = parseInt(parseInt(($('#soldmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#soldfinalvalue').val(toComma(finalValue));
});
$("#avgdev").keyup(function(){
	var diffdev = parseInt($('#subdev').val()) - parseInt($(this).val());
    $('#diffdev').val(diffdev);
	adjdev =  parseInt(($('#diffdev').val()).replace(/,/g , ''))  * parseFloat(($("#cweidev").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
	$('#adjdev').val(toComma(adjdev));
	 //Market Value//
	 var marketValue = parseInt(priceAvg) + parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjage.toString().replace(/,/g , '')) + parseInt(adjten.toString().replace(/,/g , '')) + 
	 				   parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , '')) + parseInt(adjqua.toString().replace(/,/g , '')) + parseInt(adjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(adjfur.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjfloor.toString().replace(/,/g , '')) +  parseInt(adjlevel.toString().replace(/,/g , '')) +
	 				   parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjpark.toString().replace(/,/g , '')) + parseInt(adjpool.toString().replace(/,/g , '')) + parseInt(adjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(adjgood.toString().replace(/,/g , '')) + parseInt(adjuti.toString().replace(/,/g , '')) + parseInt(adjbal.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , '')) + 
	 				   parseInt(adjbua.toString().replace(/,/g , '')) + parseInt(adjdev.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , ''));
	 $('#soldmarketvalue').val(toComma(marketValue));
	 finalValue = parseInt(parseInt(($('#soldmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#soldfinalvalue').val(toComma(finalValue));
});
$("#avgbua").keyup(function(){
	 var diffbua =  parseInt($('#buitUpAreaSize').val()) - parseInt(($("#avgbua").val()).toString().replace(/,/g , ''));
	 $('#diffbua').val(toComma(diffbua));
	  adjbua =  parseInt(($('#diffbua').val()).replace(/,/g , ''))  * parseFloat(buaWeight.replace(/%/g , '')) * parseInt(pricePerAvg) / 100;
	 $('#adjbua').val(toComma(adjbua));
	 //Market Value//
	 var marketValue = parseInt(priceAvg) + parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjage.toString().replace(/,/g , '')) + parseInt(adjten.toString().replace(/,/g , '')) + 
	 				   parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , '')) + parseInt(adjqua.toString().replace(/,/g , '')) + parseInt(adjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(adjfur.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjfloor.toString().replace(/,/g , '')) +  parseInt(adjlevel.toString().replace(/,/g , '')) +
	 				   parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjpark.toString().replace(/,/g , '')) + parseInt(adjpool.toString().replace(/,/g , '')) + parseInt(adjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(adjgood.toString().replace(/,/g , '')) + parseInt(adjuti.toString().replace(/,/g , '')) + parseInt(adjbal.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , '')) + 
	 				   parseInt(adjbua.toString().replace(/,/g , '')) + parseInt(adjdev.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , ''));
	 $('#soldmarketvalue').val(toComma(marketValue));
	 finalValue = parseInt(parseInt(($('#soldmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#soldfinalvalue').val(toComma(finalValue));
});
$("#avgpark").keyup(function(){
	var diffpark = parseInt($('#subpark').val()) - parseInt($(this).val());
    $('#diffpark').val(diffpark);
	adjpark =  parseInt(($('#diffpark').val()).replace(/,/g , ''))  * parseFloat(($("#cweipark").val()).replace(/%/g , '')) * parseInt($('#parkingPrice').val()) / 100;
	$('#adjpark').val(toComma(adjpark));
	 //Market Value//
	 var marketValue = parseInt(priceAvg) + parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjage.toString().replace(/,/g , '')) + parseInt(adjten.toString().replace(/,/g , '')) + 
	 				   parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , '')) + parseInt(adjqua.toString().replace(/,/g , '')) + parseInt(adjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(adjfur.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjfloor.toString().replace(/,/g , '')) +  parseInt(adjlevel.toString().replace(/,/g , '')) +
	 				   parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjpark.toString().replace(/,/g , '')) + parseInt(adjpool.toString().replace(/,/g , '')) + parseInt(adjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(adjgood.toString().replace(/,/g , '')) + parseInt(adjuti.toString().replace(/,/g , '')) + parseInt(adjbal.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , '')) + 
	 				   parseInt(adjbua.toString().replace(/,/g , '')) + parseInt(adjdev.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , ''));
	 $('#soldmarketvalue').val(toComma(marketValue));
	 finalValue = parseInt(parseInt(($('#soldmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#soldfinalvalue').val(toComma(finalValue));
});
$("#avgage").keyup(function(){
	var diffage = parseInt($('#subage').val()) - parseInt($(this).val());
    $('#diffage').val(diffage);
	adjage =  parseInt(($('#diffage').val()).replace(/,/g , ''))  * parseFloat(($("#cweiage").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
	$('#adjage').val(toComma(adjage));
	 //Market Value//
	 var marketValue = parseInt(priceAvg) + parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjage.toString().replace(/,/g , '')) + parseInt(adjten.toString().replace(/,/g , '')) + 
	 				   parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , '')) + parseInt(adjqua.toString().replace(/,/g , '')) + parseInt(adjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(adjfur.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjfloor.toString().replace(/,/g , '')) +  parseInt(adjlevel.toString().replace(/,/g , '')) +
	 				   parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjpark.toString().replace(/,/g , '')) + parseInt(adjpool.toString().replace(/,/g , '')) + parseInt(adjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(adjgood.toString().replace(/,/g , '')) + parseInt(adjuti.toString().replace(/,/g , '')) + parseInt(adjbal.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , '')) + 
	 				   parseInt(adjbua.toString().replace(/,/g , ''))+ parseInt(adjdev.toString().replace(/,/g , ''))  + parseInt(adjdate.toString().replace(/,/g , ''));
	 $('#soldmarketvalue').val(toComma(marketValue));
	 finalValue = parseInt(parseInt(($('#soldmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#soldfinalvalue').val(toComma(finalValue));
});
$("#cweiloc").keyup(function(){
	if($("#cweiloc").val() != $("#weiloc").val()){
		$("#cweiloc").css("color","crimson");
	}
	else{
		$("#cweiloc").css("color","#6c757d");
	}
	adjloc =  parseFloat(($('#diffloc').val()).replace(/,/g , ''))  * parseFloat(($("#cweiloc").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
	$('#adjloc').val(toComma(adjloc));
	 //Market Value//
	 var marketValue = parseInt(priceAvg) + parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjage.toString().replace(/,/g , '')) + parseInt(adjten.toString().replace(/,/g , '')) + 
	 				   parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , '')) + parseInt(adjqua.toString().replace(/,/g , '')) + parseInt(adjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(adjfur.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjfloor.toString().replace(/,/g , '')) +  parseInt(adjlevel.toString().replace(/,/g , '')) +
	 				   parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjpark.toString().replace(/,/g , '')) + parseInt(adjpool.toString().replace(/,/g , '')) + parseInt(adjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(adjgood.toString().replace(/,/g , '')) + parseInt(adjuti.toString().replace(/,/g , '')) + parseInt(adjbal.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , '')) + 
	 				   parseInt(adjbua.toString().replace(/,/g , '')) + parseInt(adjdev.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , ''));
	 $('#soldmarketvalue').val(toComma(marketValue));
	 finalValue = parseInt(parseInt(($('#soldmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#soldfinalvalue').val(toComma(finalValue));
});
$("#cweiage").keyup(function(){
	if($("#cweiage").val() != $("#weiage").val()){
		$("#cweiage").css("color","crimson");
	}
	else{
		$("#cweiage").css("color","#6c757d");
	}
	adjage =  parseFloat(($('#diffage').val()).replace(/,/g , ''))  * parseFloat(($("#cweiage").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
	$('#adjage').val(toComma(adjage));
	 //Market Value//
	 var marketValue = parseInt(priceAvg) + parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjage.toString().replace(/,/g , '')) + parseInt(adjten.toString().replace(/,/g , '')) + 
	 				   parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , '')) + parseInt(adjqua.toString().replace(/,/g , '')) + parseInt(adjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(adjfur.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjfloor.toString().replace(/,/g , '')) +  parseInt(adjlevel.toString().replace(/,/g , '')) +
	 				   parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjpark.toString().replace(/,/g , '')) + parseInt(adjpool.toString().replace(/,/g , '')) + parseInt(adjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(adjgood.toString().replace(/,/g , '')) + parseInt(adjuti.toString().replace(/,/g , '')) + parseInt(adjbal.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , '')) + 
	 				   parseInt(adjbua.toString().replace(/,/g , '')) + parseInt(adjdev.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , ''));
	 $('#soldmarketvalue').val(toComma(marketValue));
	 finalValue = parseInt(parseInt(($('#soldmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#soldfinalvalue').val(toComma(finalValue));
});
$("#cweidev").keyup(function(){
	if($("#cweidev").val() != $("#weidev").val()){
		$("#cweidev").css("color","crimson");
	}
	else{
		$("#cweidev").css("color","#6c757d");
	}
	adjdev =  parseFloat(($('#diffdev').val()).replace(/,/g , ''))  * parseFloat(($("#cweidev").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
	$('#adjdev').val(toComma(adjdev));
	 //Market Value//
	 var marketValue = parseInt(priceAvg) + parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjage.toString().replace(/,/g , '')) + parseInt(adjten.toString().replace(/,/g , '')) + 
	 				   parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , '')) + parseInt(adjqua.toString().replace(/,/g , '')) + parseInt(adjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(adjfur.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjfloor.toString().replace(/,/g , '')) +  parseInt(adjlevel.toString().replace(/,/g , '')) +
	 				   parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjpark.toString().replace(/,/g , '')) + parseInt(adjpool.toString().replace(/,/g , '')) + parseInt(adjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(adjgood.toString().replace(/,/g , '')) + parseInt(adjuti.toString().replace(/,/g , '')) + parseInt(adjbal.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , '')) + 
	 				   parseInt(adjbua.toString().replace(/,/g , '')) + parseInt(adjdev.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , ''));
	 $('#soldmarketvalue').val(toComma(marketValue));
	 finalValue = parseInt(parseInt(($('#soldmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#soldfinalvalue').val(toComma(finalValue));
});
$("#cweiten").keyup(function(){
	if($("#cweiten").val() != $("#weiten").val()){
		$("#cweiten").css("color","crimson");
	}
	else{
		$("#cweiten").css("color","#6c757d");
	}
	adjten =  parseFloat(($('#difften').val()).replace(/,/g , ''))  * parseFloat(($("#cweiten").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
	$('#adjten').val(toComma(adjten));
	 //Market Value//
	 var marketValue = parseInt(priceAvg) + parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjage.toString().replace(/,/g , '')) + parseInt(adjten.toString().replace(/,/g , '')) + 
	 				   parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , '')) + parseInt(adjqua.toString().replace(/,/g , '')) + parseInt(adjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(adjfur.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjfloor.toString().replace(/,/g , '')) +  parseInt(adjlevel.toString().replace(/,/g , '')) +
	 				   parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjpark.toString().replace(/,/g , '')) + parseInt(adjpool.toString().replace(/,/g , '')) + parseInt(adjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(adjgood.toString().replace(/,/g , '')) + parseInt(adjuti.toString().replace(/,/g , '')) + parseInt(adjbal.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , '')) + 
	 				   parseInt(adjbua.toString().replace(/,/g , '')) + parseInt(adjdev.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , ''));
	 $('#soldmarketvalue').val(toComma(marketValue));
	 finalValue = parseInt(parseInt(($('#soldmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#soldfinalvalue').val(toComma(finalValue));
});
$("#cweiview").keyup(function(){
	if($("#cweiview").val() != $("#weiview").val()){
		$("#cweiview").css("color","crimson");
	}
	else{
		$("#cweiview").css("color","#6c757d");
	}
	adjview =  parseFloat(($('#diffview').val()).replace(/,/g , ''))  * parseFloat(($("#cweiview").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
	$('#adjview').val(toComma(adjview));
	 //Market Value//
	 var marketValue = parseInt(priceAvg) + parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjage.toString().replace(/,/g , '')) + parseInt(adjten.toString().replace(/,/g , '')) + 
	 				   parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , '')) + parseInt(adjqua.toString().replace(/,/g , '')) + parseInt(adjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(adjfur.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjfloor.toString().replace(/,/g , '')) +  parseInt(adjlevel.toString().replace(/,/g , '')) +
	 				   parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjpark.toString().replace(/,/g , '')) + parseInt(adjpool.toString().replace(/,/g , '')) + parseInt(adjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(adjgood.toString().replace(/,/g , '')) + parseInt(adjuti.toString().replace(/,/g , '')) + parseInt(adjbal.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , '')) + 
	 				   parseInt(adjbua.toString().replace(/,/g , '')) + parseInt(adjdev.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , ''));
	 $('#soldmarketvalue').val(toComma(marketValue));
	 finalValue = parseInt(parseInt(($('#soldmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#soldfinalvalue').val(toComma(finalValue));
});
$("#cweista").keyup(function(){
	if($("#cweista").val() != $("#weista").val()){
		$("#cweista").css("color","crimson");
	}
	else{
		$("#cweista").css("color","#6c757d");
	}
	adjsta =  parseFloat(($('#diffsta').val()).replace(/,/g , ''))  * parseFloat(($("#cweista").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
	$('#adjsta').val(toComma(adjsta));
	 //Market Value//
	 var marketValue = parseInt(priceAvg) + parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjage.toString().replace(/,/g , '')) + parseInt(adjten.toString().replace(/,/g , '')) + 
	 				   parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , '')) + parseInt(adjqua.toString().replace(/,/g , '')) + parseInt(adjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(adjfur.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjfloor.toString().replace(/,/g , '')) +  parseInt(adjlevel.toString().replace(/,/g , '')) +
	 				   parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjpark.toString().replace(/,/g , '')) + parseInt(adjpool.toString().replace(/,/g , '')) + parseInt(adjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(adjgood.toString().replace(/,/g , '')) + parseInt(adjuti.toString().replace(/,/g , '')) + parseInt(adjbal.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , '')) + 
	 				   parseInt(adjbua.toString().replace(/,/g , '')) + parseInt(adjdev.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , ''));
	 $('#soldmarketvalue').val(toComma(marketValue));
	 finalValue = parseInt(parseInt(($('#soldmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#soldfinalvalue').val(toComma(finalValue));
});
$("#cweiqua").keyup(function(){
	if($("#cweiqua").val() != $("#weiqua").val()){
		$("#cweiqua").css("color","crimson");
	}
	else{
		$("#cweiqua").css("color","#6c757d");
	}
	adjqua =  parseFloat(($('#diffqua').val()).replace(/,/g , ''))  * parseFloat(($("#cweiqua").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
	$('#adjqua').val(toComma(adjqua));
	 //Market Value//
	 var marketValue = parseInt(priceAvg) + parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjage.toString().replace(/,/g , '')) + parseInt(adjten.toString().replace(/,/g , '')) + 
	 				   parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , '')) + parseInt(adjqua.toString().replace(/,/g , '')) + parseInt(adjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(adjfur.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjfloor.toString().replace(/,/g , '')) +  parseInt(adjlevel.toString().replace(/,/g , '')) +
	 				   parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjpark.toString().replace(/,/g , '')) + parseInt(adjpool.toString().replace(/,/g , '')) + parseInt(adjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(adjgood.toString().replace(/,/g , '')) + parseInt(adjuti.toString().replace(/,/g , '')) + parseInt(adjbal.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , '')) + 
	 				   parseInt(adjbua.toString().replace(/,/g , '')) + parseInt(adjdev.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , ''));
	 $('#soldmarketvalue').val(toComma(marketValue));
	 finalValue = parseInt(parseInt(($('#soldmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#soldfinalvalue').val(toComma(finalValue));
});
$("#cweiupg").keyup(function(){
	if($("#cweiupg").val() != $("#weiupg").val()){
		$("#cweiupg").css("color","crimson");
	}
	else{
		$("#cweiupg").css("color","#6c757d");
	}
	adjupg =  parseFloat(($('#diffupg').val()).replace(/,/g , ''))  * parseFloat(($("#cweiupg").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
	$('#adjupg').val(toComma(adjupg));
	 //Market Value//
	 var marketValue = parseInt(priceAvg) + parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjage.toString().replace(/,/g , '')) + parseInt(adjten.toString().replace(/,/g , '')) + 
	 				   parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , '')) + parseInt(adjqua.toString().replace(/,/g , '')) + parseInt(adjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(adjfur.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjfloor.toString().replace(/,/g , '')) +  parseInt(adjlevel.toString().replace(/,/g , '')) +
	 				   parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjpark.toString().replace(/,/g , '')) + parseInt(adjpool.toString().replace(/,/g , '')) + parseInt(adjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(adjgood.toString().replace(/,/g , '')) + parseInt(adjuti.toString().replace(/,/g , '')) + parseInt(adjbal.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , '')) + 
	 				   parseInt(adjbua.toString().replace(/,/g , ''))+ parseInt(adjdev.toString().replace(/,/g , ''))  + parseInt(adjdate.toString().replace(/,/g , ''));
	 $('#soldmarketvalue').val(toComma(marketValue));
	 finalValue = parseInt(parseInt(($('#soldmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#soldfinalvalue').val(toComma(finalValue));
});
$("#cweifur").keyup(function(){
	if($("#cweifur").val() != $("#weifur").val()){
		$("#cweifur").css("color","crimson");
	}
	else{
		$("#cweifur").css("color","#6c757d");
	}
	adjfur =  parseFloat(($('#difffur').val()).replace(/,/g , ''))  * parseFloat(($("#cweifur").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
	$('#adjfur').val(toComma(adjfur));
	 //Market Value//
	 var marketValue = parseInt(priceAvg) + parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjage.toString().replace(/,/g , '')) + parseInt(adjten.toString().replace(/,/g , '')) + 
	 				   parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , '')) + parseInt(adjqua.toString().replace(/,/g , '')) + parseInt(adjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(adjfur.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjfloor.toString().replace(/,/g , '')) +  parseInt(adjlevel.toString().replace(/,/g , '')) +
	 				   parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjpark.toString().replace(/,/g , '')) + parseInt(adjpool.toString().replace(/,/g , '')) + parseInt(adjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(adjgood.toString().replace(/,/g , '')) + parseInt(adjuti.toString().replace(/,/g , '')) + parseInt(adjbal.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , '')) + 
	 				   parseInt(adjbua.toString().replace(/,/g , '')) + parseInt(adjdev.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , ''));
	 $('#soldmarketvalue').val(toComma(marketValue));
	 finalValue = parseInt(parseInt(($('#soldmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#soldfinalvalue').val(toComma(finalValue));
});
$("#cweiexp").keyup(function(){
	if($("#cweiexp").val() != $("#weiexp").val()){
		$("#cweiexp").css("color","crimson");
	}
	else{
		$("#cweiexp").css("color","#6c757d");
	}
	adjexp =  parseFloat(($('#diffexp').val()).replace(/,/g , ''))  * parseFloat(($("#cweiexp").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
	$('#adjexp').val(toComma(adjexp));
	 //Market Value//
	 var marketValue = parseInt(priceAvg) + parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjage.toString().replace(/,/g , '')) + parseInt(adjten.toString().replace(/,/g , '')) + 
	 				   parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , '')) + parseInt(adjqua.toString().replace(/,/g , '')) + parseInt(adjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(adjfur.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjfloor.toString().replace(/,/g , '')) +  parseInt(adjlevel.toString().replace(/,/g , '')) +
	 				   parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjpark.toString().replace(/,/g , '')) + parseInt(adjpool.toString().replace(/,/g , '')) + parseInt(adjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(adjgood.toString().replace(/,/g , '')) + parseInt(adjuti.toString().replace(/,/g , '')) + parseInt(adjbal.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , '')) + 
	 				   parseInt(adjbua.toString().replace(/,/g , '')) + parseInt(adjdev.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , ''));
	 $('#soldmarketvalue').val(toComma(marketValue));
	 finalValue = parseInt(parseInt(($('#soldmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#soldfinalvalue').val(toComma(finalValue));
});
$("#cweipla").keyup(function(){
	if($("#cweipla").val() != $("#weipla").val()){
		$("#cweipla").css("color","crimson");
	}
	else{
		$("#cweipla").css("color","#6c757d");
	}
	adjpla =  parseFloat(($('#diffpla').val()).replace(/,/g , ''))  * parseFloat(($("#cweipla").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
	$('#adjpla').val(toComma(adjpla));
	 //Market Value//
	 var marketValue = parseInt(priceAvg) + parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjage.toString().replace(/,/g , '')) + parseInt(adjten.toString().replace(/,/g , '')) + 
	 				   parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , '')) + parseInt(adjqua.toString().replace(/,/g , '')) + parseInt(adjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(adjfur.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjfloor.toString().replace(/,/g , '')) +  parseInt(adjlevel.toString().replace(/,/g , '')) +
	 				   parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjpark.toString().replace(/,/g , '')) + parseInt(adjpool.toString().replace(/,/g , '')) + parseInt(adjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(adjgood.toString().replace(/,/g , '')) + parseInt(adjuti.toString().replace(/,/g , '')) + parseInt(adjbal.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , '')) + 
	 				   parseInt(adjbua.toString().replace(/,/g , '')) + parseInt(adjdev.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , ''));
	 $('#soldmarketvalue').val(toComma(marketValue));
	 finalValue = parseInt(parseInt(($('#soldmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#soldfinalvalue').val(toComma(finalValue));
});
$("#cweifloor").keyup(function(){
	if($("#cweifloor").val() != $("#weifloor").val()){
		$("#cweifloor").css("color","crimson");
	}
	else{
		$("#cweifloor").css("color","#6c757d");
	}
	adjfloor =  parseFloat(($('#difffloor').val()).replace(/,/g , ''))  * parseFloat(($("#cweifloor").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
	$('#adjfloor').val(toComma(adjfloor));
	 //Market Value//
	 var marketValue = parseInt(priceAvg) + parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjage.toString().replace(/,/g , '')) + parseInt(adjten.toString().replace(/,/g , '')) + 
	 				   parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , '')) + parseInt(adjqua.toString().replace(/,/g , '')) + parseInt(adjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(adjfur.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjfloor.toString().replace(/,/g , '')) +  parseInt(adjlevel.toString().replace(/,/g , '')) +
	 				   parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjpark.toString().replace(/,/g , '')) + parseInt(adjpool.toString().replace(/,/g , '')) + parseInt(adjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(adjgood.toString().replace(/,/g , '')) + parseInt(adjuti.toString().replace(/,/g , '')) + parseInt(adjbal.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , '')) + 
	 				   parseInt(adjbua.toString().replace(/,/g , ''))+ parseInt(adjdev.toString().replace(/,/g , ''))  + parseInt(adjdate.toString().replace(/,/g , ''));
	 $('#soldmarketvalue').val(toComma(marketValue));
	 finalValue = parseInt(parseInt(($('#soldmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#soldfinalvalue').val(toComma(finalValue));
});
$("#cweilevel").keyup(function(){
	if($("#cweilevel").val() != $("#weilevel").val()){
		$("#cweilevel").css("color","crimson");
	}
	else{
		$("#cweilevel").css("color","#6c757d");
	}
	adjlevel =  parseFloat(($('#difflevel').val()).replace(/,/g , ''))  * parseFloat(($("#cweilevel").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
	$('#adjlevel').val(toComma(adjlevel));
	 //Market Value//
	 var marketValue = parseInt(priceAvg) + parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjage.toString().replace(/,/g , '')) + parseInt(adjten.toString().replace(/,/g , '')) + 
	 				   parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , '')) + parseInt(adjqua.toString().replace(/,/g , '')) + parseInt(adjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(adjfur.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjfloor.toString().replace(/,/g , '')) +  parseInt(adjlevel.toString().replace(/,/g , '')) +
	 				   parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjpark.toString().replace(/,/g , '')) + parseInt(adjpool.toString().replace(/,/g , '')) + parseInt(adjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(adjgood.toString().replace(/,/g , '')) + parseInt(adjuti.toString().replace(/,/g , '')) + parseInt(adjbal.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , '')) + 
	 				   parseInt(adjbua.toString().replace(/,/g , ''))+ parseInt(adjdev.toString().replace(/,/g , ''))  + parseInt(adjdate.toString().replace(/,/g , ''));
	 $('#soldmarketvalue').val(toComma(marketValue));
	 finalValue = parseInt(parseInt(($('#soldmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#soldfinalvalue').val(toComma(finalValue));
});
$("#cweibed").keyup(function(){
	if($("#cweibed").val() != $("#weibed").val()){
		$("#cweibed").css("color","crimson");
	}
	else{
		$("#cweibed").css("color","#6c757d");
	}
	adjbed =  parseFloat(($('#diffbed').val()).replace(/,/g , ''))  * parseFloat(($("#cweibed").val()).replace(/%/g , '')) * parseInt(priceAvg) / 100;
	$('#adjbed').val(toComma(adjbed));
	 //Market Value//
	 var marketValue = parseInt(priceAvg) + parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjage.toString().replace(/,/g , '')) + parseInt(adjten.toString().replace(/,/g , '')) + 
	 				   parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , '')) + parseInt(adjqua.toString().replace(/,/g , '')) + parseInt(adjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(adjfur.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjfloor.toString().replace(/,/g , '')) +  parseInt(adjlevel.toString().replace(/,/g , '')) +
	 				   parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjpark.toString().replace(/,/g , '')) + parseInt(adjpool.toString().replace(/,/g , '')) + parseInt(adjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(adjgood.toString().replace(/,/g , '')) + parseInt(adjuti.toString().replace(/,/g , '')) + parseInt(adjbal.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , '')) + 
	 				   parseInt(adjbua.toString().replace(/,/g , '')) + parseInt(adjdev.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , ''));
	 $('#soldmarketvalue').val(toComma(marketValue));
	 finalValue = parseInt(parseInt(($('#soldmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#soldfinalvalue').val(toComma(finalValue));
});
$("#cweipark").keyup(function(){
	if($("#cweipark").val() != $("#weipark").val()){
		$("#cweipark").css("color","crimson");
	}
	else{
		$("#cweipark").css("color","#6c757d");
	}
	adjpark = parseFloat(($('#diffpark').val()).replace(/,/g , '')) * parseFloat(($("#cweipark").val()).replace(/%/g , '')) * parseInt($('#parkingPrice').val()) / 100;
    $('#adjpark').val(toComma(adjpark));
	 //Market Value//
	 var marketValue = parseInt(priceAvg) + parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjage.toString().replace(/,/g , '')) + parseInt(adjten.toString().replace(/,/g , '')) + 
	 				   parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , '')) + parseInt(adjqua.toString().replace(/,/g , '')) + parseInt(adjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(adjfur.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjfloor.toString().replace(/,/g , '')) +  parseInt(adjlevel.toString().replace(/,/g , '')) +
	 				   parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjpark.toString().replace(/,/g , '')) + parseInt(adjpool.toString().replace(/,/g , '')) + parseInt(adjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(adjgood.toString().replace(/,/g , '')) + parseInt(adjuti.toString().replace(/,/g , '')) + parseInt(adjbal.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , '')) + 
	 				   parseInt(adjbua.toString().replace(/,/g , '')) + parseInt(adjdev.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , ''));
	 $('#soldmarketvalue').val(toComma(marketValue));
	 finalValue = parseInt(parseInt(($('#soldmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#soldfinalvalue').val(toComma(finalValue));
});
$("#cweipool").keyup(function(){
	if($("#cweipool").val() != $("#weipool").val()){
		$("#cweipool").css("color","crimson");
	}
	else{
		$("#cweipool").css("color","#6c757d");
	}
	adjpool = parseFloat(($('#diffpool').val()).replace(/,/g , '')) * parseFloat(($("#cweipool").val()).replace(/%/g , '')) * parseInt($('#poolPrice').val()) / 100;
    $('#adjpool').val(toComma(adjpool));
	 //Market Value//
	 var marketValue = parseInt(priceAvg) + parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjage.toString().replace(/,/g , '')) + parseInt(adjten.toString().replace(/,/g , '')) + 
	 				   parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , '')) + parseInt(adjqua.toString().replace(/,/g , '')) + parseInt(adjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(adjfur.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjfloor.toString().replace(/,/g , '')) +  parseInt(adjlevel.toString().replace(/,/g , '')) +
	 				   parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjpark.toString().replace(/,/g , '')) + parseInt(adjpool.toString().replace(/,/g , '')) + parseInt(adjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(adjgood.toString().replace(/,/g , '')) + parseInt(adjuti.toString().replace(/,/g , '')) + parseInt(adjbal.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , '')) + 
	 				   parseInt(adjbua.toString().replace(/,/g , '')) + parseInt(adjdev.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , ''));
	 $('#soldmarketvalue').val(toComma(marketValue));
	 finalValue = parseInt(parseInt(($('#soldmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#soldfinalvalue').val(toComma(finalValue));
});
$("#cweilandscape").keyup(function(){
	if($("#cweilandscape").val() != $("#weilandscape").val()){
		$("#cweilandscape").css("color","crimson");
	}
	else{
		$("#cweilandscape").css("color","#6c757d");
	}
	adjlandscape = parseFloat(($('#difflandscape').val()).replace(/,/g , '')) * parseFloat(($("#cweilandscape").val()).replace(/%/g , '')) * parseInt($('#landscapePrice').val()) / 100;
    $('#adjlandscape').val(toComma(adjlandscape));
	 //Market Value//
	 var marketValue = parseInt(priceAvg) + parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjage.toString().replace(/,/g , '')) + parseInt(adjten.toString().replace(/,/g , '')) + 
	 				   parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , '')) + parseInt(adjqua.toString().replace(/,/g , '')) + parseInt(adjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(adjfur.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjfloor.toString().replace(/,/g , '')) +  parseInt(adjlevel.toString().replace(/,/g , '')) +
	 				   parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjpark.toString().replace(/,/g , '')) + parseInt(adjpool.toString().replace(/,/g , '')) + parseInt(adjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(adjgood.toString().replace(/,/g , '')) + parseInt(adjuti.toString().replace(/,/g , '')) + parseInt(adjbal.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , '')) + 
	 				   parseInt(adjbua.toString().replace(/,/g , '')) + parseInt(adjdev.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , ''));
	 $('#soldmarketvalue').val(toComma(marketValue));
	 finalValue = parseInt(parseInt(($('#soldmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#soldfinalvalue').val(toComma(finalValue));
});
$("#cweigood").keyup(function(){
	if($("#cweigood").val() != $("#weigood").val()){
		$("#cweigood").css("color","crimson");
	}
	else{
		$("#cweigood").css("color","#6c757d");
	}
	adjgood = parseFloat(($('#diffgood').val()).replace(/,/g , '')) * parseFloat(($("#cweigood").val()).replace(/%/g , '')) * parseInt($('#whitegoodsPrice').val()) / 100;
    $('#adjgood').val(toComma(adjgood));
	 //Market Value//
	 var marketValue = parseInt(priceAvg) + parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjage.toString().replace(/,/g , '')) + parseInt(adjten.toString().replace(/,/g , '')) + 
	 				   parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , '')) + parseInt(adjqua.toString().replace(/,/g , '')) + parseInt(adjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(adjfur.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjfloor.toString().replace(/,/g , '')) +  parseInt(adjlevel.toString().replace(/,/g , '')) +
	 				   parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjpark.toString().replace(/,/g , '')) + parseInt(adjpool.toString().replace(/,/g , '')) + parseInt(adjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(adjgood.toString().replace(/,/g , '')) + parseInt(adjuti.toString().replace(/,/g , '')) + parseInt(adjbal.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , '')) + 
	 				   parseInt(adjbua.toString().replace(/,/g , '')) + parseInt(adjdev.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , ''));
	 $('#soldmarketvalue').val(toComma(marketValue));
	 finalValue = parseInt(parseInt(($('#soldmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#soldfinalvalue').val(toComma(finalValue));
});
$("#cweiuti").keyup(function(){
	if($("#cweiuti").val() != $("#weiuti").val()){
		$("#cweiuti").css("color","crimson");
	}
	else{
		$("#cweiuti").css("color","#6c757d");
	}
	adjuti = parseFloat(($('#diffuti').val()).replace(/,/g , '')) * parseFloat(($("#cweiuti").val()).replace(/%/g , '')) * parseInt($('#utiliesPrice').val()) / 100;
    $('#adjuti').val(toComma(adjuti));
	 //Market Value//
	 var marketValue = parseInt(priceAvg) + parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjage.toString().replace(/,/g , '')) + parseInt(adjten.toString().replace(/,/g , '')) + 
	 				   parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , '')) + parseInt(adjqua.toString().replace(/,/g , '')) + parseInt(adjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(adjfur.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjfloor.toString().replace(/,/g , '')) +  parseInt(adjlevel.toString().replace(/,/g , '')) +
	 				   parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjpark.toString().replace(/,/g , '')) + parseInt(adjpool.toString().replace(/,/g , '')) + parseInt(adjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(adjgood.toString().replace(/,/g , '')) + parseInt(adjuti.toString().replace(/,/g , '')) + parseInt(adjbal.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , '')) + 
	 				   parseInt(adjbua.toString().replace(/,/g , '')) + parseInt(adjdev.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , ''));
	 $('#soldmarketvalue').val(toComma(marketValue));
	 finalValue = parseInt(parseInt(($('#soldmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#soldfinalvalue').val(toComma(finalValue));
});
$("#cweibal").keyup(function(){
	if($("#cweibal").val() != $("#weibal").val()){
		$("#cweibal").css("color","crimson");
	}
	else{
		$("#cweibal").css("color","#6c757d");
	}
	adjbal = parseFloat(($('#diffbal').val()).replace(/,/g , '')) * parseFloat(($("#cweibal").val()).replace(/%/g , '')) * parseInt(pricePerAvg) / 100;
    $('#adjbal').val(toComma(adjbal));
	 //Market Value//
	 var marketValue = parseInt(priceAvg) + parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjage.toString().replace(/,/g , '')) + parseInt(adjten.toString().replace(/,/g , '')) + 
	 				   parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , '')) + parseInt(adjqua.toString().replace(/,/g , '')) + parseInt(adjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(adjfur.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjfloor.toString().replace(/,/g , '')) +  parseInt(adjlevel.toString().replace(/,/g , '')) +
	 				   parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjpark.toString().replace(/,/g , '')) + parseInt(adjpool.toString().replace(/,/g , '')) + parseInt(adjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(adjgood.toString().replace(/,/g , '')) + parseInt(adjuti.toString().replace(/,/g , '')) + parseInt(adjbal.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , '')) + 
	 				   parseInt(adjbua.toString().replace(/,/g , '')) + parseInt(adjdev.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , ''));
	 $('#soldmarketvalue').val(toComma(marketValue));
	 finalValue = parseInt(parseInt(($('#soldmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#soldfinalvalue').val(toComma(finalValue));
});
$("#cweiland").keyup(function(){
	if($("#cweiland").val() != $("#weiland").val()){
		$("#cweiland").css("color","crimson");
	}
	else{
		$("#cweiland").css("color","#6c757d");
	}
	if($('#landPrice').val() != ""){
		 adjland = parseInt(($('#diffland').val()).replace(/,/g , ''))  *  parseFloat(($("#cweiland").val()).replace(/%/g , ''))  * parseInt($('#landPrice').val()) / 100;
	 }
	 else{
		 adjland = 0;
	 }
    $('#adjland').val(toComma(adjland));
	 //Market Value//
	 var marketValue = parseInt(priceAvg) + parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjage.toString().replace(/,/g , '')) + parseInt(adjten.toString().replace(/,/g , '')) + 
	 				   parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , '')) + parseInt(adjqua.toString().replace(/,/g , '')) + parseInt(adjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(adjfur.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjfloor.toString().replace(/,/g , '')) +  parseInt(adjlevel.toString().replace(/,/g , '')) +
	 				   parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjpark.toString().replace(/,/g , '')) + parseInt(adjpool.toString().replace(/,/g , '')) + parseInt(adjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(adjgood.toString().replace(/,/g , '')) + parseInt(adjuti.toString().replace(/,/g , '')) + parseInt(adjbal.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , '')) + 
	 				   parseInt(adjbua.toString().replace(/,/g , '')) + parseInt(adjdev.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , ''));
	 $('#soldmarketvalue').val(toComma(marketValue));
	 finalValue = parseInt(parseInt(($('#soldmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#soldfinalvalue').val(toComma(finalValue));
});
$("#cweibua").keyup(function(){
	if($("#cweibua").val() != $("#weibua").val()){
		$("#cweibua").css("color","crimson");
	}
	else{
		$("#cweibua").css("color","#6c757d");
	}
	adjbua = parseFloat(($('#diffbua').val()).replace(/,/g , '')) * parseFloat(($("#cweibua").val()).replace(/%/g , '')) * parseInt(pricePerAvg) / 100;
    $('#adjbua').val(toComma(adjbua));
	 //Market Value//
	 var marketValue = parseInt(priceAvg) + parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjage.toString().replace(/,/g , '')) + parseInt(adjten.toString().replace(/,/g , '')) + 
	 				   parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , '')) + parseInt(adjqua.toString().replace(/,/g , '')) + parseInt(adjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(adjfur.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjfloor.toString().replace(/,/g , '')) + parseInt(adjlevel.toString().replace(/,/g , '')) +
	 				   parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjpark.toString().replace(/,/g , '')) + parseInt(adjpool.toString().replace(/,/g , '')) + parseInt(adjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(adjgood.toString().replace(/,/g , '')) + parseInt(adjuti.toString().replace(/,/g , '')) + parseInt(adjbal.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , '')) + 
	 				   parseInt(adjbua.toString().replace(/,/g , ''))+ parseInt(adjdev.toString().replace(/,/g , ''))  + parseInt(adjdate.toString().replace(/,/g , ''));
	 $('#soldmarketvalue').val(toComma(marketValue));
	 finalValue = parseInt(parseInt(($('#soldmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#soldfinalvalue').val(toComma(finalValue));
});
$("#cweidate").keyup(function(){
	if($("#cweidate").val() != $("#weidate").val()){
		$("#cweidate").css("color","crimson");
	}
	else{
		$("#cweidate").css("color","#6c757d");
	}
	var value = $(this).val();
	adjdate = parseFloat(value.replace(/%/g , '')) * parseInt(priceAvg) * (16 / 30) / 100;
    $('#adjdate').val(toComma(adjdate));
	 //Market Value//
	 var marketValue = parseInt(priceAvg) + parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjage.toString().replace(/,/g , '')) + parseInt(adjten.toString().replace(/,/g , '')) + 
	 				   parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , '')) + parseInt(adjqua.toString().replace(/,/g , '')) + parseInt(adjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(adjfur.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjfloor.toString().replace(/,/g , '')) + parseInt(adjlevel.toString().replace(/,/g , '')) +
	 				   parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjpark.toString().replace(/,/g , '')) + parseInt(adjpool.toString().replace(/,/g , '')) + parseInt(adjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(adjgood.toString().replace(/,/g , '')) + parseInt(adjuti.toString().replace(/,/g , '')) + parseInt(adjbal.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , '')) + 
	 				   parseInt(adjbua.toString().replace(/,/g , '')) + parseInt(adjdev.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , ''));
	 $('#soldmarketvalue').val(toComma(marketValue));
	 finalValue = parseInt(parseInt(($('#soldmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#soldfinalvalue').val(toComma(finalValue));
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
		 $('#avgage').val($('#age').val());
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
			 $('#clandprice').text(0);
		 }
		 $('#cparkingPrice').text(toComma($('#parkingPrice').val()));
		 $('#cpoolPrice').text(toComma($('#poolPrice').val()));
		 $('#clandscapePrice').text(toComma($('#landscapePrice').val()));
		 $('#cwhitegoodsPrice').text(toComma($('#whitegoodsPrice').val()));
		 $('#cutiliesPrice').text(toComma($('#utiliesPrice').val()));
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
				if(landAvg == "-"){
					landAvg = 0;
				}
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
				levelWeight = obj.levelWeight;
				landWeight = obj.landWeight;
				buaWeight = obj.buaWeight;
				upgradeWeight = obj.upgradeWeight;
				parkWeight = obj.parkWeight;
				poolWeight = obj.poolWeight;
				tenureWeight = obj.tenWeight;
				devmargin = obj.devmargin;
				ageWeight = obj.ageWeight;
				landScapeWeight = obj.landScapeWeight;
				whiteGoodsWeight = obj.whiteGoodsWeight;
				utilitiesWeight = obj.utilitiesWeight;
				var bau = $('#buitUpAreaSize').val();
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
				var finalAge = (parseFloat(ageWeight.replace(/%/g , '') / maxAge * 100)) + "" +"%";
				$('#edate').val(dateAvg);
				$('#ebed').val(bedAvg);
				$('#esizeavg').val(toComma(sizeAvg));
				$('#epriceavg').val(toComma(priceAvg));
				$('#epriceavg').val(toComma(priceAvg));
				$('#epriceavgper').val(toComma(pricePerAvg));
				//Standard Weightage//
				$('#weiloc').val(locWeight);
				$('#weiview').val(viewWeight);
				$('#weiqua').val(quaWeight);
				$('#weifloor').val(floorWeight);
				$('#weilevel').val(levelWeight);
				$('#weiland').val(landWeight);
				$('#weibua').val(buaWeight);
				$('#weibed').val(bedWeight);
				$('#weiexp').val(expWeight);
				$('#weipla').val(plaWeight);
				$('#weista').val(staWeight);
				$('#weifur').val(furWeight);
				$('#weibal').val(balWeight);
				$('#weiupg').val(upgradeWeight);
				$('#weipark').val(parkWeight);
				$('#weipool').val(poolWeight);
				$('#weilandscape').val(landScapeWeight);
				$('#weigood').val(whiteGoodsWeight);
				$('#weiuti').val(utilitiesWeight);
				$('#weiten').val(tenureWeight);
				$('#weiage').val(finalAge);
				$('#weidev').val(devmargin);
				//changed weightage//
				$('#cweiloc').val(locWeight);
				$('#cweiview').val(viewWeight);
				$('#cweiqua').val(quaWeight);
				$('#cweifloor').val(floorWeight);
				$('#cweilevel').val(levelWeight);
				$('#cweiland').val(landWeight);
				$('#cweibua').val(buaWeight);
				$('#cweibed').val(bedWeight);
				$('#cweiexp').val(expWeight);
				$('#cweipla').val(plaWeight);
				$('#cweista').val(staWeight);
				$('#cweifur').val(furWeight);
				$('#cweibal').val(balWeight);
				$('#cweiupg').val(upgradeWeight);
				$('#cweipark').val(parkWeight);
				$('#cweipool').val(poolWeight);
				$('#cweilandscape').val(landScapeWeight);
				$('#cweigood').val(whiteGoodsWeight);
				$('#cweiuti').val(utilitiesWeight);
				$('#cweiten').val(tenureWeight);
				$('#cweiage').val(finalAge);
				$('#cweidev').val(devmargin);
				// location//
				var subloc = calAvg(location);
				$('#subloc').val(subloc);
			    var diffloc = parseInt($('#subloc').val()) - parseInt($('#avgloc').val());
			    $('#diffloc').val(diffloc);
			     adjloc = parseInt(($('#diffloc').val()).replace(/,/g , '')) * parseFloat(locWeight.replace(/%/g , '')) * parseInt(priceAvg) / 100;
			    $('#adjloc').val(toComma(adjloc));
			    
			    // age//
				$('#subage').val($('#age').val());
			    var diffage = parseInt($('#subage').val()) - parseInt($('#avgage').val());
			    $('#diffage').val(diffage);
			    adjage = parseInt(($('#diffage').val()).replace(/,/g , '')) * parseFloat($('#cweiage').val().replace(/%/g , '')) * parseInt(priceAvg) / 100;
			    $('#adjage').val(toComma(adjage));
			    
			    // tenure//
				var subten = calTenure(tenure);
				$('#subten').val(subten);
			    var difften = parseFloat($('#subten').val()) - parseFloat($('#avgten').val());
			    $('#difften').val(difften);
			     adjten= parseFloat(($('#difften').val()).replace(/,/g , '')) * parseFloat(tenureWeight.replace(/%/g , '')) * parseInt(priceAvg) / 100;
			    $('#adjten').val(toComma(adjten));
			    
			    // view//
			    var subview = calView(view);
			    $('#subview').val(subview);
			    var diffview = parseInt($('#subview').val()) - parseInt($('#avgview').val());
			    $('#diffview').val(diffview);
			     adjview = parseInt(($('#diffview').val()).replace(/,/g , ''))  * parseFloat(viewWeight.replace(/%/g , '')) * parseInt(priceAvg) / 100;
			    $('#adjview').val(toComma(adjview));
			    
			    //Finishing Status//
				 $('#substa').val(calSta($('#status').val()));
				 var diffsta = parseFloat($('#substa').val() - $('#avgsta').val());
				 $('#diffsta').val(diffsta);
				  adjsta =  parseFloat(($('#diffsta').val()).replace(/,/g , ''))  * parseFloat(staWeight.replace(/%/g , '')) * parseInt(priceAvg) / 100;
				 $('#adjsta').val(toComma(adjsta));
				 
				 // quality//
			    var subqua = calAvg(quality);
			    $('#subqua').val(subqua);
			    var diffqua = parseInt($('#subqua').val()) - parseInt($('#avgqua').val());
			    $('#diffqua').val(diffqua);
			     adjqua = parseInt(($('#diffqua').val()).replace(/,/g , ''))  * parseFloat(quaWeight.replace(/%/g , ''))  * parseInt(priceAvg) / 100;
			    $('#adjqua').val(toComma(adjqua));
			   
			    // upgrades//
			    $('#subupg').val($('#overupg').val());
			    var diffupg = parseInt($('#subupg').val()) - parseInt($('#avgupg').val());
			    $('#diffupg').val(diffupg);
			    adjupg = parseInt(($('#diffupg').val()).replace(/,/g , ''))  * parseFloat(upgradeWeight.replace(/%/g , '')) * parseInt(priceAvg) / 100;
			    $('#adjupg').val(toComma(adjupg));
			    
			    //Furnished//
				 $('#subfur').val(calFur($('#furnished').val()));
				 var difffur = parseFloat($('#subfur').val() - $('#avgfur').val());
				 $('#difffur').val(difffur);
				  adjfur =  parseFloat(($('#difffur').val()).replace(/,/g , ''))  * parseFloat(furWeight.replace(/%/g , '')) * parseInt(priceAvg) / 100;
				 $('#adjfur').val(toComma(adjfur));
				 
				 //Property Exposure//
				 $('#subexp').val(calExp($('#exposure').val()));
				 var diffexp = parseFloat($('#subexp').val() - $('#avgexp').val());
				 $('#diffexp').val(diffexp);
				  adjexp =  parseFloat(($('#diffexp').val()).replace(/,/g , ''))  * parseFloat(expWeight.replace(/%/g , '')) * parseInt(priceAvg) / 100;
				 $('#adjexp').val(toComma(adjexp));
				 
				 //Property Placement//
				 $('#subpla').val(calPla($('#placement').val()));
				 var diffpla = parseFloat($('#subpla').val() - $('#avgpla').val());
				 $('#diffpla').val(diffpla);
				  adjpla =  parseFloat(($('#diffpla').val()).replace(/,/g , ''))  * parseFloat(plaWeight.replace(/%/g , '')) * parseInt(priceAvg) / 100;
				 $('#adjpla').val(toComma(adjpla));
				
				//floor//
				var propvalued = $('#propertyvalued').val();
				if(propvalued === "Residential Villa" || propvalued === "Warehouse" || propvalued.includes("Land")){
					$('#avgfloor').val(0);
					$('#subfloor').val(0);
				}
				else{
					var suffix = fullBulFloors.match(/\d+/);
					if(suffix){
						suffix = parseFloat(parseFloat(suffix[0]) / 2);
						suffix = suffix.toString();
						$('#avgfloor').val(suffix);
					}
					$('#subfloor').val(floorNo);
				}
				var difffloor = parseFloat($('#subfloor').val() - $('#avgfloor').val());
				$('#difffloor').val(difffloor);
				 adjfloor = parseFloat(($('#difffloor').val()).replace(/,/g , ''))  * parseFloat(floorWeight.replace(/%/g , '')) * parseInt(priceAvg) / 100;
				$('#adjfloor').val(toComma(adjfloor));
				
				//level//
				var propValued = $('#propertyvalued').val();
				if(propValued === "Residential Apartment" || propValued === "Office"){
					$('#avglevel').val(0);
					$('#sublevel').val(0);
				}
				else{
					var vnooffloor = $('#vnooffloor').val();
					var split = vnooffloor.length;
					$('#sublevel').val(split);
				}
				var difflevel = parseFloat($('#sublevel').val() - $('#avglevel').val());
				$('#difflevel').val(difflevel);
				 adjlevel = parseFloat(($('#difflevel').val()).replace(/,/g , ''))  * parseFloat(levelWeight.replace(/%/g , '')) * parseInt(priceAvg) / 100;
				$('#adjlevel').val(toComma(adjlevel));
				
				
				//beds//
				 $('#avgbed').val(bedAvg);
				 if($('#bedroom').val() === "Unknown"){
					 $('#subbed').val(0);
				 }
				 else{
					 $('#subbed').val($('#bedroom').val());
				 }
				 var diffbed =  parseInt($('#subbed').val()) - parseInt(bedAvg);
				 $('#diffbed').val(diffbed);
				  adjbed =  parseInt(($('#diffbed').val()).replace(/,/g , ''))  * parseFloat(bedWeight.replace(/%/g , '')) * parseInt(priceAvg) / 100;
				 $('#adjbed').val(toComma(adjbed));
				 
				 // parking//
			    $('#avgpark').val($('#parking').val());
			    $('#subpark').val($('#parking').val());
			    var diffpark = parseFloat($('#subpark').val()) - parseFloat($('#avgpark').val());
			    $('#diffpark').val(diffpark);
			     adjpark = parseFloat(($('#diffpark').val()).replace(/,/g , '')) * parseFloat(parkWeight.replace(/%/g , '')) * parseInt($('#parkingPrice').val()) / 100;
			    $('#adjpark').val(toComma(adjpark));
				    
			    // pool//
				var subpool = calPool(pool);
				$('#subpool').val(subpool);
			    var diffpool = parseFloat($('#subpool').val()) - parseFloat($('#avgpool').val());
			    $('#diffpool').val(diffpool);
			     adjpool = parseFloat(($('#diffpool').val()).replace(/,/g , '')) * parseFloat(poolWeight.replace(/%/g , '')) * parseInt($('#poolPrice').val()) / 100;
			    $('#adjpool').val(toComma(adjpool));
			    	
			    // landscape//
				var sublandscape = calLandScape(landscape);
				$('#sublandscape').val(sublandscape);
			    var difflandscape = parseFloat($('#sublandscape').val()) - parseFloat($('#avglandscape').val());
			    $('#difflandscape').val(difflandscape);
			     adjlandscape= parseFloat(($('#difflandscape').val()).replace(/,/g , '')) * parseFloat(landScapeWeight.replace(/%/g , '')) * parseInt($('#landscapePrice').val()) / 100;
			    $('#adjlandscape').val(toComma(adjlandscape));
			   
			    // whitegoods//
				var subgood= calPool(whitegoods);
				$('#subgood').val(subgood);
			    var diffgood = parseFloat($('#subgood').val()) - parseFloat($('#avggood').val());
			    $('#diffgood').val(diffgood);
			    adjgood= parseFloat(($('#diffgood').val()).replace(/,/g , '')) * parseFloat(whiteGoodsWeight.replace(/%/g , '')) * parseInt($('#whitegoodsPrice').val()) / 100;
			    $('#adjgood').val(toComma(adjgood));
			    
			    // utilities//
				var subuti= calPool(utilities);
				$('#subuti').val(subuti);
			    var diffuti = parseFloat($('#subuti').val()) - parseFloat($('#avguti').val());
			    $('#diffuti').val(diffuti);
			    adjuti= parseFloat(($('#diffuti').val()).replace(/,/g , '')) * parseFloat(utilitiesWeight.replace(/%/g , '')) * parseInt($('#utiliesPrice').val()) / 100;
			    $('#adjuti').val(toComma(adjuti));
			    
			   // developer margin//
			    var subdev = calMargin($('#devmargin').val());
			    $('#subdev').val(subdev);
			    var diffdev = parseFloat($('#subdev').val()) - parseFloat($('#avgdev').val());
			    $('#diffdev').val(diffdev);
			    adjdev= parseFloat(($('#diffdev').val()).replace(/,/g , '')) * parseFloat(devmargin.replace(/%/g , '')) *  parseInt(priceAvg) / 100;
			    $('#adjdev').val(toComma(adjdev));
			    
			    // balsize//
			    $('#avgbal').val($('#balsize').val());
			    $('#subbal').val($('#balsize').val());
			    var diffbal = parseInt($('#subbal').val()) - parseInt($('#avgbal').val());
			    $('#diffbal').val(diffbal);
			    adjbal = parseInt(($('#diffbal').val()).replace(/,/g , ''))  * parseFloat(balWeight.replace(/%/g , '')) * parseInt(pricePerAvg) / 100;
			    $('#adjbal').val(toComma(adjbal));
			    
				//LandSize//
				 $('#avgland').val(toComma(landAvg));
				 var subland = null;
			 if($('#landSize').val() !="" && $('#landSize').val() != "Not Applicable"){
					 subland = $('#landSize').val();
				 }
				 else{
					 subland = 0;
				 }
				 $('#subland').val(toComma(subland));
				 var diffland = parseInt(subland) - parseInt(landAvg);
				 $('#diffland').val(toComma(diffland));
				 if($('#landPrice').val() != ""){
					 adjland = parseInt(($('#diffland').val()).replace(/,/g , ''))  * parseFloat(landWeight.replace(/%/g , '')) * parseInt($('#landPrice').val()) / 100;
				 }
				 else{
					 adjland = 0;
				 }
				 $('#adjland').val(toComma(adjland));
				 
				//bua//
				 $('#avgbua').val(toComma(sizeAvg));
				 $('#subbua').val(toComma($('#netbuitUpAreaSize').val()));
				 var diffbua =  parseInt($('#netbuitUpAreaSize').val()) - parseInt(sizeAvg);
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
					 $('#cweidate').val(lessThan1Month);
					  adjdate = parseFloat(lessThan1Month.replace(/%/g , '')) * parseInt(priceAvg) * (16 / 30) / 100;
					 $('#adjdate').val(toComma(adjdate));
				 }
				 if( diffdate <= 60 && diffdate > 30){
					 dateWeight = lessThan2Month;
					 $('#weidate').val(lessThan2Month);
					 $('#cweidate').val(lessThan2Month);
					  adjdate = parseFloat(lessThan2Month.replace(/%/g , '')) * parseInt(priceAvg) * (16 / 30) / 100;
					 $('#adjdate').val(toComma(adjdate));
				 }
				 if( diffdate <= 90 && diffdate > 60){
					 dateWeight = lessThan3Month;
					 $('#weidate').val(lessThan3Month);
					 $('#cweidate').val(lessThan3Month);
					  adjdate = parseFloat(lessThan3Month.replace(/%/g , '')) * parseInt(priceAvg) * (16 / 30) / 100;
					 $('#adjdate').val(toComma(adjdate));
				 }
				 if( diffdate <= 120 && diffdate > 90){
					 dateWeight = lessThan4Month;
					 $('#weidate').val(lessThan4Month);
					 $('#cweidate').val(lessThan4Month);
					  adjdate = parseFloat(lessThan4Month.replace(/%/g , '')) * parseInt(priceAvg) * (16 / 30) / 100;
					 $('#adjdate').val(toComma(adjdate));
				 }
				 if( diffdate <= 150 && diffdate > 120){
					 dateWeight = lessThan5Month;
					 $('#weidate').val(lessThan5Month);
					 $('#cweidate').val(lessThan5Month);
					  adjdate = parseFloat(lessThan5Month.replace(/%/g , '')) * parseInt(priceAvg) * (16 / 30) / 100;
					 $('#adjdate').val(toComma(adjdate));
				 }
				 if( diffdate <= 180 && diffdate > 150){
					 dateWeight = lessThan6Month;
					 $('#weidate').val(lessThan6Month);
					 $('#cweidate').val(lessThan6Month);
					  adjdate = parseFloat(lessThan6Month.replace(/%/g , '')) * parseInt(priceAvg) * (16 / 30) / 100;
					 $('#adjdate').val(toComma(adjdate));
				 }
				 if( diffdate <= 210 && diffdate > 180){
					 dateWeight = lessThan7Month;
					 $('#weidate').val(lessThan7Month);
					 $('#cweidate').val(lessThan7Month);
					  adjdate = parseFloat(lessThan7Month.replace(/%/g , '')) * parseInt(priceAvg) * (16 / 30) / 100;
					 $('#adjdate').val(toComma(adjdate));
				 }
				 if( diffdate <= 240 && diffdate > 210){
					 dateWeight = lessThan8Month;
					 $('#weidate').val(lessThan8Month);
					 $('#cweidate').val(lessThan8Month);
					  adjdate = parseFloat(lessThan8Month.replace(/%/g , '')) * parseInt(priceAvg) * (16 / 30) / 100;
					 $('#adjdate').val(toComma(adjdate));
				 }
				 if( diffdate <= 270 && diffdate > 240){
					 dateWeight = lessThan9Month;
					 $('#weidate').val(lessThan9Month);
					 $('#cweidate').val(lessThan9Month);
					  adjdate = parseFloat(lessThan9Month.replace(/%/g , '')) * parseInt(priceAvg) * (16 / 30) / 100;
					 $('#adjdate').val(toComma(adjdate));
				 }
				 if( diffdate <= 300 && diffdate > 270){
					 dateWeight = lessThan10Month;
					 $('#weidate').val(lessThan10Month);
					 $('#cweidate').val(lessThan10Month);
					  adjdate = parseFloat(lessThan10Month.replace(/%/g , '')) * parseInt(priceAvg) * (16 / 30) / 100;
					 $('#adjdate').val(toComma(adjdate));
				 }
				 if( diffdate <= 330 && diffdate > 300){
					 dateWeight = lessThan11Month;
					 $('#weidate').val(lessThan11Month);
					 $('#cweidate').val(lessThan11Month);
					  adjdate = parseFloat(lessThan11Month.replace(/%/g , '')) * parseInt(priceAvg) * (16 / 30) / 100;
					 $('#adjdate').val(toComma(adjdate));
				 }
				 if( diffdate <= 360 && diffdate > 330){
					 dateWeight = lessThan12Month;
					 $('#weidate').val(lessThan12Month);
					 $('#cweidate').val(lessThan12Month);
					  adjdate = parseFloat(lessThan12Month.replace(/%/g , '')) * parseInt(priceAvg) * (16 / 30) / 100;
					 $('#adjdate').val(toComma(adjdate));
				 }
				 
			     //Market Value//
				 var marketValue = parseInt(priceAvg) + parseInt(adjloc.toString().replace(/,/g , '')) + parseInt(adjage.toString().replace(/,/g , '')) + parseInt(adjten.toString().replace(/,/g , '')) + 
				 				   parseInt(adjview.toString().replace(/,/g , '')) + parseInt(adjsta.toString().replace(/,/g , '')) + parseInt(adjqua.toString().replace(/,/g , '')) + parseInt(adjupg.toString().replace(/,/g , '')) + 
				 				   parseInt(adjfur.toString().replace(/,/g , '')) + parseInt(adjexp.toString().replace(/,/g , '')) + parseInt(adjpla.toString().replace(/,/g , '')) + parseInt(adjfloor.toString().replace(/,/g , '')) + parseInt(adjlevel.toString().replace(/,/g , '')) +
				 				   parseInt(adjbed.toString().replace(/,/g , '')) + parseInt(adjpark.toString().replace(/,/g , '')) + parseInt(adjpool.toString().replace(/,/g , '')) + parseInt(adjlandscape.toString().replace(/,/g , '')) + 
				 				   parseInt(adjgood.toString().replace(/,/g , '')) + parseInt(adjuti.toString().replace(/,/g , '')) + parseInt(adjbal.toString().replace(/,/g , '')) + parseInt(adjland.toString().replace(/,/g , '')) + 
				 				   parseInt(adjbua.toString().replace(/,/g , '')) + parseInt(adjdev.toString().replace(/,/g , '')) + parseInt(adjdate.toString().replace(/,/g , ''));
				 $('#soldmarketvalue').val(toComma(marketValue));
				 finalValue = parseInt(parseInt(($('#soldmarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
				 $('#soldfinalvalue').val(toComma(finalValue));
				 
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
	if(value == "Not Good"){
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
		final = "5";
	}
	if(value == "Non-Freehold(Emiratis)"){
		final = "3";
	}
	if(value == "Non-Freehold(Emiratis & GCC Citizens)"){
		final = "4";
	}
	if(value == "Leasehold"){
		final = "2";
	}
	if(value == "Granted"){
		final = "1";
	}
	return final;
}
function calPla(value){
	var final = null;
	if(value == "Middle"){
		final = "0";
	}
	if(value == "Corner"){
		final = "1";
	}
	if(value == "Semi-Corner"){
		final = "0.5";
	}
	if(value == "Not Applicable"){
		final = "0";
	}
	return final;
}
function calSta(value){
	var final = null;
	if(value == "Shell & Core"){
		final = "0";
	}
	if(value == "Fitted"){
		final = "1";
	}
	if(value == "Not Applicable"){
		final = "0";
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
		final = "1";
	}
	if(value == "No"){
		final = "0";
	}
	if(value == "Semi-Furnished"){
		final = "1.5";
	}
	return final;
}
function calLandScape(value){
	var final = null;
	if(value == "Yes"){
		final = "1";
	}
	if(value == "No"){
		final = "0";
	}
	if(value == "Semi-Landscape"){
		final = "0.5";
	}
	return final;
}
function calMargin(value){
	var final = null;
	if(value == "Yes"){
		final = "0";
	}
	if(value == "No"){
		final = "1";
	}
	return final;
}
function calPool(value){
	var final = null;
	if(value == "Yes"){
		final = "1";
	}
	if(value == "No"){
		final = "0";
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
		final = "1";
	}
	if(value == "Back To Back"){
		final = "0";
	}
	if(value == "Not Applicable"){
		final = "0";
	}
	return final;
}