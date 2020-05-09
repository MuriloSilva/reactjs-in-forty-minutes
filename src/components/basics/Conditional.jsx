import React from 'react'

export default props => 
    <div>
        <h3>O número informado {props.number} é</h3>
        <span>
            {props.number % 2 === 0 ? 'Par' : 'Impar'}
        </span>
    </div>