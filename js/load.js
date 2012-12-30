$('#logo').wobble();

$('html').css({'height': $(window).innerHeight() + 'px'});

$(window).resize(function () {
	$('html').css({'height': $(window).innerHeight() + 'px'});
});