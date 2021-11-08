import React from 'react'
import ReactPlayer from 'react-player/twitch'
import { MaxWidth } from '../../styles'

import Window from '../Window'
import { LiveDiv, BottomAdjust, Container } from './styles'

export default function Live() {
  let windowHeight = '70%'
  let windowWidth = '70%'
  
  console.log(parseInt(MaxWidth.slice(0, -2)))
  console.log(window.innerWidth)
  
  if(window.innerWidth <= parseInt(MaxWidth.slice(0, -2))) {
    windowHeight = '70%'
    windowWidth = '95%' 
  }

  if(window.innerWidth <= 450) {
    windowHeight = '50%'
  }

  return (
    <LiveDiv id='live'>
      <Window 
        title="" height={windowHeight} width={windowWidth}
        contentHeight="calc(100% - 55px)" contentWidth="100%" removePadding
      >
        <Container>
          <ReactPlayer width="100%" height="calc(100% - 54px)" url='https://www.twitch.tv/computingtogether' />
          <BottomAdjust />
        </Container>
      </Window>
    </LiveDiv>
  )
}
