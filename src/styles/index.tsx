import { createGlobalStyle } from 'styled-components'

import { colors } from './colors'

export const MaxWidth = '1024px'

export default createGlobalStyle`
  body { 
    background-color: ${colors.background};
    font-family: "Calling Regular"
  }

  p {
    margin-block-start: 0;
    margin-block-end: 0;
  }

  @font-face {
    font-family: "Outfit Regular";
    src: url('../assets/fonts/Outfit-Regular.otf') format("opentype");
  }

  @font-face {
    font-family: "Calling Regular";
    src: url('../assets/fonts/Calling-Code-Regular.otf') format("opentype");
  }
  

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${colors.scroll_bar}; 
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.dark_green};
  }
`
