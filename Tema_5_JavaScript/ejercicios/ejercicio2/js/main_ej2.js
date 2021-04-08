// Apartado 1. Constructor

function User(name, firstLastName, secondLastName, email, age, city, productsCount) {
    this.name = name;
    this.firstLastName = firstLastName;
    this.secondLastName = secondLastName;
    this.email = email;
    this.age = age;
    this.city = city;
    this.productsCount = productsCount;
    this.incrementProducts = function () {
        this.productsCount++;
    };
    this.emptyProducts = function () {
        this.productsCount = 0;
    };
}

// Apartado 2. Data

const users = [
    new User("Fran", "Gómez", "Fernández", "fgomez@gmail.com", 35, "Málaga", 0),
    new User("Lucía", "García", "Ruíz", "lgarcia@gmail.com", 41, "Madrid", 0),
    new User("María", "Núñez", "Coronado", "mnunez@gmail.com", 18, "Albacete", 0),
];

// Apartado 3. Selectors

const select = document.querySelector("#userSelect");
const list = document.querySelector("#userInfo");
const incrementButton = document.querySelector("#incrementButton");
const emptyButton = document.querySelector("#emptyButton");

// Apartado 4

for (let user of users) {
    const newOption = document.createElement("option");
    newOption.textContent = user.name;
    select.appendChild(newOption);
}

// Apartado 5

function updateUserData(user) { // información de un usuario en concreto
    document.getElementById("name").textContent = user.name;
    document.getElementById("firstLastName").textContent = user.firstLastName;
    document.getElementById("secondLastName").textContent = user.secondLastName;
    document.getElementById("email").textContent = user.email;
    document.getElementById("age").textContent = user.age;
    document.getElementById("city").textContent = user.city;
    document.getElementById("nProducts").textContent = user.productsCount;
}

let user = users[0]; // usuario por defecto para comenzar. Memorizo para evitar tener que buscar constantemente el usuario en el array
updateUserData(user);


// Apartados 6, 7 y 8

select.addEventListener ("change", function () {
    user = users.find((user) => user.name === select.value); // buscamos el usuario cuyo nombre coincide con el seleccionado
    updateUserData(user); // lo vuelvo a pintar porque hemos seleccionado un usuario distinto
}); 

function handleClick(e) {
    if (e.target === incrementButton) { // e.target = botón que se ha pulsado (importante saber cuál ya que hay más de uno)
        user.incrementProducts();
    } else {
        user.emptyProducts();
    }
    updateUserData(user); // lo vuelvo a pintar porque ha cambiado el número de productos
}

incrementButton.addEventListener("click", handleClick);
emptyButton.addEventListener("click", handleClick);



// Otra opción de apartados 5, 6, 7 y 8:

// Rellenar la lista con la info de un usuario.


//function fillList(user) {

//  list.innerHTML = "";

// for (const propertyName in user) {
// const value = user[propertyName];

//   if (typeof value !== "function") {
//      const newListItem = document.createElement("li");
//      newListItem.innerHTML = `<b>${propertyName}:</b> ${value}`;
//      newListItem.classList.add("list-group-item");
//      list.appendChild(newListItem);
//      } 

//  }

//}

// Estado inicial
// fillList(users[0]);

//function processProducts(e) {
//    const selectedUsers = users.find((user) => user.name === select.value)); 
//    if (e.target === incrementButton) {
//        selectedUser.incrementProducts();
//    } else {
//        selectedUser.emptyProducts();
//    }
//    fillList(selectedUser); // se actualiza la lista
//}


// Añadir listeners.

// select.addEvenListener("change", e => {
//    const selectedUsers = users.find((user) => user.name === select.value));
//    fillList(selectedUser); // se actualiza la lista
// });

//incrementButton.addEventListener("click", processProducts);
//emptyButton.addEventListener("click", processProducts);



// for in es para acceder a las propiedades de un objeto
// innerHTML lo utilizamos para poder darle una propiedad CSS a un determinado contenido de texto











