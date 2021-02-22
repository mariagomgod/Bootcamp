Algoritmo Ejercicio_9
	
	Definir cal_1, cal_2, cal_3, cal_4, cal_5, promedio Como Real;
	
	Escribir "Introduce 5 calificaciones";
	Leer cal_1, cal_2, cal_3, cal_4, cal_5;
	
	promedio = (cal_1 + cal_2 + cal_3 + cal_4 + cal_5)/ 5;
	
	Si promedio >= 5 Entonces
		Escribir promedio, ".Aprobado";
	SiNo
		Escribir promedio, ".No aprobado";
		
	FinSi
	
FinAlgoritmo
