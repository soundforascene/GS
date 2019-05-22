function jupiterLevel() {

	// Declerations
	let n = 5;
	var mgr;
	var wordOnOff = 'Off';
	var onOff;

	this.setup = function() {

		// === Canvas ====
		createCanvas(windowWidth, windowHeight, WEBGL);

		// ===== Stars =====
		for (let i = 0; i < 1000; i++) {
			let p = new Particle();
			particles.push(p);
		}
	  	// ==== DOM ====
	  	slider[n] = createSlider(150, 5000, 2500, 20);
		slider[n].position(10, 10);
		slider[n].style('width', '80px');

		textSize(20);
		textFont(font);

		checkbox[n] = createCheckbox('', false);
		checkbox[n].position(10, 50);
	  	checkbox[n].changed(myCheckedEvent);
 

	}

	this.draw = function() {
		// Background Colour
		background(0);
		// Smoothes resized images and shapes
		smooth();
		//Camera
		//orbitControl();

		fill(255, 255, 255);
	  	text(wordOnOff, -680, -280);

		makeSun(imgJupiter, 400, 0, slider[n].value(), onOff);

		// Making Stars
		for (let i = 0; i < particles.length; i++) {
			particles[i].show();
		}

	}

	// ===== Functions & Classes =====

	function myCheckedEvent() {
	if (checkbox[n].checked()) { 
		wordOnOff = 'On';
		onOff = true;
	} else {
		wordOnOff = 'Off';
		onOff = false;
	}
}

		this.keyPressed = function() {
		if (key == '1') {
			this.sceneManager.showScene( sunLevel );
		} 
		if (key == '2') {
			this.sceneManager.showScene( mercuryLevel );
		}
		if (key == '3') {
			this.sceneManager.showScene( venusLevel );
		}
		if (key == '4') {
			this.sceneManager.showScene( earthLevel );
		}
		if (key == '5') {
			this.sceneManager.showScene( marsLevel );
		}
		if (key == '6') {
			this.sceneManager.showScene( Intro );
		}
		if (key == '7') {
			this.sceneManager.showScene( saturnLevel );
		}
		if (key == '8') {
			this.sceneManager.showScene( ursanusLevel );
		}
		if (key == '9') {
			this.sceneManager.showScene( neptuneLevel );
		}
		if (key == '0') {
			this.sceneManager.showScene( plutoLevel );
		}

    }

}