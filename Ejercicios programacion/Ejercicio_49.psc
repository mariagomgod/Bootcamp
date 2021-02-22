Algoritmo Ejercicio_49
	
	Definir array_dulces, array_bebidas, array_conservas, tamano, mes, dulces_max, max, minimo, mes_maximo, suma, mes_minimo Como Entero;
	Definir promedio_anual_costes_bebidas Como Real;
	
	tamano = 12;
	
	Dimension array_dulces[tamano], array_bebidas[tamano], array_conservas[tamano];
	
	Escribir "Deps", "  ", "Dulces", "  ", "Bebidas", "  ", "Conservas";
	
	Para mes = 0 Hasta tamano - 1 Hacer
		
		array_dulces[mes] = Aleatorio(50, 300);
		array_bebidas[mes] = Aleatorio(50, 300);
		array_conservas[mes] = Aleatorio(50, 300);
		
		Escribir "Mes " mes + 1, "   ", array_dulces[mes], "    ", array_bebidas[mes], "      ", array_conservas[mes];
	FinPara
	
	// Apartado A
	
	suma = 0;
	
	Para mes = 0 Hasta tamano - 1 Hacer
		
		Si mes == 0 O array_dulces[mes] > dulces_max Entonces
			
			dulces_max = array_dulces[mes];
			mes_maximo = mes;
			
		FinSi
		
	FinPara
	
	Escribir "El coste máximo de producción de dulces es: ", mes_maximo + 1, " con un total de: ", dulces_max;
	
	// Apartado B
	
	Para mes = 0 Hasta tamano - 1 Hacer
		
		suma = suma + array_bebidas[mes];
		
	FinPara
	
	promedio_anual_costes_bebidas = suma / tamano;
	
	Escribir "El promedio anual de coste de bebidas es: ", promedio_anual_costes_bebidas;
	
	// Apartado C
	
	Para mes = 0 Hasta tamano - 1 Hacer
		
		Si mes == 0 O array_bebidas[mes] > max Entonces
			
			max = array_bebidas[mes];
			mes_maximo = mes;
			
		FinSi
		
		Si mes == 0 O array_bebidas[mes] < minimo Entonces
			minimo = array_bebidas[mes];
			mes_minimo = mes;
			
		FinSi
		
	FinPara
	
	Escribir "El mes con más coste de bebidas es: ", mes_maximo + 1, " con un total de: ", max;
	
	// Apartado D
	
	Si array_dulces[mes] < array_bebidas[mes] Y array_dulces[mes] < array_conservas[mes] Entonces
		
		Escribir "En diciembre, el departamento de dulces ha tenido el menor coste";
		
	SiNo
		
		Si array_bebidas[mes] < array_conservas[mes] Entonces
			
			Escribir "En diciembre, el departamento de bebidas ha tenido el menor coste";
		SiNo
			Escribir "En diciembre, el departamento de conservas ha tenido el menor coste";
			
		FinSi
		
	FinSi
	
	
	
FinAlgoritmo
