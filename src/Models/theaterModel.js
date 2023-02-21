const mongoose = require('mongoose')

const theaterSchema = new mongoose.Schema({
    name:{
            type:String,
            required: true,
            trim: true
    },
    location:{
                city: {
                    type:String,
                    required: true},
                street: {
                    type:String,
                    required: true}
    },
    price:{
        type:Number,
        required:true
    }

},{timestamps:true})

module.exports = mongoose.model('theater',theaterSchema)


