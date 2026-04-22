const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")

frm.addEventListener("submit" , (e) => {
    const precorotativo = Number(frm.invaloruso.value)
    const tempouso = Number(frm.intempodeuso.value)

    const total = Math.ceil(tempouso / 15) * precorotativo

    resp1.innerText = `Valor a Pagar R$: R$ ${total}`

     e.preventDefault()

})