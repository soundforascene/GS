function marsLevel() {

	// Declerations
	var p = 4;
	var osc;
	var rev;
	var lfo;

	this.setup = function() {

		// === Canvas ====
		createCanvas(windowWidth, windowHeight, WEBGL);

		slider[p][0] = createSlider(150, 5000, 2500, 20);
		slider[p][0].position(220, 30);
		slider[p][0].style('width', '200px');
		slider[p][1] = createSlider(0, 500, 250, 10);
		slider[p][1].position(220, 80);
		slider[p][1].style('width', '200px');
		slider[p][2] = createSlider(0, 1, 0.5, 0.01);
		slider[p][2].position(220, 130);
		slider[p][2].style('width', '200px');
		slider[p][3] = createSlider(0, 20, 10, 0.2);
		slider[p][3].position(220, 180);
		slider[p][3].style('width', '200px');


		osc = new p5.Oscillator();
		osc.setType('sine');
		osc.amp(0);
		osc.start();

		lfo = new p5.Oscillator();
		lfo.setType('sine');
		lfo.disconnect();
		lfo.freq(5);
		//lfo.amp(0.8);
		lfo.start();
		//osc.add(lfo);

		osc.amp(lfo.scale(-1, 1, 1, -1));

		rev = new p5.Reverb();
		rev.process(osc, 5, 3);
	}

	this.draw = function() {
		// Background Colour
		background(0);
		// Smoothes resized images and shapes
		smooth();

		let speed = slider[p][0].value();
		let size = slider[p][1].value();
		let lfoAmp = slider[p][2].value();
		let lfoRate = slider[p][3].value();

		var soundSpeed = map(speed, 5000, 150, 700, 900);
		var soundSize = map(size, 0, 500, 0, 2);

		osc.freq(soundSpeed);
		osc.amp(soundSize);

		lfo.amp(lfoAmp);
		lfo.freq(lfoRate);

		// ==== Text ====
		printText('Mars');

		makeSun(imgMars, size, 0, speed);

		// Making Stars
		for (let i = 0; i < particles.length; i++) {
			particles[i].show();
		}

	}

	// ===== Functions & Classes =====
		this.keyPressed = function() {
		if (key == '5') {
			this.sceneManager.showScene( Intro );
			hideDom(p);
		}

    }

}