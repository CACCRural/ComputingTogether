import { createGlobalStyle } from 'styled-components'

import { colors } from './colors'
import outfitRegular from '../assets/fonts/Outfit-Regular.otf'
import callingCode from '../assets/fonts/Calling-Code-Regular.otf'


export const MaxWidth = '1200px'

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
    src: url(${outfitRegular}) format("opentype");
  }

  @font-face {
    font-family: "Calling Regular";
    src: url(${callingCode}) format("opentype");
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
