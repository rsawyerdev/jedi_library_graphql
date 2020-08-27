const mongoose = require('mongoose')
const Schema = mongoose.Schema

const seriesSchema = new Schema({
    name: String,
    description: String
})

module.exports = mongoose.model('Series', seriesSchema)

//model refers to a collection in a database(mlab)