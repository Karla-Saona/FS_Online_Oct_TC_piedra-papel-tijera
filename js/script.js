const opciones = ["piedra", "papel", "tijera"];

let puntosUsuario = 0;
let puntosOrdenador = 0;

const botones = document.querySelectorAll(".boton-jugada");
const resultados = document.getElementById("resultados");
const contadorUsuario = document.getElementById("contador-usuario");
const contadorOrdenador = document.getElementById("contador-ordenador");

function jugadaOrdenador() {
  const indice = Math.floor(Math.random() * opciones.length);
  return opciones[indice];
}

function obtenerResultado(usuario, ordenador) {
  if (usuario === ordenador) {
    return "Empate";
  }

  if (
    (usuario === "piedra" && ordenador === "tijera") ||
    (usuario === "papel" && ordenador === "piedra") ||
    (usuario === "tijera" && ordenador === "papel")
  ) {
    puntosUsuario++;
    return "¡Ganaste!";
  } else {
    puntosOrdenador++;
    return "Perdiste";
  }
}

function mostrarResultado(resultado, usuario, ordenador) {
  resultados.textContent = `${resultado} (Tú: ${usuario} | Máquina: ${ordenador})`;
}

function actualizarPuntuacion() {
  contadorUsuario.textContent = `Tus puntos: ${puntosUsuario}`;
  contadorOrdenador.textContent = `Puntos de la máquina: ${puntosOrdenador}`;
}


botones.forEach(boton => {
  boton.addEventListener("click", () => {
    const usuario = boton.dataset.jugada; // Ej: data-jugada="piedra"
    const ordenador = jugadaOrdenador();
    const resultado = obtenerResultado(usuario, ordenador);
    mostrarResultado(resultado, usuario, ordenador);
    actualizarPuntuacion();
  });
});
