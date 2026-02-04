const express = require("express");
const noteModel = require("./models/notes.model");

const app = express();
app.use(express.json());

app.post("/notes", async (req, res) => {
  const { title, description } = req.body;

  const Note = await noteModel.create({ title, description });
  res.status(201).json({ message: "Note created successfully", note: Note });
});

module.exports = app;
