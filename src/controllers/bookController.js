const { count } = require("console")
const { ADDRGETNETWORKPARAMS } = require("dns")
const BookModel = require("../models/bookModel")


// to create a new entry
const createBook = async function (req, res) {
    let data = req.body
    let savedData = await BookModel.create(data)
    res.send({ msg: savedData })
}

//gives all the books- their bookName and authorName only 

const bookList = async function (req, res) {
    let allBooks = await BookModel.find().select({ bookName: 1, authorName: 1, _id: 0 })
    res.send({ msg: allBooks })
}


//takes year as input in post request and gives list of all books published that year

const getBooksInYear = async function (req, res) {
    let years = req.params.year
    let allBooks = await BookModel.find({ year :{ $eq: years }})
    res.send({ msg: allBooks })
}

//take any input and use it as a condition to fetch books that satisfy that condition

const getParticularBooks = async function (req, res) {
    let specificBook = await BookModel.find(req.body)
    res.send({ msg: specificBook })

}

//request to return all books who have an Indian price tag of “100INR” or “200INR” or “500INR” 

const getXINRBooks = async function (req, res) {
    let allBooks = await BookModel.find({ "prices.indianPrice": { $in: ["100INR", "200INR", "500INR"] } })
    res.send({ msg: allBooks })
}

// returns books that are available in stock or have more than 500 pages 
const getRandomBooks = async function (req, res) {
    let allBooks = await BookModel.find({ $or: [{ stockavailable: true }, { totalpages: { $gt: 500 } }] })
    res.send({ msg: allBooks })
}

module.exports.createBook = createBook
module.exports.bookList = bookList
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks
