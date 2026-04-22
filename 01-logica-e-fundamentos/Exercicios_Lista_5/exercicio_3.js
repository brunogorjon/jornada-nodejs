const prompt = require("prompt-sync")()

//preciso receber o valor so salario bruto e devovler bruto + recolhimento da empresa + folha dela
//array de funcionarios - cadastro nome + salario bruto , somo emvariavel global oque preciso e salvo liquido tmbm

const funcionarios = []
let continuar = "s"
do {  //inserindo os dados
    const nome = prompt("Nome do funcionario: ")
    const sal_bruto = Number(prompt("Qual Salario Bruto? "))
    funcionarios.push({nome, sal_bruto})
    continuar = prompt("Deseja continuar informando funcionários? S/N").toLowerCase()
} while(continuar == "s")

let totalfolha = 0 //pra armazenar o total de folha da empresa
let totalIRPF = 0 //pra armazenar o imposto recolhido  

//IRPF recolhe dps de descontar inss

for (const funcionario of funcionarios){
    const salario = funcionario.sal_bruto  //crio a salario pra me ajudar a calcular 

    let inss = 0
    if(salario <= 1556.94) inss = salario * 0.08            //posso fazer assim porque ta tudo na mesma estrutura
    else if(salario <= 2594.92) inss = salario * 0.09       //se for pego em um ja nao corre os outros
    else inss = salario *0.11

    const base = salario - inss
    //Agora o IRPF , crio o base porque ele é calculado dps do desconto inss

    let imposto = 0;
    if (base <= 1903.98) imposto = 0
    else if (base <= 2826.65) imposto = base * 0.075 - 142.80     //mesma coisa do outro
    else if (base <= 3751.05) imposto = base * 0.15 - 354.80
    else if (base <= 4664.68) imposto = base * 0.225 - 636.13
    else imposto = base * 0.275 - 869.36

    const sal_liquido = salario - inss - imposto
    totalfolha += salario
    totalIRPF += imposto

    console.log(`${funcionario.nome} - Salário Liquido: ${sal_liquido.toFixed(2)} R$ \n`) //imprimir todos sal liquidos primeiro
}
    //dps que lsitei todos funcionários e o sal liquido , msotros o totalfolha e o irpf
    console.log(`A empresa tem uma folha folha de pagamento de : ${totalfolha} R$`)
    console.log(`A empresa recolhe no total de impoto de renda o valor de : ${totalIRPF} R$`)