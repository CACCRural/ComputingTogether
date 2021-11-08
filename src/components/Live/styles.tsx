import styled from 'styled-components'

import { colors } from '../../styles/colors'
import background from '../../assets/background/blue_background.png'

export const LiveDiv = styled.div`
  background-image: url(${background});
	background-repeat: no-repeat;
	background-size: cover;
	background-color: ${colors.blue};
	height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  position: relative;
  height: 100%;
`

export const BottomAdjust = styled.div`
  position: absolute;
  bottom: 0px;
  height: 50px;
  width: 100%;
  border-top: 5px solid ${colors.text};  
`
