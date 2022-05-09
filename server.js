const express = require("express")
const modules = require("./modules")

const app = express()
// const route = express.Router()
// app.set("view engine", "ejs")
// function testing(req, res){

    //Send String
    // res.send("Hello World")

    //Send Json
    // res.json({
    //     "status": "Success"
    // })

    // Send Json With Status
    // res.status(200).json({
    //     "status": "Success"
    // })

    //Send HTML
    // res.render("index", {
    //     "title": "Hello World"
    // })
// }

app.use("/admin/v1/dashboard",modules.dashboard.routes.coba)
app.listen(8080)