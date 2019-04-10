'use strict';

// function writeWord(num) {

//     if (num >= 1 && num <= 100) {

//         if (num % 3 === 0 && num % 10 === 0) {

//             console.log("TriTon");

//         } else if (num % 3 === 0 ) {

//             console.log("Tri");

//         } else if (num % 10 === 0 ) {

//             console.log("Ton");

//         } else console.log(num);

//     } else console.log(num);
// }

// writeWord(30);

// // OBJECTS OBJECTS OBJECTS OBJECTS OBJECTS OBJECTS OBJECTS OBJECTS OBJECTS OBJECTS OBJECTS 

const friends = [1, 2, 3, 4];

const METHOD_NAME = 'test';

const obj = {
    // friends: friends,
    friends, /* es 6 */
    username: 'Petya',
    "userName": 'Petya',
    age: 48,
    [METHOD_NAME]: function () {
        console.log ('Rap')
    },
    // log: function () {

    // }
    log(){

    },
};
obj.test();
obj[METHOD_NAME]();
console.log(obj.age);
console.log(obj["age"]);

obj.age = 49;
obj['age'] = 50;

console.log(obj.age);
console.log(obj["age"]);

const key = 'username';
console.log(obj[key]);

const data = [
    {
        country: 'Ukraine',
        message: 'ukr',
    },
    {
        country: 'France',
        message: 'vnvnvn',
    },
    {
        country: 'France',
        message: 'ccmcmcm',
    },
];

const countries = {};

for(let mess of data) {
    if (!countries.hasOwnProperty(mess.country)) {
        countries[mess.country] = [];
    } 
     countries[mess.country].push(mess.message);
}

console.log(countries);
console.log(Object.keys(countries));
console.log(Object.values(countries));

for(let key in countries) {
    console.log(key, countries[key].lenght);
}