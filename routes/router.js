import express from "express"

const router = express.Router()

// routes services
import servicesRoutes from "./services.js"

router.use("/", servicesRoutes)

// routes party
import partyRoutes from "./party.js"

router.use("/", partyRoutes)

export default router