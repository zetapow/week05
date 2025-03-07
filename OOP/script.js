// alert('booyakasha');

// "this" = current execution context. usually represents the object that a function or method is being called on
/* value of this is determined at runtime can can point to different thingsd in different situtations
- global execution - global object
- local execution - this refers to the function object depending on how function was invoked


*/

const person = {
   firstName: 'John',
   lastName: 'Wayne',
   greetings: function () {
      console.log(`Hello ${this.firstName}`);
      return `Hello ${this.firstName}`;
   },
};

const greetings = person.greetings();
document.querySelector('.text').innerHTML = `<b><i>${greetings}<i/></b>`;

/* OOP use objects to model real world things to be represented in programs
provide simple way to access functionality that would otherwise be hard or impossible to make use of 


Classes are a template for creating objects. Encapsulate data with code to work on data
*/

class Person {
   constructor(name) {
      this.name = name;
      return name;
   }

   introduceSelf() {
      console.log(`Hello, I am ${name}`);
      return `Hello, I am ${name}`;
   }
}

class Car {
   constructor(make, year, model, colour) {
      this.make = make;
      this.year = year;
      this.model = model;
      this.colour = colour;
   }

   // method
   printColour() {
      console.log(`This ${this.make} is ${this.colour}`);
      return `This ${this.make} is ${this.colour}`;
   }
}

const dreamCar = new Car('KIA', 2025, 'EV3', 'green');
const dreamColour = dreamCar.printColour();
document.querySelector('.text').innerHTML = `<b><i>${dreamColour}<i/></b>`;

const currentCar = new Car('Toyota', 2014, 'Aqua', 'red');
const CurrentColour = currentCar.printColour();

/* Inheritance

Class created with class inheritance (extends) inherits all methods from another class

-extends 
create child class of another class
child class inherits all methods
*/

class CoastalCity extends City {
   constructor(name, travelled, coastLength) {
      //Call parent constructor
      super(name, travelled);
      this.coastLength = coastLength;
   }
   visitBeach() {
      // Child can have method parent doesnt have
      console.log(`The coast line is ${this.coastLength} km long`);
   }
   travel() {
      // implements differently from parent method
      this.travelled = true;
      console.log('The coast line is nice');
   }
}

/*
-super()
call constructor of parent class to access the parent's properties and methods

*/
class City {
   constructor(name, travelled) {
      this.name = name;
      this.travelled = travelled;
   }

   travel() {
      // Will only call if child does not have travel method
      this.travelled = true;
   }
}

/*
-polymorphism
Define a method in parent class and can override or customize method in child class

*/

// Put it together

const tauranga = new CoastalCity('Tauranga', false, 20);
tauranga.travel();
tauranga.visitBeach();

class OrkUnit {
   constructor(health, speed, strength) {
      this.health = `${health} hitpoints`;
      this.speed = speed;
      this.strength = strength;
   }
   attack() {
      console.log('The ork says WAAAAAGGGH');
   }
}

const stormboyz = new OrkUnit(250, 'medium', 'strong');
stormboyz.attack();

class OrkBiker extends OrkUnit {
   constructor(health, speed, strength, range) {
      super(health, speed, strength);
      this.movementRange = range;
   }
   attack() {
      console.log(`This warbiker has a range of ${this.movementRange} km`);
   }
}

const warbiker = new OrkBiker('150', 'fast', 'medium', 80);
warbiker.attack();

// Car example
class Car1 {
   constructor(make, model, year) {
      this.make = make; // Property: brand of the car (e.g., Toyota)
      this.model = model; // Property: model of the car (e.g., Corolla)
      this.year = year; // Property: year the car was made
      this.isRunning = false; // Property: tracks if the car is running
   }

   // Method: start the car
   start() {
      if (!this.isRunning) {
         this.isRunning = true;
         console.log(`${this.make} ${this.model} started. Vroom vroom!`);
      } else {
         console.log(`${this.make} ${this.model} is already running.`);
      }
   }

   // Method: drive the car
   drive() {
      if (this.isRunning) {
         console.log(`${this.make} ${this.model} is driving.`);
      } else {
         console.log(`${this.make} ${this.model} needs to be started first.`);
      }
   }

   // Method: stop the car
   stop() {
      if (this.isRunning) {
         this.isRunning = false;
         console.log(`${this.make} ${this.model} stopped.`);
      } else {
         console.log(`${this.make} ${this.model} is already stopped.`);
      }
   }
}

// Create an instance of Car
const myCar = new Car1('Toyota', 'Corolla', 2020);
myCar.start(); // "Toyota Corolla started. Vroom vroom!"
myCar.drive(); // "Toyota Corolla is driving."
myCar.stop(); // "Toyota Corolla stopped."

// Building example
class Building {
   constructor(name, floors, location) {
      this.name = name; // Property: name of the building (e.g., Empire State)
      this.floors = floors; // Property: number of floors
      this.location = location; // Property: location of the building
      this.isOpen = false; // Property: tracks if the building is open
   }

   // Method: open the building
   open() {
      if (!this.isOpen) {
         this.isOpen = true;
         console.log(`${this.name} is now open. Welcome!`);
      } else {
         console.log(`${this.name} is already open.`);
      }
   }

   // Method: close the building
   close() {
      if (this.isOpen) {
         this.isOpen = false;
         console.log(`${this.name} is now closed.`);
      } else {
         console.log(`${this.name} is already closed.`);
      }
   }

   // Method: display building info
   displayInfo() {
      console.log(
         `${this.name} has ${this.floors} floors and is located in ${this.location}.`
      );
   }
}

// Create an instance of Building
const empireState = new Building('Empire State Building', 102, 'New York City');
empireState.displayInfo(); // "Empire State Building has 102 floors and is located in New York City."
empireState.open(); // "Empire State Building is now open. Welcome!"
empireState.close(); // "Empire State Building is now closed."
