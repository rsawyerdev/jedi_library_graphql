import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

const getBookBack = gql `
    query GetBook($id: String){
        book(id: $id) {
            id
            title
            era {
                name
            }
            summary
            author {
                name
            }
        }
    }

`

const styles = {
    title: {
        fontSize: 10
    },
    content: {
        fontSize: 8
    }
}

class BookBack extends Component {
    displayBookDetails(){
        const { book } = this.props.data
        if(book){
            return(
                <div>
                    <h2 style={styles.title}>{ book.title }</h2>
                    <p style={styles.content}>{ book.summary }</p>
                    <p style={styles.content}>{ book.era.name }</p>
                    <p style={styles.content}>{ book.author.name }</p>
                    <Link to={`/booklist/${book.id}`}> See ALL </Link>                    
                </div>
            );
        } else {
            return( <div>No book selected...
                
            </div> );
        }
    }
    render(){
        console.log("BB", this.props)
        return(
            <div >
                { this.displayBookDetails() }
            </div>
        );
    }
}

export default graphql(getBookBack, {
    options: (props) => {
        return {
            variables: {
                id: props.id
            }
        }
    }
})(BookBack)