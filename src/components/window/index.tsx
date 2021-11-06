import React from 'react'
import { WindowProps } from '../../types'

import { WindowDiv, TitleDiv, CirclesDiv, Circle, Sphere, SimbolsDiv, Simbol } from './styles'

export default function Window(props:WindowProps) {
  const titleSize = props.titleSize ? props.titleSize: "2vw"

  return (
    <WindowDiv {...props}>
      <TitleDiv titleSize={titleSize}>
        <SimbolsDiv>
          <Simbol>
            {'<'}
          </Simbol>
          <Simbol> 
            {'>'}
          </Simbol>
        </SimbolsDiv>
        <span>
          {props.title}
        </span>
        <CirclesDiv>
          <Circle />
          <Circle />
          <Sphere />
        </CirclesDiv>
      </TitleDiv>
      <div className='content'>
        { props.children }
      </div>
    </WindowDiv>
  )
}
