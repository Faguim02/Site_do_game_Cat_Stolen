import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Main from './components/Main';
import Sobre from './components/Sobre';
import controls from './Assets/Keyboard.png'

function App() {
  return (
    <>
      <Header/>
      <Main/>
      <Sobre Title={'Sobre o jogo'}
        paragrafo='
          Jogo em stilo plataforma 2d em pixelart, desenvolvido pelo brasileiro Fagner Muniz de Sá, com intuito de divertir o publico. CatStolen é um jogo onde um rapaz chado Peter que habitava um sítio pequeno junto com seu gato, o Niko; Peter era um Humano geneticamente mutado para conseguir se transformar em um cubo, dobrando o seu peso em 3 vez ao se transoformar. O que deu inicio a jornada de Peter, foi por conta que seu gatinho foi capturado e você vai atrás, enfrentando alguns obstaculos.
        '
      />
      <Sobre
      Title={'Controles:'}
      img={controls}
      />
      <Sobre
        Title={'Creditos:'}
        paragrafo='
        Programador, desenhista e gamedesign: Fagner;
        Musica:
        Josepros;

        -Efeitos Sonoros:
        Caap
        aabbccddee123
        Kwahmah_02
        Under7dude
        WebCommando
        '
      />
    </>
  );
}

export default App;
