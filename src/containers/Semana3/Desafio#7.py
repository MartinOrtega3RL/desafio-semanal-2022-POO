palabra1=str(input("Ingrese la palabra"))

cadena=[]
contador=0

for unelemento in palabra1:
    cadena.append(unelemento)

for otroelemento in cadena:
    print(f"La letra:{otroelemento} se repite: {cadena.count(otroelemento)} veces")
