import React from 'react'
import "./Button.css"


class Input extends React.Component{

    render(){

        return(
            <div className="input">
                {this.props.input.input}
            </div>
        )
    }
}

export default Input