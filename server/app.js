const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());


app.listen(3001, () =>{
    console.log("started");
});

app.get('/', (req, res) => {
    res.send("glgdddl");
});

const mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit : 10,
    host     : 'localhost',
    user     : 'root',
    password : 'bk101418^^',
    database : 'test01'
  });

app.get('/test', (req, res) => {
  pool.getConnection(function(err, connection) {
    if (err) throw err; // not connected!
    // Use the connection
    connection.query('SELECT * FROM users', function (error, results, fields) {
      // When done with the connection, release it.
      res.send(results);
      connection.release();
      // Handle error after the release.
      if (error) throw error;
      // Don't use the connection here, it has been returned to the pool.
    });
  });
});

app.post('/api/login', (req, res) => {

});

app.post('/api/logout', (req, res) => {

});
