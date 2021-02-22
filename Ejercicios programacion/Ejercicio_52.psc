Algoritmo Ejercicio_52
	
	Definir array, tamano, num, indice Como Entero;
	tamano = 10;
	Dimension  array[10];
	
	Para indice = 0 Hasta  tamano - 1 Hacer
		
		array[indice] = Aleatorio(1, 15);
		Escribir array[indice], " " Sin Saltar;
	FinPara
	
	Escribir "Introduce un número para buscarlo en el array";
	Leer num;
	
	indice = 0;
	
	Mientras indice < tamano Y array[indice] <> num Hacer
		
		indice = indice + 1;
		
	FinMientras
	
	Si indice < tamano Entonces
		
		Escribir "La primera coincidencia de ", num, " es en el índice ", indice;
		
	SiNo
		
		Escribir num, " no está presente en el array";
	FinSi
FinAlgoritmo

