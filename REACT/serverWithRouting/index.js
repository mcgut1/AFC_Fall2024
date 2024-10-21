
const express = require("express")
const app = express()
//console.log(process) //Shows processes

//if hosting site, else use 3000
const port = process.env.PORT || 3000

// Home handler
app.get("/",(req, res) => {
    console.log(req)
    res.redirect("/home")
})

app.get("/home", (req, res)=> {
    res.send("I am from the redirect!")
})

app.get("/about", (req, res)=> {
    res.send("I am the about page")
})

app.get("/contact", (req, res)=> {
    res.send("I am the contact page")
})

//app.get("/fruit/:doggy", (req)=> {
//    console.log(req)
//    res.end("Done")
//})


//Route handler
//name/<name>/bank/<money>

app.get("/:fname/bank/:money", (req, res)=> {
    const {fname, money} = req.params;
   // if (isNaN(money)) res.send("Danger ")
//  res.send(`My name is ${fname} and i have $${money}`)
    res.send(
        isNaN(money)
    ? "Danger Rico Robinson!! Needs to be numerical"
    : `my name is ${fname} and i have $${Intl.NumberFormat("en-IN", {
        style: "currency"
        currency: "USD",
        `}).format(money)}`


})

app.get("*", (req, res) => {
    res.send("No matching route big dawg") //should ALWAYS be the last route handler 
})

// LISTENERS
app.listen(port, console.log(`Basic Server App up and runnin' big dawg,  specifically on ${port}`))



//About
//Home
//Contact