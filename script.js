//Part 1

class Vehicle{
    constructor(make, model, year){
        for (let str of [make, model]){
            if(typeof str !== 'string'){
                throw new Error ('Enter valid words!');
            }
        }
        if(!Number.isInteger(year) || year <=0 ){
            throw new Error ('Enter a valid year!');
        }
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        return "Beep."
    }
    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`
    }
}

//Part 2
class Car extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 4;
    }
}

//Part 3
class Motorcycle extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine(){
        return "VROOM!!!";
    }
}

//Part 4
class Garage{
    constructor(capacity){
        this.capacity = capacity;
        this.vehicles = [];
    }
    add(newVehicle){
        if (newVehicle instanceof Vehicle){
            if (this.vehicles.length < this.capacity){
                this.vehicles.push(newVehicle);
                return "Vehicle added!"
            }
            else return "Sorry we're full.";
        }
        else return "Only vehicles are allowed in here!";
        
    }
}
