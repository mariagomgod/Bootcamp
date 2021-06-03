// configuramos la variable de entorno PORT para que 
// coja una existente o le asigne  el 3000 si no existiera

process.env.PORT = process.env.PORT || 4000;

//una forma de generar una semilla lo suficientemente aleaotoria
process.env.SEED = process.env.SEED || "SECRET KEY";