import React from 'react'

import { Link } from 'react-router-dom'

import logo from '../../static/images/logo.png'

export default function Menu() {
  return (
  <div id="menu_principal">
      <Link to="/">
        <img className="nome_menu nome_menu_grande" src={logo} alt=""/>
      </Link>
      <Link to="/" className="btn_menu btn_menu_grande fonte_titulo btn_pc inscreva_button">
      Inscreva-se
      </Link>
      <Link to="/" className="btn_menu btn_menu_grande fonte_titulo btn_pc cronograma_button">
        Cronograma
      </Link>
      <Link to="/" className="btn_menu btn_menu_grande fonte_titulo btn_pc">
        Palestrantes/Ministradores
      </Link>
      <Link to="/" className="btn_menu btn_menu_grande fonte_titulo btn_pc">
        Colaboradores
      </Link>
      <Link to="/" className="btn_menu btn_menu_grande fonte_titulo btn_pc">
        Organizadores
      </Link>
      <Link to="/" className="btn_menu btn_menu_grande fonte_titulo btn_pc pyladies_button">
        Pyladies Rural
      </Link>
      <Link to="/" id="menu_hamburguer" className="btn_menu btn_menu_grande fonte_titulo">
        <i className="bars icon"></i>
      </Link>
    </div>
  )
}
