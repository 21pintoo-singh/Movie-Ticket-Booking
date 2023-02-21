const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  language: {
    type: String,
    required: true,
    trim: true
  },
  genre: {
    type: String,
    required: true,
    trim: true,
  },
  director: {
    type: String,
    required: true,
    trim: true,
  },
  cast: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  duration: {
    type: Number,
    required: true
  },
  releaseDate: {
    type: String,
    required: true
  }
},{timestamps:true});

module.exports = mongoose.model('Movie', movieSchema);



 