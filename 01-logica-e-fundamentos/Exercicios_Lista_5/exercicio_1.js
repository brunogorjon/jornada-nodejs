const prompt = require("prompt-sync")()

const nome_aluno = prompt("Qual o nome do aluno?")
const disciplina = prompt("Qual a disciplina?")
const entrada = prompt("Digite as Notas N1, N2, N3, N4 separadas por espaço") //pra receber tudo de uma vez
const notas = entrada.split(" ").map(Number) // o split separa os valores da string e o map convertem em numero (talvez eu precise filtrar caso digite coisa diferente de numero)

const [n1, n2, n3, n4] = notas

let media_n = (n1 + n2 + n3 + n4) / 4
const pr = Number(prompt("Qual foi a nota do Provão?"))        //Number pra nao sair como string
const ed = Number(prompt("Qual foi a nota do Estudo Dirigido"))

const media_f = ((media_n*0.2) + (ed*0.2) + (pr*0.6)).toFixed(2) 

if(media_f >= 6) {
    console.log(`O aluno ${nome_aluno} foi aprovado na disciplina ${disciplina} com a média final ${media_f}`)
} else {
    console.log(`O aluno ${nome_aluno} foi reprovado na disciplina ${disciplina} com a média final ${media_f}`)
}