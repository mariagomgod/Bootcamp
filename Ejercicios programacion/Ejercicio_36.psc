Algoritmo Ejercicio_36
	
	Definir my_array_1, my_array_2, tamano, indice, multiplicacion Como Entero;
	
	tamano =10;
	multiplicacion = 1;
	
	Dimension my_array_1[tamano];
	Dimension my_array_2[tamano];
	
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		
		my_array_1[indice] = Aleatorio(1, 20);
		my_array_2[indice] = Aleatorio(1, 20);
		
		Escribir "My_array_1[", indice, "] contiene el valor ", my_array_1[indice];
		
		Escribir "My_array_2[", indice, "] contiene el valor ", my_array_2[indice];
		
		multiplicacion = my_array_1[indice] * my_array_2[indice];
		
		Escribir "La multiplicación de los elementos es: ", multiplicacion;
		
		Escribir "";
		
	FinPara
	
	
FinAlgoritmo
