import React from 'react'

import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

import LogoOne from '../../assets/oficial_logo.svg'

import NavBarDiv from './styles'

export default function NavBar() {
  return (
    <NavBarDiv>
      <Link to="/">
        <LogoOne width="200" height="100" viewBox="120 50 295 150"/>
      </Link>
      <Button variant="contained" color="primary" href="/10">
        Cronograma
      </Button>
      <Link to="/">
        Palestrantes/Ministradores
      </Link>
      <Link to="/" >
        Colaboradores
      </Link>
      <Link to="/">
        Organizadores
      </Link>
    </NavBarDiv>
  )
}
