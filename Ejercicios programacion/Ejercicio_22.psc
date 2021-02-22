Algoritmo Ejercicio_22
	
	Definir contador_multiplos, contador_entre_1_y_100 Como Entero;
	
	contador_entre_1_y_100 = 1;
	contador_multiplos = 0;
	
	Mientras contador_entre_1_y_100 <= 100 Hacer
		
		Si contador_entre_1_y_100 mod 2 == 0 O contador_entre_1_y_100 mod 3 == 0 Entonces
			
			Escribir "He encontrado otro número: ", contador_entre_1_y_100;
			
			contador_multiplos = contador_multiplos + 1;
			
		FinSi
		
		contador_entre_1_y_100 = contador_entre_1_y_100 + 1;
	FinMientras
	
	Escribir contador_multiplos;
	
FinAlgoritmo
