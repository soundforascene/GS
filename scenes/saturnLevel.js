function saturnLevel() {

	// Declerations
	var slider;
	let particles = [];
	var mgr;

	this.setup = function() {

		// === Canvas ====
		createCanvas(windowWidth, windowHeight, WEBGL);

		// ===== Stars =====
		for (let i = 0; i < 1000; i++) {
			let p = new Particle();
			particles.push(p);
		}

	  	// ===== Audio =====
	  	slider = createSlider(150, 5000, 2500, 20);
		slider.position(10, 10);
		slider.style('width', '80px');
	}

	this.draw = function() {
		// Background Colour
		background(0);
		// Smoothes resized images and shapes
		smooth();
		//Camera
		orbitControl();

		makeSun(imgSaturn, 250, 0);

		// Making Stars
		for (let i = 0; i < particles.length; i++) {
			particles[i].show();
		}

	}

	// ===== Functions & Classes =====
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
			this.sceneManager.showScene( jupiterLevel );
		}
		if (key == '7') {
			this.sceneManager.showScene( Intro );
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