const form = document.querySelector('form');
const amount = document.getElementById('amount');
const expense = document.getElementById('expense');
const category = document.getElementById('category');

const expenseList = document.querySelector('ul');
const expensesQuantity = document.querySelector("aside header p span");
const expensesTotal = document.querySelector("aside header h2");

amount.oninput = () => {
    let value = amount.value.replace(/\D/g, "");
    value = value / 100;
    amount.value = formatCurrencyBRL(value);
};  

function formatCurrencyBRL(value) {
    value = value.toLocaleString('pt-BR', {
        style: "currency",
        currency: "BRL",
    });
    return value;
}

// captura o evento de submit do formulário
form.onsubmit = (event) => {
    event.preventDefault();
    
    // cria um objeto com os dados do formulário
    const newExpense = {
        id: new Date().getTime(),
        expense: expense.value,
        category_id: category.value,
        category_name: category.options[category.selectedIndex].text,
        amount: amount.value,
        created_at: new Date(),
    };

    // CORREÇÃO 1: Faltava chamar a função para de fato adicionar na tela
    expenseAdd(newExpense);
}

function expenseAdd(newExpense){    
    try {
        const expenseItem = document.createElement("li");
        expenseItem.classList.add("expense");
        
        const expenseIcon = document.createElement("img");
        expenseIcon.setAttribute("src", `./img/${newExpense.category_id.toLowerCase()}.svg`);
        expenseIcon.setAttribute("alt", "Ícone de tipo da despesa");

        const expenseInfo = document.createElement("div");
        expenseInfo.classList.add("expense-info");
        
        const expenseName = document.createElement("strong");
        expenseName.textContent = newExpense.expense;
        
        // cria a categoria da despesa
        const expenseCategory = document.createElement("span");
        expenseCategory.textContent = newExpense.category_name;

        expenseInfo.append(expenseName, expenseCategory);

        const expenseAmount = document.createElement("span");
        expenseAmount.classList.add("expense-amount");
        expenseAmount.innerHTML = `<small>R$</small> ${newExpense.amount.toUpperCase().replace("R$", "")}`;

        const removeIcon = document.createElement("img");
        removeIcon.classList.add("remove-icon");
        removeIcon.setAttribute("src", "./img/remove.svg");
        removeIcon.setAttribute("alt", "Ícone de remover despesa");

        expenseItem.append(expenseIcon, expenseInfo, expenseAmount, removeIcon);

        expenseList.append(expenseItem);

        updateTotal();
        
    } catch (error) {
        alert("Ocorreu um erro ao adicionar a despesa.");
        console.log(error);
    }
}

function updateTotal() {
    try {
        const items = expenseList.children; 

        expensesQuantity.textContent = `${items.length} ${items.length > 1 ? "despesas" : "despesa"}`;

        let total = 0;

        for (let item = 0; item < items.length; item++) {
        
            const itemAmount = items[item].querySelector(".expense-amount");

           
            let value = itemAmount.textContent.replace(/\D/g, "");
            value = parseFloat(value) / 100;

            if(isNaN(value)) {
                return alert("Valor da despesa inválido.");
            }

           
            total += Number(value);
        }

        
       const symbolBRL = document.createElement("small");
       symbolBRL.textContent = "R$";

       total = formatCurrencyBRL(total).toUpperCase().replace("R$", "");

       expensesTotal.innerHTML = "";
         expensesTotal.append(symbolBRL, total);
    } catch (error) {
        console.log(error);
        alert("Ocorreu um erro ao atualizar o total de despesas.");
    }
}


expenseList.addEventListener("click", function(event) {
    if (event.target.classList.contains("remove-icon")) {
        const expenseItem = event.target.closest(".expense");
        expenseItem.remove();
        updateTotal();
    }
});