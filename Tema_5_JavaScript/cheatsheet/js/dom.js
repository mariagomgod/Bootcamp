console.clear();

//--------------------------DOM (Document Object Model)--------------------

// Basics
console.log(document);
console.log(document.domain);
console.log(document.URL);
document.title += " (DOM)";
console.log(document.title);

// Selectors
const family = document.getElementsByTagName("div");
console.log(family);

const grandParent = document.getElementById("grandparent");
console.log(grandParent);

const parents = document.getElementsByClassName("parent"); // HTML Collection
const parent1 = parents[0];
const parent2 = document.getElementsByClassName("parent")[1];
console.log(parent1, parent2);

const children = document.getElementsByClassName("child");
console.log(children);
console.log(children[2]);

let element = document.querySelector(".grandparent div");
console.log(element);

parent1.style.backgroundColor = "#333";
















//Array.from(family).forEach(item => console.log(item)); // Construyo un array desde HTML Collection 

//for (let familyMember of family) { // HTML Collection es iterable
//    console.log(familyMember);
//}