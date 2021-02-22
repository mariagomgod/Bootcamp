Algoritmo Ejercicio_6
	
	Definir num_A Como Entero;
	
	Escribir "Introduce un número";
	Leer num_A;
	
	Si num_A == 0 Entonces
		Escribir "El número es nulo";
	SiNo
		Si num_A mod 2 == 0 Entonces
			Escribir "El número es par";
		SiNo
			Escribir "El número es impar";
		FinSi
	FinSi
	
FinAlgoritmo
