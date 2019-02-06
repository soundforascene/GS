// Functions

function elip(x, y){
	fill (255,150,200);
	ellipse (x, y, 200, 200);
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

function canvas(x, y){
	createCanvas(x, y); 
	// Create an equasion that allows me 
	// to get the centre of the canvas 
} 

// Declerations 

var washSong;
var playing = false;
let img;

function preload(){

	washSong = loadSound('assets/audio/wash.mp3')
	washSong.loop();
	washSong.playMode(untilDone);
}

function setup() {
	
	createCanvas(1600,800);
	imageMode(CENTER);
	img = loadImage('cloud.png');


}

function draw() {
	 
	background(0,150,200);
	//elip(mouseX, mouseY);
	//fill(20,20,20);
	//washSong.pan(mouseY-200);

	text("Move Mouse", 170, 50);
	text(mouseY-200, 120, 50);
	text(playing, 250, 50);

	image(img, mouseX, mouseY);

	mouseClicked;
	
}
