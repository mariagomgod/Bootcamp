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






