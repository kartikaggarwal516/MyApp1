import React, { Component } from 'react'


export default class Counter extends Component {
    state = {
        count: 0
    }
    selectIncrement = () => {
        this.setState({ count: this.state.count + 1 })
    }
    selectDecrement = () => {
        if (this.state.count > 0) {
            this.setState({ count: this.state.count - 1 })
        } else {
            this.setState({ count: 0 })
        }

    }
    

    render() {
        const { count } = this.state
        return (
            <div>
                <button onClick={this.selectIncrement} className='btn btn-primary'>+</button>
                {count}
                <button onClick={this.selectDecrement}>-</button>
            </div>
        )
    }
}