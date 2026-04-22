const prompt = require("prompt-sync")()

const altura = Number(prompt(`Qual a altura da arvore? `))
const margembase = 30  // a margem fixa que pediu
const larguramax = 2 * altura

for (let i = 0 ; i< altura ; i++){
    const estrelas = 2 * i //aumenta de 2 em 2 como pedido
    const espacos = margembase + Math.floor((larguramax - estrelas)/ 2) //Garante a margem de 30 e eu centrlizo a proxima linha (largmax - estrelas)/2 me dá quantos espaços a mais preciso deslcoar pra esquerda
    
    console.log(" ".repeat(espacos) + "*".repeat(estrelas))
}