const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const noteModel = mongoose.model("notes", noteSchema); //notes ata collection
module.exports = noteModel;
//first make schema then model then export the model