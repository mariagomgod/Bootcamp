Algoritmo Ejercicio_14
	
	Definir precio_cobro_cliente_Euros, galones_A_Litros, galones_surtidos Como Real;
	
	Escribir "Introduce los galones surtidos";
	Leer galones_surtidos;
	
	galones_A_Litros = galones_surtidos * 3.78541;
	
	precio_cobro_cliente_Euros = galones_A_Litros * 1.333;
	
	Escribir "El precio de la gasolina en euros es: ", precio_cobro_cliente_Euros;
	

FinAlgoritmo
