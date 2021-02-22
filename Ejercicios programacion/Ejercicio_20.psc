Algoritmo Ejercicio_20
	
	Definir clave Como Caracter;
	Definir contador Como Entero;
	
	clave = "";
	contador = 3;
	
	Mientras clave <> "eureka" Y contador > 0 Hacer
		
		Escribir "Introduce una clave";
		Leer clave;
		
		Si clave <> "eureka" Entonces
			
			contador = contador - 1;
			
			Si contador == 0 Entonces
				Escribir "No tienes más intentos";
				
			SiNo
				Escribir "Te quedan ", contador, " intentos.";
			FinSi
			
			
		SiNo
			Escribir "Has acertado";
			
		FinSi
		
	FinMientras
	


	
FinAlgoritmo
