const controllers = require("../../controllers")
const express = require("express")
const web = express.Router()

web.get("/satu", (req, res) => {
    res.send("Satu")
})

web.get("/login", controllers.v1.dashboard.index)

module.exports = web