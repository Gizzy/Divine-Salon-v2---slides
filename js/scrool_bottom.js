
$(document).ready(function(e) {
	if($(window).scrollTop() + $(window).height() == $(document).height()) {
		$("footer").css("opacity","1");
	}else {
		$("footer").css("opacity","0");
	}
	$(window).scroll(function() {
   		if($(window).scrollTop() + $(window).height() == $(document).height()) {
       		$("footer").css("opacity","1");
   		}
		else {
       		$("footer").css("opacity","0");
		}
	});
});