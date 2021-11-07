import React from 'react'

import Logo from '../../assets/icons/logo.svg'
import { NavBarDiv } from './styles'
import Options from './Options'

import removeHash from './utils'

export default function NavBar() {
  return (
    <NavBarDiv>
      <a onClick={() => {
        window.scrollTo(0, 0)
        removeHash()
      }}>
        <Logo width="200" height="120" viewBox="0 0 930.99 466.96"/>
      </a>
      <Options />
    </NavBarDiv>
  )
}
