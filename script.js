const minutos = document.querySelector("#minutos")
const segundos = document.querySelector("#segundos")
const botonIniciar = document.querySelector("#iniciar")
const botonPausar = document.querySelector("#pausar")
const botonReiniciar = document.querySelector("#reiniciar")

let intervalo
let tiempoTotal


function iniciarTemporizador(){
    const inputMinutos = document.querySelector("#inputMinutos")
    const inputSegundos = document.querySelector("#inputSegundos")

    if (!tiempoTotal) {
        const tiempoMinutos = parseInt(inputMinutos.value) || 0
        const tiempoSegundos = parseInt(inputSegundos.value) || 0
        tiempoTotal = tiempoMinutos * 60 + tiempoSegundos

        if (tiempoTotal <= 0) {
            alert("Por favor, introduce un tiempo válido.")
            return
        }
    }

    intervalo = setInterval (() => {
        if(tiempoTotal <= 0){
            clearInterval(intervalo)
            intervalo = null
            alert("El tiempo se acabo")
            return
        }

        tiempoTotal--
        actualizarTemporizador()

    }, 1000)

    botonIniciar.disabled = true;
    botonIniciar.textContent = "Iniciar"
}

function pausarTemporizador(){
    clearInterval(intervalo)
    intervalo = null;
    botonIniciar.disabled = false
    botonIniciar.textContent = "Reanudar"
}

function reiniciarTemporizador() {
    clearInterval(intervalo)
    intervalo = null
    tiempoTotal = null

    minutos.textContent = "00"
    segundos.textContent = "00"
    botonIniciar.disabled = false
    botonIniciar.textContent = "Iniciar"

}
function actualizarTemporizador(){
    const minutosRestantes = Math.floor(tiempoTotal/60)
    const segundosRestantes = tiempoTotal % 60

    minutos.textContent = String(minutosRestantes).padStart(2, "00")
    segundos.textContent = String(segundosRestantes).padStart(2, "00")
}

botonIniciar.addEventListener("click", iniciarTemporizador);
botonPausar.addEventListener("click", pausarTemporizador)
botonReiniciar.addEventListener("click", reiniciarTemporizador)