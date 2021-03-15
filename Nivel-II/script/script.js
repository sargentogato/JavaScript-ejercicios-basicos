function calculadora(operador, valor1, valor2) {
  const operadores = {
    resta: "-",
    suma: "+",
    multiplicacion: "*",
    division: "/",
  };

  let operator = operadores[operador];
  console.log(eval(valor1 + operator + valor2));
}

calculadora("multiplicacion", 10, 0.1);
