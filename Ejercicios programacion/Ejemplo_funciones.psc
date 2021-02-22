Funcion saludar(nombre, apellido, dia)
	
	Escribir "Hola ", nombre, " ", apellido;
	
	Si Minusculas(dia) == "viernes" Entonces
		
		Escribir "Ya es viernes, ¡buen finde!";
		
	SiNo
		Escribir "A seguir con la semana";
		
	FinSi
	
FinFuncion


Algoritmo saludo
	
	Definir nombre, apellido, dia Como Caracter;
	
	nombre = "Peter";
	apellido = "Parker";
	dia = "viernes";
	
	saludar(nombre, apellido, dia);
	Escribir "";
	
	saludar("Jane", "Doe", "jueves");
	

FinAlgoritmo
