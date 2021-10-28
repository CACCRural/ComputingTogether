import React from 'react'

import Footer from '../Footer'
import NavBar from '../NavBar'

import Window from '../Window'
import Scheduler from '../Scheduler'

import { HomeDiv, TextDiv, WindowDiv } from './styles'

function Home() {
  return (<>
    <NavBar />
    <HomeDiv>
      <TextDiv>
        <h2> Lorem ipsum </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Accumsan sit amet nulla facilisi morbi tempus iaculis.
          Morbi tristique senectus et netus et.
          Enim diam vulputate ut pharetra sit amet aliquam id.
          Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque.
          Congue quisque egestas diam in arcu cursus euismod. Luctus venenatis lectus magna fringilla.
          Ligula ullamcorper malesuada proin libero nunc. Suspendisse faucibus interdum posuere lorem ipsum dolor.
          Mauris cursus mattis molestie a iaculis. Nisi vitae suscipit tellus mauris a diam maecenas sed.
          Pellentesque dignissim enim sit amet venenatis urna cursus eget nunc.
          Luctus accumsan tortor posuere ac ut consequat.
          Nisi quis eleifend quam adipiscing vitae proin sagittis nisl.
          Fusce id velit ut tortor pretium viverra suspendisse.
          Volutpat ac tincidunt vitae semper quis lectus nulla at. Molestie nunc non blandit massa enim nec dui nunc.
          Sed libero enim sed faucibus turpis.
        </p>
      </TextDiv>

      <TextDiv>
        <h2> Lorem ipsum </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Accumsan sit amet nulla facilisi morbi tempus iaculis.
          Morbi tristique senectus et netus et.
          Enim diam vulputate ut pharetra sit amet aliquam id.
          Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque.
          Congue quisque egestas diam in arcu cursus euismod. Luctus venenatis lectus magna fringilla.
          Ligula ullamcorper malesuada proin libero nunc. Suspendisse faucibus interdum posuere lorem ipsum dolor.
          Mauris cursus mattis molestie a iaculis. Nisi vitae suscipit tellus mauris a diam maecenas sed.
          Pellentesque dignissim enim sit amet venenatis urna cursus eget nunc.
          Luctus accumsan tortor posuere ac ut consequat.
          Nisi quis eleifend quam adipiscing vitae proin sagittis nisl.
          Fusce id velit ut tortor pretium viverra suspendisse.
          Volutpat ac tincidunt vitae semper quis lectus nulla at. Molestie nunc non blandit massa enim nec dui nunc.
          Sed libero enim sed faucibus turpis.
        </p>
      </TextDiv>

      <WindowDiv>
        <Window title="teste com abacate né" width='100%' height='350px' ContentHeight="70%">
          <p style={{ textAlign: 'justify' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Accumsan sit amet nulla facilisi morbi tempus iaculis.
            Morbi tristique senectus et netus et.
            Enim diam vulputate ut pharetra sit amet aliquam id.
            Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque.
            Congue quisque egestas diam in arcu cursus euismod. Luctus venenatis lectus magna fringilla.
            Ligula ullamcorper malesuada proin libero nunc. Suspendisse faucibus interdum posuere lorem ipsum dolor.
            Mauris cursus mattis molestie a iaculis. Nisi vitae suscipit tellus mauris a diam maecenas sed.
            Pellentesque dignissim enim sit amet venenatis urna cursus eget nunc.
            Luctus accumsan tortor posuere ac ut consequat.
            Nisi quis eleifend quam adipiscing vitae proin sagittis nisl.
            Fusce id velit ut tortor pretium viverra suspendisse.
            Volutpat ac tincidunt vitae semper quis lectus nulla at. Molestie nunc non blandit massa enim nec dui nunc.
            Sed libero enim sed faucibus turpis.
            Luctus accumsan tortor posuere ac ut consequat.
            Nisi quis eleifend quam adipiscing vitae proin sagittis nisl.
            Fusce id velit ut tortor pretium viverra suspendisse.
            Volutpat ac tincidunt vitae semper quis lectus nulla at. Molestie nunc non blandit massa enim nec dui nunc.
            Sed libero enim sed faucibus turpis.
            Luctus accumsan tortor posuere ac ut consequat.
            Nisi quis eleifend quam adipiscing vitae proin sagittis nisl.
            Fusce id velit ut tortor pretium viverra suspendisse.
            Volutpat ac tincidunt vitae semper quis lectus nulla at. Molestie nunc non blandit massa enim nec dui nunc.
            Sed libero enim sed faucibus turpis.
            Luctus accumsan tortor posuere ac ut consequat.
            Nisi quis eleifend quam adipiscing vitae proin sagittis nisl.
            Fusce id velit ut tortor pretium viverra suspendisse.
            Volutpat ac tincidunt vitae semper quis lectus nulla at. Molestie nunc non blandit massa enim nec dui nunc.
            Sed libero enim sed faucibus turpis.
          </p>
        </Window>
        <div style={{paddingTop: '10px', textAlign: 'justify'}}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Accumsan sit amet nulla facilisi morbi tempus iaculis.
            Morbi tristique senectus et netus et.
            Enim diam vulputate ut pharetra sit amet aliquam id.
          </p>
        </div>
      </WindowDiv>
    </HomeDiv>
    <Scheduler />
    <Footer />
  </>)
}

export default Home