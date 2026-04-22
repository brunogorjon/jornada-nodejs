const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit" , (e) => {
    const produto = frm.inproduto.value
    const preco = Number(frm.inpreco.value)

    const valorprom = preco * 2.5

    resp1.innerText = `${produto} - Promoção : Leve 3 por R$ ${valorprom}`
    resp2.innerText = `O terceiro produto sai por R$ ${preco / 2}`

     e.preventDefault()
})