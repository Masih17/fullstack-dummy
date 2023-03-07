require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;
//console.log("string is: " + mongoString);

mongoose.connect(mongoString, { useNewUrlParser: true });
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
const app = express();

app.use(express.json());

// "/" path
app.get("/", (req, res) => {
  db.collection("users")
    .find({})
    .toArray((err, rows) => {
      data = rows;
      res.send(data);
    });
});

// "/add" path
app.get("/add", (req, res) => {
  const { name, familyName } = req.query;
  data.push({ name, familyName });

  // Insert into the database
  const request = new sql.Request();
  request.query(
    `INSERT INTO users (name, familyName) VALUES ('${name}', '${familyName}')`,
    (err, result) => {
      if (err) console.log(err);
      res.send(data);
    }
  );
});

app.listen(3000, () => console.log("Server is Listening to port 3000"));
