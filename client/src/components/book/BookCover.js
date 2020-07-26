import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

const getBookCover = gql `
    query GetBook($id: String){
        book(id: $id) {
            id
            imageId
            title
        }
    }

`

const styles = {
    bookCover: {
        height: 250,
        width: 150,
    }
}

class BookCover extends Component {
    displayBookDetails(){
        const { book } = this.props.data
        if(book){
            const image = book.imageId + '.png'
            return(
                <div>
                    <img src={image} alt={book.title} style={styles.bookCover}/>     
                </div>
            );
        } else {
            return( <div>No book selected...</div> );
        }
    }
    render(){
        console.log("BC", this.props)
        return(
            <div >
                { this.displayBookDetails() }
            </div>
        );
    }
}

export default graphql(getBookCover, {
    options: (props) => {
        return {
            variables: {
                id: props.id
            }
        }
    }
})(BookCover)