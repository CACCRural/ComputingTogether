import React from 'react'
import { createGlobalStyle } from 'styled-components'

import { colors } from './components/styles/colors'

export default createGlobalStyle`
  body { 
    background-color: ${colors.background}
  }
`