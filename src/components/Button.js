import React from 'react';
import './Button.css'

class Button extends React.Component {

    isNumber = val => {
        return !isNaN(val) || val === '.' || val === "="
    }

    calculate = () => {
        let input = this.props.children
        if (input === 'Clear') {
            return this.props.handleClear()
        } else if (input === '=') {
            return this.props.handleEvaluation()
        } else if (input === '+' || input === '-' || input === '*' || input === '/'){
            return this.props.handleOperation(input)
        }
            return this.props.handleClick(input)
    }

    render() {
        return (
            <div className={this.isNumber(this.props.children) ? "button" : "operator"} onClick={this.calculate}>
                {this.props.children}
            </div>
        )
    }
}

export default Button