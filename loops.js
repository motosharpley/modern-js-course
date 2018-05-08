/*
*   Loops
*
*/

// For Loops
for(let i=0; i < 10; i++){
  if(i == 2) {
    console.log('2 is awesome');
    continue;
  }
  console.log(i);

  if(i === 5) {
    console.log('Stop the looping already!');
    break;
  }
  console.log(i);
}


// While Loops

let i = 0;

while(i < 10) {
  console.log(i);
  i++;
}

// Do While loops always run at least once

let j = 11;

do {
  console.log(i);
  j++
}

while(j < 10);


/*
*   Looping Over Arrays
*
*/

const cars = ['chevy', 'lotus', 'mercedes', 'toyota'];

// for(let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// forEach
cars.forEach(function(car) {
  console.log(car);
})

// Map
const users = [
  {id:1, name: 'Bob'},
  {id:2, name: 'Jane'},
  {id:3, name: 'Joe'}
];

const ids = users.map(function(user) {
  return user.id;
})

console.log(ids);

// For .. in 

const user = {
  firstName: 'Joe',
  lastName: 'Blow',
  age: 69
}

for(let x in user) {
  console.log(`${x} : ${user[x]}`);
}