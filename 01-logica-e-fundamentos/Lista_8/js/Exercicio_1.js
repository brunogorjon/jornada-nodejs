const prompt = require("prompt-sync")() 
const alunos = []

console.log('=== SISTEMA DE CADASTRO DE ALUNOS ===\n')


while(true){                    //para cadastro , o true deixa rodando infinitamente até cair no break
    console.log(`Digite o nome do aluno e nota , ou "Fim" no nome para encerrar`)
    const nome = prompt('Nome: ')
    
    if(nome.toLowerCase() === "fim") {   //tratativa pra encerrar o programa
        console.log('\nEncontrando o aluno de maior nota...\n')
        break   
    }
    
    const nota = Number(prompt(`Nota do ${nome}: `)) 
    alunos.push({nome, nota})
    console.log(`✓ Aluno ${nome} cadastrado com nota ${nota}!\n`)
}

if (alunos.length === 0) {
    console.log("Nenhum aluno cadastrado!")
    process.exit()  //mesma coisa que o return
}

let mel_aluno = alunos[0]  //peo o primeiro aluno cadastrado

for (let aluno of alunos){            //comparo 1 a 1 pra ver qual
    if(aluno.nota > mel_aluno.nota) {
        mel_aluno = aluno
    }
}
if(mel_aluno.nota < 7){
    console.log(`Essa turma não possui nenhum aluno de destaque`)
} else{
console.log('=== MELHOR ALUNO ===')
console.log(`Nome: ${mel_aluno.nome}`)
console.log(`Nota: ${mel_aluno.nota}`)
}