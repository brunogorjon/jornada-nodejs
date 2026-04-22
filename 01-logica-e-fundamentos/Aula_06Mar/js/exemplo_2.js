const frm = document.querySelector("form") //criando referencia ao form e aos elementos de resposta
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit", (e) => {     //função flecha quando dou submit aponta pra parada
    const titulo = frm.inTitulo.value               //otendo conteudo dos campos
    const duracao = Number(frm.inDuracao.value)

    const horas = Math.floor(duracao / 60) //arredonda para baixo o resultado
    const minutos = duracao % 60            //resto da divisao

    resp1.innerText = titulo                //exibindo as respostas
    resp2.innerText = `${Horas} hora(s) e ${minutos} minuto(s)`

    e.preventDefault()      //evita envio do form
})