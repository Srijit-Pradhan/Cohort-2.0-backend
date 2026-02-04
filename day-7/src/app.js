const express = require("express");
const noteModel = require("./models/notes.model");

const app = express();
app.use(express.json());

app.post("/notes", async (req, res) => {
  const { title, description } = req.body;

  const Note = await noteModel.create({ title, description });
  res.status(201).json({ message: "Note created successfully", note: Note });
});

app.get("/notes", async (req, res) => {
  const notes = await noteModel.find();
  res.status(200).json({ message: "Notes retrieved successfully", notes });
});

module.exports = app;
