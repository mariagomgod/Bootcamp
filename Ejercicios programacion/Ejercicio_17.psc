Algoritmo Ejercicio_17
	
	Definir N, contador, suma Como Entero;
	
	Escribir "Introduce un número";
	Leer N;
	
	contador = 0;
	suma = 0;
	
	Mientras contador < N Hacer
		suma = suma + contador;
		contador = contador + 1;
	Fin Mientras
	
	Escribir "La suma es: ", suma;
	
FinAlgoritmo
