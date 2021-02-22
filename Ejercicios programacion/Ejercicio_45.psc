Algoritmo Ejercicio_45
	
	// Teniendo un vector con los números naturales que queramos, meter en otro de la misma longitud aquellos que sean pares y mayores que 25.
	// Después, mostrar el vector de origen completo y el de destino solo los números introducidos.
	
	Definir array_1, array_2, tamano, i, indice_array_2 Como Entero;
	tamano = 10;
	Dimension array_1[tamano], array_2[tamano];
	
	indice_array_2 = 0;
	
	Para i = 0 Hasta tamano - 1 Con Paso 1 Hacer
		
		// Rellenar e imprimir el primer array
		array_1[i] = Aleatorio(1, 50);
		Escribir array_1[i] , " " Sin Saltar;
		
		// Rellenar el segundo array
		Si array_1[i] mod 2 == 0 Y array_1[i] > 25 Entonces
			
			array_2[indice_array_2] = array_1[i];
			indice_array_2 = indice_array_2  + 1;
			
		FinSi
		
	FinPara
	
	Escribir "";
	
	Si indice_array_2 < 1 Entonces
		
		Escribir "El segundo array está vacío";
	SiNo
		Para i = 0 Hasta indice_array_2 - 1 Con Paso 1 Hacer
		
		Escribir array_2[i] , " " Sin Saltar;
		
	FinPara
	
	Escribir "";
	
	FinSi

	
FinAlgoritmo
