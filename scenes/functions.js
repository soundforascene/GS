
//Declerations
	let particles = [];
	let checkbox = [];
	var mgr;
	let slider = make2DArray(10, 10);
	// let freqTXT = text("Freqency/ Speed", -700, -300);
	// let ampTXT = text("Amplitude/ Size", -700, -250);
	// let lfoTXT =text("LFO Amplitude", -700, -200);
	// let rateTXT = text("LFO Rate", -700, -150);

	// //let images = [imgMercury, imgVenus, imgEarth, imgMars, imgJupiter, imgSaturn, imgUranus, imgNeptune, imgPluto];
	// let speeds = [47, 35, 29.8, 24.1, 13, 9.6, 6.8, 5.5, 4.6];
	// let sizes = [0.3, 0.9, 1, 0.53, 11.2, 9.4, 4, 3.8, 0.18]; 
	// let xLocations = [69, 109, 147, 206, 545, 600, 800, 900, 1000];
	//let angles = [0, 0, 0, 0, 0, 0, 0, 0, 0];

// ======= CLASSES =======

class Particle {
	constructor() {
		this.x = random(-2500, 2500);
		this.y = random(-2500, 2500);
		this.z = random(2500, -2500);
		this.rad = random(0.5, 4);
		this.a = random(0, 255);
	}
	show() {
		push();
		noStroke();
		fill(this.a);
		if(this.x < -200 || this.x > 200 || this.y < -200 || this.y > 200 || this.z < -200 || this.z > 200) {
			translate(this.x, this.y, this.z);
			sphere(this.rad, 4, 4);
		}
		pop();
	}
}

// ======== FUNCTIONS ========

function printText(name) {
	
	textSize(25);
	textFont(font);
	text("Freqency/ Speed", -700, -300);
	text("Amplitude/ Size", -700, -250);
	text("LFO Amplitude", -700, -200);
	text("LFO Rate", -700, -150);

	push();
	textSize(60);
	textAlign(CENTER);
	text(name, 0, -275);
	pop();
}
function hidehideDom() {
	hideDom(0);
	hideDom(1);
	hideDom(2);
	hideDom(3);
	hideDom(4);
	hideDom(5);
	hideDom(6);
	hideDom(7);
	hideDom(8);
	hideDom(9);
}

function hideDom(p) {
	for (var i = 0; i < 10; i++) {
	slider[p][i].hide();
	}
}
function showDom(p) {
	for (var i = 0; i < 10; i++) {
	slider[p][i].show();
	}
}

function make2DArray(cols, rows) {
	var slider = new Array(cols);
	for (var i = 0; i < slider.length; i++) {
		slider[i] = new Array(rows);
	}
	return slider;
}

function planetOsc(freq, amp) {
	let osc = new p5.Oscillator();
	osc.setType('sine');
	osc.freq(freq);
	osc.amp(amp);
	osc.start(true);
}

// Syntax: n = name, s = size, x = x position
function makeSun(name, size, x, speed, on){
	push();
		ambientMaterial(200, 200, 255);
		texture(name);
		sphereMove(((26.5*0.1) * size) / 5, x, speed);
	pop();
}

// function makePlanet(name, speed, size, x, i){

// 	let v0 = createVector(x, 0, 0);
// 	let v1 = createVector(0, 0, 50);
// 	let rot = v1.rotate(angles[i]);
// 	//console.log("this is 1", angles[0]);
// 	//console.log("this is 2", angles[1]);

//   	//drawSphere(v0, v1.rotate(angles[i]), name, (size/1.2));

// 	push();
// 	rotateY(rot.heading())
// 	texture(name);
// 	translate(v0.x, v0.y, v0.z);
// 	sphere(size, 16, 16);
// 	pop();

//   	angles[i] += 0.001;

// 	}

// Syntax: n = name, r = rotation (relative speed around the sun), s = size (size compared to earth), x = x transform (distance from the sun)
// function makePlanet(name, rotation, size, x, y, z){

	function makePlanet(name, rotation, size, x, speed){
	push();
		texture(name);
		rotateY((frameCount*rotation)/speed);
		sphereMove(((26.5*0.1)*size)/5, x, 2500);
	pop();
}

// Function to add an extra layer of translation to the initSphere function.
// Syntax: x = sphere radius, a = translate X
function sphereMove(radius, x, speed) {
	push();
		translate(x, 0, 0);
		initSphere(radius, speed);
	pop();
}

// Function to create the sphere object
// Syntax = initSphere(radius, detailX, detailY)
// I use push and pop to localise the Y roation to the sphere
//as it its where the centre so it doesnt get roatated on the
//trassnform axis later on.
function initSphere(radius, speed) {
	push();
		translate(0, 0, 0);
		rotateY(millis() / speed);
		sphere(radius, 24, 24);
	pop();
}