import React from 'react'

import { NavItemDiv, NavLink } from './styles'
import NavItemIcon from '../../assets/icons/folder.svg'


export default function NavItem(props) {
  return (
    <NavItemDiv>
      <NavLink href={props.link}>
        <div>
          <NavItemIcon width="100" height="40" viewBox="228 333 130 105"/>
        </div>
        {props.text}
      </NavLink>
    </NavItemDiv>
  )
}