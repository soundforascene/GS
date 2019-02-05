var osc;
var playing = false;

function elip(x, y){
	fill (255,150,200);
	ellipse (x, y, 200, 200);
}

function mouseClicked(){
	if (!playing) {
		osc.amp(0.5);
		osc.start(1);
		playing = true;
	}
	else {
		osc.amp(0);
		playing = false;
    }
}

function canvas(x, y){
	createCanvas(x, y); 
	// Create an equasion that allows me 
	// to get the centre of the canvas 
}

function setup() {
  createCanvas(1600,800);
	var centre = 
	osc = new p5.Oscillator('triangle');
	osc.amp(0); 
	osc.start(0); 
}

function draw() {
	 
	background(0,150,200);
	elip(mouseX, mouseY);
	fill(20,20,20);
	osc.freq(mouseX*2)
	//osc.pan(mouseY-200);
	// Find a way to automaticly center things.
	text("Move Mouse", 170, 50);
	text(mouseY-200, 120, 50);
	text(playing, 250, 50);
	mouseClicked;
	
}