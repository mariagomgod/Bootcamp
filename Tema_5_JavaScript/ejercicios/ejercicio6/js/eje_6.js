// 1. Hacer una petición a la API de https://jsonplaceholder.typicode.com/comments
// Con el array que nos llegue, iremos rellenando nuestra ul con <li> con los
// primeros 20 elementos.

// 2. Queremos que para cada post vaya generando un h2 para cada p.

// 3. Paginar de 20 en 20 con un botón de anterior y otro de siguiente que actualice los artículos que se están mostrando
// funcion que reciba un array, un tamaño de pg y a partir de ese array que te de los elementos que necesitas


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





