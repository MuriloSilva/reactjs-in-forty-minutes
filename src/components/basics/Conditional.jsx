import React from 'react'

export default props => 
    <div>
        <h2>O número informado {props.number} é</h2>
        <span>
            {props.number % 2 === 0 ? 'Par' : 'Impar'}
        </span>
    </div>