import React, { Component } from 'react'
import VBox from './VBox'
import Button from './Button'

class DropDown extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentOption: props.defaultOption,
            open: false
        }
    }

    toggle = () => {
        this.setState({
            open: !this.state.open
        }, /*() => {
            if (this.state.open) {
                document.addEventListener('mousedown', this.hitTest, false)
            } else {
                document.removeEventListener('mousedown', this.hitTest, false)
            }
        }*/
        )
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.hitTest, false)
    }

    hitTest = (event) => {
        console.log(this.container)
        if (this.container.contains(event.target)) {
            return 
        }
        this.toggle()
    }

    selectOption = (value) => {
        if (this.state.open) {
            this.props.select(value)
        }
        this.toggle()
        console.log(value)
    }

    render() {
        if (!this.props.options) {
            return null
        }
        let component
        if (this.state.open) {
            component = (<VBox height={100} width={150}>
                {this.props.options.map((option) => {
                    return <Button key={option.value} value={option.value} text={option.text} onClick={this.selectOption} />
                })}
            </VBox>)
        } else {
            component = <Button text={this.props.defaultOption} onClick={this.selectOption} />
        }

        const height = this.state.open ? 40 * this.props.options.length : 40

        return (
            <VBox ref={ref => this.container = ref} height={height} width={150} zIndex={this.state.open ? 100 : 0}>                    
                {component}
            </VBox>
        )
    }
}
export default DropDown