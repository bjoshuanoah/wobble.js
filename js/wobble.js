jQuery.fn.wobble = function(factor) {
	return this.each(function() {
		var elem = $(this);
		elem.on('hover', function () {
			var elem_width = elem.innerWidth();
			var elem_height = elem.innerHeight();
			var y_split = elem_width/2;
			var x_split = elem_height/2;
			if (factor == undefined){
				factor = 15;
			}
			elem.on('mousemove', function (h) {
				var x = h.offsetX - y_split;
				var y = h.offsetY - x_split;
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
				var y_rotate = Math.floor(x_pct * factor * -1);
				var x_rotate = Math.floor(y_pct * factor);
				elem.css({
					'-webkit-transform' : 'rotateX(' + x_rotate + 'deg)rotateY(' + y_rotate + 'deg)',
					'-moz-transform' : 'rotateX(' + x_rotate + 'deg)rotateY(' + y_rotate + 'deg)',
					'-ms-transform' : 'rotateX(' + x_rotate + 'deg)rotateY(' + y_rotate + 'deg)',
					'-o-transform' : 'rotateX(' + x_rotate + 'deg)rotateY(' + y_rotate + 'deg)',
					'transform' : 'rotateX(' + x_rotate + 'deg)rotateY(' + y_rotate + 'deg)'
				});
			});
		});
	});
};