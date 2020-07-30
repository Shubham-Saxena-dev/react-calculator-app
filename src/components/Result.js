import React from 'react'
import "./Button"

class Result extends React.Component {
    render() {
        return (

            <div className="input">
                {this.props.result.result}
            </div>
        )
    }
}

export default Result