var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE todos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            data text, 
            completed boolean 
            )`,
        (err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
                var insert = 'INSERT INTO todos (data, completed) VALUES (?,?)'
                db.run(insert, ["task1",false])
                db.run(insert, ["user",false])
            }
        });  
    }
});


module.exports = db