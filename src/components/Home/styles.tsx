import React from "react"
import styled from 'styled-components'

import { colors } from '../../styles/colors'

export const HomeDiv = styled.div`
  background-color: ${colors['light_green']};
  display: flex;
  justify-content: space-around;
  align-items: top;
  height: 600px;
  padding-top: 10px;
  width: 100%;
`

export const TextDiv = styled.div`
  width: 25vw;
  padding: 0px 10px 0px 10px;
  h2 { 
    text-align: center;
  }

  p {
    text-align: justify;
  }
`
