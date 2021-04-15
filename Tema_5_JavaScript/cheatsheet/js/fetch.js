const URL = "https://jsonplaceholder.typicode.com/users";

const printNames = array => array.forEach(user => console.log(user.name));
const printCities = array => array.forEach(user => console.log(user.address.city));
const printLats = array => array.forEach(user => console.log(user.address.geo.lat));

fetch(URL)
    .then(response => {
        if (!response.ok) {
            throw Error("Hay algún problema con la respuesta: " + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        printNames(data);
        printCities(data);
        printLats(data);
    })
    .catch(error => console.log(error));  

// El primer then se aplica sobre la promesa, en este caso fetch(URL) y necesita una 
// función callback dentro. El código de dentro se va a ejecutar cuando
// la promesa esté resuelta.

// json devuelve otra promesa

// El segundo then es el definitivo, los datos que nosotros queremos pasar.

// catch se va a ejecutar sólo si se ha producido un error en algún punto anterior



// Async - await (Alternativa a then). Se ejecuta línea a línea. Sigue el flujo normal

async function requestURL(URL) {
    console.log(2);
    const response = await fetch(URL); // bloqueo la función. Espera a que la promesa esté resuelta
    const data = await response.json(); // bloqueo la función. Espera a que la promesa esté resuelta
    console.log(4);
}

console.log(1);
requestURL(URL);
console.log(3);


// Petición con método HTTP POST en lugar de GET.

const POST_URL = "https://jsonplaceholder.typicode.com/posts";

const newPost = {
    title: "mi título",
    body: "mi cuerpo de publicación"
}

const http = {
    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(newPost)
};

fetch(POST_URL, http) 
    .then(response => response.json())
    .then(data => console.log(data))


