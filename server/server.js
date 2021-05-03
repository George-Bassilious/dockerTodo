// Create express app
var express = require("express")
var app = express()
var cors = require('cors');
var db = require("./database.js")

app.use(cors()); // ? 

// Server port
var HTTP_PORT = 8000 

// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});

// Root endpoint // when connecting to localhost 
app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});

// Insert here other API endpoints

// get all todos 
app.get("/api/todos", (req, res, next) => {
    console.log("HEJ")
    var sql = "select * from todos"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });
});


app.put("/api/todos/:message", (req, res, next) => {
    

    var insert = 'INSERT INTO todos (data, completed) VALUES (?,?)'
    db.run(insert, [req.params.message,false])

    res.status(200).json({"success":"true"})
});


app.delete("/api/todos/:message", (req, res, next) => {
    

        var deleter = 'DELETE from todos WHERE data=?'

        db.run(deleter , req.params.message)

        res.status(200).json({"success":"true"})


});

// Default response for any other request
app.use(function(req, res){
    res.status(404);
});