import React, { Component } from 'react';
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'


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
  }
}



class Discussions extends Component {

    render(){
  return (
    <div style={styles.container}>
      Discussions
      
    </div>
  );
}
}

export default graphql(getBooksQuery)(Discussions);
