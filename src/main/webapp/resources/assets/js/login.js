$(document).ready(function(){
	if ($("#password").is(":-webkit-autofill")) 
	{    
	   $('.loginPswd').addClass('fa-lock ').removeClass('fa-unlock ');	
	}
	else{
		var pswd = $('#password').val();
		if(pswd == '' ){
			$('.loginPswd').addClass('fa-unlock ').removeClass('fa-lock');
		}
		else{
			$('.loginPswd').addClass('fa-lock ').removeClass('fa-unlock');
		}
	}
    $("#password").on('change',function(){
		var pswd = $('#password').val();
		if(pswd == '' ){
			$('.loginPswd').addClass('fa-unlock ').removeClass('fa-lock');
		}
		else{
			$('.loginPswd').addClass('fa-lock ').removeClass('fa-unlock');
		}
	});	
	$("form").on('submit', function (	e) {
		var pswd = $('#password').val();
		var email = $('#username').val();
//		$.ajax({
//			url : 'login',
//			method : 'POST',
//			data: 
//			success : function(response) {	
//				
//			}
//		});
		if(pswd){
			sessionStorage.setItem("email", email);
		}
		if(email && !email.includes("@")|| !email.includes(".") || (email.slice(-1) ==".")){
			  $('.emailErr2').show();
			  e.preventDefault();
		}
	    if(pswd !=''){	    	
	    	return true;
	    }
	    else{
	    	e.preventDefault();
	    }
	});
	$(".resend").click(function(){
		$('.loginErr').hide();
		 var email=sessionStorage.getItem("email");     
	        var getUrl = window.location;
	        var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];    
	        var finalurl=baseUrl+"/resendEmail?email="+email;   
	       $("#resend").attr("href",finalurl);
	});
	$('body').click(function() {
		var password = $('#password').val();
		if(password !=''){
			$('.loginPswd').addClass('fa-lock ').removeClass('fa-unlock ');
		}
		else{
			$('.loginPswd').removeClass('fa-lock ').addClass('fa-unlock ');
		}
		
	});
	$('.emailfield').keydown(function(e) {
		var a = $('#username').val();
		if(a == ''){	
			$(this).addClass('errIndicator');
			if (e.which == 9) { 
				  e.preventDefault();
		  } 
		}
		else if(a && !a.includes("@")|| !a.includes(".") || (a.slice(-1) ==".")){
			$(this).addClass('errIndicator');
			if (e.which == 9) { 
				  e.preventDefault();
			} 
		}
		else{
			$(this).removeClass('errIndicator');
		}
	});
	$('.emailfield').keyup(function(e) {
		var a = $('#username').val();
		if(a == ''){	
			$(this).addClass('errIndicator');
			if (e.which == 9) { 
				  e.preventDefault();
		  } 
		}
		else if(a && !a.includes("@")|| !a.includes(".") || (a.slice(-1) ==".")){
			$(this).addClass('errIndicator');
			if (e.which == 9) { 
				  e.preventDefault();
		  } 
		}
		else{
			$(this).removeClass('errIndicator');
		}
	});
	$('.pswdfield').keyup(function(e) {
		var a = $('#password').val();
		if(a == ''){	
			$('.loginPswd').removeClass('fa-lock ').addClass('fa-unlock ');
			$(this).addClass('errIndicator');			
			if (e.which == 9) { 
				  e.preventDefault();
		  } 
		}
		else {
			$('.loginPswd').addClass('fa-lock ').removeClass('fa-unlock ');
			$(this).removeClass('errIndicator');
		}
	});
	$('.pswdfield').keydown(function(e) {
		var a = $('#password').val();
		if(a == ''){	
			$('.loginPswd').removeClass('fa-lock ').addClass('fa-unlock ');
			$(this).addClass('errIndicator');			
			if (e.which == 9) { 
				  e.preventDefault();
		  } 
		}
		else {
			$('.loginPswd').addClass('fa-lock ').removeClass('fa-unlock ');
			$(this).removeClass('errIndicator');
		}
	});
	
});

