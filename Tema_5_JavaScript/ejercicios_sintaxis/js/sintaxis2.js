// Apartado 1

const myArray = ["Hola", "mi", "nombre", "es", "María"];

console.log(myArray);

// Apartado 2

const myArray2 = [1, 2, 3];

myArray2.shift();
console.log(myArray2);
console.log(`Longitud: ${myArray2.length}`);

myArray2.unshift(0, 5);
console.log(myArray2);
console.log(`Longitud: ${myArray2.length}`);

// Apartado 4

const stringLength = (string) => string.length;

console.log(`La longitud de "Elefante" es: ${stringLength("Elefante")}`);

// Apartado 7

const daysLived = (age) => age * 365;

console.log(`Los días vividos son: ${daysLived(10)}`);

// Apartado 8

const myArray3 = (array) => array[array.length - 1];

console.log(`La última posición de myArray3([1, 5, 7]) es: ${myArray3([1, 5, 7])}`);

// Apartado 12

const address1 = {
    provincia: "Málaga",
    ciudad: "Torremolinos",
    municipio: "Torremolinos",
    código_postal: 29867,
    calle: "Almirante",
    numero: 2,
    planta: 1,
    numero_de_puerta: 3
}
console.log(address1);

const address2 = {
    provincia: "Sevilla",
    ciudad: "Tomares",
    municipio: "Tomares",
    código_postal: 41000,
    calle: "Flor",
    numero: 4,
    planta: 2,
    numero_de_puerta: 1
}
console.log(address2);

// Apartado 13

function parseDomain(string) {
    const domainParts = string.split(".");
    const object = {
        domain: domainParts[0],
        tld: domainParts[1]
    }
    return object;
}
console.log(parseDomain("google.com"));

// Apartado 14

function strictEquality(num1, num2) {
    return typeof num1 == typeof num2 && num1 == num2;
}
console.log(strictEquality("5", 5));
console.log(strictEquality(5, 5));

// Apartado 17

const myArray4 = ["Hola", "mi", "nombre", "es", "María"];
console.log(myArray4);

// while
let i = 0;

while (i <= myArray4.length - 1) {
    console.log(`Índice ${i}: ${myArray4[i]}`);
    i++; 
}

// for
for (let i = 0; i <= myArray4.length - 1; i++) {
    console.log(`Índice ${i}: ${myArray4[i]}`);
}

// for of
for (let item of myArray4) {
    console.log(item);
}

// forEach
myArray4.forEach((item, index) => console.log(`Índice ${index}: ${item}`));

// Apartado 18

function repeatString(string, N) {
    const str = string.repeat(N);
    return str;
}
console.log(repeatString("Hola mundo! ", 4));

// Apartado 20

function getTypes(array) {
    const myArray5 = [];
    for (let i = 0; i < array.length; i++) {
    myArray5[i] = typeof array[i];
    }
    return myArray5;
}
console.log(getTypes(["hola", [], {}, 8, undefined, null]));

// Apartado 21

function getParsedNumbers(array) {
    const myArray6 = [];
    for (let i = 0; i < array.length; i++) {
    myArray6[i] = parseFloat(array[i]);
    }
    return myArray6;
}
console.log(getParsedNumbers(["1.5", "10", "0"]));

// Apartado 24

function myArray7(array, i) {
    array.splice(i, 1);
    return array;
}
console.log(myArray7(["Strawberry", "Orange", "Coca-cola"], 1));

function filterNumber(array, numero) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === numero) {
            myArray7(array, i)
        }
    }
    return array;
}
console.log(filterNumber([1, 5, 6, 7, 5], 5)); 

// Apartado 26

function stringReverse(string) {
    let stringRevertido = "";
    for (let i = string.length - 1; i >= 0; i--) {
        stringRevertido += string[i];
    }
    return stringRevertido;
}
console.log(stringReverse("Hola me llamo María"));

// Apartado 28

function capitalize(sentence) {
    const words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        words[i] = word[0].toUpperCase() + word.substring(1);
    }
    return words.join(" ");
}
console.log(capitalize("comprobaré los errores de la consola antes de pedir ayuda."));


