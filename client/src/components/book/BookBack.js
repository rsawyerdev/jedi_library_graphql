import React, { Component } from 'react'
import { Link } from 'react-router-dom'



class BookBack extends Component {
    displayBookBack(){
        const { book } = this.props
        if(book){
            return(
                <div>
                    <h2>{ book.title }</h2>
                    <p>{ book.summary }</p>
                    <p>{ book.id }</p>
                    <Link to={`/booklist/${book.id}`}> See ALL </Link>

                </div>
            );
        } 
    }
    render(){
        return(
            <div>
                { this.displayBookBack() }
            </div>
        );
    }
}

export default BookBack