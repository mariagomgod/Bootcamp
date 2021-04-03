// Apartado 1

const div = document.getElementById("div");
const p = document.createElement("p");
const p2 = document.createElement("p");

p.textContent = "Hola mundo";
p2.textContent = "Adiós mundo";

div.append(p, p2);

// Apartado 2

const button = document.getElementById("button");

button.addEventListener("click", function (e) {
    document.body.style.backgroundColor = "lightblue";
});

// Apartado 3

const listUrl = document.getElementsByTagName("li");
const image = document.getElementById("imagen");

const listImages = (e) => image.src = e.target.textContent;

listUrl[0].addEventListener("click", listImages);
listUrl[1].addEventListener("click", listImages);
listUrl[2].addEventListener("click", listImages);

// apartado 4

const input = document.getElementById("input");
const button2 = document.getElementById("button-2");
const parrafo = document.getElementById("parrafo");

const pressButton = () => parrafo.textContent = input.value;

button2.addEventListener("click", pressButton);

// apartado 4.2

const input_2 = document.getElementById("input-2");

const pressKey = () => parrafo.textContent = input_2.value;

input_2.addEventListener("keyup", pressKey);

// Apartado 5

const textArea = document.getElementById("textArea");
const parrafo_2 = document.getElementById("parrafo-2");

function pressKeyUser () {
    if (textArea.value.length > 15) {
       parrafo_2.textContent = textArea.value;
    } else {
        parrafo_2.textContent = "";
    }
} 
textArea.addEventListener("keyup", pressKeyUser);

// Apartado 6

const input_3 = document.getElementById("input-3");
const button_3 = document.getElementById("button-3");

function pressButton3 () {
    if (input_3.value % 2 != 0) {
        input_3.style.borderColor = "red";
    } else {
        input_3.style.borderColor = "revert";
    }
}

button_3.addEventListener("click", pressButton3);

// apartado 7

const ul = document.getElementById("ul");

for (let i = 1; i <= 10; i++) {
    const li = document.createElement("li");
    li.textContent = "Elemento " + i;
    ul.appendChild(li);
}

// apartado 8

const a = document.getElementById("link");
const button_4 = document.getElementById("button-4");

const pressButton4 = () => a.target = "_blank";

button_4.addEventListener("click", pressButton4);

// apartado 9

const select = document.getElementById("select");
const parrafo_3 = document.getElementById("parrafo-3");

const selectButton = (e) => parrafo_3.style.color = e.target.value;

select.addEventListener("click", selectButton);

// Apartado 11

const ul_1 = document.getElementById("ul-1");
const button_5 = document.getElementById("button-5");
const input_4 = document.getElementById("input-4");

const myArray = new Array();

function pressButton5() {
    const num = input_4.value;
    if (myArray.includes(num)) {
        alert("error");
    } else {
        const li = document.createElement("li");
        ul_1.prepend(li);
        li.textContent = num;
        myArray.push(num);
    }
}

button_5.addEventListener("click", pressButton5);

// Apartado 12

const button_6 = document.getElementsByClassName("btn")[0];

const pressButton6 = () => button_6.classList.toggle("btn");

button_6.addEventListener("click", pressButton6);











