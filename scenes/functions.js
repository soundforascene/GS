
// ======= CLASSES =======

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

// ======== FUNCTIONS ========

function makeSun(n, r, s, x){
	push();
		ambientMaterial(200, 200, 255);
		//pointLight(255, 255, 255, 0, 0, 0);
		ambientLight(255);
		texture(n);
		rotateZ((frameCount*r) / 12000);
		this.sphereMove(((26.5*0.1) * s) / 5, x ,0 ,0);
	pop();
}

// Syntax: n = name, r = rotation (relative speed around the sun), s = size (size compared to earth), x = x transform (distance from the sun)
function makePlanet(n, r, s, x, y, z){
	push();
		texture(n);
		rotateY((frameCount*r)/4000);
		this.sphereMove(((26.5*0.1)*s)/5, x, y, z);
	pop();
}
// Function to add an extra layer of translation to the initSphere function.
// Syntax: x = sphere radius, a = translate X
function sphereMove(rad, x, y, z) {
	push();
		translate(x, y, z);
		this.initSphere(rad);
	pop();
}

// Function to create the sphere object
// Syntax = initSphere(radius, detailX, detailY)
// I use push and pop to localise the Y roation to the sphere
//as it its where the centre so it doesnt get roatated on the
//trassnform axis later on.
function initSphere(rad) {
	push();
		translate(0, 0, 0);
		rotateY(millis() / 1000);
		sphere(rad, 24, 24);
	pop();
}