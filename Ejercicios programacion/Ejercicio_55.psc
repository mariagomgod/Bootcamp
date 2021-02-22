Algoritmo Ejercicio_55
	
	Definir matriz, tamano_columnas, tamano_filas, fila, columna Como Entero;
	tamano_filas = 4;
	tamano_columnas = 5;
	Dimension matriz[tamano_filas, tamano_columnas];
	
	Para fila = 0 Hasta tamano_filas - 1 Hacer
		
		Para columna = 0 Hasta tamano_columnas - 1 Hacer
			
			matriz[fila, columna] = Aleatorio(1, 100);
			
			Escribir matriz[fila, columna], " " Sin Saltar;
			
		FinPara
		
		Escribir "";
		
	FinPara
	
	
	
FinAlgoritmo
