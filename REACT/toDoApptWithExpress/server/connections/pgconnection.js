require("dotenv").config()

//1. Connection
const {PG_Host, PG_PORT, PG_DB, PG_USER, PG_PW} = process.env
const credentials = {
    host:localhost,
    port:5435,
    database:postgres,
    user:todo_dev,
    password:todo_dev12
}
const {Client } = require("pg")
const conn = new Client(credentials)

conn.connect()
    .then(console.log(`Connect to the ${PG_DB} database`))
    .catch(err => console.log(`Error connecting to the database: `, err))

module.exports = conn; //This is exporting everything back over to index.js