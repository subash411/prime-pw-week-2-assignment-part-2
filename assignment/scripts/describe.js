// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We create variable called name and we set its value as Dane.
// We check if the name is exact same value as Mary but it is not as our previous value was Dane.
//As the name value is not exact same as Mary we console log 'How do you do?'
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
//First we cerate two varialble name secret and code, where we put value of code as 123.
//Then if the code variable is exactly equal to 123
//the secret value changes to super and the value of code variable doubles up to 246.
// If we check the variable code is greater than 250, which it is not.
// then we can console log secret and in in console we can see 'super'.
//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
//here we creater three variables isStudent who's value is true, age with the value 34 and zip 55407.
//when we check if the value of isStudent is exactly equalto true and zip is greaterthan 80000,
//the value does not match to the condition, so we do not have to console log"your'e students at west Coast.
//if we check the value of isStudnt is exactly equalto is false and age is less than 30, it does not match either,
//so we can skip console log 'whar are your hobbies' as well, but when we try do check conditional if isStudent
//value is exactly equalto true then it matches our value of isStudnt mateches so we can console log'welcome to prime'
//but console log 'How about weather?' does not match any variables, we do not need to console log it.
//let isStudent = true;
//let age = 34;
//let zip = 55407;

//if (isStudent === true && zip > 80000 ) {
  //console.log(`You're a student on the West Coast!`);
//} else if (isStudent === false || age < 30) {
  //console.log('What are your hobbies?');
//} else if (isStudent === true) {
  //console.log('Welcome to Prime!');
//} else {
  //console.log('How about the weather?')
//}

//*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'
//colorOne = 'red';, instructions asks for colorOne = 'blue';
//colorTwo = 'blue';, instructions ask for colorTwo = 'red';

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;
if (mix === true) {,simple way is (mix){
//add colorTwo = 'purple'; beneath colorOne = 'purple', instructions asks for both set to purple

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
//change const time = 4;, instructions ask for let time = 4;
let temp = 40;
const time = 4;
// change ||, instructions ask for if (temp > 39 && time >= 4) {
if (temp > 39 || time >= 4) {
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;
//switch minAge and age, instructions asks for if (age >= minAge) {
//change console.log('no entry');, instructions aks for console.log('enter');

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
