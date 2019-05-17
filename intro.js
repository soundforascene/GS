function preload(){
	// ==== Audio =====
	soundFormats('mp3');
	nintendo = loadSound('assets/audio/nintendo.mp3');
	// ==== Images ====
	imgSun = loadImage('assets/images/sun.jpeg');
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

function setup()
{
    var mgr = new SceneManager();

    mgr.nintendo = nintendo;
    mgr.imgSun = imgSun;
    mgr.imgMercury = imgMercury;
    mgr.imgMoon = imgMoon;
    mgr.imgEarth = imgEarth;
    mgr.imgMars = imgMars;
    mgr.imgJupiter = imgJupiter;
    mgr.imgSaturn = imgSaturn;
    mgr.imgUranus = imgUranus;
    mgr.imgNeptune = imgNeptune;
    mgr.imgPluto = imgPluto;

    mgr.addScene( Intro );
    mgr.addScene( sunLevel );
    mgr.wire();
    mgr.showScene( Intro );
}

// Star Particle
class Particle {
	constructor() {
		this.x = random(-2500, 2500);
		this.y = random(-2500, 2500);
		this.z = random(2500, -2500);
		this.rad = random(0.5, 2);
		this.a = random(0, 255);
	}
	show() {
		push();
		noStroke();
		fill(this.a);
		if(this.x < -200 || this.x > 200 || this.y < -200 || this.y > 200 || this.z < -200 || this.z > 200) {
			translate(this.x, this.y, this.z);
			sphere(this.rad, 8, 8);
		}
		pop();
	}
}
