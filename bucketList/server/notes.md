- Consuming an API -
1. THEY decide the endpoint
2. THEY decide HOW data is sent - JSON or XML
3. THEY decide HOW much data is sent - everything or one thing
2. THEY decide what that data looks like

 - Rules for Building an API -
1. THEY decide the endpoint
2. THEY decide HOW data is sent - JSON or XML
3. THEY decide HOW much data is sent - everything or one thing
2. THEY decide what that data looks like


Yoour boss says:

RESTRICTIONS
Routes must be
/api/items
/api/items<unique identifer>

DATA {
    id: Number,
    description: String
    is_complete: Boolean
}

MUST BE CRUD functional

READ
1. Route - /api/items, GET method
2. JSON
3. Everythig Back
4. Array of Objects


CREATE
1. Route - /api/items, POST method
1.5 Get data from the client
1.75 Database sends something back
2. JSON -> Client
3. Send back one thing 
4. One object - DATA, receipt from database

DELETE 
1. Route -/api/items<unique>, DELETE method
2. JSON
3. Send back one thing - what was deleted
4. One object

UPDATE
1. Route - /api/items/<unique>, PUT method
2. JSON
3. Send back one thing - updated is_complete
4. send back an object or just the is_complete