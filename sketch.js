// Declerations 


// cnv = centreing variable
var cnv;
var drag = 0;
var earthSize = 0.1;


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
}

function setup() {
	// Canvas 
	cnv = createCanvas(windowWidth, windowHeight, WEBGL);
	centerCanvas();
	// Image 
	imageMode(CENTER);
}

function draw() {

	// Smoothes resized images and shapes
	smooth();
	// Background Colour 
	background(0, 0, 0);
	//Camera
	orbitControl();

	var size = map(0.02, 0, 1, 25, 100);

	function makeSun(n, r, s, x, y){
		push();
		ambientMaterial(200,200,255);
		texture(n);
		rotateZ((frameCount*r)/12000);
		sphereMove(((size*earthSize)*s)/5, x);
		pop();
	}

	function makePlanet(n, r, s, x){
		push();
		// Calculate Radius 
		rad = PI * (x*2)
		texture(n);
		rotateZ((frameCount*r)/4000);
		sphereMove(((size*earthSize)*s)/5, x);
		pop();
	}
	
	// Syntax: n = name, r = rotation (relative speed around the sun), s = size (size compared to earth), x = x transform (distance from the sun)
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

}

// Functions

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

// These next two functons centre the patch and allow for resizing 

function centerCanvas () {
	var x = (windowWidth - width) / 2;
	var y = (windowHeight - height) /2;
	cnv.position(x , y);  
}

function windowResized() {
	centerCanvas();
}
