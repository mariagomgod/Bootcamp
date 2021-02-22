Algoritmo Ejercicio_21
	
	Definir num, maximo, minimo, suma, contador Como Entero;
	Definir media Como Real;
	
	contador = 0;
	suma = 0;
	maximo = 0;
	minimo = 0;
	
	Repetir
		
		Escribir "Introduce un número";
		Leer num;
		
		Si num <> 0 Entonces
			
			
			suma = suma + num;
			contador = contador + 1;
			
			Si num > maximo Entonces
				maximo = num;
			FinSi
			
			Si num < minimo Entonces
				minimo = num;
			FinSi
		FinSi
		
	Mientras Que num <> 0;
	
	media = suma / contador;
	
	Escribir "La media es: ", media;
	Escribir "El máximo es: ", maximo;
	Escribir "El mínimo es: ", minimo;
	
FinAlgoritmo
