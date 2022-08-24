const prompt=require("prompt-sync")({sigint:true});


var palabra1=prompt("Ingrese la primer palabra");
var palabra2=prompt("Ingrese la segunda palabra");

var arr=palabra1.toLowerCase().split("").sort().join("");
var arr2=palabra2.toLowerCase().split("").sort().join("");


if(palabra1==palabra2)
{
    console.log("Las palabras son iguales");
}
else if(palabra1.length!=palabra2.length)
{
    console.log(false)
}
else
{
    var verdadero=0
    var falso=0

    for(var i=0; i<arr2.length;i++)
    {
        if(arr[i]==arr2[i])
        {
            verdadero++;
        }
        else
        {
            falso++;
        }
    }
 

    if(verdadero>falso)
    {
        console.log(true)
    }
    else
    {
        console.log(false)
    }

}