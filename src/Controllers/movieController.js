const moviesModel = require("../Models/moviesModel");
const { isValidRequest, isValidName, isValidString } = require("../validator/validator");

const createMovie = async function (req, res) {
  try {
    if (!isValidRequest(req.body)) {
      return res
        .status(400)
        .send({ status: false, message: "Enter Valid Input" });
    }
    const {
      title,
      language,
      genre,
      director,
      cast,
      description,
      duration,
      releaseDate,
    } = req.body;

    if(!title){
        return res.status(400).send({status: false,message:"title is required"})
    }
    if(!isValidString(title) || !isValidName(title)){
        return res.status(400).send({status: false,message:"Enter valid title"})
    }
    if(!language){
        return res.status(400).send({status: false,message:"language is required"})
    }
    if(!isValidString(language) || !isValidName(language)){
        return res.status(400).send({status: false,message:"Enter valid language"})
    }
    if(!genre){
        return res.status(400).send({status: false,message:"genre is required"})
    }
    if(!isValidString(genre) || !isValidName(genre)){
        return res.status(400).send({status: false,message:"Enter valid genre"});
    }
    if(!director){
        return res.status(400).send({status: false,message:"director is required"});
    }
    if(!isValidString(director) || !isValidName(director)){
        return res.status(400).send({status: false,message:"Enter valid director name"})
    }
    if(!cast){
        return res.status(400).send({status: false,message:"cast is required"})
    }
    if(!isValidString(cast) || !isValidName(cast)){
        return res.status(400).send({status: false,message:"Enter valid cast"})
    }
    if(!description){
        return res.status(400).send({status: false,message:"description is required"})
    }
    if(!isValidString(description) || !isValidName(description)){
        return res.status(400).send({status: false,message:"Enter valid description"})
    }
    if(!duration){
        return res.status(400).send({status: false,message:"duration is required"})
    }
    if(!Number.isInteger(duration)){
        return res.status(400).send({status: false,message:"Enter movie duration in minutes"})
    }
    if(!releaseDate){
        return res.status(400).send({status: false,message:"releaseDate is required"})
    }
    let format = /^(((0[1-9]|[12][0-9]|30)[-/]?(0[13-9]|1[012])|31[-/]?(0[13578]|1[02])|(0[1-9]|1[0-9]|2[0-8])[-/]?02)[-/]?[0-9]{4}|29[-/]?02[-/]?([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00))$/
    if(!format.test(releaseDate)){
        return res.status(400).send({status: false,message:"Date should be in format DD-MM-YY"})
    }
    const movie = await moviesModel.create(req.body)
    return res.status(201).send({status: true, data: movie})
  } catch (err) {
    return res.status(500).send({ status: false, Error: err.message });
  }
};


const listMovies = async function(req, res){
    try{
        if(!isValidRequest(req.query)){
            return res.status(400).send({status: false,message:"Enter Valid Input"})
        }
        const {name} = req.query
        const isMovie  = await moviesModel.find({title: {$regex:name}})
        if(!isMovie){
            return res.status(404).send({status: false,message:"No movie found"})
        }
        return res.status(200).send({status: true,data:isMovie})
     }catch (err) {
    return res.status(500).send({ status: false, Error: err.message });
  }
}
module.exports = {createMovie, listMovies}
