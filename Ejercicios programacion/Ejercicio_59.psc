Algoritmo Ejercicio_59
	
	Definir centro, curso, alumno, n_centros, n_cursos, n_alumnos, suma, max_centro Como Entero;
	Definir notas, media, max Como Real;
	n_centros = 5;
	n_cursos = 4;
	n_alumnos = 10;
	Dimension notas[n_centros, n_cursos, n_alumnos];
	
	Para centro = 0 Hasta n_centros - 1 Hacer
		
		Escribir "Centro ", centro;
		
		Para curso = 0 Hasta n_cursos - 1 Hacer
			
			Escribir "Curso ", curso, ": " Sin Saltar;
			
			suma = 0;
			
			Para alumno = 0 Hasta n_alumnos - 1 Hacer
				
				notas[centro, curso, alumno] = Aleatorio(1, 10); //Se asignan aleatoriamente por comodidad. 
				Escribir notas[centro, curso, alumno], " " Sin Saltar;
				
				suma = suma + notas[centro, curso, alumno];
				
			FinPara
			
			media = suma / n_alumnos;
			
			Escribir "- Media del curso: ", suma / n_alumnos Sin Saltar;
			
			Si (centro == 0 Y curso == 0) O media > max Entonces
				
				max = media;
				max_centro = centro;
				
			FinSi
			
			Escribir "";
		FinPara
		
		Escribir "";
	FinPara
	
	Escribir "La media más alta es ", max, " del centro ", max_centro;
	
FinAlgoritmo
