import React from 'react';
import './App.css';
import Button from './components/Button'
import Result from './components/Result'
import Input from './components/Input';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      result: "",
      previousInput: "",
      currentInput: "",
      operator: "",
      input:"",
    }
  }

  addToInput = val => {
    this.setState({
      result: this.state.result + val,
      input : this.state.input + val
    })

  }

  resetInput = () => {
    this.setState({
      result: "",
      previousInput: "",
      operator: "",
      input:""
    })
  }

  operator = val => {
    this.setState({
      input: this.state.result + val,
      previousInput: this.state.result,
      result: "",
      operator: val
    })
  }

  decimalInput = val => {
    if (this.state.result.indexOf('.') === -1) {
      this.addToInput(val)
    }
  }

  evaluate = () => {
    let action = this.state.operator
    
    if (action) {

      let num1 = parseFloat(this.state.previousInput)
      let num2 = parseFloat(this.state.result)

      switch (action) {
        case '/':
          this.setState({ result: num1 / num2 })
          break
          case '*':
          this.setState({ result: num1 * num2 })
          break
        case '+':
          this.setState({ result: num1 + num2 })
          break
        case '-':
          this.setState({ result: num1 - num2 })
          break
        default:
          this.setState({ result: "Undefined" })
      }
    }
    this.setState({
      operator: ""
    })
  }

  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <Input input={this.state}/>
          <Result result={this.state} />
          <div className="row">
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleOperation={this.operator}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleOperation={this.operator}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleOperation={this.operator}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.decimalInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleEvaluation={this.evaluate}>=</Button>
            <Button handleOperation={this.operator}>-</Button>
          </div>
          <div className="clearButton">
            <Button handleClear={this.resetInput}>Clear</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
