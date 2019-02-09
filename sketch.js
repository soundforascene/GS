// Declerations 
/*
var planets = ['sun', 'mercury', 'venus', 'moon', 'earth', 'mars', 'saturn', 'jupiter' , 'pluto'];
for (var i = 0; i <= 9; i ++) {
	let = fuits[i]; 
}
*/
// cnv = centreing variable
var cnv;
var washSong;
var playing = false;
var drag = 0;
var earthSize = 0.1;


function preload(){
	// Preloading audio assets 
	washSong = loadSound('wash.mp3')
	washSong.loop();
	washSong.playMode(untilDone);
}

function setup() {
	// Canvas 
	cnv = createCanvas(windowWidth, windowHeight, WEBGL);
	centerCanvas();
	// Image 
	imageMode(CENTER);
	sun = loadImage('/assets/images/sun.jpeg');
	imgMercury = loadImage('/assets/images/mercury.jpeg');
	imgVenus = loadImage('/assets/images/venus.jpeg');
	imgMoon = loadImage('/assets/images/moon.jpeg');
	imgEarth = loadImage('/assets/images/Earth.jpeg');
	imgMars = loadImage('/assets/images/mars.jpeg');
	imgJupiter = loadImage('/assets/images/jupiter.jpeg');
	imgSaturn = loadImage('/assets/images/saturn.jpeg');
	imgUranus = loadImage('/assets/images/uranus.png');
	imgNeptune = loadImage('/assets/images/neptune.png');
	imgPluto = loadImage('/assets/images/pluto.jpeg');
	// Audio 
	amplitude = new p5.Amplitude();
}

function draw() {

	// All variables for reading amp and converting it to size
	var level = amplitude.getLevel();
	var size = map(level, 0, 1, 25, 100);
	// Smoothes resized images and shapes
	smooth();
	// nice blue background(0,150,200);
	background(0, 0, 0);
	// control for drag and zoom
	orbitControl();

	// Sufix n = name, r = rotation (relative speed around the sun), s = size (size compared to earth), x = x transform (distance from the sun)
function makePlanet(n, r, s, x, y){
	push();
	texture(n);
	rotateZ((frameCount*r)/4000);
	sphereMove(((size*earthSize)*s)/5, x);
	pop();
	if (y == 1) {
		saturnRing();
	}
}
	makePlanet(sun, 0, 109, 0);
	makePlanet(imgMercury, 47, 0.3, 69);
	makePlanet(imgVenus, 35, 0.9, 109);
	makePlanet(imgEarth, 29.8, 1, 147);
	makePlanet(imgMars, 24.1, 0.53, 206);
	makePlanet(imgJupiter, 13, 11.2, 545);
	makePlanet(imgSaturn, 9.6, 9.4, 600);
	makePlanet(imgUranus, 6.8, 4, 800);
	makePlanet(imgNeptune, 5.5, 3.8, 900);
	makePlanet(imgPluto, 4.6, 0.18, 1000);

	mouseWheel;
	doubleClicked;	
}

// Functions

// x,y,z are the radius and defenition of the sphere
// a,b,c are the translation peramiters of the sphere 

// Function to add an extra layer of translation to the initSphere function. 
// Syntax = sphereMove(sphere radius, sphere detail X, sphere detail Y, translate x, y, z)


function saturnRing(y) {
	translate(375, 0, 0)
	rotateZ ((frameCount*9.6)/4000);
	texture(imgSaturn);
	//for (var i = 20000; i <= 24000; i += 2000) {
	torus(75, 1);
	//}
}
function sphereMove(x, a) {
	push();
	//texture(img);
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

function doubleClicked(){
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
	drag += event.delta / 2000;
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
