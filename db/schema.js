const mongoose = require("mongoose");

const Lecture = mongoose.model(
  "Lecture",
  new mongoose.Schema({
    title: String,
    id: String,
    notes: [{
        timestamp: String,
        content: String
    }],
  })
);

module.exports = {
  Lecture,
};