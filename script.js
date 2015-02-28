$("#contentTable").height($(window).height());
$("#placeholder").height($(window).height()/4);
$(window).resize(function(){
	$("#contentTable").height($(window).height());
	$("#placeholder").height($(window).height()/4);
});