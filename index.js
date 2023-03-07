const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from app.get");
});

// Create a route for the "/create" path
app.post("/create", (req, res) => {
  // Create a new item
  const item = req.body;
  // Return the created item
  res.json(item);
});

// Create a route for the "/read" path
app.get("/read", (req, res) => {
  // Read all items from the database
  const items = // ...
    // Return the read items
    res.json(items);
});

// Create a route for the "/update" path
app.put("/update", (req, res) => {
  // Update an item
  const item = req.body;
  // Return the updated item
  res.json(item);
});

// Create a route for the "/delete" path
app.delete("/delete", (req, res) => {
  // Delete an item
  const item = req.body;
  // Return the deleted item
  res.json(item);
});

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://masih:S4mijaT7ry7@cluster0.geioxa5.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

app.listen(3000, () => console.log("Server is Listening to port 3000"));
