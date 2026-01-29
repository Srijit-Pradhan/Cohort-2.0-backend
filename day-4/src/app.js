// server create karna
// server ko config karna

const express = require("express");

const app = express(); // sever create ho jata hai

app.use(express.json()); // middleware jo json body ko parse kar dega

const notes = [];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/notes", (req, res) => {
  //   console.log(req.body);
  notes.push(req.body);

  //   console.log(notes);

  res.send("note received");
});

app.get("/notes", (req, res) => {
  res.send(notes);
});

app.delete("/notes/:index", (req, res) => {
  delete notes[req.params.index];
  res.send("note deleted");
});

app.patch("/notes/:index", (req, res) => {
  notes[req.params.index].content = req.body.content;
  res.send("note updated");
});

module.exports = app;
