const prompt = require("prompt-sync")()

const parcelas = prompt(`Qual números de parcelas que será gerado? `)
const hoje = new Date() // pega data mes dia e ano atual
hoje.setHours(0,0,0,0) //zerando as horas porque sempre vem com horas

for (let i = 1; i < parcelas; i++) {
    const dataParcela = adicionarMeses(hoje, i);

    console.log(dataParcela.toLocaleDateString("pt-BR"));  //ja manda  a data com padrão pra pt br
}


function adicionarMeses(data, meses) {   //função pra calcular o próximo mes
    const novaData = new Date(data);
    
    const diaOriginal = novaData.getDate(); //Pguei o dia 
    
    novaData.setMonth(novaData.getMonth() + meses); //aqui é aonde eu somo os meses

    // Se o mês "estourou", volta pro último dia válido, dia 31 é triste
    if (novaData.getDate() !== diaOriginal) {
        novaData.setDate(0); // esse macete é bom , se eu estourei o mes esse comando manda ir pro dia 0 do mes atual, mas como nao tem dia 0 ele vai pro ultimo dia do mes anterior
    }

    return novaData;
}