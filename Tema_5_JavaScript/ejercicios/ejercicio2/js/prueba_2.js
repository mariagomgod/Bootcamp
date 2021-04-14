// Apartado 1
class User {
    constructor(name, firstLastName, secondLastName, email, age, city, productsCount) {
        this.name = name;
        this.firstLastName = firstLastName;
        this.secondLastName = secondLastName;
        this.email = email;
        this.age = age;
        this.city = city;
        this.productsCount = productsCount;
    }   
        
    incrementProducts() {
        this.productsCount++;
    }
        
    emptyProducts() {
        this.productsCount = 0;
    }
}

// Apartado 2
const users = [
    new User("Fran", "Gómez", "Fernández", "fgomez@gmail.com", 35, "Málaga", 0),
    new User("Lucía", "García", "Ruíz", "lgarcia@gmail.com", 41, "Madrid", 0),
    new User("María", "Núñez", "Coronado", "mnunez@gmail.com", 18, "Albacete", 0),
];

// Apartado 3

const select = document.getElementById("userSelect");
const incrementButton = document.getElementById("incrementButton");
const emptyButton = document.getElementById("emptyButton");
const userInfo = document.getElementById("userInfo");

// Apartado 4

for (const user of users) { 
    const newOption = document.createElement("option");
    newOption.textContent = user.name;
    select.appendChild(newOption);
}

// Apartado 5

function fillList(user) {

    userInfo.innerHTML = ""; 

    for (const propertyName in user) {
        const value = user[propertyName]; 

        if (typeof value !== "function") {
            const newListItem = document.createElement("li"); 
            newListItem.innerHTML = `<b>${propertyName}:</b>&nbsp;${value}`;
            newListItem.classList.add("list-group-item");
            userInfo.appendChild(newListItem); 
        }
    }
}

fillList(users[0]); // estado inicial


// Apartados 6, 7 y 8

function handleClick(e) {
    const selectedUser = users.find(user => user.name === select.value);
    if (e.target === incrementButton) {
        selectedUser.incrementProducts();
    } else {
        selectedUser.emptyProducts();
    }
    fillList(selectedUser);
}

select.addEventListener("change", e => {
    const selectedUser = users.find(user => user.name === select.value);
    fillList(selectedUser);
});

incrementButton.addEventListener("click", handleClick);
emptyButton.addEventListener("click", handleClick);





