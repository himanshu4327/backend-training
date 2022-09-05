const express  = require("express")
const router =express.Router()
const authorController =require("../Controller/authorController")

router.post("/authors",authorController.createAuthor)

module.exports = router;