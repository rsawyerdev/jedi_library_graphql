import React, { Component } from 'react';
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'


const getBooksQuery = gql `
    {
        books {
            title
            id
        }
    }
`

const styles = {
  container: {
    width: '100%',
    height: 1000,
    backgroundColor: 'lightgrey'
  }
}

class BookList extends Component {

    displayBooks(){
        var data = this.props.data
        if(data.loading){
            return( <div>Loading Books...</div>)
        } else {
            return data.books.map(book => {
                return(
                <li key ={book.id}>{ book.title }</li>
                )
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
  );
}
}

export default graphql(getBooksQuery)(BookList);
