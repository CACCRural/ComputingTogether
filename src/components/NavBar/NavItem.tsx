import React from 'react'

import { NavItemDiv, NavLink } from './styles'
import NavItemIcon from '../../assets/icons/folder.svg'


export default function NavItem(props:any) {
  return (
    <NavItemDiv>
      <NavLink href={props.link}>
        <NavItemIcon width="100" height="40" viewBox="228 333 130 105"/>
        <span>
          {props.text}
        </span>
      </NavLink>
    </NavItemDiv>
  )
}