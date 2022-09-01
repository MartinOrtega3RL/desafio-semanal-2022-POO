var bandera= false //Me indica si el juego inicia o no Cuando se da clik, cambia a true
var turno = 0 ; //Indica el turno del jugador-- Para indicar X o O
var tablero = new Array(); //Todo el tablero que se hizo se guarda en javascript como si fuera un array


function juego(){
    bandera=true; //Comienza el juego
    var Jugador1 = document.getElementById("Jugador1").value;
    var Jugador2 = document.getElementById("Jugador2").value;

    if (Jugador1===""){
        alert("No ingreso El Nombre del Jugador1")  //Validacion por Si no Ingresa Nombre
        Jugador1.focus();
    }
    else{
        if(Jugador2==="")
        {
            alert("No ingreso el Nombre del Jugador 2")
            Jugador2.focus();
        }else                    //Crea el arreglo y a cada boton le asigna Una I como valor, (Tengo que arreglar los cuadros) 
        {   
            tablero[0] = document.getElementById("P0")
            tablero[1] = document.getElementById("P1")
            tablero[2] = document.getElementById("P2")
            tablero[3] = document.getElementById("P3")
            tablero[4] = document.getElementById("P4")
            tablero[5] = document.getElementById("P5")
            tablero[6] = document.getElementById("P6")
            tablero[7] = document.getElementById("P7")
            tablero[8] = document.getElementById("P8")
            for(var i=0; i<9; i++){
                tablero[i].value="I"
                tablero[i].style.color="#7a4646"  //Ocultar  para que no se note xd
            }
            turno=1; //Turno es igual al jugador 1 en este caso
            document.getElementById("TurnoJugador").innerText="Comienza Jugador: "+Jugador1;
        }
    }
}

function simbolo(boton){
    if(bandera===true){
        if(turno===1 && boton.value=="I"){
            turno=2;
            document.getElementById("TurnoJugador").innerText="Continua el Jugador: "+ Jugador2.value;
            boton.value="X";
            boton.style.color="white" //cambiar a blanco de nuevo
        }else{
            if (turno===2 && boton.value=="I"){
                turno=1;
                document.getElementById("TurnoJugador").innerText="Continua el Jugador: "+ Jugador1.value;
                boton.value="O";
                boton.style.color="white" //cambiar a blanco de nuevo
            }
        }
    }

    ganador();

}




function ganador(){
    if((tablero[0].value==="X" && tablero[1].value==="X" && tablero[2].value==="X")
        || (tablero[3].value==="X" && tablero[4].value==="X" && tablero[5].value=="X")//Validaciones horizontal
        || (tablero[6].value==="X" && tablero[7].value==="X" && tablero[8].value=="X")//Validaciones horizontal
        || (tablero[0].value==="X" && tablero[3].value==="X" && tablero[6].value=="X")//Validaciones Verticales
        || (tablero[1].value==="X" && tablero[4].value==="X" && tablero[7].value=="X")//Validaciones Verticales
        || (tablero[2].value==="X" && tablero[5].value==="X" && tablero[8].value=="X")//Validaciones Verticales
        || (tablero[0].value==="X" && tablero[4].value==="X" && tablero[8].value=="X")//Validacion diagonal//
        || (tablero[2].value==="X" && tablero[4].value==="X" && tablero[6].value=="X")//Validacion diagonal//
        ){
            alert("Felicidades Ganaste !!! "+Jugador1.value + " Simbolo X");
            bandera=false;
    }
    if((tablero[0].value==="O" && tablero[1].value==="O" && tablero[2].value==="O")
    || (tablero[3].value==="O" && tablero[4].value==="O" && tablero[5].value=="O")//Validaciones horizontal
    || (tablero[6].value==="O" && tablero[7].value==="O" && tablero[8].value=="O")//Validaciones horizontal
    || (tablero[0].value==="O" && tablero[3].value==="O" && tablero[6].value=="O")//Validaciones Verticales
    || (tablero[1].value==="O" && tablero[4].value==="O" && tablero[7].value=="O")//Validaciones Verticales
    || (tablero[2].value==="O" && tablero[5].value==="O" && tablero[8].value=="O")//Validaciones Verticales
    || (tablero[0].value==="O" && tablero[4].value==="O" && tablero[8].value=="O")//Validacion diagonal//
    || (tablero[2].value==="O" && tablero[4].value==="O" && tablero[6].value=="O")//Validacion diagonal//
    ){
        alert("Felicidades Ganaste !!! "+Jugador2.value + " Simbolo O");
        bandera=false; //Termina el juego
    }






}
