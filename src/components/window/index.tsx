import React from 'react'

import { WindowDiv, TitleDiv, CirclesDiv, Circle, Sphere, SimbolsDiv, Simbol } from './styles'

export default function Window(props) {
  return (
    <WindowDiv style={props.style}>
      <TitleDiv>
        <SimbolsDiv>
          <Simbol>
            {'<'}
          </Simbol>
          <Simbol> 
            {'>'}
          </Simbol>
        </SimbolsDiv>
        {props.title}
        <CirclesDiv>
          <Circle />
          <Circle />
          <Sphere />
        </CirclesDiv>
      </TitleDiv>
      {
        props.children
      }
    </WindowDiv>
  )
}
