import React from 'react'
import { WindowProps } from '../../types'

import { WindowDiv, TitleDiv, CirclesDiv, Circle, Sphere, SimbolsDiv, Simbol } from './styles'

export default function Window(props:WindowProps) {
  return (
    <WindowDiv {...props}>
      <TitleDiv>
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
