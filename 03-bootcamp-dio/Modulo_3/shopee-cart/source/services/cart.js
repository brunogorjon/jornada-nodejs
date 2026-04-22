//          Mapeia primeiro os casos de uso

//quais ações meu carrinho pode fazer?

//adicionar item no carrinho
async function addItem(userCart, item) {
    userCart.push(item)
}
//deletar item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name)

    if(index != -1){
        userCart.splice(index,1)
    }
}
//remover um item do carrinho   
async function removeItem(userCart, index) {
    const deleteIndex = index -1

    if(index >= 0 && index < userCart.length){
        userCart.splice(deleteIndex,1)
    }
}
//calcular o total R$

async function calculateTotal(userCart) {
    console.log("\nShopee Cart Total Is: ")
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0)
    console.log(result)
}
 //exibir os produtos do carrinho

 async function displayCart(userCart) {
    console.log("Shopee Cart List")
    userCart.forEach((item, index ) =>{
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity} | Subtotal = ${item.subtotal()}`)
    })
    
 }

export {
    addItem,
    calculateTotal,
    removeItem,
    deleteItem,
    displayCart
}