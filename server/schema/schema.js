const graphql = require('graphql')
const _ = require('lodash')

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql

const books = [
    { title: 'Jedi Novel', era: 'Old Republic', id: "1" },
    { title: 'Siths Among Us', era: 'New Republic', id: "2" },
    { title: 'Ahsoka and Friends', era: 'Old Republic', id: "3" } 
]

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        era: { type: GraphQLString } 
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args){
               return _.find(books, {id: args.id})
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})