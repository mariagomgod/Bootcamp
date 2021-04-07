//--------Uso de JS externo--------------

function saludo () {
    alert("Hola desde un script externo");
    console.log("has hecho click");
}
//document.getElementsByTagName("a").item(2).addEventListener("click", saludo);

//--------Depuración / logging (comprobar qué está pasando)------------

//alert("Mensaje");
console.log("Mensaje");

//-----------------------Variables------------------------------

//var -> function scope
// let/ const -> block scape

function saludar() {

    console.log("Inicial: ", contador); //con let va a dar error porque contador está fuera de la función, pero con var no da error

    for (var contador = 0; contador < 3; contador++ ) {
        console.log(contador);
    }

    console.log("Final: ", contador);

}

saludar();

console.clear(); // se utiliza para limpiar la consola

//------------------------Inicialización---------------------------------

let day;
day = 5;

let monthName = "Octubre";

let hour, minute, second;

let array = [15, 20, 25];
console.log(array[0], array[1], array[2]);

let [var1, var2, var3] = [15, 20, 25]; // Avanzada
console.log(var1, var2, var3);

// const -< block scope

const x = 1;
// const y; // va a dar error missing = in const
// x = 2; // va a dar error porque la constante ya está inicializada a 1 (const x = 1), y por ser constante no cambia.

console.clear();

//-------------Tipos de datos-------------------------

// Datos primitivos

let str = String("I'm a string");
let str2 = "I'm another string"; // Recomendada
console.log(typeof str, typeof str2, typeof "");

let num = Number(5);
let num2 = 5;
console.log(typeof num, typeof num2, typeof 5, typeof 5.3, typeof "5");

let bool = Boolean(true);
let bool2 = false;
console.log(typeof bool, typeof bool2, typeof true, typeof "true");

let undef;
console.log(undef, typeof undef);

let selectedColor = null; // Limpiar una variable y quitarle el valor que tuviera
console.log(selectedColor, typeof selectedColor);

// Objects

array = Array(1, 2, 3);
let array2 = [1, 2, 3]; // Recomendada
console.log(array, array2);
console.log(typeof array, typeof array2);

console.log(typeof new Date("2021-05-12"));
console.log(typeof new Error("Mensaje de error"));

console.clear();

//-----------------Strings--------------------------

str = "Hola futuro";
console.log(str, str.length);
console.log(str.indexOf("futuro")); //indexOf te indica la posición en la que aparece la palabra futuro
console.log("La última ocurrencia de 'u' está en el índice", str.lastIndexOf("u"));

console.log(str.substring(1, 3));

console.log("Hola mundo".concat(". Adiós mundo."));
console.log("Hola mundo" + ". Adiós mundo."); // Equivalente a concat
str = str + ". Adiós mundo";
str += ". Adiós mundo."; // Justo igual que str = str + ". Adiós mundo";
console.log(str);

console.log(str.replace("mundo", "futuro"));
console.log(str.replaceAll("mundo", "futuro"));
console.log(str.toLowerCase()); // convierte el String en minúscula
console.log(str.toUpperCase()); // convierte en string en mayúscula

console.log(`El día de mi cumpleaños es ${day}.`); // (String template) `` permite meter variables dentro de un stringsin concatenar
console.log("El día de mi cumpleaños es", day, ".");

// Parsing / Parseo (conversión de un tipo a otro)

number = Number("algo"); // NaN = Not a Number- No genera error.
console.log(number, typeof number);

number = Number("1000"); 
console.log(number, typeof number); // genera un número

number += "1000"; // entiende que es una concatenación, no una suma
console.log(number, typeof number);

console.log("1" + 1, "1" - 1);

console.clear ();

//----------------Objects------------------------------------

let person = { // Curly brackets
    name: "John",
    age: 30,
    blonde: false,
    walk: function () {
        console.log("Hey, estoy andando");
    }, // Pre ES6
    jump() {
        console.log("Hey, estoy saltando.");
    }, // ES6
    presentarse() {
    console.log(`Me llamo ${this.name}, tengo ${this.age} años y ${this.blonde ? "soy rubio" : "soy moreno"}`);
    }
}

person.presentarse();

// Acceso por punto/ Dot notation

console.log(person);
console.log(`Se llama ${person.name} y tiene ${person.age} años.`);

person.name = "Jane";

console.log(person);
console.log(`Se llama ${person.name} y tiene ${person.age} años.`);

// Acceso por corchetes/ Brackets notation (los brackets representan un array)

let propertyName = "blonde";
console.log(person[propertyName]);

// Ampliación

person.children = ["Marta", "Pedro"];

console.log(person);
console.log(person.children[1], person.children[0]);


person.walk();
person.jump();

console.log({name: "John", age: 5}); // en el momento que dentro pones unas llaves, es un objeto, independientemente de que tenga algo dentro o no

console.log(typeof {}, typeof [], typeof "");

// This (hace referencia al objeto entero en el que está)

const person2 = {
    name: "Thomas",
    talk() {
        console.log(this);
        console.log(`Me llamo ${this.name}`);
    }
}

const person3 = {
    name: "Sarah",
    talk() {
        console.log(this);
        console.log(`Me llamo ${this.name}`);
    }
}

person2.talk();
person3.talk();


// Object Constructor using functions

function Car(brand, color, weight, topSpeed) {
    this.brand = brand;
    this.color = color;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.getDescription = function() {
        return `This ${this.color} ${this.brand} weigths ${this.weight} ` + 
        `kilos and can reach up to ${this.topSpeed} kms/h`
    }
} // pre ES5

const car1 = new Car("Mercedes", "red", 2000, 200);
const car2 = new Car("Volvo", "white", 2500, 100);
const car3 = new Car("Volskwagen", "blue", 1500, 175);

console.log(car1, car2, car3);

console.log(car2.weight);

console.log(car3.getDescription());


//---------------------Arrays--------------------------

let selectedColors = ["red", "blue"]; // Array de Strings
console.log(selectedColors, selectedColors.length, typeof selectedColors);

selectedColors[2] = "green"; // Si no existe, lo crea

console.log(selectedColors, selectedColors.length);

selectedColors.push("violet", "white"); // push añade uno o varios elementos al array
console.log(selectedColors, selectedColors.length);

selectedColors.pop(); // pop quita el último elemento del array
console.log(selectedColors, selectedColors.length);

selectedColors.unshift("white"); // unshift añade nuevos elementos al principio del array
console.log(selectedColors, selectedColors.length);

selectedColors.shift(); // shift quita el primer elemento del array
console.log(selectedColors, selectedColors.length);

selectedColors.sort(); // short ordena los elementos del array alfabéticamente y también se pueden ordernar arrays de objetos
console.log(selectedColors, selectedColors.length);

console.log("El rojo está en el índice", selectedColors.indexOf("red")); // indexOf devuelve el índice del primer elemento

console.log(selectedColors[selectedColors.indexOf("red") + 1]);

console.log(selectedColors.slice(1, 3));
console.log(selectedColors);

console.log("Los elementos borrados son: ", selectedColors.splice(1, 3)); // devuelve los elementos que ha borrado
console.log("El array se ha quedado así: ", selectedColors);

/* Crear un objeto 'niño' que tenga las propiedades nombre, altura, género y amigos. 
Amigos estará inicialmente vacío y añadiremos posteriormente 3 elementos string con 
los nombres. Despues, añadiremos uno extra al inicio. */ 

const kid = {
    name: "Manuel",
    height: "1.60",
    gender: "male",
    friends: [],
    perderAmigo() {
        this.friends.pop();
    }
}

console.log(kid);
kid.friends.push("María", "Roberto", "Ana");
console.log(kid);
kid.friends.unshift("Juan");
console.log(kid);

kid.perderAmigo();
console.log(kid);

console.clear();

//------------------Condicionales--------------------------

const randomNumber = 9;
const guessedNumber = "5";

if (typeof randomNumber !== typeof guessedNumber) {
    console.log("Hey, tienes que introducir el mismo tipo");
}

if (randomNumber === guessedNumber) {
    console.log("Has acertado el número");
} else if (randomNumber > guessedNumber) {
    console.log("El número secreto es mayor");
} else {
    console.log("El número secreto es menor");
} 

// Ternary Operator / Operador ternario

let variable = 12 < 10 ? "El primero es menor" : "El primero es mayor";
console.log(variable);

// Switch

let option = 2;
switch (option) {
    case 1:
        // Bloque de código para valor 1
        console.log("Option vale 1");
        break;
    case 2:
        // Bloque de código para valor 2
        console.log("Option vale 2");
        break;
    case 3:
        // Bloque de código para valor 3
        console.log("Option vale 3");
        break;
    default: // "De otro modo" de Pseint
        console.log("otra opción");
        break;
}

//-------------------Funciones / Functions----------------------------------------

// Nombradas

function greet(name, lastName) {
    return `Hola, ${name} ${lastName}. ¿Qué tal?`;
}

console.log(greet("Marcos", "Aurelio"));

// Ejercicio: Función que devuelva el cuadrado de un número que recibe por parámetro

function square(number) {
    return number * number;
}

console.log(square(5));


// Anónimas (si solo quieres utilizar la función una vez)

let numbersArray = [5, 51, 1, 15, 2];
console.log(numbersArray);
numbersArray.sort(); // Me lo ordena según ASCII
console.log(numbersArray);


function orderNumbers (a, b) {
    if (a < b) {
        return -1;
    } else if (a === b) {
        return 0;
    } else {
        return 1;
    }
}

//numbersArray.sort(orderNumbers);

numbersArray.sort(function (a, b) {return a - b}); // Esta es la función anónima. Pasas la función entera por argumento. Es lo mismo que poner la función de arriba

console.log(numbersArray);

console.clear ();


// Funciones de flecha / Arrow functions

let perimeterOfSquare = function (side) { // Función anónima normal a transformar
  return side * 4;
}
perimeterOfSquare = function (side) {return side * 4;} // (opcional) Una única línea
perimeterOfSquare = (side) => {return side * 4;} // Sustituyo function por la flecha después de params.
perimeterOfSquare = (side) => side * 4; // Si sólo quiero devolver algo, quito llaves y return.
perimeterOfSquare = side => side * 4; // Es la arrow function. Si sólo tiene 1 param, puedo quitar paréntesis.

console.log(perimeterOfSquare(5));

//console.log(typeof function () {});
//console.log(typeof (() => {}));

// Ejercicio. Cómo transformar funciones anónimas en funciones flechas

numbersArray.sort(function (a, b) {return a - b});
numbersArray.sort((a, b) => a - b);
console.log(numbersArray);

let squareV2 = number => number * number;
console.log(squareV2(6));


//------------------------------Bucles / Loops---------------------------------

// Bucle For

for (let i = 0; i <= 10; i++) {
    console.log(`Índice: ${i}`);
}

// Ejercicio. Definir y rellenar un array con el índice i

const arrayX = [];   

for (let i = 0; i <= 10; i++) {
    arrayX.push(i);
}

console.log(arrayX);


// Bucle While

let contador = 0;

while (contador <= 10) {

    console.log(contador);
    contador ++;
}

while (true) {
    break;
}

console.log("No entra en bucle infinito");

// Bucle ForEach (siempre se utiliza con arrays, es EXCLUSIVO DE LOS ARRAYS y hay que poner una función dentro)

console.log(numbersArray);

numbersArray.forEach(function (item, index) {
    console.log(`Índice ${index}: ${item}`);
});

numbersArray.forEach((item, index) => console.log(`Índice ${index}: ${item}`)); //Es igual que justo la de arriba pero con un arrow function

let otherArray = [];

numbersArray.forEach(item => otherArray.push(item));

console.log(otherArray);


// Bucle For...of (funciona igual que el ForEach pero después del of, se puede poner cualquier elemento iterable, no sólo arrays)

for (let item of numbersArray) {
    console.log(item);
}


// Continue (salta a la siguiente iteración)

for (let i = 0; i < 5; i++) {
    if (i === 3 || i === 2) { // quieres saltar el 3 y el 2
        continue
    }
    console.log("Using continue", i);
}

// Break

let i = 0;
let k;

mainLoop: while (true) {
    console.log("Outer loop", i);
    i++;
    k = 1;
    while (true) {
        console.log("Inner loop", k);
        k++;
        if (i === 5 && k === 5) {
            break mainLoop; // para romper el bucle exterior, se le asigna al primer bucle un nombre, en este caso le hemos llamado mainLoop y al break también le damos ese nombre para que rompa ese bucle exterior
        } else if (k === 5) {
            break; // para romper el bucle interior
        }
    }
}






































