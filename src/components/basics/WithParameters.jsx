import React from 'react'

export default props => 
    <React.Fragment>
        <div>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    </React.Fragment>