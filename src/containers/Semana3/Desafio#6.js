const prompt=require("prompt-sync")({sigint:true});

var palabra1=prompt("Ingrese la primer palabra");

palabras=[]
reversa=[]

for (i=0; i<palabra1.length; i++){
    palabras.push(palabra1[i])
}


for (i=palabras.length-1; i>=0; i--){
    reversa.push(palabras[i])
}


console.log(reversa.join(""))