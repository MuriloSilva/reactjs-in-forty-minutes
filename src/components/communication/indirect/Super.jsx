import React, {useState} from 'react'
import Sub from './Sub'

export default props => {

    const [label, setLabel] = useState('Valor')    
    const [num, setNum] = useState(10)    

    function whenClicked(generatedValue, text) {
        console.log(generatedValue);
        setLabel(text)
        setNum(generatedValue)
    }

    return (
        <div>
            <h4>{label}:{num}</h4>
            <Sub onClicked={whenClicked}></Sub>
        </div>
    )
}