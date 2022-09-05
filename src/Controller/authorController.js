// const { validate } = require("../models/authorModel")
const AuthorModel =require("../models/authorModel")

const usevalid = function(value){
  const regix =   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  return regix.test(value)
}

const regixValidator = function(value){
  let regix = /^[a-zA-Z]+([\s][a-zA-Z]+)*$/
  return regix.test(value)
}

const isValid = function(value){
  if(typeof value === "undefined" || value === null) 
  return false;
if(typeof value === "string" && value.trim().length === 0)
return false;
return true;
}

const bodyValidator = function(data){
  return Object.keys(data).length > 0
}

const createAuthor =async function(req,res){
  try{
    let data = req.body
  
    if(!isValid(data.fname) || !regixValidator(data.fname) )return res.status(400).send({status : false ,msg : "fname is invalid contains only character" })
    if(usevalid(data.email)){      
      let authorCreated = await AuthorModel.create(data)
      res.status(201).send({msg:authorCreated})
    }else{
      res.status(400).send({msg : "email id is not valid"})
    }
   
  }catch(err){
    res.status(500).send({err: err.message})
    
  }
}

module.exports.createAuthor = createAuthor