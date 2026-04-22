import connectToDatabase from "./database/data.js"

async function main(){
   
    await connectToDatabase("naruto","uzumaki")
}

main()
