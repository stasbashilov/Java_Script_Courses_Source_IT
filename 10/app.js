'use strict';

class Helper {
    static sum(a, b) {
        return a + b;
    }
}

Helper.sum(2, 3);

class HelperOne {
    static sum(a, b, c) {
        return a + b + c;
    }
}

HelperOne.sum(2, 3, 4);
console.log(HelperOne.sum(2, 3, 4));

const sym = Symbol('private property');

const Person = (function () {

    class Person {
        constructor() {
            this.name = name;
            this[sym] = 'sddd';
        }

        getPrivateProperty() {
            return this[sym];
        }
    }
    return Person;
}());




const Person1 = (function () {

    class Person {
        constructor() {
            this.name = name;
            this[sym] = 'sddd';
        }

        getPrivateProperty() {
            return this[sym];
        }
    }
    return Person;
}());

const petya = new Person('Petya');
const petya1 = new Person('Petya');

console.log(petya.getPrivateProperty());
console.log(Reflect.ownKeys(petya));
console.log(Object.keys(petya));

// дескриптор посмотреть видос с занятия, прокси разобрать, симбол тип, имитация приватныхсвойств

Object.defineProperty(petya, 'age', {
    enumerable: false,
    value: 15,
})

console.log(petya);
console.log(Object.keys(petya));
console.log(Reflect.ownKeys(petya));
