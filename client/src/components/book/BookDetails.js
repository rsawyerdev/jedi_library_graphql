import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

const getBookDetails = gql `
    query GetBook($id: String){
        book(id: $id) {
            id
            title
            author {
                name
                age
            }
            era {
                name
            }
            summary

            epochTime {
                name
            }
            releaseDate
            imageId
            pages
            isbn
            timeLine
        }
    }

`

const styles ={
    coverDetails: {
        height: 200,
        width: 125
    }
    
}



class BookDetails extends Component {

    
    displayBookDetails(){
        const { book } = this.props.data
        if(book){
            const image = '/' + book.imageId + '.png'
            console.log(image)
            return(
                <div>
                    <h2>{ book.title }</h2>
                    <p>By: { book.author.name }</p>
                    <p>ISBN: { book.isbn }</p>
                    <p>Pages: {book.pages }</p>
                    <p>Release Date: { book.releaseDate }</p>
                    <p>Era: { book.era.name }</p> 
                    <p>Timeline: { book.timeLine}</p>
                    <p>Epoch Time: { book.epochTime.name }</p>
                    <p>Summary: { book.summary }</p>
                    <img src={image} style={styles.coverDetails} alt={book.title}/>

                </div>
            );
        } else {
            return( <div>No book selected...</div> )
        }
    }
    render(){
        console.log("BD", this.props)
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

                   
