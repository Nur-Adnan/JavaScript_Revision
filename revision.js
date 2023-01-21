'use strict';

// Values and Variables
let js = "amazing";
console.log(js);

// Variable name conventions
let nur_Adnan = "JS";
let $function = 25;
let person = "jonas";
let PI = 3.1415;
let myFirstJob = "Coder";
let myCurrentJob = "Teacher";
let job1 = "programmer";
let job2 = "problem solver";
console.log(myFirstJob);

// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);
// console.log(typeof true);
console.log(typeof javascriptIsFun);
javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);
let year;
console.log(year);
console.log(typeof year);
year = 1991;
console.log(typeof year);
console.log(typeof null);


// let, const and var

let age = 30;
age = 31;
const birthYear = 1991;
var job = 'programmer';
job = 'teacher'
console.log(job);

// Difference between let and var in javascript
/*
    Variables declared by let are only available inside the block where they're defined. Variables declared by var are available throughout the function in which they're declared.
*/

// Basic Operators
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2