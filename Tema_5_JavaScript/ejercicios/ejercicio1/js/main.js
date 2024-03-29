// Apartado 1 - Partimos de un HTML con un div vacío.
// Con JS, añadir dos elementos p con un texto dentro.

const contenedor = document.getElementById("mainContainer");

const p = document.createElement("p");
const p2 = document.createElement("p");

p.textContent = "Hola mundo";
p2.textContent = "Adiós mundo";

contenedor.append(p, p2); // se pone append a secas para añadir varios elementos. Si es uno por un sería con appendChild



// Apartado 2 - Al pulsar un botón, cambiar el color del fondo del cuerpo de HTML.

const button = document.querySelector("button");

button.addEventListener("click", function () {
    document.body.style.backgroundColor = "red";
});



// Apartado 3 - Partimos de un HTML con una lista de 3 URLs (texto) de imágenes 
// y en element img. Al hacer click en cada URL, cambiará la imagen a la que 
//contenga dicha URL.

const listItems = document.getElementsByTagName("li");
const image = document.querySelector("img");

const changeImage = (e) => image.src = e.target.textContent; // target es el evento sobre el que se ha hecho click. Es el nodo que dispara el evento.

listItems[0].addEventListener("click", changeImage);
listItems[1].addEventListener("click", changeImage);
listItems[2].addEventListener("click", changeImage);

// Otra opción:
// const list = document.querySelector("ul");
//const image = document.querySelector("img");

//const changeImage = e => image.src = e.target.textContent;

//list.addEventListener("click", changeImage);



// Apartado 4.1 - Añadir un input de tipo texto y un botón. Al pulsar el botón debe
// escribirse el texto del input en un párrafo.

const parrafo = document.getElementById("parrafo-1");
const input = document.getElementById("input-1");
const button_4 = document.getElementById("button-1");

const textInput = () => {
    parrafo.textContent = input.value;
    input.value = ""; // se pone para una vez rellenado el input y darle al botón, se limpie el input.
}

button_4.addEventListener("click", textInput);

// Apartado 4.2 - Añadir un nuevo input pero esta vez cambiará el texto con cada 
// pulsación de tecla del usuario.

const input_2 = document.getElementById("input-2");

const textInput2 = () => parrafo.textContent = input_2.value;

input_2.addEventListener("input", textInput2);



// Apartado 5 - De forma similar al anterior, pero para un textarea y validará si 
// lo introducido es mayor de 15 caracteres.

const textArea = document.getElementById("textArea");
const parrafo_2 = document.getElementById("parrafo-2");

function textArea1() {
    if (textArea.value.length > 15) {
        parrafo_2.textContent = textArea.value;
    } else {
        parrafo_2.textContent = "";
    }
}

textArea.addEventListener("input", textArea1);



// Apartado 6 - Añadir un input de tipo texto con leyenda: "Escribir un número par".
// Añadir un botón. Al pulsar el botón nos validará si el número es par o no. En caso
// negativo, cambiar los bordes del input a rojo. Para revertir el estado de una 
// propiedad, podemos utilizar el valor "revert" o dejarla vacía.

const input_3 = document.getElementById("input-3");
const button_6 = document.getElementById("button-2");

function pressButton() {
    if (input_3.value % 2 != 0) {
        input_3.style.border = "4px solid red";
    } else {
        input_3.style.borderColor = "revert"; 
    }
}

button_6.addEventListener("click", pressButton);



// Apartado 7 - Partiendo de una lista ul, crear 10 li con un texto indicando el
// número del elemento ("Elemento X") usando un bucle for.

const ul = document.createElement("ul");
const apartado8 = document.getElementById("apartado8");
document.body.insertBefore(ul, apartado8);

for (let i = 1; i <= 10; i++) {
    const li = document.createElement("li");
    li.textContent = "Elemento " + i;
    ul.appendChild(li);
}



// Apartado 8 - Crear un enlace y un botón. Si pulso el enlace se me abre la URL en
// la misma página. Si pulso primero el botón y luego el enlace, se me abre en una 
// nueva pestaña.

const a = document.getElementById("link");
const button_8 = document.getElementById("button-4");

const clickButton = () => a.target = "_blank";

button_8.addEventListener("click", clickButton);



// Apartado 9 - Añadir un párrafo y un select con 5 opciones de colores: negro, blanco,
// rojo, amarillo, verde y azul. Al seleccionar un color del select, cambiar el color
// del párrafo.

const select = document.getElementById("select");
const parrafo_3 = document.getElementById("parrafo-3");

select.addEventListener("change", function (e) {
    parrafo_3.style.color = e.target.value; // el e.target son las opciones del select
});


// Apartado 10 - Incluir un botón que al pulsarlo genere un número aleatorio y mantenga en 
// una lista actualizada, el número de elementos que se han generado, los que son pares y
// los que son impares.

const button_10 = document.getElementById("button-5");
const totales = document.getElementById("totales");
const pares = document.getElementById("pares");
const impares = document.getElementById("impares");
const p3 = document.getElementById("num");

function getRandomNumber() {
    const aleatorio = Math.ceil(100 * Math.random());
    totales.textContent++;
    if (aleatorio % 2 === 0) {
        pares.textContent++;
    } else {
        impares.textContent++;
    }
    p3.textContent = "El número generado es: " + aleatorio;
}

button_10.addEventListener("click", getRandomNumber);


// Apartado 11 - Construir una lista que tenga números. Añadir un input donde poder añadir
// números y un botón. Al pulsar el botón, si el número ya existe en la lista, mostrar un 
// mensaje de error, si no existe, lo añadirá al principio.

const ul_2 = document.getElementById("ul-2");
const input_4 = document.getElementById("input-4");
const button_11 = document.getElementById("button-6");

const myArray = [];

function addNumber() {
    const num = input_4.value;
    if (myArray.includes(num)) {
        alert("error");
    } else {
        const li = document.createElement("li");
        ul_2.prepend(li);
        li.textContent = num;
        myArray.push(num); // rellenamos el array porque tenemos que recordar más de un objeto
    }
}

button_11.addEventListener("click", addNumber);


// Apartado 12 - Crearemos una clase .btn en CSS que le de ciertos estilos a un botón. Al
// hacer click en el botón haremos "toggle" o alternaremos esa clase, es decir, si está 
// presente la quitaremos y si no está, la añadiremos.

const button_12 = document.getElementsByClassName("btn")[0]; 

button_12.addEventListener("click", () => button_12.classList.toggle("btn"));


// Apartado extra - Refactorizar el código con un único forEach.

const buttons = document.getElementsByClassName('btn-1'); // Devuelve HTM Collection // Si utilizáramos 
//querySelector o querySelectorAll, devuelve un NodeList que tiene disponible forEach.

Array.from(buttons).forEach(element => {
    element.addEventListener('click', () => element.style.backgroundColor = "red");
});


















