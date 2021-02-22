Algoritmo Ejercicio_13B_Propuesto_Queri
	
	// Igual que el ejercicio 13 pero además, si base y altura son iguales, decir que es un cuadrado
	
	Definir base, altura Como Real;
	Definir forma Como Caracter;
	
	Escribir "Introduce una base";
	Leer base;
	
	Escribir "Introduce una altura";
	Leer altura;
	
	Si base == altura Entonces
		forma = "cuadrado";
	SiNo
		forma = "rectángulo";
	FinSi
	
	Escribir "La superficie del ", forma, " es: ", base * altura;
	Escribir "El perímetro del ", forma, " es: ", 2 * (base + altura);
	
	
FinAlgoritmo
