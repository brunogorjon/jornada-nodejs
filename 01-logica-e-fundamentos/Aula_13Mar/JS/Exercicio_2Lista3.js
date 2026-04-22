const frm = document.querySelector("form")
const resp = document.querySelector("#OutResp1")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const velperm = Number(frm.inVelpermitida.value)
    const velcondu = Number(frm.inVelcondutor.value)

    if(velcondu <= velperm){
        resp.innerText = `Sem Multa`
    } else if (velcondu / velperm <= 1.2){
        resp.innerText = `Multa leve`
    } else {
        resp.innerText = `Multa Grave`
    }
})