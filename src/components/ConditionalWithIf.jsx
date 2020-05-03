import React from 'react'
import If from './If'

export default ({num}) => 
    <React.Fragment>
        <h2>O número {num} é: </h2>
        <If condition={num % 2 === 0}>
            <span>O número é par</span>
        </If>

        <If condition={num % 2 !== 0}>
            <span>O número é impar</span>
        </If>
    </React.Fragment>
