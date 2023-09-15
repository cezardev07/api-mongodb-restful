import mongoose, { model } from "mongoose"

const { Schema } = mongoose

import { serviceSchema } from "./Service.js"

// create schema
const partySchema = new Schema(
    {
        title: {
            type: String,
            require: true
        },
        // autor
        author: {
            type: String,
            require: true
        },
        description: {
            type: String,
            require: true
        },
        // orçamento
        budget: {
            type: Number,
            require: true
        },
        image: {
            type: String,
            require: true
        },
        services: {
            type: [ serviceSchema ]
        },
    },
    { timestamps : true }
)

// create model
const Party = model("Party", partySchema)

export { Party }