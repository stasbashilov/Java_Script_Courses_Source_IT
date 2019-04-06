'use strict';

// ДОМАШНЕЕ ЗАДАНИЕ 02 ---------------------------------------------------

// задача 1
// let x = 0;
// let a = parseFloat(prompt("a"));;
// let b = parseFloat(prompt("b"));;

// if( a > b ) {
//     x = a + b / 2 * 4;
// } else if ( a = b ) {
//     x = 400;
// } else ( a < b ) 
//     x = a - b + 2 / b * 4;
// console.log(x)

// задача 1
// let x = 400;
// let a = parseFloat(prompt("a"));
// let b = parseFloat(prompt("b"));

// if( a > b ) {
//     x = a + b / 2 * 4;
// } else if ( a < b ) {
//     x = a - b + 2 / b * 4;
// }     
// console.log(x)

// задача 2 !!!!!!!!!!!!!!!!!!!!!!!!!

// решить

// задача 3
// let w = prompt("Введите номер дня недели", "");

// switch (w) {
//   case '1':
//     alert('Понедельник');
//     break;
//   case '2':
//     alert('Вторник');
//     break;
//   case '3':
//     alert('Среда');
//     break;
//   case '4':
//     alert('Четверг');
//     break;
//   case '5':
//     alert('Пятница');
//     break;
//   case '6':
//     alert('Суббота');
//     break;
//   case '7':
//     alert('Воскресенье');
//     break;
//   default:
//     alert('Не тупи');
// }

// задача 4

// let a = prompt('введи значение a', '');
// let b = prompt('введи значение b', '');

// if( a > b) {
//     alert(a);
// }else ( a < b ) 
//     alert(b);

// задача 5

// let a = prompt('введи значение a', '');
// let b = prompt('введи значение b', '');

// if( a > b) {
//     alert(a);
// }else if( a < b ) { 
//     alert(b);
// } else ( a===b )
//     alert('Они равны');

// задача 6 

// let  num = prompt('Введите номер', '');

// if( num >= 1 && num <= 20  ) {
//     alert('Первая парадная');
// }
// if( num >= 21 && num <= 48  ) { 
//     alert('Вторая парадная');
// }
// if( num >= 49 && num <= 90  ) { 
//     alert('Вторая парадная');
// }  
// if( num < 1 || num > 90 )
//     alert('Не тупи');

// задача 7

// let  login = prompt('Введите login', '');

// if( login === 'ivan' || login === 'alex' || login === 'petr' ) {

//     let  pass = prompt('Введите password', '');

//     if ( login === 'ivan' && pass === '334455'){
//         alert('Success');
//     } else if ( login === 'alex' && pass === '777'){
//         alert('Success');
//     } else if ( login ==='petr' && pass === 'b5678' ){
//         alert('Success');
//     }

// }else 
//     alert('Not registered')

// задача 8 

// let year = prompt('Введите год рождения')

// if ( year >= 16) {
//     alert('Добро пожаловать');
// }else {
//     alert('Вход воспрещен');
// }

//  задача 9

// let exp = prompt('Введите стаж');

// if ( exp < 3 ) {
//     alert('Ваша нодбавка = пустоте');
// } else if ( exp >= 3 || exp < 10  ) {
//     alert('Ваша нодбавка = 10%');
// } else if ( exp >= 10 || exp < 20  ) {
//     alert('Ваша нодбавка =20%');
// } else  if ( exp >= 20 ) 
//     alert('Ваша нодбавка = 25%');

// задача 10 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// решить



// ДОМАШНЕЕ ЗАДАНИЕ 03 ----------------------------------------------------

// задача 1 
// for(let num = 4; num <= 400; num++){
//     console.log(num);
// }

// задача 2

// for(let i = 4; i <= 13; i = i + 3){
//     console.log(i);
// }

// зачдача 3 

// let i = 654;

// while (i > 0) {
//     document.write(i--);
// }

// задача 4

// for(let i = 1983; i <= 2017; i++){
//     document.write(i);
// }

// задача 5

// for (let i = -4; i <= 100; i++) {
//     document.write(i)
// }

// задача 6

// решить

// задача 7 ???????????

// for (let i = 1000; i <= 2000; i++){
//     document.write("&#" + i);
// }

// задача 8

// var sum = 0;
// for (var i = 1; i <= 100; i++) {
//     sum += i;
// }
// document.write(sum);

// задача 9

// var multiplication = 0;
// for (var i = 1; i <= 50; i++) {
//     multiplication *= i;
// }
// document.write(multiplication);

// задача 10  ????????????????????

// var size = prompt('Введи длинну массива');
// var arr = [];
// var str = "x";

// for ( let i = 0; i < size; i++){
//     arr.push(str);
//     str += 'x';
// }
// document.write(arr)

// var arr = [];
// var str = 'x';
// for (var i = 0; i < 10; i++) {
// 	arr.push(str);
// 	str += 'x';
// }
// console.log(arr);

// задача 11

// var size = prompt('Введите размер массива')

// var arr = [];
// for (var i = 1; i < size; i++) {
// 	var str = '';
// 	for (var j = 0; j < i; j++) {
// 		str += i;
// 	}
// 	arr.push(str);
// }
// console.log(arr);

// задача 12

// function func(arr) {
// 	let sum = 0;
// 	for (let i = 0 ; i < arr.length; i++) {
// 		sum += arr[i];
// 		if (sum > 10) {
// 			return i + 1;
// 		}
// 	}
// }

// console.log(func([1, 2, 3, 4, 5, 6, 7, 8, 9]));  

// задача 13

// arr = [1, 2, 3, 4];
// arr2 = [];
// for(let i = arr.length - 1; i >= 0; i--) {
//   arr2.push(arr[i]);
// }

// console.log(arr2)

// задача 14 

// let arr = [9, 4, 56, -7, -4, -9, 12, 0, 27, 13];

// function isPositive(num) {
// 	if (num >=0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// let newArr = [];
// for (let i = 0; i <= arr.length; i++) {
// 	if (isPositive(arr[i])) {
// 		newArr.push(arr[i]);
// 	}
// }

// console.log(newArr);

// задача 15

// let arr = [9, 4, 56, -7, -4, -9, 12, 0, 27, 13];

// function isEven(num) {
// 	if (num % 2 == 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// let newArr = [];
// for (let i = 0; i <= arr.length; i++) {
// 	if (isEven(arr[i])) {
// 		newArr.push(arr[i]);
// 	}
// }

// console.log(newArr);

// задача 15

// let arr = [3, -5, 6, 8, 43, -87, 62, -34];

// let evenArr = arr.filter(function(elem){
//     return elem % 2 === 0;
// });

// console.log(evenArr);

// задача 16 

//  let arr = [1, 2, 3, 4, 5, 6];

//  let arr2 = arr.map(function(elem){
//      if (elem % 2 !== 0 ){
//         return elem + 1
//      }else{
//         return elem - 1;
//      }
         
//  });

//  console.log(arr2)

// задача 17

// let arr = [1, 2, 3, 4, 5, 6];

// ДОМАШНЕЕ ЗАДАНИЕ 4













