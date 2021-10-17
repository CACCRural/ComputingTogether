import React from 'react'

import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'

export default function Menu() {
  return (
    <div>
      <Link to="/">
        <img src={logo} alt=""/>
      </Link>
      <Button variant="contained" color="primary" href="/#teste">
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
    </div>
  )
}
