import React, { Component } from 'react'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'

const getBooksQuery = gql `
    {
        books {
            title
            id
            imageId
            summary
            bookStatus{
              id
              name
            }
        }
    }
`


const styles = {

    bookImage: {
        height: 250,
        width: 150,
        resizeMode: 'contain'
    },
    container: {
        display: 'flex',
        flexDirection: 'row'
    }
}

class BookCover extends Component {

    displayBookCover(){
        var data = this.props.data
        if(data.loading){
            return(
                <div>Loading Book Covers</div>
            )
        } else {
            return(
                data.books.map(book => {
                    if(book){
                        let image = book.imageId + '.png'
                        return(
                            <div key={book.id}>
                                <img src={image}  alt={book.title} style={styles.bookImage} />
                            </div>
                        )
                    }
                })
            )
        }
    }

    render() {
        
        return (
            <div >
                {this.displayBookCover()}
            </div>
        )
    }
}

export default graphql(getBooksQuery)(BookCover)