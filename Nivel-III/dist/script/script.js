let value = document.getElementById("numberBox")
let screen = document.getElementById("screen")
let result = ""
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "/", "*", "+", "-"]

/*
 * Eventos del teclado
 */
document.addEventListener("keydown", handlerEvent)

/*
 *Eventos del raton(click)
 */
value.addEventListener("click", handlerEvent)

/*
 * Aquí se verifica si el evento proviene del teclado o un es un click
 */
function handlerEvent(evento) {
  const eventType = evento.type
  let triggerEvent
  if (eventType === "keydown") {
    let keypressed = evento.key
    const callback = (element) => element === keypressed

    /*
     * Aquí se verifica que la tecla presionada están dentro del array, así se evita registrar el resto de teclas
     */
    const hasSome = numbers.some(callback)

    if (hasSome || keypressed === "Enter" || keypressed === "Delete") {
      triggerEvent = evento.key
      calculator(triggerEvent)
    }
  } else if (eventType === "click") {
    triggerEvent = evento.target.id
    calculator(triggerEvent)
  }
}

function calculator(triggerEvent) {
  if (triggerEvent !== "=" && triggerEvent !== "clean" && triggerEvent !== "Enter") {
    result += triggerEvent
    print(triggerEvent)
  }

  if (triggerEvent === "=" || triggerEvent === "Enter") {
    showResult()
  }

  if (triggerEvent === "clean" || triggerEvent === "Delete") {
    clean()
  }
}

/*
 * Esta función imprime lo que se va tecleando un clicando
 */
function print(element) {
  if (element === "*") {
    element = "x"
  }
  screen.innerText += element
}

/*
 * Mostrar el resultado y permitir que se pueda seguir sumando
 */
function showResult() {
  screen.innerText = eval(result)
  result = eval(result)
}

/*
 * Limpiar la pantalla de la calculadora
 */
function clean() {
  screen.innerHTML = ""
  result = ""
}
