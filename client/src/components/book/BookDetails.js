import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'


class BookDetails extends Component {
    displayBookDetails(){
        const { book } = this.props
        if(book){
            return(
                <div>
                    <h2>{ book.title }</h2>
                    <p>All books by this author:</p>
                </div>
            );
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

export default BookDetails