const graphql = require('graphql')
const _ = require('lodash')

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID } = graphql

const books = [
    { title: 'Jedi Novel', era: 'Old Republic', id: "1", authorId: '2' },
    { title: 'Siths Among Us', era: 'New Republic', id: "2", authorId: '1' },
    { title: 'Ahsoka and Friends', era: 'Old Republic', id: "3", authorId: '3' } 
]

const authors = [
    { name: 'Rose Sawyer', id: '1' },
    { name: 'Gabe Sawyer', id: '2' },
    { name: 'Anthony Sawyer', id: '3' }
]

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        era: { type: GraphQLString } ,
        author: {
            type: AuthorType,
            resolve(parent, args){
                return _.find(authors, { id: parent.authorId })
            }
        }
    })
})

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
               return _.find(books, {id: args.id})
            }
        },
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
               return _.find(authors, {id: args.id})
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})