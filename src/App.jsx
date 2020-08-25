import React from 'react'
import './index.css'
import Primeiro from './components/basicos/Primeiro'
import Segundo from './components/basicos/ComParametro'
import Terceiro from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import "./App.css"
import Repeticao from './components/basicos/Repeticao.jsx'
import Condicional from "./components/basicos/Condicional"

export default props =>
    <div className="App">
        <Card titulo="Primeiro Componente">
            <Primeiro></Primeiro>
        </Card>
        <Card titulo="Segundo Componente">
            <Segundo titulo='meu titulo' subtitulo='meu subtitulo'></Segundo>
        </Card>
        <Card titulo="Terceiro Componente">
            <Terceiro>
                <ul>
                    <li>Jonas</li>
                    <li>Carol</li>
                </ul>
            </Terceiro>
        </Card>

        <Card titulo="Quarto Componente">
           <Repeticao></Repeticao>
        </Card>


        <Card titulo="Quinto Componente">
           <Condicional numero={1}></Condicional>
        </Card>
    </div>