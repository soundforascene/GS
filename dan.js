var shapesize = 10 //size of shape/wave controllers
var osctype = 'sine'
var oscstoptime = 500

// Syntax: name, freqency, amp
function createOsc(n, f, a) {
	var n = new p5.Oscillator(osctype);
	n.freq(f);
	n.amp(env);
}

createOsc('osc1', 220, 1);

function setup() {

createCanvas(600, 600);
  
env = new p5.Envelope();
env.setADSR(1, 0.25, 5000, 50);
env.setRange(0.8, 0);

// osc1.freq(220);
// osc2.freq(277.2);
// osc3.freq(329.67);
// osc4.freq(440);
// osc5.freq(554.5);
// osc6.freq(659.5);
// osc7.freq(880);
// osc8.freq(1108.5);
// osc9.freq(1318.5);
// osc10.freq(1760);
// osc11.freq(2217.5);
// osc12.freq(2637);

// osc1.amp(1);
// osc2.amp(1);
// osc3.amp(1);
// osc4.amp(1);
// osc5.amp(1);
// osc6.amp(1);
// osc7.amp(1);
// osc8.amp(1);
// osc9.amp(1);
// osc10.amp(1);
// osc11.amp(1);
// osc12.amp(1);
}

function draw() {
background(mouseY, 220, mouseX);

ellipse(300, 300, 600, 600);
fill( mouseX, 210, mouseY );
  
quad (mouseX, mouseY, 40, 450);
quad (mouseX, mouseY, 80, 504);
quad (mouseX, mouseY, 120, 540);
quad (mouseX, mouseY, 160, 565);
quad (mouseX, mouseY, 200, 583);
quad (mouseX, mouseY, 240, 594);
quad (mouseX, mouseY, 360, 594);
quad (mouseX, mouseY, 400, 583);
quad (mouseX, mouseY, 440, 565);
quad (mouseX, mouseY, 480, 540);
quad (mouseX, mouseY, 520, 504);
quad (mouseX, mouseY, 560, 450);

quad (mouseX, mouseY, 40, 150);
quad (mouseX, mouseY, 80, 96);
quad (mouseX, mouseY, 120, 60);
quad (mouseX, mouseY, 160, 35);
quad (mouseX, mouseY, 200, 17);
quad (mouseX, mouseY, 240, 6);
quad (mouseX, mouseY, 360, 6);
quad (mouseX, mouseY, 400, 17);
quad (mouseX, mouseY, 440, 35);
quad (mouseX, mouseY, 480, 60);
quad (mouseX, mouseY, 520, 96);
quad (mouseX, mouseY, 560, 150);
  

osc1.freq(mouseY);

if (mouseIsPressed)
osc1.start(0);//oscillator on with mouse press
else 
osc1.stop(oscstoptime);//oscillator off without mouse press
  
if (mouseIsPressed)
osc2.start(0);//oscillator on with mouse press
else 
osc2.stop(oscstoptime);//oscillator off without mouse press 
  
if (mouseIsPressed)
osc3.start(0);//oscillator on with mouse press
else 
osc3.stop(oscstoptime);//oscillator off without mouse press 

if (mouseIsPressed)
osc4.start(0);//oscillator on with mouse press
else 
osc4.stop(oscstoptime);//oscillator off without mouse press
  
if (mouseIsPressed)
osc5.start(0);//oscillator on with mouse press
else 
osc5.stop(oscstoptime);//oscillator off without mouse press 

}

function toggle() {
envelope.play();
}