	//    browser-sync start --server -f -w 
function Intro() {

	// Declerations
	import { Particle } from "functions.js"; 
	var cnv;
	var drag = 0;
	var earthSize = 0.1;
	var camRotation;
	var yMov = 0;
	var zMov = 0;
	let cam;
	let delta = 0.01;
	let particles = [];
	var mgr;

	this.setup = function() {

		// === Canvas ====
		cnv = createCanvas(windowWidth, windowHeight, WEBGL);
		centerCanvas();
		
		// ===== Image =====
		imageMode(CENTER);
		cam = createCamera();
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

		// mgr.draw();

		var size = map(0.02, 0, 1, 25, 100);
		// Background Colour
		background(0);
		// Smoothes resized images and shapes
		smooth();
		//Camera
		orbitControl();

		this.makeSun = function(n, r, s, x){
			push();
			ambientMaterial(200, 200, 255);
			//pointLight(255, 255, 255, 0, 0, 0);
			ambientLight(255);
			texture(n);
			rotateZ((frameCount*r) / 12000);
			this.sphereMove(((size*earthSize) * s) / 5, x ,0 ,0);
			pop();
	}

		this.makePlanet = function(n, r, s, x, y, z){
			push();
			texture(n);
			rotateY((frameCount*r)/4000);
			this.sphereMove(((size*earthSize)*s)/5, x, y, z);
			pop();
		}

		// Syntax: n = name, r = rotation (relative speed around the sun), s = size (size compared to earth), x = x transform (distance from the sun)

		var val = slider.value();
		nintendo.setVolume(val); 

		this.makeSun(imgSun, 0, 109, 0);
		this.makePlanet(imgMercury, 47, (0.3*20), 69, yMov, zMov);
		this.makePlanet(imgVenus, 35, (0.9*20), 109, yMov, zMov);
		this.makePlanet(imgEarth, 29.8, (1*20), 147, yMov, zMov);
		this.makePlanet(imgMars, 24.1, (0.53*20), 206, yMov, zMov);
		this.makePlanet(imgJupiter, 13, (11.2*3), (545-200), yMov, zMov);
		this.makePlanet(imgSaturn, 9.6, (9.4*3), 600-200, yMov, zMov);
		this.makePlanet(imgUranus, 6.8, (4*5), 800-200, yMov, zMov);
		this.makePlanet(imgNeptune, 5.5, (3.8*5), 900-400, yMov, zMov);
		this.makePlanet(imgPluto, 4.6, (0.18*10), 1000-400, yMov, zMov);

		// Making Stars
		for (let i = 0; i < particles.length; i++) {
			particles[i].show();
		}

	}

	// ===== Functions & Classes =====

	this.keyPressed = function() {
		this.sceneManager.showScene( sunLevel ); 
        //mgr.handleEvent("keyPressed");
        print("Done");
    }

	// Star Particle
	class Particle {
		constructor() {
			this.x = random(-2500, 2500);
			this.y = random(-2500, 2500);
			this.z = random(2500, -2500);
			this.rad = random(0.5, 2);
			this.a = random(0, 255);
		}
		show() {
			push();
			noStroke();
			fill(this.a);
			if(this.x < -200 || this.x > 200 || this.y < -200 || this.y > 200 || this.z < -200 || this.z > 200) {
				translate(this.x, this.y, this.z);
				sphere(this.rad, 8, 8);
			}
			pop();
		}
	}

	// Function to add an extra layer of translation to the initSphere function.
	// Syntax: x = sphere radius, a = translate X
	this.sphereMove = function(rad, x, y, z) {
		push();
		translate(x, y, z);
		this.initSphere(rad);
		pop();
	}

	// Function to create the sphere object
	// Syntax = initSphere(radius, detailX, detailY)
	// I use push and pop to localise the Y roation to the sphere
	//as it its where the centre so it doesnt get roatated on the
	//trassnform axis later on.
		this.initSphere = function(rad) {
			push();
			translate(0, 0, 0);
			rotateY(millis() / 1000);
			sphere(rad, 24, 24);
			pop();
		}

	// // These next two functons centre the patch and allow for resizing
	function centerCanvas() {
		var x = (windowWidth - width) / 2;
		var y = (windowHeight - height) /2;
		cnv.position(x , y);
	}

	this.windowResized = function() {
		centerCanvas();
	}
}
