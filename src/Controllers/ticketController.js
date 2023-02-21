const ticketModel = require('../Models/ticketModel');
const moviesModel = require('../Models/moviesModel');
const theaterModel = require('../Models/theaterModel');
const {isValidRequest} = require('../validator/validator');
const bookTicket = async function(req, res){
    try{
        if(!isValidRequest(req.body)){
            return res.status(400).send({status: false,message:"Enter Valid Input"})
        }
        let data = req.body
        const movie = await moviesModel.findOne({title:req.params.movieName})
        data.movieId = movie._id
        const theater = await theaterModel.findOne({'location.street':req.params.theaterstreet})
        data.theaterId = theater._id
        data.ticketPrice = theater.price*data.total
        const ticket = await ticketModel.create(data)
        return res.status(201).send({status: true, message:"Ticket Booked", data:ticket})
    }catch(err){
        return res.status(500).send({status: false,Error:err.message})
    }
}

const rescheduleBooking = async function(req,res){
    try{
        if(!isValidRequest(req.body)){
            return res.status(400).send({status: false,message:"Enter Valid Input"})
        }
        let ticketId = req.params.Id
        const{date, startAt} = req.body
        const ticket = await ticketModel.findOneAndUpdate({_id:ticketId},{$set:{date:date,startAt:startAt}},{new:true})
        if(!ticket){
            return res.status(404).send({status: false,message:"No booking found"})
        }
        return res.status(200).send({status: true, data: ticket})
    }catch(err){
        return res.status(500).send({status: false,Error:err.message})
    }
}

module.exports = {bookTicket, rescheduleBooking}