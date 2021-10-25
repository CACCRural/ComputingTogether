import React from 'react'

import Footer from '../Footer'
import NavBar from '../NavBar'

import Window from '../window'

import { HomeDiv } from './styles'

import Background from '../../assets/background/green_background.png'

function Home() {
  return (<>
    <NavBar />
    <HomeDiv>
      <p style={{ margin: '0' }}> alguma coisa qualquer </p>
      <Window title="teste com abacate né" style={{width: '600px', boxShadow: '20px 2px'}}>
        ala os filhos
      </Window>

      <Window title="teste com mais coisa pra ficar da hora" style={{width: '1200px', height: '600px'}}>
        ala os filhos 2
      </Window>

      <Window title="teste com algumas coisas pra ficar bunito" style={{width: '800px'}}>
        ala os filhos 3
      </Window>
      <div style={{backgroundImage: `url('/background/green_background.png'})`}}>
        aaaa
      </div>
    </HomeDiv>
    <Footer />
  </>)
}

export default Home