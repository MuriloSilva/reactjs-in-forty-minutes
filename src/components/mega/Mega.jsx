import React, { Component, Fragment } from 'react'



export default class Mega extends Component {
    state = {
        values: Array(10).fill(0)
    }

    showValues = () => {
        return this.state.values
            .sort((a, b) => a - b)
            .map(item =>
                (item < 10 ? '0' : '') + item.toString()
            )
            .join(' ')
    }

    generateNewNumber = (arr) => {
        const min = 1
        const max = 60
        const { trunc, random } = Math
        let newNumber = trunc(random() * (max - min) + min + 1)
        return arr.includes(newNumber) ? this.generateNewNumber(arr) : newNumber
    }

    generateValues = () => {
        this.setState({
            values: this.state.values.reduce((acum, item) => {
                return [...acum, this.generateNewNumber(acum)]
            }, [])
        })
    }

    render() {
        return (
            <Fragment>
                <h3>Mega</h3>
                <p>{this.showValues()}</p>
                <button onClick={this.generateValues}>Gera Valores</button>
            </Fragment>
        )
    }
}