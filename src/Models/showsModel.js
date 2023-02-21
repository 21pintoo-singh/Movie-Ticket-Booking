const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const showSchema = new mongoose.Schema({
  startAt: {
    type: String,
    required: true,
    trim: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  movieId: {
    type: ObjectId,
    ref: 'Movie',
    required: true,
  },
  theaterId: {
    type: ObjectId,
    ref: 'theater',
    required: true,
  },
},{timestamps:true});

module.exports = mongoose.model('Show', showSchema);


