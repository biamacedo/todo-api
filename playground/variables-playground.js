// var person = {
// 	name: 'Andrew',
// 	age: 21
// };

// function updatePerson (obj) {
// 	// obj = {
// 	// 	name: 'Andrew',
// 	// 	age: 24
// 	// };
// 	obj.age = 24;
// }

// updatePerson(person);
// console.log(person);

// Array Example
var grades = [15, 88];

function addGrades (gradesArr) {
	gradesArr.push(55);
	debugger;

	// gradesArr = [12, 33, 99];
}

addGrades(grades);
console.log(grades);

// === Using Debugger! ===
// D:\Web Development\NodeJS\Udemy\node-course\todo-api>node variables-playground.j
// s
// [ 15, 88, 55 ]

// D:\Web Development\NodeJS\Udemy\node-course\todo-api>node debug variables-playgr
// ound.js
// < Debugger listening on port 5858
// debug> . ok
// break in D:\Web Development\NodeJS\Udemy\node-course\todo-api\variables-playgrou
// nd.js:18
//  16
//  17 // Array Example
// >18 var grades = [15, 88];
//  19
//  20 function addGrades (gradesArr) {
// debug> cont
// break in D:\Web Development\NodeJS\Udemy\node-course\todo-api\variables-playgrou
// nd.js:22
//  20 function addGrades (gradesArr) {
//  21     gradesArr.push(55);
// >22     debugger;
//  23
//  24     // gradesArr = [12, 33, 99];
// debug> repl
// Press Ctrl + C to leave debug repl
// > gradesArr
// [ 15, 88, 55 ]
// > gradesArr.push(13);
// 4
// > gradesArr
// [ 15, 88, 55, 13 ]
// > cont
// ReferenceError: cont is not defined
// debug> cont
// < [ 15, 88, 55, 13 ]
// debug> kill
// program terminated
// debug> quit

// D:\Web Development\NodeJS\Udemy\node-course\todo-api>