import React from 'react'
import { Link } from 'react-router-dom'

import LogoOne from '../../assets/official_logo.svg'
import { NavBarDiv } from './styles'
import Options from './Options'

export default function NavBar() {
  return (
    <NavBarDiv>
      <Link to="/" >
        <LogoOne width="200" height="120" viewBox="0 0 930.99 466.96"/>
      </Link>
      <Options />
    </NavBarDiv>
  )
}
