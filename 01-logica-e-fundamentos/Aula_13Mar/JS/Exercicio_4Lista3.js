const frm = document.querySelector("form")
const resp1 = document.querySelector("#OutResp1")
const resp2 = document.querySelector("#OutResp2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const a = Number(frm.inLadoA.value)
    const b = Number(frm.inLadoB.value)
    const c = Number(frm.inLadoC.value)

    if(a < b + c && b < a + c && c < a + b ){
        resp1.innerText = `Lados podem formar um triângulo`

        if ( a == b && b == c){
            resp2.innerText = `Tipo : Equilátero`
        } else if (a == b || a == c || b == c){
            resp2.innerText = `Tipo : Isóceles`
        } else {
            resp2.innerText = `Tipo: Escaleno`
        }
    } else{
        resp1.innerText = `Lados Não podem formar um Triângulo`
        resp2.innerText = ` `
    }
})