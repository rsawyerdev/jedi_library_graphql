import React, { Component } from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Main from './containers/Main'

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

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      
    }
  }



  render(){

  return (
    <ApolloProvider client={client}>
      <div style={styles.container}>
        <h1>Jedi Reading List</h1>
        <Main />
      </div>
    </ApolloProvider>
  );
}}

export default App;
