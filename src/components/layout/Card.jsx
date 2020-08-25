import React from 'react'
import  "./card.css"

export default props =>
    <div className="Card">
        <div className="Conteudo">
            {props.children}
        </div>
        <div className="footer">
            {props.titulo}
        </div>
    </div>