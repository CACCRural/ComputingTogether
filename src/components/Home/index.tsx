import React from 'react'

import NavBar from '../NavBar'
import Window from '../Window'
import Scheduler from '../Scheduler'
import Live from '../Live'

import { HomeDiv, TextDiv, WindowDiv, CapivaraDiv, Capivara } from './styles'

function Home() {
  return (<>
    <NavBar />
    <HomeDiv>
      <WindowDiv>
        <TextDiv>
          <h2> O que é a Computing Together ?</h2>
          <p>
            A Semana da Computação é o evento anual dos alunos do curso de Ciência da Computação da UFRRJ, que se encontra em sua décima edição.
            Esse ano, nos dedicamos muito para trazer o melhor evento possível, com foco em todos os detalhes. Trazemos atividades e convidados relevantes para que possam aproveitar ao máximo.
            É nosso sincero desejo que apreciem a paixão, o cuidado e o profissionalismo do trabalho realizado que culminou no Evento que presenciarão. Desde já, nosso muito obrigado!
          </p>
        </TextDiv>
        <Window titleSize="160%" title="O que é o maratonou!?" width="100%" height='300px'>
          <p>
          O maratonou! é a iniciativa de estudos de programação competitiva do curso de Ciência da Computação da Rural
          que visa treinar os nossos alunos para competições como a Maratona SBC de Programação e Olimpíada Brasileira de Informática (OBI) que dão acesso a competições internacionais.
          Esse ano, o maratonou! junta-se com o evento, oferecendo duas Maratonas de Programação com estilo similar a Maratona SBC,
          com 10 questões ao todo e 4 horas de duração, uma delas aberta a todo o público, e uma interna como incentivo aos nossos calouros!
          </p>
        </Window>
      </WindowDiv>
      <CapivaraDiv>
        <Capivara />
        <span>Capivaras são fofas e também o mascote da UFRRJ</span>
      </CapivaraDiv>
      <WindowDiv>
        <Window titleSize="140%" title='Por que "Computing Together"?' width='100%' height='350px' contentHeight="70%">
          <p>
            Pra quem não sabe, durante quase uma década o nome da Semana Acadêmica do curso foi Seccim.
            Entretanto, devido ao impacto da pandemia e a necessidade de migrar o que antes acontecia no campus para o formato online,
            nos ocorreu a ideia de atualizar o nome para melhor refletir o momento de distanciamento em que vivemos. Com isso em mente,
            a logo da Computing Together possui dois cursores, simbolizando pessoas diferentes que combinam suas habilidades para atingir um propósito maior em comum.
          </p>
        </Window>
      </WindowDiv>
    </HomeDiv>
    <Scheduler />
    <Live />
  </>)
}

export default Home
