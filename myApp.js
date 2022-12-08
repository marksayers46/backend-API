let express = require('express');
let app = express();

// app.get("/", function(req, res) {
//     res.send("Hello Express")
// });

// Serve HTML file (HTML Server)
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

// Serve Static Assets (stylesheets, scripts, images)
app.use("/public", express.static(__dirname + "/public"))


module.exports = app;