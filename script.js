// Complete the js code
function Car(make, model) {
	constructor(make, model){
		this.make=make;
		this.model=model;
	}
	getMakeModel(){
		console.log(`${this.make} ${this.model}`);
	}
}

function SportsCar extends Car(make, model, topSpeed) {
	constructor(make,model,topSpeed){
		this.make=make;
		this.model=model;
		this.topSpeed=topSpeed;
	}
	getTopSpeed(){
		console.log(`${topSpeed}`)
	}
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
