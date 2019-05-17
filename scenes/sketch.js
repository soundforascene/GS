//    browser-sync start --server -f -w  

function Intro() {

	// Declerations
	var yMov = 0;
	var zMov = 0;
	let particles = [];
	var mgr;

	this.setup = function() {

		// === Canvas ====
		createCanvas(windowWidth, windowHeight, WEBGL);
		// ===== Image =====
		imageMode(CENTER);
		// ===== Stars =====
		for (let i = 0; i < 1000; i++) {
			let p = new Particle();
			particles.push(p);
		}
		// ===== DOM Elements, sliders ect. =====
		slider = createSlider(0, 1, 0, 0);
	  	slider.position(150, 10);
	  	slider.style('width', '80px');

	  	// ===== Audio =====
	  	nintendo.play();
	}

	this.draw = function() {

		// Background Colour
		background(0);
		// Smoothes resized images and shapes
		smooth();
		//Camera
		orbitControl();

		var val = slider.value();
		nintendo.setVolume(val); 

		makeSun(imgSun, 0, 109, 0);
		makePlanet(imgMercury, 47, (0.3*20), 69, yMov, zMov);
		makePlanet(imgVenus, 35, (0.9*20), 109, yMov, zMov);
		makePlanet(imgEarth, 29.8, (1*20), 147, yMov, zMov);
		makePlanet(imgMars, 24.1, (0.53*20), 206, yMov, zMov);
		makePlanet(imgJupiter, 13, (11.2*3), (545-200), yMov, zMov);
		makePlanet(imgSaturn, 9.6, (9.4*3), 600-200, yMov, zMov);
		makePlanet(imgUranus, 6.8, (4*5), 800-200, yMov, zMov);
		makePlanet(imgNeptune, 5.5, (3.8*5), 900-400, yMov, zMov);
		makePlanet(imgPluto, 4.6, (0.18*10), 1000-400, yMov, zMov);

		// Making Stars
		for (let i = 0; i < particles.length; i++) {
			particles[i].show();
		}

	}

	// ===== Functions & Classes =====

	this.keyPressed = function() {
		if (key == 1) {
			this.sceneManager.showScene( sunLevel );
		} 
    }
}
