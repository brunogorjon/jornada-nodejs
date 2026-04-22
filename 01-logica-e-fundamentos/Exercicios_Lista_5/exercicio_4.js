const prompt = require("prompt-sync")()

//preciso receber Sexo , cor dos olhos, cabelo, idade, altura e peso
//Media de idade , média de peso e altura, percetn h e m , Olhos verdes e cabelos loiros

 const habitantes = []

 let continuar = "s"

do{           //recebendo dados 
    const sexo = prompt("Qual sexo da pessoa?M/F").toLowerCase()
    const cor_olho = prompt("Qual a cor dos olhos?(A para azuis,V para verdes ou C para castanhos").toLowerCase()
    const cabelo = prompt("Qual a cor do cabelo?(L para louro, C para castanhos, P para pretos").toLowerCase()
    const idade = Number(prompt("Qual a idade da pessoa?"))
    const altura = Number(prompt("Qual a altura da pessoa?"))
    const peso = Number(prompt("Qual o peso da pessoa? (KG)"))
    habitantes.push({sexo, cor_olho, cabelo, idade, altura, peso})

    continuar = prompt("Deseja continuar inserindo novos dados? S ou N").toLowerCase()
} while(continuar == "s")

    let media_idade = 0                //aqui da pra rodar as medias de uma vez ja que é geral
    let media_altura = 0
    let media_peso = 0
    let masc = 0
    let fem = 0
    let ver_lou = 0

    for (const habitante of habitantes){  //colocando so valores base pra calculo
        media_idade += habitante.idade
        media_altura += habitante.altura   
        media_peso += habitante.peso

        if(habitante.sexo == "m") masc += 1
        else fem += 1

        if(habitante.cor_olho == "v" && habitante.cabelo == "l" ) ver_lou+=1

    } 

    //tratar eles

    const total = habitantes.length //como vou usar varias vezes , criar a total de uma vez do que dar .length varias vezes
    media_idade = (media_idade/total).toFixed(2)
    media_altura = (media_altura/total).toFixed(2)
    media_peso = (media_peso/total).toFixed(2)
    // esses aqui é pro caso de dividir por 0
    const percMasc = total > 0 ? ((masc / total) * 100).toFixed(2) : 0  //tottal é maior que 0? então calcula, senao deixa 0
    const percFem = total > 0 ? ((fem / total) * 100).toFixed(2) : 0

    console.log(`Média de idade: ${media_idade}`);
    console.log(`Média de altura: ${media_altura}`);
    console.log(`Média de peso: ${media_peso}`);
    console.log(`Percentual de homens: ${percMasc}%`);
    console.log(`Percentual de mulheres: ${percFem}%`);
    console.log(`Pessoas com olhos verdes e cabelo louro: ${ver_lou}`);