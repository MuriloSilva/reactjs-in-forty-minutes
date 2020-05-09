import React, { Component, Fragment } from 'react'

export default class Counter extends Component {

    state = {
        value: 10,
        step: 10
    }

    inc = () => {
        this.setState({
            value: this.state.value + this.state.step
        })
    }

    dec = () => {
        this.setState({
            value: this.state.value - this.state.step
        })
    }

    setStep = (newStep) =>
        this.setState({
            step: +newStep
        }
        )


    render() {
        return (
            <Fragment>
                <h3>Contador</h3>
                <label htmlFor="inputStep">Passo:</label>
                <input 
                    type="number" 
                    id="inputStep" 
                    value={this.state.step} 
                    onChange={(event) => this.setStep(event.target.value)} 
                    style={{
                        width: "60px",
                        fontSize: "1.4rem",
                        marginLeft: "3px"
                    }}
                    />
                <h4>Valor: {this.state.value}</h4>
                <div>
                    <button onClick={this.inc}>+</button>
                    <button onClick={this.dec}>-</button>
                </div>
            </Fragment>
        )
    }
}