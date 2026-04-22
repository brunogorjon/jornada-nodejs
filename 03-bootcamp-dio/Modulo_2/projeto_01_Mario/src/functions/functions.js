function sortearNumero() {         //escolhido o adversário
  return Math.floor(Math.random() * 6) 
}

function escolherPlayer(players, escolha) {    //escolher o personagem do jogador
  return players[escolha - 1];
}

async function rolldice(){
    return Math.floor(Math.random() * 6) + 1
}

function foundWinner(total1, total2, character1, character2){         //função pra definir quem ganhou os blocos que não são de confronto
    if (total1 > total2){
        console.log(`${character1.nome} venceu esse bloco da corrida`)
        return 1
    } else if(total1 < total2){
        console.log(`${character2.nome} venceu esse bloco da corrida`)
        return 2
    } else {
        console.log(`Os personagens empataram nesse bloco.`)
        return 0
    }
}


async function playRaceEngine(character1, character2){  //função principal da corrida

    let vit_player1 = 0         //contador de vitórias nos blocos pra definir o vencedor
    let vit_player2 = 0

    for(let round = 1; round <= 5 ; round ++){           //estrutura de repetição para contar os rounds
    
        console.log(`\n🚩 Rodada ${round}: `)

        //sorteador de bloco

        let block = Math.random()  //chamo a função que sorteia entre 0 e 1 
        let resultado = ""

        switch (true){                     //intervalos pr acada tipo de corrida
            case block < 0.33:
                resultado = "RETA"
                break
            case block < 0.66:
                resultado = "CURVA"
                break
            default:
                resultado = "CONFRONTO"
        }
        console.log(`Bloco: ${resultado}`)
        let diceResult1 = await rolldice()        //sorteado os dados para dar aleatoriedade pra corrida
        let diceResult2 = await rolldice()
        let totalTesteSkill1 = 0          //soma da skill do personagem + dado
        let totalTesteSkill2 = 0
        
        if(resultado === "RETA"){
            totalTesteSkill1 = diceResult1 + character1.velocidade
            totalTesteSkill2 = diceResult2 + character2.velocidade

            console.log(`${character1.nome} 🎲 rolou um dado de ${diceResult1}`)   //informando quanto cad apersonagem tirou no dado
            console.log(`${character2.nome} 🎲 rolou um dado de ${diceResult2}`)
           
            const winner = foundWinner(totalTesteSkill1,totalTesteSkill2,character1,character2)
            if(winner === 1) vit_player1++
            if(winner === 2) vit_player2++        //contador de vitorias
        }
        if(resultado === "CURVA"){
            totalTesteSkill1 = diceResult1 + character1.manobrabilidade
            totalTesteSkill2 = diceResult2 + character2.manobrabilidade

            console.log(`${character1.nome} 🎲 rolou um dado de ${diceResult1}`)
            console.log(`${character2.nome} 🎲 rolou um dado de ${diceResult2}`)

            const winner = foundWinner(totalTesteSkill1,totalTesteSkill2,character1,character2)
            if(winner === 1) vit_player1++
            if(winner === 2) vit_player2++

        }
        if(resultado === "CONFRONTO"){
            let powerResult1 = diceResult1 + character1.poder
            let powerResult2 = diceResult2 + character2.poder

             console.log(`${character1.nome} 🎲 rolou um dado de ${diceResult1}`)
             console.log(`${character2.nome} 🎲 rolou um dado de ${diceResult2}`)

            if(powerResult1 > powerResult2){                 //bloco de rsultado fierente , ja que em confronto eu tiro 1 do adversario e tenho que valdiar a regra do 0
                console.log(`${character1.nome} venceu esse bloco`)
                    if(vit_player2 <= 0) console.log(`${character2.nome} não perdeu pontos porque possuia 0`)
                    else vit_player2 --
            }else if(powerResult1 < powerResult2){
                console.log(`${character2.nome} venceu esse bloco`)
                    if(vit_player1 <= 0) console.log(`${character1.nome} não perdeu pontos porque possuia 0`)
                    else vit_player1 --
            }else{
                console.log(`Houve um empate nesse bloco`)
            }

        }
        
    }
    console.log("\n🏁 RESULTADO FINAL:")
    console.log(`${character1.nome}: ${vit_player1}`)
    console.log(`${character2.nome}: ${vit_player2}`)
    if(vit_player1 > vit_player2) console.log(`VITÓRIA DE ${character1.nome}`)
    if(vit_player1 < vit_player2) console.log(`VITÓRIA DE ${character2.nome}`)
    if(vit_player1 == vit_player2) console.log(`OS CORREDORES EMPATARAM!`)

}





module.exports = {                     //exporta essa funções para a index 
  escolherPlayer,
  sortearNumero,
  rolldice,
  playRaceEngine
};