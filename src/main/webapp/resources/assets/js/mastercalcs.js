var mlocWeight = null;
var mviewWeight = null; 
var mquaWeight = null;
var mfloorWeight = null;
var mlandWeight = null;
var mbuaWeight = null;
var mdateWeight = null;
var mexpWeight = null;
var mplaWeight = null;
var mstaWeight = null;
var mbedWeight = null;
var mfurWeight = null;
var mbalWeight = null;
var mupgradeWeight = null;
var mparkWeight = null;
var mpoolWeight = null;
var mlandScapeWeight = null;
var mwhiteGoodsWeight = null;
var mutilitiesWeight = null;
var mtenureWeight = null;
var mdevmargin = null;
var mpriceAvg = null;
var mpricePerAvg = null;
var mlandAvg = null;
var mlocAvg = null;
var mageAvg = null;
var mtenAvg = null;
var mviewAvg = null;
var mstaAvg = null;
var mquaAvg = null;
var mupgAvg = null;
var mfurAvg = null;
var mparkAvg = null;
var mpoolAvg = null;
var mbalAvg =null;
var mdevAvg =null;
var mlandscapeAvg = null;
var mgoodAvg = null;
var mutiAvg = null;
var mexpAvg = null;
var mplaAvg = null;
var mfloorAvg = null;
var madjloc = null;
var madjview = null;
var madjqua = null;
var madjfloor = null;
var madjbua = null;
var madjbed = null;
var madjexp= null;
var madjpla = null;
var madjsta = null;
var madjdate = null;
var madjland = null;
var madjdev = null;
var mfinalValue = null;
$("#mavgpool").keyup(function(){
	var mdiffpool =  parseFloat($('#msubpool').val()) - parseFloat($(this).val());
	 $('#mdiffpool').val(toComma(mdiffpool));
	madjpool = parseFloat(($('#mdiffpool').val()).replace(/,/g , '')) * parseFloat(($("#cmweipool").val()).replace(/%/g , '')) * parseInt($('#poolPrice').val()) / 100;
    $('#madjpool').val(toComma(madjpool));
	 //Market Value//
	 var marketValue = parseInt(mpriceAvg) + parseInt(madjloc.toString().replace(/,/g , '')) + parseInt(madjage.toString().replace(/,/g , '')) + parseInt(madjten.toString().replace(/,/g , '')) + 
	 				   parseInt(madjview.toString().replace(/,/g , '')) + parseInt(madjsta.toString().replace(/,/g , '')) + parseInt(madjqua.toString().replace(/,/g , '')) + parseInt(madjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(madjfur.toString().replace(/,/g , '')) + parseInt(madjexp.toString().replace(/,/g , '')) + parseInt(madjpla.toString().replace(/,/g , '')) + parseInt(madjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(madjbed.toString().replace(/,/g , '')) + parseInt(madjpark.toString().replace(/,/g , '')) + parseInt(madjpool.toString().replace(/,/g , '')) + parseInt(madjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(madjgood.toString().replace(/,/g , '')) + parseInt(madjuti.toString().replace(/,/g , '')) + parseInt(madjbal.toString().replace(/,/g , '')) + parseInt(madjland.toString().replace(/,/g , '')) + 
	 				   parseInt(madjbua.toString().replace(/,/g , '')) + parseInt(madjdev.toString().replace(/,/g , '')) + parseInt(madjdate.toString().replace(/,/g , ''));
	 $('#mastermarketvalue').val(toComma(marketValue));
	 mfinalValue = parseInt(parseInt(($('#mastermarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#masterfinalvalue').val(toComma(mfinalValue));
});
$("#mavglandscape").keyup(function(){
	var mdifflandscape =  parseFloat($('#msublandscape').val()) - parseFloat($(this).val());
	 $('#mdifflandscape').val(toComma(mdifflandscape));
	madjlandscape= parseFloat(($('#mdifflandscape').val()).replace(/,/g , '')) * parseFloat(($("#cmweilandscape").val()).replace(/%/g , '')) * parseInt($('#landscapePrice').val()) / 100;
    $('#madjlandscape').val(toComma(madjlandscape));
	 //Market Value//
	 var marketValue = parseInt(mpriceAvg) + parseInt(madjloc.toString().replace(/,/g , '')) + parseInt(madjage.toString().replace(/,/g , '')) + parseInt(madjten.toString().replace(/,/g , '')) + 
	 				   parseInt(madjview.toString().replace(/,/g , '')) + parseInt(madjsta.toString().replace(/,/g , '')) + parseInt(madjqua.toString().replace(/,/g , '')) + parseInt(madjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(madjfur.toString().replace(/,/g , '')) + parseInt(madjexp.toString().replace(/,/g , '')) + parseInt(madjpla.toString().replace(/,/g , '')) + parseInt(madjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(madjbed.toString().replace(/,/g , '')) + parseInt(madjpark.toString().replace(/,/g , '')) + parseInt(madjpool.toString().replace(/,/g , '')) + parseInt(madjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(madjgood.toString().replace(/,/g , '')) + parseInt(madjuti.toString().replace(/,/g , '')) + parseInt(madjbal.toString().replace(/,/g , '')) + parseInt(madjland.toString().replace(/,/g , '')) + 
	 				   parseInt(madjbua.toString().replace(/,/g , '')) + parseInt(madjdev.toString().replace(/,/g , '')) + parseInt(madjdate.toString().replace(/,/g , ''));
	 $('#mastermarketvalue').val(toComma(marketValue));
	 mfinalValue = parseInt(parseInt(($('#mastermarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#masterfinalvalue').val(toComma(mfinalValue));
});
$("#mavggood").keyup(function(){
	var mdiffgood=  parseFloat($('#msubgood').val()) - parseFloat($(this).val());
	 $('#mdiffgood').val(toComma(mdiffgood));
	madjgood= parseFloat(($('#mdiffgood').val()).replace(/,/g , '')) * parseFloat(($("#cmweigood").val()).replace(/%/g , '')) * parseInt($('#whitegoodsPrice').val()) / 100;
    $('#madjgood').val(toComma(madjgood));
	 //Market Value//
	 var marketValue = parseInt(mpriceAvg) + parseInt(madjloc.toString().replace(/,/g , '')) + parseInt(madjage.toString().replace(/,/g , '')) + parseInt(madjten.toString().replace(/,/g , '')) + 
	 				   parseInt(madjview.toString().replace(/,/g , '')) + parseInt(madjsta.toString().replace(/,/g , '')) + parseInt(madjqua.toString().replace(/,/g , '')) + parseInt(madjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(madjfur.toString().replace(/,/g , '')) + parseInt(madjexp.toString().replace(/,/g , '')) + parseInt(madjpla.toString().replace(/,/g , '')) + parseInt(madjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(madjbed.toString().replace(/,/g , '')) + parseInt(madjpark.toString().replace(/,/g , '')) + parseInt(madjpool.toString().replace(/,/g , '')) + parseInt(madjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(madjgood.toString().replace(/,/g , '')) + parseInt(madjuti.toString().replace(/,/g , '')) + parseInt(madjbal.toString().replace(/,/g , '')) + parseInt(madjland.toString().replace(/,/g , '')) + 
	 				   parseInt(madjbua.toString().replace(/,/g , '')) + parseInt(madjdev.toString().replace(/,/g , '')) + parseInt(madjdate.toString().replace(/,/g , ''));
	 $('#mastermarketvalue').val(toComma(marketValue));
	 mfinalValue = parseInt(parseInt(($('#mastermarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#masterfinalvalue').val(toComma(mfinalValue));
});
$("#mavguti").keyup(function(){
	var mdiffuti=  parseFloat($('#msubuti').val()) - parseFloat($(this).val());
	 $('#mdiffuti').val(toComma(mdiffuti));
	madjuti= parseFloat(($('#mdiffuti').val()).replace(/,/g , '')) * parseFloat(($("#cmweiuti").val()).replace(/%/g , '')) * parseInt($('#utiliesPrice').val()) / 100;
    $('#madjuti').val(toComma(madjuti));
	 //Market Value//
	 var marketValue = parseInt(mpriceAvg) + parseInt(madjloc.toString().replace(/,/g , '')) + parseInt(madjage.toString().replace(/,/g , '')) + parseInt(madjten.toString().replace(/,/g , '')) + 
	 				   parseInt(madjview.toString().replace(/,/g , '')) + parseInt(madjsta.toString().replace(/,/g , '')) + parseInt(madjqua.toString().replace(/,/g , '')) + parseInt(madjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(madjfur.toString().replace(/,/g , '')) + parseInt(madjexp.toString().replace(/,/g , '')) + parseInt(madjpla.toString().replace(/,/g , '')) + parseInt(madjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(madjbed.toString().replace(/,/g , '')) + parseInt(madjpark.toString().replace(/,/g , '')) + parseInt(madjpool.toString().replace(/,/g , '')) + parseInt(madjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(madjgood.toString().replace(/,/g , '')) + parseInt(madjuti.toString().replace(/,/g , '')) + parseInt(madjbal.toString().replace(/,/g , '')) + parseInt(madjland.toString().replace(/,/g , '')) + 
	 				   parseInt(madjbua.toString().replace(/,/g , '')) + parseInt(madjdev.toString().replace(/,/g , '')) + parseInt(madjdate.toString().replace(/,/g , ''));
	 $('#mastermarketvalue').val(toComma(marketValue));
	 mfinalValue = parseInt(parseInt(($('#mastermarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#masterfinalvalue').val(toComma(mfinalValue));
});
$("#mavgten").keyup(function(){
	var mdifften = parseFloat($('#msubten').val()) - parseFloat($(this).val());
    $('#mdifften').val(mdifften);
	madjten =  parseFloat(($('#mdifften').val()).replace(/,/g , ''))  * parseFloat(($("#cmweiten").val()).replace(/%/g , '')) * parseInt(mpriceAvg) / 100;
	$('#madjten').val(toComma(madjten));
	 //Market Value//
	 var marketValue = parseInt(mpriceAvg) + parseInt(madjloc.toString().replace(/,/g , '')) + parseInt(madjage.toString().replace(/,/g , '')) + parseInt(madjten.toString().replace(/,/g , '')) + 
	 				   parseInt(madjview.toString().replace(/,/g , '')) + parseInt(madjsta.toString().replace(/,/g , '')) + parseInt(madjqua.toString().replace(/,/g , '')) + parseInt(madjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(madjfur.toString().replace(/,/g , '')) + parseInt(madjexp.toString().replace(/,/g , '')) + parseInt(madjpla.toString().replace(/,/g , '')) + parseInt(madjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(madjbed.toString().replace(/,/g , '')) + parseInt(madjpark.toString().replace(/,/g , '')) + parseInt(madjpool.toString().replace(/,/g , '')) + parseInt(madjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(madjgood.toString().replace(/,/g , '')) + parseInt(madjuti.toString().replace(/,/g , '')) + parseInt(madjbal.toString().replace(/,/g , '')) + parseInt(madjland.toString().replace(/,/g , '')) + 
	 				   parseInt(madjbua.toString().replace(/,/g , '')) + parseInt(madjdev.toString().replace(/,/g , '')) + parseInt(madjdate.toString().replace(/,/g , ''));
	 $('#mastermarketvalue').val(toComma(marketValue));
	 mfinalValue = parseInt(parseInt(($('#mastermarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#masterfinalvalue').val(toComma(mfinalValue));
});
$("#mavgsta").keyup(function(){
	var mdiffsta = parseFloat($('#msubsta').val()) - parseFloat($(this).val());
    $('#mdiffsta').val(mdiffsta);
	madjsta=  parseFloat(($('#mdiffsta').val()).replace(/,/g , ''))  * parseFloat(($("#cmweista").val()).replace(/%/g , '')) * parseInt(mpriceAvg) / 100;
	$('#madjsta').val(toComma(madjsta));
	 //Market Value//
	 var marketValue = parseInt(mpriceAvg) + parseInt(madjloc.toString().replace(/,/g , '')) + parseInt(madjage.toString().replace(/,/g , '')) + parseInt(madjten.toString().replace(/,/g , '')) + 
	 				   parseInt(madjview.toString().replace(/,/g , '')) + parseInt(madjsta.toString().replace(/,/g , '')) + parseInt(madjqua.toString().replace(/,/g , '')) + parseInt(madjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(madjfur.toString().replace(/,/g , '')) + parseInt(madjexp.toString().replace(/,/g , '')) + parseInt(madjpla.toString().replace(/,/g , '')) + parseInt(madjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(madjbed.toString().replace(/,/g , '')) + parseInt(madjpark.toString().replace(/,/g , '')) + parseInt(madjpool.toString().replace(/,/g , '')) + parseInt(madjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(madjgood.toString().replace(/,/g , '')) + parseInt(madjuti.toString().replace(/,/g , '')) + parseInt(madjbal.toString().replace(/,/g , '')) + parseInt(madjland.toString().replace(/,/g , '')) + 
	 				   parseInt(madjbua.toString().replace(/,/g , '')) + parseInt(madjdev.toString().replace(/,/g , '')) + parseInt(madjdate.toString().replace(/,/g , ''));
	 $('#mastermarketvalue').val(toComma(marketValue));
	 mfinalValue = parseInt(parseInt(($('#mastermarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#masterfinalvalue').val(toComma(mfinalValue));
});
$("#mavgfur").keyup(function(){
	var mdifffur = parseFloat($('#msubfur').val()) - parseFloat($(this).val());
    $('#mdifffur').val(mdifffur);
	madjfur=  parseFloat(($('#mdifffur').val()).replace(/,/g , ''))  * parseFloat(($("#cmweifur").val()).replace(/%/g , '')) * parseInt(mpriceAvg) / 100;
	$('#madjfur').val(toComma(madjfur));
	 //Market Value//
	 var marketValue = parseInt(mpriceAvg) + parseInt(madjloc.toString().replace(/,/g , '')) + parseInt(madjage.toString().replace(/,/g , '')) + parseInt(madjten.toString().replace(/,/g , '')) + 
	 				   parseInt(madjview.toString().replace(/,/g , '')) + parseInt(madjsta.toString().replace(/,/g , '')) + parseInt(madjqua.toString().replace(/,/g , '')) + parseInt(madjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(madjfur.toString().replace(/,/g , '')) + parseInt(madjexp.toString().replace(/,/g , '')) + parseInt(madjpla.toString().replace(/,/g , '')) + parseInt(madjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(madjbed.toString().replace(/,/g , '')) + parseInt(madjpark.toString().replace(/,/g , '')) + parseInt(madjpool.toString().replace(/,/g , '')) + parseInt(madjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(madjgood.toString().replace(/,/g , '')) + parseInt(madjuti.toString().replace(/,/g , '')) + parseInt(madjbal.toString().replace(/,/g , '')) + parseInt(madjland.toString().replace(/,/g , '')) + 
	 				   parseInt(madjbua.toString().replace(/,/g , '')) + parseInt(madjdev.toString().replace(/,/g , '')) + parseInt(madjdate.toString().replace(/,/g , ''));
	 $('#mastermarketvalue').val(toComma(marketValue));
	 mfinalValue = parseInt(parseInt(($('#mastermarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#masterfinalvalue').val(toComma(mfinalValue));
});
$("#mavgexp").keyup(function(){
	var mdiffexp = parseFloat($('#msubexp').val()) - parseFloat($(this).val());
    $('#mdiffexp').val(mdiffexp);
	madjexp=  parseFloat(($('#mdiffexp').val()).replace(/,/g , ''))  * parseFloat(($("#cmweiexp").val()).replace(/%/g , '')) * parseInt(mpriceAvg) / 100;
	$('#madjexp').val(toComma(madjexp));
	 //Market Value//
	 var marketValue = parseInt(mpriceAvg) + parseInt(madjloc.toString().replace(/,/g , '')) + parseInt(madjage.toString().replace(/,/g , '')) + parseInt(madjten.toString().replace(/,/g , '')) + 
	 				   parseInt(madjview.toString().replace(/,/g , '')) + parseInt(madjsta.toString().replace(/,/g , '')) + parseInt(madjqua.toString().replace(/,/g , '')) + parseInt(madjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(madjfur.toString().replace(/,/g , '')) + parseInt(madjexp.toString().replace(/,/g , '')) + parseInt(madjpla.toString().replace(/,/g , '')) + parseInt(madjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(madjbed.toString().replace(/,/g , '')) + parseInt(madjpark.toString().replace(/,/g , '')) + parseInt(madjpool.toString().replace(/,/g , '')) + parseInt(madjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(madjgood.toString().replace(/,/g , '')) + parseInt(madjuti.toString().replace(/,/g , '')) + parseInt(madjbal.toString().replace(/,/g , '')) + parseInt(madjland.toString().replace(/,/g , '')) + 
	 				   parseInt(madjbua.toString().replace(/,/g , '')) + parseInt(madjdev.toString().replace(/,/g , '')) + parseInt(madjdate.toString().replace(/,/g , ''));
	 $('#mastermarketvalue').val(toComma(marketValue));
	 mfinalValue = parseInt(parseInt(($('#mastermarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#masterfinalvalue').val(toComma(mfinalValue));
});
$("#mavgpla").keyup(function(){
	var mdiffpla = parseFloat($('#msubpla').val()) - parseFloat($(this).val());
    $('#mdiffpla').val(mdiffpla);
	madjpla=  parseFloat(($('#mdiffpla').val()).replace(/,/g , ''))  * parseFloat(($("#cmweipla").val()).replace(/%/g , '')) * parseInt(mpriceAvg) / 100;
	$('#madjpla').val(toComma(madjpla));
	 //Market Value//
	 var marketValue = parseInt(mpriceAvg) + parseInt(madjloc.toString().replace(/,/g , '')) + parseInt(madjage.toString().replace(/,/g , '')) + parseInt(madjten.toString().replace(/,/g , '')) + 
	 				   parseInt(madjview.toString().replace(/,/g , '')) + parseInt(madjsta.toString().replace(/,/g , '')) + parseInt(madjqua.toString().replace(/,/g , '')) + parseInt(madjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(madjfur.toString().replace(/,/g , '')) + parseInt(madjexp.toString().replace(/,/g , '')) + parseInt(madjpla.toString().replace(/,/g , '')) + parseInt(madjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(madjbed.toString().replace(/,/g , '')) + parseInt(madjpark.toString().replace(/,/g , '')) + parseInt(madjpool.toString().replace(/,/g , '')) + parseInt(madjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(madjgood.toString().replace(/,/g , '')) + parseInt(madjuti.toString().replace(/,/g , '')) + parseInt(madjbal.toString().replace(/,/g , '')) + parseInt(madjland.toString().replace(/,/g , '')) + 
	 				   parseInt(madjbua.toString().replace(/,/g , '')) + parseInt(madjdev.toString().replace(/,/g , '')) + parseInt(madjdate.toString().replace(/,/g , ''));
	 $('#mastermarketvalue').val(toComma(marketValue));
	 mfinalValue = parseInt(parseInt(($('#mastermarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#masterfinalvalue').val(toComma(mfinalValue));
});

$("#mavgbal").keyup(function(){
	var mdiffbal = parseInt($('#msubbal').val()) - parseInt($(this).val());
    $('#mdiffbal').val(mdiffbal);
	madjbal =  parseInt(($('#mdiffbal').val()).replace(/,/g , ''))  * parseFloat(($("#cmweibal").val()).replace(/%/g , '')) * parseInt(mpricePerAvg) / 100;
	$('#madjbal').val(toComma(madjbal));
	 //Market Value//
	 var marketValue = parseInt(mpriceAvg) + parseInt(madjloc.toString().replace(/,/g , '')) + parseInt(madjage.toString().replace(/,/g , '')) + parseInt(madjten.toString().replace(/,/g , '')) + 
	 				   parseInt(madjview.toString().replace(/,/g , '')) + parseInt(madjsta.toString().replace(/,/g , '')) + parseInt(madjqua.toString().replace(/,/g , '')) + parseInt(madjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(madjfur.toString().replace(/,/g , '')) + parseInt(madjexp.toString().replace(/,/g , '')) + parseInt(madjpla.toString().replace(/,/g , '')) + parseInt(madjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(madjbed.toString().replace(/,/g , '')) + parseInt(madjpark.toString().replace(/,/g , '')) + parseInt(madjpool.toString().replace(/,/g , '')) + parseInt(madjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(madjgood.toString().replace(/,/g , '')) + parseInt(madjuti.toString().replace(/,/g , '')) + parseInt(madjbal.toString().replace(/,/g , '')) + parseInt(madjland.toString().replace(/,/g , '')) + 
	 				   parseInt(madjbua.toString().replace(/,/g , '')) + parseInt(madjdev.toString().replace(/,/g , '')) + parseInt(madjdate.toString().replace(/,/g , ''));
	 $('#mastermarketvalue').val(toComma(marketValue));
	 mfinalValue = parseInt(parseInt(($('#mastermarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#masterfinalvalue').val(toComma(mfinalValue));
});
$("#mavgdev").keyup(function(){
	var mdiffdev = parseFloat($('#msubdev').val()) - parseFloat($(this).val());
    $('#mdiffdev').val(mdiffdev.toFixed(2));
	madjdev =  parseFloat(($('#mdiffdev').val()).replace(/,/g , ''))  * parseFloat(($("#cmweidev").val()).replace(/%/g , '')) * parseInt(mpriceAvg) / 100;
	$('#madjdev').val(toComma(madjdev));
	 //Market Value//
	 var marketValue = parseInt(mpriceAvg) + parseInt(madjloc.toString().replace(/,/g , '')) + parseInt(madjage.toString().replace(/,/g , '')) + parseInt(madjten.toString().replace(/,/g , '')) + 
	 				   parseInt(madjview.toString().replace(/,/g , '')) + parseInt(madjsta.toString().replace(/,/g , '')) + parseInt(madjqua.toString().replace(/,/g , '')) + parseInt(madjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(madjfur.toString().replace(/,/g , '')) + parseInt(madjexp.toString().replace(/,/g , '')) + parseInt(madjpla.toString().replace(/,/g , '')) + parseInt(madjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(madjbed.toString().replace(/,/g , '')) + parseInt(madjpark.toString().replace(/,/g , '')) + parseInt(madjpool.toString().replace(/,/g , '')) + parseInt(madjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(madjgood.toString().replace(/,/g , '')) + parseInt(madjuti.toString().replace(/,/g , '')) + parseInt(madjbal.toString().replace(/,/g , '')) + parseInt(madjland.toString().replace(/,/g , '')) + 
	 				   parseInt(madjbua.toString().replace(/,/g , '')) + parseInt(madjdev.toString().replace(/,/g , '')) + parseInt(madjdate.toString().replace(/,/g , ''));
	 $('#mastermarketvalue').val(toComma(marketValue));
	 mfinalValue = parseInt(parseInt(($('#mastermarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#masterfinalvalue').val(toComma(mfinalValue));
});
$("#mavgbua").keyup(function(){
	 var mdiffbua =  parseInt($('#buitUpAreaSize').val()) - parseInt(($("#mavgbua").val()).toString().replace(/,/g , ''));
	 $('#mdiffbua').val(toComma(mdiffbua));
	  madjbua =  parseInt(($('#mdiffbua').val()).replace(/,/g , ''))  * parseFloat(mbuaWeight.replace(/%/g , '')) * parseInt(mpricePerAvg) / 100;
	 $('#madjbua').val(toComma(madjbua));
	 //Market Value//
	 var marketValue = parseInt(mpriceAvg) + parseInt(madjloc.toString().replace(/,/g , '')) + parseInt(madjage.toString().replace(/,/g , '')) + parseInt(madjten.toString().replace(/,/g , '')) + 
	 				   parseInt(madjview.toString().replace(/,/g , '')) + parseInt(madjsta.toString().replace(/,/g , '')) + parseInt(madjqua.toString().replace(/,/g , '')) + parseInt(madjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(madjfur.toString().replace(/,/g , '')) + parseInt(madjexp.toString().replace(/,/g , '')) + parseInt(madjpla.toString().replace(/,/g , '')) + parseInt(madjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(madjbed.toString().replace(/,/g , '')) + parseInt(madjpark.toString().replace(/,/g , '')) + parseInt(madjpool.toString().replace(/,/g , '')) + parseInt(madjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(madjgood.toString().replace(/,/g , '')) + parseInt(madjuti.toString().replace(/,/g , '')) + parseInt(madjbal.toString().replace(/,/g , '')) + parseInt(madjland.toString().replace(/,/g , '')) + 
	 				   parseInt(madjbua.toString().replace(/,/g , '')) + parseInt(madjdev.toString().replace(/,/g , '')) + parseInt(madjdate.toString().replace(/,/g , ''));
	 $('#mastermarketvalue').val(toComma(marketValue));
	 mfinalValue = parseInt(parseInt(($('#mastermarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#masterfinalvalue').val(toComma(mfinalValue));
});
$("#mavgpark").keyup(function(){
	var mdiffpark = parseFloat($('#msubpark').val()) - parseFloat($(this).val());
    $('#mdiffpark').val(mdiffpark.toFixed(2));
	madjpark =  parseFloat(($('#mdiffpark').val()).replace(/,/g , ''))  * parseFloat(($("#cmweipark").val()).replace(/%/g , '')) * parseInt($('#parkingPrice').val()) / 100;
	$('#madjpark').val(toComma(madjpark));
	 //Market Value//
	 var marketValue = parseInt(mpriceAvg) + parseInt(madjloc.toString().replace(/,/g , '')) + parseInt(madjage.toString().replace(/,/g , '')) + parseInt(madjten.toString().replace(/,/g , '')) + 
	 				   parseInt(madjview.toString().replace(/,/g , '')) + parseInt(madjsta.toString().replace(/,/g , '')) + parseInt(madjqua.toString().replace(/,/g , '')) + parseInt(madjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(madjfur.toString().replace(/,/g , '')) + parseInt(madjexp.toString().replace(/,/g , '')) + parseInt(madjpla.toString().replace(/,/g , '')) + parseInt(madjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(madjbed.toString().replace(/,/g , '')) + parseInt(madjpark.toString().replace(/,/g , '')) + parseInt(madjpool.toString().replace(/,/g , '')) + parseInt(madjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(madjgood.toString().replace(/,/g , '')) + parseInt(madjuti.toString().replace(/,/g , '')) + parseInt(madjbal.toString().replace(/,/g , '')) + parseInt(madjland.toString().replace(/,/g , '')) + 
	 				   parseInt(madjbua.toString().replace(/,/g , '')) + parseInt(madjdev.toString().replace(/,/g , '')) + parseInt(madjdate.toString().replace(/,/g , ''));
	 $('#mastermarketvalue').val(toComma(marketValue));
	 mfinalValue = parseInt(parseInt(($('#mastermarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#masterfinalvalue').val(toComma(mfinalValue));
});
$("#mavgage").keyup(function(){
	var mdiffage = parseFloat($('#msubage').val()) - parseFloat($(this).val());
    $('#mdiffage').val(mdiffage.toFixed(2));
	madjage =  parseFloat(($('#mdiffage').val()).replace(/,/g , ''))  * parseFloat(($("#cmweiage").val()).replace(/%/g , '')) * parseInt(mpriceAvg) / 100;
	$('#madjage').val(toComma(madjage));
	 //Market Value//
	 var marketValue = parseInt(mpriceAvg) + parseInt(madjloc.toString().replace(/,/g , '')) + parseInt(madjage.toString().replace(/,/g , '')) + parseInt(madjten.toString().replace(/,/g , '')) + 
	 				   parseInt(madjview.toString().replace(/,/g , '')) + parseInt(madjsta.toString().replace(/,/g , '')) + parseInt(madjqua.toString().replace(/,/g , '')) + parseInt(madjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(madjfur.toString().replace(/,/g , '')) + parseInt(madjexp.toString().replace(/,/g , '')) + parseInt(madjpla.toString().replace(/,/g , '')) + parseInt(madjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(madjbed.toString().replace(/,/g , '')) + parseInt(madjpark.toString().replace(/,/g , '')) + parseInt(madjpool.toString().replace(/,/g , '')) + parseInt(madjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(madjgood.toString().replace(/,/g , '')) + parseInt(madjuti.toString().replace(/,/g , '')) + parseInt(madjbal.toString().replace(/,/g , '')) + parseInt(madjland.toString().replace(/,/g , '')) + 
	 				   parseInt(madjbua.toString().replace(/,/g , ''))+ parseInt(madjdev.toString().replace(/,/g , ''))  + parseInt(madjdate.toString().replace(/,/g , ''));
	 $('#mastermarketvalue').val(toComma(marketValue));
	 mfinalValue = parseInt(parseInt(($('#mastermarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#masterfinalvalue').val(toComma(mfinalValue));
});
$("#cmweiloc").keyup(function(){
	if($("#cmweiloc").val() != $("#mweiloc").val()){
		$("#cmweiloc").css("color","crimson");
	}
	else{
		$("#cmweiloc").css("color","#6c757d");
	}
	madjloc =  parseFloat(($('#mdiffloc').val()).replace(/,/g , ''))  * parseFloat(($("#cmweiloc").val()).replace(/%/g , '')) * parseInt(mpriceAvg) / 100;
	$('#madjloc').val(toComma(madjloc));
	 //Market Value//
	 var marketValue = parseInt(mpriceAvg) + parseInt(madjloc.toString().replace(/,/g , '')) + parseInt(madjage.toString().replace(/,/g , '')) + parseInt(madjten.toString().replace(/,/g , '')) + 
	 				   parseInt(madjview.toString().replace(/,/g , '')) + parseInt(madjsta.toString().replace(/,/g , '')) + parseInt(madjqua.toString().replace(/,/g , '')) + parseInt(madjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(madjfur.toString().replace(/,/g , '')) + parseInt(madjexp.toString().replace(/,/g , '')) + parseInt(madjpla.toString().replace(/,/g , '')) + parseInt(madjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(madjbed.toString().replace(/,/g , '')) + parseInt(madjpark.toString().replace(/,/g , '')) + parseInt(madjpool.toString().replace(/,/g , '')) + parseInt(madjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(madjgood.toString().replace(/,/g , '')) + parseInt(madjuti.toString().replace(/,/g , '')) + parseInt(madjbal.toString().replace(/,/g , '')) + parseInt(madjland.toString().replace(/,/g , '')) + 
	 				   parseInt(madjbua.toString().replace(/,/g , '')) + parseInt(madjdev.toString().replace(/,/g , '')) + parseInt(madjdate.toString().replace(/,/g , ''));
	 $('#mastermarketvalue').val(toComma(marketValue));
	 mfinalValue = parseInt(parseInt(($('#mastermarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#masterfinalvalue').val(toComma(mfinalValue));
});
$("#cmweiage").keyup(function(){
	if($("#cmweiage").val() != $("#mweiage").val()){
		$("#cmweiage").css("color","crimson");
	}
	else{
		$("#cmweiage").css("color","#6c757d");
	}
	madjage =  parseFloat(($('#mdiffage').val()).replace(/,/g , ''))  * parseFloat(($("#cmweiage").val()).replace(/%/g , '')) * parseInt(mpriceAvg) / 100;
	$('#madjage').val(toComma(madjage));
	 //Market Value//
	 var marketValue = parseInt(mpriceAvg) + parseInt(madjloc.toString().replace(/,/g , '')) + parseInt(madjage.toString().replace(/,/g , '')) + parseInt(madjten.toString().replace(/,/g , '')) + 
	 				   parseInt(madjview.toString().replace(/,/g , '')) + parseInt(madjsta.toString().replace(/,/g , '')) + parseInt(madjqua.toString().replace(/,/g , '')) + parseInt(madjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(madjfur.toString().replace(/,/g , '')) + parseInt(madjexp.toString().replace(/,/g , '')) + parseInt(madjpla.toString().replace(/,/g , '')) + parseInt(madjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(madjbed.toString().replace(/,/g , '')) + parseInt(madjpark.toString().replace(/,/g , '')) + parseInt(madjpool.toString().replace(/,/g , '')) + parseInt(madjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(madjgood.toString().replace(/,/g , '')) + parseInt(madjuti.toString().replace(/,/g , '')) + parseInt(madjbal.toString().replace(/,/g , '')) + parseInt(madjland.toString().replace(/,/g , '')) + 
	 				   parseInt(madjbua.toString().replace(/,/g , '')) + parseInt(madjdev.toString().replace(/,/g , '')) + parseInt(madjdate.toString().replace(/,/g , ''));
	 $('#mastermarketvalue').val(toComma(marketValue));
	 mfinalValue = parseInt(parseInt(($('#mastermarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#masterfinalvalue').val(toComma(mfinalValue));
});
$("#cmweiten").keyup(function(){
	if($("#cmweiten").val() != $("#mweiten").val()){
		$("#cmweiten").css("color","crimson");
	}
	else{
		$("#cmweiten").css("color","#6c757d");
	}
	madjten =  parseFloat(($('#mdifften').val()).replace(/,/g , ''))  * parseFloat(($("#cmweiten").val()).replace(/%/g , '')) * parseInt(mpriceAvg) / 100;
	$('#madjten').val(toComma(madjten));
	 //Market Value//
	 var marketValue = parseInt(mpriceAvg) + parseInt(madjloc.toString().replace(/,/g , '')) + parseInt(madjage.toString().replace(/,/g , '')) + parseInt(madjten.toString().replace(/,/g , '')) + 
	 				   parseInt(madjview.toString().replace(/,/g , '')) + parseInt(madjsta.toString().replace(/,/g , '')) + parseInt(madjqua.toString().replace(/,/g , '')) + parseInt(madjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(madjfur.toString().replace(/,/g , '')) + parseInt(madjexp.toString().replace(/,/g , '')) + parseInt(madjpla.toString().replace(/,/g , '')) + parseInt(madjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(madjbed.toString().replace(/,/g , '')) + parseInt(madjpark.toString().replace(/,/g , '')) + parseInt(madjpool.toString().replace(/,/g , '')) + parseInt(madjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(madjgood.toString().replace(/,/g , '')) + parseInt(madjuti.toString().replace(/,/g , '')) + parseInt(madjbal.toString().replace(/,/g , '')) + parseInt(madjland.toString().replace(/,/g , '')) + 
	 				   parseInt(madjbua.toString().replace(/,/g , '')) + parseInt(madjdev.toString().replace(/,/g , '')) + parseInt(madjdate.toString().replace(/,/g , ''));
	 $('#mastermarketvalue').val(toComma(marketValue));
	 mfinalValue = parseInt(parseInt(($('#mastermarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#masterfinalvalue').val(toComma(mfinalValue));
});
$("#cmweiview").keyup(function(){
	if($("#cmweiview").val() != $("#mweiview").val()){
		$("#cmweiview").css("color","crimson");
	}
	else{
		$("#cmweiview").css("color","#6c757d");
	}
	madjview =  parseFloat(($('#mdiffview').val()).replace(/,/g , ''))  * parseFloat(($("#cmweiview").val()).replace(/%/g , '')) * parseInt(mpriceAvg) / 100;
	$('#madjview').val(toComma(madjview));
	 //Market Value//
	 var marketValue = parseInt(mpriceAvg) + parseInt(madjloc.toString().replace(/,/g , '')) + parseInt(madjage.toString().replace(/,/g , '')) + parseInt(madjten.toString().replace(/,/g , '')) + 
	 				   parseInt(madjview.toString().replace(/,/g , '')) + parseInt(madjsta.toString().replace(/,/g , '')) + parseInt(madjqua.toString().replace(/,/g , '')) + parseInt(madjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(madjfur.toString().replace(/,/g , '')) + parseInt(madjexp.toString().replace(/,/g , '')) + parseInt(madjpla.toString().replace(/,/g , '')) + parseInt(madjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(madjbed.toString().replace(/,/g , '')) + parseInt(madjpark.toString().replace(/,/g , '')) + parseInt(madjpool.toString().replace(/,/g , '')) + parseInt(madjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(madjgood.toString().replace(/,/g , '')) + parseInt(madjuti.toString().replace(/,/g , '')) + parseInt(madjbal.toString().replace(/,/g , '')) + parseInt(madjland.toString().replace(/,/g , '')) + 
	 				   parseInt(madjbua.toString().replace(/,/g , '')) + parseInt(madjdev.toString().replace(/,/g , '')) + parseInt(madjdate.toString().replace(/,/g , ''));
	 $('#mastermarketvalue').val(toComma(marketValue));
	 mfinalValue = parseInt(parseInt(($('#mastermarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#masterfinalvalue').val(toComma(mfinalValue));
});
$("#cmweista").keyup(function(){
	if($("#cmweista").val() != $("#mweista").val()){
		$("#cmweista").css("color","crimson");
	}
	else{
		$("#cmweista").css("color","#6c757d");
	}
	madjsta =  parseFloat(($('#mdiffsta').val()).replace(/,/g , ''))  * parseFloat(($("#cmweista").val()).replace(/%/g , '')) * parseInt(mpriceAvg) / 100;
	$('#madjsta').val(toComma(madjsta));
	 //Market Value//
	 var marketValue = parseInt(mpriceAvg) + parseInt(madjloc.toString().replace(/,/g , '')) + parseInt(madjage.toString().replace(/,/g , '')) + parseInt(madjten.toString().replace(/,/g , '')) + 
	 				   parseInt(madjview.toString().replace(/,/g , '')) + parseInt(madjsta.toString().replace(/,/g , '')) + parseInt(madjqua.toString().replace(/,/g , '')) + parseInt(madjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(madjfur.toString().replace(/,/g , '')) + parseInt(madjexp.toString().replace(/,/g , '')) + parseInt(madjpla.toString().replace(/,/g , '')) + parseInt(madjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(madjbed.toString().replace(/,/g , '')) + parseInt(madjpark.toString().replace(/,/g , '')) + parseInt(madjpool.toString().replace(/,/g , '')) + parseInt(madjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(madjgood.toString().replace(/,/g , '')) + parseInt(madjuti.toString().replace(/,/g , '')) + parseInt(madjbal.toString().replace(/,/g , '')) + parseInt(madjland.toString().replace(/,/g , '')) + 
	 				   parseInt(madjbua.toString().replace(/,/g , '')) + parseInt(madjdev.toString().replace(/,/g , '')) + parseInt(madjdate.toString().replace(/,/g , ''));
	 $('#mastermarketvalue').val(toComma(marketValue));
	 mfinalValue = parseInt(parseInt(($('#mastermarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#masterfinalvalue').val(toComma(mfinalValue));
});
$("#cmweidev").keyup(function(){
	if($("#cmweidev").val() != $("#mweidev").val()){
		$("#cmweidev").css("color","crimson");
	}
	else{
		$("#cmweidev").css("color","#6c757d");
	}
	madjdev =  parseFloat(($('#mdiffdev').val()).replace(/,/g , ''))  * parseFloat(($("#cmweidev").val()).replace(/%/g , '')) * parseInt(mpriceAvg) / 100;
	$('#madjdev').val(toComma(madjdev));
	 //Market Value//
	 var marketValue = parseInt(mpriceAvg) + parseInt(madjloc.toString().replace(/,/g , '')) + parseInt(madjage.toString().replace(/,/g , '')) + parseInt(madjten.toString().replace(/,/g , '')) + 
	 				   parseInt(madjview.toString().replace(/,/g , '')) + parseInt(madjsta.toString().replace(/,/g , '')) + parseInt(madjqua.toString().replace(/,/g , '')) + parseInt(madjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(madjfur.toString().replace(/,/g , '')) + parseInt(madjexp.toString().replace(/,/g , '')) + parseInt(madjpla.toString().replace(/,/g , '')) + parseInt(madjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(madjbed.toString().replace(/,/g , '')) + parseInt(madjpark.toString().replace(/,/g , '')) + parseInt(madjpool.toString().replace(/,/g , '')) + parseInt(madjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(madjgood.toString().replace(/,/g , '')) + parseInt(madjuti.toString().replace(/,/g , '')) + parseInt(madjbal.toString().replace(/,/g , '')) + parseInt(madjland.toString().replace(/,/g , '')) + 
	 				   parseInt(madjbua.toString().replace(/,/g , '')) + parseInt(madjdev.toString().replace(/,/g , '')) + parseInt(madjdate.toString().replace(/,/g , ''));
	 $('#mastermarketvalue').val(toComma(marketValue));
	 mfinalValue = parseInt(parseInt(($('#mastermarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#masterfinalvalue').val(toComma(mfinalValue));
});
$("#cmweiqua").keyup(function(){
	if($("#cmweiqua").val() != $("#mweiqua").val()){
		$("#cmweiqua").css("color","crimson");
	}
	else{
		$("#cmweiqua").css("color","#6c757d");
	}
	madjqua =  parseFloat(($('#mdiffqua').val()).replace(/,/g , ''))  * parseFloat(($("#cmweiqua").val()).replace(/%/g , '')) * parseInt(mpriceAvg) / 100;
	$('#madjqua').val(toComma(madjqua));
	 //Market Value//
	 var marketValue = parseInt(mpriceAvg) + parseInt(madjloc.toString().replace(/,/g , '')) + parseInt(madjage.toString().replace(/,/g , '')) + parseInt(madjten.toString().replace(/,/g , '')) + 
	 				   parseInt(madjview.toString().replace(/,/g , '')) + parseInt(madjsta.toString().replace(/,/g , '')) + parseInt(madjqua.toString().replace(/,/g , '')) + parseInt(madjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(madjfur.toString().replace(/,/g , '')) + parseInt(madjexp.toString().replace(/,/g , '')) + parseInt(madjpla.toString().replace(/,/g , '')) + parseInt(madjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(madjbed.toString().replace(/,/g , '')) + parseInt(madjpark.toString().replace(/,/g , '')) + parseInt(madjpool.toString().replace(/,/g , '')) + parseInt(madjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(madjgood.toString().replace(/,/g , '')) + parseInt(madjuti.toString().replace(/,/g , '')) + parseInt(madjbal.toString().replace(/,/g , '')) + parseInt(madjland.toString().replace(/,/g , '')) + 
	 				   parseInt(madjbua.toString().replace(/,/g , '')) + parseInt(madjdev.toString().replace(/,/g , '')) + parseInt(madjdate.toString().replace(/,/g , ''));
	 $('#mastermarketvalue').val(toComma(marketValue));
	 mfinalValue = parseInt(parseInt(($('#mastermarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#masterfinalvalue').val(toComma(mfinalValue));
});
$("#cmweiupg").keyup(function(){
	if($("#cmweiupg").val() != $("#mweiupg").val()){
		$("#cmweiupg").css("color","crimson");
	}
	else{
		$("#cmweiupg").css("color","#6c757d");
	}
	madjupg =  parseFloat(($('#mdiffupg').val()).replace(/,/g , ''))  * parseFloat(($("#cmweiupg").val()).replace(/%/g , '')) * parseInt(mpriceAvg) / 100;
	$('#madjupg').val(toComma(madjupg));
	 //Market Value//
	 var marketValue = parseInt(mpriceAvg) + parseInt(madjloc.toString().replace(/,/g , '')) + parseInt(madjage.toString().replace(/,/g , '')) + parseInt(madjten.toString().replace(/,/g , '')) + 
	 				   parseInt(madjview.toString().replace(/,/g , '')) + parseInt(madjsta.toString().replace(/,/g , '')) + parseInt(madjqua.toString().replace(/,/g , '')) + parseInt(madjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(madjfur.toString().replace(/,/g , '')) + parseInt(madjexp.toString().replace(/,/g , '')) + parseInt(madjpla.toString().replace(/,/g , '')) + parseInt(madjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(madjbed.toString().replace(/,/g , '')) + parseInt(madjpark.toString().replace(/,/g , '')) + parseInt(madjpool.toString().replace(/,/g , '')) + parseInt(madjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(madjgood.toString().replace(/,/g , '')) + parseInt(madjuti.toString().replace(/,/g , '')) + parseInt(madjbal.toString().replace(/,/g , '')) + parseInt(madjland.toString().replace(/,/g , '')) + 
	 				   parseInt(madjbua.toString().replace(/,/g , ''))+ parseInt(madjdev.toString().replace(/,/g , ''))  + parseInt(madjdate.toString().replace(/,/g , ''));
	 $('#mastermarketvalue').val(toComma(marketValue));
	 mfinalValue = parseInt(parseInt(($('#mastermarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#masterfinalvalue').val(toComma(mfinalValue));
});
$("#cmweifur").keyup(function(){
	if($("#cmweifur").val() != $("#mweifur").val()){
		$("#cmweifur").css("color","crimson");
	}
	else{
		$("#cmweifur").css("color","#6c757d");
	}
	madjfur =  parseFloat(($('#mdifffur').val()).replace(/,/g , ''))  * parseFloat(($("#cmweifur").val()).replace(/%/g , '')) * parseInt(mpriceAvg) / 100;
	$('#madjfur').val(toComma(madjfur));
	 //Market Value//
	 var marketValue = parseInt(mpriceAvg) + parseInt(madjloc.toString().replace(/,/g , '')) + parseInt(madjage.toString().replace(/,/g , '')) + parseInt(madjten.toString().replace(/,/g , '')) + 
	 				   parseInt(madjview.toString().replace(/,/g , '')) + parseInt(madjsta.toString().replace(/,/g , '')) + parseInt(madjqua.toString().replace(/,/g , '')) + parseInt(madjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(madjfur.toString().replace(/,/g , '')) + parseInt(madjexp.toString().replace(/,/g , '')) + parseInt(madjpla.toString().replace(/,/g , '')) + parseInt(madjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(madjbed.toString().replace(/,/g , '')) + parseInt(madjpark.toString().replace(/,/g , '')) + parseInt(madjpool.toString().replace(/,/g , '')) + parseInt(madjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(madjgood.toString().replace(/,/g , '')) + parseInt(madjuti.toString().replace(/,/g , '')) + parseInt(madjbal.toString().replace(/,/g , '')) + parseInt(madjland.toString().replace(/,/g , '')) + 
	 				   parseInt(madjbua.toString().replace(/,/g , '')) + parseInt(madjdev.toString().replace(/,/g , '')) + parseInt(madjdate.toString().replace(/,/g , ''));
	 $('#mastermarketvalue').val(toComma(marketValue));
	 mfinalValue = parseInt(parseInt(($('#mastermarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#masterfinalvalue').val(toComma(mfinalValue));
});
$("#cmweiexp").keyup(function(){
	if($("#cmweiexp").val() != $("#mweiexp").val()){
		$("#cmweiexp").css("color","crimson");
	}
	else{
		$("#cmweiexp").css("color","#6c757d");
	}
	madjexp =  parseFloat(($('#mdiffexp').val()).replace(/,/g , ''))  * parseFloat(($("#cmweiexp").val()).replace(/%/g , '')) * parseInt(mpriceAvg) / 100;
	$('#madjexp').val(toComma(madjexp));
	 //Market Value//
	 var marketValue = parseInt(mpriceAvg) + parseInt(madjloc.toString().replace(/,/g , '')) + parseInt(madjage.toString().replace(/,/g , '')) + parseInt(madjten.toString().replace(/,/g , '')) + 
	 				   parseInt(madjview.toString().replace(/,/g , '')) + parseInt(madjsta.toString().replace(/,/g , '')) + parseInt(madjqua.toString().replace(/,/g , '')) + parseInt(madjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(madjfur.toString().replace(/,/g , '')) + parseInt(madjexp.toString().replace(/,/g , '')) + parseInt(madjpla.toString().replace(/,/g , '')) + parseInt(madjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(madjbed.toString().replace(/,/g , '')) + parseInt(madjpark.toString().replace(/,/g , '')) + parseInt(madjpool.toString().replace(/,/g , '')) + parseInt(madjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(madjgood.toString().replace(/,/g , '')) + parseInt(madjuti.toString().replace(/,/g , '')) + parseInt(madjbal.toString().replace(/,/g , '')) + parseInt(madjland.toString().replace(/,/g , '')) + 
	 				   parseInt(madjbua.toString().replace(/,/g , '')) + parseInt(madjdev.toString().replace(/,/g , '')) + parseInt(madjdate.toString().replace(/,/g , ''));
	 $('#mastermarketvalue').val(toComma(marketValue));
	 mfinalValue = parseInt(parseInt(($('#mastermarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#masterfinalvalue').val(toComma(mfinalValue));
});
$("#cmweipla").keyup(function(){
	if($("#cmweipla").val() != $("#mweipla").val()){
		$("#cmweipla").css("color","crimson");
	}
	else{
		$("#cmweipla").css("color","#6c757d");
	}
	madjpla =  parseFloat(($('#mdiffpla').val()).replace(/,/g , ''))  * parseFloat(($("#cmweipla").val()).replace(/%/g , '')) * parseInt(mpriceAvg) / 100;
	$('#madjpla').val(toComma(madjpla));
	 //Market Value//
	 var marketValue = parseInt(mpriceAvg) + parseInt(madjloc.toString().replace(/,/g , '')) + parseInt(madjage.toString().replace(/,/g , '')) + parseInt(madjten.toString().replace(/,/g , '')) + 
	 				   parseInt(madjview.toString().replace(/,/g , '')) + parseInt(madjsta.toString().replace(/,/g , '')) + parseInt(madjqua.toString().replace(/,/g , '')) + parseInt(madjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(madjfur.toString().replace(/,/g , '')) + parseInt(madjexp.toString().replace(/,/g , '')) + parseInt(madjpla.toString().replace(/,/g , '')) + parseInt(madjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(madjbed.toString().replace(/,/g , '')) + parseInt(madjpark.toString().replace(/,/g , '')) + parseInt(madjpool.toString().replace(/,/g , '')) + parseInt(madjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(madjgood.toString().replace(/,/g , '')) + parseInt(madjuti.toString().replace(/,/g , '')) + parseInt(madjbal.toString().replace(/,/g , '')) + parseInt(madjland.toString().replace(/,/g , '')) + 
	 				   parseInt(madjbua.toString().replace(/,/g , '')) + parseInt(madjdev.toString().replace(/,/g , '')) + parseInt(madjdate.toString().replace(/,/g , ''));
	 $('#mastermarketvalue').val(toComma(marketValue));
	 mfinalValue = parseInt(parseInt(($('#mastermarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#masterfinalvalue').val(toComma(mfinalValue));
});
$("#cmweifloor").keyup(function(){
	if($("#cmweifloor").val() != $("#mweifloor").val()){
		$("#cmweifloor").css("color","crimson");
	}
	else{
		$("#cmweifloor").css("color","#6c757d");
	}
	madjfloor =  parseFloat(($('#mdifffloor').val()).replace(/,/g , ''))  * parseFloat(($("#cmweifloor").val()).replace(/%/g , '')) * parseInt(mpriceAvg) / 100;
	$('#madjfloor').val(toComma(madjfloor));
	 //Market Value//
	 var marketValue = parseInt(mpriceAvg) + parseInt(madjloc.toString().replace(/,/g , '')) + parseInt(madjage.toString().replace(/,/g , '')) + parseInt(madjten.toString().replace(/,/g , '')) + 
	 				   parseInt(madjview.toString().replace(/,/g , '')) + parseInt(madjsta.toString().replace(/,/g , '')) + parseInt(madjqua.toString().replace(/,/g , '')) + parseInt(madjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(madjfur.toString().replace(/,/g , '')) + parseInt(madjexp.toString().replace(/,/g , '')) + parseInt(madjpla.toString().replace(/,/g , '')) + parseInt(madjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(madjbed.toString().replace(/,/g , '')) + parseInt(madjpark.toString().replace(/,/g , '')) + parseInt(madjpool.toString().replace(/,/g , '')) + parseInt(madjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(madjgood.toString().replace(/,/g , '')) + parseInt(madjuti.toString().replace(/,/g , '')) + parseInt(madjbal.toString().replace(/,/g , '')) + parseInt(madjland.toString().replace(/,/g , '')) + 
	 				   parseInt(madjbua.toString().replace(/,/g , ''))+ parseInt(madjdev.toString().replace(/,/g , ''))  + parseInt(madjdate.toString().replace(/,/g , ''));
	 $('#mastermarketvalue').val(toComma(marketValue));
	 mfinalValue = parseInt(parseInt(($('#mastermarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#masterfinalvalue').val(toComma(mfinalValue));
});
$("#cmweibed").keyup(function(){
	if($("#cmweibed").val() != $("#mweibed").val()){
		$("#cmweibed").css("color","crimson");
	}
	else{
		$("#cmweibed").css("color","#6c757d");
	}
	madjbed =  parseFloat(($('#mdiffbed').val()).replace(/,/g , ''))  * parseFloat(($("#cmweibed").val()).replace(/%/g , '')) * parseInt(mpriceAvg) / 100;
	$('#madjbed').val(toComma(madjbed));
	 //Market Value//
	 var marketValue = parseInt(mpriceAvg) + parseInt(madjloc.toString().replace(/,/g , '')) + parseInt(madjage.toString().replace(/,/g , '')) + parseInt(madjten.toString().replace(/,/g , '')) + 
	 				   parseInt(madjview.toString().replace(/,/g , '')) + parseInt(madjsta.toString().replace(/,/g , '')) + parseInt(madjqua.toString().replace(/,/g , '')) + parseInt(madjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(madjfur.toString().replace(/,/g , '')) + parseInt(madjexp.toString().replace(/,/g , '')) + parseInt(madjpla.toString().replace(/,/g , '')) + parseInt(madjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(madjbed.toString().replace(/,/g , '')) + parseInt(madjpark.toString().replace(/,/g , '')) + parseInt(madjpool.toString().replace(/,/g , '')) + parseInt(madjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(madjgood.toString().replace(/,/g , '')) + parseInt(madjuti.toString().replace(/,/g , '')) + parseInt(madjbal.toString().replace(/,/g , '')) + parseInt(madjland.toString().replace(/,/g , '')) + 
	 				   parseInt(madjbua.toString().replace(/,/g , '')) + parseInt(madjdev.toString().replace(/,/g , '')) + parseInt(madjdate.toString().replace(/,/g , ''));
	 $('#mastermarketvalue').val(toComma(marketValue));
	 mfinalValue = parseInt(parseInt(($('#mastermarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#masterfinalvalue').val(toComma(mfinalValue));
});

$("#cmweipark").keyup(function(){
	if($("#cmweipark").val() != $("#mweipark").val()){
		$("#cmweipark").css("color","crimson");
	}
	else{
		$("#cmweipark").css("color","#6c757d");
	}
	madjpark = parseFloat(($('#mdiffpark').val()).replace(/,/g , '')) * parseFloat(($("#cmweipark").val()).replace(/%/g , '')) * parseInt($('#parkingPrice').val()) / 100;
    $('#madjpark').val(toComma(madjpark));
	 //Market Value//
	 var marketValue = parseInt(mpriceAvg) + parseInt(madjloc.toString().replace(/,/g , '')) + parseInt(madjage.toString().replace(/,/g , '')) + parseInt(madjten.toString().replace(/,/g , '')) + 
	 				   parseInt(madjview.toString().replace(/,/g , '')) + parseInt(madjsta.toString().replace(/,/g , '')) + parseInt(madjqua.toString().replace(/,/g , '')) + parseInt(madjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(madjfur.toString().replace(/,/g , '')) + parseInt(madjexp.toString().replace(/,/g , '')) + parseInt(madjpla.toString().replace(/,/g , '')) + parseInt(madjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(madjbed.toString().replace(/,/g , '')) + parseInt(madjpark.toString().replace(/,/g , '')) + parseInt(madjpool.toString().replace(/,/g , '')) + parseInt(madjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(madjgood.toString().replace(/,/g , '')) + parseInt(madjuti.toString().replace(/,/g , '')) + parseInt(madjbal.toString().replace(/,/g , '')) + parseInt(madjland.toString().replace(/,/g , '')) + 
	 				   parseInt(madjbua.toString().replace(/,/g , '')) + parseInt(madjdev.toString().replace(/,/g , '')) + parseInt(madjdate.toString().replace(/,/g , ''));
	 $('#mastermarketvalue').val(toComma(marketValue));
	 mfinalValue = parseInt(parseInt(($('#mastermarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#masterfinalvalue').val(toComma(mfinalValue));
});
$("#cmweipool").keyup(function(){
	if($("#cmweipool").val() != $("#mweipool").val()){
		$("#cmweipool").css("color","crimson");
	}
	else{
		$("#cmweipool").css("color","#6c757d");
	}
	madjpool = parseFloat(($('#mdiffpool').val()).replace(/,/g , '')) * parseFloat(($("#cmweipool").val()).replace(/%/g , '')) * parseInt($('#poolPrice').val()) / 100;
    $('#madjpool').val(toComma(madjpool));
	 //Market Value//
	 var marketValue = parseInt(mpriceAvg) + parseInt(madjloc.toString().replace(/,/g , '')) + parseInt(madjage.toString().replace(/,/g , '')) + parseInt(madjten.toString().replace(/,/g , '')) + 
	 				   parseInt(madjview.toString().replace(/,/g , '')) + parseInt(madjsta.toString().replace(/,/g , '')) + parseInt(madjqua.toString().replace(/,/g , '')) + parseInt(madjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(madjfur.toString().replace(/,/g , '')) + parseInt(madjexp.toString().replace(/,/g , '')) + parseInt(madjpla.toString().replace(/,/g , '')) + parseInt(madjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(madjbed.toString().replace(/,/g , '')) + parseInt(madjpark.toString().replace(/,/g , '')) + parseInt(madjpool.toString().replace(/,/g , '')) + parseInt(madjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(madjgood.toString().replace(/,/g , '')) + parseInt(madjuti.toString().replace(/,/g , '')) + parseInt(madjbal.toString().replace(/,/g , '')) + parseInt(madjland.toString().replace(/,/g , '')) + 
	 				   parseInt(madjbua.toString().replace(/,/g , '')) + parseInt(madjdev.toString().replace(/,/g , '')) + parseInt(madjdate.toString().replace(/,/g , ''));
	 $('#mastermarketvalue').val(toComma(marketValue));
	 mfinalValue = parseInt(parseInt(($('#mastermarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#masterfinalvalue').val(toComma(mfinalValue));
});
$("#cmweilandscape").keyup(function(){
	if($("#cmweilandscape").val() != $("#mweilandscape").val()){
		$("#cmweilandscape").css("color","crimson");
	}
	else{
		$("#cmweilandscape").css("color","#6c757d");
	}
	madjlandscape = parseFloat(($('#mdifflandscape').val()).replace(/,/g , '')) * parseFloat(($("#cmweilandscape").val()).replace(/%/g , '')) * parseInt($('#landscapePrice').val()) / 100;
    $('#madjlandscape').val(toComma(madjlandscape));
	 //Market Value//
	 var marketValue = parseInt(mpriceAvg) + parseInt(madjloc.toString().replace(/,/g , '')) + parseInt(madjage.toString().replace(/,/g , '')) + parseInt(madjten.toString().replace(/,/g , '')) + 
	 				   parseInt(madjview.toString().replace(/,/g , '')) + parseInt(madjsta.toString().replace(/,/g , '')) + parseInt(madjqua.toString().replace(/,/g , '')) + parseInt(madjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(madjfur.toString().replace(/,/g , '')) + parseInt(madjexp.toString().replace(/,/g , '')) + parseInt(madjpla.toString().replace(/,/g , '')) + parseInt(madjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(madjbed.toString().replace(/,/g , '')) + parseInt(madjpark.toString().replace(/,/g , '')) + parseInt(madjpool.toString().replace(/,/g , '')) + parseInt(madjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(madjgood.toString().replace(/,/g , '')) + parseInt(madjuti.toString().replace(/,/g , '')) + parseInt(madjbal.toString().replace(/,/g , '')) + parseInt(madjland.toString().replace(/,/g , '')) + 
	 				   parseInt(madjbua.toString().replace(/,/g , '')) + parseInt(madjdev.toString().replace(/,/g , '')) + parseInt(madjdate.toString().replace(/,/g , ''));
	 $('#mastermarketvalue').val(toComma(marketValue));
	 mfinalValue = parseInt(parseInt(($('#mastermarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#masterfinalvalue').val(toComma(mfinalValue));
});
$("#cmweigood").keyup(function(){
	if($("#cmweigood").val() != $("#mweigood").val()){
		$("#cmweigood").css("color","crimson");
	}
	else{
		$("#cmweigood").css("color","#6c757d");
	}
	madjgood = parseFloat(($('#mdiffgood').val()).replace(/,/g , '')) * parseFloat(($("#cmweigood").val()).replace(/%/g , '')) * parseInt($('#whitegoodsPrice').val()) / 100;
    $('#madjgood').val(toComma(madjgood));
	 //Market Value//
	 var marketValue = parseInt(mpriceAvg) + parseInt(madjloc.toString().replace(/,/g , '')) + parseInt(madjage.toString().replace(/,/g , '')) + parseInt(madjten.toString().replace(/,/g , '')) + 
	 				   parseInt(madjview.toString().replace(/,/g , '')) + parseInt(madjsta.toString().replace(/,/g , '')) + parseInt(madjqua.toString().replace(/,/g , '')) + parseInt(madjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(madjfur.toString().replace(/,/g , '')) + parseInt(madjexp.toString().replace(/,/g , '')) + parseInt(madjpla.toString().replace(/,/g , '')) + parseInt(madjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(madjbed.toString().replace(/,/g , '')) + parseInt(madjpark.toString().replace(/,/g , '')) + parseInt(madjpool.toString().replace(/,/g , '')) + parseInt(madjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(madjgood.toString().replace(/,/g , '')) + parseInt(madjuti.toString().replace(/,/g , '')) + parseInt(madjbal.toString().replace(/,/g , '')) + parseInt(madjland.toString().replace(/,/g , '')) + 
	 				   parseInt(madjbua.toString().replace(/,/g , '')) + parseInt(madjdev.toString().replace(/,/g , '')) + parseInt(madjdate.toString().replace(/,/g , ''));
	 $('#mastermarketvalue').val(toComma(marketValue));
	 mfinalValue = parseInt(parseInt(($('#mastermarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#masterfinalvalue').val(toComma(mfinalValue));
});
$("#cmweiuti").keyup(function(){
	if($("#cmweiuti").val() != $("#mweiuti").val()){
		$("#cmweiuti").css("color","crimson");
	}
	else{
		$("#cmweiuti").css("color","#6c757d");
	}
	madjuti = parseFloat(($('#mdiffuti').val()).replace(/,/g , '')) * parseFloat(($("#cmweiuti").val()).replace(/%/g , '')) * parseInt($('#utiliesPrice').val()) / 100;
    $('#madjuti').val(toComma(madjuti));
	 //Market Value//
	 var marketValue = parseInt(mpriceAvg) + parseInt(madjloc.toString().replace(/,/g , '')) + parseInt(madjage.toString().replace(/,/g , '')) + parseInt(madjten.toString().replace(/,/g , '')) + 
	 				   parseInt(madjview.toString().replace(/,/g , '')) + parseInt(madjsta.toString().replace(/,/g , '')) + parseInt(madjqua.toString().replace(/,/g , '')) + parseInt(madjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(madjfur.toString().replace(/,/g , '')) + parseInt(madjexp.toString().replace(/,/g , '')) + parseInt(madjpla.toString().replace(/,/g , '')) + parseInt(madjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(madjbed.toString().replace(/,/g , '')) + parseInt(madjpark.toString().replace(/,/g , '')) + parseInt(madjpool.toString().replace(/,/g , '')) + parseInt(madjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(madjgood.toString().replace(/,/g , '')) + parseInt(madjuti.toString().replace(/,/g , '')) + parseInt(madjbal.toString().replace(/,/g , '')) + parseInt(madjland.toString().replace(/,/g , '')) + 
	 				   parseInt(madjbua.toString().replace(/,/g , '')) + parseInt(madjdev.toString().replace(/,/g , '')) + parseInt(madjdate.toString().replace(/,/g , ''));
	 $('#mastermarketvalue').val(toComma(marketValue));
	 mfinalValue = parseInt(parseInt(($('#mastermarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#masterfinalvalue').val(toComma(mfinalValue));
});
$("#cmweibal").keyup(function(){
	if($("#cmweibal").val() != $("#mweibal").val()){
		$("#cmweibal").css("color","crimson");
	}
	else{
		$("#cmweibal").css("color","#6c757d");
	}
	madjbal = parseFloat(($('#mdiffbal').val()).replace(/,/g , '')) * parseFloat(($("#cmweibal").val()).replace(/%/g , '')) * parseInt(mpricePerAvg) / 100;
    $('#madjbal').val(toComma(madjbal));
	 //Market Value//
	 var marketValue = parseInt(mpriceAvg) + parseInt(madjloc.toString().replace(/,/g , '')) + parseInt(madjage.toString().replace(/,/g , '')) + parseInt(madjten.toString().replace(/,/g , '')) + 
	 				   parseInt(madjview.toString().replace(/,/g , '')) + parseInt(madjsta.toString().replace(/,/g , '')) + parseInt(madjqua.toString().replace(/,/g , '')) + parseInt(madjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(madjfur.toString().replace(/,/g , '')) + parseInt(madjexp.toString().replace(/,/g , '')) + parseInt(madjpla.toString().replace(/,/g , '')) + parseInt(madjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(madjbed.toString().replace(/,/g , '')) + parseInt(madjpark.toString().replace(/,/g , '')) + parseInt(madjpool.toString().replace(/,/g , '')) + parseInt(madjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(madjgood.toString().replace(/,/g , '')) + parseInt(madjuti.toString().replace(/,/g , '')) + parseInt(madjbal.toString().replace(/,/g , '')) + parseInt(madjland.toString().replace(/,/g , '')) + 
	 				   parseInt(madjbua.toString().replace(/,/g , '')) + parseInt(madjdev.toString().replace(/,/g , '')) + parseInt(madjdate.toString().replace(/,/g , ''));
	 $('#mastermarketvalue').val(toComma(marketValue));
	 mfinalValue = parseInt(parseInt(($('#mastermarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#masterfinalvalue').val(toComma(mfinalValue));
});
$("#cmweiland").keyup(function(){
	if($("#cmweiland").val() != $("#mweiland").val()){
		$("#cmweiland").css("color","crimson");
	}
	else{
		$("#cmweiland").css("color","#6c757d");
	}
	if($('#landPrice').val() != ""){
		 madjland = parseInt(($('#mdiffland').val()).replace(/,/g , ''))  *  parseFloat(($("#cmweiland").val()).replace(/%/g , ''))  * parseInt($('#landPrice').val()) / 100;
	 }
	 else{
		 madjland = 0;
	 }
    $('#madjland').val(toComma(madjland));
	 //Market Value//
	 var marketValue = parseInt(mpriceAvg) + parseInt(madjloc.toString().replace(/,/g , '')) + parseInt(madjage.toString().replace(/,/g , '')) + parseInt(madjten.toString().replace(/,/g , '')) + 
	 				   parseInt(madjview.toString().replace(/,/g , '')) + parseInt(madjsta.toString().replace(/,/g , '')) + parseInt(madjqua.toString().replace(/,/g , '')) + parseInt(madjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(madjfur.toString().replace(/,/g , '')) + parseInt(madjexp.toString().replace(/,/g , '')) + parseInt(madjpla.toString().replace(/,/g , '')) + parseInt(madjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(madjbed.toString().replace(/,/g , '')) + parseInt(madjpark.toString().replace(/,/g , '')) + parseInt(madjpool.toString().replace(/,/g , '')) + parseInt(madjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(madjgood.toString().replace(/,/g , '')) + parseInt(madjuti.toString().replace(/,/g , '')) + parseInt(madjbal.toString().replace(/,/g , '')) + parseInt(madjland.toString().replace(/,/g , '')) + 
	 				   parseInt(madjbua.toString().replace(/,/g , '')) + parseInt(madjdev.toString().replace(/,/g , '')) + parseInt(madjdate.toString().replace(/,/g , ''));
	 $('#mastermarketvalue').val(toComma(marketValue));
	 mfinalValue = parseInt(parseInt(($('#mastermarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#masterfinalvalue').val(toComma(mfinalValue));
});
$("#cmweibua").keyup(function(){
	if($("#cmweibua").val() != $("#mweibua").val()){
		$("#cmweibua").css("color","crimson");
	}
	else{
		$("#cmweibua").css("color","#6c757d");
	}
	madjbua = parseFloat(($('#mdiffbua').val()).replace(/,/g , '')) * parseFloat(($("#cmweibua").val()).replace(/%/g , '')) * parseInt(mpricePerAvg) / 100;
    $('#madjbua').val(toComma(madjbua));
	 //Market Value//
	 var marketValue = parseInt(mpriceAvg) + parseInt(madjloc.toString().replace(/,/g , '')) + parseInt(madjage.toString().replace(/,/g , '')) + parseInt(madjten.toString().replace(/,/g , '')) + 
	 				   parseInt(madjview.toString().replace(/,/g , '')) + parseInt(madjsta.toString().replace(/,/g , '')) + parseInt(madjqua.toString().replace(/,/g , '')) + parseInt(madjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(madjfur.toString().replace(/,/g , '')) + parseInt(madjexp.toString().replace(/,/g , '')) + parseInt(madjpla.toString().replace(/,/g , '')) + parseInt(madjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(madjbed.toString().replace(/,/g , '')) + parseInt(madjpark.toString().replace(/,/g , '')) + parseInt(madjpool.toString().replace(/,/g , '')) + parseInt(madjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(madjgood.toString().replace(/,/g , '')) + parseInt(madjuti.toString().replace(/,/g , '')) + parseInt(madjbal.toString().replace(/,/g , '')) + parseInt(madjland.toString().replace(/,/g , '')) + 
	 				   parseInt(madjbua.toString().replace(/,/g , ''))+ parseInt(madjdev.toString().replace(/,/g , ''))  + parseInt(madjdate.toString().replace(/,/g , ''));
	 $('#mastermarketvalue').val(toComma(marketValue));
	 mfinalValue = parseInt(parseInt(($('#mastermarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#masterfinalvalue').val(toComma(mfinalValue));
});
$("#cmweidate").keyup(function(){
	if($("#cmweidate").val() != $("#mweidate").val()){
		$("#cmweidate").css("color","crimson");
	}
	else{
		$("#cmweidate").css("color","#6c757d");
	}
	var value = $(this).val();
	madjdate = parseFloat(value.replace(/%/g , '')) * parseInt(mpriceAvg) * (16 / 30) / 100;
    $('#madjdate').val(toComma(madjdate));
	 //Market Value//
	 var marketValue = parseInt(mpriceAvg) + parseInt(madjloc.toString().replace(/,/g , '')) + parseInt(madjage.toString().replace(/,/g , '')) + parseInt(madjten.toString().replace(/,/g , '')) + 
	 				   parseInt(madjview.toString().replace(/,/g , '')) + parseInt(madjsta.toString().replace(/,/g , '')) + parseInt(madjqua.toString().replace(/,/g , '')) + parseInt(madjupg.toString().replace(/,/g , '')) + 
	 				   parseInt(madjfur.toString().replace(/,/g , '')) + parseInt(madjexp.toString().replace(/,/g , '')) + parseInt(madjpla.toString().replace(/,/g , '')) + parseInt(madjfloor.toString().replace(/,/g , '')) +
	 				   parseInt(madjbed.toString().replace(/,/g , '')) + parseInt(madjpark.toString().replace(/,/g , '')) + parseInt(madjpool.toString().replace(/,/g , '')) + parseInt(madjlandscape.toString().replace(/,/g , '')) + 
	 				   parseInt(madjgood.toString().replace(/,/g , '')) + parseInt(madjuti.toString().replace(/,/g , '')) + parseInt(madjbal.toString().replace(/,/g , '')) + parseInt(madjland.toString().replace(/,/g , '')) + 
	 				   parseInt(madjbua.toString().replace(/,/g , '')) + parseInt(madjdev.toString().replace(/,/g , '')) + parseInt(madjdate.toString().replace(/,/g , ''));
	 $('#mastermarketvalue').val(toComma(marketValue));
	 mfinalValue = parseInt(parseInt(($('#mastermarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
	 $('#masterfinalvalue').val(toComma(mfinalValue));
});

$("#maverage").click(function(){
	   var propertyType=$('#propertyvalued').val();
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
		 $('#mavgage').val($('#age').val());
		 $('#ecommunity').val(area);
		 $('#ebuidingName').val(buildingName);
		 $('#epropertyType').val(propertyType);
		 $('#vm-wr').text($('#reference').val());
		 $('#vm-vd').text($('#valDate').val());
		 $('#vm-property').text(propList);
		 $('#vm-datefrom').text(datefrom);
		 $('#vm-dateto').text(dateto);
		 $('#vm-buildingName').text(buildingName);
		 $('#vm-subCommunity').text(neighbourhood);
		 $('#vm-community').text(area);
		 $('#vm-city').text(city);
		 if($('#landPrice').val() != ''){
			 $('#mclandprice').text(toComma($('#landPrice').val()));
		 }
		 else{
			 $('#mclandprice').text(0);
		 }
		 $('#mcparkingPrice').text(toComma($('#parkingPrice').val()));
		 $('#mcpoolPrice').text(toComma($('#poolPrice').val()));
		 $('#mclandscapePrice').text(toComma($('#landscapePrice').val()));
		 $('#mcwhitegoodsPrice').text(toComma($('#whitegoodsPrice').val()));
		 $('#mcutiliesPrice').text(toComma($('#utiliesPrice').val()));
		 if(bedfrom != ""){
			 $('#vm-bedfrom').text(bedfrom);
		 }
		 else{
			 $('#vm-bedfrom').text("-");
		 }
		 if(bedto !=""){
			 $('#vm-bedto').text(bedto);
		 }
		 else{
			 $('#vm-bedto').text("-");
		 }
		 if(landfrom !=""){
			 $('#vm-landfrom').text(landfrom);
		 }
		 else{
			 $('#vm-landfrom').text("-");
		 }
		 if(landto !=""){
			 $('#vm-landto').text(landto);
		 }
		 else{
			 $('#vm-landto').text("-");
		 }
		 if(buafrom !=""){
			 $('#vm-buafrom').text(buafrom);
		 }
		 else{
			 $('#vm-buafrom').text("-");
		 }
		 if(buato !=""){
			 $('#vm-buato').text(buato);
		 }
		 else{
			 $('#vm-buato').text("-");
		 }
		 if(pricefrom !=""){
			 $('#vm-pricefrom').text(pricefrom);
		 }
		 else{
			 $('#vm-pricefrom').text("-");
		 }
		 if(priceto !=""){
			 $('#vm-priceto').text(priceto);
		 }
		 else{
			 $('#vm-priceto').text("-");
		 }
		 if(pricesqtfrom !=""){
			 $('#vm-pricesqtfrom').text(pricesqtfrom);
		 }
		 else{
			 $('#vm-pricesqtfrom').text("-");
		 }
		 if(pricesqtto !=""){
			 $('#vm-pricesqtto').text(pricesqtto);
		 }
		 else{
			 $('#vm-pricesqtto').text("-");
		 }
	   $.ajax({	
			url : 'master-filter-transac',
			dataType: "text",
			asyn: true,
			data : {city : city,area:area,neighbourhood:neighbourhood,buildingName:buildingName,bedfrom:bedfrom,bedto:bedto,
				landfrom:landfrom,landto:landto,buafrom:buafrom,buato:buato,pricefrom:pricefrom,priceto:priceto,
				pricesqtfrom:pricesqtfrom,pricesqtto:pricesqtto,datefrom:datefrom,dateto:dateto,propList:propList},
			method : 'POST',
			success : function(response) {	
				var obj = $.parseJSON(response);
			    mpriceAvg = obj.mpriceAvg;
			    mpricePerAvg = obj.mpricePerAvg;
				var msizeAvg = obj.msizeAvg;
				var mdateAvg = obj.mdateAvg;
				var mbedAvg = obj.mbedAvg;
				mlocAvg = obj.mlocAvg;
				mageAvg = obj.mageAvg;
				mtenAvg = obj.mtenAvg;
				mviewAvg = obj.mviewAvg;
				mstaAvg = obj.mstaAvg;
				mquaAvg = obj.mquaAvg;
				mupgAvg = obj.mupgAvg;
				mfurAvg = obj.mfurAvg;
				mparkAvg = obj.mparkAvg;
				mpoolAvg = obj.mpoolAvg;
				mlandscapeAvg = obj.mlandscapeAvg;
				mgoodAvg = obj.mgoodAvg;
				mutiAvg = obj.mutiAvg;
				mbalAvg = obj.mbalAvg;
				mdevAvg = obj.mdevAvg;
				mexpAvg = obj.mexpAvg;
				mplaAvg = obj.mplaAvg;
				mfloorAvg = obj.mfloorAvg;
				mlandAvg = obj.mlandAvg;
				if(mlandAvg == "-"){
					mlandAvg = 0;
				}
				var mlessThan1Month = obj.mlessThan1Month;
				var mlessThan2Month = obj.mlessThan2Month;
				var mlessThan3Month = obj.mlessThan3Month;
				var mlessThan4Month = obj.mlessThan4Month;
				var mlessThan5Month = obj.mlessThan5Month;
				var mlessThan6Month = obj.mlessThan6Month;
				var mlessThan7Month = obj.mlessThan7Month;
				var mlessThan8Month = obj.mlessThan8Month;
				var mlessThan9Month = obj.mlessThan9Month;
				var mlessThan10Month = obj.mlessThan10Month;
				var mlessThan11Month = obj.mlessThan11Month;
				var mlessThan12Month = obj.mlessThan12Month;
				mexpWeight = obj.mexpWeight;
				mplaWeight = obj.mplaWeight;
				mstaWeight = obj.mstaWeight;
				mbedWeight = obj.mbedWeight;
				mfurWeight = obj.mfurWeight;
				mupgradeWeight = obj.mupgradeWeight;
				mbalWeight = obj.mbalWeight;
				mlocWeight = obj.mlocWeight;
				mviewWeight = obj.mviewWeight;
				mquaWeight = obj.mquaWeight;
				mfloorWeight = obj.mfloorWeight;
				mlandWeight = obj.mlandWeight;
				mbuaWeight = obj.mbuaWeight;
				mupgradeWeight = obj.mupgradeWeight;
				mparkWeight = obj.mparkWeight;
				mpoolWeight = obj.mpoolWeight;
				mtenureWeight = obj.mtenWeight;
				mdevmargin = obj.mdevmargin;
				mageWeight = obj.mageWeight;
				mlandScapeWeight = obj.mlandScapeWeight;
				mwhiteGoodsWeight = obj.mwhiteGoodsWeight;
				mutilitiesWeight = obj.mutilitiesWeight;
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
				var vnooffloor =  $('#vnooffloor').val();
				var fullBulFloors =  $('#fullBulFloors').val();
				var maxAge = $('#maxAge').val();
				var finalAge = (parseFloat(mageWeight.replace(/%/g , '') / maxAge * 100)) + "" +"%";
				$('#mavgdate').val(mdateAvg);
				$('#ebed').val(mbedAvg);
				$('#mavgbua').val(toComma(msizeAvg));
				$('#mpriceAvg').val(toComma(mpriceAvg));
				$('#mpriceAvgper').val(toComma(mpricePerAvg));
				//Standard Weightage//
				$('#mweiloc').val(mlocWeight);
				$('#mweiview').val(mviewWeight);
				$('#mweiqua').val(mquaWeight);
				$('#mweifloor').val(mfloorWeight);
				$('#mweiland').val(mlandWeight);
				$('#mweibua').val(mbuaWeight);
				$('#mweibed').val(mbedWeight);
				$('#mweiexp').val(mexpWeight);
				$('#mweipla').val(mplaWeight);
				$('#mweista').val(mstaWeight);
				$('#mweifur').val(mfurWeight);
				$('#mweibal').val(mbalWeight);
				$('#mweiupg').val(mupgradeWeight);
				$('#mweipark').val(mparkWeight);
				$('#mweipool').val(mpoolWeight);
				$('#mweilandscape').val(mlandScapeWeight);
				$('#mweigood').val(mwhiteGoodsWeight);
				$('#mweiuti').val(mutilitiesWeight);
				$('#mweiten').val(mtenureWeight);
				$('#mweiage').val(finalAge);
				$('#mweidev').val(mdevmargin);
				//changed weightage//
				$('#cmweiloc').val(mlocWeight);
				$('#cmweiview').val(mviewWeight);
				$('#cmweiqua').val(mquaWeight);
				$('#cmweifloor').val(mfloorWeight);
				$('#cmweiland').val(mlandWeight);
				$('#cmweibua').val(mbuaWeight);
				$('#cmweibed').val(mbedWeight);
				$('#cmweiexp').val(mexpWeight);
				$('#cmweipla').val(mplaWeight);
				$('#cmweista').val(mstaWeight);
				$('#cmweifur').val(mfurWeight);
				$('#cmweibal').val(mbalWeight);
				$('#cmweiupg').val(mupgradeWeight);
				$('#cmweipark').val(mparkWeight);
				$('#cmweipool').val(mpoolWeight);
				$('#cmweilandscape').val(mlandScapeWeight);
				$('#cmweigood').val(mwhiteGoodsWeight);
				$('#cmweiuti').val(mutilitiesWeight);
				$('#cmweiten').val(mtenureWeight);
				$('#cmweiage').val(finalAge);
				$('#cmweidev').val(mdevmargin);
				
				
				// location//
				$('#mavgloc').val(mlocAvg);
				var msubloc = calAvg(location);
				$('#msubloc').val(msubloc);
			    var mdiffloc = parseFloat($('#msubloc').val()) - parseFloat($('#mavgloc').val());
			    $('#mdiffloc').val(mdiffloc.toFixed(2));
			     madjloc = parseFloat(($('#mdiffloc').val()).replace(/,/g , '')) * parseFloat(mlocWeight.replace(/%/g , '')) * parseInt(mpriceAvg) / 100;
			    $('#madjloc').val(toComma(madjloc));
			    
			    // age//
			    $('#mavgage').val(mageAvg);
				$('#msubage').val($('#age').val());
			    var mdiffage = parseFloat($('#msubage').val()) - parseFloat($('#mavgage').val());
			    $('#mdiffage').val(mdiffage.toFixed(2));
			    madjage = parseFloat(($('#mdiffage').val()).replace(/,/g , '')) * parseFloat($('#cmweiage').val().replace(/%/g , '')) * parseInt(mpriceAvg) / 100;
			    $('#madjage').val(toComma(madjage));
			    
			    // tenure//
			    $('#mavgten').val(mtenAvg);
				var msubten = calTenure(tenure);
				$('#msubten').val(msubten);
			    var mdifften = parseFloat($('#msubten').val()) - parseFloat($('#mavgten').val());
			    $('#mdifften').val(mdifften.toFixed(2));
			     madjten= parseFloat(($('#mdifften').val()).replace(/,/g , '')) * parseFloat(mtenureWeight.replace(/%/g , '')) * parseInt(mpriceAvg) / 100;
			    $('#madjten').val(toComma(madjten));
			    
			    // view//
			    $('#mavgview').val(mviewAvg);
			    var msubview = calView(view);
			    $('#msubview').val(msubview);
			    var mdiffview = parseFloat($('#msubview').val()) - parseFloat($('#mavgview').val());
			    $('#mdiffview').val(mdiffview.toFixed(2));
			     madjview = parseFloat(($('#mdiffview').val()).replace(/,/g , ''))  * parseFloat(mviewWeight.replace(/%/g , '')) * parseInt(mpriceAvg) / 100;
			    $('#madjview').val(toComma(madjview));
			    
			    //Finishing Status//
			    $('#mavgsta').val(mstaAvg);
				 $('#msubsta').val(calSta($('#status').val()));
				 var mdiffsta = parseFloat($('#msubsta').val())- parseFloat($('#mavgsta').val());
				 $('#mdiffsta').val(mdiffsta.toFixed(2));
				  madjsta =  parseFloat(($('#mdiffsta').val()).replace(/,/g , ''))  * parseFloat(mstaWeight.replace(/%/g , '')) * parseInt(mpriceAvg) / 100;
				 $('#madjsta').val(toComma(madjsta));
				 
				 // quality//
			    $('#mavgqua').val(mquaAvg);
			    var msubqua = calAvg(quality);
			    $('#msubqua').val(msubqua);
			    var mdiffqua = parseFloat($('#msubqua').val()) - parseFloat($('#mavgqua').val());
			    $('#mdiffqua').val(mdiffqua.toFixed(2));
			     madjqua = parseFloat(($('#mdiffqua').val()).replace(/,/g , ''))  * parseFloat(mquaWeight.replace(/%/g , ''))  * parseInt(mpriceAvg) / 100;
			    $('#madjqua').val(toComma(madjqua));
			   
			    // upgrades//
			    $('#msubupg').val($('#overupg').val());
			    var mdiffupg = parseFloat($('#msubupg').val()) - parseFloat($('#mavgupg').val());
			    $('#mdiffupg').val(mdiffupg.toFixed(2));
			    madjupg = parseFloat(($('#mdiffupg').val()).replace(/,/g , ''))  * parseFloat(mupgradeWeight.replace(/%/g , '')) * parseInt(mpriceAvg) / 100;
			    $('#madjupg').val(toComma(madjupg));
			    
			    //Furnished//
				 $('#msubfur').val(calFur($('#furnished').val()));
				 var mdifffur = parseFloat($('#msubfur').val() - $('#mavgfur').val());
				 $('#mdifffur').val(mdifffur.toFixed(2));
				  madjfur =  parseFloat(($('#mdifffur').val()).replace(/,/g , ''))  * parseFloat(mfurWeight.replace(/%/g , '')) * parseInt(mpriceAvg) / 100;
				 $('#madjfur').val(toComma(madjfur));
				 
				 //Property Exposure//
				 $('#mavgexp').val(mexpAvg);
				 $('#msubexp').val(calExp($('#exposure').val()));
				 var mdiffexp = parseFloat($('#msubexp').val() - $('#mavgexp').val());
				 $('#mdiffexp').val(mdiffexp.toFixed(2));
				  madjexp =  parseFloat(($('#mdiffexp').val()).replace(/,/g , ''))  * parseFloat(mexpWeight.replace(/%/g , '')) * parseInt(mpriceAvg) / 100;
				 $('#madjexp').val(toComma(madjexp));
				 
				 //Property Placement//
				 $('#mavgpla').val(mplaAvg);
				 $('#msubpla').val(calPla($('#placement').val()));
				 var mdiffpla = parseFloat($('#msubpla').val() - $('#mavgpla').val());
				 $('#mdiffpla').val(mdiffpla.toFixed(2));
				  madjpla =  parseFloat(($('#mdiffpla').val()).replace(/,/g , ''))  * parseFloat(mplaWeight.replace(/%/g , '')) * parseInt(mpriceAvg) / 100;
				 $('#madjpla').val(toComma(madjpla));
				
				//floor//
				 var propertyvalued = $('#propertyvalued').val();
				 $('#mavgfloor').val(mfloorAvg);
				 if(propertyvalued === "Residential Villa"){
						var suffix = vnooffloor.match(/\d+/);
						if(suffix){
							suffix = parseFloat(parseFloat(suffix[0]));
							suffix = suffix + 1;
							suffix = suffix.toString();
							$('#msubfloor').val(suffix);
						}
						else{
							$('#msubfloor').val(0);
						}
					}
				else{
					$('#msubfloor').val(floorNo);
				}
				var mdifffloor = parseFloat($('#msubfloor').val() - $('#mavgfloor').val());
				$('#mdifffloor').val(mdifffloor.toFixed(2));
				 madjfloor = parseFloat(($('#mdifffloor').val()).replace(/,/g , ''))  * parseFloat(mfloorWeight.replace(/%/g , '')) * parseInt(mpriceAvg) / 100;
				$('#madjfloor').val(toComma(madjfloor));
				
				//beds//
				 $('#mavgbed').val(mbedAvg);
				 $('#msubbed').val($('#bedroom').val());
				 var mdiffbed =  parseFloat($('#msubbed').val()) - parseFloat(mbedAvg);
				 $('#mdiffbed').val(mdiffbed.toFixed(2));
				  madjbed =  parseFloat(($('#mdiffbed').val()).replace(/,/g , ''))  * parseFloat(mbedWeight.replace(/%/g , '')) * parseInt(mpriceAvg) / 100;
				 $('#madjbed').val(toComma(madjbed));
				 
				 // parking//
			    $('#msubpark').val($('#parking').val());
			    var mdiffpark = parseFloat($('#msubpark').val()) - parseFloat($('#mavgpark').val());
			    $('#mdiffpark').val(mdiffpark.toFixed(2));
			     madjpark = parseFloat(($('#mdiffpark').val()).replace(/,/g , '')) * parseFloat(mparkWeight.replace(/%/g , '')) * parseInt($('#parkingPrice').val()) / 100;
			    $('#madjpark').val(toComma(madjpark));
				    
			    // pool//
				var msubpool = calPool(pool);
				$('#msubpool').val(msubpool);
			    var mdiffpool = parseFloat($('#msubpool').val()) - parseFloat($('#mavgpool').val());
			    $('#mdiffpool').val(mdiffpool.toFixed(2));
			     madjpool = parseFloat(($('#mdiffpool').val()).replace(/,/g , '')) * parseFloat(mpoolWeight.replace(/%/g , '')) * parseInt($('#poolPrice').val()) / 100;
			    $('#madjpool').val(toComma(madjpool));
			    	
			    // landscape//
				var msublandscape = calLandScape(landscape);
				$('#msublandscape').val(msublandscape);
			    var mdifflandscape = parseFloat($('#msublandscape').val()) - parseFloat($('#mavglandscape').val());
			    $('#mdifflandscape').val(mdifflandscape.toFixed(2));
			     madjlandscape= parseFloat(($('#mdifflandscape').val()).replace(/,/g , '')) * parseFloat(mlandScapeWeight.replace(/%/g , '')) * parseInt($('#landscapePrice').val()) / 100;
			    $('#madjlandscape').val(toComma(madjlandscape));
			   
			    // whitegoods//
				var msubgood= calPool(whitegoods);
				$('#msubgood').val(msubgood);
			    var mdiffgood = parseFloat($('#msubgood').val()) - parseFloat($('#mavggood').val());
			    $('#mdiffgood').val(mdiffgood.toFixed(2));
			    madjgood= parseFloat(($('#mdiffgood').val()).replace(/,/g , '')) * parseFloat(mwhiteGoodsWeight.replace(/%/g , '')) * parseInt($('#whitegoodsPrice').val()) / 100;
			    $('#madjgood').val(toComma(madjgood));
			    
			    // utilities//
				var msubuti= calPool(utilities);
				$('#msubuti').val(msubuti);
			    var mdiffuti = parseFloat($('#msubuti').val()) - parseFloat($('#mavguti').val());
			    $('#mdiffuti').val(mdiffuti.toFixed(2));
			    madjuti= parseFloat(($('#mdiffuti').val()).replace(/,/g , '')) * parseFloat(mutilitiesWeight.replace(/%/g , '')) * parseInt($('#utiliesPrice').val()) / 100;
			    $('#madjuti').val(toComma(madjuti));
			    

			    // developer margin//
			    var msubdev = calMargin($('#devmargin').val());
			    $('#msubdev').val(msubdev);
			    var mdiffdev = parseFloat($('#msubdev').val()) - parseFloat($('#mavgdev').val());
			    $('#mdiffdev').val(mdiffdev.toFixed(2));
			    madjdev= parseFloat(($('#mdiffdev').val()).replace(/,/g , '')) * parseFloat(mdevmargin.replace(/%/g , '')) *  parseInt(mpriceAvg) / 100;
			    $('#madjdev').val(toComma(madjdev));
			   
			    // balsize//
			    $('#mavgbal').val($('#balsize').val());
			    $('#msubbal').val($('#balsize').val());
			    var mdiffbal = parseInt($('#msubbal').val()) - parseInt($('#mavgbal').val());
			    $('#mdiffbal').val(mdiffbal);
			    madjbal = parseInt(($('#mdiffbal').val()).replace(/,/g , ''))  * parseFloat(mbalWeight.replace(/%/g , '')) * parseInt(mpricePerAvg) / 100;
			    $('#madjbal').val(toComma(madjbal));
			    
				//LandSize//
				 $('#mavgland').val(toComma(mlandAvg));
				 var msubland = null;
				 if($('#landSize').val() !=""){
					 msubland = $('#landSize').val();
				 }
				 else{
					 msubland = 0;
				 }
				 $('#msubland').val(toComma(msubland));
				 var mdiffland = parseInt(msubland) - parseInt(mlandAvg);
				 $('#mdiffland').val(toComma(mdiffland));
				 if($('#landPrice').val() != ""){
					 madjland = parseInt(($('#mdiffland').val()).replace(/,/g , ''))  * parseFloat(mlandWeight.replace(/%/g , '')) * parseInt($('#landPrice').val()) / 100;
				 }
				 else{
					 madjland = 0;
				 }
				 $('#madjland').val(toComma(madjland));
				 
				//bua//
				 $('#mavgbua').val(toComma(msizeAvg));
				 $('#msubbua').val(toComma($('#netbuitUpAreaSize').val()));
				 var mdiffbua =  parseInt($('#netbuitUpAreaSize').val()) - parseInt(msizeAvg);
				 $('#mdiffbua').val(toComma(mdiffbua));
				 madjbua =  parseInt(($('#mdiffbua').val()).replace(/,/g , ''))  * parseFloat(mbuaWeight.replace(/%/g , '')) * parseInt(mpricePerAvg) / 100;
				 $('#madjbua').val(toComma(madjbua));
				 
				 //date//
				 $('#mavgdate').val(mdateAvg);
				 $('#msubdate').val($('#insdate').val());
				 var mdiffdate = calDate($('#mavgdate').val(),$('#msubdate').val());
				 $('#mdiffdate').val(toComma(mdiffdate));
				 if( mdiffdate <= 30 ){
					 mdateWeight = mlessThan1Month;
					 $('#mweidate').val(mlessThan1Month);
					 $('#cmweidate').val(mlessThan1Month);
					  madjdate = parseFloat(mlessThan1Month.replace(/%/g , '')) * parseInt(mpriceAvg) * (16 / 30) / 100;
					 $('#madjdate').val(toComma(madjdate));
				 }
				 if( mdiffdate <= 60 && mdiffdate > 30){
					 mdateWeight = mlessThan2Month;
					 $('#mweidate').val(mlessThan2Month);
					 $('#cmweidate').val(mlessThan2Month);
					  madjdate = parseFloat(mlessThan2Month.replace(/%/g , '')) * parseInt(mpriceAvg) * (16 / 30) / 100;
					 $('#madjdate').val(toComma(madjdate));
				 }
				 if( mdiffdate <= 90 && mdiffdate > 60){
					 mdateWeight = mlessThan3Month;
					 $('#mweidate').val(mlessThan3Month);
					 $('#cmweidate').val(mlessThan3Month);
					  madjdate = parseFloat(mlessThan3Month.replace(/%/g , '')) * parseInt(mpriceAvg) * (16 / 30) / 100;
					 $('#madjdate').val(toComma(madjdate));
				 }
				 if( mdiffdate <= 120 && mdiffdate > 90){
					 mdateWeight = mlessThan4Month;
					 $('#mweidate').val(mlessThan4Month);
					 $('#cmweidate').val(mlessThan4Month);
					  madjdate = parseFloat(mlessThan4Month.replace(/%/g , '')) * parseInt(mpriceAvg) * (16 / 30) / 100;
					 $('#madjdate').val(toComma(madjdate));
				 }
				 if( mdiffdate <= 150 && mdiffdate > 120){
					 mdateWeight = mlessThan5Month;
					 $('#mweidate').val(mlessThan5Month);
					 $('#cmweidate').val(mlessThan5Month);
					  madjdate = parseFloat(mlessThan5Month.replace(/%/g , '')) * parseInt(mpriceAvg) * (16 / 30) / 100;
					 $('#madjdate').val(toComma(madjdate));
				 }
				 if( mdiffdate <= 180 && mdiffdate > 150){
					 mdateWeight = mlessThan6Month;
					 $('#mweidate').val(mlessThan6Month);
					 $('#cmweidate').val(mlessThan6Month);
					  madjdate = parseFloat(mlessThan6Month.replace(/%/g , '')) * parseInt(mpriceAvg) * (16 / 30) / 100;
					 $('#madjdate').val(toComma(madjdate));
				 }
				 if( mdiffdate <= 210 && mdiffdate > 180){
					 mdateWeight = mlessThan7Month;
					 $('#mweidate').val(mlessThan7Month);
					 $('#cmweidate').val(mlessThan7Month);
					  madjdate = parseFloat(mlessThan7Month.replace(/%/g , '')) * parseInt(mpriceAvg) * (16 / 30) / 100;
					 $('#madjdate').val(toComma(madjdate));
				 }
				 if( mdiffdate <= 240 && mdiffdate > 210){
					 mdateWeight = mlessThan8Month;
					 $('#mweidate').val(mlessThan8Month);
					 $('#cmweidate').val(mlessThan8Month);
					  madjdate = parseFloat(mlessThan8Month.replace(/%/g , '')) * parseInt(mpriceAvg) * (16 / 30) / 100;
					 $('#madjdate').val(toComma(madjdate));
				 }
				 if( mdiffdate <= 270 && mdiffdate > 240){
					 mdateWeight = mlessThan9Month;
					 $('#mweidate').val(mlessThan9Month);
					 $('#cmweidate').val(mlessThan9Month);
					  madjdate = parseFloat(mlessThan9Month.replace(/%/g , '')) * parseInt(mpriceAvg) * (16 / 30) / 100;
					 $('#madjdate').val(toComma(madjdate));
				 }
				 if( mdiffdate <= 300 && mdiffdate > 270){
					 mdateWeight = mlessThan10Month;
					 $('#mweidate').val(mlessThan10Month);
					 $('#cmweidate').val(mlessThan10Month);
					  madjdate = parseFloat(mlessThan10Month.replace(/%/g , '')) * parseInt(mpriceAvg) * (16 / 30) / 100;
					 $('#madjdate').val(toComma(madjdate));
				 }
				 if( mdiffdate <= 330 && mdiffdate > 300){
					 mdateWeight = mlessThan11Month;
					 $('#mweidate').val(mlessThan11Month);
					 $('#cmweidate').val(mlessThan11Month);
					  madjdate = parseFloat(mlessThan11Month.replace(/%/g , '')) * parseInt(mpriceAvg) * (16 / 30) / 100;
					 $('#madjdate').val(toComma(madjdate));
				 }
				 if( mdiffdate <= 360 && mdiffdate > 330){
					 mdateWeight = mlessThan12Month;
					 $('#mweidate').val(mlessThan12Month);
					 $('#cmweidate').val(mlessThan12Month);
					  madjdate = parseFloat(mlessThan12Month.replace(/%/g , '')) * parseInt(mpriceAvg) * (16 / 30) / 100;
					 $('#madjdate').val(toComma(madjdate));
				 }
				 
			     //Market Value//
				 var marketValue = parseInt(mpriceAvg) + parseInt(madjloc.toString().replace(/,/g , '')) + parseInt(madjage.toString().replace(/,/g , '')) + parseInt(madjten.toString().replace(/,/g , '')) + 
				 				   parseInt(madjview.toString().replace(/,/g , '')) + parseInt(madjsta.toString().replace(/,/g , '')) + parseInt(madjqua.toString().replace(/,/g , '')) + parseInt(madjupg.toString().replace(/,/g , '')) + 
				 				   parseInt(madjfur.toString().replace(/,/g , '')) + parseInt(madjexp.toString().replace(/,/g , '')) + parseInt(madjpla.toString().replace(/,/g , '')) + parseInt(madjfloor.toString().replace(/,/g , '')) +
				 				   parseInt(madjbed.toString().replace(/,/g , '')) + parseInt(madjpark.toString().replace(/,/g , '')) + parseInt(madjpool.toString().replace(/,/g , '')) + parseInt(madjlandscape.toString().replace(/,/g , '')) + 
				 				   parseInt(madjgood.toString().replace(/,/g , '')) + parseInt(madjuti.toString().replace(/,/g , '')) + parseInt(madjbal.toString().replace(/,/g , '')) + parseInt(madjland.toString().replace(/,/g , '')) + 
				 				   parseInt(madjbua.toString().replace(/,/g , '')) + parseInt(madjdev.toString().replace(/,/g , '')) + parseInt(madjdate.toString().replace(/,/g , ''));
				 $('#mastermarketvalue').val(toComma(marketValue));
				 mfinalValue = parseInt(parseInt(($('#mastermarketvalue').val()).replace(/,/g , '')) / parseInt(($('#buitUpAreaSize').val()).replace(/,/g , '')));
				 $('#masterfinalvalue').val(toComma(mfinalValue));
				 
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
		final = "1.5";
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
		final = "1.5";
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
	return final;
}