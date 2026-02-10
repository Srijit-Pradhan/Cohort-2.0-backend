//server create
const express = require("express");
const noteModel = require("./models/note.model");
const cors = require("cors");

const app = express();
app.use(cors())
app.use(express.json());

//create a note and save in database
app.post("/api/notes", async (req, res) => {
  const { title, description } = req.body;

  const note = await noteModel.create({
    title,
    description,
  });
  res.status(201).json({
    message: "note created successfully",
    note,
  });
});

// fetch all notes from database and send to frontend
app.get("/api/notes", async (req, res) => {
  const notes = await noteModel.find();

  res.status(200).json({
    message: "Notes fetched successfully",
    notes,
  });
});

//delete a note from database
app.delete("/api/notes/:id", async (req, res) => {
  const id = req.params.id;

  await noteModel.findByIdAndDelete(id);
  res.status(200).json({
    message: "note deleted successfully",
  });
});

//update a note in database
app.patch("/api/notes/:id", async (req, res) => {
  const id = req.params.id;
  const { description } = req.body;

  await noteModel.findByIdAndUpdate(id, { description });
  res.status(200).json({
    message: "note updated Successfully",
  });
});

module.exports = app;
