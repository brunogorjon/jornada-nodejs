

async function connectToDatabase(user, password){

    if(user === process.env.USERDATABASE && password === process.env.PASSWORLDDATABASE){
        console.log("conexão com  banco de dados estabelecida!")
    } else {
        console.log("Falha de login, não possível se conectar ao banco de dados")
    }
}


export default connectToDatabase