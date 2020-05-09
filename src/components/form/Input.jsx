import React, { Fragment, useState } from 'react'

export default props => {

    let [name, setName] = useState('Maria Doida')
    return (
        <Fragment>
            <p>{name}</p>
            <input type="text" value={name} onChange={(element) => {
                setName(element.target.value)
            }}/>
        </Fragment>
    )
}
