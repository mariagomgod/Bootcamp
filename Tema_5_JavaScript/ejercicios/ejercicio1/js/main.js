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

button.addEventListener("click", function (e) {
    document.body.style.backgroundColor = "red";
});



// Apartado 3 - Partimos de un HTML con una lista de 3 URLs (texto) de imágenes 
// y en element img. Al hacer click en cada URL, cambiará la imagen a la que 
//contenga dicha URL.

const listItems = document.getElementsByTagName("li");
const image = document.querySelector("img");

const changeImage = (e) => image.src = e.target.textContent;

listItems[0].addEventListener("click", changeImage);
listItems[1].addEventListener("click", changeImage);
listItems[2].addEventListener("click", changeImage);



// Apartado 4.1 - Añadir un input de tipo texto y un botón. Al pulsar el botón debe
// escribirse el texto del input en un párrafo.

const parrafo = document.getElementById("parrafo-1");
const input = document.getElementById("input-1");
const button_4 = document.getElementById("button-1");

const textInput = (e) => parrafo.textContent = input.value;

button_4.addEventListener("click", textInput);

// Apartado 4.2 - Añadir un nuevo input pero esta vez cambiará el texto con cada 
// pulsación de tecla del usuario.

const input_2 = document.getElementById("input-2");

const textInput2 = (e) => parrafo.textContent = input_2.value;

input_2.addEventListener("keyup", textInput2);



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

textArea.addEventListener("keyup", textArea1);



// Apartado 6 - Añadir un input de tipo texto con leyenda: "Escribir un número par".
// Añadir un botón. Al pulsar el botón nos validará si el número es par o no. En caso
// negativo, cambiar los bordes del input a rojo. Para revertir el estado de una 
// propiedad, podemos utilizar el valor "revert" o dejarla vacía.

const input_3 = document.getElementById("input-3");
const button_6 = document.getElementById("button-2");

function pressButton() {
    if (input_3.value % 2 != 0) {
        input_3.style.borderColor = "red";
    } else {
        input_3.style.borderColor = "revert"; 
    }
}

button_6.addEventListener("click", pressButton);



// Apartado 7 - Partiendo de una lista ul, crear 10 li con un texto indicando el
// número del elemento ("Elemento X") usando un bucle for.

const ul = document.createElement("ul");

for (let i = 1; i <= 10; i++) {
    const li = document.createElement("li");
    li.textContent = "Elemento " + i;
    ul.appendChild(li);
}

const separador = document.getElementById("separador");

document.body.insertBefore(ul, separador);









