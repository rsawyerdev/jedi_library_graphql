import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import VBox from '../components/global/VBox'
import HBox from '../components/global/HBox'

const styles = {
  container: {
    backgroundImage: "url('/jedi_reading.jpg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
    
  },
  linkContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: 500,
    justifyContent: 'space-between',
    
  },
  link: {
    textDecoration: 'none',
    borderStyle: 'solid',
    borderColor: 'black',
    backgroundColor: 'blue',
    borderRadius: 15,
    height: 25,
    width: 200,
    textAlign: 'center'  
  }
}

class Main extends Component {

  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  render(){


  return (
      <VBox backgroundImage="url('/jedi_reading.jpg')"
      backgroundRepeat="no-repeat"
      backgroundSize="cover">
        <HBox justifyContent="center">
          <h1>Jedi Library</h1>
        </HBox>
        <div style={styles.linkContainer}>
        <Link to='/booklist' style={styles.link}> Books By Reading Status </Link>
        
        </div>
        
      </VBox>
  )
}}

export default Main
