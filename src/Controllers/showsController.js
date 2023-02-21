const showsModel = require('../Models/showsModel');
const {isValidRequest} = require('../validator/validator');
const createShow = async function(req,res){
    try{
        if(!isValidRequest(req.body)){
            return res.status(400).send({status: false,message:"Enter Valid Input"})
        }
        const show = await showsModel.create(req.body)
        return res.status(201).send({status: true,data:show})
    }catch(err){
        return res.status(500).send({status: false,Error:err.message})
    }
}

module.exports = {createShow};