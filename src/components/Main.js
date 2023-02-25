import React from 'react'
import styled from 'styled-components'
import trailer from '../Assets/trailer.mp4'
import Button from './Button'
import game from '../Assets/CatStolen.rar'
import gamelinux from '../Assets/CatStolenLinux.rar'
import '../App.css'

const Main = () => {

    const Main = styled.main`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 90vh;
    `
    const ViewButton = styled.div`
        
        height: 50px;
        display: flex;
        justify-content: space-around;
    `
    return (
        <Main>
            <video autoPlay src={trailer} controls width={600} style={{ padding : 10}} className='video-display'></video>
            <ViewButton className='ViewBtn'>
                <Button Title={'Baixar para Linux'} Link={gamelinux}/>
                <Button Title={'Baixar para Windows'} Link={game}/>
            </ViewButton>
        </Main>
    )
}

export default Main