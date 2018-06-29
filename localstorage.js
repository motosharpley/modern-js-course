
// // set local storage item
// localStorage.setItem('key1', 'value1');

// // set session storage item
// sessionStorage.setItem('key1', 'value1');

// // remove from storage
// localStorage.removeItem('key1');

// // get from local storage
// const item = localStorage.getItem('key1');

// localStorage.clear();
// console.log(item);

// document.querySelector('form').addEventListener('submit', function(e){
//   const task = document.getElementById('task').value;

//   let tasks;

//   if(localStorage.getItem('tasks') === null){
//     tasks = [];
//   } else {
//     tasks = JSON.parse(localStorage.getItem('tasks')) ;
//   }

//   tasks.push(task);

//   localStorage.setItem('tasks', JSON.stringify(tasks));
//   alert('Task Saved');

//   e.preventDefault();
// })

// const tasks = JSON.parse(localStorage.getItem('tasks'));

// tasks.forEach(task => {
//   console.log(task);
// })