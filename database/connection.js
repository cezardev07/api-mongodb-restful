import { connect } from "mongoose"

async function main(){

    try {
        
        // await mongoose.connect("")
        // or 
        await connect(process.env.CONNECTION_MONGODB)

        // "conectado com banco mongoDB"

    } catch (error) {
        console.log("[ ERROR ] -> " + error)
    }

}

export default main;