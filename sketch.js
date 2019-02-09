// Declerations 

// cnv = centreing variable
var cnv;
var washSong;
var playing = false;
let img;
let imgSun;
let imgMercury;
let imgVenus;
let imgMoon;
let imgEarth;
let imgMars;
let imgSaturn;
let imgJupiter;
let imgPluto;
var drag = 0;

function preload(){
	// Preloading audio assets 
	washSong = loadSound('moon.mp3')
	washSong.loop();
	washSong.playMode(untilDone);
}

function setup() {
	// Canvas 
	cnv = createCanvas(windowWidth, windowHeight, WEBGL);
	centerCanvas();
	// Image 
	imageMode(CENTER);
	img = loadImage('cloud2.png');
	imgSun = loadImage('sun.jpeg');
	imgMercury = loadImage('mercury.jpeg');
	imgVenus = loadImage('venus.jpeg');
	imgMoon = loadImage('moon.jpeg');
	imgEarth = loadImage('Earth.jpeg');
	imgMars = loadImage('mars.jpeg');
	imgJupiter = loadImage('jupiter.jpeg');
	imgSaturn = loadImage('saturn.jpeg');
	imgUranus = loadImage('uranus.png');
	imgNeptune = loadImage('neptune.png');
	imgPluto = loadImage('pluto.jpeg');
	// Audio 
	amplitude = new p5.Amplitude();
}

function draw() {

	// All variables for readin amp and converting it to size and rotation 
	var level = amplitude.getLevel();
	var size = map(level, 0, 1, 25, 100);

	// Smoothes resized images and shapes
	smooth();
	//background(0,150,200);
	background(0, 0, 0);

	//rotateZ(drag/2);

	// Sufix n = name, r = rotation, s = size, x = x transform
function makePlanet(n, r, s, x){
	push();
	texture(n);
	rotateZ((frameCount*r)/1500);
	sphereMove((size*2)/(s*2), x)
	pop();
}

	makePlanet(imgSun, 0, 0.5, 0);
	makePlanet(imgMercury, 47, 3.75, 70);
	makePlanet(imgVenus, 35, 1.75, 100);
	makePlanet(imgEarth, 29.8, 1.75, 150);
	makePlanet(imgMars, 24.1, 3, 185);
	makePlanet(imgJupiter, 13, 0.5, 285);
	//makePlanet(imgSaturn, 0, 1, 0);
	makePlanet(imgUranus, 6.8, 2.75, 415);
	makePlanet(imgNeptune, 5.5, 2.75, 515);
	makePlanet(imgPluto, 29, 4, 550);

	push();
	texture(imgSaturn);
	rotateZ((frameCount*9.6)/1500);
	sphereMove(size/1.5, 375);
	for (var i = 20; i <= 24; i += 2) {
	saturnRing(i);
	}
	pop(); 

	mouseWheel;
	mouseClicked;	
}

// Functions

// x,y,z are the radius and defenition of the sphere
// a,b,c are the translation peramiters of the sphere 

// Function to add an extra layer of translation to the initSphere function. 
// Syntax = sphereMove(sphere radius, sphere detail X, sphere detail Y, translate x, y, z)


function saturnRing(y) {
	push();
	translate(375, 0, -200)
	rotateZ ((frameCount*5.5)/1500);
	//shearX(30);
	torus(y, 1);
	pop();
}
function sphereMove(x, a) {
	push();
	//texture(img);
	translate(a, 0, -200);
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

function mouseClicked(){
	if (!playing) {
		washSong.setVolume(0.5);
		washSong.play();
		playing = true;
	}
	else {
		washSong.setVolume(0);
		washSong.pause();
		playing = false;
    }
}

function mouseWheel(event) {
	drag += event.delta / 500;
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
