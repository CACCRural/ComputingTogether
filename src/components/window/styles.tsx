import styled from 'styled-components'

import { colors } from '../../styles/colors'
import { WindowProps } from '../../types'

export const WindowDiv = styled.div<WindowProps>`
	background : ${colors.background};
	border-style : Solid;
	border-color : ${colors.text};
	border-width : 5px;
	border-radius : 30px 30px 30px 30px;
	-moz-border-radius : 30px 30px 30px 30px;
	-webkit-border-radius : 30px 30px 30px 30px;
  box-shadow: 15px 15px ${colors.text};
  margin: 0 16px 16px 0;
  width: ${props => props.width};
  height: ${props => props.height};
  overflow: hidden;
  background-color: ${props => props.backgroundColor};
  
  .content {
    height: ${props => props.contentHeight};
    width: ${props => props.contentWidth};
    background-color: ${props => props.contentBackgroundColor};
    overflow: auto;
    text-align: justify;
    padding: ${props => props.removePadding ? '': '2px 10px 15px 10px'};
  }
`

export const CirclesDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 2%;
`

export const Circle = styled.div`
  display: inline-block;
  height: 20px;
  width: 20px;
	border-style : Solid;
	border-color : ${colors.text};
	border-width : 2px;
  border-radius: 50%;
  margin-left: 5px; 
`

export const Sphere = styled.div`
  height: 20px;
  width: 20px;
  margin-left: 5px;
  display: inline-block;
  border-style : Solid;
	border-color : ${colors.text};
	background : ${colors.text};
  border-width : 2px;
  border-radius: 50%;
`

export const SimbolsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50px;
  height: 50px;
  padding-left: 2%;
`

export const Simbol = styled.p`
  height: 50px;
  width: 25px;
  font-family: OCR A Std, monospace;
  font-size : 40px;
`

type TitleProps = {
  titleSize: string
}

export const TitleDiv = styled.div<TitleProps>`
  display: flex;
  align-items : center;
  justify-content : space-between;
  border-bottom-style : Solid;
	border-bottom-color : ${colors.text};
	border-bottom-width : 5px;
  color : ${colors.text};
  font-size : ${props => props.titleSize};
`
