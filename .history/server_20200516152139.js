const express = require("express");
const fs = require("fs")
const bodyParser = require("body-parser")
const path = require('path');


const app = express()
app.use(express.static("public"))
app.use(bodyParser.urlencoded({
    extended: false
}))

module.exports = path.dirname(process.mainModule.filename);

app.get("/api/notes", (req, res) => {
    res.set('Content-Type', 'application/json')
    res.end(fs.readFileSync("./db/db.json"))
})

app.post("/api/notes", (req, res) => {
    let data = JSON.parse(fs.readFileSync("./db/db.json"))
    data.push({
        title: req.body.title,
        text: req.body.text
    })

    fs.writeFileSync("./db/db.json", JSON.stringify(data))
})

app.listen(8080);