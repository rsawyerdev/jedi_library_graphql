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
  },
  mapImage: {
    height: '100%',
    width: '100%'
  }
}



class Map extends Component {

    render(){
  return (
    <div style={styles.container}>
      <img src= "Star_Wars_Galaxy_Map.jpg" alt= "Star Wars Galaxy Map" style={styles.mapImage}/>
      
    </div>
  );
}
}

export default graphql(getBooksQuery)(Map);
