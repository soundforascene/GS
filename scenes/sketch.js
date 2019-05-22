//    browser-sync start --server -f -w 

function Intro() {

	this.setup = function() {

	let v0 = createVector(0, 0, 0);
	let v1 = createVector(0, 0, 50);

	// === Canvas ====
	createCanvas(windowWidth, windowHeight, WEBGL);
	// ===== Stars =====
	for (let i = 0; i < 1000; i++) {
		let p = new Particle();
		particles.push(p);
	}
	// ===== Audio =====

	// DOM Events
}

this.draw = function() {

		// Background Colour
		background(0);
		// Smoothes resized images and shapes
		smooth();
		//Camera
		orbitControl();
		// DOM Events 
		var val = 6000;

		makeSun(imgSun, 109, 0, val);
		makePlanet(imgMercury, 47, (0.3*20), 69, val);
		makePlanet(imgVenus, 35, (0.9*20), 109, val);
		makePlanet(imgEarth, 29.8, (1*20), 147, val);
		makePlanet(imgMars, 24.1, (0.53*20), 206, val);
		makePlanet(imgJupiter, 13, (11.2*3), 545-100, val);
		makePlanet(imgSaturn, 9.6, (9.4*3), 600-100, val);
		makePlanet(imgUranus, 6.8, (4*5), 800-100, val);
		makePlanet(imgNeptune, 5.5, (3.8*5), 900-100, val);
		makePlanet(imgPluto, 4.6, (0.18*10), 1000-100,val);

		// Making Stars
		for (let i = 0; i < particles.length; i++) {
			particles[i].show();
		}

	}
	// ===== Functions & Classes =====

		this.keyPressed = function() {
		if (key == '1') {
			this.sceneManager.showScene( sunLevel );
			showDom(0);
		} 
		if (key == '2') {
			this.sceneManager.showScene( mercuryLevel );
			showDom(1);
		}
		if (key == '3') {
			this.sceneManager.showScene( venusLevel );
			showDom(2);
		}
		if (key == '4') {
			this.sceneManager.showScene( earthLevel );
			showDom(3);
		}
		if (key == '5') {
			this.sceneManager.showScene( marsLevel );
			showDom(4);
		}
		if (key == '6') {
			this.sceneManager.showScene( jupiterLevel );
			showDom(5);
		}
		if (key == '7') {
			this.sceneManager.showScene( saturnLevel );
			showDom(6);
		}
		if (key == '8') {
			this.sceneManager.showScene( uranusLevel );
			showDom(7);
		}
		if (key == '9') {
			this.sceneManager.showScene( neptuneLevel );
			showDom(8);
		}
		if (key == '0') {
			this.sceneManager.showScene( plutoLevel );
			showDom(9);
		}

    }
}
