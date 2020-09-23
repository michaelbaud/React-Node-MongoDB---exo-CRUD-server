const express = require("express")
const router = express.Router()

const argonauteController = require("../controllers/argonauteController")

router.get("/", argonauteController.all)
router.post("/new", argonauteController.store)

module.exports = router