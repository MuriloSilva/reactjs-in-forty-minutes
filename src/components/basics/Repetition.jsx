import React from 'react'
import products from '../data/products'

const getProductItens = () => 
    products.map(product => 
        <li key={product.id}>
            {product.id} - {product.name} - {product.price}
        </li>)

export default props => 
    <div>
        <h3>Repetição</h3>
        <ul>
            {getProductItens()}
        </ul>
    </div>
