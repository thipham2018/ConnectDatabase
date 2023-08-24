
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({

  host: "localhost",
  user: "trang",
  port: "3306",
  password: "12345",
  Database: "login",

});


db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Server!');
});

app.post("/register", (req, res) => {

  const username = req.body.username;
  const password = req.body.password;


  // const querySelectDatabase = 'login';
  // db.query(querySelectDatabase, (error) => {
  //   if (error) {
  //     console.error('Error selecting database:', error);
  //   } else {
  //   }
  // })

  db.query("INSERT INTO login.users(username, password) VALUES(?,?)",
    [username, password],
    (err, result) => {
      console.log(err);
    }
  );
});


app.listen(3001, () => {
  console.log("running server");
});
