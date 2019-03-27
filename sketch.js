// Declerations 


// cnv = centreing variable
var cnv;
var washSong;
var playing = false;
var drag = 0;
var earthSize = 0.1;
var grow = false;
var mAmp;
var mRate;


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
	// Preloading audio assets 
	washSong = loadSound('assets/audio/wash.mp3')
	washSong.loop();
	washSong.playMode(untilDone);
}

function setup() {
	// Canvas 
	cnv = createCanvas(windowWidth, windowHeight, WEBGL);
	centerCanvas();
	// Image 
	imageMode(CENTER);
	// Audio 
	amplitude = new p5.Amplitude();
}

function draw() {


	function makeCamera() {
	camera(0, 0, 800, 147, 0, 0, 0, 1, 0);
	}
	makeCamera();
	rotateZ((frameCount*29.8)/12000)

	// All variables for reading amp and converting it to size
	var level = amplitude.getLevel();
	var size = map(level, 0, 1, 25, 100);
	// Smoothes resized images and shapes
	smooth();
	// nice blue background(0,150,200);
	background(0, 0, 0);
	// control for drag and zoom
	orbitControl();
	//Camera
	

	//camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);

	 mAmp = map(mouseX, 0, 1439, 0, 1);
	 mRate = map(mouseY, 0, 748, -0, 1);

	 washSong.setVolume(mAmp);
	 washSong.rate(mRate);
	 //print(mouseY);

// Syntax: n = name, r = rotation (relative speed around the sun), s = size (size compared to earth), x = x transform (distance from the sun)
function makeSun(n, r, s, x, y){
	push();
	ambientMaterial(200,200,255);
	texture(n);
	rotateZ((frameCount*r)/12000);
	sphereMove(((size*earthSize)*s)/5, x);
	pop();
}
function makePlanet(n, r, s, x, y){
	push();
	if (grow == true) {
		s *= 15;
	}
	// Calculate Radius 
	rad = PI * (x*2)

	texture(n);
	rotateZ((frameCount*r)/4000);
	sphereMove(((size*earthSize)*s)/5, x);
	pop();
	if (y == 1) {
		saturnRing();
	}
}

	makeSun(sun, 0, 109, 0);
	makePlanet(imgMercury, 47, (0.3*20), 69);
	makePlanet(imgVenus, 35, (0.9*20), 109);
	makePlanet(imgEarth, 29.8, (1*20), 147);
	makePlanet(imgMars, 24.1, (0.53*20), 206);
	makePlanet(imgJupiter, 13, (11.2*3), (545-200));
	makePlanet(imgSaturn, 9.6, (9.4*3), 600-200);
	makePlanet(imgUranus, 6.8, (4*5), 800-200);
	makePlanet(imgNeptune, 5.5, (3.8*5), 900-400);
	makePlanet(imgPluto, 4.6, (0.18*10), 1000-400);

	//print((frameCount*29.8)/4000);

	doubleClicked;	
}

// Functions

function saturnRing() {
	translate(375, 0, 0)
	rotateZ ((frameCount*9.6)/4000);
	texture(imgSaturn);
	//for (var i = 20000; i <= 24000; i += 2000) {
	torus(75, 1);
}
// Function to add an extra layer of translation to the initSphere function. 
// Syntax: x = sphere radius, a = translate X 
function sphereMove(x, a) {
	push();
	translate(a, 0, 0);
	initSphere(x);
	pop();
}

// Function to create the sphere object 
// Syntax = initSphere(radius, detailX, detailY)
function initSphere(x) {
	// I use push and pop to localise the Y roation to the sphere 
	//as it its where the centre so it doesnt get roatated on the 
	//trassnform axis later on.
	push();
	translate(0, 0, 0);
	rotateZ(millis() / 1000);
	sphere(x, 24, 24);
	pop();
}

// Function turns on and off music when double clicking
function doubleClicked(){
	if (!playing) {
	
		washSong.play();
		playing = true;
		grow = true;
	}
	else {
		washSong.setVolume(0);
		washSong.pause();
		playing = false;
		grow = false;
    }
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
