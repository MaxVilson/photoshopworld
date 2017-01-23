$(document).ready(function() {
  
	$('.menu-trigger').click(function() { 
	 $('nav ul').slideToggle(500);
	 $('.menu-trigger').toggleClass('menu-trigger-transform');
	});
	$(window).resize(function() {
		if ($(window).width() >500) {
			$('nav ul').removeAttr('style');
		}
	});
});