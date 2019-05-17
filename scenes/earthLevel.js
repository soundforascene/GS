//    browser-sync start --server -f -w 

function earthLevel() {

	// Declerations
	var yMov = 0;
	var zMov = 0;
	let particles = [];
	var mgr;

	this.setup = function() {

		// === Canvas ====
		createCanvas(windowWidth, windowHeight, WEBGL);
		// ==== Scenes =====
		mgr = new SceneManager();
		//mgr.wire();
		mgr.addScene(Intro);
		//mgr.addScene(Intro);
	    mgr.showScene(sunLevel);
	    //mgr.showNextScene();
		// ===== Stars =====
		for (let i = 0; i < 1000; i++) {
			let p = new Particle();
			particles.push(p);
		}
		// ===== DOM Elements, sliders ect. =====

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

		makeSun(imgEarth, 0, 550, 0);

		// Making Stars
		for (let i = 0; i < particles.length; i++) {
			particles[i].show();
		}

	}

	// ===== Functions & Classes =====

		this.keyPressed = function() {
		this.sceneManager.showScene( Intro ); 
        //mgr.handleEvent("keyPressed");
        print("Done");
    }
}
