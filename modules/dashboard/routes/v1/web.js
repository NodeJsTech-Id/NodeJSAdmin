const express = require("express")
const route = express.Router();

route.get("/satu", (req, res) => {
    res.send("Satu")
})

route.get("/dua", (req, res) => {
    res.send("Dua")
})

function testing(){
    return "Route Web Nih"
}

module.exports = {
    route,
    testing
}