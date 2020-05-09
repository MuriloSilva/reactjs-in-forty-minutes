import React from 'react'
import First from './components/basics/First'
import Card from './components/layout/Card'
import WithParameters from './components/basics/WithParameters'
import WithChildrens from './components/basics/WithChildrens'
import Repetition from './components/basics/Repetition'
import Conditional from './components/basics/Conditional'
import ConditionalWithIf from './components/basics/ConditionalWithIf'
import Father from './components/communication/direct/Father'
import Super from './components/communication/indirect/Super'
import Input from './components/form/Input'

import './App.css'
import Counter from './components/counter/Counter'
import Mega from './components/mega/Mega'

export default props =>
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card title="#11 - Mega" color="#59C8DF">
                <Mega />
            </Card>
            <Card title="#10 - Contador" color="#3A0256">
                <Counter />
            </Card>
            <Card title="#9 - Input" color="#BFAF80">
                <Input />
            </Card>
            <Card title="#8 - Comunicação indireta">
                <Super />
            </Card>
            <Card title="#7 - Comunicação direta" color="#A3D39C">
                <Father surname="de Paula" />
            </Card>
            <Card title="#6 - Condicional com if" color="#E45F56">
                <ConditionalWithIf num={2346313} />
            </Card>
            <Card title="#5 - Condicional" color="#14B8B1">
                <Conditional number={234} />
            </Card>
            <Card title="#4 - Repetição" color="#8BAD39">
                <Repetition />
            </Card>
            <Card title="#3 - Componente com filhos" color="#ABA918">
                <WithChildrens>
                    <ul>
                        <li>Doris</li>
                        <li>Renata</li>
                        <li>Murilo</li>
                        <li>Eloisa</li>
                    </ul>
                </WithChildrens>
            </Card>
            <Card title="#2 - Componente com parâmetros" color="#AFA577">
                <WithParameters
                    title="Componente com parâmetros"
                    content="Hello react" />
            </Card>
            <Card title="#1 - Primeiro Componente" color="#DC2742">
                <First>
                    hello
                </First>
            </Card>
        </div>
    </div>
