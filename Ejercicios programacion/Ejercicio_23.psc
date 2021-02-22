Algoritmo Ejercicio_23
	
	Definir dia, mes, año, fecha Como Entero;
	Definir nombre_mes Como Caracter;
	
	Repetir
		
	Escribir "Introduce un dia";
	Leer dia;
	
	Escribir "Introduces un mes";
	Leer mes;
	
	Escribir "Introduce un año";
	Leer año;
	
	Hasta Que dia >= 1 Y año > 0 Y (dia <= 31 Y (mes == 1 O mes == 3 O mes == 5 O  mes == 7 O mes == 8 O mes == 10 O mes == 12) O dia <= 28 Y mes == 2 O dia <= 30 Y (mes == 4 O mes == 6 O mes == 9 O mes == 11) O dia == 29 Y mes == 2 Y año mod 4 == 0);
	
	
	Segun mes Hacer
		1:
			nombre_mes = "Enero";
		2:
			nombre_mes = "Febrero";
		3:
			nombre_mes = "Marzo";
		4:
			nombre_mes = "Abril";
		5:
			nombre_mes = "Mayo";
		6:
			nombre_mes = "Junio";
		7:
			nombre_mes = "Julio";
		8:
			nombre_mes = "Agosto";
		9:
			nombre_mes = "Septiembre";
		10:
			nombre_mes = "Octubre";
		11:
			nombre_mes = "Noviembre";
		
		De Otro Modo:
			nombre_mes = "Diciembre";
	Fin Segun
	
	Escribir dia, " de ", nombre_mes, " de ", año;
	
FinAlgoritmo
