const isValidRequest = function(data){
    if(Object.keys(data).length == 0){
      return false
    }
    return true
  }
  

const isValidString = function (value) {
    if (!value) return false;
    if (typeof value === "undefined" || value === null) return false;
    if (value.length === 0) return false;
    if (typeof value === "string" && value.trim().length === 0) return false;
    else if (typeof value === "string") return true;
  };
  
  const isValidName = function(name){
    return /^[a-z A-Z,-.]+$/.test(name)
} 

const isValidId = function(id){
    if(!mongoose.Types.ObjectId.isValid(id)){
     return false
    }return true
 }

 module.exports = {  isValidRequest,
    isValidString,
    isValidName,
    isValidId
 }