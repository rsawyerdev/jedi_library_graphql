const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookStatusSchema = new Schema({
    name: String
})

module.exports = mongoose.model('BookStatus', bookStatusSchema)

//model refers to a collection in a database(mlab)