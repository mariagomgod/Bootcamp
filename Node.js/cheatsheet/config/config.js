// configuramos la variable de entorno PORT para que 
// coja una existente o le asigne  el 3000 si no existiera

process.env.PORT = process.env.PORT || 3000;