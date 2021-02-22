Algoritmo Ejercicio_39
	
	Definir array_1, array_2, tamano, indice Como Entero;
	Definir son_iguales Como Logico;
	
	tamano = 5;
	
	son_iguales = Verdadero;
	
	Dimension array_1[tamano], array_2[tamano];
	
	array_1[0] = 1;
	array_1[1] = 2;
	array_1[2] = 3;
	array_1[3] = 4;
	array_1[4] = 5;
	
	array_2[0] = 1;
	array_2[1] = 2;
	array_2[2] = 3;
	array_2[3] = 4;
	array_2[4] = 5;
	
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		
		Si array_1[indice] <> array_2[indice] Entonces
			
			son_iguales = Falso;
			
		FinSi
		
	FinPara
	
	Si son_iguales Entonces
		
		Escribir "Los arrays son iguales";
		
	SiNo
		
		Escribir "Los arrays son diferentes";
	FinSi
	
	
FinAlgoritmo
