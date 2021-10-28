import React from "react"
import styled from 'styled-components'

import { colors } from '../../styles/colors'

import '../../assets/background/green_background.png'

export const NavBarDiv = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0em;
  width: 100%;
  height: 125px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  opacity: 0.98;
  background-color: ${colors.green};
`

export const OptionsDiv = styled.div`
  display: flex;
  justify-content: space-between;
`

export const NavItemDiv = styled.div`
  width: 8.5em;
  height: 4em;
`
export const NavLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors['text']};
  text-decoration: none;
  font-family: Outfit Regular;
`