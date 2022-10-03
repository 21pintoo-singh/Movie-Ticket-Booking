const theaterModel = require('../Models/theaterModel')
const { isValidRequest, isValidString, isValidName } = require('../validator/validator')

const createTheater = async function (req,res){
    try{
        if(!isValidRequest(req.body)){
            return res.status(400).send({status: false,message:"Enter Valid Input"})
        }
        const {name, location, price} = req.body
        const {street, city} = location
        if(!name){
            return res.status(400).send({status: false,message:"Name is required"})
        }
        if(!isValidString(name)){
            return res.status(400).send({status: false,message:"Enter Valid name"})
        }
        if(!isValidName(name)){
            return res.status(400).send({status: false,message:"Name can only include alphabets"})
        }
        if(!location){
            return res.status(400).send({status: false,message:"location is required"})
        }
        if(typeof location !== "object"){
            return res.status(400).send({status: false,message:"location should include city and street details"})
        }
        if(!city){
            return res.status(400).send({status: false,message:"city is required"})
        }
        if(!isValidString(city)){
            return res.status(400).send({status: false,message:"Enter valid city"})
        }
        if(!street){
            return res.status(400).send({status: false,message:"street is required"})
        }
        if(!isValidString(street)){
            return res.status(400).send({status: false,message:"Enter valid street"})
        }
        if(!Number.isInteger(price)){
            return res.status(400).send({status: false,message:"Enter valid price"})
        }
        const isTheater = await theaterModel.create(req.body)
        return res.status(201).send({status: true, data:isTheater})
    }catch(err){
        return res.status(500).send({status: false,Error:err.message})
    }
}


const listTheater = async function(req,res){
    try{
        if(!isValidRequest(req.query)){
            return res.status(400).send({status: false,message:"Enter Valid Input"})
        }
        const {location} = req.query
        const isTheater = await theaterModel.find({'location.city':location})
        if(!isTheater){
            return res.status(404).send({status: false,message:"No theater found in this area"})
        }
        return res.status(200).send({status: true,data:isTheater})
    }catch(err){
        return res.status(500).send({status: false,Error:err.message})
    }
}
module.exports = {createTheater, listTheater}