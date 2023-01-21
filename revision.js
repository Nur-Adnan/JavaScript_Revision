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

const firstName = 'Nur';
const lastName = 'Adnan';
console.log(firstName + ' ' + lastName);


// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;//x = x - 1
x--;//x = x - 1
console.log(x);


// Comparison operators

const oldAge = 5;
const presentAge = age + 13;
console.log(presentAge > oldAge,"He is 18+");

// Operator Precedence

const latestYear = 2037;
const ageNur = now - 1991;
const ageNeha = now - 2018;
console.log(now - 1991 > now - 2018);
let x1, y1;
x1 = y1 = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x1, y1);
const averageAge = (ageNur + ageNeha) / 2;
console.log(ageNur, ageNeha, averageAge);


// Coding Challenge #1

/*
Nur and Neha are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Nur's and Neha's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'NurHigherBMI' containing information about whether Nur has a higher BMI than Neha.
TEST DATA 1: Nurs weights 78 kg and is 1.69 m tall. Neha weights 92 kg and is 1.95 m tall.
TEST DATA 2: Nurs weights 95 kg and is 1.88 m tall. Neha weights 85 kg and is 1.76 m tall.
GOOD LUCK 😀
*/

const massNur = 78;
const heightNur = 1.69;
const massNeha = 92;
const heightNeha = 1.95;

const BMINur = massNur / heightNur ** 2;
const BMINeha = massNeha / (heightNeha * heightNeha);
const NurHigherBMI = BMINur > BMINeha;
console.log(BMINur, BMINeha, NurHigherBMI);


// Strings and Template Literals
const first_name = 'Nur';
const present_job = 'teacher';
const birth_year = 1991;
const present_year = 2037;
const nur = "I'm " + first_name + ', a ' + (present_year - birth_year) + ' year old ' + present_job + '!';
console.log(nur);
const nurNew = `I'm ${first_name}, a ${present_year - birth_year} year old ${present_job}!`;
console.log(nurNew);
console.log(`Just a regular string...`);

// using \n to create a new line
console.log('String with \n\
multiple \n\
lines');

// Using template literals to make new lines
console.log(`String
multiple
lines`);


// Taking Decisions: if / else Statements
const age_Nur = 15;
if (age_Nur >= 18) {
  console.log('Neha can start driving license 🚗');
} else {
  const yearsLeft = 18 - age_Nur;
  console.log(`Neha is too young. Wait another ${yearsLeft} years :)`);
}

// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Nur's BMI is higher than Neha's!" or "Neha's BMI is higher than Nur's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Nur's BMI (28.3) is higher than Neha's (23.9)!"
HINT: Use an if/else statement 😉
GOOD LUCK 😀
*/

const mass_nur = 95;
const height_nur = 1.88;
const mass_neha = 85;
const height_neha = 1.76;
const BMI_nur = mass_nur / height_nur ** 2;
const BMI_neha = mass_neha / (height_neha * height_neha);
console.log(BMI_nur, BMI_neha);
if (BMI_nur > BMI_neha) {
  console.log(`Nur's BMI (${BMI_nur}) is higher than Neha's (${BMI_neha})!`)
} else {
  console.log(`Neha's BMI (${BMI_neha}) is higher than Nur's (${BMI_nur})!`)
}

