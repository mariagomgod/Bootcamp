function Book(id, title, author, sales, price) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.sales = sales;
    this.price = price;
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

const tBody = document.getElementById("information");

function removeBook(bookToRemove) {
    // me aseguro eliminar el libro correcto
    const bookFound = books.find(book => book.title === bookToRemove.title && book.author === bookToRemove.author);
    const index = books.indexOf(bookFound); // localizo el objeto book dentro del array
    books.splice(index, 1); // elimino un elemento empezando desde la posición index
    updateTable(); // vuelvo a pintar la tabla
}

function updateTable() {

    tBody.innerHTML = ""; // para vaciar la tabla

    for (const book of books) {
        const newRow = document.createElement("tr"); // creo la fila
        tBody.appendChild(newRow); // añado la fila al tbody

        for (const propertyName in book) {
            const column = document.createElement("td"); // creo la columna
            newRow.appendChild(column); // añado la columna a la fila correspondiente
            column.textContent = book[propertyName]; // pinto en cada columna la propiedad correspondiente
        }

        const column = document.createElement("td"); // creo última columna
        newRow.appendChild(column); // añado la columna a la fila correspondiente
        const removeButton = document.createElement("button"); // creo el botón de eliminar
        column.appendChild(removeButton); // añado el botón a la columna correspondiente
        removeButton.textContent = "Remove"; // doy nombre al botón
        removeButton.classList.add("btn", "btn-danger"); // doy las clases del botón de Bootstrap
        removeButton.addEventListener("click", () => removeBook(book)); // creo el manejador de click y elimino el libro
    }
}
updateTable(); // pintado de la tabla inicial

const bookForm = document.getElementById("bookForm"); 

function addNewBook() {
    const id = books.length + 1; // id del libro n y le añado el siguiente n + 1
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const sales = document.getElementById("sales");
    const price = document.getElementById("price");
    books.push(new Book(id, title.value, author.value, sales.value, price.value)); // añado el libro nuevo al array
    updateTable(); // vuelvo a pintar la tabla
    bookForm.reset(); // vacío los inputs
}
