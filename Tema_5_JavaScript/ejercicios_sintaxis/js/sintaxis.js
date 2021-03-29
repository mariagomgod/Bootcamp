// Apartado 1 - Define e inicializa un array con 5 elementos string
// en una sola línea.

let myArray = ["Hola", "amigos", "míos", "soy", "María"];
console.log(myArray);


// Apartado 2 - Define un array inicialmente vacío. Añade tres elementos
// de tipo number posteriormente. Elimina por completo el primero y añade
// dos nuevos números al inicio. En cada paso, imprime la longitud y el 
// array entero por consola utilizando un string template del tipo: `Longitud: ${}`.

const myArray2 = [];

myArray2[0] = 1;
myArray2[1] = 2;
myArray2[2] = 3;

myArray2.splice(0, 1); //el primer parámetro es el índice donde empezamos, el segundo el número de elementos a eliminar contando desde el índice en el que empezamos
console.log(`Longitud: ${myArray2.length}`);
console.log(myArray2);

myArray2.splice(0, 0, 6, 8); // a partir del índice 0 no eliminar ningún número pero añade un 6 y un 8 (todos los número que hubieran en el array se desplazan a la derecha dos posiciones)
console.log(`Longitud: ${myArray2.length}`);
console.log(myArray2);


// Apartado 3 - Escribe una función nombrada que devuelva true si el argumento
// dado es de tipo boolean y false en caso contrario.

function funcion (e) {
    if (typeof e === "boolean") {
        return true;
    } else {
        return false;
    }
}
console.log(funcion(true));


// Apartado 4 - Escribe una función que devuelva la longitud de un string recibido por argumento.

const lengthString = (e) => e.length;

console.log(`La longitud del string "Mundo" es: ${lengthString("Mundo")}`);


// Apartado 5 - Crea una función de flecha que reciba una cantidad de minutos y lo
// devuelva convertido en segundos.

const convertMinutestoSeconds = (minutes) => minutes * 60;

console.log(convertMinutestoSeconds(4));


// Apartado 6 - Crea una función que reciba un número y devuelva el siguiente número
// par. (Si él es par, lo devolverá directamente).

function numero (num) {
    if (num % 2 == 0) {
        return num;
    } else {
        return num + 1;
    }
} 
console.log(numero(2));


// Apartado 7 - Crea una función que reciba una edad y devuelva la cantidad de días que
// esa persona ha vivido. Puedes obviar los años bisiestos.

const edad = (numero) => numero * 365;

console.log(edad(2));


// Apartado 8 - Crea una función que reciba un array y devuelva su último elemento.
// Prueba tu función con varios arrays de diferentes longitudes.

function array (myArray) {
    return myArray[myArray.length - 1];
}
console.log(array([0, 1, 2, 3, 4]));


// Apartado 9 - Un granjero necesita contar la cantidad de patas de los animales en 
// sus diferentes granjas muy frecuentemente, pero tiene tres especies: pollos (2 patas),
// vacas (4 patas) y cerdos (4 patas). Tu función recibirá la cantidad de animales en 
// ese orden y devolverá la cantidad de patas totales. 

function countLegs (numPollos, numVacas, numCerdos) {
    return (numPollos * 2) + (numVacas * 4) + (numCerdos * 4);
}
console.log(`La cantidad de patas totales son: ${countLegs(1, 2, 2)}`);


// Apartado 10 - Crea una función que determine si dos datos recibidos por argumentos son
// del mismo tipo.

function sameType (x, y) {
    if (typeof x === typeof y) {
        return true;
    } else {
        return false;
    }
}
console.log(sameType(1, "hola"));


// Apartado 11 - Crea una función que reciba un string con una frase y devuelva un array
// donde cada elemento será una palabra de la frase original. Investigar método existente
// de los strings para este fin.

function stringToArray (string) {
    return string.split(" ");
}
console.log(stringToArray("Hola me llamo María"));


// Apartado 12 - Inicializa dos objetos, address1 y address2 con las propiedades: provincia,
// ciudad, municipio, código postal, calle, número, planta y número de puerta.

const address1 = {
    provincia: "Jaén",
    ciudad: "Linares",
    municipio: "Linares",
    codigo_postal: 23700,
    calle: "Tetuán",
    numero: 5,
    planta: 1,
    numero_de_puerta: 2
}

console.log(address1);

const address2 = {
    provincia: "Málaga",
    ciudad: "Benalmádena",
    municipio: "Benalmádena",
    codigo_postal: 29870,
    calle: "Almendros",
    numero: 8,
    planta: 3,
    numero_de_puerta: 1
}

console.log(address2);
