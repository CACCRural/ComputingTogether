import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import GlobalStyle from './GlobalStyle'

export default function App() {
  return (
    <Router>
        <GlobalStyle />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  )
}
