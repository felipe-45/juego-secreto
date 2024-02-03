let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
   let numeroDeUsuario = parseInt(document.getElementById(`valorUsuario`).value);
   
   console.log(intentos);
   if(numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(`p`, `acertaste el numero en ${intentos} ${(intentos == 1) ? `vez` : `veces`}`);
    document.getElementById(`reiniciar`).removeAttribute(`disabled`);
} else {
    //el usuario no acerto
       if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento(`p` , `el numero secreto es menor`);
       } else { 
        asignarTextoElemento(`p` , `el numero secreto es mayor`);
       }
    intentos++;
    limpiarCaja();
   }
    return;
}
            
function limpiarCaja() {
   document.querySelector(`#valorUsuario`).value = '';
}


function generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; 
   
   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);
   //si ya sorteamos todos los numeros
   if(listaNumerosSorteados.length == numeroMaximo) {
      asignarTextoElemento(`p`,`ya se sortearo todos los numeros posibles`);
   } else {
       //si el numero generado esta en la lista
       if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
       } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
       }

   } 
}
 function condicionesIniciales(){ 
    asignarTextoElemento(`h1`, `juego del numero secreto!`);
    asignarTextoElemento(`p`, `indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
 }
   
   
    function reiniciarJuego() {
    //limpiar caja}
    limpiarCaja();
    //indicar mensaje de intervalo de numero
    //generar el numero aleatorio
    //inicializar el numero intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego 
document.querySelector(`#reiniciar`).setAttribute(`disabled`,`true`);    

}

condicionesIniciales();