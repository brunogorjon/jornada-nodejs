const frm = document.querySelector("form")
const resp = document.querySelector("#OutResp1")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const chinchi = Number(frm.inChinchilas.value)
    const anos = Number(frm.inAnos.value)
    let resultado = ""
    let total = chinchi
    for(let i = 1; i <= anos ; i++){
        total = total * 3
        resultado = resultado + `${i} Ano: ${total} Chinchilas \n`
    }

    resp.innerText = resultado


})