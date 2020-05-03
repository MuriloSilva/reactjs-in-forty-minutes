import React from 'react'
import First from './components/basics/First'
import Card from './components/layout/Card'
import WithParameters from './components/basics/WithParameters'
import WithChildrens from './components/basics/WithChildrens'
import './App.css'
import Repetition from './components/basics/Repetition'
import Conditional from './components/basics/Conditional'
import ConditionalWithIf from './components/basics/ConditionalWithIf'

export default props =>
    <div className="App">
        <Card title="#1 - Primeiro Componente">
            <First>
                hello
            </First>
        </Card>
        <Card title="#2 - Componente com parâmetros">
            <WithParameters
                title="Componente com parâmetros"
                content="Hello react" />
        </Card>
        <Card title = "#3 - Componente com filhos">
            <WithChildrens>
                <ul>
                    <li>Doris</li>
                    <li>Renata</li>
                    <li>Murilo</li>
                    <li>Eloisa</li>
                </ul>
            </WithChildrens>
        </Card>
        <Card title = "#4 - Repetição">
            <Repetition/>
        </Card>
        <Card title = "#5 - Condicional">
            <Conditional number={234}/>
        </Card>
        <Card title = "#6 - Condicional com if">          
            <ConditionalWithIf num={2346313}/>
        </Card>
    </div>
