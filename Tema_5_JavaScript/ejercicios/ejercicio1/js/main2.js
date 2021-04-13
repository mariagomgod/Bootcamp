// Apartado 1

const div = document.getElementById("div");
const p1 = document.createElement("p");
const p2 = document.createElement("p");

p1.textContent = "Hola mundo";
p2.textContent = "Adiós mundo";

div.append(p1, p2);

// Apartado 2

const button = document.getElementById("button");

button.addEventListener("click", function () {
    document.body.style.backgroundColor = "lightblue";
});

// Apartado 3

const listImages = document.getElementsByTagName("li");
const image = document.getElementById("imagen");

const changeImage = e => image.src = e.target.textContent;

/* listImages[0].addEventListener("click", changeImage);
listImages[1].addEventListener("click", changeImage);
listImages[2].addEventListener("click", changeImage); */

Array.from(listImages).forEach(element => {
    element.addEventListener("click", changeImage);
});

// Apartado 4

const input = document.getElementById("input");
const button_2 = document.getElementById("button-2");
const parrafo_2 = document.getElementById("parrafo");

const textInput = () => {
    parrafo_2.textContent = input.value;
    input.value = "";
}

button_2.addEventListener("click", textInput);

// Apartado 4.2

const input_2 = document.getElementById("input-2");

const textInput2 = () => parrafo_2.textContent = input_2.value;

input_2.addEventListener("input", textInput2);

// Apartado 5

const textArea = document.getElementById("textArea");
const parrafo_3 = document.getElementById("parrafo-2");

function textArea1() {
    if (textArea.value.length > 15) {
        parrafo_3.textContent = textArea.value;
    } else {
        parrafo_3.textContent = "";
    }
}

textArea.addEventListener("input", textArea1);

// Apartado 6

const input_3 = document.getElementById("input-3");
const button_3 = document.getElementById("button-3");

function validateInput() {
    if (input_3.value % 2 != 0) {
        input_3.style.border = "4px solid red";
    } else {
        input_3.style.borderColor = "revert";
    }
}

button_3.addEventListener("click", validateInput);

// Apartado 7

const ul = document.getElementById("ul");

for (let i = 0; i < 10; i++) {
    const li = document.createElement("li");
    li.textContent = `Elemento ${i}`;
    ul.appendChild(li);
}

// Apartado 8

const link = document.getElementById("link");
const button_4 = document.getElementById("button-4");

const linkButton = () => link.target = "_blank";

button_4.addEventListener("click", linkButton);

// Apartado 9

const parrafo_4 = document.getElementById("parrafo-3");
const select = document.getElementById("select");

function selectColor(e) {
    parrafo_4.style.color = e.target.value;
}

select.addEventListener("change", selectColor);

// Apartado 10

const button_5 = document.getElementById("button-5");
const inputNumero = document.getElementById("num");
const ul_2 = document.getElementById("ul-1");
const totales = document.getElementById("totales");
const pares = document.getElementById("pares");
const impares = document.getElementById("impares");

function getRandomNumber() {
    const aleatorio = Math.floor(100 * Math.random());
    totales.textContent++;
    if (aleatorio % 2 === 0) {
        pares.textContent++;
    } else {
        impares.textContent++;
    }
}

button_5.addEventListener("click", getRandomNumber);

// Apartado 11

const numList = document.getElementById("ul-1");
const input_4 = document.getElementById("input-4");
const button_6 = document.getElementById("button-6");

const myArray = [];

function numExist() {
    const num = input_4.value;
    if (myArray.includes(num)) {
        alert("Error!");
    } else {
        const list = document.createElement("li");
        numList.prepend(list);
        list.textContent = num;
        myArray.push(num);
    }
}

button_6.addEventListener("click", numExist);

// Apartado 12

const button_7 = document.getElementsByClassName("btn")[0];

button_7.addEventListener("click", () => button_7.classList.toggle("btn"));

// Apartado extra

const buttons = document.getElementsByClassName("btn-1");

const colorButton = e => e.target.style.backgroundColor = "red" ;

Array.from(buttons).forEach(element => {
    element.addEventListener("click", colorButton)
});



