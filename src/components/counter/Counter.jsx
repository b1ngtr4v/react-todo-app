import React, { Component } from 'react'
import './Counter.css'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0
        }
    }

    increment = () => {
        const counter = this.state.counter + 1
        
        this.setState({
            counter
        })
    }

    render() {
        return (
            <div className="counter">
                <button onClick={this.increment} >+1</button>
                <span className="count">{this.state.counter}</span>
            </div>
        )
    }
}

export default Counter