const express  = require("express")
const router =express.Router()
const authorController =require("../Controller/authorController")
const blogController =require("../Controller/blogController")


router.post("/authors",authorController.createAuthor)
router.post("/blogs" ,blogController.createBlog)
router.get("/getBlogs" ,blogController.getBlogs)
router.put("/updateBlog/:blogId" ,blogController.updateBlog)
router.delete("/deleteBlogs/:blogId" ,blogController.deleteBlog)
router.delete('/deleteBlogs',blogController.deleteFilteredBlog)
module.exports = router;