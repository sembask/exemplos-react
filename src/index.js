import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeiroComponente from './componentes/PrimeiroComponente'
// import ComponenteProps from './componentes/ComponenteProps'
import CompA, {CompB} from './componentes/DoisComponentes'
// import MultiElementos from './componentes/MultiElementos';

const elemento = document.getElementById('root')
ReactDOM.render(
<div>
    <CompA/>
    <CompB/>
</div>, elemento)