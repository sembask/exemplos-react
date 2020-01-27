import React from 'react';
import Filhos from './Filhos'

export default props => {
    const notificarSaidaDoFilho = lugar => alert(`Liberado para  ${lugar}`)
    return ( 
        <div>
            <Filhos notificarSaida={notificarSaidaDoFilho}/>
        </div>
    )
}
