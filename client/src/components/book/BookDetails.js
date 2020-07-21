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
            <h3>{ book.summary }</h3>
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