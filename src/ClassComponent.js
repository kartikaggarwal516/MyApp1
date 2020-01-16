import React, { Component } from 'react'

export default class ClassComponent extends Component {
    state = {
        name: 'Kartik'
    }

    showAlert = () =>(
        alert('This function is executed by Kartik')
    )

    selectVanshit= () =>(
        this.setState({name:'Vanshit'})
    )

    selectRahul= () =>(
        this.setState({name:'Rahul'})
    )
    render() {
        return (
            <div>
                <h2 style={{ color: 'blue' }}>
                    Hello my name is {this.state.name}
                </h2>
                <ul style={{listStyleType:'none', display:'inline'}}>
                    <li><button onClick={this.showAlert}>Select Kartik</button></li>
                    <li><button onClick={this.selectVanshit}>Select Vanshit</button></li>
                    <li><button onClick={this.selectRahul}>Select Rahul</button></li>
                </ul>
                
            </div>
        )
    }
}