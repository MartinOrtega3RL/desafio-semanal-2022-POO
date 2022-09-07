palabra1=str(input("Ingrese el texto"))

array=[]

for i in range(len(palabra1)-1,-1,-1):
    array.append(palabra1[i])

print(array)
