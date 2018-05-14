let val;

const list = document.querySelector('ul.collection')
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;


// Get child nodes - returns node list
val = list.childNodes;
val = list.childNodes[1].nodeType;

// --- node types ---
// 1 = Element
// 2 = Attribute
// 3 = Text Node
// 8 = Comment
// 9 = Document
// 10 = Doctype 

// Get children element nodes - returns html collection
val = list.children;
val = list.children[0];

list.children[1].textContent = 'hello';

// children of children
val = list.children[3].children[0];

val = list.firstChild;
val = list.firstElementChild;

val = list.lastChild;
val = list.lastElementChild;

val = list.childElementCount;

// Get Parent Node
val = listItem.parentNode;
val = listItem.parentElement.parentElement;

// get the sibling 
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.previousSibling;
val = listItem.previousElementSibling;



console.log(val);