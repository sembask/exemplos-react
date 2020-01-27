import React from 'react';

const aprovados = ['Paula', 'Roberta', 'Gustavo', 'Julia']

export default props => {
    const gerarItens = itens => {
    return itens.map(item => <li>{item} {props.sobrenome}</li>)
    }

    return (
        <ul>
            {gerarItens(aprovados)} 
        </ul>
    )
}