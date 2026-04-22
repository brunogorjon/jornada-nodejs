const frm = document.querySelector("form")
const resp = document.querySelector("#OutResp1")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const num = Number(frm.inNum.value)
    const fruta = frm.inFruta.value
    let resultado = ""
    for(let i = 0;i < num; i++){
        resultado = resultado + fruta + " "
    }

    resp.innerText = resultado
})