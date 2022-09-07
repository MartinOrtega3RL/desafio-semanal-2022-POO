const prompt=require("prompt-sync")({sigint:true});
var parentesis=0
var llave=0
var corchete=0


var palabra1=prompt("Ingrese la primer palabra");


for (unelemento in palabra1){

    if (palabra1[unelemento]==="("){

        parentesis+=1
    }
    if (palabra1[unelemento]===")"){
        parentesis-=1
    }
    if (palabra1[unelemento]==="{"){
        llave+=1
    }

    if (palabra1[unelemento]==="}"){
        llave-=1     
    }

    if (palabra1[unelemento]==="["){
        corchete+=1
    }
        
    if (palabra1[unelemento]==="]"){
        corchete-=1
    }
        
}


if (parentesis==0 && llave==0 && corchete==0){
    console.log("Expresion equilibrada")
}
if (parentesis<0 && llave<0 && corchete<0){
    console.log("Expresion no equilibrada")
}