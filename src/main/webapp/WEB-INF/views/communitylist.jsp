<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isELIgnored="false"%>
<link rel='shortcut icon' type='image/x-icon'
	href='resources/assets/img/favicon.ico' />
<link rel="stylesheet" href="resources/assets/css/communitylist.css">
<div class="communitylist">
	<%@include file="header.jsp"%>
	<%@include file="sidebar.jsp"%>
	<div class="main-content"
		style="background: rgb(229, 231, 233) !important; margin-top: 70px; width: 100%; min-height: 530px !important">
		<div class="row">
		<div class="secholder" style="margin-bottom:30px;width:100%">
			<c:forEach items="${communitylist}" var="community">
				<form:form action="getCommunity" id="${community.communityId}"
					class="column" style="border: 0.02px solid;width: 43%;display: flex;float: left;height: 30px;">
					<div id="${community.communityId}" style="width:100%">
						<div class="contentPart">
							<div class="sec">
								<b style="color: #000080">${community.community}</b>
							</div>
							<div class="sec">
								<b style="color: #DF0101">${community.city}</b>
							</div>
							<input type="hidden" id="communityId" name="communityId"
								value="${community.communityId}" />
						</div>
					</div>
				</form:form>
			</c:forEach>
			</div>
		</div>
		<!--                     		</div> -->
		<!--                   		</div> -->
		<!--                		 </div> -->
		<!--               	</div>             -->
		<!--       			</section>        -->
	</div>
</div>
<%@include file="footer.jsp"%>
<script src="resources/assets/js/communitylist.js"></script>
