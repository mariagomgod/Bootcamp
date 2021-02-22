Funcion resultado = promedio(array, tamano)
	
	Definir resultado Como Real;
	Definir indice, suma Como Entero;
	
	suma = 0;
	
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		
		suma = suma + array[indice];
		
	FinPara
	
	resultado = suma / tamano;
	
FinFuncion



Algoritmo Ejercicio_53
	
	Definir array, tamano, indice Como Entero;
	
	
	Escribir "Introduce el tamano del array";
	Leer tamano;
	
	Dimension array[tamano];
	
	
	Para indice = 0 Hasta tamano - 1 Hacer
		
		Escribir "Introduce un número";
		Leer array[indice];
		
	FinPara
	
	Escribir "El promedio es ", promedio(array, tamano);
	
	
FinAlgoritmo
