const cuadro = document.querySelectorAll('.cuadro')
const emoji = document.querySelector('.emoji')
const tiempo = document.querySelector('#tiempo')
const puntos = document.querySelector('#puntos')

let resultado = 0
let lugarGolpe
let tiempoInicial = 60
let idTiempo = null


//pintar el emoji y removerlo
function cuadroRandom(){
    cuadro.forEach(cuadro => {
        cuadro.classList.remove('emoji')
    })
    let cuadroRandom = cuadro[Math.floor(Math.random() *9)]
    cuadroRandom.classList.add('emoji')
    lugarGolpe= cuadroRandom.id
}

//recorre el tablero escucha de mouse
cuadro.forEach(cuadro =>{
    cuadro.addEventListener('mousedown', () =>{
        if (cuadro.id == lugarGolpe){
            resultado++
            puntos.textContent = resultado
            lugarGolpe=null
        }
    })
})


//intervalo de tiempo de ejecución
function moverEmoji(){
    idTiempo = setInterval(cuadroRandom, 500)
}

//ejecuto el juego
moverEmoji()

//tiempo
function contadorRegresivo(){
    tiempoInicial--
    tiempo.textContent = tiempoInicial

    if(tiempoInicial==0){
        clearInterval(conteoTiempo)
        clearInterval(idTiempo)
        alert('Game Over Su puntaje es : ' + resultado);
    }
}

//ejecuta la funcion que retrocede el tiempo
let conteoTiempo = setInterval(contadorRegresivo,1000)





