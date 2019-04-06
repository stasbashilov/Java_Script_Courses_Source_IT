'use strict';

const age = 18;

if (age >= 18) {
    console.log('можно продать пивас!');
    if (age >= 21) {
        console.log('можно продать водку!');
    }
} else {
    console.log('нельзя');
}

if (age !== 18) {
    // code

}

const isAuth = false;

if (!isAuth) {
    // code
}

const isLog = 'test';

if (!!isLog) {
    // code
}

if (age === 18) {
    // code

} else if (age === 19) {
    // code
} else if (age === 20) {
    // code
}

if (age > 18 && age < 21) {
    console.log('водку нельзя, но можно пиво');

}

if (age > 18 || age < 21) {
    console.log('водку нельзя, но можно пиво');

}

switch (age) {
    case 18:
        console.log('можно пиво');

    case 19:
        console.log('можно пиво');

    case 20:
        console.log('можно пиво');

        break;

    default:
        console.log('default')
}

const message = age > 18 ? 'продаем' : 'нет';

console.log(message)

let num = 0;

while (num < 10) {
    console.log(num++);
    // num++;
}

while (true) {
    const x = (Math.floor(Math.random() * 100));
    console.log(x);
    if (x < 50) {
        break;
    }
}

do {
    console.log(num++);
} while (num < 10);

for (let num = 0; num < 10; num++) {
    if(num % 2 === 0){
        continue;
    }
    console.log(num);
}

// for (let a = 2; b < 10; a++){
//     for (let b = 2; b < 10; b++){
//         console.log(a * b);

//     }
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const numbersOld = new Array(10);

// for(let i = 0; i < numbersOld.length; i++){
//     numbersOld[i] = 5;
// }

// console.log(numbersOld);

// for(let index in numbers) {
//     console.log(index, numbers[index]);
// }

const array = [1, 2, 3, 4, 5, 6, 7]

array.push(44); /* добавит в конец массива */

const lastEl = array.pop(); /* удаляет и держит последний элемент */
const firstEl = array.shift();/* заберет и держит первый элемент */
array.unshift(3); /* добавит элементы в начало сколько угодно через запятую */ 
const partArray = array.slice(2); /* возвращает новый массив а старый не меняет не меняет массив копирует нужные элементы диапазон через запятую например с каого индекса и до конца или до указанного индекса*/
const newArray = array.slice();

array.splice(4, 2); /* первое это индекс, второе число колличество элементов третье число это то что поставить*/

// slice копирует
// splice удаляет определенный диапазон и может заменить значение
const index = array.indexOf(5); /*верннет индекс значения если не найдет вернет -1 */
const index = array.indexOf(3, 2); /*верннет индекс значения с второго если не найдет вернет -1 */
const lastIndex = array.lastIndexOf(5) /* вернет с конца */
array.includes(5) /* ищет элемент */
array.concat([2, 3, 4], 444) /* добавит числа в массив*/
array.concat(444) /* добавит числа в массив старый не меняет*/
array.join('-')/* превращает массив в строку разделит жлементы указанным разделителем */

// const c = 4;
// const v = 5;
// const n = 7;

const [c, v, n] = [4, 5, 7] 
//  создаст три переменных деструктуризация
const [c, v, n, ...other] = [4, 5, 7, 8, 9, 10] 
// в переменную other запишет массив из остальных чисел
// ...rest в массиве закидывает в массив
console.log(c, v, n, ...other);
// ...spread на выводе распаковывает
const t = [2, 3, 4, 5];
const f = [1, 2, 3, 4, 5, ...t];
console.log(f);

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

matrix [0][2] 
// доступ к нулевому массиву к тройке
for(let row = 0; row < matrix.length; row++){
    for(let col = 0; col < matrix[row].length; col++){
        console.log(matrix[row][col])
    }
}

const test = [];

for(let row = 0; row < 10; row++){
    test[row] = [];
    for(let col = 0; col < 10; col++){
        test[row][col] =( row + 1 ) * (col + 1)
        
    }
}
console.log(test)



function getRandomArray(N) {
    const randomArray = [];

    for(let index = 0; index < N; index++){
        randomArray[index] = Math.floor(Math.random() * 100);
    }
    return randomArray;
}

getRandomArray();

const randomArray = getRandomArray();

function summ(...args) {


}
summ(1, 2, 3)
// ...args rest оператор дает возможность использовать много аргументов при вызове