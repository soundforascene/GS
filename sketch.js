// Declerations 

var washSong;
var playing = false;
let img;
// cnv = centreing variable
var cnv;
var drag = 0;

function preload(){
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
	img = loadImage('cloud2.png');
	// Audio 
	amplitude = new p5.Amplitude();
}

function draw() {
	 
	// All variables for readin amp and converting it to size and rotation 
	var level = amplitude.getLevel();
	var size = map(level, 0, 1, 25, 100);
	var ampRot
	var num = level;
	var addNum = num + level;

	// Smoothes resized images and shapes
	smooth();
	background(0,150,200);


	// Spheres 
	push();
	sphereMove(size*2, 24, 24, 0, 0, 0, 0);
	pop();

	push();
	//rotateZ(drag/2);
	rotateZ((frameCount*47)/1500);
	sphereMove(size/2.5, 24, 24, 100, 0, 0, 2);
	pop();

	push();
	//rotateZ(drag/2.5);
	rotateZ((frameCount*35)/1500);
	sphereMove(size/1.75, 24, 24, 150, 0, 0, 2.5);
	pop(); 

	push();
	//rotateZ(drag/3);
	rotateZ((frameCount*29)/1500);
	sphereMove(size, 24, 24, 215, 0, 0, 2.5);
	pop();

	push();
	//rotateZ(drag/3);
	rotateZ((frameCount*24)/1500);
	sphereMove(size/1.25, 24, 24, 285, 0, 0, 2.5);
	pop(); 

	push();
	//rotateZ(drag/3);
	rotateZ((frameCount*13)/1500);
	sphereMove(size*1.75, 24, 24, 375, 0, 0, 2.5);
	pop(); 

	addNum = num + level;

	print(addNum);

	mouseWheel;
	mouseClicked;	
}

// Functions

// x,y,z are the radius and defenition of the sphere
// a,b,c are the translation peramiters of the sphere 

// Function to add an extra layer of translation to the initRotation function. 
// Syntax = sphereMove(sphere radius, sphere detail X, sphere detail Y, translate x, y, z, )
function sphereMove(x, y, z, a, b, c) {
	push();
	texture(img);
	translate(a, b, c);
	initRotation(x,y,z);
	pop();
}

// Function to create the sphere object 
// Syntax = initRotation(radius, detailX, detailY)
function initRotation(x, y, z) {
	// I use push and pop to localise the Y roation to the sphere 
	//as it its where the centre so it doesnt get roatated on the 
	//trassnform axis later on.
	push();
	translate(0, 0, 0);
	rotateZ(millis() / 1000);
	sphere(x, y, z);
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
