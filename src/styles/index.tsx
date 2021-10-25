import React from 'react'
import { createGlobalStyle } from 'styled-components'

import { colors } from './colors'

export default createGlobalStyle`
  body { 
    background-color: ${colors.background};
  }

  p {
    margin-block-start: 0;
    margin-block-end: 0;
    font-family: "Outfit Regular"
  }

  @font-face {
    font-family: "Outfit Regular";
    src: url('../assets/fonts/Outfit-Regular.otf') format("opentype");
  }

  @font-face {
    font-family: "Outfit Bond";
    src: url('../assets/fonts/Outfit-Bold.otf') format("opentype");
  }
`