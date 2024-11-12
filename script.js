let respuestasCorrectas = {
    1: '1',
    2: 'Quiero perderme contigo',
    3: 'Bomboncito'
};

let respuestasContestadas = {
    1: false,
    2: false,
    3: false
};

function abrirSobre() {
    document.getElementById("sobre").style.display = "none";
    document.getElementById("preguntas").style.display = "block";
    document.getElementById("pregunta1").style.display = "block";
}

function verificarRespuesta(preguntaNum) {
    let respuesta = document.getElementById(`respuesta${preguntaNum}`).value.trim().toLowerCase();
    if (respuesta === respuestasCorrectas[preguntaNum]) {
        respuestasContestadas[preguntaNum] = true;
        document.getElementById(`pregunta${preguntaNum}`).style.display = "none";
        if (preguntaNum < 3) {
            document.getElementById(`pregunta${preguntaNum + 1}`).style.display = "block";
        } else {
            mostrarTarjeta();
        }
    } else {
        alert("Respuesta incorrecta. Intenta nuevamente.");
    }
}

function mostrarTarjeta() {
    if (respuestasContestadas[1] && respuestasContestadas[2] && respuestasContestadas[3]) {
        document.getElementById("preguntas").style.display = "none";
        document.getElementById("tarjeta").style.display = "block";
    }
}

function mostrarAgradecimiento() {
    document.getElementById("tarjeta").style.display = "none";
    document.getElementById("agradecimiento").style.display = "block";
}
