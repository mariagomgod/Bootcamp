class Book {
    constructor(id, title, author, sales, price) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.sales = sales;
        this.price = price;
    }
}

const books = [
    new Book(1, "El juego del alma", "Javier Castillo", 10, 18),
    new Book(2, "Cicatriz", "Juan Gómez-Jurado", 20, 10),
    new Book(3, "Tierra", "Eloy Moreno", 25, 15),
    new Book(4, "Falcó", "Arturo Pérez-Reverte", 30, 16),
    new Book(5, "El secreto de Helena", "Lucinda Riley", 12, 13),
    new Book(6, "La pareja de al lado", "Shari Lapena", 10, 18),
    new Book(7, "La viajera del tiempo", "Lorena Franco", 40, 15),
    new Book(8, "El silencio de las olas", "Ángela Banzas", 10, 12),
    new Book(9, "Patria", "Fernando Aramburu", 35, 14),
    new Book(10, "La danza de los tulipanes", "Ibon Martín", 20, 17),
];

//let displayedBooks = Array.from(books); // Para la opción planteada por el profesor
// o también podemos hacer: let displayedBooks = [...books];

const tBody = document.getElementById("information");
const totalPrices = document.getElementById("totalPrices");
const totalPrice = document.getElementById("totalPrice");

function removeBook(book) {
    const index = books.indexOf(book); // localizo el objeto book dentro del array
    books.splice(index, 1); // elimino un elemento empezando desde la posición index
    updateTable(books); // volvemos a pintar la tabla utilizando el array de books
}

function updateTable(books) {

    tBody.innerHTML = ""; // vacío el tbody

    for (const book of books) { 
        const newRow = document.createElement("tr"); // creo una fila
        tBody.appendChild(newRow); // añado la fila al tbody

        for (const propertyName in book) {
            const column = document.createElement("td"); // creo una columna
            newRow.appendChild(column); // añado la fila a la columna
            column.textContent = book[propertyName]; // pinto en la columna el valor de la propiedad correspondiente del libro
        }

        const column = document.createElement("td"); // creo la última columna
        newRow.appendChild(column); // añado la columna a la fila correspondiente
        const removeButton = document.createElement("button"); // creo el botón
        column.appendChild(removeButton); // añado el botón a la columna correspondiente
        removeButton.textContent = "Remove"; // doy nombre al botón
        removeButton.classList.add("btn", "btn-danger"); // creo el botón tal cual con las clases de Bootstrap
        removeButton.addEventListener("click", () => removeBook(book)); // añado al manejador click la función que borra el libro del array
    }
    
    let total = books.reduce((sum, book) => sum + book.price, 0);
    totalPrice.textContent = `Total sum: ${total}`;
}

updateTable(books); // pintado inicial de la tabla pasándole el array books

const bookForm = document.getElementById("bookForm");

function addNewBook() {
    const id = books[books.length-1].id + 1; // books.length es el id del libro n y calculo el id del siguiente libro (n + 1).
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const sales = document.getElementById("sales");
    const price = document.getElementById("price");
    books.push(new Book(id, title.value, author.value, sales.value, Number(price.value))); // añado un nuevo libro al array
    // price.value lo harcodeo a número para que al hacer la suma de los precios, si añades
    // un libro nuevo te lo sume bien y no te lo añada al lado.
    updateTable(books); // vuelvo a pintar la tabla
    bookForm.reset(); // con reset restauro el formulario (básicamente vacío los inputs)
}

// document.getElementById("save").addEventListener("click", addNewBook); 
// No le añado un manejador de evento porque quiero que sea el formulario
// el que controle cuándo se hace el submit (entonces añado onsubmit al formulario
// en el html). Es para que la validación funcione.


// Ejercicio 5

// Apartado 1
const inputBookToFind = document.getElementById("bookToFind");

function bookToFind(e) {
    const filtered = books.filter(book => book.title.toLowerCase().includes(e.target.value.toLowerCase()));
    updateTable(filtered); // volvemos a pintar la tabla pasándole el resultado de filtrar los libros
}
inputBookToFind.addEventListener("keyup", bookToFind);


// Apartado 2
const priceButton = document.getElementById("priceColumn");

let sortedAscending = false; // recordamos si la última vez ordenamos de manera ascendente o nunca
// se llegó a ordenar. Estado inicial.

function orderedPrices() {
    
    let sortedPrices;

    if (sortedAscending) {
        sortedPrices = books.sort((book1, book2) => book2.price - book1.price); 
    } else {
        sortedPrices = books.sort((book1, book2) => book1.price - book2.price);  
    }
    updateTable(sortedPrices); // volvemos a pintar la tabla pasándole el resultado de ordenar
    // los precios
    sortedAscending = !sortedAscending; // actualizamos sortedAscending para que recuerde como
    // hemos ordenado ahora, para que la siguiente vez ordene al contrario
}
priceButton.addEventListener("click", orderedPrices);


// Apartado 3
// la suma está dentro de la función de la tabla updateTable()




/* // Opción planteada por el profesor:

const booksTbody = document.getElementById("information");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const salesInput = document.getElementById("sales");
const priceInput = document.getElementById("price");
const addBookButton = document.getElementById("save");

const tfoot = document.getElementById("totalPrices");

function updateTable() {

    booksTbody.innerHTML = ""; // vaciamos el tbody por completo

    displayedBooks.forEach(book => { //generamos de nuevo todas las filas
        booksTbody.innerHTML += 
        `<tr>
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.sales}</td>
            <td>${book.price}</td>
            <td
                button class="btn btn-danger" id="${book.id}">Remove</button>
            </td>
        </tr>`;
    });

    // apartado 3 del ejercicio 5
    const totalPrice = displayedBooks.reduce((priceSum, book) => priceSum + book.price, 0);
    tfoot.textContent = `Total price ${totalPrice}`;
}

booksTbody.onclick = e => { // el listener click se le ha puesto al tbody completo
    // antes definimos el array books con let para poder utilizar filter
    if (e.target.tagName === "BUTTON") {
        displayedBooks = displayedBooks.filter(book => book.id != e.target.id); // e.target.id (id del botón). Eliminamos un libro. Devuelve 
        // todos los libros menos aquel que tenga ese id
        updateTable();// volvemos a pintar la tabla
    }
};

updateTable(); // estado inicial 

addBookButton.addEventListener("click", e => {
    e.preventDefault();
    const newID = books[books.length-1].id + 1;
    const newBook = new Book(newID, titleInput.value, authorInput.value,
    salesInput.value, Number(priceInput.value));
    books.push(newBook);
    displayedBooks.push(newBook);

    updateTable();
    addBookButton.parentNode.reset();

}); 

// Ejercicio 5

let displayedBooks = books; // Esto se pondría debajo del array Books (segundo apartado). 
// ver arriba. Se define una variable y se le asigna el array books para 
// guardar el array a modificar sin que afecte al original y cuando se vuelva para atrás 
// en la tabla no se pierdan los datos de la misma.

const filterInput = document.getElementById("bookToFind");
const priceHeader = document.getElementById("priceColumn");

let ascendingOrder = true;

filterInput.addEventListener("input", e => {
    displayedBooks = books.filter(book => book.title.toLowerCase().includes(e.target.value.toLowerCase()));
    updateTable(); 
});

// apartado 2
priceHeader.style.cursor = "pointer";

priceHeader.addEventListener ("click", e => {
    ascendingOrder = !ascendingOrder;
    displayedBooks.sort((book1, book2) => {
        return ascendingOrder ? book1.price - book2.price 
                              : book2.price - book1.price;
    });

    updateTable();
});

 */







 



