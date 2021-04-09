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

function removeBook(book) {
    const index = books.indexOf(book); // localizo el objeto book dentro del array
    books.splice(index, 1); // elimino un elemento empezando desde la posición index
    updateTable(); // volvemos a pintar la tabla
}

function updateTable() {

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
}
updateTable(); // pintado inicial de la tabla