import React from 'react'

import { NavItemDiv, NavLink } from './styles'
import NavItemIcon from '../../assets/folder.svg'


export default function NavItem(props) {
  return (
    <NavItemDiv>
      <NavLink href={props.link}>
        <NavItemIcon width="100" height="40" viewBox="0 0 100 100"/>
        {props.text}
      </NavLink>
    </NavItemDiv>
  )
}