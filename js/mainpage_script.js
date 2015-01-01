/*
 *
 * Nastavení pozadí elementu body (elipsa)
 *
 */
$(document).ready(function(e) {
	var posunX = ($(window).width()-1577)/2;
	var posunY = ($(window).height()-596)/2;

	$("body").css("background", "white url('./images/background.png') no-repeat");
	$("body").css("background-position", posunX + "px "+ (posunY+50) + "px");

});

/*
 *
 * Script pro funkčnosti kruhů
 *
 */
$(document).ready(function(e) {
	$(".circle").css("margin-top", $(window).height()/2 - $(".circle").height()/2 + 50);

	$(".circle[id=hairs]").animate({
						 opacity: 1,
						 left: ($("#body").width()/2-$(".circle[id=hairs]").width()/2 - 450)
						 }, 2000, function() {
						 // Animation complete.
	});
	$(".circle[id=nails]").animate({
						 opacity: 1,
						 left: ($("#body").width()/2-$(".circle[id=nails]").width()/2 - 150)
						 }, 2000, function() {
						 // Animation complete.
	});
	$(".circle[id=cosmetics]").animate({
						 opacity: 1,
						 left: ($("#body").width()/2-$(".circle[id=cosmetics]").width()/2 + 150)
						 }, 2000, function() {
						 // Animation complete.
	});
	$(".circle[id=massages]").animate({
						 opacity: 1,
						 left: ($("#body").width()/2-$(".circle[id=massages]").width()/2 + 450)
						 }, 2000, function() {
						 // Animation complete.
	});
});