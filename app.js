/*
// alert('Hello Javascript!');
console.log('I am a conslole log');
var myVariable = 'Hi vars!';
console.log(myVariable);
console.log({key1:1, key2:2});
console.table({key1:"string value", key2:2});
console.error('you have made an error :D');
// console.clear();
console.warn("i'm warning you!");
console.log('You know what time it is!');
console.time("That's all folks!");
  console.log('I need more time!');
  console.log('I need more time!');
  console.log('I need more time!');
  console.log('I need more time!');
  console.log('I need more time!');
  console.log('I need more time!');
  console.log('I need more time!');
console.timeEnd("That's all folks!");
*/

// JS Variables var, let, const

// declare a variable 
var myVariableName = 'My Variable Value';
console.log(myVariableName);
// reassign the variable value
myVariableName = 'A New Assigned Value';
console.log(myVariableName);

// Initialize a var
var myCoolVar
console.log(myCoolVar); // should return undefined
// assing a value to a var
myCoolVar = 'I am not undefined anymore wohoo!';
console.log(myCoolVar);

// vars can only contain letters, numbers, _, $
// Can not start with a number

// naming conventions 
var camelCase = 'camelCaseLooksLikeThis';
var under_score = 'with_under_score_you_connect_like_this';
var PascalCase = 'WithPascalEveryFirstLetterIsCapital';
// Constants should be UPPER_CASE
var CONSTANT_VAR = 'this naming convention helps identify constants in js';


// LET
let variableName; // Initialized undefined
variableName = "new assigned value";
// initialized and set value
let myNewVar = "new variable with value assigned";

// CONST must have a value assigned it cannot be initialized undefined like LET and VAR
const name = 'const value cannot be reassigned';
const num = 12345;


// the data inside an object or array can change
const myConstObject = {
  name: 'this value can still change',
  numProperty: 12345,
}

const myConstArray = [1, 4, 7,,9]
// you can use methods to mutate the value
myConstArray.push(10);

console.log(myConstArray);


