Algoritmo Ejercicio_8
	
	Definir sueldo_trabajador Como Entero;
	Definir incremento_sueldo Como Real;
	
	Escribir "Introduce tu sueldo";
	Leer sueldo_trabajador;
	
	incremento_sueldo = 1.15;
	
	Si sueldo_trabajador < 1000 Entonces
		Escribir "Tu sueldo será de: ", sueldo_trabajador * incremento_sueldo;
	SiNo
		Escribir "Tu sueldo será el mismo";
	FinSi
	
FinAlgoritmo
