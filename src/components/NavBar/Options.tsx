
import React from 'react'

import { OptionsDiv } from './styles'
import NavItem from './NavItem'

export default function NavOptions(props) {
  return (
    <OptionsDiv>
      <NavItem link="/#schedule" text="Cronograma"/>
      <NavItem link="/#live" text="Live"/>
      <NavItem link="/#lastEvents" text="Eventos Anteriores"/>
    </OptionsDiv>
  )
}