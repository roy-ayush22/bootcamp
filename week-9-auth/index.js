const express = require("express");
const jwt = require("jsonwebtoken");
const { TokenClass } = require("typescript");

const app = express();
app.use(express.json());

const notes = [];
const users = [];

app.post("/signup", (req, res) => {
  const { username, password } = req.body;
  users.push({
    username,
    password,
  });
  res.json("signed up!");
});

app.post("/signin", (req, res) => {
  const { username, password } = req.body;
  const existingUser = users.find(
    (user) => user.username === username && user.password === password,
  );

  if (!user) {
    res.status(403).json({
      message: "incorrect creds",
    });
    return;
  }
  
  const token = res.json({
    token: token
  })
  
});

// POST - Create a note
app.post("/notes", function (req, res) {
  const note = req.body.note;
  notes.push(note);

  res.json({
    message: "Done!",
  });
});

// GET - get all my notes
app.get("/notes", function (req, res) {
  res.json({
    notes,
  });
});

app.get("/", function (req, res) {
  res.sendFile("/home/ayush/Desktop/bootcamp/week-9-auth/public/index.html");
});

app.listen(3000);
