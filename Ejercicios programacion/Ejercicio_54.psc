Funcion resultado = es_primo(N)
	
	Definir resultado, tiene_divisores Como Logico;
	Definir indice Como Entero;
	
	tiene_divisores = Falso;
	
	Para indice = 2 Hasta N - 1 Con Paso 1 Hacer
		
		Si N mod indice == 0 Entonces
			
			tiene_divisores = Verdadero;
			
		FinSi
		
	FinPara
	
	resultado = !tiene_divisores;
	
FinFuncion



Algoritmo Ejercicio_54
	
	Definir N, indice, contador Como Entero;
	
	contador = 0;
	
	Escribir "Introduce un número";
	Leer N;
	
	Para indice = 1 Hasta N - 1 Con Paso 1 Hacer
		
		Si es_primo(indice) Entonces
			
			contador = contador + 1;
			
			Escribir indice, " es primo";
		FinSi
		
	FinPara
	
	Escribir "Hay ", contador, " números primos menores que ", N;
	
FinAlgoritmo
