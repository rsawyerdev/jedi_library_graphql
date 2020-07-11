const express = require('express')
const graphqlHTTP = require('express-graphql')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()

const schema = require('./schema/schema')

const app = express()

//allow cross origin requests
app.use(cors())

mongoose.connect('mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASSWORD  + '@ds331558.mlab.com:31558/jedi_library')
mongoose.connection.once('open', () => {
    console.log('connected to database')
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log('now listening for requests on port 4000')
})