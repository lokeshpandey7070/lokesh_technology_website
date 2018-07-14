$(document).ready(function(){
	$("#about").click(function(){
		$(".col-md-9").css({"visibility":"visible"});
		$(".ourservices").css({"visibility":"hidden"});
		$(".ourskill").css({"visibility":"hidden"});
		$(".partners").css({"visibility":"hidden"});
		$("#about").html("<b><i class='fa fa-angle-right'></i>&nbsp;&nbsp;About Company</b>");
		$("#serv").html("<i class='fa fa-angle-right'></i>&nbsp;&nbsp;Our Services");
		$("#skill").html("<i class='fa fa-angle-right'></i>&nbsp;&nbsp;Our Skills");
		$("#part").html("<i class='fa fa-angle-right'></i>&nbsp;&nbsp;Our Partners");
});
$("#serv").click(function(){
		$(".col-md-9").css({"visibility":"hidden"});
		$(".ourservices").css({"visibility":"visible"});
		$(".ourskill").css({"visibility":"hidden"});
		$(".partners").css({"visibility":"hidden"});
		$("#about").html("<i class='fa fa-angle-right'></i>&nbsp;&nbsp;About Company");
		$("#serv").html("<b><i class='fa fa-angle-right'></i>&nbsp;&nbsp;Our Services</b>");
		$("#skill").html("<i class='fa fa-angle-right'></i>&nbsp;&nbsp;Our Skills");
		$("#part").html("<i class='fa fa-angle-right'></i>&nbsp;&nbsp;Our Partners");
});
$("#skill").click(function(){
		$(".col-md-9").css({"visibility":"hidden"});
		$(".ourservices").css({"visibility":"hidden"});
		$(".ourskill").css({"visibility":"visible"});
		$(".partners").css({"visibility":"hidden"});
		$("#about").html("<i class='fa fa-angle-right'></i>&nbsp;&nbsp;About Company");
		$("#serv").html("<i class='fa fa-angle-right'></i>&nbsp;&nbsp;Our Services");
		$("#skill").html("<b><i class='fa fa-angle-right'></i>&nbsp;&nbsp;Our Skills</b>");
		$("#part").html("<i class='fa fa-angle-right'></i>&nbsp;&nbsp;Our Partners");
});
$("#part").click(function(){
		$(".col-md-9").css({"visibility":"hidden"});
		$(".ourservices").css({"visibility":"hidden"});
		$(".ourskill").css({"visibility":"hidden"});
		$(".partners").css({"visibility":"visible"});
		$("#about").html("<i class='fa fa-angle-right'></i>&nbsp;&nbsp;About Company");
		$("#serv").html("<i class='fa fa-angle-right'></i>&nbsp;&nbsp;Our Services");
		$("#skill").html("<i class='fa fa-angle-right'></i>&nbsp;&nbsp;Our Skills");
		$("#part").html("<b><i class='fa fa-angle-right'></i>&nbsp;&nbsp;Our Partners</b>");
		
});
});
