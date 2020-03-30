const mongoose = require('mongoose')
const Schema = mongoose.Schema

const authorSchema = new Schema({
    name: String
})

module.exports = mongoose.model('Author', authorSchema)

//model refers to a collection in a database(mlab)