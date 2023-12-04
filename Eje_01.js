// El método de multiplicación rusa consiste en multiplicar sucesivamente por 2 el multiplicando y
// dividir por 2 el multiplicador hasta que el multiplicador tome el valor 1.
// Luego, se suman todos los multiplicandos correspondientes a los multiplicadores impares.
// Dicha suma es el producto de los dos números. La siguiente tabla muestra el cálculo realizado para
// multiplicar 37 por 12, cuyo resultado final es 12 + 48 + 384 = 444.

// Desarrolle un programa que reciba como entrada el multiplicador y el multiplicando, y entregue
// como resultado el producto de ambos, calculado mediante el método de multiplicación rusa.
function russianMultiplication(multiplicando, multiplicador) {
    let result = 0;
    while (multiplicador > 0) {
        if (multiplicador % 2 !== 0) {
            result += multiplicando;
        }
        multiplicando *= 2;
        multiplicador = Math.floor(multiplicador / 2);
    }
    return result;
}
const multiplicando = 12;
const multiplicador = 37;
const producto = russianMultiplication(multiplicando, multiplicador);
console.log(`El producto de ${multiplicando} * ${multiplicador} es: ${producto}`);

