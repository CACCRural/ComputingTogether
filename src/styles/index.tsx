import React from 'react'
import { createGlobalStyle } from 'styled-components'

import { colors } from './colors'

export default createGlobalStyle`
  body { 
    background-color: ${colors.background}
  }
`