Algoritmo Ejercicio_38
	
	Definir my_array_1, my_array_2, tamano, indice Como Entero;
	
	tamano = 5;
	
	Dimension my_array_1[tamano];
	Dimension my_array_2[tamano];
	
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		
		my_array_1[indice] = indice + 1;
		
		Escribir my_array_1[indice], " " Sin Saltar;
		
	FinPara
	
	Escribir "";
	
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		
		my_array_2[indice] = my_array_1[tamano - 1 - indice];
		
		Escribir my_array_2[indice], " " Sin Saltar;
		

	FinPara
	
	Escribir "";
	
FinAlgoritmo
