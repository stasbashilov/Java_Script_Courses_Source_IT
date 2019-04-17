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


const [a, b] = [1, 2];

const {prop1, prop2, ...other} = {
    prop2: 'eee', 
    prop1: 'rrr',
    prop4: 'ttt',
};

function foo({a, b}) {
    const sum = a + b;
    const mult = a * b;
    return {sum, mult};
};

const testObj = {
    a: 10,
    b: 15,
    c: 36
};

const { sum, mult } = foo(testObj);

const { aa: {bb} } = {
    aa: {
        bb: 'ddd'
    }
}

console.log(bb);

const user = {
    firstName: 'Vasya',
    lastName: 'Pupkin',
    friends: [1, 2, 3],
    fullName() {

        function bazz() {
            console.log(this);
        }
        bazz();
        // у функции которая не метод нет this
        this.friends.forEach ((item) => {
            console.log(this);
        });
        // у стрелочной функции нет своего контекста
        // user.firstName + '' + user.lastName
        return `${this.firstName} ${this.lastName}`;
    }
};

// в данном случае this это ссылка на сам обьект
console.log(user.fullName());


function bar() {
    console.log(this);
}
bar();

// call apply рассмотреть для привязки контекста


