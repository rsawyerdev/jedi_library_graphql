const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eraSchema = new Schema({
    name: String
})

module.exports = mongoose.model('Era', eraSchema)

//model refers to a collection in a database(mlab)