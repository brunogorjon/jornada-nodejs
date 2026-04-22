const prompt = require("prompt-sync")()
let saque_inv = 0  //contaodr de saque invalido
const saques = [] //array para armazenar os saques

while(true){
    console.log(`\nÌnforme o valor dos saques ou 0 para sair`)
    const saque = Number(prompt("Saque: "))
    if(saque == 0) break  // condição de parada

    if(Number(isNaN(saque))){            //valido de o input é numérico
        console.log(`Valor não numérico informado`)
        saque_inv ++
        continue           //me mantem no loop apesar do erro
    }
    if(saque % 10 != 0){  //valido se é multiplo de 10
        console.log(`Erro... Valor deve ser multiplo de 10`)
        saque_inv ++
        continue
    }
    

    saques.push(saque)
    console.log(`Saque realizado com sucesso`)
}
let soma = 0       //para saber o valor total dos saques
console.log(`Saques Válidos\n ----------------------------------`)
for (let val of saques){         //corro 1 a 1 e ja listo 
    soma += val
    console.log(`${val}R$ `)
}
console.log(`\nTotal dos Saques: R$ ${soma}\n`)
console.log(`Nº de Tentativas de Saques (saques inválidos): ${saque_inv}`)
