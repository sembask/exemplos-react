import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeiroComponente from './componentes/PrimeiroComponente'
// import ComponenteProps from './componentes/ComponenteProps'
// import CompA, {CompB} from './componentes/DoisComponentes'
// import MultiElementos from './componentes/MultiElementos';
// import FamiliaSilva from './componentes/FamiliaSilva'
// import Familia from './componentes/Familia'
// import Membro from './componentes/Membro'
// import ComponenteComFuncao from './componentes/ComponenteComFuncao';
// import Filhos from './componentes/Filhos'
import Pai from './componentes/Pai'

const elemento = document.getElementById('root')
ReactDOM.render(
<div>
    <Pai/>
</div>, elemento)
    

    // <ComponenteComFuncao sobrenome = "Junior"/>
    //Props para componente filho
    {/* <Familia sobrenome=" Pereira" >
        <Membro nome="Andre" />
        <Membro nome="Mariana" />
    </Familia>
    <Familia sobrenome=" Arruda">
        <Membro nome="Bia" />
        <Membro nome="Gustavo"/>
    </Familia> */}