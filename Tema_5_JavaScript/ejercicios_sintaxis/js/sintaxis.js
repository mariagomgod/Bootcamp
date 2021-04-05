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

// Opción 2 en sintaxis2.js


// Apartado 3 - Escribe una función nombrada que devuelva true si el argumento
// dado es de tipo boolean y false en caso contrario.

function funcion(e) {
    return typeof e === "boolean";
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

function numero(num) {
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

console.log(`Los días vividos son: ${edad(2)}`);


// Apartado 8 - Crea una función que reciba un array y devuelva su último elemento.
// Prueba tu función con varios arrays de diferentes longitudes.

function array(myArray) {
    return myArray[myArray.length - 1];
}
console.log(`La última posición del array([0, 1, 2, 3, 4]) es: ${array([0, 1, 2, 3, 4])}`);


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

function sameType(x, y) {
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

function stringToArray(string) {
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


// Apartado 13 - Los dominios en la web, se componen del nombre de dominio (codespaceacademy) y
// de un TLD (top-level-domain) como, por ejemplo .com/ .es/ .org, etc. Crea una función que se 
// llame parseDomain() que reciba por argumento un string y devuelva un objeto con dos propiedades:
// domain y tld.

function parseDomain(string) { // "marca.com"
    const domainParts = string.split("."); // ["marca", "com"]
    const objeto = {
        domain: domainParts[0],
        tld: domainParts[1]
    }; // { domain: "marca", tld: "com"}
    return objeto;
}
console.log(parseDomain("marca.com"));


// Apartado 14 - Nos han prohibido el uso del operador de igualdad estricta (===), pero queremos poder
// seguir utilizando esa funcionalidad. Crea una función que devuelva true si dos números tienen el 
// mismo valor y el mismo tipo de dato. Debemos usar el operador lógico "&&". Prueba tu función con
// estos dos inputs: 
// strictEquality("5", 5); //false
// strictEquality(5, 5); //true

function strictEquality(x, y) {
    if (x == y && typeof x == typeof y) {
        return true;
    } else {
        return false;
    }
}
console.log(strictEquality(5, 5));
console.log(strictEquality("5", 5));


// Apartado 15 - Crea una función que reciba dos strings y devuelva true si tienen la misma longitud y false 
// en caso contrario.

function sameLength (string1, string2) {
    if (string1.length === string2.length) {
        return true;
    } else {
        return false;
    }
}
console.log(sameLength("hola", "María"));


// Apartado 16 - Crea una función que reciba un string y determine si está vacío sin utilizar la propiedad
// length.

function emptyString(string) {
    if (string === "") {
        return true;
    } else {
        return false;
    }
}
console.log(emptyString(""));

// Otra opción:
// const emptyString = string => string ? true : false; // se le llama falsy values


// Apartado 17 - Imprimir elemento a elemento el array del apartado 1 de cuatro formas diferentes:
// while; for; for of; forEach.

let otherArray = ["Hola", "amigos", "míos", "soy", "María"];
console.log(otherArray);

//While
let i = 0;

while (i <= otherArray.length-1) {
    console.log(`Índice ${i}: ${otherArray[i]}`);
    i++;
}

//For
for (let i = 0; i <= otherArray.length-1; i++) {
    console.log(`Índice ${i}: ${otherArray[i]}`);
}

//For of
for (let item of otherArray) {
    console.log(item);
}

//forEach
otherArray.forEach((item, index) => console.log(`Índice ${index}: ${item}`));


// Apartado 18 - Crea una función que reciba un string y un número N y devuelva el string
// original repetido N veces.

function repeatString(string, N) {
    
    let resultado = "";

    for (let i = 1; i <= N; i++) {
    resultado += string;
    }

    console.log(resultado);
}
repeatString("hola ", 4);

// Opción 2 en sintaxis2.js



// Apartado 19 - Crea una función que recibe un objeto con dos campos, votos positivos y votos
// negativos y que devuelva la cuenta final.

function getVoteCount(object) {
    let resultado = object.upVotes - object.downVotes;
    return resultado;
}
console.log(`El resultado es: ${getVoteCount({upVotes: 50, downVotes: 20})}`);



// Apartado 20 - Crea una función que recibe un array de tipos de datos mezclados y que devuelva
// otro array con el tipo de cada uno de los elementos.

function getTypes(array) {
    const myArray3 = [];
    for (let i = 0; i < array.length; i++) {
        myArray3[i] = typeof array[i]; // se puede hacer con push
    }
    return myArray3;
}
console.log(getTypes(["hola", 2, {}, [], null, undefined]));



// Apartado 21 - Función que dado un array de números con formato string devuelva un array con los
// números ya parseados.

function getParsedNumbers(array) {
    const myArray4 = [];
    for (let i = 0; i < array.length; i++) {
        myArray4[i] = parseFloat(array[i]); 
    }
    return myArray4;
}
console.log(getParsedNumbers(["1", "2.5", "0.8", "5"]));



// Apartado 22 - Crea una función de flecha que devuelva "Positivo" si el número que recibe por argumento es mayor 
// o igual que cero y "Negativo" en caso contrario. Usa el operador ternario.

const isPositive = (num) => num >= 0 ? "Positivo" : "Negativo";

console.log(isPositive(-3));



// Apartado 23 - Crea una función que dado un array cualquiera y un índice, borre el elemento guardado en ese índice.

function myArray5(array, i) {
    array.splice(i, 1);
    return array;
}

console.log(myArray5(["Lemon", "Orange", "Coca-cola"], 1));



// Apartado 24 - Usando la función del apartado anterior, crea otra función que dado una array de números y un 
// número a filtrar, devuelva un array borrando todas las apariciones de dicho número.

function filterNumber(array, num) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === num) {
            myArray5(array, i);
        }
    }
    return array;
    // return array.filter((element) => element != num);
}

console.log(filterNumber([4, 5, 5, 5, 5, 6], 5));



// Apartado 25 - Crea dos funciones que recibirán un objeto, la primera devolverá un array con los nombres de todas
// sus propiedades. La segunda devolverá un array con los valores de dichas propiedades. Investigar los métodos
// keys y values del prototipo de Object.

function funcion1(object) {
    return Object.keys(object);
}

console.log(funcion1({name: "Pablo", surname: "Pérez", age: "20"}));

function funcion2(object) {
    return Object.values(object);
}

console.log(funcion2({name: "Pablo", surname: "Pérez", age: "20"}));



// Apartado 26 - Crea una función que invierta un string.

function stringReverse(cadena) {
    let cadenaRevertida = "";
    for(let i = cadena.length-1; i>=0; i--) {
       cadenaRevertida += cadena[i];
    }
    return cadenaRevertida;
}

console.log(stringReverse("Hola mi nombre es María"));



// Apartado 27 - Crea una función que compare strings sin tener en cuenta las mayúsculas/ minúsculas.

function compareStrings(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}

console.log(compareStrings("María", "MARÍA"));


// Apartado 28 - Crea una función que convierta en mayúscula sólo la primera letra de cada palabra de un string
// dado. El apartado 11 será de ayuda. Investigar cómo unir un array de strings en un único string.

function capitalize(sentence) {
    const words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        words[i] = word[0].toUpperCase() + word.substring(1);
    }
    return words.join(" ");
}

console.log(capitalize("Hola me llamo María"));


// Apartado 29 - Crea una función en una única línea que reciba un valor lógico y devuelva opuesto.

const negate = (logical) => !logical;

console.log(negate(true));
console.log(negate(false));






