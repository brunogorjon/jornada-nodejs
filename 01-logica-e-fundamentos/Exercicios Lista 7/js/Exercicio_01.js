const frm = document.querySelector("form")
const resp = document.querySelector("h3")
let cripto = ""  //Uso como global pra facilitar minha vida nas funções

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const frase = frm.inMensagem.value
    cripto = criptografar(frase)

    resp.innerText = cripto
    
})

btnDescrip.addEventListener("click", (e) =>{
    e.preventDefault()
    let descrip
    if(cripto == ""){
        descrip = "Não há criptografia para ser quebrada"
        
    } else {
         descrip = descriptografar(cripto)
    }

    resp.innerText =  descrip
})

function criptografar(str){
    let pares = ""
    let impares = ""

    for(let i = 0; i < str.length;i++){    //basicao leio por elemento e faço  a sepação
        if (i % 2 == 0) pares += str[i]
        else impares += str[i]
    } 

    return pares + impares //retorno os 2 juntos
}

function descriptografar(str){

    const meio = Math.ceil(str.length / 2)  //ceil é porque se for impar arredonda pra cima , ja que tem 1 par a mais
    //IMPORTANTE - Esse meio identifica pra mim a quantidade de pares, nao até que posição eu vou , porque tem a posição 0, no caso eu vou até meio -1
    const pares = str.slice(0, meio)  //pego do primeiro elemento até a metade(nao inclui o meio)
    const impares = str.slice(meio)  //da metade até o final

    let resultado = ""
    let i = 0
    let j = 0

    for (let k = 0; k < str.length; k++) {      //so coloco em ordem
        if (k % 2 == 0) {
            resultado += pares[i++]
        } else {
            resultado += impares[j++]
        }
    }

    return resultado
}


