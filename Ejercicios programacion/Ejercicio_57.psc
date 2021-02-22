Algoritmo Ejercicio_57
	
	Definir matriz, fila, columna, tamano Como Entero;
	Definir es_simetrica Como Logico;
	tamano = 3;
	Dimension matriz[tamano, tamano];
	
	matriz[0,0] = 1;
	matriz[0,1] = 2;
	matriz[0,2] = 3;
	
	matriz[1,0] = 2;
	matriz[1,1] = 1;
	matriz[1,2] = 2;
	
	matriz[2,0] = 3;
	matriz[2,1] = 2;
	matriz[2,2] = 1;
	
	// Imprimimos la matriz
	Para fila = 0 Hasta tamano - 1 Hacer
		Para columna = 0 Hasta tamano - 1 Hacer
			Escribir matriz[fila, columna], " " Sin Saltar;
		FinPara
		Escribir "";
	FinPara
	
	es_simetrica = Verdadero;
	
	Para fila = 0 Hasta tamano - 1 Hacer
		Para columna = 0 Hasta tamano - 1 Hacer
			Si matriz[fila, columna] <> matriz[columna, fila] Entonces
				es_simetrica = Falso;
			FinSi
		FinPara
	FinPara
	
	Si es_simetrica Entonces
		Escribir "Es simétrica";
	SiNo
		Escribir "No es simétrica";
	FinSi
	
FinAlgoritmo
