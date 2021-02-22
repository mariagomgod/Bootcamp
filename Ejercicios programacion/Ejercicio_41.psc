Algoritmo Ejercicio_41
	
	// Apartado a
	
//	Definir array, tamano, indice, num, num_mayores_que_0, contador Como Entero;
//	Definir promedio_positivos, promedio_todos_num Como Real;
//	
//	contador = 0;
//	
//	Escribir "Introduce el tamaño del array";
//	Leer tamano;
//	
//	Dimension array[tamano];
//	
//	Para indice = 0 Hasta tamano - 1 Con Paso  1 Hacer
//		
//		array[indice] = Aleatorio(-15, 15);
//		
//		Escribir array[indice];
//		
//		Si array[indice] > 0 Entonces
//			
//			contador = contador + 1;
//			
//		FinSi
//		
//		Escribir "Los números mayores que 0 son: ", contador;
//		
//	FinPara
	
	
	// Apartado b
	
//	Definir array, tamano, indice, num, num_mayores_que_0, contador, suma Como Entero;
//	Definir promedio_positivos, promedio_todos_num Como Real;
//	
//	contador = 0;
//	suma = 0;
//	
//	Escribir "Introduce el tamaño del array";
//	Leer tamano;
//	
//	Dimension array[tamano];
//	
//	Para indice = 0 Hasta tamano - 1 Con Paso  1 Hacer
//		
//		array[indice] = Aleatorio(-15, 15);
//		
//		Escribir array[indice];
//		
//		Si array[indice] > 0 Entonces
//			
//			contador = contador + 1;
//			suma = suma + array[indice];
//			
//		FinSi
//		
//		promedio_positivos = suma / contador;
//		
//		Escribir "Los números mayores que 0 son: ", contador;
//		
//		Escribir "El promedio de los números positivos es: ", promedio_positivos;
//		
//	FinPara
	
	// Apartado c
	
	Definir array, tamano, indice, num, num_mayores_que_0, contador, suma, suma_total Como Entero;
	Definir promedio_positivos, promedio_todos_num Como Real;
	
	contador = 0;
	suma = 0;
	suma_total = 0;
	
	
	Escribir "Introduce el tamaño del array";
	Leer tamano;
	
	Dimension array[tamano];
	

	Para indice = 0 Hasta tamano - 1 Con Paso  1 Hacer
		
		array[indice] = Aleatorio(-15, 15);
		
		Escribir array[indice];
		
		Si array[indice] > 0 Entonces
			
			contador = contador + 1;
			suma = suma + array[indice];
			
		FinSi
		
		suma_total = suma_total + array[indice];
		
	FinPara
	
		promedio_todos_num = promedio_todos_num + array[indice];
	
		promedio_positivos = promedio_positivos / contador;
		
		Escribir "Los números mayores que 0 son: ", contador;
		
		Escribir "El promedio de los números positivos es: ", promedio_positivos;
		
		Escribir "El promedio total es: ", promedio_todos_num;
		
	
	
	
	
	
	
	
	
	
	
	
FinAlgoritmo
