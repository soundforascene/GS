// Declerations
var cnv;
var drag = 0;
var earthSize = 0.1;
var camRotation;
var yMov = 0;
var zMov = 0;
let cam;
let delta = 0.01;
let particles = [];


function preload(){
	sun = loadImage('assets/images/sun.jpeg');
	imgMercury = loadImage('assets/images/mercury.jpeg');
	imgVenus = loadImage('assets/images/venus.jpeg');
	imgMoon = loadImage('assets/images/moon.jpeg');
	imgEarth = loadImage('assets/images/Earth.jpeg');
	imgMars = loadImage('assets/images/mars.jpeg');
	imgJupiter = loadImage('assets/images/jupiter.jpeg');
	imgSaturn = loadImage('assets/images/saturn.jpeg');
	imgUranus = loadImage('assets/images/uranus.png');
	imgNeptune = loadImage('assets/images/neptune.png');
	imgPluto = loadImage('assets/images/pluto.jpeg');
	imgStar = loadImage('assets/images/star.jpg');
}

function setup() {
	// Canvas
	cnv = createCanvas(windowWidth, windowHeight, WEBGL);
	centerCanvas();
	// Image
	imageMode(CENTER);
	cam = createCamera();
	// Stars
	for (let i = 0; i < 100; i++) {
		let p = new Particle();
		particles.push(p);
	}
}

function draw() {

	var size = map(0.02, 0, 1, 25, 100);
	// Background Colour
	background(0, 0, 0);
	// Smoothes resized images and shapes
	smooth();
	//Camera
	orbitControl();

	//set initial tilt
	// push();
	// 	cam.tilt(0);
	// 	//rotateZ(frameCount * 0.01);
	// 	cam.setPosition(0, 850, 500);
	// 	cam.lookAt(0,0,0);
	// pop();

	function makeSun(n, r, s, x){
		push();
		ambientMaterial(200,200,255);
		texture(n);
		rotateZ((frameCount*r)/12000);
		sphereMove(((size*earthSize)*s)/5, x, 0, 0);
		pop();
	}

	function makePlanet(n, r, s, x, y, z){
		push();
		// Calculate Radius
		rad = PI * (x*2)
		texture(n);
		rotateZ((frameCount*r)/4000);
		sphereMove(((size*earthSize)*s)/5, x, y, z);
		pop();
	}

	// Syntax: n = name, r = rotation (relative speed around the sun), s = size (size compared to earth), x = x transform (distance from the sun)
	makeSun(sun, 0, 109, 0);
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

// Functions & Classes

// Star Particle

class Particle {
	constructor() {
		this.xb = random(-2000, 2000);
		this.yb = random(-2000, 2000);
		this.zb = random(-2000, 2000);
		this.x = map(this.xb, -2000, 2000, -200, 200);
		this.y = map(this.yb, -2000, 2000, -200, 200);
		this.z = map(this.zb, -2000, 2000, -200, 200);
		this.rx = random(10, -10);
		this.ry = random(10, -10);
		this.rz = random(10, -10);
		this.rad = random(1, 4);
	}
	show() {
		noStroke();
		fill(255);
		translate(this.x, this.y, this.z);
		// this.x = 0;
		// this.y = 0; 
		// this.z = 0;
		//ellipse(this.x, this.y, 24, 24);
		sphere(this.rad, 16, 16)
	}
}

function moveStar(i) {
	push();
	translate(100 , 100, 100)
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
	rotateZ(millis() / 1000);
	sphere(rad, 24, 24);
	pop();
}

// These next two functons centre the patch and allow for resizing

function centerCanvas () {
	var x = (windowWidth - width) / 2;
	var y = (windowHeight - height) /2;
	cnv.position(x , y);
}
function windowResized() {
	centerCanvas();
}
