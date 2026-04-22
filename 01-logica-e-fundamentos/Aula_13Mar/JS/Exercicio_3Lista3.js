const frm = document.querySelector("form")
const resp1 = document.querySelector("#OutResp1")
const resp2 = document.querySelector("#OutResp2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const valor = Number(frm.inValor.value)

    if(valor < 1){
        resp1.innerText = `Valor Insuficiente`
        resp2.innerText = `Insisra mais moeda para liberar o estacionamento`
    } else if ( valor >= 1 && valor < 1.75){
        resp1.innerText = `30 min`
        resp2.innerText = `Troco R$ ${(valor -1).toFixed(2)}`
    } else if (valor >= 1.75 && valor < 3){
        resp1.innerText = `60 min`
        resp2.innerText = `Troco R$ ${(valor - 1.75).toFixed(2)}`
    } else {
        resp1.innerText = `120 min`
        resp2.innerText = `Troco R$ ${(valor - 3).toFixed(2)}`
    }
})