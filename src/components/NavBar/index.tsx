import React from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import LogoOne from '../../assets/official_logo.svg'

import NavBarDiv from './styles'

const StyledDiv = styled.div`
  margin-right: auto;
  margin-left: 0.2em;
`

export default function NavBar() {
  return (
    <NavBarDiv>
      <StyledDiv>
        <Link to="/" >
          <LogoOne width="200" height="120" />
        </Link>
      </StyledDiv>
      <Button variant="contained" color="primary" href="/10">
        Cronograma
      </Button>
      <Link to="/">
        Palestrantes/Ministradores
      </Link>
      <Link to="/" >
        Colaboradores
      </Link>
      <Link to="/#div_footer">
        Organizadores
      </Link>
    </NavBarDiv>
  )
}
