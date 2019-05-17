export class Particle {
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