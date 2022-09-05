// const { validate } = require("../models/authorModel")
const AuthorModel =require("../models/authorModel")

const usevalid = function(value){
  const regix =   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  return regix.test(value)
}

const createAuthor =async function(req,res){
  try{
    let author = req.body
  
    if(usevalid(author.email)){      
      let authorCreated = await AuthorModel.create(author)
      res.status(201).send({msg:authorCreated})
    }else{
      res.status(400).send({msg : "email id is not valid"})
    }
   
  }catch(err){
    res.status(500).send({err: err.message})
    
  }
}

module.exports.createAuthor = createAuthor