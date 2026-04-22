const frm = document.querySelector("form")
const resp = document.querySelector("#outResposta")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const num = Number(frm.inNumero.value)

    if(num % 2 == 0){
        resp.innerText = `${num} é um número par`
    } else {
        resp.innerText = `${num} é um numero impar`
    }

})