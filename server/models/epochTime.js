const mongoose = require('mongoose')
const Schema = mongoose.Schema

const epochTimeSchema = new Schema({
    name: String,
    description: String
})

module.exports = mongoose.model('EpochTime', epochTimeSchema)

//model refers to a collection in a database(mlab)