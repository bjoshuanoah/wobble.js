jQuery.fn.wobble = function(factor) {
	return this.each(function() {
		var elem = $(this);
		
		elem.on('hover touchstart', function () {
			var elem_width = elem.innerWidth();
			var elem_height = elem.innerHeight();
			var y_split = elem_width/2;
			var x_split = elem_height/2;
			if (factor == undefined){
				factor = 15;
			}
			var pos = elem.offset();
			var wobbleThis = function (x, y) {
				var offsetX = x - pos.left;
				var offsetY = y - pos.top;
				var x = offsetX - y_split;
				var y = offsetY - x_split;
				var x_pct = x/y_split ;
				var y_pct = y/x_split;
				if (x_pct > 1){
					x_pct = 1;
				} else if (x_pct < -1){
					x_pct = -1;
				}
				if (y_pct > 1){
					y_pct = 1;
				} else if (y_pct < -1){
					y_pct = -1;
				}
				var y_rotate = Math.floor(x_pct * factor);
				var x_rotate = Math.floor(y_pct * factor * -1);
				elem.css({
					'-webkit-transform' : 'rotateX(' + x_rotate + 'deg)rotateY(' + y_rotate + 'deg)',
					'-moz-transform' : 'rotateX(' + x_rotate + 'deg)rotateY(' + y_rotate + 'deg)',
					'-ms-transform' : 'rotateX(' + x_rotate + 'deg)rotateY(' + y_rotate + 'deg)',
					'-o-transform' : 'rotateX(' + x_rotate + 'deg)rotateY(' + y_rotate + 'deg)',
					'transform' : 'rotateX(' + x_rotate + 'deg)rotateY(' + y_rotate + 'deg)'
				});
				$('.reflection', elem).css({
					'width': y_rotate + 80 + '%',
					'height': x_rotate + 80 + '%'
				});
			}
			elem.on('touchmove', function (h) {
				wobbleThis(h.originalEvent.pageX, h.originalEvent.pageY);
			});
			elem.on('mousemove', function (h) {
				wobbleThis(h.clientX, h.clientY);
			});
		});
	});
};