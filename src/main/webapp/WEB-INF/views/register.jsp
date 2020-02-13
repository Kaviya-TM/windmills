<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<!DOCTYPE html>

<html lang="en">

<head>
<meta charset="UTF-8">
<meta
	content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no"
	name="viewport">
<title>Windmills | SignUp</title>
<%@ page isELIgnored="false"%>

<!-- General CSS Files -->
<link rel="stylesheet" href="resources/assets/css/app.min.css">
<link rel="stylesheet"
	href="resources/assets/bundles/jquery-selectric/selectric.css">
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- Template CSS -->
<link rel="stylesheet" href="resources/assets/css/style.css">
<link rel="stylesheet" href="resources/assets/css/login.css">
<link rel="stylesheet" href="resources/assets/css/components.css">

<!-- Custom style CSS -->
<link rel="stylesheet" href="resources/assets/css/custom.css">
<link rel='shortcut icon' type='image/x-icon'
	href='resources/assets/img/favicon.ico' />

<!-- General JS Scripts -->
<script src="resources/assets/js/app.min.js"></script>
<!-- JS Libraies -->
<script
	src="resources/assets/bundles/jquery-pwstrength/jquery.pwstrength.min.js"></script>
<script
	src="resources/assets/bundles/jquery-selectric/jquery.selectric.min.js"></script>
<!-- Page Specific JS File -->
<script src="resources/assets/js/page/auth-register.js"></script>
<!-- Template JS File -->
<script src="resources/assets/js/scripts.js"></script>
<!-- Custom JS File -->
<script src="resources/assets/js/custom.js"></script>
<script src="resources/assets/js/register.js"></script>
</head>

<body class=""
	style="background-image: url(resources/assets/img/Windmills-Group-Logo-Small.png) !important; background-color: white; width: 100%; height: 100%; position: absolute; background-size: cover; background-attachment: fixed; background-origin: initial; background-clip: initial; background-color: initial; -ms-background-size: cover; background-size: cover; background-position: 50%; line-height: 30px;">
	<div class="pageImage">
		<img src="""="">
		<div class="loader"></div>
		<div id="app">
			<section class="section">
				<div class="container mt-5">
					<div class="row">
						<div
							class="slideRegisterPortionLeft col-12 col-sm-10 offset-sm-1 col-md-6 offset-md-2 col-lg-6 offset-lg-2 col-xl-8 offset-xl-2">
							<div class="card card-wind">
								<div class="card-header">
									<h4>Register</h4>
								</div>
								<div class="card-body">
									<form id="register" action="register" method="POST">
										<div class="input-container emailfield">
											<i class="fa fa-envelope icon"></i> <input id="email"
												maxlength="100" class="input-field" type="email"
												placeholder="Email" name="email" required>
										</div>
										<span class="sprErrMsg ajaxErrMsg">Email already exists</span>
										<div class="input-container pswdfield">
											<i class="fa pswdIcon icon"></i> <input id="password"
												maxlength="60" class="password input-field" type="password"
												placeholder="Password" name="password"
												data-indicator="pwindicator" required>
										</div>
										<div class="input-container conpswdfield">
											<i class="fa conpswdIcon icon "></i> <input
												id="confirm-password" maxlength="60"
												class="confirm-password input-field" type="password"
												placeholder="Re-Enter Password" name="password-confirm"
												required>
										</div>
										<button type="submit"
											class="js-button btn btn-wind btn-lg btn-block">Register
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
</body>
</html>