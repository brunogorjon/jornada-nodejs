const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")


frm.addEventListener("submit", (e) =>{
    const nome = frm.inMedicamento.value
    const preço = Number(frm.inPreço.value)
    
    const promocao = Math.floor(preço * 2)

    resp1.innerText = `Promoção ${nome}`
    resp2.innerText = `2 por ${preço}`

    e.preventDefault()

})