'use strict';

const bar = bind(user.sayHi, {
    firstName: 'Kolya'
})

function bind(func, context){
    return function (){
        return func.apply(context);
    }
}

function baz(num) {
    console.log(this, num);

}

baz(4);
const newBaz = bind(baz, 22);
newBaz(4)

function f1(){
    console.log([].slise().call(arguments));
};

f1(1, 2, 3, 4);


const a = "333"
const str = `Hello,${a} world`;

let str = "Hello, world";
// str[0] = 'k';

str = `K${str.slice(1)}`
console.log(str, str.length);

console.log('asd' > 'dsa');