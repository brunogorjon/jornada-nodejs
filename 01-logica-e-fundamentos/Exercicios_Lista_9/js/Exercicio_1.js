//tenhoo que receber o nome e idade e categorizar , alem disso preciso colocar os "-" embaixo de cada letra do nome.

function retornarTracos(nome) {  //recebe o nome cria uma auxliar pra armazenar os "-" e os espaços
    let tracos = "";
    for (const letra of nome) {
        tracos += letra === " " ? " " : "-"  // se letra === 'espaço' ? coloque 'espaço : senao coloque '-'
    }
    return tracos
}


function categorizarAluno(idade) {
    if (idade < 13) return "Infantil"
    if (idade < 18) return "Juvenil"
    return "Adulto";
}

const frm = document.querySelector("form")
const resp = document.querySelector("h3")
frm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const nome = frm.inNome.value.trim()
    const idade = Number(frm.inIdade.value)
    
    const tracos = retornarTracos(nome)
    const categoria = categorizarAluno(idade)
    
    resp.innerText = `${nome}\n${tracos}\nCategoria: ${categoria}`
    

})