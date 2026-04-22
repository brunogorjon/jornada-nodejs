require("dotenv").config()  //carrego as configurações do arquivo .env

const db = require("./db")
const port = process.env.PORT   //recupera o valor da porta
const express = require("express")  //Framework web pra lidar com  rotas

const app = express()     // Intancia a aplicação express

app.use (express.json())  //habilita o express para entender requisições com corpo em JSON
//Rota Root: útil para o "check" 
//primeiro parametro : caminho da rota
//segundo parametro : função de callback
app.get("/", (req, res) => {
    res.json({
        message: "Funcionando"
    })
})

app.get("/clientes/:id_cliente", async (req, res) => {
    const clientes = await db.selectCliente(req.params.id_cliente)
    res.json(clientes)
})

app.get("/clientes", async (req, res) => {
    const clientes = await db.selectClientes()
    res.json(clientes)
})


app.post("/clientes", async (req, res) => {
    
    await db.insertCliente(req.body);

    res.sendStatus(201);
})


app.patch("/clientes/:id_cliente", async (req, res) => {
    await db.updateCliente(req.params.id_cliente, req.body);
    // Status 200: OK (Sucesso genérico)
    res.sendStatus(200);
})

// Rota DELETE (Delete): Remove um registro do banco de dados
app.delete("/clientes/:id_cliente", async (req, res) => {
    await db.deleteCliente(req.params.id_cliente);
    // Status 204: No Content (Sucesso, mas sem corpo de resposta para retornar)
    res.sendStatus(204);
})

app.listen(port)    //inicializa o servidor para escutar as requisições na prota


console.log("Backend rodando na porta " + port)