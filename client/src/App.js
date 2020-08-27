import React, { Component } from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter, Route } from 'react-router-dom'

import Main from './containers/Main'
import BookList from './containers/BookList'
import Discussions from './containers/Discussions'
import InsideLook from './containers/InsideLook'
import Map from './containers/Map'
import BooksLanding from './containers/BooksLanding'
import BookDetails from './components/book/BookDetails'

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      
    }
  }



  render(){

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
      <Route path='/' exact component={Main}/>
      <Route path = '/booklist' exact component={BookList} />
      <Route path = '/discussions' exact component={Discussions} />
      <Route path = '/insidelook' exact component={InsideLook} />
      <Route path = '/map' exact component={Map} />
      <Route path = '/booklist/:bookId' exact component={BookDetails} />
      <Route path = '/bookslanding' exact component={BooksLanding} />
      </BrowserRouter>
    </ApolloProvider>
  );
}}

export default App;
