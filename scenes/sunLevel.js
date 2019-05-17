function sunLevel() {

	// Declerations
	var cnv;
	var drag = 0;
	var earthSize = 0.1;
	var camRotation;
	var yMov = 0;
	var zMov = 0;
	let delta = 0.01;
	let particles = [];

	this.preload = function() {
		imgSun = loadImage('assets/images/sun.jpg');
	}
	this.setup = function() {
		cnv = createCanvas(windowWidth, windowHeight, WEBGL);
		centerCanvas();

		// Stars
		for (let i = 0; i < 1000; i++) {
		let p = new Particle();
		particles.push(p);
	}
	this.draw = function() {
		background(0);
		makeSun(sun, 0, 109, 0);
	}
}

	function makeSun(n, r, s, x){
		push();
		ambientMaterial(200, 200, 255);
		pointLight(255, 255, 255, 0, 0, 0);
		// push();
		ambientLight(255);
		// pop();
		texture(n);
		rotateZ((frameCount*r) / 12000);
		sphereMove(((size*earthSize) * s) / 5, x ,0 ,0);
		pop();
	}
	// Function to add an extra layer of translation to the initSphere function.
	// Syntax: x = sphere radius, a = translate X
	function sphereMove(rad, x, y, z) {
		push();
		translate(x, y, z);
		initSphere(rad);
		pop();
	}
	// Function to create the sphere object
	// Syntax = initSphere(radius, detailX, detailY)
	// I use push and pop to localise the Y roation to the sphere
	//as it its where the centre so it doesnt get roatated on the
	//trassnform axis later on.
	function initSphere(rad) {
		push();
		translate(0, 0, 0);
		rotateY(millis() / 1000);
		sphere(rad, 24, 24);
		pop();
	}
	function centerCanvas () {
	var x = (windowWidth - width) / 2;
	var y = (windowHeight - height) /2;
	cnv.position(x , y);
	}
	function windowResized() {
		centerCanvas();
	}
}

