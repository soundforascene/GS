
	this.centerCanvas = function() {
		var x = (windowWidth - width) / 2;
		var y = (windowHeight - height) /2;
		cnv.position(x , y);
	}
	this.windowResized = function() {
		centerCanvas();
	}