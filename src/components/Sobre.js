import React from 'react'
import styled from 'styled-components'
import '../App.css'

const Sobre = ({Title, paragrafo, img}) => {

    const Sobre = styled.section`
        color: #a4a4a4;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
    `
    const TextTitle = styled.h2`
    
    `
    const Text = styled.p`
        
    `
    const Image = styled.img`
        
    `

    return (
        <Sobre>
            <TextTitle>{Title}</TextTitle>
            <Text className='paragrafo'>{paragrafo}</Text>
            <Image src={img} width='600' className='img'/>
        </Sobre>
    )
}

export default Sobre