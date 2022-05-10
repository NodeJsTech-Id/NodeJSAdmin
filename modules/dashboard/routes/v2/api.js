const express = require("express")
const api = express.Router();

api.get("/satu", (req, res) => {
    res.send("Satu")
})

api.get("/dua", (req, res) => {
    res.send("Dua")
})

module.exports = {
    api
}