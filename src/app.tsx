import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'

import Home from './components/Home'

export default function App() {
  return (
  <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
  </Router>
  )
}