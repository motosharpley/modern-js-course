/*
*   Conditionals
*
*/

// if(condition is true) {
//   then perform this task;
// } else {
//   fall back to this action;
// }

// when comparing values == does not check the data type === does check data type
let id = '100';

// Equal to value
if(id == 101) {
  console.log('Equal');
} else {
  console.log('Not Equal');
}

// Not Equal to
if(id != 101) {
  console.log('Not Equal');
} else {
  console.log('Equal');
}

id = 101;

// Equal to value and data type
if(id === 101) {
  console.log('Equal');
} else {
  console.log('Not Equal');
}

// Not Equal to
if(id !== 101) {
  console.log('Not Equal');
} else {
  console.log('Equal');
}

// Test if undefined
if(typeof id !== 'undefined') {
  console.log(`The ID is ${id}`);
} else {
  console.log('ID is not defined');
}

// IF ELSE
const color = 'red';

if(color === 'red') {
  console.log('Color is Red');
} else if(color === 'blue') {
  console.log('Color is Blue')
} else {
  console.log('It is not any of those colors');
}

// Logical Operators && = and || = or

const name = 'George';
const age = 21;

if(age > 0 && age < 21) {
  console.log(`${name} you are not yet old enough to buy beer!`)
} else if(age >= 21) {
  console.log(`${name} Here is your beer`);
} else {
  console.log(`Silly ${name} you aren't even born yet`);
}

if(age < 18 || age > 66) {
  console.log(`${name} is not within the age group`);
} else {
  console.log(`${name} is the appropriate age.`)
}

// Ternary Operator
console.log(id === 100 ? true : false);