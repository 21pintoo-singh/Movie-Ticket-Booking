const express = require('express')
const router = express.Router()
const {createTheater,listTheater} = require('../Controllers/theatersController')
const {createMovie, listMovies} = require('../Controllers/movieController')
const {createShow} = require('../Controllers/showsController')
const {bookTicket, rescheduleBooking} = require('../Controllers/ticketController')
router.post('/theater',createTheater)
router.get('/theater',listTheater)
router.post('/movie',createMovie)
router.get('/movie', listMovies)
router.post('/shows', createShow)
router.post('/bookTicket/:theaterstreet/:movieName', bookTicket)
router.put('/bookTicket/:Id',rescheduleBooking)
router.all('/*',function(req,res){
    return res.status(404).send({ status: false, message: "Page Not Found" });
})

module.exports = router;