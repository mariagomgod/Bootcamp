// 1. Hacer una petición a la API de https://jsonplaceholder.typicode.com/comments
// Con el array que nos llegue, iremos rellenando nuestra ul con <li> con los
// primeros 20 elementos.

// 1.2. Queremos que para cada post vaya generando un h2 para cada p.

// 1.3. Paginar de 20 en 20 con un botón de anterior y otro de siguiente que actualice los artículos que se están mostrando


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



// Apartado 1.2

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


// Apartado 1.3

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
    
    // encierro el fetch en una función porque la voy a utilizar en dos ocasiones, al clicar
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


/* // Opción del apartado 1.3 planteada por el profesor:

// Constantes
const POST_URL = "https://jsonplaceholder.typicode.com/posts";
const PAGE_SIZE = 20;

//Variables
let posts = [];
let currentPage = 1;

// Selectores
const postDiv = document.querySelector("#posts");
document.querySelectorAll(".previousPage").forEach(button => button.addEventListener("click", changePage));
document.querySelectorAll(".nextPage").forEach(button => button.addEventListener("click", changePage));

//Utilidades
function fillDiv() {
    const newPagePosts = paginate(posts, PAGE_SIZE, currentPage);
    postDiv.innerHTML = "";
    newPagePosts.forEach(post => postDiv.innerHTML += `<h3>${post.id} ${post.title}</h3><p>${post.body}</p>`);
}

function changePage(e) {
    if (e.target.className === "previousPage" && currentPage > 1) {
        currentPage--;
    } else if (e.target.className === "nextPage" && currentPage < posts.length / PAGE_SIZE) {
        currentPage++;
    }
    fillDiv();
}

function paginate(array, page_size, page_number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
}

fetch(POST_URL) 
.then(response => response.json())
.then(data => {
    posts = [...data];
    fillDiv();
}); */


// Apartado 2.1 - Login y paginación desde el servidor

// Constantes
const LOGIN_URL = "https://reqres.in/api/login";
const USERS_URL = "https://reqres.in/api/users";

// Selectores
const emailInput = document.querySelectorAll("input")[0];
const passwordInput = document.querySelectorAll("input")[1];
const usersList = document.querySelector("#userList");

document.querySelector("#loginButton").addEventListener("click", login);

function login(e) {

    e.preventDefault(); // para evitar que se recargue la página

    const userInfo = { // es el cuerpo de la petición, es decir, lo que
        // se va a enviar en el post
        email: emailInput.value,
        password: passwordInput.value
    };

    const config = { // es la petición que se va a hacer
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(userInfo) // userInfo lo convertimos a string 
        // concretamente a un json
    };

    fetch(LOGIN_URL, config) // fetch devuelve un objeto de tipo promesa
    .then(response => response.json())
    .then(data => data.error ? alert(data.error) : fetchAllUsers())
}

async function fetchAllUsers() {
    
    let response = await fetch(USERS_URL);
    let data = await response.json(); // llamada para el número total de páginas
    // (posiblemente solo se esté trayendo la primera página en este punto)
    
    let users = [];

    for (let page = 1; page <= data.total_pages; page++) {
        response = await fetch(`${USERS_URL}?page=${page}`);
        let newData = await response.json();
        users = users.concat(newData.data) // alternativa: users = [...users, ...newData.data];
    }
    
    usersList.innerHTML = "";

    users.forEach(user => usersList.innerHTML += `<li>${user.email}</li>`);
    // alternativa:
    // let usersListText = "";
    // users.forEach(user => usersListText += `<li>${user.email}</li>`);
    // usersList.innerHTML = usersListText;
    // de esta manera haríamos solamente un acceso al DOM y no haría falta limpiar, es decir,
    // el primer usersList.innerHTML = "", no haría falta ponerlo.
}

/* // Alternativa para recuperar todas las páginas de una API utilizando .then()
    // con una función recursiva.

let users = [];

function fetchAllUsersv2(URL) {
    fetch(URL)
    .then(response => response.json())
    .then(newData => {
        users = users.concat(newData.data);

        if (newData.page < newData.total_pages) {
            fetchAllUsersv2(`${USERS_URL}?page=${newData.page + 1}`)
        } else {
            usersList.innerHTML = "";
            users.forEach(user => usersList.innerHTML += `<li>${user.email}</li>`); 
        }
    });
} */




