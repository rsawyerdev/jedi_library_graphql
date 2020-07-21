import React, { Component } from 'react'
import HBox from './HBox'
import Label from './Label'

export default class Button extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pressed: false,
            over: false
        }

        this.onClick = this.onClick.bind(this)
        this.onMouseOver = this.onMouseOver.bind(this)
        this.onMouseOut = this.onMouseOut.bind(this)

    }

    onClick = () => {
        this.props.onClick(this.props.value)
    }

    onMouseOver = () => {
        this.setState({
            over: true
        })
    }

    onMouseOut = () => {
        this.setState({
            over: false
        })
    }

    render() {
        let bgColor = this.props.backgroundColor || 'white'
        let fontColor = this.props.fontColor
        let cursor = this.props.cursor

        if (this.state.over) {
            bgColor = this.props.overBackgroundColor
            fontColor = this.props.overFontColor
            cursor = 'pointer'
            //color = '#fff'
        }

        return (
            <HBox
                paddingLeft={this.props.paddingLeft}
                paddingTop={this.props.paddingTop}
                minHeight={this.props.minHeight || 30}
                tansition={this.props.transition}
                backgroundColor={bgColor}
                fontColor={fontColor}
                height={this.props.height || 30}
                justifyContent={'center'}
                alignItems={this.props.alignItems}
                onMouseOut={this.onMouseOut}
                onMouseOver={this.onMouseOver}
                cursor={cursor}
                onClick={this.onClick}>
                    <Label boldString={this.props.boldString}
                            threshold={this.props.threshold}
                            pointerEvents="none"
                            fontSize={this.props.fontSize}
                            text={this.props.text} />
            </HBox>
        )
    }
}
