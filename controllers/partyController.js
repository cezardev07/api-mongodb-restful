import { Party as PartyModel } from "../models/Party.js";

const checkPartyBudget = (budget, services) => {

    const priceSum = services.reduce((sum, services) => sum + services.price, 0)

    // se a somas dos preços for maior que o orçamento return false
    if(priceSum > budget){
        return false
    }
        
    return true
}

const partyController = {

    create: async (req, res) => {
        try {
            const party = {
                title: req.body.title,
                author: req.body.author,
                description: req.body.description,

                // orçamento
                budget: req.body.budget,
                image: req.body.image,

                // array
                services: req.body.services,
            }

            if(party.services && !checkPartyBudget(party.budget, party.services)){
                return res.status(406).json({
                    status: 406,
                    mensage: "O seu orgamento é insuficiente!"
                })
            }

            const response = await PartyModel.create(party)

            return res.status(201).json({
                status: 201,
                mensage: "Party create with sucess!",
                response
            })

        } catch (error) {
            console.log("[ ERRO ] -> " + error)
        }
    },

    getAll: async (_req, res) => {
        try {
            const party = await PartyModel.find()

            return res.status(200).json({
                status: 200,
                party
            })
        } catch (error) {
            console.log("[ ERRO ] -> " + error)
        }
    },

    get: async (req, res) => {
        // talvez mude isso para req.body
        const id = req.params.id

        const party = await PartyModel.findById(id)

        if(!party){
            return res.status(404).json({
                status: 404,
                mensage: "Not Default"
            })
        }

        return res.status(200).json({
            status: 200,
            party
        })
    },

    delete: async(req, res) => {
        try {
            const id = req.params.id

            const party = await PartyModel.findById(id)

            if(!party){
                return req.status(404).json({
                    status: 404,
                    mensage: "Party not default"
                })
            }
            
            const deletedParty = await PartyModel.findByIdAndDelete(id)

            return res.status(200).json({
                status: 200,
                mensage: "Party deleted with sucess!",
                partyDeleted: deletedParty
            })
        } catch (error) {
            console.log("[ ERRO ] -> " + error)
        }
    },

    update: async (req, res) => {
        try {
            const id = req.params.id

            const party = {
                title: req.body.title,
                author: req.body.author,
                description: req.body.description,

                // orçamento
                budget: req.body.budget,
                image: req.body.image,

                // array
                services: req.body.services,
            }

            if(party.services && !checkPartyBudget(party.budget, party.services)){
                return res.status(406).json({
                    status: 406,
                    mensage: "O seu orgamento é insuficiente!"
                })
            }
 
            const updateParty = await PartyModel.findByIdAndUpdate(id, party)
            
            if(!updateParty){
                return req.status(404).json({
                    status: 404,
                    mensage: "Party not default"
                }) 
            }   
            
            return res.status(200).json({
                status: 200,
                mensage: "Update Party with sucess!",
                updateParty
            })

        } catch (error) {
            console.log("[ ERRO ] -> " + error)
        }
    },
}

export default partyController