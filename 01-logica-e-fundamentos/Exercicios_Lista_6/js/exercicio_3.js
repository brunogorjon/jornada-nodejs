//"btnAdicionar" Devo receber o nome e o numero de acertos(campos separados) colcoar em uma array e listar
//"btnListar" Padrão , mas agora tem que ter os acertos e nomes
//"submit" precisa receber um numero de acertos pro filtro e depois comparar com array e mostrar quem passou

const frm = document.querySelector("form")
const resp = document.querySelector("h3")
const btnAdicionar = document.querySelector("#btnAdicionar")
const btnListar = document.querySelector("#btnListar")

const participantes = []

btnListar.addEventListener("click",(e) => {     
    e.preventDefault()
    let listagem = ""    //auxiliar pra colocar a lista
    for (let lista of participantes){          //percorrendo a aray
        listagem += `${lista.nome}  -  ${lista.acertos} acertos.\n`
    }

    resp.innerText = listagem
})

btnAdicionar.addEventListener("click", (e) => {
    e.preventDefault()

    if(frm.inCandidatos.value.trim() === "") {   //valido se esta vazio
        alert(`É necessário que forneça o nome do Candidato`)
        return
    }
    if(frm.inAcertos.value.trim() === "") {   //valido se esta vazio
        alert(`É necessário que forneça o numero de acertos`)
        return
    }

    const candidato = frm.inCandidatos.value     //capturando o nome do candidato
    const qntdacertos = Number(frm.inAcertos.value)       // capturando o numero de acertos

    participantes.push({    //inserindo e criando os objetos da array
        nome: candidato,
        acertos:qntdacertos
    })
    btnListar.click()        //toda vez que corre o evento lista
    frm.inCandidatos.value = "" //limpando campoi
    frm.inAcertos.value = ""
})

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    let listagem = ""
    const crivoAcertos = Number(prompt("Qual a nota de corte?"))  //recebo a nota de corte

    if(isNaN(crivoAcertos)){         //pra evitar de receber paalvras
        alert(`Fornça apenas numeros para o crivo!`)
        return
    }
    const aprovados = []     //array auxiliar pra colocar os que passaram da norta de corte

    for (let candidato of participantes){       //to colocando os aprovados na aprovados
        if(candidato.acertos >= crivoAcertos){
            aprovados.push(candidato)
        }
    }

    aprovados.sort((a, b) => b.acertos - a.acertos)    //função pra deixar em ordem decrescente

    for (let lista of aprovados){
        listagem += `${lista.nome}  -  ${lista.acertos} acertos.\n`  //lista o trem
    }

    resp.innerText = listagem
})