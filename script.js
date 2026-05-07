'use strict';

const Person = function (firstName, birthYear) {
  console.log(this);
  this.firstName = firstName;
  this.birthYear = birthYear;
  /*
  //NOT TO DO
  this.calcAge = function () {
    console.log(2045 - this.birthYear);
  };
*/
};

const ognjen = new Person(`Ognjen`, 2001);
console.log(ognjen);

const john = new Person(`Johnatan`, 1978);
const jack = new Person(`Jack`, 2002);
console.log(john, jack);

const jay = `Jay`;

console.log(john instanceof Person);
console.log(jay instanceof Person);

//Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2045 - this.birthYear);
};

ognjen.calcAge();
john.calcAge();
jack.calcAge();

console.log(ognjen.__proto__);
console.log(ognjen.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(john));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = `Homo Sapiens`;
console.log(ognjen, john, jack);
console.log(ognjen.species, john.species, jack.species);

console.log(ognjen.hasOwnProperty(`firstName`));
console.log(ognjen.hasOwnProperty(`species`));

console.log(ognjen.__proto__);
console.log(ognjen.__proto__.__proto__);
console.log(ognjen.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [1, 2, 62, 63, 62, 6];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());
const h1 = document.querySelector(`h1`);
console.dir(x => x + 1);

//1. Challange
const Car = function (make, speed) {
  this.speed = speed;
  this.make = make;
};

Car.prototype.accelerate = function () {
  this.speed += 20;
  console.log(`acc ${this.make} speed ${this.speed}`);
};

Car.prototype.brake = function () {
  this.speed -= 10;
  console.log(`desc ${this.make} speed ${this.speed}`);
};

const bwm = new Car(`BWM`, 120);
const mercedes = new Car(`Mercedes`, 95);

bwm.accelerate();
bwm.accelerate();
bwm.accelerate();
bwm.accelerate();
bwm.brake();

//ES6 CLASSES

//class expression
//const PersonCL = class{}

//class declaration

class PersonCL {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2056 - this.birthYear);
  }
}

const ogi = new PersonCL(`Ognjen`, 2001);
console.log(ogi);
ogi.calcAge();

PersonCL.prototype.greet = function () {
  console.log(`Hello ${this.firstName}`);
};
ogi.greet();
console.log(ogi.__proto__ === PersonCL.prototype);
