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




