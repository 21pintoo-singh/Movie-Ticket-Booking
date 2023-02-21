const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const ticketSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  startAt: {
    type: String,
    required: true,
    trim: true,
  },
  seats: {
    type: [mongoose.Schema.Types.Mixed],
    required: true,
  },
  ticketPrice: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
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

module.exports = mongoose.model('ticketBooking', ticketSchema);


 