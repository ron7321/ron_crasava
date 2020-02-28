var topp = false;
var bottom = false;
var left = false;
var right = false;


$(document).keydown(function () {
	if (event.which == 38) {
		topp = true;
	} else if (event.which == 40) {
		bottom = true;
	} else if (event.which == 37) {
		left = true;
	} else if (event.which == 39) {
		right = true;
	}

});
$(document).keyup(function () {
	if (event.which == 38) {
		topp = false;
	} else if (event.which == 40) {
		bottom = false;
	} else if (event.which == 37) {
		left = false;
	} else if (event.which == 39) {
		right = false;
	}

});

setInterval(function() {
	if (topp) {
		$('#img').css('top', '-=5px');
	} else if (bottom) {
		$('#img').css('top', '+=5px');
	} else if (left) {
		$('#img').css('left', '-=5px');
	} else if (right) {
		$('#img').css('left', '+=5px');
	}
}, 20);