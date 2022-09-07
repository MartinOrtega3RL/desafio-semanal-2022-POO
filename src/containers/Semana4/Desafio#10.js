
const prompt=require("prompt-sync")({sigint:true});

var palabra1=prompt("Ingrese el texto a traducir");
var palabra2=prompt("Ingrese el codigo morse");


// instalar libreria morsee ---
function descifrarMorse(texto,codigo){
    var { encode , decode} = require('morsee');
    var mostrarCod = encode(texto)
    var mostrarTxt = decode(codigo)
    console.log("El texto es: "+ texto + " Su traduccion en codigo morse es: " + mostrarCod)
    console.log("El codigo morse es:"+ codigo + "  Su traduccion a texto es : " + mostrarTxt)

}

descifrarMorse(palabra1,palabra2)