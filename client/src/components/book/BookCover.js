import React, { Component } from 'react'


const styles = {

    bookImage: {
        height: 250,
        width: 150,
        resizeMode: 'contain'
    },
    container: {
        display: 'flex',
        flexDirection: 'row'
    }
}

class BookCover extends Component {

    render() {

        var image = this.props.book.imageId + '.png'
        return (
            <div >
                <img style={styles.bookImage} alt={this.props.book.title} src={image} />
            </div>
        )
    }
}

export default BookCover