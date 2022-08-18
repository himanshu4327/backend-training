const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: { type : String, 
                required : true},
    authorName: String, 
    tags: [String],
    isPublished: Boolean,
    year: {
        type: Number,
        default: 2021,
    },
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    totalpages: Number,
    stockavailable: Boolean
   
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //books


