

numero=int(input("Ingrese el numero decimal"))

numero_binario=0
multiplicador=1

while numero!=0:
    numero_binario=numero_binario+numero%2*multiplicador
    numero //=2
    multiplicador*=10


print(numero_binario)