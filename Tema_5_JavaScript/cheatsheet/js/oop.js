// Antes de ES6

function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;

    this.getAge = function () {
        let age = new Date().getFullYear() - this.year;
        console.log(`This ${this.brand} ${this.model} is ${age} years old.`);
    }
}

let myCar = new Car("Ford", "Mustang", 1990);
let myCar2 = new Car("Audi", "Q7", 2015);

myCar.getAge();

console.log(myCar, myCar2);

Car.getHP = function () { // No actualiza las instancias
    console.log("This car has 300 horsepower");
}

/* myCar.getHP = function () { // Solo modifica la instancia myCar
    console.log("This car has 300 horsepower");
} */

Car.prototype.getHP = function () { // metemos la función en su prototipo
    console.log("This car has 400 horsepower");
}

myCar.getHP();
myCar2.getHP();


function SUV(brand, model, year, width, height) {
    Car.call(this, brand, model, year);
    this.width = width;
    this.height = height;
}

SUV.prototype = Object(Car.prototype);

let mySUV = new SUV("Audi", "Q3", 2017, 2200, 2000);
console.log(mySUV);

mySUV.getAge();
mySUV.getHP();

console.clear();

// -------------------------------- ES6 ------------------------------------------

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() { // getSummary es una función
        console.log(`${this.title} was written by ${this.author} in ${this.year}.`);
    }

    getType() {
        console.log("I'm a normal book");
    }
}

const book1 = new Book("Metamorphosis", "Franz Kafka", 1915);
console.log(book1);
book1.getType();
book1.getSummary();

// SubClasses (Herencia)

class Magazine extends Book { // la clase revista va a extender a libro (hereda todas las propiedades de libro)
    constructor(title, author, year, month) { // añadimos al constructor de Magazine, month
        super(title, author, year); // super y las propiedades de Book hay que ponerlo siempre 
        this.month;
    }

    getType() {
        super.getType(); // imprime lo que valga getType de Book. Super se utilizaría solo si quiero ampliar información
        console.log("I'm a magazine");
    }
}

// Instanciamos una revista
const mag1 = new Magazine("Super Pop", "Algún loco", 2015);
mag1.getSummary();

mag1.getType();
book1.getType();

// Otro ejemplo de polimorfismo
class Animal {
    constructor(type, name, sound) {
        this.type = type;
        this.name = name;
        this.sound = sound;
    }

    makeSound() {
        console.log(`This ${this.type} named ${this.name} goes ${this.sound}`);
    }

    static compareAnimals(animal1, animal2) {
        return animal1.type === animal2.type;
    }
}

class Cat extends Animal {
    constructor(name) { // le pasamos al constructor de Cat solo la propiedad name de Animal
        super("cat", name, "miau");
    }
}

class Dog extends Animal {
    constructor(name) {  
        super("dog", name, "woof");
    }
}

const conBotas = new Cat("Con Botas");
const dylan = new Dog("Dylan");
const danko = new Dog("Danko");

console.clear();
console.log(conBotas);

conBotas.makeSound();
dylan.makeSound();
danko.makeSound();

console.log(Animal.compareAnimals(dylan, danko));






