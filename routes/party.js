import express from "express"

const router = express.Router()

import partyController from "../controllers/partyController.js"

router.route("/party").post((req, res) => {
    return partyController.create(req, res)
})

router.route("/party").get((req, res) => {
    return partyController.getAll(req, res)
})

router.route("/party/:id").get((req, res) => {
    return partyController.get(req, res)
})

// talvez mude isso para request body
router.route("/party/:id").delete((req, res) => {
    return partyController.delete(req, res)
})

router.route("/party/:id").put((req, res) => {
    return partyController.update(req, res)
})

export default router