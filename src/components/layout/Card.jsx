import React, { Component } from 'react'
import './Card.css'

export default class Card extends Component {

    render() {
        return (
            <div className="Card" style={{
                borderColor: this.props.color || '#000'
            }}>
                <div className="Content">
                    {this.props.children}
                </div>
                <div className="Footer" style={{
                    backgroundColor: this.props.color || '#000'
                }}>
                    {this.props.title}
                </div>
            </div>
        )
    }
}