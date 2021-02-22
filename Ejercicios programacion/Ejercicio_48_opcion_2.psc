Algoritmo Ejercicio_48_opcion_2
	
	Definir i, j, contador, tamano Como Entero;
	Definir nombre, nombres, aux Como Caracter;
	
	tamano = 1000;
	Dimension nombres[tamano];
	
	// Relleno mi array de nombres
	contador = 0;
	
	Repetir
		
		Escribir "Introduce un nombre. Déjalo vacío para acabar.";
		Leer nombre;
		
		Si nombre <> "" Entonces
			nombres[contador] = nombre;
			Escribir nombres[contador], " " Sin Saltar;
			contador = contador + 1;
		FinSi
		
	Mientras Que nombre <> "";
	
	Escribir "";
	
	// Ordeno el array con el método de la burbuja
	Para i = 0 Hasta contador - 2 Hacer // Repite el ordenamiento para todos los nombres
		
		Para j = 0 Hasta contador - 2 Hacer // Ordena un único nombre
			
			Si nombres[j] > nombres[j + 1] Entonces
				aux = nombres[j];
				nombres[j] = nombres[j + 1];
				nombres[j + 1] = aux;
			FinSi
		FinPara
	FinPara
	
	Para i = 0 Hasta contador - 1 Hacer
		
		Escribir nombres[i], " " Sin Saltar;
		
	FinPara
	
	Escribir "";
	
FinAlgoritmo
