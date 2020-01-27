import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeiroComponente from './componentes/PrimeiroComponente'
// import ComponenteProps from './componentes/ComponenteProps'
import {CompA, compB, CompB} from './componentes/DoisComponentes'

const elemento = document.getElementById('root')
ReactDOM.render(
<div>
<CompA  valor={2*20}/>
<CompB  valor = {2*10}/>
</div>, elemento)