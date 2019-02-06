// Declerations 

var washSong;
var playing = false;
let img;
// cnv = centreing variable
var cnv 

function preload(){

	washSong = loadSound('assets/audio/wash.mp3')
	washSong.loop();
	washSong.playMode(untilDone);
}

function setup() {
	
	cnv = createCanvas(windowWidth, windowHeight, WEBGL);
	centerCanvas();
	imageMode(CENTER);
	img = loadImage('cloud.png');


}

function draw() {
	 
	background(0,150,200);
	//elip(mouseX, mouseY);
	//fill(20,20,20);
	//washSong.pan(mouseY-200);
	rotateX(frameCount * 0.01);
	rotateY(frameCount * 0.01);
	texture(img);
	torus(100, 40);

	text("Move Mouse", 170, 50);
	text(mouseY-200, 120, 50);
	text(playing, 250, 50);

	//image(img, mouseX, mouseY);

	mouseClicked;
	
}

// Functions

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

// These next two functons centre the patch and allow for resizing 

function centerCanvas () {
	var x = (windowWidth - width) / 2;
	var y = (windowHeight - height) /2;
	cnv.position(x , y);  
}

function windowResized() {
	centerCanvas();
}
