const express = require("express")
const coba = express.Router()

coba.get("/", (req, res) => {
    res.send("Modules")
})

module.exports = {
    coba
}