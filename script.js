const minutos = document.querySelector("#minutos")
const segundos = document.querySelector("#segundos")
const botonIniciar = document.querySelector("#iniciar")

function temporizador(){
    const inputMinutos = document.querySelector("#inputMinutos")
    const inputSegundos = document.querySelector("#inputSegundos")

    let tiempoMinutos = parseInt(inputMinutos.value) || 0
    let tiempoSegundos = parseInt(inputSegundos.value) || 0

    let tiempoTotal = tiempoMinutos * 60 + tiempoSegundos

    const intervalo = setInterval (() => {
        if(tiempoTotal <= 0){
            clearInterval(intervalo)
            alert("El tiempo se acabo")
            return
        }

        tiempoTotal--
        const minutosRestantes = Math.floor(tiempoTotal/60)
        const segundosRestantes = tiempoTotal % 60
    
        minutos.textContent = String(minutosRestantes).padStart(2, "00")
        segundos.textContent = String(segundosRestantes).padStart(2, "00")

    }, 1000)

}

botonIniciar.addEventListener("click", temporizador);

