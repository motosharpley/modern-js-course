// REPLACE ELEMENT

// Create Element
const newHeading = document.createElement('h2');
// Add id
newHeading.id = 'task-title';
// New Text Node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old Heading
const oldHeading = document.getElementById('task-title');
// Parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);

// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[0].remove();

// Remove child element
list.removeChild(lis[3]);

// CLASSES AND ATTR
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0]

let val;

val = link.className;
val = link.classList;
val = link.classList[0];

link.classList.add('test');
link.classList.remove('test');
val = link;

val = link.getAttribute('href');
val = link.setAttribute('href', 'https://developer.mozilla.org');
link.setAttribute('title', 'MDN');
val = link.hasAttribute('title');
link.removeAttribute('title');
val = link;

console.log(val);