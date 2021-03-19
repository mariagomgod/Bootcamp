//--------Uso de JS externo--------------

function saludo () {
    alert("Hola desde un script externo");
    console.log("has hecho click");
}
document.getElementsByTagName("a").item(2).addEventListener("click", saludo);

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
    } // ES6
}

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




