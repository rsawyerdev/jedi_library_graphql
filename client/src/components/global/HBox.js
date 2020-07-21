import React, { Component } from 'react'


export default class HBox extends Component {

    render() {
        const style = {
            color: this.props.fontColor,
            position: this.props.position,
            display: 'flex',
            flexDirection: this.props.flexDirection || 'row',
            alignItems: this.props.alignItems || 'center',
            justifyContent: this.props.justifyContent || 'flex-start',
            width: this.props.width || '100%',
            height: this.props.height || '100%',
            borderRadius: this.props.borderRadius,
            marginTop: this.props.paddingTop,
            marginBottom: this.props.paddingBottom,
            backgroundColor: this.props.backgroundColor,
            boxShadow: this.props.boxShadow,
            padding: this.props.padding,
            paddingLeft: this.props.paddingLeft,
            margin: this.props.margin,
            transition: this.props.transition,
            marginLeft: this.props.marginLeft,
            top: this.props.top,
            left: this.props.left,
            zIndex: this.props.zIndex,
            minHeight: this.props.minHeight,
            cursor: this.props.cursor
        }
        return (
            <div id={this.props.id} style={style} onMouseOver={this.props.onMouseOver} onMouseOut={this.props.onMouseOut} onClick={this.props.onClick}>
                {this.props.children}
            </div>
        )
    }
}
