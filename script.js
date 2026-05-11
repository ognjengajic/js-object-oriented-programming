'use strict';
/*
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
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2056 - this.birthYear);
  }

  get age() {
    return 2056 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(` `)) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log(`Class static method`);
  }
}

const walther = new PersonCL(`Walther Johnson`, 1995);
console.log(walther);
const ogi = new PersonCL(`Ognjen Gajic`, 2001);
console.log(ogi);
ogi.calcAge();

console.log(ogi.age);

PersonCL.prototype.greet = function () {
  console.log(`Hello ${this.fullName}`);
};
ogi.greet();
console.log(ogi.__proto__ === PersonCL.prototype);

//Getters and Setters

const account = {
  owner: `Jake`,
  movements: [100, 529, 293, 536],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    return this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 52;
console.log(account.movements);

//Static methods
Person.hey = function () {
  console.log(`Hello there!`);
  console.log(this);
};

Person.hey();
PersonCL.hey();

//Object.create()

const PersonProto = {
  calcAge() {
    return 2056 - this.birthYear;
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const mary = Object.create(PersonProto);
console.log(mary);
mary.name = `Mary Johnson`;
mary.birthYear = 1994;
console.log(mary.calcAge());

console.log(mary.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init(`Sarah Conor`, 1992);
console.log(sarah.calcAge());

//2. Challange

class carCL {
  constructor(maker, speed) {
    this.maker = maker;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 20;
    console.log(`acc ${this.maker} speed ${this.speed}`);
  }

  brake() {
    this.speed -= 10;
    console.log(`desc ${this.maker} speed ${this.speed}`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(s) {
    this.speed = s * 1.6;
  }
}

const bmwCL = new carCL(`BWM`, 110);

bmwCL.accelerate();
bmwCL.accelerate();
bmwCL.brake();

console.log(bmwCL.speedUS);
bmwCL.speedUS = 50;
console.log(bmwCL.speed);
*/
//Inheritance Between "Classes" - Constructor Functions
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2045 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`Hello, I'm ${this.firstName} and I study ${this.course}`);
};

const tom = new Student(`Tom`, 1992, `Math`);
console.log(tom);

tom.introduce();
tom.calcAge();

console.log(tom.__proto__);
console.log(tom.__proto__.__proto__);
console.log(tom.__proto__.__proto__.__proto__);

console.log(tom instanceof Object);
console.log(tom instanceof Person);
console.log(tom instanceof Student);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);


//3. Challange
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

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

const tesla = new EV(`Tesla`, 120, 23);
tesla.chargeBattery(90);
console.dir(tesla);
tesla.brake();
tesla.accelerate();

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed} with a charge of ${this.charge}`,
  );
};

tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();

//Inheritance Between "Classes" - ES6 Classes
class PersonCL {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2056 - this.birthYear);
  }

  get age() {
    return 2056 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(` `)) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log(`Class static method`);
  }
}

class StudentCL extends PersonCL {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`Hello, I'm ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `This is a new function that overwrites parent function calcAge()! :D`,
    );
  }
}

const johnatan = new StudentCL(`Johnatan Ferguson`, 1992, `Math`);
console.log(johnatan);
johnatan.introduce();
johnatan.calcAge();


const PersonProto = {
  calcAge() {
    return 2056 - this.birthYear;
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const peter = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`Hello my name is ${this.firstName}`);
};
const may = Object.create(StudentProto);
may.init(`May Fosbery`, 1992, `Computer Science`);
console.log(may);
may.introduce();
console.log(may.calcAge());
*/

//Practice example & Encapsulation

class Account {
  locale = navigator.language;
  bank = `Bankist`;
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    console.log(`Thank you for creating a new account`);
  }

  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdrawal(val) {
    this.deposit(-val);
    return this;
  }

  #aproveLoan(val) {
    //fake method
    console.log(`approved`);
    return true;
  }

  requestLoan(val) {
    if (this.#aproveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
    return this;
  }

  static test() {
    console.log(`This is static method!`);
  }
}

const acc1 = new Account(`Jake Johnson`, `EUR`, 536);

acc1.deposit(140);
acc1.withdrawal(100);
acc1.requestLoan(1000);
//should not be accessible from the outside
//acc1.aproveLoan(1000000);
//console.log(acc1.pin);

const movements = acc1
  .withdrawal(100)
  .deposit(40)
  .deposit(1000)
  .requestLoan(12000)
  .withdrawal(20)
  .getMovements();

console.log(acc1);
console.log(acc1.getMovements());
Account.test();
console.log(movements);
