import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const styles = {
  container: {
    width: '100%',
    height: 800,
    backgroundColor: 'lightgrey',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
    height: 20,
    width: 100,
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
      <div style={styles.container}>
        <div>
          <h1>Jedi Library</h1>
        </div>
        <div style={styles.linkContainer}>
        <Link to='/booklist' style={styles.link}> Book List </Link>
        <Link to='/discussions' style={styles.link}> Discussions </Link>
        <Link to='/insidelook' style={styles.link}> Inside Look </Link>
        <Link to='/map' style={styles.link}> Map </Link>
        </div>
        
      </div>
  )
}}

export default Main
