const USD = 4.87
const EUR = 5.32
const GBP = 6.08

const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency =  document.getElementById("currency")
const footer = document.querySelector("main footer")
const description =  document.getElementById("description")
const result = document.getElementById("result")

//Manipulando o inputa Amount para receber somente numeros
amount.addEventListener("input", () => {
    
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex,"")
})

form.onsubmit = (event) => {
    event.preventDefault()

    switch(currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }
}

//Função que converte a moeda

function convertCurrency(amount, price, symbol, ) {

    //Aplic aa classe que exibe o footer na tela com resultado
    try{
        description.textContent = `${symbol} 1 = ${FormatCurrencyBRL}`

        let total = amount * price
        total = FormatCurrencyBRL(total).replace("R$", "")
        
        result.textContent = `${total} Reais`

        footer.classList.add("show-result")
        //remove a classe removendo ele se der ruim
    } catch(error){
        footer.classList.remove("show-result")

        console.log(error)
        alert("Não foi possível converter, Tente novamente mais tarde.")
    }
}
//Formata a moeda em Real Brasileiro
function FormatCurrencyBRL(value){
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}