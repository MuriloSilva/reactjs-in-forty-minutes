import React from 'react'
import Children from './Children'

export default props => 
    <div>
        <Children {...props}><strong>João</strong></Children>
        <Children surname={props.surname}>Maria</Children>
        <Children surname="Silva">Pedro</Children>
    </div>