$(document).ready(function() {
  
	$('.menu-trigger').click(function() { 
	 $('.menu').slideToggle(500);
	 $('.menu-trigger').toggleClass('menu-trigger-transform');
	});
	$(window).resize(function() {
		if ($(window).width() >500) {
			$('.menu').removeAttr('style');
		}
	});
});