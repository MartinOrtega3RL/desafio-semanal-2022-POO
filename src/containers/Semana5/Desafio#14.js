class amstrong{
    constructor(num){
        this.num = num;
        this.suma = 0;
    }
    getCalculo(){
        let temp = this.num;
        
        while(temp>0){
            //encontrar el digito de uno
            let resto = temp % 10;
            this.suma += resto * resto * resto;
            //remover el ultimo digito del numero
            temp = parseInt(temp / 10); //convertir de real a entero
        }
    }
    validarAmstrong(){
        this.getCalculo()
        if(this.suma == this.num){
            console.log("True");
        }
        else{
            console.log("False")
        }
    }
}

let objAmstrong = new amstrong(153)

objAmstrong.validarAmstrong()