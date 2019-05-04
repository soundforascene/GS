//    browser-sync start --server -f -w

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
	for (let i = 0; i < 1000; i++) {
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

	function makeSun(n, r, s, x){
		push();
		ambientMaterial(200, 200, 255);
		//pointLight(255, 255, 255, 0, 0, 0);
		ambientLight(255);
		texture(n);
		rotateZ((frameCount*r) / 12000);
		sphereMove(((size*earthSize) * s) / 5, x ,0 ,0);
		pop();
	}

	function makePlanet(n, r, s, x, y, z){
		push();
		// Calculate Radius
		rad = PI * (x * 2)
		//specularMaterial(255);
		texture(n);
		rotateY((frameCount*r)/4000);
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
		this.x = random(0-width, width);
		this.y = random(0-height, height);
		this.z = random(5000, -5000);
		this.rad = random(0.5, 2);
		this.a = random(0, 255);
	}
	show() {
		push();
		//ambientMaterial(255, 255, 255, this.a)
		noStroke();
		fill(this.a);
		if(this.x < -200 || this.x > 200 || this.y < -200 || this.y > 200 || this.z < -200 || this.z > 200) {
			translate(this.x, this.y, this.z);
			sphere(this.rad, 16, 16);
		}
		pop();
	}
}

// class Planets {
// 	constructor(n, s, r, x, y, z, v)
// }

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
	rotateY(millis() / 1000);
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
