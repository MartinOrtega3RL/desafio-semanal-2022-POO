

parentesis=0
llave=0
corchete=0


expresion= str(input("Ingrese la expresion"))


for unaletra in expresion:
    if unaletra=="(":
        parentesis+=1
    if unaletra==")":
        parentesis-=1
    if unaletra=="{":
        llave+=1
    if unaletra=="}":
        llave-=1
    if unaletra=="[":
        corchete+=1
    if unaletra=="]":
        corchete-=1


if parentesis==0 and llave==0 and corchete==0:
    print("Expresion equilibrada")
if parentesis<0 and llave<0 and corchete<0:
    print("Expresion no equilibrada")
    