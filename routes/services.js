import express from "express"

const router = express.Router()

import servicesController from "../controllers/serviceController.js"

// functions

// router
//     .route("/services")
//     .post((req, res) => servicesController.create(req, res))
// or

// router create
router.route("/services").post((req, res) => {
    return servicesController.create(req, res)
})

// router get all
router.route("/services").get((req, res) => {
    return servicesController.getAll(req, res)
})

// router get one element
// talvez eu mude isso para post (request body or params)
router.route("/services/:id").get((req, res) => {
    return servicesController.get(req, res)
})

// router delete element in database
router.route("/services/:id").delete((req, res) => {
    return servicesController.delete(req, res)
})

//router put for update element
router.route("/services/:id").put((req, res) => {
    return servicesController.update(req, res)
})

export default router