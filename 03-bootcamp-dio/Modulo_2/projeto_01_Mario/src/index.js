const players = require("./data/players.js") //importando os dados dos personagens
const prompt = require("prompt-sync")()   
const { escolherPlayer, sortearNumero,playRaceEngine,rolldice } = require("./functions/functions.js");  //chamo as funções la do functions

console.log(`Escolha seu personagem digitando o numero correspondente:
1 - Mario                                                                
2 - Peach  
3 - Yoshi  
4 - Bowser  
5 - Luigi  
6 - Donkey Kong`); //o prompt-sync da pau no cmd com quebra de linha , por isso é melhor assim

const escolha = Number(prompt("Digite o número: "));

let player1 = escolherPlayer(players, escolha)
let player2 = players[sortearNumero()]

if (player2 === player1){    //evita corredor iguais
    do {
        player2 = players[sortearNumero()]
    }while(player2 === player1)
}

console.log(
    `🏁 Corrida entre ${player1.nome} e ${player2.nome}(máquina) começando!!!` 
)

playRaceEngine(player1, player2)