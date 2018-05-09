const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Star Wars Characters (DATA)
// =============================================================
let tables = [
  {
    name: "Joe",
    phone: "555-555-5555",
    email: "yo@gmail.com",
    unique_id: "hey"
  },
  {
    name: "Jake",
    phone: "555-555-5555",
    email: "yo@gmail.com",
    unique_id: "yo"
  },
  {
    name: "Josh",
    phone: "555-555-5555",
    email: "yo@gmail.com",
    unique_id: "fun"
  }
];

let waitList = [];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reservations", function(req, res) {
    res.sendFile(path.join(__dirname, "reservations.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/tables", function(req, res) {
    return res.json(tables);
});

app.get("/api/waitlist", function(req, res) {
    return res.json(waitList);
});


app.post("/api/new", function(req, res) {
    var newReservations = req.body;
    console.log(newReservations);
    tables.push(newReservations);
    res.json(newReservations);
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});