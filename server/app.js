const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
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

app.post('/api/test', (req, res) => {

  const ID = req.body.ID
  const user_id = req.body.user_id
  const user_passwd = req.body.user_passwd

  pool.getConnection(function(err, connection) {
    if (err) throw err; // not connected!
    // Use the connection
    connection.query('INSERT INTO users (id, user_id, user_passwd) VALUES (?,?,?) ', [ID, user_id, user_passwd], function (error, results, fields) {
      // When done with the connection, release it.
      // Handle error after the release.
      res.send(results);
      if (error) throw error;
      // Don't use the connection here, it has been returned to the pool.
    });
  });
});

app.get('/api/get', (req, res) => {

  pool.query('SELECT * FROM users', (err, results) => {
    res.send(results);
  });

});

app.post('/api/login', (req, res) => {

});

app.post('/api/logout', (req, res) => {

});
