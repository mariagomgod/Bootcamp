Algoritmo Ejercicio_7
	
	Definir precio_articulo, dinero_entregado, cambio Como Real;
	
	Escribir "Introduce el precio del artículo";
	Leer precio_articulo;
	
	Escribir "Introduce el dinero entregado por el cliente";
	Leer dinero_entregado;
	
	cambio = precio_articulo - dinero_entregado;
	
	Si precio_articulo == 0 Entonces
		Escribir "No devuelve cambio";
	SiNo
		Si precio_articulo > dinero_entregado Entonces
			Escribir "La cantidad que falta es: ", cambio;
		SiNo
			Escribir "La cantidad a devolver es: ", cambio * (-1);
		FinSi
	FinSi
	
	
FinAlgoritmo
