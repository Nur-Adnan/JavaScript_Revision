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
GOOD LUCK ????
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
  console.log('Neha can start driving license ????');
} else {
  const yearsLeft = 18 - age_Nur;
  console.log(`Neha is too young. Wait another ${yearsLeft} years :)`);
}

// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Nur's BMI is higher than Neha's!" or "Neha's BMI is higher than Nur's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Nur's BMI (28.3) is higher than Neha's (23.9)!"
HINT: Use an if/else statement ????
GOOD LUCK ????
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

// Type Conversion and Coercion

// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(Number('Nur'));
console.log(typeof NaN);
console.log(String(23), 23);


// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');
let n = '1' + 1; // '11'
n = n - 1;
console.log(n);



// Truthy and Falsy Values

// 5 falsy values in JavaScript: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Nur'));
console.log(Boolean({}));
console.log(Boolean(''));
const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!');
}
let height = 0;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}

// Equality Operators: == vs. ===
const latest_age = '18';
if (age === 18) 
    console.log('You just became an adult :D (strict)');
if (age == 18) 
    console.log('You just became an adult :D (loose)');


const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 22 === 23 -> FALSE
  console.log('Cool! 23 is an amzaing number!')
} else if (favourite === 7) {
  console.log('7 is also a cool number')
} else if (favourite === 9) {
  console.log('9 is also a cool number')
} else {
  console.log('Number is not 23 or 7 or 9')
}

// Logical Operators

const hasDriversLicense = true; // A
const hasGoodVision = true; // B
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);
if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}

// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).
3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks ????
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.
TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK ????
*/

const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);
if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log('Dolphins win the trophy ????');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log('Koalas win the trophy ????');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
  console.log('Both win the trophy!');
} else {
  console.log('No one wins the trophy ????');
}

// The switch Statement

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}

// Statements and Expressions


// Statements
3 + 4
1991
true && false && !false
if (23 > 10) {
  const str = '23 is bigger';
}


// Expressions
const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}`);
// The Conditional (Ternary) Operator
const ag_e = 23;
const drink = age >= 18 ? 'wine ????' : 'water ????';
console.log(drink);
let drink2;
if (age >= 18) {
  drink2 = 'wine ????';
} else {
  drink2 = 'water ????';
}
console.log(drink2);
console.log(`I like to drink ${age >= 18 ? 'wine ????' : 'water ????'}`);

// When there is no variable, directly input values and calculate them then that is called statement
// When there are many statement in a variable then it is called a expression




// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement ???? (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'
TEST DATA: Test for bill values 275, 40 and 430
HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 ????
GOOD LUCK ????
*/

const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);



// Activating Strict Mode

let hasDriveringLicense = false;
const passTest = true;
if (passTest) 
  hasDriveringLicense = true;
if (hasDriveringLicense) 
  console.log('I can drive :D');


// Functions

function logger() {
  console.log('My name is Jonas');
}
// calling / running / invoking function
logger();
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
const num = Number('23');

// Function Declarations vs. Expressions


// Function declaration
function calcAge1(birthYeah) {
  return 2037 - birthYeah;
}
const age1 = calcAge1(1991);



// Function expression
const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
}
const age2 = calcAge2(1991);
console.log(age1, age2);


// Arrow functions
const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);


const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, 'Jonas')); 
console.log(yearsUntilRetirement(1980, 'Bob'));

// Functions Calling Other Functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}
function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));



// Reviewing Functions
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}
const yearsUntilRetirements = function (birthYeah, firstName){
  const age = calcAge(birthYeah);
  const retirement = 65 - age;
  if (retirement > 0) {
      console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
      console.log(`${firstName} has already retired ????`);
    return -1;
  }
}
console.log(yearsUntilRetirements(1991, 'Jonas'));
console.log(yearsUntilRetirements(1950, 'Mike'));


// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.
TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores ????

GOOD LUCK ????
*/

let scoreDolphin_s = calcAverage(44, 23, 71);
let scoreKoala_s = calcAverage(65, 54, 49);
console.log(scoreDolphin_s, scoreKoala_s);
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win ???? (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win ???? (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
}
checkWinner(scoreDolphin_s, scoreKoala_s);
checkWinner(576, 111);



// Introduction to Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);


const y = new Array(1991, 1984, 2008, 2020);
console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);


friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice']


const first_Name = 'Jonas';
const jonas = [first_Name, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);



// Exercise
const calcAge_s = function (birthYeah) {
  return 2037 - birthYeah;
}

const years = [1990, 1967, 2002, 2010, 2018];
const ages1 = calcAge_s(years[0]);
const ages2 = calcAge_s(years[1]);
const ages3 = calcAge_s(years[years.length - 1]);
console.log(ages1, ages2, ages3);

const ages = [calcAge_s(years[0]), calcAge_s(years[1]), calcAge_s(years[years.length - 1])];
console.log(ages);




// Basic Array Operations (Methods)
const friends = ['Michael', 'Steven', 'Peter'];


// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);
friends.unshift('John');// Take it to the first
console.log(friends);


// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);


friends.shift(); // First one remove
console.log(friends);
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));
friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));
if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}
