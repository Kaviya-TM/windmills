var amv;
var asqf;
var ansqf;
$("#vsummary").click(function(){
	var pv = $('#propertyvalued').val();
	var omv = $('#purchasePrice').val();
	$('#omv').val(toComma(omv));
	var osqf = parseInt($('#purchasePrice').val().replace(/,/g , '')) / parseInt($('#buitUpAreaSize').val().replace(/,/g , ''));
	$('#osqf').val(toComma(osqf));
	var onsqf = parseInt($('#purchasePrice').val().replace(/,/g , '')) / parseInt($('#netbuitUpAreaSize').val().replace(/,/g , ''));
	$('#onsqf').val(toComma(onsqf));
	var tmv = $('#transactionPrice').val();
	$('#tmv').val(toComma(tmv));
	var tsqf = parseInt($('#transactionPrice').val().replace(/,/g , '')) / parseInt($('#buitUpAreaSize').val().replace(/,/g , ''));
	$('#tsqf').val(toComma(tsqf));
	var tnsqf = parseInt($('#transactionPrice').val().replace(/,/g , '')) / parseInt($('#netbuitUpAreaSize').val().replace(/,/g , ''));
	$('#tnsqf').val(toComma(tnsqf));
	var smv = $('#soldmarketvalue').val();
	$('#smv').val(smv);
	var ssqf = parseInt($('#soldmarketvalue').val().replace(/,/g , '')) / parseInt($('#buitUpAreaSize').val().replace(/,/g , ''));
	$('#ssqf').val(toComma(ssqf));
	var snsqf = parseInt($('#soldmarketvalue').val().replace(/,/g , '')) / parseInt($('#netbuitUpAreaSize').val().replace(/,/g , ''));
	$('#snsqf').val(toComma(snsqf));
	var lmv = $('#listingmarketvalue').val();
	$('#lmv').val(lmv);
	var lsqf = $('#listingfinalvalue').val();
	$('#lsqf').val(toComma(lsqf));
	var lnsqf = parseInt($('#listingmarketvalue').val().replace(/,/g , '')) / parseInt($('#netbuitUpAreaSize').val().replace(/,/g , ''));
	$('#lnsqf').val(toComma(lnsqf));
	var pmv = $('#mastermarketvalue').val();
	$('#pmv').val(pmv);
	var psqf = $('#masterfinalvalue').val();
	$('#psqf').val(toComma(psqf));
	var pnsqf = parseInt($('#mastermarketvalue').val().replace(/,/g , '')) / parseInt($('#netbuitUpAreaSize').val().replace(/,/g , ''));
	$('#pnsqf').val(toComma(pnsqf));
	if(pv === 'Residential Villa'){
		$('#mvOfLand').val($('#costfinalland').val());
		var x = parseInt($('#costfinalland').val().replace(/,/g , '')) / parseInt($('#landSize').val().replace(/,/g , ''));
		$('#mvOfLandPerSq').val(toComma(x));
		$('#costmv').val($('#estmv').val());
		$('#costsqf').val($('#estbua').val());
		$('#costnsqf').val($('#estnbua').val());
		$('#incomemv').val($('#emv').val());
		$('#incomesqf').val($('#ebua').val());
		var b = parseInt($('#emv').val().replace(/,/g , '')) / parseInt($('#netbuitUpAreaSize').val().replace(/,/g , ''));
		$('#incomensqf').val(toComma(b));
		amv = (parseInt($('#costmv').val().replace(/,/g , '')) + parseInt($('#incomemv').val().replace(/,/g , '')) +  parseInt($('#tmv').val().replace(/,/g , ''))  + parseInt($('#smv').val().replace(/,/g , '')) + parseInt($('#lmv').val().replace(/,/g , '')) + parseInt($('#pmv').val().replace(/,/g , ''))) / 6;
		$('#amv').val(toComma(amv));
		asqf= (parseInt($('#costsqf').val().replace(/,/g , '')) + parseInt($('#incomesqf').val().replace(/,/g , ''))  + parseInt($('#tsqf').val().replace(/,/g , '')) + parseInt($('#ssqf').val().replace(/,/g , '')) + parseInt($('#lsqf').val().replace(/,/g , '')) + parseInt($('#psqf').val().replace(/,/g , ''))) / 6;
		$('#asqf').val(toComma(asqf));
		ansqf= (parseInt($('#costnsqf').val().replace(/,/g , '')) + parseInt($('#incomensqf').val().replace(/,/g , ''))  + parseInt($('#tnsqf').val().replace(/,/g , '')) + parseInt($('#snsqf').val().replace(/,/g , '')) + parseInt($('#lnsqf').val().replace(/,/g , '')) + parseInt($('#pnsqf').val().replace(/,/g , ''))) / 6;
		$('#ansqf').val(toComma(ansqf));
	}
	else{
		$('#costmv').val("");
		$('#costsqf').val("");
		$('#costnsqf').val("");
		$('#incomemv').val("");
		$('#incomesqf').val("");
		amv = (parseInt($('#tmv').val().replace(/,/g , ''))  + parseInt($('#smv').val().replace(/,/g , '')) + parseInt($('#lmv').val().replace(/,/g , '')) + parseInt($('#pmv').val().replace(/,/g , ''))) / 4;
		$('#amv').val(toComma(amv));
		asqf= (parseInt($('#tsqf').val().replace(/,/g , '')) + parseInt($('#ssqf').val().replace(/,/g , '')) + parseInt($('#lsqf').val().replace(/,/g , '')) + parseInt($('#psqf').val().replace(/,/g , ''))) / 4;
		$('#asqf').val(toComma(asqf));
		ansqf= (parseInt($('#tnsqf').val().replace(/,/g , '')) + parseInt($('#snsqf').val().replace(/,/g , '')) + parseInt($('#lnsqf').val().replace(/,/g , '')) + parseInt($('#pnsqf').val().replace(/,/g , ''))) / 4;
		$('#ansqf').val(toComma(ansqf));
	}
	$('#marketValue').val(toComma(amv));
	$('#marketValueRate').val(toComma(asqf));
	var get_num = $('#marketValue').val();
	get_num =get_num.replace(/,/g , '');
	if(get_num != '' && get_num != 'NaN')
	{
		var num_to_words = toWords(get_num);
		var numword =num_to_words.replace(/,/g , '')
		$('.word').text("("+numword+" Dirhams Only)");
		$('.wordsec').show();
	}
	else{
		$('.word').text("");
		$('.wordsec').hide();
	}
});

function toComma(value){
	var result = parseInt(value);
	result = result.toLocaleString();
	return result;
}