lstPalabra=[]
lstPalabra2=[]
palabra1=str(input("Ingrese la primer palabra"))
palabra2=str(input("Ingrese la segunda palabra"))

if palabra1==palabra2:
    print("Las palabras son Iguales")
else:
    for letra in palabra1:
        lstPalabra.append(letra.lower()) #Para que tome las Mayusculas Tambien
    for letra2 in palabra2:
        lstPalabra2.append(letra2.lower())

    lstPalabra.sort(reverse=False)  #Reverse=False ·· Ordena las Palabras en Orden Alfabetico Ascendente
    lstPalabra2.sort(reverse=False)

    if lstPalabra==lstPalabra2:
        print("Es un anagrama")
    else:
        print("No es un anagrama")