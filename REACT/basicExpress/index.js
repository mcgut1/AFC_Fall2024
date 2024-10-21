// FOUNDATION 
// import in Node is to require 
const express = require("express")
const app = express()
console.log(process) //this shows all the prcoess object
//if hosting site, else use 3000
const port = process.env.PORT || 3000

// ROUTE HANDLERS
app.get("/",(req, res) => {
    console.log(req)
    res.redirect("/home")
})

app.get("/home", (req, res)=> {
    res.send("I am from the redirect!")
})

// LISTENERS
app.listen(port, console.log(`Basic Server App up and runnin' big dawg,  specifically on ${port}`))
