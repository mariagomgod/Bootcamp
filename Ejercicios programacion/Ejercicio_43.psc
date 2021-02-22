Algoritmo Ejercicio_43
	
	Definir segs, minutos, horas Como Entero;
	
	segs = 58;
	minutos = 59;
	horas = 23;
	
	Mientras Verdadero Hacer
		
		Limpiar Pantalla;
		Escribir horas, ":", minutos, ":", segs;
		Esperar 50 Milisegundos;
		segs = segs + 1;
		
		Si segs > 59 Entonces
			
			segs = 0;
			minutos = minutos + 1;
			
		FinSi
		
		Si minutos > 59 Entonces
			
			minutos = 0;
			horas = horas + 1;
			
		FinSi
		
		Si horas > 23 Entonces
			
			horas = 0;
			
		FinSi
		
		
	FinMientras
	
	
FinAlgoritmo
