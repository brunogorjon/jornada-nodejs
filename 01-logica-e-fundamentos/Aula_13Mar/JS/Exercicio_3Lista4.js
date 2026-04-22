const frm = document.querySelector("form")
const resp1 = document.querySelector("#OutResp1")
const resp2 = document.querySelector("#OutResp2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const num = Number(frm.inNum.value)
    let resultado = ""
    let soma = 0
    for(let i = 1 ; i < num ; i++){
        if(num % i == 0){
            resultado = resultado + `${i}, `
            soma += i
        }
    }
    if(soma == num){
        resp1.innerText = `Divisores de ${num} : ` + resultado
        resp2.innerText = `${num} é um número perfeito`
    } else {
        resp1.innerText = `Divisores de ${num} : ` + resultado
        resp2.innerText = `${num}  não é um número perfeito`
    }
})