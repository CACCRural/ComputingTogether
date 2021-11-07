
import React from 'react'

import { OptionsDiv } from './styles'
import NavItem from './NavItem'

export default function NavOptions() {
  const href = window.location.origin + window.location.pathname + window.location.search

  return (
    <OptionsDiv>
      <NavItem link={`${href}#schedule`} text="Cronograma"/>
      <NavItem link={`${href}#live`} text="Live"/>
    </OptionsDiv>
  )
}