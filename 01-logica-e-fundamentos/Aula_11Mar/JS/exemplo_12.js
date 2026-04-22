const prompt = require("prompt-sync")()  //adiciona prompt pra poder receber informação
const numero = Number(prompt("Numero (centena): "))   //prompt pra receber um numero

if (numero < 100 || numero >= 1000){         //condicional pra caso o numero seja menor que 100 e maior que 1000
    console.log("Erro... deve ser uma centena")
}
const num1 = Math.floor(numero / 100) // obtem o primeiro numero
const sobra = numero % 100               // agora sobra uma dezena
const num2 = Math.floor(sobra / 10)  // obtem o segundo numero
const num3 = sobra % 10               // obtem o terceiro numerop

console.log(`Invertido: ${num3}${num2}${num1}`)  //exibe a centena invertida