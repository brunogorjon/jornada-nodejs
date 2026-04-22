const prompt = require("prompt-sync") ()
const clientes = []

console.log('=== SISTEMA DE CADASTRO DE CLIENTE ===\n')


while(true){                    //para cadastro , o true deixa rodando infinitamente até cair no break
    console.log(`Digite o nome do cliente e idade , ou "Fim" no nome para encerrar`)
    const nome = prompt('Nome: ')
    
    if(nome.toLowerCase() === "fim") {   //tratativa pra encerrar o programa
        console.log('\nOrgaizando as filas...\n')
        break   
    }
    
    const idade = Number(prompt(`Idade do ${nome}: `)) 
    clientes.push({nome, idade})
    console.log(`✓ Cliente ${nome} inserido na fila...\n`)
}

if (clientes.length === 0) {
    console.log("Não Há ninguém na fila!")
    process.exit()  //mesma coisa que o return
}


const preferencial = []
const normal = []

for (let cliente of clientes){            //comparo 1 a 1 pra ver qual melhor
    if(cliente.idade < 60) {
        normal.push(cliente)
    } else {
        preferencial.push(cliente)
    }
}
let i = 1
let j = 1

console.log(`FIla Preferencial \n =====================` )
for ( let pref of preferencial){
    
    console.log(`${i}. ${pref.nome}`)
    i++
}

console.log(`\nFila Normal \n =====================` )
for( let norm of normal){
    
    console.log(`${j}. ${norm.nome}`)
    j++
}