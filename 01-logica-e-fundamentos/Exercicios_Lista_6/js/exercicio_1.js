//"submit" tenho que ver se tem um numero par de clubes pra dar certo a chave, pegar os extremos e imprimir 
//"adicionar" colocar na array, mas antes vejo se ta vazio e se ja tem o clube(função pra normalizar)
//"btnlistar" so pra listar mesmo

const frm = document.querySelector("form")
const resp = document.querySelector("h3")
const resp2 = document.querySelector("h4")
const btnAdicionar = document.querySelector("#btnAdicionar")
const btnListar = document.querySelector("#btnListar")

function normalizar(str) {
    return str                                      //função pra normalizar pra comaprar
        .normalize("NFD")                // separa acento da letra
        .replace(/[\u0300-\u036f]/g, "") // remove acentos
        .replace(/\s/g, "")              // remove espaços
        .toLowerCase()                   // minúsculo
}

const clubes = []
frm.addEventListener("submit", (e) => {
    e.preventDefault()

    let qntClubes = clubes.length

    if(qntClubes % 2 != 0){  //valido se tem um numero par de clubes pro chaveamento
        alert(`Não é possivel fazer um chaveamento com numero impar de clubes:`)
        frm.inClube.focus()
    } else {
        let aux = qntClubes -1               //começa do 0
        let lista = ""                       //string auxiliar pra eu colocar a tabela
        for(let i = 0 ; i < qntClubes /2 ; i++){    //pra rodar todos clubes , qntClubes/2 é porque eu corro  em pares 0-9 1-8 2-7...
            lista += `${clubes[i]} x ${clubes[aux - i]}\n`  // criando a tabela 
        
        }
        resp2.innerText = lista 
    }
})


btnAdicionar.addEventListener("click", (e) => {   //felcha btn Adicionar , joga na string e aciona o listar
    e.preventDefault()

    const clube = frm.inClube.value

     if(frm.inClube.value.trim() === "") {   //valido se esta vazio
        alert(`Informe o nome do clube`)
        frm.inClube.focus()  //volta pro input
        return
    }
    
    for(let compara of clubes){            //tento ver se o clube ja existe
        if(normalizar(compara) == normalizar(clube)){
            alert(`Esse clube ja foi incluido`)
            frm.inClube.focus()
            return
        }
    }

    clubes.push(clube) 

    btnListar.click()
    frm.inClube.value = ""   //limpa o input
  
})

btnListar.addEventListener("click", (e) => {  //so listo e coloco um - pra organizar
    e.preventDefault()

    resp.innerText = clubes.join(" - ")
})