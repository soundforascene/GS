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

}

this.draw = function() {

		// Background Colour
		background(0);
		// Smoothes resized images and shapes
		smooth();
		//Camera
		orbitControl();
		// DOM Events 

		let image = [imgSun, imgMercury, imgVenus, imgEarth, imgMars, imgJupiter, imgSaturn, imgUranus, imgNeptune, imgPluto];
		let rotSpeed = [0, 47, 35, 29.8, 24.1, 13, 9.6, 6.8, 5.5, 4.6]; 
		let size = [109/20, 0.3, 0.9, 1, 0.53, 11.2/4, 9.4/4, 4, 3.8, 0.18];
		let place = [0, 69, 109, 147, 206, 545, 600, 800, 900, 1000];

		for (var i = 0; i < 10; i++) {
			makePlanet(image[i], rotSpeed[i], size[i]*20, place[i]);
		}

		push();
		textSize(20);
		textFont(font);
		textAlign(CENTER);
		fill('white');
		text("Press Number Keys 1-9 to switch Planet", 0, -300);
		pop();

		push();
		textSize(20);
		textFont(font);
		textAlign(CENTER);
		fill('white');
		text("Press Number Keys 1-9 to switch Planet", 0, -300);
		pop();

		// Making Stars
		for (let i = 0; i < particles.length; i++) {
			particles[i].show();
		}

	}
	// ===== Functions & Classes =====

		this.keyPressed = function() {
		if (key == '1') {
			this.sceneManager.showScene( sunLevel );
			showDom(0); } 
		if (key == '2') {
			this.sceneManager.showScene( mercuryLevel );
			showDom(1); }
		if (key == '3') {
			this.sceneManager.showScene( venusLevel );
			showDom(2); }
		if (key == '4') {
			this.sceneManager.showScene( earthLevel );
			showDom(3); }
		if (key == '5') {
			this.sceneManager.showScene( marsLevel );
			showDom(4); }
		if (key == '6') {
			this.sceneManager.showScene( jupiterLevel );
			showDom(5); }
		if (key == '7') {
			this.sceneManager.showScene( saturnLevel );
			showDom(6); }
		if (key == '8') {
			this.sceneManager.showScene( uranusLevel );
			showDom(7); }
		if (key == '9') {
			this.sceneManager.showScene( neptuneLevel );
			showDom(8); }
		if (key == '0') {
			this.sceneManager.showScene( plutoLevel );
			showDom(9);}

    }
}
