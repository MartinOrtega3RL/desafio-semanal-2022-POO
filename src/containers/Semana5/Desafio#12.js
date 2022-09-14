class Palindromo{
    constructor(palabra1){
        this.palabra1=palabra1.toLowerCase();

    }


    verificar(){
        var Palabra = this.palabra1.split("")  //Se crea un array con la palabra
        var PalabraJuntas=Palabra.join("").replaceAll(",", "").replaceAll(".","").replace(/\s+/g, '').replaceAll("{","")



        var arrayRever = Palabra.reverse() //Se lo invierte
        var JuntarArray = arrayRever.join("").replace(/\s+/g, '') //Se junta cada elemento sin espacios 
        var QuitarSimbolos = JuntarArray.replaceAll(",", "").replaceAll(".","").replace(/\s+/g, '').replaceAll("{","") //se quitan todos los simbolos


        if(PalabraJuntas==QuitarSimbolos){  //Si el array con todos los elementos juntos es igual a la variable con los elementos inversos
            return console.log(true)
        }
        else{
            return console.log(false)
        }

    }  

}   


let poli= new Palindromo("Ana lleva al oso la avellana")

poli.verificar()