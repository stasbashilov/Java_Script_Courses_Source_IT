'use strict';

const func1 = (a, b) => a + b;

console.log(func1(2, 3));

function testCb(a, b, callback) {
    callback(a + b);
}

testCb(2, 6, function(res) {
    console.log(res);
});

// 

let array = [1, 3, 3, 34, 54, 65, 6, 4, 7];

const newArray = array.filter(function (item) {
    return item % 2 === 0;
});

const newArray = array.filter(item => item % 2 === 0);

// 

array.forEach(function (item, index) {

    console.log(item);
    console.log(index);

});

array.forEach(function (item, index) {

});

// 

function pow2(num) {
    return Math.pow(num, 2);
}

array = array.map(pow2);

array = array.map(item => Math.pow(item, 2));

// 

function generator(start = 1, step = 1) {
    let counter = start;
    return function () {
        return counter += step;
    }
}

const gen = generator (2, 3);
console.log(gen());

// 

function sum(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

// 

function* generator1() {
    let counter = 1;
    while (true) {
        yield ++counter;
    }
}

const gen1 = generator1();

console.log(gen1.next().value);

// 

function factorial(n) {
    if(n === 1 ){
        return 1
    }

    return n * factorial(n - 1);
}

console.log(factorial(5));

// 

let num = 56787;

const num = [1, 2, 3, 4, 5];

const summ = num.reduce(function (acc, currentItem) {
    return acc + currentItem;
}, 0);





