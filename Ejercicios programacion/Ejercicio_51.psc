Algoritmo Ejercicio_51
	
	Definir num, divisor Como Entero;
	Definir es_primo Como Logico;
	
	es_primo = Verdadero;
	
	Escribir "Introduce un número entero positivo para comprobar si es primo";
	Leer num;
	
	Para divisor = 2 Hasta num - 1 Con Paso 1 Hacer
		
		Si num mod divisor == 0 Entonces
			
			es_primo = Falso;
			
		FinSi
		
	FinPara
	
	Si es_primo Entonces
		
		Escribir "El número ", num, " es primo.";
		
	SiNo
		
		Escribir "El número ", num, " no es primo.";
		
	FinSi
	
FinAlgoritmo
