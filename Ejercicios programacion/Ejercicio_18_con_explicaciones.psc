Algoritmo Ejercicio_18
	
	Definir num, num_par, contador, suma Como Entero;
	
	Escribir "Introduce un número";
	Leer num;
	
	suma = 0;
	contador = 0;
	
	Si num mod 2 <> 0 Entonces
		num_par = num + 1;
	SiNo
		num_par = num;
	FinSi
	
	Escribir "Antes de empezar, num_par valía ", num_par;
	
	Mientras contador < num Hacer
		Escribir "El número par que voy a sumar en esta iteración es ", num_par;

		suma = suma + num_par; // 0 + 6 0 + 6 + 8  0 + 6 + 8 + 10  0 + 6 + 8 + 10 + 12   0 + 6 + 8 + 10 + 12 + 14 = 50
		num_par = num_par + 2; // 6 + 2  6 + 2 + 2  6 + 2 + 2 + 2  6 + 2 + 2 + 2 + 2   6 + 2 + 2 + 2 + 2 + 2 = 16
		contador = contador + 1; // 1 2 3 4 5
		
	FinMientras
	
	Escribir "La suma es ", suma;
	
FinAlgoritmo
