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
<title>Windmills</title>

<!-- General CSS Files -->
<link rel="stylesheet" href="resources/assets/css/app.min.css">

<link rel='shortcut icon' type='image/x-icon'
	href='resources/assets/img/favicon.ico' />
<!--  -->
<link rel="stylesheet"
	href="resources/assets/bundles/bootstrap-daterangepicker/daterangepicker.css">
<link rel="stylesheet"
	href="resources/assets/bundles/bootstrap-colorpicker/dist/css/bootstrap-colorpicker.min.css">
<link rel="stylesheet"
	href="resources/assets/bundles/select2/dist/css/select2.min.css">
<link rel="stylesheet"
	href="resources/assets/bundles/jquery-selectric/selectric.css">
<link rel="stylesheet"
	href="resources/assets/bundles/bootstrap-timepicker/css/bootstrap-timepicker.min.css">
<link rel="stylesheet"
	href="resources/assets/bundles/bootstrap-tagsinput/dist/bootstrap-tagsinput.css">
<link rel="stylesheet" href="resources/assets/css/chocolat.css">

<!-- Template CSS -->
<link rel="stylesheet" href="resources/assets/css/style.css">
<link rel="stylesheet" href="resources/assets/css/components.css">
<link rel="stylesheet" href="resources/assets/css/main.css">

<!-- Custom style CSS -->
<link rel="stylesheet" href="resources/assets/css/custom.css">
</head>
<body class="light theme-white dark-sidebar">
	<div class="loader"></div>
	<div id="app">
		<div class="logoImage" style="position: fixed;">
			<img alt="image"
				src="resources/assets/img/Windmills-Group-Logo-Small.png"
				style="width: 11%;">
		</div>
		<div class="main-wrapper main-wrapper-1">

			<div class="navbar  navbar-bg"
				style="background: #fff !important; position: fixed;">
				<img alt="image" src="resources/assets/img/windmilld-logo.png"
					style="width: 11%;">
			</div>
			<nav class="navbar navbar-expand-lg main-navbar sticky">
				<div class="form-inline mr-auto">
					<ul class="navbar-nav mr-3">
						<li><a href="#" data-toggle="sidebar"
							class="nav-link nav-link-lg
 									collapse-btn"> <i
								data-feather="align-justify"></i></a></li>
						<li class="sub-header"><b></b></li>
					</ul>
				</div>
				<ul class="navbar-nav navbar-right">
					<div class="name" style="margin-top: 15px !important">
						Hello <b><c:out value="${sessionScope.name}" /></b>
					</div>
					<li class="dropdown"><a href="#" data-toggle="dropdown"
						class="nav-link dropdown-toggle nav-link-lg nav-link-user"> <img
							alt="image" src="resources\assets\img\user-icon.png"
							class="user-img-radious-style"> <span
							class="d-sm-none d-lg-inline-block"></span></a>
						<div class="dropdown-menu dropdown-menu-right pullDown">
							<div class="dropdown-title">
								<span class="loginemail"><c:out
										value="${sessionScope.email}" /> <c:out
										value="${sessionScope.userres.lastName}" /></span>
							</div>
							<%--               <a href="profile.html" class="dropdown-item has-icon"> <i class="far --%>
							<%-- <!-- 										fa-user"></i> Profile --> --%>
							<!--               </a> <a href="timeline.html" class="dropdown-item has-icon"> <i class="fas fa-bolt"></i> -->
							<!--                 Activities -->
							<!--               </a> <a href="" class="dropdown-item has-icon"> <i class="fas fa-cog"></i> -->
							<!--                 Settings -->
							<!--               </a> -->
							<div class="dropdown-divider"></div>
							<a href="<c:url value="logout"/>"
								class="dropdown-item has-icon text-danger"> <i
								class="fas fa-sign-out-alt"></i> Logout
							</a>
						</div></li>
				</ul>
			</nav>