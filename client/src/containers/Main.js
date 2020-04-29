import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const styles = {
  container: {
    width: '100%',
    height: 1000,
    backgroundColor: 'lightgrey',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    textDecoration: 'none'
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
        <Link to='/booklist' style={{textDecoration:'none'}}> Book List </Link>
        <Link to='/discussions' style={{textDecoration:'none'}}> Discussions </Link>
        <Link to='/insidelook' style={{textDecoration:'none'}}> Inside Look </Link>
        <Link to='/map' style={{textDecoration:'none'}}> Map </Link>
        
        
      </div>
  );
}}

export default Main;
