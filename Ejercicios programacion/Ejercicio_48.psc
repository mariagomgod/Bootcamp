Algoritmo Ejercicio_48
	
	Definir tamano, indice Como Entero;
	Definir array, aux Como Caracter;
	Definir ha_habido_cambio Como Logico;
	
	indice = 0;
	
	Escribir "Introduce el tamaño del array";
	Leer tamano;
	
	Dimension array[tamano];
	
	Mientras indice < tamano Hacer
		
		Escribir "Introduce un nombre";
		Leer array[indice];
		indice = indice + 1;
		
	FinMientras
	
	Repetir
		
		ha_habido_cambio = Falso;
		
		Para indice = 0 Hasta tamano - 2 Hacer
			
			Si array[indice] > array[indice + 1] Entonces
				
				ha_habido_cambio = Verdadero;
				
				aux = array[indice];
				array[indice] = array[indice + 1];
				array[indice + 1] = aux;
				
			FinSi
			
		FinPara
		
	Mientras Que ha_habido_cambio
	
	Escribir "";
	
	Para indice = 0 Hasta tamano - 1 Hacer
		
		Escribir array[indice];
		
	FinPara
	
FinAlgoritmo
