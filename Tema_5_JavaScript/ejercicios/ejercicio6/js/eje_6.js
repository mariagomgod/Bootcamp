// 1. Hacer una petición a la API de https://jsonplaceholder.typicode.com/comments
// Con el array que nos llegue, iremos rellenando nuestra ul con <li> con los
// primeros 20 elementos.

// 2. Queremos que para cada post vaya generando un h2 para cada p.

// 3. Paginar de 20 en 20 con un botón de anterior y otro de siguiente que actualice los artículos que se están mostrando


// Apartado 1

const URL = "https://jsonplaceholder.typicode.com/comments";


const ul = document.getElementById("ul");

function fillList(array) {
    array.slice(0, 20).forEach(element => {
        ul.innerHTML += `<li>${element.name}</li>`;
    });
}

fetch(URL)
    .then(response => {
        if (!response.ok) {
            throw Error("Hay algún problema con la respuesta: " + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        fillList(data);
    })
    .catch(error => console.log(error));



// Apartado 2

const URL2 = "https://jsonplaceholder.typicode.com/posts";

const divContainer = document.getElementById("container");

function fillTitle(array) {
    divContainer.innerHTML = '';
    array.slice(0, 20).forEach(element => {
        divContainer.innerHTML += `<h2>${element.title}</h2><p>${element.body}</p>`;
    });
}

fetch(URL2)
    .then(response => {
        if (!response.ok) {
            throw Error("Hay algún problema con la respuesta: " + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        fillTitle(data);
    })
    .catch(error => console.log(error));


// Apartado 3

const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");

let currentPage = 0;
let pageSize = 20;
let lastPage; // no la inicializo porque aún no se cuántas páginas habrá

function pagination(array) {
    lastPage = Math.ceil(array.length / pageSize) - 1; // Math.ceil lo utilizo para redondear 
    // por si hubiera elementos sobrantes que no quepan en una página.
    const pageFrom = currentPage * pageSize; // calculo el extremo inferior de la página
    const pageTo = (currentPage + 1) * pageSize; // calculo el extremo superior de la página
    fillTitle(array.slice(pageFrom, pageTo)); // pinto la porción del array solicitado
}

function handlePaginationClick(e) { // cambio a la página deseada
    if (e.target === previousButton) { // ¿se ha clicado el botón "anterior"?
        if (currentPage !== 0) { // decremento la página si no estoy en la primera
            currentPage--;
        }
    } else {
        if (currentPage !== lastPage) { // aumento la página si no estoy en la última
            currentPage++;
        }
    }
    nextPage(); // pido la página a la API y la pinto
}

function nextPage() { 
    
    // encierro el fetch en una función porque lo voy a utilizar en dos ocasiones, al clicar
    // siguiente y anterior

    fetch(URL2)
        .then(response => {
            if (!response.ok) {
                throw Error("Hay algún problema con la respuesta: " + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            pagination(data);
        })
        .catch(error => console.log(error));
}

previousButton.addEventListener("click", handlePaginationClick);
nextButton.addEventListener("click", handlePaginationClick);



