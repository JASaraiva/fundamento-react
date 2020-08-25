import React from "react"
import Products from "../data/Products.js"

export default props =>{

    function getProdutoListItens(){
        return Products.map(prod => {
        return <li key={prod.id}>
            {prod.id} - {prod.nome} - R$ {prod.preco}
            </li>
        })
    }


    return (<div>
        <h2>Repetição</h2>
        <ul>
            {getProdutoListItens()}
        </ul>
    </div>)
}