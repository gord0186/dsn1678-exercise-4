var $win = $(window);
var $sun = $('.sun')
var $sunsection = $('.sun-section');
var $dippersection = $('.dipper-section');
var $dipper = $('.dipper');
var $shuttlesection = $('.shuttle-section');
var $shuttle = $('.shuttle');
var $shuttlesectionmove = $('.shuttle-section');
var $shuttlemove = $('.shuttle');

$win.on('scroll', function(){
	var scrollpos = $win.scrollTop();
	
	$sun.css('transform', 'rotate('+ scrollpos / 5 + 'deg)');	
	$sunsection.css('background-position', 'center ' + scrollpos/3 + 'px')
})

$dippersection.waypoint(function (){
	$dipper.addClass('js-dipper-fade')
},{ offset: '50%' });

$shuttlesection.waypoint(function (){
	$shuttle.addClass('js-shuttle-fade')
},{ offset: '50%' });

