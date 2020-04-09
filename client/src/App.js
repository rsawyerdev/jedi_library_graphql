import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import BookList from './components/BookList'

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})


const styles = {
  container: {
    width: '100%',
    height: 1000,
    backgroundColor: 'lightgrey'
  }
}

function App() {
  return (
    <ApolloProvider client={client}>
      <div style={styles.container}>
        <h1>Jedi Reading List</h1>
        <BookList />
      </div>
    </ApolloProvider>
  );
}

export default App;
