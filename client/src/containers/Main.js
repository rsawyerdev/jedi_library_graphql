import React, { Component } from 'react'
import BookList from './BookList'
import Discussions from './Discussions'
import InsideLook from './InsideLook'
import Map from './Map'


export const states = {
  BOOKLIST: 'BookList',
  DISCUSSIONS: 'Discussions',
  INSIDE_LOOK: 'InsideLook',
  MAP: 'Map',
  MAIN: 'Main'
}


const styles = {
  container: {
    width: '100%',
    height: 1000,
    backgroundColor: 'lightgrey'
  }
}

class Main extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentPage: states.MAIN
    }
  }

  setPage = (newPage) => {
    console.log(newPage)
    this.setState({
      currentPage: newPage
    })
  }

  render(){

      let container
      switch (this.state.currentPage) {
        case states.BOOKLIST:
          container = <BookList />
          break
        case states.DISCUSSIONS:
          container = <Discussions />
          break
          case states.INSIDE_LOOK:
            container = <InsideLook />
            break
            case states.MAP:
            container = <Map />
          break
      }

  return (
      <div style={styles.container}>
        <div onClick={() => this.setPage(states.BOOKLIST)}>Book List</div>
        <div onClick={() => this.setPage(states.DISCUSSIONS)}>Discussions</div>
        <div onClick={() => this.setPage(states.INSIDE_LOOK)}>Inside Look</div>
        <div onClick={() => this.setPage(states.MAP)}>Map</div>
        {container}
      </div>
  );
}}

export default Main;
