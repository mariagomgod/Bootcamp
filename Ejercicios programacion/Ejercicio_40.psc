Funcion resultado = si_son_repetidos(array, tamano, N)
	Definir resultado Como Logico;
	Definir indice Como Entero;
	
	resultado = Falso;
	
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		
		Si array[indice] == N Entonces
			
			resultado = Verdadero;
			
		FinSi
	Fin Para
FinFuncion


Algoritmo Ejercicio_40
	
	Definir array, tamano, indice, num_aleatorio Como Entero;
	Definir son_repetidos Como Logico;
	
	tamano = 20;
	
	Dimension array[tamano];
	
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		
		Repetir
			
			num_aleatorio = Aleatorio(1, 20);
			
		Mientras Que si_son_repetidos(array, indice, num_aleatorio);
		
		array[indice] = num_aleatorio;
		
		Escribir "Array [", indice, "] contiene el valor ", array[indice];
		
	FinPara
	
FinAlgoritmo
