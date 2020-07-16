import React from 'react'
import BookDetails from '../components/book/BookDetails'
import BookCover from '../components/book/BookCover'


export default class BookTile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            flipped: false        };
        this.flip = this.flip.bind(this);

    }

    doneFlipping(){
        this.setState({
            flipping: false
        })
    }

    flip(){
        if(this.state.flipped === false){
            this.setState({ 
                flipped: true,
                flipping: true
            });
            
        } else {
            this.setState({
                flipped: false
            })
            setTimeout(this.doneFlipping, 1000);
        }
    }

    render() {
        console.log(this.props)
        const styles = {
        'default': {
                container: {
                    width: 100,
                    height: 100,
                    perspective: 1000,
                    display: 'block',
                    position: 'relative',
                    float: 'left',
                    marginRight: 5,
                    zIndex: 1
                },
                containerFlip: {
                    zIndex: 1000
                },
                tile: {
                    height: '100%',
                    position: 'relative',
                    transition: 'all 1s ease-in-out',
                    width: '100%',
                    transformStyle: 'preserve-3d',
                },
                tileFlip: {
                    transform: 'rotateY(180deg)'
                },
                tileFront: {
                    backfaceVisibility: 'hidden',
                    transition: 'all 1s ease-in-out',
                },
                tileFrontFlip: {
                    transform: 'scale3d(4,4,4)'
                },
                tileBack: {
                    transform: 'rotateY(180deg)',
                    backfaceVisibility: 'hidden',
                }
            }
        }

        return (
            <div style={ [styles.container, styles.containerFlip ] } ref={c => this.container = c}>
                <div style={ [styles.tile, styles.tileFlip] }>
                    <div style={ [styles.tileFront, styles.tileFrontFlip ] }>
                        <BookCover data={this.props.data}  />
                    </div>
                    <div style={ [styles.tileBack, styles.tileBackFlip ] }>
                        <BookDetails  />
                    </div>
                </div>
            </div>
        );
    }
}