Algoritmo Ejercicio_18
	
	Definir N, contador, media, numero_par Como Entero;
	
	Escribir "Introduce un número";
	Leer N;
	
	contador = 0;
	suma = 0;
	
	Si N mod 2 == 0 Entonces
		numero_par = N;
	SiNo
		numero_par = N + 1;
		
	FinSi
	
	
	Mientras contador < N Hacer
		
		Escribir "Número par encontrado: ", numero_par;
		suma = suma + numero_par;
		contador = contador + 1;
		numero_par = numero_par + 2;
		
	FinMientras
	
	Escribir "La suma es: ", suma;
	
FinAlgoritmo
