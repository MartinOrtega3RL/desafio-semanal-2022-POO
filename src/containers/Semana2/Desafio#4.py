def calcular(pol,valor1,valor2):
    if pol=="Triangulo":
        resultado=valor1*valor2/2
        print("El area del Triangulo es: ",resultado)
    elif pol=="Cuadrado":
        resultado=valor1*valor2
        print("El area del Cuadrado es: ",resultado)

    elif pol=="Rectangulo":
        resultado=valor1*valor2
        print("El area del Rectangulo es:",resultado)

calcular("Rectangulo",4,3)