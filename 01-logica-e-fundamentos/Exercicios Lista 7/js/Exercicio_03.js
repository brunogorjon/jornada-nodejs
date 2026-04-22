const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")



frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const multa = Number(frm.inMulta.value)  //valor da multa normalzin
    const data = frm.inData.value //peguei esse valor mas como string

    if (!data || isNaN(multa) || multa <= 0) { //valido numero negativo e falta de data e valor nao numerico apesar do html ja travar
    resp1.innerText = "Dados inválidos"
    return
    }

    const [ano, mes, dia] = data.split("-")      // to pegando mes ano e dia isolado , o split faz isso
    const prazo = new Date(ano, mes - 1, dia)    //formatei a nova data de prazo

    prazo.setDate(prazo.getDate() + 90)       //acrescento os 90 dias tem o setMonth e o setFullYear tmbm

    const val_Desconto = multa * 0.8     //multa

    resp1.innerText = `Data limite: ${prazo.toLocaleDateString("pt-BR")}`  //tolacaledatestring formata a data pra fica mais amigável
    resp2.innerText = `Valor com desconto: R$ ${val_Desconto.toFixed(2)}`  
})
