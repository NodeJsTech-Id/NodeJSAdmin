const express = require("express")
const route = express.Router();

route.get("/satu", (req, res) => {
    res.send("Satu")
})

route.get("/dua", (req, res) => {
    res.send("Dua")
})

module.exports = route;