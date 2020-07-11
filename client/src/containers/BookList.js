import React, { Component } from 'react';
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'


const getBooksQuery = gql `
    {
        books {
            title
            id
            imageId
        }
    }
`

const styles = {
  container: {
    width: '100%',
    height: 1000,
    backgroundColor: 'lightgrey'
  },
  list: {
    listStyleType: 'none'
  }
}



class BookList extends Component {

    displayBooks(){
        var data = this.props.data
        if(data.loading){
            return( <div>Loading Books...</div>)
        } else {
            return data.books.map(book => {
              var image = book.imageId + '.png'
              if(image){
                return(
                <li key ={book.id}>
                  <Link to={`/booklist/${book.id}`} >
                  <img src={image} />
                  </Link>
                </li>
                )

              }
              
            })
        }
    }

    render(){
  return (
    <div style={styles.container}>
      <ul style={styles.list}>
          {this.displayBooks()}
      </ul>
    </div>
  )
}
}

export default graphql(getBooksQuery)(BookList)
