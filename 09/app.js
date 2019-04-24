'use strict';

function User(name, email) {
    this.name = name;
    this.email = email;
    let age = 19; //скрытое свойство усли с const
    this.getAge = function () {
        return age;
    };

    this.setAge = function (value) {
        if (value > 0) {
            age = value;
        } else {
            console.log('error')
        }
    };
    // return this;
    this.sayHello = function () {
        console.log('Hello, my name is ${this.name}, ${age}')
    };

    const interval = setInterval(function () {
        age++;
        if (age === 30) {
            clearInterval(interval);
        };
    }, 2000);
}

const user = new User('Petya', 'petya@gmail.com');

console.log(user);
console.log(user.getAge());
user.sayHello();

function Human(name, age){
    this.name = name;
    this.age = age;
    this._gender = null;
}

Human.prototype.sayHello = function () {
    console.log(`My name is ${this.name}`)
};

const vasya = new Human ('Vasya', 93);

function Man(name, age, country){
    Human.apply(this, arguments);
    this.country = country;
    this._gender = 'male';
}

Man.prototype = Object.create(Human.prototype);
const man = new Man('Genry', 55, Ukraine);
console.log(man);
man.sayHello();

// es6 ----------------------------------------------

class SomeHuman {
    constructor(name, age){
        this.name = name;
        this.age = age;
        this._gender = null;
    }

    sayHello(){
        console.log('Hello, my name is ${this.name}')
    }

}

class SomeMan extends SomeHuman {
    constructor (name, age, country) {
        super(name, age);
        this._gender = 'male';
        this.country = country;
    }

    get gender () {
        return this._gender;
    }

    set gender (value) {
        this._gender = value;
    }

    walk () {
        console.log('Walk');
    }
}

const someMan = new SomeMan ('Kolya', 44, "Ukraine");

console.log(someMan.gender);
someMan.gender = 'dd';