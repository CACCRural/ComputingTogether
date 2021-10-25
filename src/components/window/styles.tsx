import styled from 'styled-components'

import { colors } from '../../styles/colors'

export const WindowDiv = styled.div`
	background : ${colors.background};
	border-style : Solid;
	border-color : ${colors.text};
	border-width : 5px;
	border-radius : 30px 30px 30px 30px;
	-moz-border-radius : 30px 30px 30px 30px;
	-webkit-border-radius : 30px 30px 30px 30px;
  box-shadow: 15px 15px ${colors.text};
  margin: 0 16px 16px 0;
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
  width: 3%;
  padding-left: 2%;
`

export const Simbol = styled.p`
  height: 50px;
  width: 25px;
  font-family: OCR A Std, monospace;
  font-size : 40px;
  margin-block-start: 0;
  margin-block-end: 0;
`

export const TitleDiv = styled.div`
  display: flex;
  align-items : center;
  justify-content : space-between;
  border-bottom-style : Solid;
	border-bottom-color : ${colors.text};
	border-bottom-width : 5px;
  color : ${colors.text};
  font-size : 35px;
`
