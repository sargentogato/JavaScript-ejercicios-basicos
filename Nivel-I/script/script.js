/*
 * Exercici 1
 */
console.log("Hola Mundo");

/*
 * Exercici 2
 */
alert("Me Llamo Marlon");

/*
 * Exercici 3
 */
const myName = "Marlon";
const surname = "Velásquez";
console.log(myName + " " + surname);

/*
 * Exercici 4
 */
const a = 25;
const b = 25;
let c = a + b;
console.log(`La suma entre ${a} y ${b} es ${c}`);

/*
 * Exercici 5
 */
let notaExamen = 4;
const aprobado = "Muy bien, has aprobado con un";
const suspendido = "Ohh has suspendido con un ";

if (notaExamen >= 5) {
  alert(`${aprobado} ${notaExamen}`);
} else {
  alert(`${suspendido} ${notaExamen}`);
}

/*
 * Exercici 6
 */

let coche = "Tengo un coche color azúl";
console.log(coche.replace("azúl", "verde"));
console.log(coche.replace(/o/g, "u"));

/*
 * Exercici 7
 */

let list = ["mesa", "silla", "ordenador", "libreta"];

for (let index = 0; index <= list.length; index++) {
  console.log(`El objeto ${list[index]} está en la posición ${index}`);
}

/*
 * Exercici 8
 */

function calculadora(operador, valor1, valor2) {
  const operadores = {
    resta: "-",
    suma: "+",
    multiplicacion: "*",
  };

  let operator = operadores[operador];
  console.log(eval(valor1 + operator + valor2));
}

calculadora("suma", 10, 0);
