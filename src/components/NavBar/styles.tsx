import React from "react"
import styled from 'styled-components'

import { colors } from '../styles/colors'

export const NavBarDiv = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0em;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${colors['green']};
  opacity: 0.98;
`

export const OptionsDiv = styled.div`
  display: flex;
  justify-content: space-between;
`

export const NavItemDiv = styled.div`
  width: 8em;
  height: 4em;
`
export const NavLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors['text']};
  text-decoration: none;
`