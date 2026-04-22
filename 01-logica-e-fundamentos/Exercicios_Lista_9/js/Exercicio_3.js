const frm = document.querySelector("form");
const resp = document.querySelector("h3");

const inValorVacina = frm.inValorVacina; //globais
const selConvenio = frm.selConvenio; 


function calcularPreco(valor, taxa) {
    return valor * taxa / 100;
}

function atualizarVisibilidadeConvenio() {   //Pra eu controlar o display , se o valor for sim deixa o select visivel
    const possuiConvenio = frm.convenio.value === "Sim"  //o convenio é o nome do grupo de radio que eu to capturando
    selConvenio.style.display = possuiConvenio ? "inline-block" : "none"  //ternário pra deixar invisivel ou visivel
}

function calcularDesconto() {    //tratamento pra input errado e dps calcula
    const valor = Number(inValorVacina.value);
    if (!valor || valor <= 0) {   //vendo se é valor numerio ou menor que 0
        resp.innerText = "Informe um valor válido para a vacina."
        return;
    }

    const possuiConvenio = frm.convenio.value === "Sim"  //fica como booleano , se o valor for sim aponta true , se for nao aponta false
    let taxa = 10;

    if (possuiConvenio) {
        const convenio = selConvenio.value.trim()
        if (convenio === "Amigos dos Animais") {
            taxa = 20;
        } else if (convenio === "Saúde Animal") {
            taxa = 50;
        }
    }

    const desconto = calcularPreco(valor, taxa)
    const total = valor - desconto;

    resp.innerText = `Desconto R$: ${desconto.toFixed(2)}\nA Pagar R$: ${total.toFixed(2)}`
}


frm.addEventListener("submit", (event) => {  //evento principal 
    event.preventDefault();
    calcularDesconto();
});

frm.convenio.forEach((radio) => {  //evento de troca do botao radio pra deixar visivel ou invisvel o select
    radio.addEventListener("change", atualizarVisibilidadeConvenio);
});

window.addEventListener("DOMContentLoaded", atualizarVisibilidadeConvenio); //roda quando a html atualiza pra saber se aparec eou nao o convenio
