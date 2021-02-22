Algoritmo Ejercicio_11
	
	Definir descuento_1, descuento_2, descuento_3, descuento_4, cantidad_compra Como Real;
	
	Escribir "Introduce una cantidad";
	Leer cantidad_compra;
	
	descuento_1 = 0.95;
	descuento_2 = 0.9;
	descuento_3 = 0.8;
	descuento_4 = 0.75;
	
	Si cantidad_compra < 500 Entonces
		Escribir "No hay descuento";
	SiNo
		Si cantidad_compra >= 500 Y cantidad_compra <= 1000 Entonces
			Escribir "Tienes descuento de un 5%: ", cantidad_compra * descuento_1;
		SiNo
			Si cantidad_compra > 1000 Y cantidad_compra <= 7000 Entonces
				Escribir "Tienes un descuento de un 10%: ", cantidad_compra * descuento_2;
			SiNo
				Si cantidad_compra > 7000 Y cantidad_compra <= 15000 Entonces
					Escribir "Tienes un descuento de un 20%: ", cantidad_compra * descuento_3;
				SiNo
					Si cantidad_compra > 15000 Entonces
						Escribir "Tienes un descuento de un 25%: ", cantidad_compra * descuento_4;
					FinSi
	
				FinSi
			FinSi
		FinSi
	FinSi
	
FinAlgoritmo
