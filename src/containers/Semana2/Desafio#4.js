function poligono(pol,val1,val2)
{
    if (pol=="Triangulo")
    {
        resultado=(val1*val2)/2
        console.log("El area del Triangulo es: ",resultado)
    }
    else if (pol=="Cuadrado")
    {
        resultado=val1*val2
        console.log("El area del Cuadrado es: ",resultado)

    }
    else if (pol=="Rectangulo")
    {
        resultado=val1*val2
        console.log("El area del Rectangulo es:",resultado)

    }
}
poligono("Rectangulo",4,3);