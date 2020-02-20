import React from 'react'
import './App.css'
import RiskForm from './container/RiskForm'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div>Hello World</div>
      <Router>
        <Switch>
        <Route
            exact
            path={'/'}
            render={props => <RiskForm {...props} />}
          />
        </Switch>
      </Router>
    </div>
  )
}

export default App
