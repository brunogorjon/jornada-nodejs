//Preciso desenvolver um código que valida um nome pra ver se ta completo , depois recebo o sobrenomee contos as vogais para gerar a senha.
//Usar função validarnome(), obterSobrenome(), contarVogais()

 function validarNome(nome){
    return nome.trim().split(" ").length > 1 //uso o espaço como referencia para nome completo , se tiver mais de 1 palavra valida
 }
 function obterSobrenome(nome){
    const palavras = nome.trim().split(" ") 
    return palavras[palavras.length -1] //mesma coisa pego o ultimo nome
 }

 function contarVogais(nome){
    let count = 0
    const vogais = "aeiouáéíóúãõâêô" //crio um repositório de vogais para comparar com includes

    for (const letra of nome) {
        if (vogais.includes(letra)) {
            count++
        }
        if (count < 10){
            count = String(count).padStart(2,'0')  //transforma em string e joga o 0 
        }
    }
    return count

 }

 const frm = document.querySelector("form")
 const resp = document.querySelector("h3")

 frm.addEventListener("submit", (e) => {
    e.preventDefault()

   const nome = frm.inNome.value.toLowerCase()
   
   
    if (validarNome(nome) === false){ 
        alert("Insira um Nome Completo!")
        return
    }

    vogais = contarVogais(nome)
    sobrenome = obterSobrenome(nome)
    senha = sobrenome + vogais

    resp.innerText = senha
 })