$('#logo').wobble();

$('body').css({'height': $(window).innerHeight() + 'px'});

$(window).resize(function () {
	$('body').css({'height': $(window).innerHeight() + 'px'});
});

function allowScrolling(touchEvent) { 
	touchEvent.preventDefault(); 
};
$('html').bind('touchmove', allowScrolling, false);