import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeiroComponente from './componentes/PrimeiroComponente'
// import ComponenteProps from './componentes/ComponenteProps'
// import CompA, {CompB} from './componentes/DoisComponentes'
// import MultiElementos from './componentes/MultiElementos';
// import FamiliaSilva from './componentes/FamiliaSilva'
import Familia from './componentes/Familia'
import Membro from './componentes/Membro'

const elemento = document.getElementById('root')
ReactDOM.render(
<div>
    <Familia sobrenome=" Pereira" >
        <Membro nome="Andre" />
        <Membro nome="Mariana" />
    </Familia>
    <Familia sobrenome=" Arruda">
        <Membro nome="Bia" />
        <Membro nome="Gustavo"/>
    </Familia>
</div>, elemento)