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

app.get("./api/notes", (req, res) => {
    res.set('Content-Type', 'application/json')
    res.end(fs.readFileSync("./db/db.json"))
})

app.post("/api/notes", (req, res) => {
    let data = JSON.parse(fs.readFileSync("./db/db.json"))
    data.push({
        id: Math.random().toString(16),
        title: req.body.title,
        text: req.body.text
    })

    res.set('Content-Type', 'application/json')
    fs.writeFileSync("./db/db.json", JSON.stringify(data))
    res.end(JSON.stringify(data))
})

app.delete('/api/notes/:id', (req, res) => {
    res.set('Content-Type', 'application/json')
    let data = JSON.parse(fs.readFileSync("./db/db.json"))
    const newData = data.filter(n => n.id != req.params.id)
    const newDataString = JSON.stringify(newData)
    fs.writeFileSync("./db/db.json", newDataString)
    res.end(newDataString)
});

app.listen(process.env.PORT || 8080)