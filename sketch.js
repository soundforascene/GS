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
	var size = map(level, 0, 1, 50, 200);
	var rotation = map(level, 0, 1, 0.01, 0.1);

	// Mappning mouse input to a different range for shape rotation
	var mapX = map(mouseX, 0, windowWidth, -5, 5);
	var mapY = map(mouseY, 0, windowHeight, 20, -20);

	// Smoothes resized images and shapes
	smooth();
	background(0,150,200);

	//camera(0, 20, 0, CENTER, CENTER)

	rotateZ(drag);
	translate(200, 0, 0);
	sphereMove(size, 24, 24);
	mouseWheel;
	mouseClicked;	
}

// Functions


function sphereMove(x, y, z) {

	// I use push and pop to localise the Y roation to the sphere 
	//as it its where the centre so it doesnt get roatated on the 
	//trassnform axis later on.

	push();
	translate(0, 0, 0);
	rotateZ(millis() / 1000);
	sphere(x, y, z);
	pop();
	texture(img);
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
	drag += event.delta / 1000;
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
