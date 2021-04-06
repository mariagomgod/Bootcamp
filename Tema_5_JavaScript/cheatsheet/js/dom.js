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

const changeBackground = (element, color) => element.style.backgroundColor = color;

//changeBackground(children[0], "#333");
//changeBackground(parent1, "red");
//changeBackground(parent2.children[1], "blue");
//changeBackground(children[0].parentNode.parentNode, "#ddd"); // cambia el abuelo

//changeBackground(parent1.children[1].previousElementSibling, "red"); //previousElementSibling selecciona el elemento hermano anterior

//changeBackground(grandParent.children[1].previousElementSibling.lastElementChild, "green");


// Propiedades / Properties

//children[0].innerHTML = "Child 1 v2";

console.log(children[0].innerHTML); // Imprime etiquetas
console.log(children[0].textContent); // Ignora etiquetas HTML, e imprime solo texto

console.clear();

console.log("Classlist: ", parent1.classList); //classList te imprime todas las clases que aparezcan en el HTML
parent1.classList.remove("bg-dark");
console.log("Classlist: ", parent1.classList);
parent1.classList.add("bg-red");
console.log("Classlist: ", parent1.classList);
parent1.className = "bg-dark" // se utiliza para crear varias cosas a la vez o vaciar todo
parent1.classList.toggle("bg-red"); // toggle, si no tiene la clase la crea y si la tiene la elimina

parent1.setAttribute("name", "nombre-parent1"); //añade un atributo donde queramos en el HTML


// Create / Remove elements

let myDiv = document.createElement("div");
myDiv.id = "new Div";
myDiv.classList.add("child");
myDiv.textContent = "child 2.5"; // <div id="new Div" class="child">child 2.5</div>

let myDiv2 = myDiv;

parent2.appendChild(myDiv2);
parent1.appendChild(myDiv); // MISMO nodo con dos nombres diferentes. Un nodo NO puede existir en dos sitios a la vez.

myDiv2 = myDiv.cloneNode(true); // Creamos un nuevo nodo a partir del original. Esta es la forma correcta.
parent2.appendChild(myDiv2);
myDiv2.textContent = "Child 5";

myDiv.remove();

let myDiv3 = myDiv.cloneNode(true);
parent2.before(myDiv3);
parent2.after(myDiv.cloneNode(true));

// Ejercicio. Crear una función que me devuelva un nodo nuevo y que reciba etiqueta e ID

function createNode(label, id) {
    let newNode = document.createElement(label);
    newNode.id = id;

    return newNode;
}

let newDiv = createNode("div", "identificador1"); // <div id="identificador1"></div>
let table = createNode("table", "identificador2"); // <table id="identificador2"></table>

parent2.appendChild(newDiv);
parent2.appendChild(table);

console.clear();

// Events / Eventos

const colorButton = document.getElementsByTagName("button")[0];

colorButton.addEventListener("click", function (event) {
    console.log(event);
    console.log(event.target);
    console.log(event.target.tagName);

    if (event.ctrlKey) {
        document.body.classList.toggle("bg-red"); // toggle solo se puede aplicar en classList
    }
    console.log(`X: ${event.clientX} | Y: ${event.clientY}`);
    console.log(`Alt: ${event.altKey}. Shift: ${event.shiftKey}. Ctrl: ${event.ctrlKey}`);
});

const emailInput = document.querySelector("#emailInput"); // querySelector te devuelve el elemento directamente

emailInput.addEventListener("focus", inputListener);
emailInput.addEventListener("blur", inputListener);

function inputListener (e) { // e = event
    console.log("Tipo de evento: ", e.type);
    
    if (e.type === "focus") {
        e.target.classList.add("bg-red");
    } else if (e.type === "blur") {
        e.target.classList.remove("bg-red");
    }
}

const changeTitle = e => {
    document.querySelectorAll("h1")[2].textContent = emailInput.value; // Propiedad value importante
}

emailInput.addEventListener("keydown", inputListener);
emailInput.addEventListener("keyup", changeTitle);

const container = document.getElementById("container");

container.addEventListener("mouseover", inputListener);
container.addEventListener("mouseout", inputListener);

function coords (e) {
    document.querySelectorAll("h1")[3].textContent = `X: ${e.clientX} | Y: ${e.clientY}`;
}

document.body.addEventListener("mousemove", coords);





















//Array.from(family).forEach(item => console.log(item)); // Construyo un array desde HTML Collection 

//for (let familyMember of family) { // HTML Collection es iterable
//    console.log(familyMember);
//}