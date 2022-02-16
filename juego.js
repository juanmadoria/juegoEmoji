const cuadro = document.querySelectorAll('.cuadro')
const emoji = document.querySelector('.emoji')
const emojiMalo = document.querySelector('.emojiMalo')
const tiempo = document.querySelector('#tiempo')
const puntos = document.querySelector('#puntos')
const vidas = document.querySelector('#vida')


let resultado = 0
let lugarGolpe
let lugarGolpeMalo
let tiempoInicial = 60
let idTiempo = null
let oportunidades = 3


//pintar el emoji y removerlo
function cuadroRandom() {
    cuadro.forEach(cuadro => {
        cuadro.classList.remove('emoji')
        cuadro.classList.remove('emojiMalo')
    })
    let cuadroRandom = cuadro[Math.floor(Math.random() * 9)]
    cuadroRandom.classList.add('emoji')
    let cuadroRandomMalo = cuadro[Math.floor(Math.random() * 9)]
    cuadroRandomMalo.classList.add('emojiMalo')
    lugarGolpe = cuadroRandom.id
    lugarGolpeMalo = cuadroRandomMalo.id
}

//recorre el tablero escucha de mouse
cuadro.forEach(cuadro => {
    puntos
    puntos.textContent = resultado
    oportunidades
    vidas.textContent = oportunidades
    cuadro.addEventListener('mousedown', () => {
        if (cuadro.id == lugarGolpe) {
            resultado++
            puntos.textContent = resultado
            lugarGolpe = null
        }
        if (cuadro.id == lugarGolpeMalo) {
            /*resultado--
            puntos.textContent = resultado
            lugarGolpe = null*/
            oportunidades--
            alert('Solo te quedan ' + oportunidades + ' vida')
            reinicio()
            vidas.textContent = oportunidades
        }
    })
})

//intervalo de tiempo de ejecución
function moverEmoji() {
    idTiempo = setInterval(cuadroRandom, 500)
}

//ejecuto el juego
moverEmoji()

//tiempo
function contadorRegresivo() {
    tiempoInicial--
    tiempo.textContent = tiempoInicial

    if (tiempoInicial == 0) {
        clearInterval(conteoTiempo)
        clearInterval(idTiempo)
        alert('Game Over Su puntaje es : ' + resultado);
    }
}

//ejecuta la funcion que retrocede el tiempo
let conteoTiempo = setInterval(contadorRegresivo, 1000)

function resetJuego() {
    alert('El juego se va a reiniciar..')
    tiempoInicial = 60
    tiempoInicial.textContent = tiempoInicial
    resultado = 0
    puntos.textContent = resultado
    oportunidades = 3
    vidas.textContent = oportunidades

}

function reinicio() {
    tiempoInicial = 60
    tiempoInicial.textContent = tiempoInicial
    resultado = 0
    puntos.textContent = resultado

}