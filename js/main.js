var $win = $(window);
var $sun = $('.sun')
var $sunsection = $('.sun-section');
var $dippersection = $('.dipper-section');
var $dipper = $('.dipper');
var $shuttlesection = $('.shuttle-section');
var $shuttle = $('.shuttle');
var $shuttlesectionmove = $('.shuttle-section');
var $shuttlemove = $('.shuttle');
var $shipsection = $('.ship-section');
var $ship1 = $ ('.ship1');
var $shipsection2 = $('.ship-section');
var $ship2 = $ ('.ship2');

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

$shipsection.waypoint(function (){
	$ship1.addClass('js-ship1')
},{ offset: '50%' });

$shipsection2.waypoint(function (){
	$ship2.addClass('js-ship2')
},{ offset: '50%' });
