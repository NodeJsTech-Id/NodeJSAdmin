const express = require("express")
const web = express.Router();

web.get("/satu", (req, res) => {
    res.send("Satu")
})

// web.get("/login", controller.login)

module.exports = web