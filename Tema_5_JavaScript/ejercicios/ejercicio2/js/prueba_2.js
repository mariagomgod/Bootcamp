// Apartado 1
function User(name, firstLastName, secondLastName, email, age, city) {
    this.name = name;
    this.firstLastName = firstLastName;
    this.secondLastName = secondLastName;
    this.email = email;
    this.age = age;
    this.city = city;
    this.productsCount = 0;
    this.incrementProducts = function () {
        this.productsCount++;
    };
    this.emptyProducts = function () {
        this.productsCount = 0;
    };
}

// Apartado 2
const users = [
    new User("Fran", "Gómez", "Martínez", "fgmartinez@hotmail.com", 34, "Málaga"),
    new User("Valeria", "Sanz", "Rodríguez", "vsm@gmail.com", 45, "Sevilla"),
    new User("Manuel", "Godoy", "Pérez", "mgoperez@yahoo.com", 37, "Jaén"),
    new User("Sandra", "Jiménez", "López", "sandrajlz@aol.com", 50, "Granada"),
];

// Apartado 3
const select = document.getElementById("userSelect");
const list = document.getElementById("userInfo");
const incrementButton = document.getElementById("incrementButton");
const emptyButton = document.getElementById("emptyButton");

// Apartado 4
for (let user of users) {
    const newOption = document.createElement("option");
    select.appendChild(newOption);
    newOption.textContent = user.name;
}

// Apartado 5

function fillList(user) {

    list.innerHTML = "";

    for (let propertyName in user) {
        const value = user[propertyName];
        if (typeof value !== "function") { // typeof te devuelve un string. Si es distinto de "function" te crea la lista menos las funciones incrementProduct y emptyProduct
        const newList = document.createElement("li");
        newList.innerHTML = `<b>${propertyName}:</b> ${value}`;
        newList.classList.add("list-group-item");
        list.appendChild(newList);
        }
    }
}

// Apartados 6, 7 y 8

fillList(users[0]); // usuario por defecto

function processProducts(e) {
    const selectedUsers = users.find((user) => user.name === select.value);
    if (e.target === incrementButton) {
        selectedUsers.incrementProducts();
    } else {
        selectedUsers.emptyProducts();
    }
    fillList(selectedUsers); // se actualiza la lista
}

select.addEventListener("change", function (e) {
    const selectedUsers = users.find((user) => user.name === e.target.value);
    fillList(selectedUsers); // se actualiza el select
});

incrementButton.addEventListener("click", processProducts);
emptyButton.addEventListener("click", processProducts);


