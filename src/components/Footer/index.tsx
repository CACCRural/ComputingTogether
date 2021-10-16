import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div id="div_redes_sociais">
        <h4 className="ui horizontal divider inverted header"> Nossas Redes Sociais</h4>
        <div className ="ui container">
          <a href="https://web.facebook.com/SECCIM/" target="_new"><i className ="big facebook icon"></i></a>
          <a href="https://instagram.com/seccim_ufrrj?igshid=q81oksmreoml" target="_new"><i className="big instagram icon"></i></a>
          <a href="https://twitter.com/seccim_ufrrj" target="_new"><i className="big twitter icon"></i></a>
        </div>
      </div>
      <div id="div_footer">
        <p>© SECCIM-2021 – Universidade Federal Rural do Rio de Janeiro</p>
      </div>
    </footer>
  )
}
