const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
    title: String,
    eraId: String,
    authorId: String
})

module.exports = mongoose.model('Book', bookSchema)

//model refers to a collection in a database(mlab)