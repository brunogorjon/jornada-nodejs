const prompt = require("prompt-sync")()

function normalizar(texto) {  //pra facilitar minha vida na escolaridade
    return texto
        .toLowerCase()
        .normalize("NFD")                
        .replace(/[\u0300-\u036f]/g, ""); 
}

//Candidato > Sexo, idade ,escolaridade e experiencia
const candidatos = []  //array geral , agora cadastros os objetos
let continuar ="s" 
  
while(continuar == "s") {
    const sexo = prompt("Sexo M/F: ").toLowerCase()  //Peço em maiuscula pq é mais visivel pro usuário , mas normalizo em minuscula para tratamento
    const idade = Number(prompt("Idade: "))
    const escolaridade = normalizar(prompt("Nivel de escolaridade(Fundamental, Médio , Superior, Pós Graduação: "))
    const experiencia = prompt("Possui Experiência? S/N: ").toLowerCase()

    candidatos.push({sexo, idade , escolaridade, experiencia})

    continuar = prompt("Deseja continuas cadastrando? S/N: ").toLowerCase()
}

let qntdmulheres = 0                           //Todos os parametros para calcular e apresenar
let qntdhomens = 0
let media_homemexp = 0
let cont_homem = 0
let media_mulexp = 0
let cont_mulher = 0
let percent_homem = 0
let mul_menor_idade = 200
let fundamental = 0;
let medio = 0;
let superior = 0;
let pos = 0;

for(const candidato of candidatos){  //eu e minha mente pertubada tentando colher tudo em 1 for só
    if(candidato.sexo == "f"){ //contando mulheres
        qntdmulheres++
    }
    if(candidato.sexo == "f" &&  candidato.experiencia == "s"){
        if(candidato.idade < mul_menor_idade){ //acho as com experiencia , filtro idade e dps somo pra media
            mul_menor_idade = candidato.idade
        }
        media_mulexp += candidato.idade
        cont_mulher ++
    }
    if(candidato.sexo == "m"){ //contando homens
        qntdhomens++
        if(candidato.idade >= 35 && candidato.idade <= 45){ //captando os trem na faixa da idade depois só divido pelo qnthomens
            percent_homem++
        }
    }
    if(candidato.sexo == "m" && candidato.experiencia == "s"){
        media_homemexp += candidato.idade
        cont_homem++
    }
    if(candidato.escolaridade == "fundamental") fundamental ++
    if(candidato.escolaridade == "medio") medio++
    if(candidato.escolaridade == "superior") superior++
    if(candidato.escolaridade == "pos graduacao") pos++
    
}   

const mediaHomens = cont_homem > 0 ? (media_homemexp / cont_homem).toFixed(1) : 0 //tenho que tratar pra caso for 0
const mediaMulheres = cont_mulher > 0 ? (media_mulexp / cont_mulher).toFixed(1) : 0
const percHomens = qntdhomens > 0 ? ((percent_homem / qntdhomens) * 100).toFixed(2) : 0
const menorIdade = cont_mulher > 0 ? mul_menor_idade : "não há dados"

console.log(`Quantidade de Mulheres cadastradas: ${qntdmulheres}
Quantidade de Homens cadastrados: ${qntdhomens}
Idade média de Homens com experiencia: ${mediaHomens} anos
Idade média de Mulheres com experiencia: ${mediaMulheres} anos
A porcentagem de homens entre 35 a 45 anos é de: ${percHomens}%
A menor idade entre as mulheres com experiência é: ${menorIdade}
Escolaridade geral: ${fundamental} Fundamental, ${medio} Médio, ${superior} Superior, ${pos} Pós Graduação`)    
