const data = require("./fakedata.json")

//FOUNDATION
const express = require('express')
const app = express()
const port = process.env.PORT || 3000



// ROUTE HANDLERS
app.get("/", (req, res) => {
    res.redirect('/api/items')
})

app.get("/api/items", (req, res) => {
    res.send(data)
})
//LISTENER
app.listen(port, console.log('bucketList server is on port $(port}'))