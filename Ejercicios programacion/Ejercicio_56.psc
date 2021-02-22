Algoritmo Ejercicio_56
	
	Definir notas, tamano_cursos, tamano_alumnos, cursos, alumnos Como Entero;
	tamano_cursos = 3;
	tamano_alumnos = 5;
	Dimension  notas[tamano_cursos, tamano_alumnos];
	
	// Leemos y guardamos las notas
	
	Para cursos = 0 Hasta tamano_cursos - 1 Hacer
		
		Para alumnos = 0 Hasta tamano_alumnos - 1 Hacer
			
			Escribir "Introduce la nota del alumno ", alumnos, " del curso ", cursos;
			Leer notas[cursos, alumnos];
			
		FinPara
	FinPara
	
	// Escribimos las notas
	
	Para cursos = 0 Hasta tamano_cursos - 1 Hacer
		
		Escribir "Curso ", cursos, ": " Sin Saltar;
		
		Para alumnos = 0 Hasta tamano_alumnos - 1 Hacer
			
			Escribir notas[cursos, alumnos], " " Sin Saltar;
			
		FinPara
		
		Escribir "";
		
	FinPara
	
FinAlgoritmo
