class Factorial{
    constructor(numero1){
        this.numero1=numero1;
    }

    Factor(){
        var resultado=1;
        for (var i=1; i<=this.numero1; i++){
            resultado=resultado*i
        }

        return console.log("El Factorial del Numero:", this.numero1 ," Es :",resultado )
    }  

}


let Fac=new Factorial(5)

Fac.Factor()