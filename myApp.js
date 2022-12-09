let express = require('express')
let app = express()
require("dotenv").config()

// app.get("/", function(req, res) {
//     res.send("Hello Express")
// })

// Serve HTML file (HTML Server)
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html")
})

// Serve Static Assets (stylesheets, scripts, images) with middleware function express.static()
app.use("/public", express.static(__dirname + "/public"))

// Implement a Root-Level Request Logger Middleware
app.use((req, res, next) => {
    console.log(req.method + " " + req.path + " - " + req.ip)
    next()
})

// Serve JSON on specific route
// app.get("/json", (req, res) => {
//     res.json({
//         message: "Hello json"
//     })
// })

// Serve json with conditional configuration for the message Obj. from .env file
app.get("/json", (req, res) => {
let greeting = "Hello json"

    if (process.env.MESSAGE_STYLE == "uppercase") {
        greeting = greeting.toUpperCase()
    }
    res.json({message: greeting})
})





module.exports = app;