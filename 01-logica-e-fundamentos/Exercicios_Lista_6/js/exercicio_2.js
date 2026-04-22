//"btnAdicioanr" adicionar um numero a um vetor e verificar se ele , além de ser numero, não é repetido
//"submit" Avaliar cada elemento pra ver se está em ordem crescente

const frm = document.querySelector("form")
const resp = document.querySelector("h3")
const resp2 = document.querySelector("h4")
const btnAdicionar = document.querySelector("#btnAdicionar")

const numeros = []     //array
function listar (){        //função pra eu chamar toda vez que adicionar um numero
    resp.innerText = numeros.join (" - ")
}

btnAdicionar.addEventListener("click", (e) => {  //função seta pro btnAdicionar
    e.preventDefault()
    
    const num = Number(frm.inNumero.value)   //pegando o valor digitado

    if(frm.inNumero.value.trim() === "") {   //valido se esta vazio
        alert(`O valor está vazio informe um número`)
        frm.inNumero.focus()  //volta pro input
        return
    }
    if(isNaN(num)) {           //Função isNaN pra nao deixa capturar letras
        alert(`Informe um Número`)
        frm.inNumero.focus()
        return
    }

    for ( let nums of numeros){              //Percorrendo numeros para avaliar repetição
        if(num === nums){
            alert(`Esse numero ja foi inserido`)
            frm.inNumero.focus()
            return
        }
    }
    
    numeros.push(num)       //coloquei no vetor
    frm.inNumero.value = "" //limpei o trem
    listar()   //listo o novo numero
})

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    let situacao = ""             //para responder
    let crescente = true           //boleano para avalias ordem
    let aux = numeros.length          //contagem de elementos
    for(let i = 0; i < aux -1 ; i++){            //vo pegando de 1 em 1 e vendo se tem algum maior
        if(numeros[i] > numeros[i +1]){
            crescente = false   //se tiver em desordem vira false
            break
        }
    }
    if(crescente === true){
        situacao = `Atenção... Os numeros estão em ordem crescente`
    } else{
        situacao = `Atenção... Os numeros estão em ordem decrescente`
    }
    resp2.classList.add("azul")   //mudei a classe la no css pra ficar azul
    resp2.innerText = situacao  //resposta
})