import React from 'react'

import Footer from '../Footer'
import NavBar from '../NavBar'

import Teste from '../../assets/teste.svg'
import Window from '../../assets/window_background.svg'

import { HomeDiv } from './styles'

function Home() {
  return (<>
    <NavBar />
    <HomeDiv>
      <p style={{ margin: '0' }}> alguma coisa qualquer </p>
      <Window width="1124" height="749"/>
    </HomeDiv>
    <div>
      
    </div>
    <Teste />
    <Footer />
  </>)
}

export default Home