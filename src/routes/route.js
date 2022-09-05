const express  = require("express")
const router =express.Router()
const authorController =require("../Controller/authorController")
const blogController =require("../Controller/blogController")


router.post("/authors",authorController.createAuthor)
router.post("/blogs" ,blogController.createBlog)

module.exports = router;