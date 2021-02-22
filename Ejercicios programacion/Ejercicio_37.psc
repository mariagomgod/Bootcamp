Algoritmo Ejercicio_37
	
	Definir tamano, dni, posicion_letra  Como Entero;
	Definir my_array, letra_dni Como Caracter;
	
	tamano = 23;
	
	Dimension my_array[tamano];
	
	Escribir "Introduce un DNI";
	Leer dni;
	
	my_array[0] = "T";
	my_array[1] = "R";
	my_array[2] = "W";
	my_array[3] = "A";
	my_array[4] = "G";
	my_array[5] = "M";
	my_array[6] = "Y";
	my_array[7] = "F";
	my_array[8] = "P";
	my_array[9] = "D";
	my_array[10] = "X";
	my_array[11] = "B";
	my_array[12] = "N";
	my_array[13] = "J";
	my_array[14] = "Z";
	my_array[15] = "S";
	my_array[16] = "Q";
	my_array[17] = "V";
	my_array[18] = "H";
	my_array[19] = "L";
	my_array[20] = "C";
	my_array[21] = "K";
	my_array[22] = "E";
	
	posicion_letra = dni mod 23;
	letra_dni = my_array[posicion_letra];
	
	Escribir "Tu DNI completo es: " dni, letra_dni;
	
FinAlgoritmo
