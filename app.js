// // /*
// // // alert('Hello Javascript!');
// // console.log('I am a conslole log');
// // var myVariable = 'Hi vars!';
// // console.log(myVariable);
// // console.log({key1:1, key2:2});
// // console.table({key1:"string value", key2:2});
// // console.error('you have made an error :D');
// // // console.clear();
// // console.warn("i'm warning you!");
// // console.log('You know what time it is!');
// // console.time("That's all folks!");
// //   console.log('I need more time!');
// //   console.log('I need more time!');
// //   console.log('I need more time!');
// //   console.log('I need more time!');
// //   console.log('I need more time!');
// //   console.log('I need more time!');
// //   console.log('I need more time!');
// // console.timeEnd("That's all folks!");
// // */

// // // JS Variables var, let, const

// // // declare a variable 
// // var myVariableName = 'My Variable Value';
// // console.log(myVariableName);
// // // reassign the variable value
// // myVariableName = 'A New Assigned Value';
// // console.log(myVariableName);

// // // Initialize a var
// // var myCoolVar
// // console.log(myCoolVar); // should return undefined
// // // assing a value to a var
// // myCoolVar = 'I am not undefined anymore wohoo!';
// // console.log(myCoolVar);

// // // vars can only contain letters, numbers, _, $
// // // Can not start with a number

// // // naming conventions 
// // var camelCase = 'camelCaseLooksLikeThis';
// // var under_score = 'with_under_score_you_connect_like_this';
// // var PascalCase = 'WithPascalEveryFirstLetterIsCapital';
// // // Constants should be UPPER_CASE
// // var CONSTANT_VAR = 'this naming convention helps identify constants in js';


// // // LET
// // let variableName; // Initialized undefined
// // variableName = "new assigned value";
// // // initialized and set value
// // let myNewVar = "new variable with value assigned";

// // // CONST must have a value assigned it cannot be initialized undefined like LET and VAR
// // const name = 'const value cannot be reassigned';
// // const numbers = 12345;


// // // the data inside an object or array can change
// // const myConstObject = {
// //   name: 'this value can still change',
// //   numProperty: 12345,
// // }

// // const myConstArray = [1, 4, 7,,9]
// // // you can use methods to mutate the value
// // myConstArray.push(10);

// // console.log(myConstArray);



// // /*
// // *     Data Types
// // *
// // */

// // // Primitive Data Types

// // // STRING can be wrapped in either double or single quotes
// // const dblQuotes = "Joe Blow";
// // const sngleQuotes = 'Joe Blow';

// // // NUMBER do not use quotes and include whole integers and floats or decimal point numbers in Javascript
// // const num = 123;

// // // Boolean is a true or false contitional
// // const isReady = true;

// // // NULL intentional empty value
// // const emptyVariable = null;

// // // UNDEFINED variables are undefined by default
// // let undefinedVariable;

// // // SYMBOL
// // const mySymbol = Symbol();

// // // TYPEOF operator can be used to determine the data type of a variable
// // console.log(typeof mySymbol);

// // // Reference Data Types - Objects

// // //ARRAYS are 0 indexed collections of data
// // const myArray = [1,2,3];

// // // OBJECT LITERAL stores key value pairs
// // const myObject = {
// //   myKey: "my string value",
// //   numKey: 123,
// // }

// // // DATE
// // const currentDate = new Date();



// // /*
// // *
// // *     String Methods and Concatentation
// // *
// // */

// // const firstName = 'Joseph';
// // const lastName = 'Blow';
// // const age = 40;
// // const str = 'Hello student you are awesome!';
// // const tags = 'html, css, javascript, web development';

// // let val;

// // val = firstName + lastName;

// // // Concatenation
// // val = firstName + ' ' + lastName;

// // // Append
// // val = 'Bryan';
// // val += 'Sharpley';

// // // Concatenation
// // val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// // // Escaping characters 
// // val = 'That\'s a great idea';

// // // Length 
// // val = firstName.length;


// // // concat()
// // val = firstName.concat(' ', lastName);

// // // Change Case
// // val = firstName.toUpperCase();
// // val = lastName.toLowerCase();

// // val = firstName[0];

// // // indexOf()
// // val = firstName.indexOf('o');
// // val = firstName.indexOf('e');

// // // charAt()
// // val = firstName.charAt('0');

// // // Get last character
// // val = firstName.charAt(firstName.length -1);

// // // substring()
// // val = firstName.substring(0, 2);

// // // slice()
// // val = firstName.slice(0,2);
// // val = firstName.slice(-3);

// // // split()
// // val = str.split(' ');
// // val = tags.split(',');

// // // replace()
// // val = str.replace('student', 'StudentName');

// // // includes()
// // val = str.includes('Hello');


// // // console.log(val);


// // /*
// // *   Template literals
// // *
// // *
// // */

// // const studentName = 'George';
// // const grade = 16;
// // const job = 'Web Developer';
// // const city = 'Las Vegas';
// // let html;

// // // With concatenation instead of template literals 
// // html = ' <ul><li>Student Name: ' + studentName + ' </li><li>grade: ' + grade + ' </li><li>Job: ' + job + ' </li><li>City: ' + city + '</li></ul>';

// // html =  ' <ul>' +
// //           ' <li>Student Name: ' + studentName + '</li>' + 
// //           ' <li>grade: '        + grade       + '</li>' +
// //           ' <li>Job: '          + job         + '</li>' + 
// //           ' <li>City: '         + city        + '</li>' +
// //         ' </ul> ';

// // //  document.body.innerHTML = html;

// // function hello() {
// //   return 'Hello'
// // }

// // //  With Template Literals
// // html = `
// //     <ul>
// //       <li>              ${hello()}      </li>
// //       <li>Student Name: ${studentName}</li>
// //       <li>Grade:        ${grade}      </li>
// //       <li>Job:          ${job}        </li>
// //       <li>City          ${city}       </li>
// //     </ul>
// //   `;

// // //  document.body.innerHTML = html;

// // /*
// // *
// // * Arrays and Array Methods
// // *
// // */

// // const numberArray = [1,2,3,4,5,6];
// // const newArray = new Array(2,4,6,8);
// // const stringArray = ['some', 'text', 'even multiple words','and the last item needs no comma'];
// // const mixedTypesArray = [33, 'strings', true, undefined, null, {a:3, b:6}, new Date()];

// // // console.log(mixedTypesArray);

// // let arrVal;

// // arrVal = Array.isArray(numberArray);
// // // Getting the length of an array tells you how many items it contains
// // arrVal = numberArray.length;
// // // You can access array items with thier index key
// // arrVal = numberArray[0]; //arrays are zero indexed
// // // insert into an array
// // numberArray[0] = 33;
// // // Find index of a value
// // arrVal = numberArray.indexOf(123);//if the item your looking for doesn't exist you will get -1

// // /*
// // *   Mutating Arrays
// // *
// // */

// // // The push method adds to the end of an array
// // numberArray.push(777);
// // // The unshift method adds to the beginning of an array
// // numberArray.unshift(111);

// // // the pop method removes an item from the end
// // numberArray.pop();
// // // the shift method removes an item from the beginning
// // numberArray.shift();
// // // Splice takes a starting index and number of items to remove 
// // numberArray.splice(2,3);
// // // reverse and array
// // numberArray.reverse();
// // // concatenate an two arrays together 
// // arrVal = numberArray.concat(newArray);

// // // Sorting arrays
// // arrVal = stringArray.sort();
// // arrVal = numberArray.sort();

// // // Using the compare function
// // arrVal =numberArray.sort(function(a,b) {
// //   return a - b;
// // })
// // // reverse sort
// // arrVal =numberArray.sort(function(a,b) {
// //   return b - a;
// // })

// // // Find method takes in a function
// // function isUnder50(num) {
// //   return num < 50;
// // }

// // arrVal =numberArray.find(isUnder50);


// // console.log(numberArray);
// // console.log(arrVal);


// // /*
// // *
// // *   Object Literals
// // *
// // */

// // const myObject = {
// //   myKey: 'My value',
// //   age: 33,
// //   myArray: ['array string', 10, 44],
// //   objInObject: {
// //     key1: 'value one',
// //     age: 'val 2'
// //   },
// //   getFunValue: function() {
// //     return 2018 - this.age;
// //   }
// // }

// // let val;

// // val = myObject;
// // val = myObject.myKey;
// // val = myObject['myKey'];
// // val = myObject.age;
// // val = myObject.myArray[1];
// // val = myObject.objInObject.age;
// // val = myObject.objInObject['key1'];
// // val = myObject.getFunValue();

// // console.log(val);

// // const people = [
// //   {name: 'joe', age: 22},
// //   {name: 'bob', age: 63}
// // ]

// // for(let i=0; i < people.length; i++) {
// //   console.log(people[i].name)
// // }


// /*
// *
// *   Dates and Time
// *
// */

// // let val;

// let today = new Date();
// let birthday = new Date('1-13-1999 10:31:00');
// birthday = new Date('May 21 1969');
// birthday = new Date('4/15/1976');
// val = birthday;

// val = today.getMonth();
// val = today.getDate();
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getMilliseconds();
// val = today.getTime();


// console.log(val);
