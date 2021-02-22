Algoritmo Ejercicio_47
	
	Definir array, tamano, aux, i, j Como Entero;
	tamano = 5;
	Dimension array[tamano];
	
	Escribir "Estado inicial";
	Para i = 0 Hasta tamano - 1 Hacer
		
		array[i] = Aleatorio(1, 100);
		Escribir array[i], " " Sin Saltar;
		
	FinPara
	Escribir "";
	
	Para j = 0 Hasta tamano - 2 Hacer
		
		Para i = 0 Hasta tamano - 2 Hacer
			
			Si array[i] > array[i + 1] Entonces
				aux = array[i];
				array[i] = array[i + 1];
				array[i + 1] = aux;
			FinSi
			
		FinPara
	FinPara



	Escribir "Estado final";
	Para i = 0 Hasta tamano - 1 Hacer
		
		Escribir array[i], " " Sin Saltar;
		
	FinPara
	Escribir "";
	
	
FinAlgoritmo
