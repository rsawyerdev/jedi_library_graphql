import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

const getBookDetails = gql `
    query GetBook($id: String){
        book(id: $id) {
            id
            title
            era {
                name
            }
            summary
        }
    }

`

class BookDetails extends Component {
    displayBookDetails(){
        const { book } = this.props.data
        if(book){
            return(
                <div>
                    <h2>{ book.title }</h2>
                    <p>{ book.summary }</p>
                    <p>{ book.era.name }</p>                    
                </div>
            );
        } else {
            return( <div>No book selected...</div> );
        }
    }
    render(){
        return(
            <div >
                { this.displayBookDetails() }
            </div>
        );
    }
}

export default graphql(getBookDetails, {
    options: (props) => {
        return {
            variables: {
                id: props.match.params.bookId
            }
        }
    }
})(BookDetails)