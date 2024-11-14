

//FOUNDATION
//Where is all my stuff coming from? Why is coding so hard
//What do I need to run my server?

const express = require("express")
const app = express()
const port = process.env.Port || 3000;


//if deployed do not use morgan
if(!process.env.NODE_ENV || process.env.NODE_ENV !== "production") {
    const logger = require("morgan");
    app.use(logger("dev"));
}
const logger = require("morgan")
app.use(logger("dev"));

//When working with a database you need to know three things:
const conn = require("./connections/pgconnection")

//2. Blueprints
//Already done by the DBA

//3. Queries

//ROUTE HANDLERS
//when we go to a certain route, what happens?
app.get("/", (req, res)=> {
    res.send("server running")
})

app.get("/api/todos", (req, res)=> {
    let query = `SELECT *
                 FROM todo;`
})
conn.query(query)
    .then(data => res.status(200).json(data.rows))
    .catch(err => {
        console.log("Error reading data from resources: ".err)
        res.status(400).json({message: "the black magic has infiltrated this request"})
    })



//CRUD
//READ
app.get("/api/todos", (req, res)=> {
    res.send("API Todos Route")
})
//Create
app.post("/api/todos", (req, res)=>{
    let query = `INSERT INTO todo (note, is_completed)
    VALUES (${req.body.note}`, false)
    RETURNING *``;
})

//LISTENER
app.listen(port, console.log(`Todo App with Express on port ${port}`))
