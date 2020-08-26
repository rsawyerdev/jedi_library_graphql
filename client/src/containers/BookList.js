import React, { Component } from 'react'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'

import Dropdown from '../components/global/Dropdown'
import BookTile from './BookTile'

const getBooksQuery = gql`
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
  container: {
    width: '100%',
    height: 1000,
    backgroundColor: 'lightgrey',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  bookRow: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 20
  },
  book: {
    height: 300,
    width: 200,
  }
}



class BookList extends Component {

  displayBooks() {
    var data = this.props.data
    if (data.loading) {
      return (<div>Loading Books...</div>)
    } else {
      return data.books.map(book => {
        if (book) {
          return (
            <div key={book.id} style={styles.book}>
              <BookTile id={book.id} />
            </div>
          )
        }
      })
    }
  }

  render() {
    let options = [
      { value: 'reading', text: 'Reading' },
      { value: 'read', text: 'Read' }
    ]
    return (
      <div style={styles.container}>
        <Dropdown
          onClick={() => console.log('dropdown')}
          options={options}
          defaultOption="All Books"
          select={options} />
        <div style={styles.bookRow}>
          {this.displayBooks()}
        </div>
      </div>
    )
  }
}

export default graphql(getBooksQuery)(BookList)
