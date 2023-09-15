import mongoose, { model } from "mongoose"

const { Schema } = mongoose

// schema banco!
const serviceSchema = new Schema(
    {
        name: {
            type: String,
            require: true
        },
        description: {
            type: String,
            require: true
        },
        price: {
            type: Number,
            require: true
        },
        image: {
            type: String,
            require: true
        }
    },
    // salva a data quando for criado
    { timestamps : true }
)

// cria um modulo com mongoose
const Service = model("Service", serviceSchema)

export {
    Service,
    serviceSchema
}