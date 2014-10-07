var $win = $(window);
var $sun = $('.sun')
var $sunsection = $('.sun-section');

$win.on('scroll', function(){
	var scrollpos = $win.scrollTop();
	
	$sun.css('transform', 'rotate('+ scrollpos / 5 + 'deg)');	
	$sunsection.css('background-position', 'center ' + scrollpos/3 + 'px')
})