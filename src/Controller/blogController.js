const BlogsModel = require("../models/blogsModel")
const AuthorModel = require("../models/authorModel")


const createBlog = async function (req, res) {
    try {
        let data = req.body
        if (Object.keys(data) == 0) {
            return res.status(400).send({ status: false, msg: "Please give the details in post request" })
        }

        let authorid = data.authorId
        let result = await AuthorModel.findById(authorid)
        if (!result)
        return res.status(404).send({status: false , msg: "no author found"})
     
           
       let savedData = await BlogsModel.create(data)
        return res.status(201).send({ status: true, msg: savedData })
    }
    catch (error) {
        console.log(error)
        return res.status(500).send({ msg: error.message })
    }
}

module.exports.createBlog = createBlog

