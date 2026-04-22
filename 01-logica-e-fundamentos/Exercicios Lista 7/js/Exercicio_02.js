const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const frase = frm.inFrase.value
    let teste = ""   //onde vou alocar a string invertida pra testar

    for (let i = (frase.length -1); i >= 0 ; i--){   //invertendo a string
        teste += frase[i]
    }

    if (normalizar(frase) == normalizar(teste)){       //normalizaei as duas pra comparar só caractere
        resp.innerText = `${frase} é um Palindromo`
    } else {
        resp.innerText = `${frase} não é um Palindromo`
    }

})

function normalizar(str) {  //função de normalização que eu usei no outro
    return str
        .normalize("NFD") //quebra caractere acentuado para 2 caracteres
        .replace(/[\u0300-\u036f]/g, "")  //Removo os acentos que foram separados
        .replace(/[^a-zA-Z0-9]/g, "")  //remove tudo que não é letra ou numero
        .toLowerCase()    //deixa tudo em minusulo
}