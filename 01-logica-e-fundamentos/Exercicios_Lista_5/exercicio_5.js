const prompt = require("prompt-sync")()

//receber varios numeros inteiros fornecidos pelo usuario
//Saber numeros inteiros positivos, qntd pares,qntd de impar divisivel por 3 e 7, média pra cada um

const numeros = []

while(true){
    let entrada = prompt("Digite um numero inteiro ou N para sair: ")

    if(entrada.toLowerCase() == "n"){    //valido o n pra sair
        break
    }
    let numero = Number(entrada)   //converto pra numero

    if(isNaN(numero)){      //caso digite alguam coisa aleatoria , o continue nao quebra o codigo e deixa continuar
        console.log(`Entrada invalida , forneça um numero `)
        continue
    }
    numeros.push(numero) //coloquei o trem
}
//variaveis apra contagem e pra média dps
var soma_int = 0
var qnt_int = 0
var soma_par = 0
var qnt_par = 0
var soma_div3e7 = 0
var div_3e7 = 0

for (const numero of numeros){
    if(numero > 0) {
        soma_int += numero
        qnt_int++
    }
    if(numero % 2 == 0){   //vejo o par , e ja aproveito o else pra ver os impares , ja que se nao for par é impar
        soma_par += numero
        qnt_par++
    }else{
    if(numero % 3 == 0 && numero % 7 == 0){
        soma_div3e7 += numero
        div_3e7++
    }    
    }
}
const media_int = qnt_int > 0 ? (soma_int / qnt_int).toFixed(2) : 0   //evitar dividir por 0
const media_par = qnt_par > 0 ? (soma_par / qnt_par).toFixed(2) : 0
const media_div3e7 = div_3e7 > 0 ? (soma_div3e7 / div_3e7).toFixed(2): 0

console.log(`${qnt_int} Numeros inteiros positivos e sua média é ${media_int}\n`+
             `${qnt_par} Numeros Pares e sua média é ${media_par}\n` +
             `${div_3e7} Numeros divisiveis por 3 e 7 e sua média é ${media_div3e7}\n`)

