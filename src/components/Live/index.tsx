import React from 'react'
import ReactPlayer from 'react-player/twitch'

import Window from '../Window'
import { LiveDiv, BottomAdjust, Container } from './styles'

export default function Live() {
  return (
    <LiveDiv id='live'>
      <Window 
        title="" height="70%" width="60%"
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
