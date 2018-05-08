/*
*
* Function Declerations
*
*/

function myFuncName(param = 'Default') {
  return `Hi ${param} I am the result of your function!`;
}

console.log(myFuncName('joe blow'));
console.log(myFuncName());

// Function Expressions

const funcyExp = function(e) {
  return e + e;
}

console.log(funcyExp('hey'));
console.log(funcyExp(3));

// IIFE Immediately Invokable Function Expression

(function(name) {
  console.log(`Hello ${name} IIFE Runs right away!`);
})('Student');

// Property Methods

const todo = {
  add: function() {
    return 'Add a new todo';
  },
  edit: function(id) {
    return `Edit a todo ${id}`;
  }
}

todo.delete = function(id) {
  return `Todo ${id} has been deleted`;
}

console.log(todo.add());
console.log(todo.edit(12));
console.log(todo.delete(12));





