// Single Element Selectors

// document.getElementById();
// document.getElementById().className;
// document.getElementById().style.background = '#f3f3f3';
// document.getElementById().innerHTML = '<li>new thingy</li>';

// const taskName = document.getElementById('element-id');

// taskName.style.background = '#333';


// document.querySelector('li').style.color = 'green';
// document.querySelector('li:nth-child(5)').style.color = 'green';
// document.querySelector('ul li').style.color = 'green';

// --- Multi Element Selectors ---

// document.querySelectorAll('li:nth-child(odd)').style.color = 'green';

// const items = document.getElementsByClassName('list-items');

// items[0].style.color = 'orange';
// items[3].textContent = 'Hi';

// const listItems =document.querySelector('ul').getElementsByClassName('list-items');
// console.log(listItems);

// let lis = document.getElementsByName('li');

// // Convert HTML Collection into Array
// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function(li, index){
//   console.log(li.className);
//   li.textContent = `${index}: Hello`;
// })

// console.log(lis);

// items = document.querySelectorAll('ul.collection li.collectio-item');

// items.forEach(function(item, index){
//   item.textContent = `${index}: Hello`;
// })

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function(li, index){
//   li.style.backgound = '#ccc';
// })

// for(let i=0; i < liEven.length; i++){
//   liEven[i].style.backgound = 'f4f4f4';
// }
