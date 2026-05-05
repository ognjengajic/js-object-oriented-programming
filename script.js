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
