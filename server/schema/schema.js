const graphql = require('graphql')
const _ = require('lodash')
const Book = require('../models/book')
const Author = require('../models/author')
const Era = require('../models/era')
const BookStatus = require('../models/bookStatus')
const EpochTime = require('../models/epochTime')
const Series = require('../models/series')

const { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLInt,
    GraphQLSchema, 
    GraphQLList,
    GraphQLNonNull, 
} = graphql

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        releaseDate: { type: GraphQLString },
        imageId: { type: GraphQLString },
        summary: { type: GraphQLString },
        pages: { type: GraphQLInt },
        isbn: { type: GraphQLString },
        timeLine: { type: GraphQLList(GraphQLInt) },
        era: { 
            type: EraType,
            resolve(parent, args){
                return Era.findById(parent.eraId)
            }
        } ,
        author: {
            type: AuthorType,
            resolve(parent, args){
                return Author.findById(parent.authorId)
            }
        },
        bookStatus: { 
            type:  BookStatusType,
            resolve(parent, args){
                return BookStatus.findById(parent.bookStatusId)
            }
        },
        epochTime: {
            type: EpochTimeType,
            resolve(parent, args){
                return EpochTime.findById(parent.epochTimeId)
            }
        },
        series: {
            type: SeriesType,
            resolve(parent, args){
                return Series.findById(parent.seriesId)
            }
        }
    })
})

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        book: {
            type: new GraphQLList(BookType),
            resolve(parent, args){
                return Book.find({ authorId: parent.id})
            }
        }
    })
})

const EraType = new GraphQLObjectType({
    name: 'Era',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        book: {
            type: new GraphQLList(BookType),
            resolve(parent, args){
                return Book.find({ eraId: parent.id })
            }
        }
    })
})

const BookStatusType = new GraphQLObjectType({
    name: 'BookStatus',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        book: {
            type: new GraphQLList(BookType),
            resolve(parent, args){
                return Book.find({ bookStatusId: parent.id })
            }
        }
    })
})

const EpochTimeType = new GraphQLObjectType({
    name: 'EpochTime',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        book: {
            type: new GraphQLList(BookType),
            resolve(parent, args){
                return Book.find({ epochTimeId: parent.id })
            }
        }
    })
})

const SeriesType = new GraphQLObjectType({
    name: 'Series',
    fields: () => ({
        id: { type: GraphQLString }, 
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        book: {
            type: new GraphQLList(BookType),
            resolve(parent, args){
                return Book.find({ seriesId: parent.id })
            }
        }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args){
                return Book.findById(args.id)
            }
        },
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args){
               return Author.findById(args.id)
            }
        },
        era: {
            type: EraType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args){
                return Era.findById(args.id)
            }
        },
        bookStatus: {
            type: BookStatusType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args){
                return BookStatus.findById(args.id)
            }
        },
        epochTime: {
            type: EpochTimeType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args){
                return EpochTime.findById(args.id)
            }
        },
        serie: {
            type: SeriesType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args){
                return Series.findById(args.id)
            }
        },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args){
                return Book.find({})
            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parent, args){
                return Author.find({})
            }
        },
        eras: {
            type: new GraphQLList(EraType),
            resolve(parent, args){
                return Era.find({})
            }
        },
        bookStatuses: {
            type: new GraphQLList(BookStatusType),
            resolve(parent, args){
                return BookStatus.find({})
            }
        },
        epochTimes: {
            type: new GraphQLList(EpochTimeType),
            resolve(parent, args){
                return EpochTime.find({})
            }
        },
        series: {
            type: new GraphQLList(SeriesType),
            resolve(parent, args){
                return Series.find({})
            }
        }
    }
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addAuthor: {
            type: AuthorType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args){
                let author = new Author({
                    name: args.name
                })
                return author.save()
            }
        },
        addBook: {
            type: BookType,
            args: {
                title: { type: new GraphQLNonNull(GraphQLString) },
                eraId: { type: new GraphQLNonNull(GraphQLString) },
                authorId: { type: new GraphQLNonNull(GraphQLString) },
                bookStatusId: { type: new GraphQLNonNull(GraphQLString) },
                epochTimeId: { type: new GraphQLNonNull(GraphQLString) },
                seriesId: { type: GraphQLString },
                releaseDate: { type: new GraphQLNonNull(GraphQLString) },
                imageId: { type: new GraphQLNonNull(GraphQLString) },
                summary: { type: new GraphQLNonNull(GraphQLString) },
                pages: { type: new GraphQLNonNull(GraphQLInt) },
                isbn: { type: new GraphQLNonNull(GraphQLString) },
                timeLine: { type: new GraphQLNonNull(GraphQLInt) }
            },
            resolve(parent, args){
                let book = new Book({
                    title: args.title,
                    eraId: args.eraId,
                    authorId: args.authorId,
                    bookStatusId: args.bookStatusId,
                    epochTimeId: args.epochTimeId,
                    seriesId: args.seriesId,
                    releaseDate: args.releaseDate,
                    imageId: args.imageId,
                    summary: args.summary,
                    pages: args.pages,
                    isbn: args.isbn,
                    timeLine: args.timeLine
                })
                return book.save()
            }
        },
        addEra: {
            type: EraType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args){
                let era = new Era({
                    name: args.name
                })
                return era.save()
            }
        },
        addBookStatus: {
            type: BookStatusType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args){
                let bookStatus = new BookStatus({
                    name: args.name
                })
                return bookStatus.save()
            }
        },
        addSeries: {
            type: SeriesType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                description: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args){
                let series = new Series({
                    name: args.name,
                    description: args.description
                })
                return series.save()
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})