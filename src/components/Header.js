import React from 'react'
import styled from 'styled-components'

const Header = () => {

    const Header = styled.header`
        background-color: #525252;
        display: flex;
        justify-content: center;
        padding: 5px 15px 5px 15px;
        box-shadow: 0 6px 10px black;
    `
    const Title = styled.h1`
        color: white;
        padding: 0;
        margin: 0;
    `

    return (
        <Header>
            <Title>Cat Stolen</Title>
        </Header>
    )
}

export default Header