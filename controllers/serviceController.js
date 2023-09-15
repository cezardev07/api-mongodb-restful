// importa o Service e Renomeia ele para ServiceModels
import { Service as ServiceModel } from "../models/Service.js"

const servicesController = {

    // post and method create in mongodb (mongoose)
    create: async (req, res) => {
        try {
            
            const service = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: req.body.image
            }

            const response = await ServiceModel.create(service)

            return res.status(201).json({
                response,
                msg: "service criado com sucesso!"
            })

        } catch (error) {
            console.log("[ ERRO ] -> " + error)
        }
    },

    // get and method find in mongodb (mongoose)
    getAll: async (_req, res) => {
        try {
            const service = await ServiceModel.find()
            res.status(200).json(service)
        } catch (error) {
            console.log("[ ERRO ] -> " + error)
        }
    },

    // get one element in database and findById in mongodb (mongoose)
    get: async (req, res) => {
        try {
            // talvez eu mude isso para req.body
            const id = req.params.id
            // const id = req.body.id
            const service = await ServiceModel.findById(id)

            if(!service){
                return res.status(404).json({
                    status: 404,
                    mensage: "not default"
                })
            }

            return res.status(200).json(service)
        } catch (error) {
            console.log("[ ERRO ] -> " + error)
        }
    },

    // delete and method findByIdAndDelete in mongodb (mongoose)
    delete: async (req, res) => {
        try {
            // talvez eu mude isso para req.body
            const id = req.params.id
            // const id = req.body.id
            const service = await ServiceModel.findById(id)

            // if not exist 
            if(!service){
                return res.status(404).json({
                    status: 404,
                    mensage: "not default"
                })
            }

            const deleteService = await ServiceModel.findByIdAndDelete(id)
            
            return res.status(200).json({
                status: 200,
                mensage: "element deleted with sucess!",
                deleteService
            })
        } catch (error) {
            console.log("[ ERRO ] -> " + error)
        }
    },

    // update element and method findByIdAndUpdate in mongodb (mongoose)
    update: async (req, res) => {
        try {
            // talvez eu mude isso para req.body
            const id = req.params.id
            // const id = req.body.id

            // new update
            const service = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: req.body.image
            }

            const updateService = await ServiceModel.findByIdAndUpdate(id, service)

            // if not exist 
            if(!updateService){
                return res.status(404).json({
                    status: 404,
                    mensage: "not default"
                })
            }

            // if true
            return res.status(200).json({
                status: 200,
                mensage: "update element with sucess!",
                updateService
            })
        } catch (error) {
            console.log("[ ERRO ] -> " + error)
        }
    }
}

export default servicesController