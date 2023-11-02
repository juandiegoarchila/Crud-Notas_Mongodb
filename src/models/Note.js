const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false // El título es requerido
  },
  description: {
    type: String,
    required: false // La descripción es opcional
  },
  user: {
    type: String,
    required: true 
  }
}, {
  timestamps: true 
});

module.exports = mongoose.model("Note", noteSchema);
