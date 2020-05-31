var profCharges;
var star3;
var star4;
var star5;
var conMargin;
var obsolence;
var noOfYears;
var interestRate;
var landcost;
var concost;
var fconcost;
var effcostfinal;
var finaldec;
$('#costApp').click(function(){
	$('#costland').val($('#landSize').val());
	$('#costbua').val($('#buitUpAreaSize').val());
	var age = $('#age').val();
	var city = $('#city').val();
	var propertyValued = $('#propertyvalued').val();
	var maxage = $('#maxAge').val();
	var result = parseInt(age) / parseInt(maxage) * 100;
	$('#depage').val(result.toFixed(2) +"%");
	 $.ajax({
			url : 'development-data',
			dataType: "text",
			data : {city : city,propertyValued:propertyValued},
			method : 'POST',
			success : function(response) {
				var obj = $.parseJSON(response);
				profCharges = obj.list[0].profCharges;
				star3 = obj.list[0].star3;
				star4 = obj.list[0].star4;
				star5 = obj.list[0].star5;
				conMargin = obj.list[0].conMargin;
				obsolence = obj.list[0].obsolence;
				noOfYears = obj.proplist[0].noOfYears;
				interestRate = obj.proplist[0].interestRate;
				$("#costprof").val(profCharges);
				$("#costcon").val(conMargin);
				$("#costnoofyrs").val(noOfYears);
				$("#costinterestrate").val(obsolence);
				$("#obs").val(interestRate);
				var quality = $('#quality').val();
				if(quality === "Very Good"){
					$('#costbuaprice').val(star5);
				}
				if(quality === "Good"){
					$('#costbuaprice').val(star4);
				}
				if(quality === "Average"){
					$('#costbuaprice').val(star3);
				}
				var a = $('#costbuaprice').val();
				var b = $('#costbua').val();
				var c = ($("#coststatus").val()).replace(/%/g , '');
				var d = parseInt(a) * parseInt(b) * parseInt(c) / 100;
				concost = d ;
				$('#costfinalbua').val(toComma(d)); 
				var e = ($("#costprof").val()).replace(/%/g , '');
				var f = parseFloat(d) * parseInt(e) / 100;
				$('#costfinalprof').val(toComma(f));
				var g = ($("#costcon").val()).replace(/%/g , '');
				var h = parseFloat(d) * parseInt(g) / 100;
				$('#costfinalcon').val(toComma(h));
				var result = parseInt( d + f + h);
				fconcost = result;
				$('#costfinal').val(toComma(result));
				var depage = ($("#depage").val()).replace(/%/g , '');
				var dd = depage * result / 100;
				$('#costdepage').val(toComma(dd));
				var obs = ($("#obs").val()).replace(/%/g , '');
				var ee = obs * result / 100;
				$('#costobs').val(toComma(ee));
				var intrate = interestRate.replace(/%/g , '');
				var eff = parseFloat(intrate) * parseFloat(noOfYears) * 75 / 100;
				$('#costeffectiverate').val(eff.toFixed(2) +"%");
				var efffinal = landcost + d;
				var resfinal = ($("#costeffectiverate").val()).replace(/%/g , '') * efffinal / 100;
				effcostfinal = resfinal;
	 			$('#costeffectivefinal').val(toComma(resfinal));
				var costdec = dd + ee;
				finaldec = costdec;
				$('#costdec').val(toComma(costdec));
				var netdevcost = concost +  effcostfinal - finaldec;
				$('#netdevcost').val(toComma(netdevcost));
				
			}
	});
	 
});

$('#costlandprice').keyup(function(){
	var a = $(this).val();
	var b = $('#costland').val();
	landcost = parseInt(a) * parseInt(b)
	$('#costfinalland').val(toComma(landcost)); 
	var efffinal = landcost + concost;
	var resfinal = ($("#costeffectiverate").val()).replace(/%/g , '') * efffinal / 100;
	$('#costeffectivefinal').val(toComma(resfinal));
	var netdevcost = concost +  effcostfinal - finaldec;
	$('#netdevcost').val(toComma(netdevcost));
});


function toComma(value){
	var result = parseInt(value);
	result = result.toLocaleString();
	return result;
}