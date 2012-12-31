$('button').on('click', function () {
	var amount = $(this).attr('id');
	$('#logo').wobble(amount);
});