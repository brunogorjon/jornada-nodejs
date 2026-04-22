

async function connect() {

    if(global.connection)
        return global.connection.connect()

    const {Pool} = require("pg")
    const pool = new Pool ({
        connectionString: process.env.CONNECTION_STRING
    })

    const client = await pool.connect()
    console.log("Criou o pool  de conexão")

    const res = await client.query("SELECT now();")
    console.log("Conectado ao Postgres em: " , res.rows[0])
    client.release()

    global.connection = pool

    return pool.connect()
}

connect()

async function selectClientes() {
    const client = await connect()
    
    const res = await client.query("SELECT * FROM tb_clientes;")
    return res.rows
}

async function selectCliente(id_cliente) {
    const client = await connect()

    const res = await client.query("SELECT * FROM tb_clientes WHERE id_cliente = $1", [id_cliente])
    return res.rows
}


async function insertCliente(cliente) {
    const client = await connect();

    const sql = "INSERT INTO tb_clientes(nm_cliente, dt_nascimento, uf) VALUES ($1, $2, $3)";
    const values = [cliente.nm_cliente, cliente.dt_nascimento, cliente.uf];

    await client.query(sql, values);

}


async function updateCliente(id_cliente, cliente) {
    const client = await connect();
    
    // Nota: O WHERE é essencial aqui para não atualizar a tabela inteira!
    const sql = "UPDATE tb_clientes SET nm_cliente = $1, dt_nascimento = $2, uf = $3 WHERE id_cliente = $4";
    const values = [cliente.nm_cliente, cliente.dt_nascimento, cliente.uf, id_cliente];

    await client.query(sql, values);
}

// Função para remover um cliente
async function deleteCliente(id_cliente) {
    const client = await connect();
    const sql = "DELETE FROM tb_clientes WHERE id_cliente = $1";
    const values = [id_cliente];

    await client.query(sql, values);
}

module.exports = {
    selectClientes,
    selectCliente,
    insertCliente,
    updateCliente,
    deleteCliente
}