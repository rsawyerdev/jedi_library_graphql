import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

const getBookQuery = gql`
    query GetBook($id: ID){
        book(id: $id) {
            id
            title
            era{
                id
                name
            }
            author {
                id
                name
            }
        }
    }
`

class BookDetails extends Component {
    displayBookDetails(){
        console.log(this.props.data)
        const { book } = this.props.data
        if(book){
            return(
                <div>
                    <h2>{ book.title }</h2>
                    <p>{ book.era.name }</p>
                    <p>{ book.author.name }</p>
                    <p>All books by this author:</p>
                </div>
            );
        } else {
            return( <div>No book selected...</div> );
        }
    }
    render(){
        return(
            <div>
                { this.displayBookDetails() }
            </div>
        );
    }
}

export default graphql(getBookQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.match.params.id
            }
        }
    }
})(BookDetails);