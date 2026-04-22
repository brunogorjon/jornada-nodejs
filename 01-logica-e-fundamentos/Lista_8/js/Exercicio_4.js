const prompt = require("prompt-sync")()

const formula = prompt(`Froneça a formula que será avalaliada: `)
const caracteres = [...formula]  //Eu passo uma string para um array, então cada caractere da array vira um elemento
let aux1 = 0  //contar os parenteses
let aux2 = 0

for (let i = 0 ; i< caracteres.length; i++){      //Contando da direita pra esquerda , se tiver mais de ")" ja encerro o programa
    
    if(caracteres[i] == "(") aux1++   //somando para comparar
    if(caracteres[i] == ")") aux2++
    if(aux2 > aux1){
        console.log(`Esta formula está incorreta(em relação aos parenteses)`)
        return
    }
}

if(aux1 != aux2){          //vejo se abriu e fechou todos parenteses 
    console.log(`Esta formula está incorreta(em relação aos parenteses)`)
}else{
    console.log(`Esta formula esta correta(em relação aos parenteses`)
}