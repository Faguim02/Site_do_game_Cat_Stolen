import React from 'react'
import styled from 'styled-components'

const Button = ({Title, Link}) => {

    const Button = styled.a`
        color: white;
        width: 40%;
        background-color: #83988e;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        cursor: pointer;
        box-shadow: 0 6px 6px black;
        transition: 1s;
        :hover{
            width: 42%;
        }
    `

    return <Button href={Link} onClick={()=>window.alert('Obridado por baixar o jogo!! qualquer coisa me chame no instagram @faguim_02 ou @cat.stolen')}>{Title}</Button>
}

export default Button