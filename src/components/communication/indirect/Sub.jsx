import React from 'react'

export default props =>
    <div>
        <button onClick={() => {
            props.onClicked(Math.random(), 'Fim')
        }
        }>Alterar</button>
    </div>