// // // document.querySelector('.clear-tasks').addEventListener('click', function(e){
// // //   e.preventDefault();
// // // })

// // document.querySelector('.clear-tasks').addEventListener('click', onclick);

// // function onclick(e){
// //   // console.log('Clicked');

// //   let val;

// //   val = e;

// //   // Event target element
// //   val = e.target;
// //   val = e.target.id;
// //   val = e.target.className;
// //   val = e.target.classList;

// //   // Event type
// //   val = e.type;

// //   // Timestamp
// //   val = e.timeStamp;

// //   // Coordinates of the event relative to window
// //   val = e.clientX;
// //   val = e.clientY;

// //   // Coordinates of the event relative to element
// //   val = e.offsetX;
// //   val = e.offsetY;


// //   console.log(val);
// // }

// // MOUSE EVENTS

// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// // // CLICK
// // clearBtn.addEventListener('click', runEvent);
// // // DoubleClick 
// // clearBtn.addEventListener('dblclick', runEvent);
// // // Mousedown
// // clearBtn.addEventListener('mousedown', runEvent);
// // // MouseUp
// // clearBtn.addEventListener('mouseup', runEvent);

// // // MouseEnter
// // card.addEventListener('mouseenter', runEvent);
// // // MouseLeave
// // card.addEventListener('mouseleave', runEvent);
// // // MouseOver
// // card.addEventListener('mouseover', runEvent);
// // // MouseOut
// // card.addEventListener('mouseout', runEvent);
// // MouseMove
// // card.addEventListener('mousemove', runEvent);

// // // Event Handler
// // function runEvent(e){
// //   console.log(`EVENT TYPE: ${e.type}`);

// //   heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

// //   document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},55)`;
// // }


// // --- KEYBOARD AND INPUT EVENTS ---

// const form = document.querySelector('form');
// const taskInput = document.getElementById('task');
// const heading = document.querySelector('h5');

// // Clear input
// taskInput.value = '';

// // form.addEventListener('submit', runEvent);

// taskInput.addEventListener('keydown', runEvent);

// function runEvent(e){
//   console.log(`EVENT TYP: ${e.type}`);
  
//   console.log(e.target.value);

//   heading.innerText = e.target.value;

//   // // get Input value
//   // console.log(taskInput.value);
//   // e.preventDefault();
// }