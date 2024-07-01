let numeroSecreto = 0; // esta es la variable del numero secreto
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
//console.log(`este es el numero secreto ${numeroSecreto}`); // se tiene en esta posicion para probar desde el inicio el numero secreto 

function asignarTextoElemnto(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); /*tenemos una entrada por un input y lo obtenemos bajo la
    funcion  document.getElementById('valorUsuario').value; y le colocamos el parseInt para convertirlo de strin a number.*/
    //console.log(typeof(numeroDeUsuario)); //aca validamos  que tipo de dato tiene la variable numeroDeUsuario
    console.log(`este es el numero secreto ${numeroSecreto}`); // veremos en la consola que numero coloco la maquina al azar 
    //console.log(typeof(numeroSecreto)); // aca se valida que tipo de dato tiene la variable numeroSecreto 
    //console.log(`este es el numero del usuario ${numeroDeUsuario}` ); // veremos el numero por consola que coloca el usuario 
    /*console.log(numeroDeUsuario === numeroSecreto ); // por consola verificamos si la funcion es verdadera o falta, y con 
    el triple === verificamos si el valor es igual tanto en tipo como en valor*/
   
    console.log(`numero de intentos por el usuario ${intentos}`);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemnto('p', `Acertaste el numero secreto en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`); /*para tener en cuenta la funcion
         intento se igual con 3 = que nos da la condicion de tipo de dato igual y valor igual, el signo ? nos evalua la fucion como si fuera
         un if si se cumple toma vez si no (else) se cumple toma el valor de veces y esta represetando por los (:) y este es un OPERADOR TERNARIO*/
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El usuario no acerto.
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemnto('p', 'El numero secreto es menor');

        }else{
            asignarTextoElemnto('p', 'El numero secreto es mayor');
        }
        intentos++; // con esta linea el contador aumento en 1 cada vez que el usurio no descrubre el numero secreto
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    //let valorCaja = document.querySelector('#valorUsuario').value;
    //let valorCaja = document.getElementById('reiniciar').value;
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() { // generamos la funcion para obtener un numero aleatorio
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    // si el numero generado esta incluido en la lista
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // si el numero generado esta incluido en la lista
    if( listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemnto('p', 'Ya se sortearon todos los numeros posibles, y debes empezar de nuevo');
    }else{ 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
            }else {
                listaNumerosSorteados.push(numeroGenerado); // si no esta incluido lo agrega
                return numeroGenerado;
            }
}}
function condicionesIniciales() {
    asignarTextoElemnto('h1', 'Juego del numero secreto!');
    asignarTextoElemnto('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1; 

}

function reiniciarJuego(){
    limpiarCaja(); // limpiar caja
    condicionesIniciales();  // indicar mensaje de intervalo de numeros
    // generar numero aleatorio secreto
    // Inicializar el numero de intentos
    document.querySelector('#reiniciar').setAttribute('disabled','true');// deshabilitar el boton de nuevo juego 
}

condicionesIniciales();


