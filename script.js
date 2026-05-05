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
