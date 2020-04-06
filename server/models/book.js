const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
    title: String,
    eraId: String,
    authorId: String,
    bookStatusId: String,
    epochTimeId: String,
    seriesId: String,
    releaseDate: String,
    imageId: String,
    summary: String,
    pages: Number,
    isbn: String,
    timeLine: Array
})

module.exports = mongoose.model('Book', bookSchema)

//model refers to a collection in a database(mlab)