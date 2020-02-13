
$(document).ready(function(){
	$('.pswdIcon').addClass('fa-unlock ');
	$('.conpswdIcon').addClass('fa-unlock ');
	$('.ajaxErrMsg').hide();
	$('.pswdErr').hide();
	$('.conPswdErr').hide();
	$('.emailfield').keydown(function(e) {
		var email = $('#email').val();
		if(email == ''){	
			$(this).addClass('errIndicator');
			if (e.which == 9) { 
				  e.preventDefault();
		  } 
		}
		else if(email && !email.includes("@")|| !email.includes(".") || (email.slice(-1) ==".")) {
			$(this).addClass('errIndicator');
			if (e.which == 9) { 
				  e.preventDefault();
			} 
		}
		else {
		   $.ajax({
				url : 'registerValidation',
				data : {email : email},
				method : 'POST',
				success : function(response) {	
					if(response === "success"){
						$('.ajaxErrMsg').show();
						$('.emailfield').addClass('errIndicator');
						e.preventDefault();
					}
					else{
						$('.ajaxErrMsg').hide();
						$('.emailfield').removeClass('errIndicator');
					}
					
				}
			});
		}
	});
	$('.emailfield').keyup(function(e) {
		var email = $('#email').val();
		if(email == ''){	
			$(this).addClass('errIndicator');
			if (e.which == 9) { 
				  e.preventDefault();
		  } 
		}
		else if(email && !email.includes("@")|| !email.includes(".") || (email.slice(-1) ==".")) {
			$(this).addClass('errIndicator');
			if (e.which == 9) { 
				  e.preventDefault();
		  } 
		}
		
		else {
			   $.ajax({
					url : 'registerValidation',
					data : {email : email},
					method : 'POST',
					success : function(response) {	
						if(response === "success"){
							$('.ajaxErrMsg').show();
							$('.emailfield').addClass('errIndicator');
							e.preventDefault();
						}
						else{
							$('.ajaxErrMsg').hide();
							$('.emailfield').removeClass('errIndicator');
						}						
					}
				});
			}
	});
	$('.pswdfield').keyup(function(e) {
		var email = $('#password').val();
		if(email == ''){	
			$('.pswdIcon').removeClass('fa-lock ').addClass('fa-unlock ');
			$(this).addClass('errIndicator');			
			if (e.which == 9) { 
				  e.preventDefault();
		  } 
		}
		else {
			$('.pswdIcon').addClass('fa-lock ').removeClass('fa-unlock ');
			$(this).removeClass('errIndicator');
		}
	});
	$('.pswdfield').keydown(function(e) {
		var email = $('#password').val();
		if(email == ''){	
			$('.pswdIcon').removeClass('fa-lock ').addClass('fa-unlock ');
			$(this).addClass('errIndicator');			
			if (e.which == 9) { 
				  e.preventDefault();
		  } 
		}
		else {
			$('.pswdIcon').addClass('fa-lock ').removeClass('fa-unlock ');
			$(this).removeClass('errIndicator');
		}
	});
	$('.conpswdfield').keyup(function(e) {
		var confrm = $('#confirm-password').val();
		var pswd = $('#password').val();
		if(confrm == ''){	
			$('.conpswdIcon').removeClass('fa-lock ').addClass('fa-unlock ');
			$(this).addClass('errIndicator');			
			if (e.which == 9) { 
				  e.preventDefault();
		  } 
		}
		else if(confrm && confrm != pswd){
			$(this).addClass('errIndicator');
			$('.conpswdIcon').removeClass('fa-lock ').addClass('fa-unlock ');
			if (e.which == 9) { 
				  e.preventDefault();
		  } 
		}
		else {
			$('.conpswdIcon').addClass('fa-lock ').removeClass('fa-unlock ');
			$(this).removeClass('errIndicator');
		}
	});
	$('.conpswdfield').keydown(function(e) {
		var confrm = $('#confirm-password').val();
		var pswd = $('#password').val();
		if(confrm == ''){	
			$('.conpswdIcon').removeClass('fa-lock ').addClass('fa-unlock ');
			$(this).addClass('errIndicator');			
			if (e.which == 9) { 
				  e.preventDefault();
		  } 
		}
		else if(confrm && confrm != pswd){
			$(this).addClass('errIndicator');
			$('.conpswdIcon').removeClass('fa-lock ').addClass('fa-unlock ');
			if (e.which == 9) { 
				  e.preventDefault();
		  } 
		}
		else {
			$('.conpswdIcon').addClass('fa-lock ').removeClass('fa-unlock ');
			$(this).removeClass('errIndicator');
		}
	});
	$("form").on('submit', function (e) {

	    if($('.errIndicator').is(':visible')){
			  e.preventDefault();
		}
	    else if($('.ajaxErrMsg').is(':visible')){
	    	 e.preventDefault();
	    }

	   
	});
});
