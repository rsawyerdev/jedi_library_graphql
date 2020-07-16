/**
 * @module Label
 * @implements HBox Compose of
 * 
 * @summary This component is a text label that provides a reuable interface for consistent looking text in React.
 * 
 * @props (string) text - The text to show in the label.
 * @props (number) threshold - Limits the amount of chars visible until an elipsis is shown.
 * @props (string) boldString - The text that should be bold within the text of the label. 
 * @returns (ReactElement)
 */

 import React from 'react'
import HBox from './HBox'

const Label = (props) => {

    // Force the text value to be a string
    let text = String(props.text)

    // Becomes a single span or split into 3 pieces and put back together in order to show a part of the word in bold.
    let textField

    if(props.threshold) {
        if(text.length > props.threshold){
            text = text.slice(0, props.threshold - 3) + "..."
        }
    }

    if(props.boldSting){

        var pattern = new RegExp(props.boldSting, 'gi')
        var strArray = text.split(pattern)
        // The types in letters with original case intact
        let extractedPattern = props.boldSting
        if(text.length > 0 && text.match(pattern)){
            extractedPattern = text.match(pattern)[0]
        }
        const pre = strArray[0]
        const post = strArray[1]
        textField = (<span style ={{userSelect: 'none'}} title={props.threshold ? props.text : null}>
            {pre}<b>{extractedPattern}</b>{post}
        </span>)
    } else{
        textField = <span style={{userSelect: 'none'}} title={props.threshold ? props.text : null}> {text} </span>
    }

    return (
        <HBox   margin={props.margin || 'auto'}
                marginTop={props.marginTop}
                color={props.color || 'black'}
                fontSize={props.fontSize || 18}
                marginBottom={props.marginBottom}
                marginLeft={props.marginLeft}
                marginRight={props.marginRight}
                pointerEvents={props.pointerEvents}
                textAlign={props.textAlign || 'left'}>
                    {textField}
        </HBox>
    )
}

export default Label