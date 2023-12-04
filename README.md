<div align="center" id="top"> 
</div>

<h1 align="center">Reto_02</h1>

## :dart: About ##

<p align="center">The Russian multiplication method consists of repeatedly multiplying the multiplicand by 2 and dividing the multiplier by 2 until the multiplier becomes 1. Then, all the multiplicands corresponding to the odd multipliers are added together.
This sum is the product of the two numbers. The following table shows the calculation performed to multiply 37 by 12, resulting in 12 + 48 + 384 = 444.
Develop a program that takes the multiplier and multiplicand as input and returns the product of both, calculated using the Russian multiplication method.</p>

## :rocket: Technologies ##

The following tools were used in this project:

- [Node.js](https://nodejs.org/en/)

## :white_check_mark: Requirements ##

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

## :checkered_flag: Starting ##

```bash
# Clone this project
$ git clone https://github.com/daniel12082/push_up_Reto_02

# Access
$ cd push_up_Reto_02

#Open Terminal

# Run the project
$ run code start

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
```

## :open_book: Explain ##

-----------------------------------------------------------------------
| Nr.  | Step                                                         |
| ---- | ------------------------------------------------------------ |
| 1    | The function russianMultiplication takes two parameters: multiplicando and multiplicador. These represent the two numbers to be multiplied. |
| 2    | Inside the function, a variable result is initialized to 0. This will hold the final result of the multiplication. |
| 3    | The function then enters a while loop that continues as long as multiplicador is greater than 0. |
| 4    | Inside the loop, an if statement checks if multiplicador is an odd number. If it is, multiplicando is added to result. |
| 5    | After the if statement, multiplicando is doubled and multiplicador is halved (using Math.floor to ensure it remains an integer). This corresponds to shifting the binary representations of the numbers. |
| 6    | Once multiplicador becomes 0, the loop ends and the function returns result, which is the product of the original values of multiplicando and multiplicador. |
| 7    | After the function definition, the code defines two constants multiplicando and multiplicador, assigns them the values 12 and 37 respectively, and then calls russianMultiplication with these values. The result is stored in the constant producto. |
| 8    | Finally, the code logs a message to the console displaying the product of multiplicando and multiplicador. |

## :memo: License ##

Made with :heart: by <a href="https://github.com/{daniel12082}" target="_blank">{daniel12082}</a>